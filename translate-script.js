require('ts-node/register'); // Register ts-node to compile TS files on the fly

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const yargs = require('yargs');

// Allowed locales
const allowedLocales = ['de', 'es', 'fr', 'pt', 'en'];

const argv = yargs(process.argv.slice(2))
  .option('locales', {
    alias: 'l',
    description: 'Comma separated list of locales (e.g., en,es,de,fr)',
    type: 'string',
    demandOption: true,
  })
  .option('force', {
    alias: 'f',
    description: 'Force update (overwrite JSON)',
    type: 'boolean',
    default: false,
  })
  .help()
  .argv;


// Function to fetch translations via LibreTranslate
const fetchTranslation = async (key, locale) => {
  if (locale === 'en') return key;

  const res = await fetch("https://libretranslate.com/translate", {
    method: "POST",
    body: JSON.stringify({
      q: key,
      source: "en",
      target: locale,
    }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (res.status === 400) {
    console.log(data);
    return '';
  }

  return data.translatedText || ''; 
};

// Validate provided locales
const validateLocales = (locales) => {
  const invalidLocales = locales.filter((locale) => !allowedLocales.includes(locale));
  
  if (invalidLocales.length > 0) {
    console.log(`Invalid locale(s) detected: ${invalidLocales.join(', ')}. Allowed locales are: ${allowedLocales.join(', ')}`);
    process.exit(1);
  }
};

// Extract translatable strings from files
const extractTranslations = (filePaths) => {
  const translations = new Set();

  filePaths.forEach((filePath) => {
    console.log(`Processing file: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf-8');
    const ast = parser.parse(content, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript', 'classProperties', 'privateMethods', 'nullishCoalescingOperator', 'optionalChaining']
    });

    traverse(ast, {
      JSXElement(path) {
        const { node } = path;
        const openingElement = node.openingElement;

        const translateAttr = openingElement.attributes.find(
          (attr) => attr.name && attr.name.name === 'translate' && attr.value && attr.value.value === 'yes'
        );

        if (translateAttr) {
          const text = node.children
            .filter((child) => child.type === 'JSXText')
            .map((child) => child.value.trim())
            .join(' ')
            .trim();

          if (text) {
            translations.add(text);
          }
        }
      },
    });
  });

  return Array.from(translations);
};

// Extract translations from constants.ts
const extractConstantsTranslations = async () => {
  const constants = require('./src/utils/constants');
  const allStrings = [];

  for (let section in constants) {
    if (constants[section] && typeof constants[section] === 'object') {
      for (let key in constants[section]) {
        allStrings.push(constants[section][key]);
      }
    }
  }

  return allStrings;
};

// Update the translation files (including keys for each locale)
const updateTranslationFile = async (translations, locale, forceUpdate) => {
  const outputPath = path.resolve(`src/locales/${locale}.json`);
  
  if (forceUpdate || !fs.existsSync(outputPath)) {
    const newContent = {};

    for (const key of translations) {
      const translatedValue = await fetchTranslation(key, locale);  // Get translated value
      newContent[key] = translatedValue;  // Store the translated value
    }

    console.log('Writing file for:', locale);
    fs.writeFileSync(outputPath, JSON.stringify(newContent, null, 2), 'utf-8');
    console.log(`Overwritten ${locale}.json with new content.`);
  } else {
    console.log('File exists:', locale);
    let existingContent = {};

    try {
      existingContent = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));
    } catch (err) {
      existingContent = {};
    }

    let updated = false;

    for (const key of translations) {
      if (existingContent[key] === undefined) {
        const translatedValue = await fetchTranslation(key, locale);  // Get translated value
        existingContent[key] = translatedValue;  // Store the translated value
        updated = true;
      }
    }

    // Only update if new keys were added
    if (updated) {
      fs.writeFileSync(outputPath, JSON.stringify(existingContent, null, 2), 'utf-8');
      console.log(`Added missing keys to ${locale}.json`);
    }
  }
};

const run = async () => {
  const locales = argv.locales ? argv.locales.split(',') : ['en'];
  validateLocales(locales);

  const pattern = path.resolve('src/**/*.{js,jsx,ts,tsx}');
  const files = glob.sync(pattern);

  if (files.length === 0) {
    console.log('No files found matching the pattern.');
    return;
  }

  console.log(`Found ${files.length} files to process.`);

  const translations = extractTranslations(files);
  const constantsTranslations = await extractConstantsTranslations();

  // Combine extracted translations with constants translations
  const allTranslations = Array.from(new Set([
    ...translations,
    ...constantsTranslations
  ]));

  if (allTranslations.length === 0) {
    console.log('No translations found.');
    return;
  }

  // Update the translation files for all locales (not just 'en')
  await Promise.all(locales.map((locale) => updateTranslationFile(allTranslations, locale, argv.force)));

  console.log('Script execution completed.');
};

run();

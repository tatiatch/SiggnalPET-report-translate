### Please check out to the branch named `translations` and follow the Readme instructions

### All the changes made to the application are stored on `translations` branch, to easily view them please visit the PR https://github.com/tatiatch/SiggnalPET-report-translate/pull/1/files

### The most important files are
1. utils/translate.ts
2. utils/translateJSX.js
3. src/components/translateWrapper.jsx
4. translate-script.js

`translate-script.js` is responsible for generating all the translations. It is optimized to make sure that no extra requests are made to the libretranslate API. The script stores translations inside .json files and if translation already exists the API call is skipped

`translate.ts, translateJSX.js and translateWrapper.jsx` work together to target the elements with `translate="yes"` properties and provide the translations

## Improvements if I had more time
1. translate-script.js is very big and hard to read, polish up the code to make it efficient and easier to understand
2. Instead of having `TranslateWrapper` create a High-Order-Component which will be used when exporting or importing a component and doesn't require to modify the component itself. Now we have the wrapper which requires to modify the component and wrap the component inside it
3. `TranslateWrapper` is not efficient, it only targets a few level of nesting and if element that needs to be transleted is very deeply nested in the components tree it won't be detected
4. Use the NextJS application instead since I could use server-side-rendering to do the translations logic

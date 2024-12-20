import en from '../locales/en.json';
import es from '../locales/es.json';
import de from '../locales/de.json';
import fr from '../locales/fr.json';
import pt from '../locales/pt.json';


interface TranslationMap {
  [key: string]: string;
}

const translations: Record<string, TranslationMap> = { en, es, de, fr, pt };

export const translateText = (key: string, locale: keyof typeof translations): string => {
  return translations[locale]?.[key] || key;
};

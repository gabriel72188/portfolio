import { es } from './es';
import { en } from './en';

export const languages = { es, en };
export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return 'es';
}

export function useTranslations(lang: Lang) {
  return languages[lang];
}

export function getLocalePath(lang: Lang, path: string = '') {
  if (lang === 'es') return `/${path}`;
  return `/${lang}/${path}`;
}

export const siteUrl = 'https://orbizy.app';

export const languageAlternates = {
  'pt-BR': siteUrl,
  en: `${siteUrl}/en`,
  'x-default': siteUrl,
};

export function getPageUrl(locale: string) {
  return locale === 'pt' ? siteUrl : `${siteUrl}/${locale}`;
}

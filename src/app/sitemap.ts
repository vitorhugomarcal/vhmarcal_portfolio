import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getPageUrl, languageAlternates } from '../lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: getPageUrl(locale),
    alternates: { languages: languageAlternates },
  }));
}

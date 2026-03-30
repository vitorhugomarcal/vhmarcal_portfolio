import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://orbizy.app'
  const locales = ['pt', 'en']

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          pt: `${baseUrl}/pt`,
          en: `${baseUrl}/en`,
        },
      },
    },
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          pt: `${baseUrl}/pt`,
          en: `${baseUrl}/en`,
        },
      },
    }))
  ]
}

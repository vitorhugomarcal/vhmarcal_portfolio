import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://orbizy.app'
  const locales = ['pt', 'en']

  return locales.map((locale) => {
    const isDefault = locale === 'pt'
    const url = isDefault ? baseUrl : `${baseUrl}/${locale}`

    return {
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: isDefault ? 1 : 0.8,
      alternates: {
        languages: {
          pt: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    }
  })
}

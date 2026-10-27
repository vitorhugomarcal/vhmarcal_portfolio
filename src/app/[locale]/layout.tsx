import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { getPageUrl, languageAlternates, siteUrl as baseUrl } from '../../lib/seo';

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: '../../../public/fonts/inter-latin.woff2',
  display: 'swap',
  weight: '100 900',
  style: 'normal',
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: "%s | Vitor Hugo Marçal",
    },
    description: t('description'),
    keywords: ["Vitor Hugo Marçal", "FullStack Developer", "React Developer", "Node.js Expert", "Mobile Developer", "React Native", "Portfolio", "Software Engineer", "São Paulo", "Brazil", "Orbizy", "IPSEC", "Web Performance", "AI-Integrated Development"],
    authors: [{ name: "Vitor Hugo Marçal", url: baseUrl }],
    creator: "Vitor Hugo Marçal",
    publisher: "Vitor Hugo Marçal",
    openGraph: {
      type: "website",
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      url: getPageUrl(locale),
      title: t('title'),
      description: t('description'),
      siteName: t('siteName'),
      images: [
        {
          url: "/eu.jpg",
          alt: "Vitor Hugo Marçal - FullStack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
      images: ["/eu.jpg"],
    },
    alternates: {
      canonical: getPageUrl(locale),
      languages: languageAlternates,
    },
    icons: {
      icon: [
        { url: '/favicon-light-64.png', sizes: '64x64', type: 'image/png', media: '(prefers-color-scheme: light)' },
        { url: '/favicon-dark-64.png', sizes: '64x64', type: 'image/png', media: '(prefers-color-scheme: dark)' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const [messages, t, tHero] = await Promise.all([
    getMessages({locale}),
    getTranslations({locale, namespace: 'Metadata'}),
    getTranslations({locale, namespace: 'Hero'}),
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    "name": "Vitor Hugo Marçal",
    "jobTitle": tHero('fullstack'),
    "url": baseUrl,
    "image": `${baseUrl}/eu.jpg`,
    "sameAs": [
      "https://www.linkedin.com/in/vhmarcal",
      "https://github.com/vitorhugomarcal",
      "https://instagram.com/vitorhugomarcal"
    ],
    "description": t('description'),
    "knowsAbout": ["React", "React Native", "Node.js", "TypeScript", "JavaScript", "Tailwind CSS", "Next.js", "PostgreSQL", "MongoDB", "IA-Integrated Workflow", "Software Architecture"],
    "knowsLanguage": [
      { "@type": "Language", "name": "Portuguese", "alternateName": "pt" },
      { "@type": "Language", "name": "English", "alternateName": "en" }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Orbizy",
      "url": "https://orbizy.app"
    }
    }, {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": baseUrl,
      "name": t('siteName'),
      "inLanguage": ["pt-BR", "en"],
      "author": {"@id": `${baseUrl}/#person`}
    }, {
      "@type": "ProfilePage",
      "@id": `${getPageUrl(locale)}#profile`,
      "url": getPageUrl(locale),
      "name": t('title'),
      "description": t('description'),
      "inLanguage": locale === 'pt' ? 'pt-BR' : 'en',
      "isPartOf": {"@id": `${baseUrl}/#website`},
      "mainEntity": {"@id": `${baseUrl}/#person`}
    }]
  };

  return (
    <html lang={locale === 'pt' ? 'pt-BR' : 'en'}>
      <head>
        <noscript><style>{'[data-reveal] { opacity: 1 !important; transform: none !important; }'}</style></noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


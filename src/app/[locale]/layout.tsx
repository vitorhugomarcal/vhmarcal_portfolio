import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://orbizy.app";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Hero' });

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Vitor Hugo Marçal | Senior FullStack Developer",
      template: "%s | Vitor Hugo Marçal",
    },
    description: t('description'),
    keywords: ["Vitor Hugo Marçal", "FullStack Developer", "React Developer", "Node.js Expert", "Mobile Developer", "React Native", "Portfolio", "Software Engineer", "São Paulo", "Brazil", "Orbizy", "IPSEC"],
    authors: [{ name: "Vitor Hugo Marçal", url: baseUrl }],
    creator: "Vitor Hugo Marçal",
    openGraph: {
      type: "website",
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      url: baseUrl,
      title: "Vitor Hugo Marçal | FullStack Developer",
      description: t('description'),
      siteName: "Vitor Hugo Marçal Portfolio",
      images: [
        {
          url: "/eu.jpg",
          width: 1200,
          height: 630,
          alt: "Vitor Hugo Marçal - FullStack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Vitor Hugo Marçal | FullStack Developer",
      description: t('description'),
      images: ["/eu.jpg"],
    },
    alternates: {
      canonical: baseUrl,
    },
    icons: {
      icon: [
        { url: '/favicon-light.png', media: '(prefers-color-scheme: light)' },
        { url: '/favicon-dark.png', media: '(prefers-color-scheme: dark)' },
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
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vitor Hugo Marçal",
    "jobTitle": "Senior FullStack Developer",
    "url": baseUrl,
    "sameAs": [
      "https://www.linkedin.com/in/vhmarcal",
      "https://github.com/vitorhugomarcal",
      "https://instagram.com/vitorhugomarcal"
    ],
    "description": "Developer specializing in React.js and React Native with 6+ years of experience building exceptional digital products.",
    "knowsAbout": ["React", "React Native", "Node.js", "TypeScript", "JavaScript", "Tailwind CSS", "Next.js", "PostgreSQL", "MongoDB"]
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


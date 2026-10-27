'use client';

import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import { getPathname, usePathname } from '../i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const nextLocale = locale === 'pt' ? 'en' : 'pt';
  const [hash, setHash] = useState('');
  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  return (
    <a href={getPathname({ locale: nextLocale, href: pathname }) + hash}
      hrefLang={nextLocale === 'pt' ? 'pt-BR' : 'en'} lang={nextLocale === 'pt' ? 'pt-BR' : 'en'}
      aria-label={locale === 'pt' ? 'Switch to English' : 'Mudar para português'} className="language-switcher">
      <span className={locale === 'pt' ? 'current-language' : undefined} lang="pt-BR">PT</span>
      <span className="language-separator" aria-hidden="true">/</span>
      <span className={locale === 'en' ? 'current-language' : undefined} lang="en">EN</span>
    </a>
  );
}

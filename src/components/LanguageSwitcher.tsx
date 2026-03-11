'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../i18n/routing';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'pt' ? 'en' : 'pt';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed top-8 right-8 z-50 bg-white/80 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-medium text-slate-700"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-lg">{locale === 'pt' ? '🇺🇸' : '🇧🇷'}</span>
      <span>{locale === 'pt' ? 'English' : 'Português'}</span>
    </motion.button>
  );
}

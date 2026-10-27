'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { SectionLink } from './SectionLink';

const sections = [
  { id: 'projects', navigation: 'projects' },
  { id: 'about', navigation: 'about' },
  { id: 'more-projects', navigation: 'projects' },
  { id: 'certificates', navigation: null },
  { id: 'contact', navigation: 'contact' },
] as const;

export function PortfolioHeader() {
  const t = useTranslations('Opening');
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = sections.map(section => ({ ...section, element: document.getElementById(section.id) }));
    let frame = 0;
    function update() {
      frame = 0;
      setScrolled(window.scrollY > 24);
      const readingLine = Math.min(window.innerHeight * 0.3, 180);
      let current: string | null = null;
      for (const target of targets) {
        if (target.element && target.element.getBoundingClientRect().top <= readingLine) current = target.navigation;
      }
      setActive(current);
    }
    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }
    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="header-slot" id="top">
      <SectionLink className="skip-link" href="#projects">{t('skip')}</SectionLink>
      <div className={`header-surface${scrolled ? ' is-scrolled' : ''}`}>
        <header className="portfolio-header portfolio-container">
          <SectionLink className="wordmark" href="#top" aria-label="Vitor Hugo Marçal">vhm<span aria-hidden="true">.</span></SectionLink>
          <nav className="portfolio-nav" aria-label={t('navigation')}>
            <SectionLink href="#projects" aria-current={active === 'projects' ? 'location' : undefined}>{t('navProjects')}</SectionLink>
            <SectionLink href="#about" aria-current={active === 'about' ? 'location' : undefined}>{t('navAbout')}</SectionLink>
            <SectionLink href="#contact" aria-current={active === 'contact' ? 'location' : undefined}>{t('navContact')}<ArrowUpRight size={13} aria-hidden="true" /></SectionLink>
          </nav>
          <LanguageSwitcher />
        </header>
      </div>
    </div>
  );
}

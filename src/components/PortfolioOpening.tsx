'use client';

import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { m } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { SectionLink } from './SectionLink';
import { useReveal } from './useReveal';

const products = [
  { key: 'sales', title: 'Orbizy Sales', image: '/sales-portfolio.webp', href: 'https://sales.orbizy.app', tags: ['SaaS', 'CRM', 'Enterprise'] },
  { key: 'invoice', title: 'Orbizy Invoice', image: '/invoice-portfolio.webp', href: 'https://invoice.orbizy.app', tags: ['SaaS', 'ERP', 'B2B'] },
  { key: 'play', title: 'Orbizy Play', image: '/play-portfolio.webp', href: 'https://play.orbizy.app', tags: ['iOS', 'macOS', 'tvOS'] },
] as const;

export function PortfolioOpening() {
  const t = useTranslations('Opening');
  const reveal = useReveal();

  return (
    <div className="portfolio-opening">
      <section className="portfolio-hero portfolio-container" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <m.p className="eyebrow hero-eyebrow" {...reveal()}><span className="accent-line" aria-hidden="true" />{t('role')}</m.p>
          <m.h1 id="hero-heading" {...reveal(0.06)}>
            {t('headline1')}<br />{t('headline2')}<br /><span className="hero-headline-muted">{t('headline3')}</span><span className="headline-dot">.</span>
          </m.h1>
          <m.div {...reveal(0.12)}>
            <p className="hero-description">{t.rich('intro', { name: (chunks) => <strong>{chunks}</strong> })}</p>
            <div className="hero-actions">
              <SectionLink href="#projects" className="portfolio-button button-primary">{t('explore')}<ArrowDownRight size={18} aria-hidden="true" /></SectionLink>
              <a href="https://wa.me/5511946202703" target="_blank" rel="noopener noreferrer" className="portfolio-button button-text">{t('chat')}<ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </m.div>
          <m.div className="hero-credentials" {...reveal(0.18)}>
            <div className="hero-experience"><span>6+</span><p>{t('experience1')}<br />{t('experience2')}</p></div>
            <div className="hero-specialties"><span>React · React Native · Node.js</span><p>{t('specialties')}</p></div>
          </m.div>
        </div>
        <m.figure className="hero-portrait" {...reveal(0.1)}>
          <div className="portrait-frame">
            <img src="/portrait-portfolio.webp" srcSet="/portrait-portfolio-480.webp 480w, /portrait-portfolio.webp 800w" sizes="(max-width: 760px) calc(100vw - 40px), (max-height: 800px) 348px, 460px" alt="Vitor Hugo Marçal" width={800} height={1097} fetchPriority="high" decoding="async" />
            <span className="portrait-index" aria-hidden="true">01 / VHM</span>
            <div className="portrait-caption"><span>Vitor Hugo Marçal</span><span>{t('portraitCaption')}</span></div>
          </div>
          <figcaption><span>{t('portraitNote')}</span><ArrowDownRight size={18} aria-hidden="true" /></figcaption>
        </m.figure>
      </section>
      <div className="hero-bottom portfolio-container">
        <SectionLink href="#projects" className="scroll-link"><ArrowDown size={14} aria-hidden="true" />{t('scroll')}</SectionLink>
        <div className="hero-socials">
          <a href="https://github.com/vitorhugomarcal" target="_blank" rel="noopener noreferrer"><Github size={15} aria-hidden="true" />GitHub<ArrowUpRight size={12} aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/vhmarcal" target="_blank" rel="noopener noreferrer"><Linkedin size={15} aria-hidden="true" />LinkedIn<ArrowUpRight size={12} aria-hidden="true" /></a>
        </div>
      </div>
      <section id="projects" className="selected-projects portfolio-container" aria-labelledby="projects-heading">
        <m.div className="projects-heading" {...reveal()}>
          <div><p className="eyebrow section-index">01 — {t('workLabel')}</p><h2 id="projects-heading">{t('workTitle')}<span className="headline-dot">.</span></h2></div>
          <p>{t('workIntro')}</p>
        </m.div>
        <div className="selected-project-grid">
          {products.map((product, index) => (
            <m.article key={product.key} className={`selected-project project-${product.key}`} {...reveal()}>
              <a className="project-visual" href={product.href} target="_blank" rel="noopener noreferrer" aria-label={`${t('visit')} ${product.title}`}>
                <span className="project-number" aria-hidden="true">0{index + 1}</span>
                <img src={product.image}
                  srcSet={`${product.image.replace('.webp', '-800.webp')} 800w, ${product.image} ${product.key === 'invoice' ? 1400 : 1600}w`}
                  sizes={product.key === 'sales'
                    ? '(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 60vw, 764px'
                    : '(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) calc(50vw - 52px), (max-width: 1312px) calc(50vw - 72px), 584px'}
                  alt={t(`${product.key}.imageAlt`)} width={product.key === 'invoice' ? 1400 : 1600} height={product.key === 'invoice' ? 1050 : 900} loading="lazy" decoding="async" />
                <span className="project-open" aria-hidden="true"><ArrowUpRight size={23} /></span>
              </a>
              <div className="selected-project-info">
                <div className="project-title-row"><h3><a href={product.href} target="_blank" rel="noopener noreferrer">{product.title}</a></h3><span className="project-category">{t(`${product.key}.category`)}</span></div>
                <p className="project-summary">{t(`${product.key}.description`)}</p>
                <div className="project-details"><ul className="project-tags" role="list" aria-label={t('categories')}>{product.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><a className="project-visit" href={product.href} target="_blank" rel="noopener noreferrer">{t('visit')}<ArrowUpRight size={16} aria-hidden="true" /></a></div>
              </div>
            </m.article>
          ))}
        </div>
        <SectionLink className="all-work-link" href="#more-projects">{t('moreWork')}<ArrowRight size={17} aria-hidden="true" /></SectionLink>
      </section>
    </div>
  );
}

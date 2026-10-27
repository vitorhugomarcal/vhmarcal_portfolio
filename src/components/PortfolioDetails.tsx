'use client';

import { ArrowUp, ArrowUpRight, ArrowRight, Code2, Layers3, PenTool, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { AnimatedSection } from './AnimatedSection';
import { Certificate } from './Certificate';
import { Project } from './Project';
import { SectionLink } from './SectionLink';

const expertise = [
  { key: 'interfaces', icon: PenTool },
  { key: 'development', icon: Code2 },
  { key: 'architecture', icon: Layers3 },
] as const;

const stack = ['React', 'React Native', 'TypeScript', 'Node.js', 'SQL / NoSQL', 'Docker', 'Figma'];

const certificates = [
  { key: 'reactNative', title: 'React Native', hours: 75, id: '047941f3-2319-4967-911e-abc30bead2fb' },
  { key: 'specialize', title: 'Especializar', hours: 11, id: '33b340f5-5e2d-449b-86e2-53dec1b13822' },
  { key: 'discover', title: 'Fundamentar', hours: 28, id: '5809b945-957d-466a-8213-344a3850995f' },
  { key: 'expertReact', title: 'NLW Expert · React', hours: 5, id: '55d3a2ef-155f-4e3b-bf92-feb103601ff1' },
  { key: 'expertNative', title: 'NLW Expert · React Native', hours: 5, id: 'e315f246-75ae-4463-a379-bc39548991f9' },
] as const;

interface SectionHeadingProps {
  id: string;
  index: string;
  label: string;
  title: string;
  description?: string;
}

function SectionHeading({ id, index, label, title, description }: SectionHeadingProps) {
  return (
    <AnimatedSection className="projects-heading detail-heading">
      <div>
        <p className="eyebrow section-index">{index} — {label}</p>
        <h2 id={id}>{title}<span className="headline-dot">.</span></h2>
      </div>
      {description ? <p>{description}</p> : null}
    </AnimatedSection>
  );
}

export function PortfolioDetails() {
  const t = useTranslations('Details');
  const about = useTranslations('About');
  const projects = useTranslations('Projects');

  return (
    <div className="portfolio-details">
      <section id="about" className="portfolio-container detail-section about-section" aria-labelledby="about-heading">
        <SectionHeading id="about-heading" index="02" label={t('aboutLabel')} title={t('aboutTitle')} />
        <div className="about-grid">
          <AnimatedSection className="about-story">
            <p className="about-lead">{about('intro')}</p>
            <p className="about-description">{about('outro')}</p>
            <p className="eyebrow stack-label">{t('stackLabel')}</p>
            <ul className="about-stack" role="list" aria-label={t('stackLabel')}>
              {stack.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
          </AnimatedSection>
          <AnimatedSection className="expertise-list" delay={0.08}>
            {expertise.map(({ key, icon: Icon }) => (
              <div className="expertise-item" key={key}>
                <Icon size={20} strokeWidth={1.4} aria-hidden="true" />
                <div><h3>{t(`${key}.title`)}</h3><p>{t(`${key}.description`)}</p></div>
              </div>
            ))}
          </AnimatedSection>
        </div>
        <AnimatedSection className="ai-workflow">
          <div className="ai-workflow-intro">
            <span className="ai-icon"><Sparkles size={20} strokeWidth={1.4} aria-hidden="true" /></span>
            <h3>{t('aiTitle')}</h3>
            <p>{about('aiSubtitle')}</p>
          </div>
          <ul className="ai-workflow-list" role="list">
            {[1, 2, 3, 4, 5, 6].map(index => (
              <li key={index}><span aria-hidden="true">0{index}</span>{about(`ai${index}`)}</li>
            ))}
          </ul>
        </AnimatedSection>
        <AnimatedSection className="about-quote">
          <span aria-hidden="true">“</span><blockquote>{about('quote')}</blockquote>
        </AnimatedSection>
      </section>

      <section id="more-projects" className="portfolio-container detail-section" aria-labelledby="more-projects-heading">
        <SectionHeading id="more-projects-heading" index="03" label={t('moreLabel')} title={projects('other')} description={t('moreIntro')} />
        <div className="selected-project-grid more-project-grid">
          <Project index="04" title="T.A. Personal" image="/ta-portfolio.webp" width={1200} height={900} imageAlt={t('taImageAlt')}
            subcontent={projects('ta.sub')} content={projects('ta.desc')}
            links={[{ href: 'https://bit.ly/TAPersonal_PlayStore', label: 'Android' }, { href: 'https://bit.ly/TAPersonal_AppStore', label: 'iOS' }]} />
          <Project index="05" title="Habits" image="/habits-portfolio.webp" width={1024} height={500} imageAlt={t('habitsImageAlt')}
            subcontent={projects('habits.sub')} content={projects('habits.desc')}
            links={[{ href: 'https://bit.ly/vhmarcalhabits', label: 'Android' }]} />
        </div>
        <a className="all-work-link" href="https://github.com/vitorhugomarcal" target="_blank" rel="noopener noreferrer">
          {projects('github')}<ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </section>

      <section id="certificates" className="portfolio-container detail-section certificates-section" aria-labelledby="certificates-heading">
        <SectionHeading id="certificates-heading" index="04" label={t('certificatesLabel')} title={t('certificatesTitle')} description={t('certificatesIntro')} />
        <div className="certificate-list">
          {certificates.map((certificate, index) => (
            <Certificate key={certificate.id} index={`0${index + 1}`} title={certificate.title}
              hours={`${certificate.hours}h`} provider="Rocketseat" content={t(`courses.${certificate.key}`)}
              image={`/certificate-${index + 1}.webp`} originalImage={`/c${index + 1}.png`}
              link={`https://app.rocketseat.com.br/certificates/${certificate.id}`}
              label={t('viewCertificate')} topicsLabel={t('courseTopics')} imageLabel={t('certificateImage')} />
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-heading">
        <div className="portfolio-container">
          <AnimatedSection className="contact-content">
            <p className="eyebrow section-index">05 — {t('contactLabel')}</p>
            <div className="contact-heading-row">
              <h2 id="contact-heading">{t('contactTitle')}<span className="headline-dot">.</span></h2>
              <ArrowUpRight className="contact-display-arrow" size={90} strokeWidth={1} aria-hidden="true" />
            </div>
            <p className="contact-description">{t('contactIntro')}</p>
            <div className="contact-actions">
              <a className="portfolio-button button-primary" href="https://wa.me/5511946202703" target="_blank" rel="noopener noreferrer">
                {t('whatsapp')}<ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="contact-email" href="mailto:vitorhugomarcal@gmail.com">
                <span>{t('emailLabel')}</span><span>vitorhugomarcal@gmail.com<ArrowRight size={17} aria-hidden="true" /></span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export function PortfolioFooter() {
  const t = useTranslations('Details');
  const footer = useTranslations('Footer');
  return (
    <footer className="portfolio-footer portfolio-container">
      <div className="footer-top-row">
        <SectionLink className="wordmark" href="#top" aria-label={t('backToTop')}>vhm<span aria-hidden="true">.</span></SectionLink>
        <nav className="footer-socials" aria-label={t('socialLinks')}>
          {[
            { label: 'GitHub', href: 'https://github.com/vitorhugomarcal' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vhmarcal' },
            { label: 'Instagram', href: 'https://instagram.com/vitorhugomarcal' },
          ].map(social => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}<ArrowUpRight size={13} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom-row">
        <p>{footer('copyright')} · 2026</p>
        <SectionLink href="#top">{t('backToTop')}<ArrowUp size={14} aria-hidden="true" /></SectionLink>
      </div>
    </footer>
  );
}

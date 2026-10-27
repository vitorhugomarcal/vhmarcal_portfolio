'use client';

import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface Props {
  index: string;
  title: string;
  hours: string;
  provider: string;
  content: string;
  image: string;
  originalImage: string;
  link: string;
  label: string;
  topicsLabel: string;
  imageLabel: string;
}

export function Certificate({ index, title, hours, provider, content, image, originalImage, link, label, topicsLabel, imageLabel }: Props) {
  return (
    <AnimatedSection>
      <article className="certificate-row">
        <span className="certificate-index" aria-hidden="true">{index}</span>
        <div className="certificate-name"><h3>{title}</h3><p>{provider}<span aria-hidden="true"> / </span><span>{hours}</span></p></div>
        <details className="certificate-topics">
          <summary aria-label={topicsLabel + ' · ' + title}>{topicsLabel}<ChevronDown size={15} aria-hidden="true" /></summary>
          <div className="certificate-expanded">
            <p>{content}</p>
            <a href={originalImage} target="_blank" rel="noopener noreferrer" aria-label={imageLabel + ' · ' + title}>
              <img src={image} srcSet={`${image.replace('.webp', '-360.webp')} 360w, ${image} 720w`} sizes="(max-width: 760px) 240px, 200px" alt={imageLabel + ' · ' + title} width={720} height={441} loading="lazy" decoding="async" />
            </a>
          </div>
        </details>
        <a className="certificate-verify" href={link} target="_blank" rel="noopener noreferrer" aria-label={label + ' · ' + title}>
          {label}<ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </article>
    </AnimatedSection>
  );
}

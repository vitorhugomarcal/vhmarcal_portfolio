'use client';

import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface Props {
  index: string;
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  subcontent: string;
  links: [{ href: string; label: string }, ...{ href: string; label: string }[]];
}

export function Project({ index, image, imageAlt, width, height, title, content, subcontent, links }: Props) {
  return (
    <AnimatedSection>
      <article className="selected-project mobile-project">
        <a className="project-visual" href={links[0].href} target="_blank" rel="noopener noreferrer" aria-label={title + ' · ' + links[0].label}>
          <span className="project-number" aria-hidden="true">{index}</span>
          <img src={image} srcSet={`${image.replace('.webp', '-600.webp')} 600w, ${image} ${width}w`}
            sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) calc(50vw - 55px), (max-width: 1312px) calc(50vw - 75px), 581px"
            alt={imageAlt} width={width} height={height} loading="lazy" decoding="async" />
          <span className="project-open" aria-hidden="true"><ArrowUpRight size={23} /></span>
        </a>
        <div className="selected-project-info">
          <div className="project-title-row"><h3>{title}</h3><span className="project-category">{subcontent}</span></div>
          <p className="project-summary">{content}</p>
          <div className="mobile-project-links">
            {links.map(link => <a key={link.href} className="project-visit" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}
          </div>
        </div>
      </article>
    </AnimatedSection>
  );
}

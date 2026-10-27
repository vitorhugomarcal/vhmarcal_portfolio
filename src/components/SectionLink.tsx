'use client';

import type { AnchorHTMLAttributes, MouseEvent } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: `#${string}` };

// Keep native hashes and history while moving keyboard focus to the destination.
export function SectionLink({ onClick, ...props }: Props) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const section = document.getElementById(decodeURIComponent(event.currentTarget.hash.slice(1)));
    const destination = section?.querySelector<HTMLElement>('h1, h2') ?? section;
    if (destination) {
      // The browser performs its own hash focus first; focus the heading afterwards.
      window.requestAnimationFrame(() => {
        if (!destination.isConnected) return;
        destination.setAttribute('tabindex', '-1');
        destination.focus({ preventScroll: true });
      });
    }
  }
  return <a {...props} onClick={handleClick} />;
}

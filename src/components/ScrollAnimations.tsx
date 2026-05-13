'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // ── Selectors to animate ──────────────────────────────────────
    const SELECTORS = [
      // Section-level blocks
      'section:not(.no-anim)',
      // Individual headings outside sections
      'h2:not(.no-anim)',
      // Cards & grid children
      '.grid > *',
    ].join(', ');

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS));

    // Skip elements already above the fold or inside the hero slider
    const threshold = window.innerHeight * 0.92;

    els.forEach((el) => {
      // Don't animate the hero slider section
      if (el.closest('[data-hero]')) return;
      // Don't re-init
      if (el.dataset.sr) return;
      el.dataset.sr = '1';

      const rect = el.getBoundingClientRect();
      if (rect.top < threshold) {
        // Already visible on load — no animation needed
        return;
      }

      el.style.opacity = '0';
      el.style.transform = 'translateY(32px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    });

    // ── Stagger grid children ─────────────────────────────────────
    document.querySelectorAll<HTMLElement>('.grid').forEach((grid) => {
      const children = Array.from(grid.children) as HTMLElement[];
      children.forEach((child, i) => {
        if (child.dataset.sr === '1' && child.style.opacity === '0') {
          child.style.transitionDelay = `${i * 0.1}s`;
        }
      });
    });

    // ── Intersection Observer ─────────────────────────────────────
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => {
      if (el.dataset.sr === '1' && el.style.opacity === '0') {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

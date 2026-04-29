'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Agua Caliente', href: '/agua-caliente' },
  { label: 'Piscinas', href: '/calentamiento-piscinas' },
  { label: 'Calefacción', href: '/calefaccion' },
  { label: 'Chimeneas', href: '/chimeneas' },
  { label: 'Energías Sostenibles', href: '/energias-sostenibles' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Mantenimiento', href: '/servicio-de-mantenimiento' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: 'var(--azul-oscuro)' }}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <span
            className="text-white font-extrabold text-xl tracking-widest uppercase"
            style={{ letterSpacing: '3px' }}
          >
            <span style={{ color: 'var(--azul-cielo)' }}>UNI</span>
            <span style={{ color: 'var(--dorado)' }}>CTECH</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors rounded"
              style={{
                color: pathname === l.href ? 'var(--dorado)' : 'rgba(255,255,255,0.9)',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--dorado)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = pathname === l.href ? 'var(--dorado)' : 'rgba(255,255,255,0.9)'; }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden px-4 pb-4 flex flex-col gap-1" style={{ backgroundColor: 'var(--azul-oscuro)' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-semibold uppercase tracking-wide border-b border-white/10"
              style={{ color: pathname === l.href ? 'var(--dorado)' : 'rgba(255,255,255,0.9)' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Agua Caliente', href: '/agua-caliente' },
  { label: 'Calentamiento Piscinas', href: '/calentamiento-piscinas' },
  { label: 'Calefacción', href: '/calefaccion' },
  { label: 'Chimeneas', href: '/chimeneas' },
  { label: 'Energias Sostenibles', href: '/energias-sostenibles' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Mantenimiento', href: '/servicio-de-mantenimiento' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">

      {/* ── Top bar ── */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="w-full px-4 sm:px-10 flex items-center justify-between h-10">

          {/* Izquierda: dirección + teléfono (desktop) | solo teléfono (móvil) */}
          <div className="flex items-center gap-7 text-gray-600 text-[13px] font-semibold">
            {/* Dirección — solo desktop */}
            <span className="hidden md:flex items-center gap-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e63012" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              AV. Calle 100 # 60-04
            </span>
            {/* Teléfono — siempre visible */}
            <a href="tel:+576015318327" className="flex items-center gap-2" style={{ textDecoration: 'none', color: 'inherit' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e63012" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.86 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.61 5.61l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              (601) 531 8327
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center gap-1">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"
              className="flex items-center justify-center w-7 h-7 text-white text-xs font-bold"
              style={{ backgroundColor: '#1877f2' }}>
              f
            </a>
            <a href="https://www.instagram.com/unictech_sas/?utm_medium=copy_link" target="_blank" rel="noreferrer" aria-label="Instagram"
              className="flex items-center justify-center w-7 h-7 text-white"
              style={{ backgroundColor: '#1c1c1e' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"
              className="flex items-center justify-center w-7 h-7 text-white"
              style={{ backgroundColor: '#ff0000' }}>
              <svg width="14" height="10" viewBox="0 0 24 17" fill="white">
                <path d="M23.495 2.205a3.02 3.02 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.07a3.02 3.02 0 0 0-2.122 2.136C0 4.073 0 8 0 8s0 3.927.505 5.795a3.02 3.02 0 0 0 2.122 2.136C4.495 16 12 16 12 16s7.505 0 9.373-.069a3.02 3.02 0 0 0 2.122-2.136C24 11.927 24 8 24 8s0-3.927-.505-5.795zM9.545 11.273V4.727L15.818 8l-6.273 3.273z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <div className="w-full" style={{ backgroundColor: 'var(--azul-oscuro)', borderBottom: '4px solid #e63012' }}>
        <div className="w-full px-20 flex items-center justify-between h-[96px]">

          {/* Logo — imagen completa con ícono + texto */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Unictech SAS – Soluciones de confort"
              width={220}
              height={72}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav — Roboto Bold 15px white */}
          <nav className="hidden xl:flex items-center" style={{ fontFamily: "'Roboto', sans-serif" }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-3 font-bold transition-colors whitespace-nowrap"
                style={{ color: pathname === l.href ? '#e63012' : 'white', fontFamily: "'Roboto', sans-serif", fontSize: '15px' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#e63012'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = pathname === l.href ? '#e63012' : 'white'; }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden text-white p-2 flex flex-col gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="xl:hidden px-10 pb-4 flex flex-col" style={{ backgroundColor: 'var(--azul-oscuro)', fontFamily: "'Roboto', sans-serif" }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 font-bold border-b border-white/10"
                style={{ color: pathname === l.href ? '#e63012' : 'white', fontFamily: "'Roboto', sans-serif", fontSize: '15px' }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

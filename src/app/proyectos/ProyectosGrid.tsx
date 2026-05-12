'use client';

import { useState } from 'react';
import Link from 'next/link';
import { proyectos, categoryColors, type Categoria } from './data';

const categorias: Categoria[] = ['Todas', 'Calderas', 'Calefacción', 'Calentadores', 'Chimeneas', 'Colectores Solares'];

export default function ProyectosGrid() {
  const [selected, setSelected] = useState<Categoria>('Todas');
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = selected === 'Todas' ? proyectos : proyectos.filter((p) => p.categoria === selected);

  return (
    <section className="py-14 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categorias.map((cat) => (
            <button key={cat} onClick={() => setSelected(cat)}
              className="px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all border-2"
              style={{
                borderColor: selected === cat ? '#152674' : '#d1d5db',
                backgroundColor: selected === cat ? '#152674' : 'white',
                color: selected === cat ? 'white' : '#374151',
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const color = categoryColors[p.categoria];
            const isHovered = hovered === p.slug;
            return (
              <Link
                key={p.slug}
                href={`/proyectos/${p.slug}`}
                onMouseEnter={() => setHovered(p.slug)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: 'block',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '280px',
                  backgroundColor: color,
                  boxShadow: isHovered
                    ? '0 8px 32px rgba(0,0,0,0.22)'
                    : '0 4px 20px rgba(0,0,0,0.12)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                {/* Imagen de fondo */}
                {p.image && (
                  <img src={p.image} alt={p.nombre}
                    style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'center',
                      transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                      transition: 'transform 0.35s ease',
                    }} />
                )}

                {/* Gradiente oscuro base */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: p.image
                    ? 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.72) 100%)'
                    : 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)',
                  transition: 'background 0.25s ease',
                }} />

                {/* Overlay "Ver Proyecto" en hover */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundColor: 'rgba(0,0,0,0.45)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.25s ease',
                }}>
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700, fontSize: '14px',
                    letterSpacing: '2px', textTransform: 'uppercase',
                    color: 'white',
                    border: '2px solid white',
                    padding: '10px 24px',
                    borderRadius: '4px',
                  }}>
                    Ver Proyecto
                  </span>
                </div>

                {/* Badge categoría — arriba izquierda */}
                <div style={{
                  position: 'absolute', top: '14px', left: '14px',
                  backgroundColor: color,
                  color: 'white',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700, fontSize: '11px',
                  letterSpacing: '1px', textTransform: 'uppercase',
                  padding: '4px 10px', borderRadius: '20px',
                }}>
                  {p.categoria}
                </div>

                {/* Año — arriba derecha */}
                <div style={{
                  position: 'absolute', top: '14px', right: '14px',
                  color: 'white',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600, fontSize: '13px',
                }}>
                  {p.año}
                </div>

                {/* Título y ubicación — abajo */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '16px 18px',
                }}>
                  <h3 style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 700, fontSize: '16px',
                    color: 'white', lineHeight: 1.3, marginBottom: '4px',
                  }}>
                    {p.nombre}
                  </h3>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '12.5px', color: 'rgba(255,255,255,0.80)',
                  }}>
                    {p.ubicacion}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          {filtered.length} proyecto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

type Categoria = 'Todas' | 'Calderas' | 'Calefacción' | 'Calentadores' | 'Chimeneas' | 'Colectores Solares';

const categorias: Categoria[] = ['Todas', 'Calderas', 'Calefacción', 'Calentadores', 'Chimeneas', 'Colectores Solares'];

const proyectos: { nombre: string; categoria: Exclude<Categoria, 'Todas'>; ubicacion: string }[] = [
  { nombre: 'Chimenea Centro de Fuego', categoria: 'Chimeneas', ubicacion: 'Pradera Potosí' },
  { nombre: 'Condominio Moraji', categoria: 'Calderas', ubicacion: 'Bogotá' },
  { nombre: 'Calentadores de Acumulación en Acero Inoxidable', categoria: 'Calentadores', ubicacion: 'Pradera de Potosí – La Calera' },
  { nombre: 'Calentador de Paso Bosch', categoria: 'Calentadores', ubicacion: 'Mesa de Yeguas' },
  { nombre: 'Caldera Bosch Therm 8000', categoria: 'Calderas', ubicacion: 'Colegio Gimnasio Moderno – Bogotá' },
  { nombre: 'Chimenea a Gas – Modulación de Llama', categoria: 'Chimeneas', ubicacion: 'Bogotá' },
  { nombre: 'Caldera Bosch Therm 8000', categoria: 'Calderas', ubicacion: 'La Pradera de Potosí – La Calera' },
  { nombre: 'Calefactores tipo Hongo', categoria: 'Calefacción', ubicacion: 'La Pradera de Potosí – La Calera' },
  { nombre: 'Calefacción Eléctrica', categoria: 'Calefacción', ubicacion: 'La Pradera de Potosí – La Calera' },
  { nombre: 'La Pradera de Potosí', categoria: 'Calderas', ubicacion: 'La Calera' },
  { nombre: 'La Pradera de Potosí – Baños & Jacuzzi', categoria: 'Calderas', ubicacion: 'La Calera' },
  { nombre: 'Santa Ana Oriental', categoria: 'Calderas', ubicacion: 'Bogotá' },
  { nombre: 'Hotel Ibis', categoria: 'Calderas', ubicacion: 'Cartagena' },
  { nombre: 'Conjunto Encenillos', categoria: 'Colectores Solares', ubicacion: 'Medellín' },
];

const categoryColors: Record<Exclude<Categoria, 'Todas'>, string> = {
  Calderas: '#152674',
  Calefacción: '#009bdb',
  Calentadores: '#db9600',
  Chimeneas: '#c0392b',
  'Colectores Solares': '#27ae60',
};

export default function ProyectosGrid() {
  const [selected, setSelected] = useState<Categoria>('Todas');

  const filtered =
    selected === 'Todas' ? proyectos : proyectos.filter((p) => p.categoria === selected);

  return (
    <section className="py-14 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className="px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all border-2"
              style={{
                borderColor: selected === cat ? 'var(--azul-oscuro)' : '#d1d5db',
                backgroundColor: selected === cat ? 'var(--azul-oscuro)' : 'white',
                color: selected === cat ? 'white' : 'var(--gris-oscuro)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Colored top bar */}
              <div
                className="h-2"
                style={{ backgroundColor: categoryColors[p.categoria] }}
              />
              <div className="p-6">
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: categoryColors[p.categoria] }}
                >
                  {p.categoria}
                </span>
                <h3
                  className="font-bold text-base mt-1 mb-2 leading-snug"
                  style={{ color: 'var(--azul-oscuro)' }}
                >
                  {p.nombre}
                </h3>
                <p className="text-sm text-gray-500">📍 {p.ubicacion}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          {filtered.length} proyecto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>
    </section>
  );
}

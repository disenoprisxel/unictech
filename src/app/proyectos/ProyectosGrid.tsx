'use client';

import { useState } from 'react';

type Categoria = 'Todas' | 'Calderas' | 'Calefacción' | 'Calentadores' | 'Chimeneas' | 'Colectores Solares';

const categorias: Categoria[] = ['Todas', 'Calderas', 'Calefacción', 'Calentadores', 'Chimeneas', 'Colectores Solares'];

type Proyecto = {
  nombre: string;
  ubicacion: string;
  categoria: Exclude<Categoria, 'Todas'>;
  año: number;
  image?: string;
};

const proyectos: Proyecto[] = [
  { nombre: 'Hotel Ibis',                                     categoria: 'Calderas',           ubicacion: 'Cartagena',                         año: 2022, image: '/proyectos/hotel-ibis.jpg'         },
  { nombre: 'Santa Ana Oriental',                             categoria: 'Calderas',           ubicacion: 'Bogotá',                            año: 2022, image: '/proyectos/santa-ana.jpg'           },
  { nombre: 'La Pradera de Potosí',                           categoria: 'Calderas',           ubicacion: 'La Calera',                         año: 2021, image: '/proyectos/pradera-potosi.jpg'      },
  { nombre: 'La Pradera de Potosí – Baños & Jacuzzi',         categoria: 'Calderas',           ubicacion: 'La Calera',                         año: 2021, image: '/proyectos/pradera-jacuzzi.jpg'     },
  { nombre: 'Caldera Bosch Therm 8000',                       categoria: 'Calderas',           ubicacion: 'La Pradera de Potosí – La Calera',  año: 2021, image: '/proyectos/pradera-caldera.jpg'     },
  { nombre: 'Caldera Bosch Therm 8000',                       categoria: 'Calderas',           ubicacion: 'Colegio Gimnasio Moderno – Bogotá', año: 2022                                              },
  { nombre: 'Condominio Moraji',                              categoria: 'Calderas',           ubicacion: 'Bogotá',                            año: 2022                                              },
  { nombre: 'Calefactores tipo Hongo',                        categoria: 'Calefacción',        ubicacion: 'La Pradera de Potosí – La Calera',  año: 2021, image: '/proyectos/calefactor-hongo.jpg'    },
  { nombre: 'Calefacción Eléctrica',                          categoria: 'Calefacción',        ubicacion: 'La Pradera de Potosí – La Calera',  año: 2021, image: '/proyectos/pradera-calefaccion.jpg' },
  { nombre: 'Calentadores de Acumulación Acero Inoxidable',   categoria: 'Calentadores',       ubicacion: 'Pradera de Potosí – La Calera',     año: 2021                                              },
  { nombre: 'Calentador de Paso Bosch',                       categoria: 'Calentadores',       ubicacion: 'Mesa de Yeguas',                    año: 2022                                              },
  { nombre: 'Chimenea Centro de Fuego',                       categoria: 'Chimeneas',          ubicacion: 'Pradera Potosí',                    año: 2022, image: '/proyectos/chimenea-bogota.jpg'     },
  { nombre: 'Chimenea a Gas – Modulación de Llama',           categoria: 'Chimeneas',          ubicacion: 'Bogotá',                            año: 2022                                              },
  { nombre: 'Conjunto Encenillos',                            categoria: 'Colectores Solares', ubicacion: 'Medellín',                          año: 2022, image: '/proyectos/colector-solar.jpg'      },
];

const categoryColors: Record<Exclude<Categoria, 'Todas'>, string> = {
  Calderas:           '#152674',
  Calefacción:        '#009bdb',
  Calentadores:       '#db9600',
  Chimeneas:          '#c0392b',
  'Colectores Solares': '#27ae60',
};

export default function ProyectosGrid() {
  const [selected, setSelected] = useState<Categoria>('Todas');

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
          {filtered.map((p, i) => {
            const color = categoryColors[p.categoria];
            return (
              <div key={i} style={{
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                height: '280px',
                backgroundColor: color,
                boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              }}>
                {/* Imagen de fondo */}
                {p.image && (
                  <img src={p.image} alt={p.nombre}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'center' }} />
                )}

                {/* Gradiente oscuro inferior */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: p.image
                    ? 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.72) 100%)'
                    : 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)',
                }} />

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
                    📍 {p.ubicacion}
                  </p>
                </div>
              </div>
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

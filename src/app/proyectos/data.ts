export type Categoria = 'Todas' | 'Calderas' | 'Calefacción' | 'Calentadores' | 'Chimeneas' | 'Colectores Solares';

export type Proyecto = {
  slug: string;
  nombre: string;
  ubicacion: string;
  categoria: Exclude<Categoria, 'Todas'>;
  año: number;
  image?: string;
};

export const proyectos: Proyecto[] = [
  { slug: 'hotel-ibis',               nombre: 'Hotel Ibis',                                   categoria: 'Calderas',           ubicacion: 'Cartagena',                         año: 2022, image: '/proyectos/hotel-ibis.jpg'         },
  { slug: 'santa-ana-oriental',       nombre: 'Santa Ana Oriental',                           categoria: 'Calderas',           ubicacion: 'Bogotá',                            año: 2022, image: '/proyectos/santa-ana.jpg'           },
  { slug: 'pradera-potosi',           nombre: 'La Pradera de Potosí',                         categoria: 'Calderas',           ubicacion: 'La Calera',                         año: 2021, image: '/proyectos/pradera-potosi.jpg'      },
  { slug: 'pradera-potosi-jacuzzi',   nombre: 'La Pradera de Potosí – Baños & Jacuzzi',       categoria: 'Calderas',           ubicacion: 'La Calera',                         año: 2021, image: '/proyectos/pradera-jacuzzi.jpg'     },
  { slug: 'caldera-bosch-pradera',    nombre: 'Caldera Bosch Therm 8000',                     categoria: 'Calderas',           ubicacion: 'La Pradera de Potosí – La Calera',  año: 2021, image: '/proyectos/pradera-caldera.jpg'     },
  { slug: 'caldera-bosch-colegio',    nombre: 'Caldera Bosch Therm 8000',                     categoria: 'Calderas',           ubicacion: 'Colegio Gimnasio Moderno – Bogotá', año: 2022, image: '/proyectos/caldera-bosch-colegio.jpg' },
  { slug: 'condominio-moraji',        nombre: 'Condominio Moraji',                            categoria: 'Calderas',           ubicacion: 'Bogotá',                            año: 2022, image: '/proyectos/condominio-moraji.jpg'      },
  { slug: 'calefactores-hongo',       nombre: 'Calefactores tipo Hongo',                      categoria: 'Calefacción',        ubicacion: 'La Pradera de Potosí – La Calera',  año: 2021, image: '/proyectos/calefactor-hongo.jpg'    },
  { slug: 'calefaccion-electrica',    nombre: 'Calefacción Eléctrica',                        categoria: 'Calefacción',        ubicacion: 'La Pradera de Potosí – La Calera',  año: 2021, image: '/proyectos/pradera-calefaccion.jpg' },
  { slug: 'calentadores-acumulacion', nombre: 'Calentadores de Acumulación Acero Inoxidable', categoria: 'Calentadores',       ubicacion: 'Pradera de Potosí – La Calera',     año: 2021, image: '/proyectos/calentadores-acumulacion.jpg' },
  { slug: 'calentador-paso-bosch',    nombre: 'Calentador de Paso Bosch',                     categoria: 'Calentadores',       ubicacion: 'Mesa de Yeguas',                    año: 2022, image: '/proyectos/calentador-paso-bosch.jpg'    },
  { slug: 'chimenea-centro-fuego',    nombre: 'Chimenea Centro de Fuego',                     categoria: 'Chimeneas',          ubicacion: 'Pradera Potosí',                    año: 2022, image: '/proyectos/chimenea-bogota.jpg'     },
  { slug: 'chimenea-gas',             nombre: 'Chimenea a Gas – Modulación de Llama',         categoria: 'Chimeneas',          ubicacion: 'Bogotá',                            año: 2022, image: '/proyectos/chimenea-gas.jpg'           },
  { slug: 'conjunto-encenillos',      nombre: 'Conjunto Encenillos',                          categoria: 'Colectores Solares', ubicacion: 'Medellín',                          año: 2022, image: '/proyectos/colector-solar.jpg'      },
];

export const categoryColors: Record<Exclude<Categoria, 'Todas'>, string> = {
  Calderas:             '#152674',
  Calefacción:          '#009bdb',
  Calentadores:         '#db9600',
  Chimeneas:            '#c0392b',
  'Colectores Solares': '#27ae60',
};

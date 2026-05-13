export type Categoria = 'Todas' | 'Calderas' | 'Calefacción' | 'Calentadores' | 'Chimeneas' | 'Colectores Solares';

export type Proyecto = {
  slug: string;
  nombre: string;
  titulo?: string;      // título descriptivo del trabajo realizado (opcional)
  subtitulo?: string;   // línea secundaria entre título y nombre del proyecto (opcional)
  descripcion?: string; // párrafo descriptivo debajo del subtítulo (opcional)
  ubicacion: string;
  categoria: Exclude<Categoria, 'Todas'>;
  año: number;
  images: string[];
  videos?: string[];    // videos opcionales que se agregan al carousel después de las imágenes
};

export const proyectos: Proyecto[] = [
  { slug: 'hotel-ibis',               nombre: 'Hotel Ibis',  titulo: 'Mantenimiento de Calderas industriales', categoria: 'Calderas', ubicacion: 'Cartagena', año: 2022, images: ['/proyectos/hotel-ibis.jpg', '/proyectos/hotel-ibis-2.jpg'] },
  { slug: 'santa-ana-oriental',       nombre: 'Santa Ana Oriental', titulo: 'Caldera de condensación Bosch Therm 8000', subtitulo: 'Agua Caliente', categoria: 'Calderas', ubicacion: 'Bogotá', año: 2022, images: ['/proyectos/santa-ana.jpg', '/proyectos/santa-ana-2.jpg'] },
  { slug: 'pradera-potosi',           nombre: 'La Pradera de Potosí', titulo: 'Caldera Bosch therm 8000', subtitulo: 'Agua Caliente', categoria: 'Calderas', ubicacion: 'La Calera', año: 2021, images: ['/proyectos/pradera-potosi.jpg', '/proyectos/pradera-potosi-2.jpg'] },
  { slug: 'pradera-potosi-jacuzzi',   nombre: 'La Pradera de Potosí', titulo: 'Caldera Bosch Therm 8000', subtitulo: 'Agua Caliente - Baños & Jacuzzi', categoria: 'Calderas', ubicacion: 'La Calera', año: 2021, images: ['/proyectos/pradera-jacuzzi.jpg', '/proyectos/pradera-jacuzzi-2.jpg'] },
  { slug: 'caldera-bosch-pradera',    nombre: 'Caldera Bosch Therm 8000',                     categoria: 'Calderas',           ubicacion: 'La Pradera de Potosí – La Calera',  año: 2021, images: ['/proyectos/pradera-caldera.jpg', '/proyectos/pradera-caldera-2.jpg'] },
  { slug: 'caldera-bosch-colegio',    nombre: 'Caldera Bosch Therm 8000',                     categoria: 'Calderas',           ubicacion: 'Colegio Gimnasio Moderno – Bogotá', año: 2022, images: ['/proyectos/caldera-bosch-colegio.jpg', '/proyectos/caldera-bosch-colegio-2.jpg'] },
  { slug: 'condominio-moraji',        nombre: 'Condominio Moraji', titulo: 'Calefacción Hidrónica con caldera de condensación - UNICAL X+', categoria: 'Calderas', ubicacion: 'Bogotá', año: 2022, images: ['/proyectos/condominio-moraji.jpg'], videos: ['/proyectos/condominio-moraji.mp4'] },
  { slug: 'calefactores-hongo',       nombre: 'Calefactores tipo Hongo',                      categoria: 'Calefacción',        ubicacion: 'La Pradera de Potosí – La Calera',  año: 2021, images: ['/proyectos/calefactor-hongo.jpg', '/proyectos/calefactor-hongo-2.jpg']    },
  { slug: 'calefaccion-electrica',    nombre: 'Calefacción Eléctrica',                        categoria: 'Calefacción',        ubicacion: 'La Pradera de Potosí – La Calera',  año: 2021, images: ['/proyectos/pradera-calefaccion.jpg', '/proyectos/pradera-calefaccion-2.jpg'] },
  { slug: 'calentadores-acumulacion', nombre: 'Calentadores de Acumulación Acero Inoxidable', categoria: 'Calentadores',       ubicacion: 'Pradera de Potosí – La Calera',     año: 2021, images: ['/proyectos/calentadores-acumulacion.jpg'] },
  { slug: 'calentador-paso-bosch',    nombre: 'Calentador de Paso Bosch',                     categoria: 'Calentadores',       ubicacion: 'Mesa de Yeguas',                    año: 2022, images: ['/proyectos/calentador-paso-bosch.jpg']    },
  { slug: 'chimenea-centro-fuego',    nombre: 'Chimenea Centro de Fuego',                     categoria: 'Chimeneas',          ubicacion: 'Pradera Potosí – La Calera',        año: 2022, images: ['/proyectos/chimenea-bogota.jpg'], videos: ['/proyectos/chimenea-centro-fuego.mp4'] },
  { slug: 'chimenea-gas',             nombre: 'Chimenea a Gas – Modulación de Llama',         categoria: 'Chimeneas',          ubicacion: 'Bogotá',                            año: 2022, images: ['/proyectos/chimenea-gas.jpg']           },
  { slug: 'conjunto-encenillos',      nombre: 'Conjunto Encenillos', titulo: 'Proyecto solar térmico', descripcion: 'Proyecto solar térmico para agua caliente y calefacción, suministro e instalación de colectores Bosch.', categoria: 'Colectores Solares', ubicacion: 'Medellín', año: 2022, images: ['/proyectos/colector-solar.jpg', '/proyectos/encenillos-2.jpg', '/proyectos/encenillos-3.jpg', '/proyectos/encenillos-4.jpg', '/proyectos/encenillos-5.jpg'] },
];

export const categoryColors: Record<Exclude<Categoria, 'Todas'>, string> = {
  Calderas:             '#152674',
  Calefacción:          '#009bdb',
  Calentadores:         '#db9600',
  Chimeneas:            '#c0392b',
  'Colectores Solares': '#27ae60',
};

import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Calentamiento de Piscinas | Unictech SAS',
  description: 'Climatización de piscinas y jacuzzis. Mantiene la estética y la funcionalidad arquitectónica deseada.',
};

const bullets = [
  'Última Tecnología',
  'Control de Temperatura',
  'Diseño Ergonómico',
  'Segura y Estable',
];

export default function CalentamientoPiscinas() {
  return (
    <>
      <PageHero
        tag="TU MEJOR ELECCIÓN"
        title="Piscinas & Jacuzzis"
        subtitle="Mantiene la Estética y la Funcionalidad Arquitectónica Deseada"
      />

      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <ProductCard
            name="Climatizador para Piscina — Master Temp de Pentair"
            tagline="Ideal para piscinas elevadas, spa y enterradas."
            features={[
              'Pantalla digital fácil de leer',
              'Pantalla giratoria para cualquier orientación',
              'Eléctrico 120/240V',
              'Tuberías 1-1/2" / 2"',
              'Hasta 15,000 galones',
            ]}
            benefits={[
              'Eficiencia térmica del 82%',
              'Ideal para piscinas elevadas, spa y enterradas',
            ]}
          />

          <ProductCard
            name="Climatizador para Jacuzzi — Therm 5600 de Bosch (hasta 3000 lts)"
            tagline="Tecnología de condensación para máxima eficiencia."
            features={[
              '10 sistemas de seguridad',
              'Diseño Europeo',
              'Termostático con display integrado',
              'Pantalla indicadora de temperatura y averías',
            ]}
            benefits={[
              'Compatible con colectores solares',
              'Filtro incorporado de fácil acceso',
              'Tecnología de condensación',
            ]}
          />
        </div>

        {/* Bullets destacados */}
        <div className="max-w-5xl mx-auto mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {bullets.map((b) => (
              <div
                key={b}
                className="rounded-lg p-4 text-center font-bold text-sm uppercase tracking-wide text-white"
                style={{ backgroundColor: 'var(--azul-cielo)' }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Energías Sostenibles | Unictech SAS',
  description: 'Colectores solares de fabricación alemana. Ahorro de hasta 40% en consumo de gas.',
};

export default function EnergiasSostenibles() {
  return (
    <>
      <PageHero
        tag="TU MEJOR ELECCIÓN"
        title="Energías Sostenibles"
        subtitle="Ahorro de Hasta 40% en Consumo de Gas — Colectores Solares de fabricación alemana"
      />

      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <ProductCard
            name="Colector Solar"
            tagline="Diseño y fabricación Alemana — Máxima durabilidad y prolongada vida útil."
            features={[
              'Diseño y fabricación Alemana',
              'Máxima duración y prolongada vida útil',
              'Captación de radiación solar mejorada',
              'Mejor retención y transferencia de calor al agua',
              'Conexión en paralelo de hasta 10 colectores',
              'Vidrios Prismáticos de alta eficiencia',
              'Serpentín de cobre con uniones en soldadura continua',
            ]}
            benefits={[
              'Ahorro de hasta 40% en consumo de gas',
              'Reducción del impacto ambiental',
              'Compatible con sistemas de agua caliente existentes',
            ]}
          />
        </div>
      </section>

      {/* Stats section */}
      <section
        className="py-12 px-6"
        style={{ backgroundColor: 'var(--azul-oscuro)' }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
          {[
            { value: '40%', label: 'Ahorro en gas' },
            { value: '10', label: 'Colectores en paralelo' },
            { value: '100%', label: 'Fabricación alemana' },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="font-extrabold text-5xl mb-1"
                style={{ color: 'var(--dorado)' }}
              >
                {stat.value}
              </p>
              <p className="text-white/70 text-sm uppercase tracking-widest font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

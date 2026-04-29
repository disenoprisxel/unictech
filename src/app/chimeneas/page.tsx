import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Chimeneas | Unictech SAS',
  description: 'Chimeneas de interior y exterior con tecnología italiana. Confort que mereces.',
};

export default function Chimeneas() {
  return (
    <>
      <PageHero
        tag="CONFORT QUE MERECES"
        title="Chimeneas"
        subtitle="Chimeneas de Interior y Exterior — Ambientando los momentos"
      />

      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <ProductCard
            name="Chimenea tipo Loft de Válvula Electrónica"
            tagline="Tecnología italiana con modulación de llama y control remoto."
            features={[
              'Tecnología Italiana',
              'Quemador Vent Free',
              'Control remoto incluido',
              'Llama graduable',
              'Función de termostato',
              'Requiere punto eléctrico 110V con polo a tierra',
              'Punto de Gas salida en hembra de 1/2"',
              'Presión Gas: 18–23 milibares en Gas Natural',
              'Registro de corte de paso Gas Reglamentario',
            ]}
          />
        </div>
      </section>

      {/* Decorative section */}
      <section
        className="py-14 px-6 text-center text-white"
        style={{ backgroundColor: 'var(--azul-oscuro)' }}
      >
        <h2
          className="font-extrabold uppercase text-2xl mb-3"
          style={{ color: 'var(--dorado)' }}
        >
          Ambiente y Confort
        </h2>
        <p className="text-white/80 max-w-xl mx-auto">
          Nuestras chimeneas a gas crean el ambiente perfecto para tu hogar, combinando
          tecnología de punta con diseño elegante. Seguras, eficientes y de fácil instalación.
        </p>
      </section>
    </>
  );
}

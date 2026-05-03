import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Agua Caliente | Unictech SAS',
  description: 'Especialistas en sistemas centralizados de agua caliente para aplicaciones deportivas, hoteleras, hospitalarias, industriales y residenciales.',
};

export default function AguaCaliente() {
  return (
    <>
      <PageHero
        title="Agua Caliente"
        image="/hero-agua-caliente.jpg"
      />

      {/* ── Intro section ── */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#e63012',
            marginBottom: '16px',
          }}>
            Sistemas de Agua Caliente
          </p>
          <h2 style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            color: '#111827',
            lineHeight: 1.2,
            marginBottom: '20px',
          }}>
            Especialistas en sistemas centralizados de agua caliente.
          </h2>
          <div style={{ width: '48px', height: '4px', backgroundColor: '#e63012', margin: '0 auto 24px' }} />
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: '15px',
            color: '#4b5563',
            lineHeight: 1.8,
          }}>
            Sistemas idóneos para aplicaciones deportiva, hoteleras, hospitalarias, industriales y residenciales
            entre otras. Sistemas que superan los 50°C a 70°C. Compatibilidad solar, sistemas de colectores solares
            generando una significativa reducción del consumo energético.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <ProductCard
            name="Calentadores de Paso Bosch"
            tagline="La mejor experiencia en calentamiento de agua y ahorro de gas con alta eficiencia y ajuste automático de potencia."
            features={[
              'Posee 9 sistemas de seguridad',
              'Diseño Europeo (compacto y eficiente)',
              'Incluye ducto de evacuación',
              'Ventilador integrado',
              'Termostático: temperatura exacta',
              'Display táctil integrado',
              'Conexión a Wi-Fi (opcional)',
              'Funciona con bajos caudales (desde 2.8 Lts/min)',
            ]}
            benefits={[
              'Botón encendido/apagado sin cerrar suministro de gas',
              'Uso continuo ilimitado – sin auto apagado',
              'Intercambiador de calor 100% en cobre',
            ]}
          />

          <ProductCard
            name="Caldera de Alta Eficiencia Therm 8000 Bosch"
            tagline="Tecnología de condensación para máxima eficiencia energética."
            features={[
              '10 sistemas de seguridad',
              'Fabricación y diseño Europeo',
              'Termostático con display integrado',
              'Pantalla indicadora de temperatura y averías',
              'Instalación en recintos confinados (Tipo C)',
              'Modulación electrónica: 35°C a 84°C',
            ]}
            benefits={[
              'Compatible con colectores solares',
              'Filtro incorporado de fácil acceso',
              'Tecnología de condensación (aprovecha gases para precalentar agua)',
            ]}
          />
        </div>
      </section>
    </>
  );
}

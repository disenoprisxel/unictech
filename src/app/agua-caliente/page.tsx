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
        tag="TU MEJOR ELECCIÓN"
        title="Agua Caliente"
        subtitle="Especialistas en sistemas centralizados de agua caliente. Sistemas idóneos para aplicaciones deportivas, hoteleras, hospitalarias, industriales y residenciales. Sistemas que superan los 50°C a 70°C. Compatibilidad solar."
      />

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

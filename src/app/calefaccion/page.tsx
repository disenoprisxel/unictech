import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Calefacción | Unictech SAS',
  description: 'Sistemas de calefacción de alta eficiencia con tecnología italiana, compatibles con colectores solares.',
};

export default function Calefaccion() {
  return (
    <>
      <PageHero
        tag="TU MEJOR ELECCIÓN"
        title="Calefacción"
        subtitle="Sistemas de calefacción de alta eficiencia, tecnología italiana, bajo los más altos estándares de calidad. Compatibles con sistemas de colectores solares."
      />

      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <ProductCard
            name="Caldera de Condensación Unical X+"
            tagline="Máxima eficiencia energética con tecnología de condensación."
            features={[
              'Quemador de pre mezcla Low NOx (clase 6)',
              'Ajuste de potencia mínima en modo calefacción',
              'Función anticongelante electrónica hasta -15°C',
              'Gestión de 2 zonas de calentamiento',
              'Función HWS "Hot Water Speed"',
              'Tamaño compacto',
            ]}
            benefits={[
              'Intercambiador en acero inoxidable',
              'C35: potencia nominal 33kW, ACS hasta 19 l/min',
            ]}
          />

          <ProductCard
            name="Caldera Convencional Unical DEA PLUS LN"
            tagline="Fiabilidad y rendimiento con tecnología italiana."
            features={[
              'Tiro natural',
              'Aislamiento termo acústico 8mm',
              'Conexiones hidráulicas metálicas',
              'Intercambiador sanitario en acero inoxidable: 12 l/min con Δt 25',
              'By-pass automático estándar',
            ]}
            benefits={[
              'Potencia 32kW, gas natural o GLP',
              'Pantalla LCD multifunción',
              'Diagnóstico de 11 anomalías',
            ]}
          />

          <ProductCard
            name="Radiadores de Aluminio"
            tagline="Cuando el aluminio y la tecnología se fusionan. Estética, funcionalidad y rendimiento."
            features={[
              'Presión máxima 600kPa (6 Bar)',
              'Norma Europea UNI EN 442-2',
              'De 4 a 15 elementos',
            ]}
          />

          <ProductCard
            name="Toalleros de Aluminio"
            tagline="Diseño refinado, minimalista y elegante."
            features={[
              'Presión máxima 600kPa (6 Bar)',
              'Acabados de alta calidad',
              'Compatible con sistemas de calefacción hidrónica',
            ]}
          />

          <ProductCard
            name="Suelo Radiante"
            tagline="Manta de calor constante, temperaturas más uniformes."
            features={[
              'Tubería PEX 12mm o 16mm con barrera de oxígeno',
              'Resistencia hasta 95°C',
              'Manifold con válvulas de control',
              'Compatible con la mayoría de tipos de piso',
            ]}
            benefits={[
              'Sistema hidrónico con caldera',
              'Más eficiente energéticamente que sistemas convencionales',
              'Confort térmico uniforme en toda la habitación',
            ]}
          />
        </div>
      </section>
    </>
  );
}

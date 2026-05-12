import PageHero from '@/components/PageHero';
import ProyectosGrid from './ProyectosGrid';

export const metadata = {
  title: 'Proyectos | Unictech SAS',
  description: 'Proyectos realizados en calderas, calefacción, calentadores, chimeneas y colectores solares en Colombia.',
};

export default function Proyectos() {
  return (
    <>
      <PageHero
        title="Nuestros Proyectos"
        image="/hero-proyectos.jpg"
      />
      <ProyectosGrid />
    </>
  );
}

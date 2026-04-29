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
        tag="NUESTRO TRABAJO"
        title="Proyectos Realizados"
        subtitle="Especialistas en sistemas de agua caliente y calefacción para aplicaciones deportivas, hoteleras, hospitalarias, industriales y residenciales."
      />
      <ProyectosGrid />
    </>
  );
}

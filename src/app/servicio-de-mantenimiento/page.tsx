import PageHero from '@/components/PageHero';
import MantenimientoForm from './MantenimientoForm';

export const metadata = {
  title: 'Servicio de Mantenimiento | Unictech SAS',
  description: 'Especialistas en sistemas centralizados de agua caliente. Contáctanos para cualquier duda.',
};

export default function Mantenimiento() {
  return (
    <>
      <PageHero
        tag="ESPECIALISTAS EN SISTEMAS CENTRALIZADOS"
        title="Servicio de Mantenimiento"
        subtitle="Ponte en contacto con nosotros si tienes alguna duda y te responderemos lo antes posible."
      />
      <MantenimientoForm />
    </>
  );
}

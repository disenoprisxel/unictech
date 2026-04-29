import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Unictech SAS – Soluciones de Confort',
  description:
    'Especialistas en sistemas de calefacción, agua caliente, piscinas, chimeneas y energías sostenibles en Colombia.',
  keywords: 'calefacción, agua caliente, piscinas, chimeneas, energías sostenibles, Colombia, Bogotá',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

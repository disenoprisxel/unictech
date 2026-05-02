'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const marcas = [
  { src: '/marca-bosch.png', alt: 'Bosch' },
  { src: '/marca-grundfos.png', alt: 'Grundfos' },
  { src: '/marca-unical.png', alt: 'Unical' },
  { src: '/marca-wilo.png', alt: 'Wilo' },
];

export default function MarcasCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex items-center">
        {/* Duplicamos las marcas para dar sensación de infinito suave */}
        {[...marcas, ...marcas].map((m, i) => (
          <div
            key={i}
            className="flex-none flex items-center justify-center px-10"
            style={{ minWidth: '200px' }}
          >
            <Image
              src={m.src}
              alt={m.alt}
              width={150}
              height={70}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              style={{ maxHeight: '70px', width: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

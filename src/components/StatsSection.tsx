'use client';

import { useEffect, useRef, useState, ReactElement } from 'react';

const ACCENT = '#e63012';

/* ── Count-up hook ── */
function useCountUp(target: number, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);
  return count;
}

/* ── SVG Icons ── */
const IconTrophy = () => (
  <svg viewBox="0 0 80 80" width="44" height="44" fill={ACCENT}>
    <path d="M58 10H50V8H30v2H22c-4 0-8 4-8 9 0 10 7 17 17 20 2 4 5 7 8 9v5h-8v4h22v-4h-8v-5c3-2 6-5 8-9 10-3 17-10 17-20 0-5-4-9-8-9zM18 19c0-2 2-5 4-5h8c1 6 3 11 7 15-9-2-16-5-19-10zm44 0c-3 5-10 8-19 10 4-4 6-9 7-15h8c2 0 4 3 4 5z"/>
    <rect x="28" y="55" width="24" height="4" rx="2"/>
    <rect x="20" y="59" width="40" height="5" rx="2"/>
  </svg>
);

const IconProjects = () => (
  <svg viewBox="0 0 80 80" width="44" height="44" fill={ACCENT}>
    <path d="M52 8h-8a4 4 0 0 0-8 0h-8a4 4 0 0 0-4 4v52a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4zm-12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm12 52H28V16h4v4h16v-4h4v48zm-4-28L32 52l-8-8-4 4 12 12 20-20z"/>
  </svg>
);

const IconClients = () => (
  <svg viewBox="0 0 80 80" width="44" height="44" fill={ACCENT}>
    <circle cx="28" cy="26" r="12"/>
    <path d="M4 66c0-12 11-20 24-20s24 8 24 20H4z"/>
    <circle cx="56" cy="26" r="10"/>
    <path d="M54 46c4 1 7 4 7 8v12h15V58c0-8-10-13-22-12z"/>
  </svg>
);

const IconBrands = () => (
  <svg viewBox="0 0 80 80" width="44" height="44" fill={ACCENT}>
    <path d="M40 6l7 20h22L52 38l8 24-20-14-20 14 8-24L11 26h22z"/>
  </svg>
);

const stats = [
  { value: 10,  suffix: '+', label: 'Años en el mercado',    Icon: IconTrophy   },
  { value: 60,  suffix: '+', label: 'Proyectos ejecutados',  Icon: IconProjects  },
  { value: 120, suffix: '+', label: 'Clientes satisfechos',  Icon: IconClients   },
  { value: 4,   suffix: '',  label: 'Marcas líderes',        Icon: IconBrands    },
];

function StatCard({ value, suffix, label, Icon, started }: {
  value: number; suffix: string; label: string;
  Icon: () => ReactElement; started: boolean;
}) {
  const count = useCountUp(value, 1800, started);
  return (
    <div className="flex flex-col items-center text-center px-6 py-2">
      <div className="mb-4"><Icon /></div>
      <p className="font-extrabold leading-none mb-2"
        style={{ fontFamily: "'Roboto', sans-serif", fontSize: '52px', color: 'white' }}>
        {count}{suffix}
      </p>
      <p className="font-semibold uppercase tracking-widest"
        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: 'linear-gradient(135deg, #0d1b4b 0%, #152674 100%)' }}
      className="py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 [&>*+*]:border-t-2 lg:[&>*+*]:border-t-0 lg:[&>*+*]:border-l-2 [&>*+*]:border-white/10">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} started={started} />
        ))}
      </div>
    </section>
  );
}

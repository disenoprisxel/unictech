'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormData = {
  nombre: string;
  telefono: string;
  direccion: string;
  correo: string;
  tipoEquipo: string;
  marca: string;
  mensaje: string;
};

export default function MantenimientoForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [error, setError] = useState('');

  const onSubmit = async (data: FormData) => {
    setError('');
    try {
      const res = await fetch('/api/mantenimiento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setSent(true);
        reset();
      } else {
        setError('Hubo un error al enviar. Intenta de nuevo o escríbenos directamente.');
      }
    } catch {
      setError('Hubo un error al enviar. Intenta de nuevo o escríbenos directamente.');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white';

  return (
    <section className="py-14 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {sent ? (
          <div
            className="text-center p-10 rounded-xl text-white font-bold text-lg"
            style={{ backgroundColor: 'var(--azul-oscuro)' }}
          >
            ✅ ¡Mensaje enviado! Te contactaremos pronto.
            <br />
            <button
              onClick={() => setSent(false)}
              className="mt-4 text-sm font-semibold underline text-white/80"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide mb-1 text-gray-600">
                  Nombre *
                </label>
                <input
                  {...register('nombre', { required: 'Requerido' })}
                  className={inputClass}
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide mb-1 text-gray-600">
                  Teléfono *
                </label>
                <input
                  {...register('telefono', { required: 'Requerido' })}
                  className={inputClass}
                  placeholder="Tu teléfono"
                />
                {errors.telefono && (
                  <p className="text-red-500 text-xs mt-1">{errors.telefono.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wide mb-1 text-gray-600">
                Dirección
              </label>
              <input
                {...register('direccion')}
                className={inputClass}
                placeholder="Tu dirección"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wide mb-1 text-gray-600">
                Correo *
              </label>
              <input
                {...register('correo', {
                  required: 'Requerido',
                  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Correo inválido' },
                })}
                type="email"
                className={inputClass}
                placeholder="tu@correo.com"
              />
              {errors.correo && (
                <p className="text-red-500 text-xs mt-1">{errors.correo.message}</p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide mb-1 text-gray-600">
                  Tipo de Equipo
                </label>
                <input
                  {...register('tipoEquipo')}
                  className={inputClass}
                  placeholder="Caldera, calentador…"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide mb-1 text-gray-600">
                  Marca
                </label>
                <input
                  {...register('marca')}
                  className={inputClass}
                  placeholder="Bosch, Unical…"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wide mb-1 text-gray-600">
                Mensaje *
              </label>
              <textarea
                {...register('mensaje', { required: 'Requerido' })}
                rows={5}
                className={inputClass}
                placeholder="Describe el problema o la solicitud de mantenimiento…"
              />
              {errors.mensaje && (
                <p className="text-red-500 text-xs mt-1">{errors.mensaje.message}</p>
              )}
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="py-3 px-8 rounded-lg font-bold uppercase tracking-widest text-white transition-opacity disabled:opacity-60 cursor-pointer"
              style={{ backgroundColor: 'var(--azul-oscuro)' }}
            >
              {isSubmitting ? 'Enviando…' : 'Enviar'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

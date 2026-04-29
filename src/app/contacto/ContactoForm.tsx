'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormData = {
  nombre: string;
  correo: string;
  telefono: string;
  asunto: string;
  mensaje: string;
};

export default function ContactoForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Placeholder: integrate with Resend or EmailJS
    console.log('Contact form:', data);
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    reset();
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white';

  if (sent) {
    return (
      <div
        className="flex items-center justify-center rounded-xl p-10 text-center text-white font-bold text-lg"
        style={{ backgroundColor: 'var(--azul-oscuro)' }}
      >
        <div>
          <p className="text-4xl mb-4">✅</p>
          <p>¡Mensaje recibido! Te contactaremos pronto.</p>
          <button
            onClick={() => setSent(false)}
            className="mt-4 text-sm text-white/70 underline"
          >
            Enviar otro mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
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
          {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide mb-1 text-gray-600">
            Teléfono
          </label>
          <input {...register('telefono')} className={inputClass} placeholder="Tu teléfono" />
        </div>
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
        {errors.correo && <p className="text-red-500 text-xs mt-1">{errors.correo.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wide mb-1 text-gray-600">
          Asunto
        </label>
        <input {...register('asunto')} className={inputClass} placeholder="Asunto del mensaje" />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wide mb-1 text-gray-600">
          Mensaje *
        </label>
        <textarea
          {...register('mensaje', { required: 'Requerido' })}
          rows={5}
          className={inputClass}
          placeholder="Escribe tu mensaje aquí…"
        />
        {errors.mensaje && <p className="text-red-500 text-xs mt-1">{errors.mensaje.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="py-3 px-8 rounded-lg font-bold uppercase tracking-widest text-white transition-opacity disabled:opacity-60 cursor-pointer"
        style={{ backgroundColor: 'var(--dorado)' }}
      >
        {isSubmitting ? 'Enviando…' : 'Enviar Mensaje'}
      </button>
    </form>
  );
}

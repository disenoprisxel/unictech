import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { nombre, telefono, direccion, correo, tipoEquipo, marca, mensaje } =
      await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Unictech Web" <${process.env.GMAIL_USER}>`,
      to: 'gerenciaunictech@gmail.com',
      replyTo: correo,
      subject: `🔧 Solicitud de Mantenimiento — ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #152674; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Unictech SAS</h1>
            <p style="color: rgba(255,255,255,0.75); margin: 4px 0 0; font-size: 13px;">Solicitud de Servicio de Mantenimiento</p>
          </div>

          <div style="padding: 28px 24px; background: #f9f9f9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 40%;">Nombre</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Teléfono</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${telefono}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Correo</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${correo}</td>
              </tr>
              ${direccion ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Dirección</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${direccion}</td>
              </tr>` : ''}
              ${tipoEquipo ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Tipo de Equipo</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${tipoEquipo}</td>
              </tr>` : ''}
              ${marca ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Marca</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${marca}</td>
              </tr>` : ''}
            </table>

            <div style="margin-top: 20px;">
              <p style="font-weight: bold; color: #374151; margin-bottom: 8px;">Mensaje:</p>
              <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; color: #111827; line-height: 1.6;">
                ${mensaje.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>

          <div style="background: #e63012; padding: 16px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 12px;">
              Mensaje enviado desde <strong>unictechsas.com</strong>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error enviando correo:', err);
    return NextResponse.json({ ok: false, error: 'Error al enviar el correo' }, { status: 500 });
  }
}

import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Configura el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'asstgourmetyparrilla@gmail.com',
        pass: 'juanJose29',
      },
    });

    // Configura el correo electrónico
    const mailOptions = {
      from: 'asstgourmetyparrilla@gmail.com',
      to: 'asstgourmetyparrilla@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    };

    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email enviado correctamente' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error al enviar el email:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar el email', details: error.message }), {
      status: 500,
    });
  }
}


import nodemailer from "nodemailer";

let to = "fordezdeveloper@gmail.com"

export async function sendCorreo(to) {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: 'fordezdeveloper@gmail.com',
      pass: 'vznkyoiqtzytfvpy', 
    },
  });

  let info = await transporter.sendMail({
    from: 'fordezdeveloper@gmail.com',
    to: to, 
    subject: "Gracias por suscribirte Figo", 
    text: "Te suscribiste al boletin de noticias de Asodipat ", 
    html: "<b>Hello world?</b>",
  });

  console.log(info);
}

sendCorreo(to).catch(error => {
    console.error( 'fallo la notificación');
    });
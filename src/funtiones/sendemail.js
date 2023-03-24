  import axios from 'axios';

  export const enviarCorreo = async (correo, nombre) => {
    try {
      const response = await axios.post('https://sendemail-faei2nk6gq-uc.a.run.app/send-email', {
        to: correo,
        subject: `¡${nombre}, quedaste suscripto al boletín de noticias!`,
        text: 'Asodipat se complace en tenerte como parte de nuestra comunidad de suscriptores, donde recibirás información actualizada y relevante sobre una variedad de temas que pueden ser de interés para ti. Desde noticias de la actualidad hasta consejos prácticos y guías útiles, nuestro boletín de noticias está diseñado para mantenerte informado y al día con las últimas tendencias y avances.'
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      return response.data.message
    } catch (error) {
      console.error(error);
    }
  }



  import axios from 'axios';

  export const enviarCorreo = async (correo, nombre, subject, mensajeCorreo) => {
    try {
      const response = await axios.post('https://sendemail-faei2nk6gq-uc.a.run.app/send-email', {
        to: correo,
        subject: `¡${nombre}, ${subject}`,
        text: mensajeCorreo
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

  
    
  
  

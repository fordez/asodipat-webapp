<script>
  import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
  import { db } from '../firebase';
  import { enviarCorreo } from '../funtiones/sendemail';

  let respuesta = '';
  let color = '';
  let textbuton = 'text-white'; 
  let suscriptores = {
    nombre: '',
    correo: '',
  };
  let enviado = false; // nuevo estado

  const validarEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const hanldeSubmit = async () => {
    
    if (!validarEmail(suscriptores.correo)) {
      // Si el correo electrónico no es válido, agregar una clase CSS al campo de entrada
      document.getElementById('exampleFormControlInput1').classList.add('border', 'border-red');
      return;
    }

    const button = document.querySelector('#btn');
    button.classList.add('btn-loading');
    const icon = button.querySelector('span');
    icon.classList.remove('hidden');
    textbuton = 'text-color-primary'

    const verifyEmail = await getDocs(query(collection(db, 'suscriptores'), where('correo', '==', suscriptores.correo)));
   if(verifyEmail.size > 0){
    respuesta = 'Correo ya existe';
    color = 'text-color-naranja';
    textbuton = 'Suscribir';
    const button = document.querySelector('#btn');
    button.classList.add('btn-loading');
    const icon = button.querySelector('span');
    icon.classList.add('hidden');
    textbuton = 'text-white';
   }
   else{
    document.getElementById("btn").disabled = true;
    await addDoc(collection(db, 'suscriptores'), suscriptores);
    console.log('Suscriptor Guardado');
    let status = await enviarCorreo(suscriptores.correo, suscriptores.nombre);

    if(status == 'ok'){
      respuesta = 'Gracias por suscribirte'
      color = 'text-color-verde';
      textbuton = 'text-white';
    }

    // Limpiar el campo de entrada después de enviar el formulario
    suscriptores.nombre = '';
    suscriptores.correo = '';
    enviado = true; // actualizar el estado después del envío
   
    const button = document.querySelector('#btn');
    button.classList.add('btn-loading');
    const icon = button.querySelector('span');
    icon.classList.add('hidden');
   }
   
}
  
  // Función de manejo de cambios en el campo de entrada de correo electrónico
  const handleChange = (event) => {
    suscriptores.correo = event.target.value;
    if (validarEmail(suscriptores.correo)) {
      // Si el correo electrónico es válido, eliminar la clase CSS del campo de entrada
      document.getElementById('exampleFormControlInput1').classList.remove('border', 'border-color-primary');
      document.getElementById('exampleFormControlInput2').classList.remove('border', 'border-color-primary');
    }
  };
</script>

<div class="grid gird-cols-1 gap-4 flex justify-center items-center">
  <form on:submit|preventDefault={hanldeSubmit}>
    <div class="mb-2">
      <input
        bind:value={suscriptores.nombre}
        type="text"
        class="form-control block w-30 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-color-primary rounded-lg focus:outline-none focus:border-primary-light focus:shadow-outline-primary"
        id="exampleFormControlInput1"
        placeholder="Nombre completo"
        required
      />
    </div>
    <div class="mb-2">
      <input
        bind:value={suscriptores.correo}
        type="email"
        class="form-control block w-30 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-color-primary rounded-lg focus:outline-none focus:border-primary-light focus:shadow-outline-primary"
        id="exampleFormControlInput2"
        placeholder="Correo electrónico"
        required
        on:input={handleChange}
      />
    </div>

    <div class="{color} text-sm mb-2 text-center">
      <p>{respuesta}</p>
    </div>

    <div class="text-center md:text-left">
      <div class="flex justify-center">
        <button
          id='btn'
          class="relative inline-block text-white bg-color-primary rounded-lg px-4 py-2 text-base font-medium hover:bg-primary-light focus:outline-none focus:shadow-outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
        >
          <span class="absolute inset-0 flex items-center justify-center hidden">
            <i class="fas fa-spinner fa-spin text-2xl"></i>
          </span>
          <span class="{textbuton}">
            Suscribir</span>
        </button>
      </div>

    </form>
</div>



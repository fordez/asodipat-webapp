<script>
  import {addDoc, collection, doc} from 'firebase/firestore'
  import {db} from '../firebase'
  let suscriptores = {
      correo:''
  }

  const hanldeSubmit = async () => {
    await addDoc(collection(db,'suscriptores'),suscriptores);
    console.log('Suscriptor guardado')
    
  }
</script>




    <div class="grid  gird-cols-1 gap-4  flex justify-center items-center">
     
      <div class="mb-2">
        <p class="text-color-second text-center text-lg">
          <strong>Boletín de Noticias</strong>
        </p>
      </div>
     
      <div class="md:mb-2 ">
        <input
           bind:value={suscriptores.correo}
          type="text"
          class="
            form-control
            block
            w-50
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-color-second
            rounded-xl
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
          id="exampleFormControlInput1"
          placeholder="correo"/>
      </div>

      <div class="md:mr-auto mb-6 mx-auto">
        <button type="submit" class="inline-block px-12 py-2 border-2 border-white text-white rounded-xl font-medium text-md leading-tight uppercase bg-color-primary hover:bg-color-button focus:outline-none focus:ring-0 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110"on:click={hanldeSubmit}>
            Suscribirse
        </button>
      </div>
    </div>

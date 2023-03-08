
<script>
  import {collection, doc, onSnapshot} from 'firebase/firestore'
	import { onDestroy } from 'svelte';
  import {db} from '../firebase';

  let experiencias = [];
  let video = [];

  const unsub = onSnapshot(collection(db,'experiencia'),
  querySnapshot =>{
   experiencias =  querySnapshot.docs.map(doc =>{
      return {...doc.data(), id: doc.id}
    })

    console.log(experiencias)

    experiencias.forEach((experiencia, index) =>{
      video[index] = experiencia.videourl
      console.log(video[index])
    })
  },(err) =>{
    console.log(err);
  })

  onDestroy(unsub)

  let visible = false;
  let tooltipVisible = false;
  let currentIndex = 0;
  let icon = ['fa-brands fa-twitter', 'fa-brands fa-facebook', 'fa-brands fa-instagram']
  let iconColor = ['text-color-twiter','text-color-facebook', 'text-color-instagram'] 


function openDialogDonar() {
  visible = true;
  document.body.classList.add('modal-open');
}

function closeDialogDonar() {
  visible = false;
  document.body.classList.remove('modal-close');
}


function handleNext() {
		currentIndex = currentIndex === experiencias.length - 1 ? 0 : currentIndex + 1;
      
	}

	function handlePrev() {
		currentIndex = currentIndex === 0 ? experiencias.length - 1 : currentIndex - 1;
	}
</script>


{#if visible}
<button class="" on:click={openDialogDonar}> </button>
<div class="fixed inset-y-0 left-0 z-50 w-full bg-black bg-opacity-50 flex items-center justify-center" on:click={e => {if(e.target === e.currentTarget) closeDialogDonar()}}>
  <div class=" rounded-lg w-80 overflow-hidden my-auto">
    <button type="button" class="text-2xl text-white" on:click={closeDialogDonar}><i class="fa-regular fa-circle-xmark"></i></button>
    <div class="dialog-body overflow-y-auto  ">
      <div class="relative  ">
        <video class="  object-cover rounded-md shadow-lg"
               src={video[currentIndex]}
               controls
               autoplay
               >
        </video>

        <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" on:click={handlePrev}
        
      >
        <i class="fa-sharp fa-solid fa-chevron-left text-white text-4xl ml-1 " />
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" on:click={handleNext}
        
      >
        <i class="fa-sharp fa-solid fa-chevron-right text-white text-4xl mx-1 " />
      </button>
      </div>
     
     
    </div>
    
  </div>
</div>
  
{/if}

    <section class="mb-32 ">
      <style>
        .zoom:hover img {
          transform: scale(1.1);
        }
      </style>
      <div class="grid lg:grid-cols-3 gap-6">
        
          <button class="" on:click={openDialogDonar}> 
          
        <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
          style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <img title="medio-ambiente" src="https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fexperiencia%2Fambiente.jpg?alt=media&token=1e13d6d7-d349-4838-8128-db4f2ec66a5b"
            class="w-full transition duration-300 ease-linear align-middle" />
        
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style="background-color: rgba(0, 0, 0, 0.3)">
              <div class="flex justify-start items-end h-full">
                <h5 class="text-lg font-bold text-white m-6">Medio Ambiente</h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div
                class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                style="background-color: rgba(253, 253, 253, 0.15)"></div>
            </div>
         
        </div>
      </button>
      <button class="" on:click={openDialogDonar}> 
        <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
          style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <img title="emprendimiento" src="https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fexperiencia%2Femprender.jpg?alt=media&token=bf9205dc-cae6-4648-8b7c-a5dd05628aac"
            class="w-full transition duration-300 ease-linear align-middle" />
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style="background-color: rgba(0, 0, 0, 0.3)">
              <div class="flex justify-start items-end h-full">
                <h5 class="text-lg font-bold text-white m-6">Emprendimiento</h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div
                class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                style="background-color: rgba(253, 253, 253, 0.15)"></div>
            </div>
        </div>
        </button>
        <button class="" on:click={openDialogDonar}>
        <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
          style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <img title="convivencia-paz" src="https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fexperiencia%2Fconvivencia.jpg?alt=media&token=83292756-e627-436c-9753-c12791d4ae67"
            class="w-full transition duration-300 ease-linear align-middle" />
          
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style="background-color: rgba(0, 0, 0, 0.3)">
              <div class="flex justify-start items-end h-full">
                <h5 class="text-lg font-bold text-white m-6">Convivencia y Paz</h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div
                class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                style="background-color: rgba(253, 253, 253, 0.15)"></div>
            </div>
        
        </div>
        </button>
        <button class="" on:click={openDialogDonar}> 
        <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
          style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <img title="deporte" src="https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fexperiencia%2Fdeporte.jpg?alt=media&token=a6c94fd6-5950-4fa1-bde1-493e770ecf57"
            class="w-full transition duration-300 ease-linear align-middle" />
         
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style="background-color: rgba(0, 0, 0, 0.3)">
              <div class="flex justify-start items-end h-full">
                <h5 class="text-lg font-bold text-white m-6">Deporte</h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div
                class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                style="background-color: rgba(253, 253, 253, 0.15)"></div>
            </div>
        </div>
        </button>
        <button class="" on:click={openDialogDonar}> 
        <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
          style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <img src="https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fexperiencia%2Fcultura.jpg?alt=media&token=b6747964-df1a-4e56-bfb9-661e12c926bf"
            class="w-full transition duration-300 ease-linear align-middle" />
         
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style="background-color: rgba(0, 0, 0, 0.3)">
              <div class="flex justify-start items-end h-full">
                <h5 class="text-lg font-bold text-white m-6">Cultura</h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div
                class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                style="background-color: rgba(253, 253, 253, 0.15)"></div>
            </div>
        </div>
       </button>
       <button class="" on:click={openDialogDonar}>  
        <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
          style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <img title="programas-sociales" src="https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fexperiencia%2Fayuda.jpg?alt=media&token=6c6745fb-b6b3-40ed-98d4-c461eb62f556"
            class="w-full transition duration-300 ease-linear align-middle" />
        
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style="background-color: rgba(0, 0, 0, 0.3)">
              <div class="flex justify-start items-end h-full">
                <h5 class="text-lg font-bold text-white m-6">Programas Sociales</h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div
                class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                style="background-color: rgba(253, 253, 253, 0.15)"></div>
            </div>
        
        </div>
        </button>
      </div>
  </section>


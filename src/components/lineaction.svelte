
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

<section class="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
	<div class="max-w-6xl px-6 py-10 mx-auto">
        <p class="text-sm font-medium text-color-second uppercase">
            Concentramos nuestro Trabajando en estas
        </p>
        <h1 class="mt-2 text-4xl font-semibold text-color-footer capitalize lg:text-5xl ">
            lineas de <span class="text-color-primary" >acción</span> 
        </h1>
    </div>
	<div class="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3"> 
		<button class="" on:click={openDialogDonar}> 
		<div class="flex flex-col items-center p-8 bg-color-header rounded-3xl shadow-2xl">
            <i class="fa-sharp fa-solid fa-feather-pointed text-5xl text-color-verde hover:text-color-primary animate-bounce w-6 h-6"></i>
			<h3 class="my-3 text-2xl py-2 font-semibold text-color-nav">Medio Ambiente</h3>
			<div class="space-y-1 leading-tight">
				<p class="text-color-nav px-5 text-md text-center ">
                    Debemos actuar ahora para preservarlo para futuras generaciones.
                </p>
			</div>
		</div>
	</button>
	<button class="" on:click={openDialogDonar}>
		<div class="flex flex-col items-center p-8 bg-color-header rounded-3xl shadow-2xl">
            <i class="fa-sharp fa-solid fa-building text-5xl text-color-purpura hover:text-color-primary animate-bounce w-6 h-6"></i>
			<h3 class="my-3 text-2xl py-2 font-semibold text-color-nav">Emprendimiento</h3>
			<div class="space-y-1 leading-tight">
                <p class="text-color-nav px-5 text-md text-center ">
                    Son clave para el desarrollo económico y la sostenibilidad de la sociedad.
                </p>
			</div>
		</div>
	</button>
	<button class="" on:click={openDialogDonar}>
		<div class="flex flex-col items-center p-8 bg-color-header rounded-3xl shadow-2xl">
            <i class="fa-solid fa-dove text-5xl text-color-primary hover:text-color-primary animate-bounce w-6 h-6"></i>
			<h3 class="my-3 text-2xl py-2 font-semibold text-color-nav">Convivencia y Paz</h3>
			<div class="space-y-1 leading-tight">
                <p class="text-color-nav px-5 text-md text-center ">
                    La convivencia pacífica es esencial para promover una sociedad libre de violencia.
                </p>
			</div>
		</div>
	</button>
	<button class="" on:click={openDialogDonar}>
		<div class="flex flex-col items-center p-8 bg-color-header rounded-3xl shadow-2xl">
            <i class="fa-sharp fa-solid fa-futbol text-5xl  hover:text-color-primary animate-bounce w-6 h-6"></i>
			<h3 class="my-3 text-2xl py-2 font-semibold text-color-nav">Deporte y Recreación</h3>
			<div class="space-y-1 leading-tight">
				<p class="text-color-nav px-5 text-md text-center ">
                    Contribuyen a mejorar la salud física y mental humana.
                </p>
			</div>
		</div>
	</button>
	<button class="" on:click={openDialogDonar}>
		<div class="flex flex-col items-center p-8 bg-color-header rounded-3xl shadow-2xl">
            <i class="fa-solid fa-icons text-5xl text-color-naranja hover:text-color-primary animate-bounce w-6 h-6"></i>
			<h3 class="my-3 text-2xl py-2 font-semibold text-color-nav">Cultura y Biodiversidad</h3>
			<div class="space-y-1 leading-tight">
				<p class="text-color-nav px-5 text-md text-center ">
                    La cultura enriquece nuestras vidas y nos conecta con la diversidad humana.
                </p>
			</div>
		</div>
	</button>
	<button class="" on:click={openDialogDonar}>
		<div class="flex flex-col items-center p-8 bg-color-header rounded-3xl shadow-2xl">
            <i class="fa-solid fa-business-time text-5xl text-color-button hover:text-color-primary animate-bounce w-6 h-6"></i>
			<h3 class="my-3 text-2xl py-2 font-semibold text-color-nav">Gestión Pública</h3>
			<div class="space-y-1 leading-tight">
				<p class="text-color-nav px-5 text-md text-center ">
                    Mejoramos la atención ciudadana al reducir tiempos siendo eficaz y eficiencia.
                </p>
			</div>
		</div>
	</button>
	</div>
</section>
<script>
	import Aportar from "./aportar.svelte";
import Asistir from "./asistir.svelte";
	import Donar from "./donar.svelte";
import Seguir from "./seguir.svelte";
	import Suscribirse from "./suscribirse.svelte";
	import Unete from "./unete.svelte";

    let cargando = true;
    let contenido = "";
  
    const cargarContenido = () => {
      setTimeout(() => {
        cargando = false;
        contenido = "Contenido cargado";
      }, 3000);
    };
  
    cargarContenido();
  </script>
  
 
  
<div class="p-6 mx-auto w-full max-w-xl ">
	<h1 class="mb-4 text-5xl text-color-footer font-extrabold tracking-tight sm:text-6xl p-4 ">
		Apreciación por <span class="text-color-primary">Participar</span>
	</h1>
</div>

{#if cargando}
<div class="p-10">
    <div class="w-16 h-16 border-4 border-dashed rounded-full mx-auto animate-spin border-color-nav"></div>
    <h1 class="text-center text-color-nav">Esperar 2 seg</h1>
</div>

{:else}
<div class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-2 p-8 max-w-5xl  mx-auto">
   
        <Seguir/>
 
        <Suscribirse/>
 
        <Unete/>
    
        <Asistir/>

        <Aportar/>

        <Donar/>
  </div>
  
{/if}


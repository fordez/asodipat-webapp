<script>
    let cargando = true;
    let contenido = "";
  
    const cargarContenido = () => {
      setTimeout(() => {
        cargando = false;
        contenido = "Contenido cargado";
      }, 2000);
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
   

    <div class="max-w-xs mx-auto rounded-6xl shadow-2xl bg-color-header">
        <img src="/participar/seguir.jpg"  alt="" class="object-cover object-center  h-60 w-full   rounded-t-md dark:bg-gray-500">
        <div class="flex flex-col justify-between p-4 space-y-8">
            <div class="space-y-2">
                <h2 class="text-2xl font-semibold tracking-wide text-color-nav">Siguenos En Redes Sociales</h2>
                
            </div>
            <button class=" text-lg bg-color-button hover:bg-color-primary text-white font-bold p-2 rounded-lg px-5 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
                Seguir
            </button>
        </div>
    </div>
    
   <div class="max-w-xs mx-auto rounded-6xl shadow-2xl bg-color-header">
    <img src="/participar/suscribir.jpg" alt="" class="object-cover object-center  h-60 w-full   rounded-t-md dark:bg-gray-500">
    <div class="flex flex-col justify-between p-4 space-y-8">
        <div class="space-y-2">
            <h2 class="text-2xl font-semibold tracking-wide text-color-nav">Suscribete Al Boletín De Noticias</h2>
            
        </div>
        <button class=" text-lg bg-color-button hover:bg-color-primary text-white font-bold p-2 rounded-lg px-5 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
            Suscribirse
        </button>
    </div>
</div>
<div class="max-w-xs mx-auto rounded-6xl shadow-2xl bg-color-header">
    <img src="/participar/unete.jpg" alt="" class="object-cover object-center h-60 w-full   rounded-t-md dark:bg-gray-500">
    <div class="flex flex-col justify-between p-4 space-y-8">
        <div class="space-y-2">
            <h2 class="text-2xl font-semibold tracking-wide text-color-nav">Unirse Al Grupo De Facebook</h2>
            
        </div>
        <button class=" text-lg bg-color-button hover:bg-color-primary text-white font-bold p-2 rounded-lg px-5 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
            Uneté
        </button>
    </div>
</div>
<div class="max-w-xs mx-auto rounded-6xl shadow-2xl bg-color-header">
    <img src="/participar/compartir.jpg" alt="" class="object-cover object-center h-60 w-full   rounded-t-md dark:bg-gray-500">
    <div class="flex flex-col justify-between p-4 space-y-8">
        <div class="space-y-2">
            <h2 class="text-2xl font-semibold tracking-wide text-color-nav">Comparte El Contedido Publicado</h2>
            
        </div>
        <button class=" text-lg bg-color-button hover:bg-color-primary text-white font-bold p-2 rounded-lg px-5 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
            Compartir
        </button>
    </div>
</div>
    <div class="max-w-xs mx-auto rounded-6xl shadow-2xl bg-color-header">
        <img src="/participar/comentar.jpg" alt="" class="object-cover object-center h-60 w-full   rounded-t-md dark:bg-gray-500">
        <div class="flex flex-col justify-between p-4 space-y-8">
            <div class="space-y-2">
                <h2 class="text-2xl font-semibold tracking-wide text-color-nav">Comentar El Contedido Publicado</h2>
                
            </div>
            <button class=" text-lg bg-color-button hover:bg-color-primary text-white font-bold p-2 rounded-lg px-5 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
                Comentar
            </button>
        </div>
    </div>
    <div class="max-w-xs mx-auto rounded-6xl shadow-2xl bg-color-header">
        <img src="/participar/asistir.jpg" alt="" class="object-cover object-center h-60 w-full   rounded-t-md dark:bg-gray-500">
        <div class="flex flex-col justify-between p-4 space-y-8">
            <div class="space-y-2">
                <h2 class="text-2xl font-semibold tracking-wide text-color-nav">Asiste A Eventos En Vivo</h2>
                
            </div>
            <button class=" text-lg bg-color-button hover:bg-color-primary text-white font-bold p-2 rounded-lg px-5 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
                Asistir
            </button>
        </div>
    </div>
    <div class="max-w-xs mx-auto rounded-6xl shadow-2xl bg-color-header">
        <img src="/participar/aportar.jpg" alt="" class="object-cover object-center h-60 w-full   rounded-t-md dark:bg-gray-500">
        <div class="flex flex-col justify-between p-4 space-y-8">
            <div class="space-y-2">
                <h2 class="text-2xl font-semibold tracking-wide text-color-nav">Aporta Herramientas De Trabajo</h2>
                
            </div>
            <button class=" text-lg bg-color-button hover:bg-color-primary text-white font-bold p-2 rounded-lg px-5 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
                Aportar
            </button>
        </div>
    </div>
    <div class="max-w-xs mx-auto rounded-6xl shadow-2xl bg-color-header">
        <img src="/participar/donar.jpg" alt="" class="object-cover object-center h-60 w-full   rounded-t-md dark:bg-gray-500">
        <div class="flex flex-col justify-between p-4 space-y-8">
            <div class="space-y-2">
                <h2 class="text-2xl font-semibold tracking-wide text-color-nav">Gracias Por Tú Colaboración</h2>
                
            </div>
            <button class=" text-lg bg-color-button hover:bg-color-primary text-white font-bold p-2 rounded-lg px-5 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
                Donar
            </button>
        </div>
    </div>
  </div>
  
{/if}


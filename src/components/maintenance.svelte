<script>
	import Boletin from "./boletin.svelte";

    let visible = false;
    let tooltipVisible = false;
  
    function openDialogDonar() {
      visible = true;
      document.body.classList.add('modal-open');
    }
  
    function closeDialogDonar() {
      visible = false;
      document.body.classList.remove('modal-close');
    }
  
    function copiarTexto() {
      const texto = document.getElementById('texto-a-copiar').innerText;
      navigator.clipboard.writeText(texto);
      tooltipVisible = true;
      setTimeout(() => {
        tooltipVisible = false;
      }, 2000); // Ocultar el tooltip después de 2 segundos
    }
  </script>

{#if visible}
  <div class="fixed inset-y-0 left-0 z-50 w-full bg-black bg-opacity-50 flex items-center justify-center" on:click={e => {if(e.target === e.currentTarget) closeDialogDonar()}}>
    <div class="bg-white rounded-lg p-4 max-w-4xl overflow-hidden my-auto">
      <div class="dialog-body overflow-y-auto h-full p-4">
        <button type="button" class="text-2xl text-color-nav top-0 right-0" on:click={closeDialogDonar}><i class="fa-regular fa-circle-xmark"></i></button>
      <div class="dialog-body overflow-y-auto h-full p-4">
      
        <h1 class="text-color-nav font-bold text-3xl max-w-xs p-4">Suscribete Al Boletín De<span class="text-color-button ml-2" > Noticias</span> </h1>
        
            <Boletin/>
      </div>
      </div>
    </div>
  </div>
{/if}


<section class="flex items-center h-full p-16 ">
	<div class="container flex flex-col bg-color-header rounded-3xl items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center p-6 ">
			<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
				<i class="fa-sharp fa-solid fa-rss text-8xl text-color-primary px-1"></i>
			</h2>
			<span class="text-xs uppercase text-color-second">¡Aún no hay preliminares!</span>
			<p class="text-2xl font-semibold md:text-3xl text-color-nav">Suscribete al boletin de noticias</p>
			<p class="mt-4 text-xl mb-8 text-color-nav">Para tenerte informado via email de los avances de proximas experiencias</p>
			<button class=" text-lg  bg-color-button hover:bg-color-primary text-white font-bold p-2 rounded-lg px-5 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110" on:click={openDialogDonar}>
				Suscribir
			</button>
		</div>
	</div>
</section>
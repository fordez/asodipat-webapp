<script>
	import Boletin from "./boletin.svelte";
	import Unete from "./unete.svelte";

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
    
      <h1 class="text-color-nav font-bold text-3xl max-w-xs p-4">Suscribete Al Boletín De<span class="text-color-button " > Noticias</span> </h1>
      
         <Unete/>
    </div>
    </div>
  </div>
</div>
{/if}

<section class="p-6 ">
	<div class="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div class="w-full px-6 py-16 bg-color-header rounded-2xl shadow-2xl sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
			<span class="block mb-2 text-color-second">Compartir Temas De Interés</span>
			<h1 class="text-4xl font-extrabold text-color-nav">Uneté A Nuestro Grupo De <span class="text-color-primary" >Facebook</span></h1>
			<p class="my-8">
				<span class="font-medium text-color-nav">"Nuestra comunidad, donde la diversión y el aprendizaje van de la mano"
			</p>
			
				
				<button type="button" class="w-full py-2 font-semibold rounded bg-color-primary text-white"on:click={openDialogDonar}>Uneté</button>
			
		</div>
		<img src="https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fparticipar%2Funete.jpg?alt=media&token=f942d717-e5b0-4562-b228-2cea7f650810" alt="" class="object-cover w-full shadow-2xl rounded-2xl xl:col-span-3 dark:bg-gray-500">
	</div>
</section>
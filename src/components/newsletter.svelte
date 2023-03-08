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
      
        <h1 class="text-color-nav font-bold text-3xl max-w-xs p-4">Suscribete Al Boletín De<span class="text-color-button " > Noticias</span> </h1>
        
            <Boletin/>
      </div>
      </div>
    </div>
  </div>
{/if}

<div class="container my-12 mx-auto">

  <!-- Section: Design Block -->
  <section class="mb-6 text-center lg:text-left">
    <div class="px-6 py-12 lg:my-12">
      <div class="container mx-auto xl:px-32 ">
        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
          <div class="mt-12 lg:mt-0 bg-color-header">
            <div
            class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
            style="padding-top: 56.25%"
          >
            <iframe
              class="embed-responsive-item shadow-2xl absolute  top-0 right-0 bottom-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
              allowfullscreen=""
              data-gtm-yt-inspected-2340190_699="true"
              id="240632615"
              title='newsletter'
            ></iframe>
          </div>
           
          </div>
          <div class="mb-6 lg:mb-0 bg-color-header p-4 rounded-2xl shadow-2xl">
            <div class="w-full px-6 py-16 sm:px-12 md:px-16 xl:col-span-2 ">
              <span class="block mb-2 text-color-second">Enterate de </span>
              <h1 class="text-4xl font-extrabold text-color-nav">Suscribete al Boletín De <span class="text-color-primary" > Noticias</span></h1>
              <p class="my-8">
                <span class="font-medium text-color-nav">Recibe las últimas noticias directamente en tu bandeja de entrada.
              </p>
                <button type="button" class="w-full py-2 font-semibold rounded bg-color-primary text-white" on:click={openDialogDonar}>Suscribete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
  
</div>
<!-- Container for demo purpose -->
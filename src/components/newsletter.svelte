<script>
	import Boletin from "./boletin.svelte";

</script>



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
              
                
                <button type="button" class="w-full py-2 font-semibold rounded bg-color-primary text-white"on:click={openDialogDonar}>Suscribir</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
  
</div>
<!-- Container for demo purpose -->
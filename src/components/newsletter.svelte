<script>
	import Boletin from "./boletin.svelte";

</script>



<div class="container my-12 mx-auto">

  <!-- Section: Design Block -->
  <section class="mb-6 bg-color-header text-center lg:text-left shadow-xl">
    <div class="px-6 py-12 lg:my-12">
      <div class="container mx-auto xl:px-32">
        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
          <div class="mt-12 lg:mt-0">
            <div
            class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
            style="padding-top: 56.25%"
          >
            <iframe
              class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
              allowfullscreen=""
              data-gtm-yt-inspected-2340190_699="true"
              id="240632615"
            ></iframe>
          </div>
           
          </div>
          <div class="mb-6 lg:mb-0">
            <h1 class="text-4xl text-color-nav font-bold tracking-tight mb-12">
              Proximas Experiencias  <br /><span class="text-color-primary">Suscribete al </span>
            </h1>
            
            <div class="md:flex flex-row  ">
              <Boletin/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
  
</div>
<!-- Container for demo purpose -->
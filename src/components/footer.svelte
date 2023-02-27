<script>
	import Contactofooter from "./contactofooter.svelte";
	import Googlemaps from "./googlemaps.svelte";
	import Navheader from "./navheader.svelte";
    import Socialfooter from "./socialfooter.svelte";

</script>
<footer class="text-center bg-color-header shadow-xl">
  <div class="container px-6 pt-6">

	<div class="flex justify-center mx-auto mb-6 max-w-xl p-6">
		<Navheader/>
    </div>
    
    <div>
      <form action="">
        <div class="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
          <div class="md:ml-auto md:mb-6">
            <p class="text-color-second text-lg">
              <strong>Boletín de Noticias</strong>
            </p>
          </div>

          <div class="md:mb-6">
            <input
              type="text"
              class="
                form-control
                block
                w-full
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

          <div class="md:mr-auto mb-6">
            <button type="submit" class="inline-block px-6 py-2 border-2 border-white text-white rounded-xl font-medium text-md leading-tight uppercase bg-color-primary hover:bg-color-button focus:outline-none focus:ring-0 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
				Suscribirse
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="mb-6">
		<Socialfooter/>
    </div>

    <div class="">
		<Contactofooter/>
    </div>
  </div>
  <div
	class="font-light  text-color-second text-sm py-4 text-center items-center justify-center bg-color-title"
>
	Copyright © 2018 Free Software Foundation, GPL License, versión 3.0
	<br />
	<a class="text-color-fordez hover:text-color-primary" href="https://github.com/fordez">
		Developer
	</a>
</div>
</footer>
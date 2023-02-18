<script>
	import Contactofooter from "./contactofooter.svelte";
    import Navfooter from "./navfooter.svelte";
	import Navheader from "./navheader.svelte";
    import Socialfooter from "./socialfooter.svelte";

</script>
<footer class="text-center bg-color-header">
  <div class="container px-6 pt-6">

	<div class="flex justify-center mx-auto mb-6 hidden sm:block max-w-xl p-6">
		<Navheader/>
    </div>
    <div class="flex justify-center mb-6 sm:hidden">
		<Navfooter/>
    </div>
    <div>
      <form action="">
        <div class="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
          <div class="md:ml-auto md:mb-6">
            <p class="text-color-nav text-lg">
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
                rounded-lg
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              id="exampleFormControlInput1"
              placeholder="correo"/>
          </div>

          <div class="md:mr-auto mb-6">
            <button type="submit" class="inline-block px-6 py-2 border-2 border-white text-white rounded-lg font-medium text-md leading-tight uppercase rounded bg-color-primary hover:bg-color-button focus:outline-none focus:ring-0 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
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
</footer>
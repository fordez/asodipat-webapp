<script>
	import Buttondonar from "./buttondonar.svelte";
	import Buttonparticipar from "./buttonparticipar.svelte";

</script>


<section class="p-6 bg-color-primary text-white">
	<div class="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-3 xl:grid-cols-3 ">
		<Buttondonar/>
    	<Buttonparticipar/>
	<a href="/contacto">
		<div class="flex p-4 space-x-4 rounded-lg  bg-color-footer transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
			
			<div class="flex justify-center p-4 align-middle rounded-lg  bg-color-naranja">
			 <i class="fa-sharp fa-solid text-4xl fa-mug-saucer"></i>
			</div>
			<div class="flex flex-col justify-center align-middle">
				<p class="text-2xl font-semibold leading-none">Proyectos</p>
				<p class="capitalize">Experiencias en Proceso</p>
			</div>
		
		</div>
	</a>
	</div>
</section>





<script>
	import Buttondonar from "./buttondonar.svelte";
	import Buttonparticipar from "./buttonparticipar.svelte";

</script>


<section class="p-6 bg-color-primary text-color-header ">
	<div class="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 ">
		<Buttondonar/>
    <Buttonparticipar/>
		<div class="flex p-4 space-x-4 rounded-lg  bg-color-footer transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
			<div class="flex justify-center p-4 align-middle rounded-lg  bg-color-purpura">
				<i class="fa-sharp fa-solid fa-rss text-4xl px-1"></i>
			</div>
			<div class="flex flex-col justify-center align-middle">
				<p class="text-2xl font-semibold leading-none">Noticias</p>
				<p class="capitalize">Proyectos en Proceso</p>
			</div>
		</div>
		<div class="flex p-4 space-x-4 rounded-lg  bg-color-footer transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
			<div class="flex justify-center p-4 align-middle rounded-lg bg-color-naranja hover:bg-color-naranjahover">
		
                <i class="fa-sharp fa-regular fa-folder-open text-3xl px-1"></i>
			</div>
            
			<div class="flex flex-col justify-center align-middle">
				<p class=" text-2xl font-semibold leading-none">Experiencias</p>
				<p class="capitalize">Proyectos Ejecutados</p>
			</div>
		</div>
	</div>
</section>





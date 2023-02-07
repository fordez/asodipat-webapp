<script>
	import Collage from "../components/collage.svelte";
	import Ourallies from "../components/ourallies.svelte";
	import Ouralliesmini from "../components/ouralliesmini.svelte";
	import Sidebar from "../components/sidebar.svelte";
	import Slide from "../components/slide.svelte";

</script>

<Slide/>

<section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
				<span class="sr-only ">Estamos en Mantenimiento</span><i class="fa-sharp fa-solid fa-screwdriver-wrench text-color-footer"></i>
			</h2>
			<p class="text-2xl font-semibold md:text-3xl text-color-nav">Estamos en mantenimiento</p>
			<p class="mt-4 text-xl mb-8 text-color-nav">Para Cualquier solicitud</p>
			<a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=3206937812&text=Hola,%20deseo%20hablar%20con%20alg%C3%BAn%20representante" class="px-8 py-3 font-semibold rounded bg-color-primary text-white dark:text-gray-900">Contactar</a>
		</div>
	</div>
</section>

<Ouralliesmini/>



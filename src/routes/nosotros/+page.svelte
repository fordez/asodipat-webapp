<script>
	import Aboutbanner from '../../components/aboutbanner.svelte';
	import Boxambiente from '../../components/boxambiente.svelte';
	import Boxcultura from '../../components/boxcultura.svelte';
	import Boxdeporte from '../../components/boxdeporte.svelte';
	import Boxemprender from '../../components/boxemprender.svelte';
	import Boxgestion from '../../components/boxgestion.svelte';
	import Boxpaz from '../../components/boxpaz.svelte';
	import Callactionabout from '../../components/callactionabout.svelte';
	import Mision from '../../components/mision.svelte';
	import Title from '../../components/title.svelte';
	import Vision from '../../components/vision.svelte';
</script>

<Aboutbanner />

<Title title="Conoce Más De " />

<Mision />

<Vision />

<div class="max-w-6xl px-6 py-10 mx-auto">
	<p class="text-sm font-medium text-color-second uppercase">
		Concentramos nuestro Trabajando en estas
	</p>

	<h1 class="mt-2 text-4xl font-semibold text-color-footer capitalize lg:text-6xl ">
		lineas de <span class="text-color-primary" >acción</span> 
	</h1>
</div>
<div class="grid sm:grid-cols-2 md:grid-cols-3 p-10">
	<div class="text-center">
		<Boxambiente />
	</div>
	<div class="bg-gray-200 text-center">
		<Boxemprender />
	</div>
	<div class="bg-gray-200 text-center">
		<Boxpaz />
	</div>
	<div class="bg-gray-200 text-center">
		<Boxdeporte />
	</div>
	<div class="bg-gray-200 text-center">
		<Boxcultura />
	</div>
	<div class="bg-gray-200 text-center">
		<Boxgestion />
	</div>
</div>

<Callactionabout />

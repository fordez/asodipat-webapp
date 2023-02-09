<script>
	import About from '../../components/about.svelte';
	import Boxambiente from '../../components/boxambiente.svelte';
	import Boxcultura from '../../components/boxcultura.svelte';
	import Boxdeporte from '../../components/boxdeporte.svelte';
	import Boxemprender from '../../components/boxemprender.svelte';
	import Boxlogo from '../../components/boxlogo.svelte';
	import Boxpaz from '../../components/boxpaz.svelte';
	import Boxgestion from '../../components/boxgestion.svelte';
	import Aboutbanner from '../../components/aboutbanner.svelte';
	import Faq from '../../components/faq.svelte';
</script>

<Aboutbanner/>

<About />

<div class="grid sm:grid-cols-2 md:grid-cols-3 p-10">
	<div class="text-center">
		<Boxemprender/>
	</div>

	<div class="bg-gray-200 text-center">
		<Boxpaz/>
	</div>

	<div class="bg-gray-200 text-center">
		<Boxambiente />
	</div>
	<div class="bg-gray-200 text-center">
		<Boxcultura />
	</div>
	<div class="bg-gray-200 text-center">
		<Boxdeporte />
	</div>
	<div class="bg-gray-200 text-center">
		<Boxgestion />
	</div>
</div>

<Faq/>
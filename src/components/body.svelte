<script>
	import Callaction from "./callaction.svelte";
	import Experience from "./experience.svelte";
	import Experiencia from "./experiencia.svelte";
	import Maintenance from "./maintenance.svelte";
	import Ourallies from "./ourallies.svelte";
	import Section from "./section.svelte";
	import Stats from "./stats.svelte";
	import Tap from "./tap.svelte";
	import Testimonial from "./testimonial.svelte";
	import Title from "./title.svelte";

</script>

<div class="py-6 bg-color-primary text-white">
	<Stats/>
</div>

<Title/>

<button type="button" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-color-button hover:bg-blue-700 mt-4 lg:mt-0" on:click={openModal}>
	Abrir modal
</button>


<Experiencia/>

<Testimonial/>

<Callaction/>

<Ourallies/>





<script>
	import Banner from '../components/banner.svelte';
	import Barra from '../components/barra.svelte';
	import Calltoaction from '../components/calltoaction.svelte';
	import Experiencia from '../components/experiencia.svelte';
	import Faq from '../components/faq.svelte';
	import Newsletter from '../components/newsletter.svelte';
	import Next from '../components/next.svelte';
	import Ourallies from '../components/ourallies.svelte';
	import Stats from '../components/stats.svelte';
	import Testimonial from '../components/testimonial.svelte';
	import Title from '../components/title.svelte';
</script>

<div class="bg-color-header" style="background-image: url(marca.png);  background-repeat: no-repeat; background-position: center; background-size: cover;">
	<Barra/>
	
	<Stats/>	

	<Title title='Experiencias'/>
	
	<Experiencia/>
	
	<Testimonial/>
	
	<Next/>

	<Newsletter/>
	
	<Faq/>
	
	<Calltoaction/>
	
	<Ourallies />
	
</div>





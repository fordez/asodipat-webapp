<script>
	import Banner from '../components/banner.svelte';
	import Barra from '../components/barra.svelte';
	import Calltoaction from '../components/calltoaction.svelte';
	import Experiencia from '../components/experiencia.svelte';
	import Faq from '../components/faq.svelte';
	import News from '../components/news.svelte';
	import Next from '../components/next.svelte';
	import Ourallies from '../components/ourallies.svelte';
	import Stats from '../components/stats.svelte';
	import Testimonial from '../components/testimonial.svelte';
	import Title from '../components/title.svelte';
</script>
<Banner/>
<Barra />
<Stats />
<Title title="Experiencias" />
<div
	class="p-10"
	style="background-image: url(marca.png);  background-repeat: no-repeat; background-position: center; background-size: cover;"
>
<Experiencia />
</div>
<Testimonial />
<News/>
<Ourallies />
<Calltoaction/>

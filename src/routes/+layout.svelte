<script>
	import '../app.css';
	import Copyright from '../components/copyright.svelte';
	import Footer from '../components/footer.svelte';
	import Googlemaps from '../components/googlemaps.svelte';
	import Header from '../components/header.svelte';
	import Headermini from '../components/headermini.svelte';
</script>

<div class="hidden sm:block">
	<Header />
</div>

<div class="sm:hidden">
	<Headermini />
</div>

<slot />

<Googlemaps />

<Footer />

<Copyright />

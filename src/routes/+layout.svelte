<script>
	import '../app.css';
	import Copyright from '../components/copyright.svelte';
	import Footer from '../components/footer.svelte';
	import Googlemaps from '../components/googlemaps.svelte';
	import Header from '../components/header.svelte';
</script>

<Header/>

<slot />

<Googlemaps/>

<Footer/>

<Copyright/>
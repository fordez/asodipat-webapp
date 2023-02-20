<script>
	import Logo from './logo.svelte';
	import Socialheader from "./socialheader.svelte";
	import Navheader from "./navheader.svelte";

</script>
<div class="flex flex-row bg-color-header shadow-xl rounded-3xl ">
	<div class="basis-1/4 flex items-center justify-center ">
		<Logo/>
	</div>
	<div class="basis-1/2 flex items-center justify-center ">
		<Navheader/>
	</div>
	<div class="basis-1/4 flex items-center object-center justify-center">
		<Socialheader/>
	</div>
</div>
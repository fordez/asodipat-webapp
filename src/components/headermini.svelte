<script>
	import Logo from './logo.svelte';
	import Navfooter from './navfooter.svelte';
	import Socialheader from './socialheader.svelte';
</script>

<div class="flex flex-col bg-color-header " >
	<div class="basis-1/2  flex items-center justify-center ">
		<Logo />
	</div>
	<div class="basis-1/2  flex items-center justify-center p-2 ">
		<Navfooter />

		<div class="flex items-center justify-center">
			<Socialheader />
		</div>

	</div>

	
</div>

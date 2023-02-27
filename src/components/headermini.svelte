<script>
	import Logo from './logo.svelte';
	import Navheader from './navheader.svelte';
	import Socialheader from './socialheader.svelte';
</script>

<div class="flex flex-col bg-color-header shadow-xl " >
	
	<div class="flex items-center justify-center ">
		<Logo />
		<div class="ml-60 absolute">
			<Socialheader/>
		</div>
	</div>
	
	<div class=" flex items-center justify-center p-2 ">
		<Navheader/>
	</div>

	
</div>

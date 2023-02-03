<script>
    import Navfooter from "./navfooter.svelte";
	import Socialfooter from "./socialfooter.svelte";
	import Contactofooter from "./contactofooter.svelte";
</script>

<footer class="w-full bg-color-header">
	<div class="flex justify-center">
		<Contactofooter/>
	</div>
	<div class="max-w-screen-xl mx-auto py-6">
		<Navfooter/>
	</div>
    <div class="text-center py-6 ">
        <Socialfooter/>
    </div>
</footer>
<script>
	import Boletin from "./boletin.svelte";
import Contactofooter from "./contactofooter.svelte";
	import Googlemaps from "./googlemaps.svelte";
	import Navheader from "./navheader.svelte";
    import Socialfooter from "./socialfooter.svelte";

</script>
<footer class="text-center bg-color-header shadow-xl">
  <div class="container px-6 pt-6">

	<div class="flex justify-center mx-auto mb-6 max-w-xl p-6">
		<Navheader/>
    </div>
    
    <div>
      <Boletin/>
    </div>

    <div class="mb-6">
		<Socialfooter/>
    </div>

    <div class="">
		<Contactofooter/>
    </div>
  </div>
  <div
	class="font-light  text-color-second text-sm py-4 text-center items-center justify-center bg-color-title"
>
	Copyright © 2018 Free Software Foundation, GPL License, versión 3.0
	<br />
	<a class="text-color-fordez hover:text-color-primary" href="https://github.com/fordez">
		Developer
	</a>
</div>
</footer>
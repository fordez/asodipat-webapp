<script>
	import Collagemision from "./collagemision.svelte";
	import Collagevision from "./collagevision.svelte";

</script>
<section class="bg-color-header">
	<div class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl relative object-none w-full h-90 bg-cover bg-top saturate-150"  style="background-image: url(https://firebasestorage.googleapis.com/v0/b/asodipat.appspot.com/o/imagenes-web-asodipat%2Fmarca.png?alt=media&token=33b00be7-3412-4a86-9e4b-9f4a168e908d);">
		
		<div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center  ">
			<div>
				<h3 class="text-2xl font-bold tracking-tight sm:text-3xl text-color-footer">¿Cuál es la MISIÓN?</h3>
				<p class="mt-3 text-lg text-color-nav">Propiciar el desarrollo integral, social y humano de las comunidades del pacifico sur de Colombia, gestionando condiciones favorables para la superación de las condiciones de vulnerabilidad, mediante la una gestión asociativa propositiva e integral.</p>
			</div>
			<div aria-hidden="true" class="mt-10 lg:mt-0">
				<Collagemision/>
			</div>
		</div>
		<div>
			<div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center ">
				<div class="lg:col-start-2 max-w-sm p-10 rounded-xl bg-color-header">
					<h3 class="text-2xl font-bold tracking-tight  sm:text-3xl text-color-footer">¿Nuestra  VISIÓN?</h3>
					<p class="mt-3 text-lg text-color-nav">Para el año 2028 ASODIPAT se consolidará como una organización líder en la gestión y desarrollo de iniciativas orientadas en el mejoramiento de la calidad de vida de las poblaciones en condición de vulnerabilidad del pacífico sur colombiano.</p>
				</div>
				<div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<Collagevision/>
				</div>
			</div>
		</div>
		
	</div>
</section>





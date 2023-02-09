<script>
	import Collagemision from "./collagemision.svelte";
	import Collagevision from "./collagevision.svelte";

</script>
<section class="dark:bg-gray-800 dark:text-gray-100">
	<div class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		
		<div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 class="text-2xl font-bold tracking-tight sm:text-3xl text-color-footer">¿Cual es la MISION?</h3>
				<p class="mt-3 text-lg text-color-nav">Propiciar el desarrollo integral, social y humano de las comunidades del pacifico sur de Colombia, gestionando condiciones favorables para la superación de las condiciones de vulnerabilidad, mediante la una gestión asociativa propositiva e integral.</p>
			</div>
			<div aria-hidden="true" class="mt-10 lg:mt-0">
				<Collagemision/>
			</div>
		</div>
		<div>
			<div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div class="lg:col-start-2">
					<h3 class="text-2xl font-bold tracking-tight sm:text-3xl text-color-footer">¿Cual es la VISION?</h3>
					<p class="mt-3 text-lg text-color-nav">Para el año 2028 ASODIPAT se consolidará como una organización líder en la gestión y desarrollo de iniciativas orientadas en el mejoramiento de la calidad de vida de las poblaciones en condición de vulnerabilidad del pacífico sur colombiano.</p>
				</div>
				<div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<Collagevision/>
				</div>
			</div>
		</div>
		<div>
			<h2 class="text-3xl font-bold tracking-tight text-center sm:text-4xl text-color-footer">¿Cómo NACEMOS?</h2>
			<p class="max-w-3xl mx-auto mt-4 text-lg text-center p-12 text-color-nav">
				La organización para el desarrollo integral pazcifico Tumaco, tiene sus inicios en el año 2011, a partir de iniciativas productivas vinculando madres cabezas de familia de los sectores más vulnerables del territorio, beneficiando a más de 200 familias mediante la gestión de apoyos de programas gubernamentales en el marco de la inclusión educativa con la elaboración y comercialización de uniformes escolares a bajo costo.
				
				De este modo para el año 20xx ante las necesidades crecientes y la dinámicas sociales existentes, se efectúa una reestructuración organizativa dándole cavidad a un mayor campo de acción y gestión de la asociativa.</p>
		</div>
	</div>
</section>

<section class="py-6 bg-color-footer text-white">
	<div class="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
		<div class="flex flex-col justify-center lg:text-left">
			<p class="mb-1 text-xs font-medium tracking-widest uppercase ">Nos centramos en areas especificas</p>
			<h1 class="py-2 text-4xl font-medium leading-tight title-font">Conoce nuestras líneas de acción</h1>
		</div>
		
	</div>
</section>












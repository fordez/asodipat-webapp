<script>
	let cargando = true;
	let contenido = '';

	const cargarContenido = () => {
		setTimeout(() => {
			cargando = false;
			contenido = 'Contenido cargado';
		}, 2000);
	};

	cargarContenido();
</script>

<div class="relative">
	<div class=" lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
		<div
			class="shadow-2xl bg-color-header rounded-xl p-8 ml-auto lg:col-start-2 lg:max-w-2xl "
		>
			<span class="text-xs uppercase text-color-second">Apoya nuestro objetivo</span>
			<h3 class="text-3xl font-bold text-color-footer">
				¿Cuál es la <span class="text-color-primary">MISIÓN?</span>
			</h3>
			<p class="my-4 text-lg text-color-nav">
				Propiciar el desarrollo integral, social y humano de las comunidades del pacifico sur de
				Colombia, gestionando condiciones favorables para la superación de las condiciones de
				vulnerabilidad, mediante la una gestión asociativa propositiva e integral.
			</p>
		</div>

		{#if cargando}
			<div class="">
				<div
					class="w-16 h-16 border-4 border-dashed rounded-full mx-auto animate-spin border-color-nav"
				/>
				<h1 class="text-center text-color-nav">Esperar 2 seg</h1>
			</div>
		{:else}
			<div class="p-3 space-y-4 py-6 ">
				<div class="flex items-end justify-center space-x-4 lg:justify-start">
					<img
						class="w-32 rounded-lg shadow-lg sm:w-56"
						width="200"
						src="https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fabout%2Fabout2.jpg?alt=media&token=1387d640-7b9a-4928-8df5-d6c66ccfe10f"
						alt="1"
					/>
					<img
						class="w-40 rounded-lg shadow-lg sm:w-64"
						width="260"
						src="https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fabout%2Fabout1.jpg?alt=media&token=18a6c52e-1fe8-48ea-8509-2c93b6f72f90"
						alt="2"
					/>
				</div>
				<div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
					<img
						class="w-24 rounded-lg shadow-lg sm:w-40"
						width="170"
						src="https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fabout%2Fabout4.jpg?alt=media&token=0133146c-ce15-4957-9c14-718c3ad2a8b3"
						alt="3"
					/>
					<img
						class="w-32 rounded-lg shadow-lg sm:w-56"
						width="200"
						src="https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fabout%2Fabout3.jpg?alt=media&token=f16c7f36-3888-457a-96cd-6f2ebc670922"
						alt="4"
					/>
				</div>
			</div>
		{/if}
	</div>
</div>

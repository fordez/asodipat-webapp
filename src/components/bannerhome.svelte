<script>
	let currentIndex = 0;
	let slides = [
		'https://firebasestorage.googleapis.com/v0/b/asodipat.appspot.com/o/pagina-nosotros-media%2Fbanner1.jpg?alt=media&token=461b4476-af08-4ec4-8b8a-cf322988bf70',
		'https://firebasestorage.googleapis.com/v0/b/asodipat.appspot.com/o/pagina-nosotros-media%2Fbanner3.jpg?alt=media&token=8a131202-9892-4aa8-a189-c4ac134a8e4e',
		'https://firebasestorage.googleapis.com/v0/b/asodipat.appspot.com/o/pagina-nosotros-media%2Fbanner4.jpg?alt=media&token=3091a43b-8d76-4f14-8d6f-95b021b89f69',
		'https://firebasestorage.googleapis.com/v0/b/asodipat.appspot.com/o/pagina-nosotros-media%2Fbanner6.jpg?alt=media&token=424c4c4d-b55f-44cf-a673-69714c1cd00e'
	];
	let slogan = [
		'Transformando comunidades del Pacífico Sur a través del empoderamiento emprendedor y la innovación sostenible.',
		'Promoviendo la igualdad, la solidaridad y el desarrollo de liderazgo a travéz del deporte.',
		'Potenciando la creatividad del espíritu emprendedor para transformar ideas en proyectos exitosos.',
		'Trabajando para fomentar la creatividad y preservar el patrimonio cultural.'
	];

	function handleNext() {
		currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
	}

	function handlePrev() {
		currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
	}

	setInterval(() => {
		handleNext();
	}, 10000); // cambia automáticamente la imagen cada 5 segundos
</script>

<div
	class="relative  object-none w-full h-90 bg-cover bg-top saturate-150"
	style="background-image: url({slides[currentIndex]});"
>
	<div class=" relative py-20  ">
		<div
			class="py-10 text-start max-w-3xl text-white ml-7  bg-gradient-to-r from-color-title mx-auto items-center "
		>
			<h1 class="ml-6 font-extrabold text-4xl">
				CONSTRUYENDO<br />UN FUTURO PACIFICO
			</h1>

			<p class="mt-4 ml-4 max-w-xl text-xl text-white">
				{slogan[currentIndex]}
			</p>

			<div class="mt-4 ml-6 py-6 flex flex-wrap ">
				<a
					href="/participar"
					class=" rounded border rounded-xl px-10 py-3 flex  font-medium text-white hover:bg-color-primary focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 "
				>
					<i class="fa-solid fa-handshake mx-2 text-4xl" />
					<span class="flex flex-col items-start  ml-4 leading-none">
						<span class="mb-1 text-sm">Ir a</span>
						<span class="font-semibold title-font">Participar</span>
					</span>
				</a>
			</div>
		</div>
	</div>

	<button
		class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
		on:click={handlePrev}
	>
		<i class="fa-sharp fa-solid fa-chevron-left text-white text-4xl ml-1 " />
	</button>
	<button
		class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
		on:click={handleNext}
	>
		<i class="fa-sharp fa-solid fa-chevron-right text-white text-4xl mx-1 " />
	</button>
</div>

<script>
	let currentIndex = 0;
	let slides = [
		'https://firebasestorage.googleapis.com/v0/b/asodipat.appspot.com/o/imagenes-web-asodipat%2Fbanner%2Fbanner4.jpg?alt=media&token=b30e561d-9e27-4872-9a2e-b78eeef5de4a',
		'https://firebasestorage.googleapis.com/v0/b/asodipat.appspot.com/o/imagenes-web-asodipat%2Fbanner%2Fbanner5.jpg?alt=media&token=46f395a4-eaf6-436c-bd6a-fe7fcb5713d8',
		'https://firebasestorage.googleapis.com/v0/b/asodipat.appspot.com/o/imagenes-web-asodipat%2Fbanner%2Fbanner2.jpg?alt=media&token=0212afe5-0005-42ce-9cbc-5e84237be7a0',
		'https://firebasestorage.googleapis.com/v0/b/asodipat.appspot.com/o/imagenes-web-asodipat%2Fbanner%2Fbanner3.jpg?alt=media&token=1cea257a-d758-4ee6-b273-3a5b282ff6bf',
		'https://firebasestorage.googleapis.com/v0/b/asodipat.appspot.com/o/imagenes-web-asodipat%2Fbanner%2Fbanner7.jpg?alt=media&token=fea8cf53-6b98-48aa-b3f4-d15a54008189'
	];
	let slogan = [
		'Transformando comunidades del Pacífico Sur a través del empoderamiento emprendedor y la innovación sostenible.',
		'Juntos cultivando un futuro verde y sostenible para que las generaciones venideras disfruten de un mundo próspero.',
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
	}, 15000); // cambia automáticamente la imagen cada 5 segundos
</script>

<div class="bg-color-nav saturate-150">
    <img src={slides[currentIndex]} class="w-full h-full  object-cover absolute" />


	<div class=" relative py-20  ">
		<div
			class="py-10 text-start max-w-3xl text-white ml-7  rounded-xl bg-gradient-to-r from-color-title mx-auto items-center "
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
					class=" border rounded-xl px-10 py-3 flex  font-medium text-white hover:bg-color-primary focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 "
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

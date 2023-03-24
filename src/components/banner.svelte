<script>

	let currentIndex = 0;
	let slides = [
		'banner1.jpg',
		'https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fbanner%2Fbanner2.jpg?alt=media&token=95721a5e-2bc6-48ee-a14f-e0ffdf0f7c08',
		'https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fbanner%2Fbanner3.jpg?alt=media&token=86a2197b-919c-467f-89d2-2fb16dabd157',
		'https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fbanner%2Fbanner4.jpg?alt=media&token=c56b9f83-9a89-40b2-8934-71d81e790833',
		'https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fbanner%2Fbanner5.jpg?alt=media&token=a120b2c5-9e3c-4ab1-bb6a-0fda41472581'
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

<div class="relative  object-none w-full h-90 bg-cover bg-top saturate-150">
    <img src={slides[currentIndex]} class="w-full h-full  object-cover absolute" />


	<div class=" relative py-24 ">
		<div
			class="py-10 text-start rounded-xl text-white ml-5 max-w-2xl bg-gradient-to-r from-color-title mx-auto items-center  "
		>
			<h1 class="ml-6 font-extrabold text-3xl sm:text-5xl text-white">
				CONSTRUYENDO<br />UN FUTURO SOSTENIBLE
			<p class="mt-4 ml-6 max-w-xl text-lg text-white">
				{slogan[currentIndex]}
			</p>

		</div>

		<div class="flex items-center justify-between mt-6 ">
			<button title="left arrow" class="p-2 ml-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-color-primary hover:text-white"on:click={handlePrev}>
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
				</svg>
			</button>
	
			<button title="right arrow" class="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-color-primary hover:text-white"on:click={handleNext}>
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	</div>

	
	
</div>


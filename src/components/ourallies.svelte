<script>
	let currentIndex = 0;
	let logos = [
		'https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fourallies%2Fgamvica.png?alt=media&token=cbf989d3-6682-40f1-ba3d-f2c54cf6da05',
		'https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fourallies%2Fgestiondesarrollo.png?alt=media&token=444350ca-3095-4d94-ab10-91d0213faf9b',
		'https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fourallies%2Ffenix.png?alt=media&token=9482e939-31bb-4f62-b39c-65df9e5b36f3',
		'https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fourallies%2Ffuncupaz.png?alt=media&token=c455350f-24ba-4ba9-a31b-a4715fa1a1ec',
		'https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fourallies%2Frenacer.png?alt=media&token=5fe58de2-c0af-4e99-a937-25d85938afe2'
	];
	function handleNext() {
		currentIndex = currentIndex === logos.length - 1 ? 0 : currentIndex + 1;
	}

	function handlePrev() {
		currentIndex = currentIndex === 0 ? logos.length - 1 : currentIndex - 1;
	}

	setInterval(() => {
		handleNext();
	}, 3000);
</script>

<section class="bg-color-header dark:text-gray-100">
	<div class="container flex flex-col-reverse mx-auto lg:flex-row">
		<div class="lg:w-1/2 xl:w-3/5 mx-auto my-auto ">
			<div class="flex flex-col items-center p-6 bg-color-header">
				<div class=" p-6 bg-color-headermax-w-lg mx-auto">
					<img
						src={logos[currentIndex]}
						alt="ourallies"
						class="w-50 h-40 transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-130"
					/>
				</div>

				<div class="justify-between mx-auto ">
					<button
						title="left arrow"
						class="p-2 text-color-naranjahover transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-color-naranja hover:text-white "
						on:click={handlePrev}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
						</svg>
					</button>

					<button
						title="right arrow"
						class="p-2 text-color-naranjahover transition-colors duration-300 border rounded-full rtl:-scale-x-100 mx-6 hover:bg-color-naranja hover:text-white "
						on:click={handleNext}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
			</div>
		</div>
		<div class="flex flex-col  px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
			<h1 class="font-medium leading-tight title-font text-4xl text-color-footer">
				Nuestros Aliados
			</h1>
			<div class="flex space-x-2 sm:space-x-4 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="flex-shrink-0 w-6 h-6 text-color-footer"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
					/>
				</svg>
				<div class="space-y-2 ">
					<p class="text-lg font-medium leading-snug text-color-footer">GAMVICA FUNDACIÓN</p>
					<p class="leading-snug text-color-nav">
						Frente a la búsqueda de igualdad y respeto por las mujeres que han padecido el flagelo
						del conflicto en el territorio!
					</p>
				</div>
			</div>
			<div class="flex space-x-2 sm:space-x-4 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="flex-shrink-0 w-6 h-6 text-color-footer"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
					/>
				</svg>
				<div class="space-y-2">
					<p class="text-lg font-medium leading-snug text-color-footer">
						GESTIÓN Y DESARROLLO TERRITORIAL DEL PACIFICO S.A.S
					</p>
					<p class="leading-snug text-color-nav">
						Brindan asesoría y capacitación a organizaciones publica y privada, desarrollan
						programas sociales y prestan servicios logísticos y outsourcing.
					</p>
				</div>
			</div>
			<div class="flex space-x-2 sm:space-x-4 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="flex-shrink-0 w-6 h-6 text-color-footer"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
					/>
				</svg>
				<div class="space-y-2">
					<p class="text-lg font-medium leading-snug text-color-footer">
						FENIX ASOCIACÓN DE RECICLAJE
					</p>
					<p class="leading-snug text-color-nav">
						La organización contribuye al cuidado del medio ambiente recolectando y clasificando
						residuos sólidos, fomentando la educación ambiental!
					</p>
				</div>
			</div>
			<div class="flex space-x-2 sm:space-x-4 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="flex-shrink-0 w-6 h-6 text-color-footer"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
					/>
				</svg>
				<div class="space-y-2">
					<p class="text-lg font-medium leading-snug text-color-footer">FUNCUPAZ ORGANIZACIÓN</p>
					<p class="leading-snug text-color-nav">
						Trabajan por la mejora de la calidad de vida, el bienestar y el interés social de las
						comunidades más vulnerables de la costa pacífica nariñense!
					</p>
				</div>
			</div>
			<div class="flex space-x-2 sm:space-x-4 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="flex-shrink-0 w-6 h-6 text-color-footer"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
					/>
				</svg>
				<div class="space-y-2">
					<p class="text-lg font-medium leading-snug text-color-footer">
						FUNDACIÓN RENACER DEL PACIFICO
					</p>
					<p class="leading-snug text-color-nav">
						Contribuyen al desarrollo social del municipio tumaco, con enfoque en fortalecimiento y
						apoyo a la educación, cultura, deporte, salud y proyectos sociales!
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

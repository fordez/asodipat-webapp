<script>
	let currentIndex = 0;
	let logos = [
		'/ourallies/gamvica.png',
		'/ourallies/gestiondesarrollo.png',
		'/ourallies/renacer.png',
		'/ourallies/fenix.png'
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

<div class="flex flex-col items-center p-6 bg-color-header">
	<div class=" p-6 bg-color-headermax-w-lg mx-auto">
		<img
			src={logos[currentIndex]}
			alt="ourallies"
			class="w-50 h-40 transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-130"
		/>
	</div>

  <div class="justify-between mx-auto ">
    <button title="left arrow" class="p-2 text-color-naranjahover transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-color-naranja hover:text-white" on:click={handlePrev}>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
    </button>

    <button title="right arrow" class="p-2 text-color-naranjahover transition-colors duration-300 border rounded-full rtl:-scale-x-100 mx-6 hover:bg-color-naranja hover:text-white" on:click={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
    </button>
</div>
  
</div>

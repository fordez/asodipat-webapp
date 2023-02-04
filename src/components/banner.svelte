<script>
	let currentIndex = 0;
	let slides = [ 'imagen5.jpg', '/actividad/emprender7.jpg', 'imagen2.jpg', 'actividad/cultura2.jpg','imagen3.jpg','actividad/deporte2.jpg' ];

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


<div class="saturate-200 flex items-center"  style="height: 25rem;">
    <div class="bg-color-footer flex items-center " >
        <div class="absolute w-full h-full bg-color-nav text-white leading-tight bg-gradient-to-r from-color-title  ">
            <h1 class="font-extrabold sm:text-5xl text-4xl ">
                Construyendo un <br/>futuro pacífico
            </h1>
            <p class="max-w-xl py-6">
                Fortalecemos a mujeres vitimas del conflicto armado en diferentes ámbitos de la vida:
                educación, salud, economía y deporte.
            </p>
        </div>
    </div>
    
    
    <img alt="slide" src={slides[currentIndex]} class="object-cover w-full h-full" />
    <button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" on:click={handlePrev}>
        <i class="fa-sharp fa-solid fa-chevron-left text-white text-4xl ml-1 "></i>
    </button>
    <button class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" on:click={handleNext}>
        <i class="fa-sharp fa-solid fa-chevron-right text-white text-4xl mx-1 "></i>
    </button>
</div>


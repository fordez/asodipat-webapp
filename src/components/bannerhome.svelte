<script>

	let currentIndex = 0;
    let slides = ['banner6.jpg','banner1.jpg','medioambiente.jpg'];
    let slogan = [
        'Fortalecemos a mujeres del pacifico sur victimas del conflicto armado en diferentes ámbitos de la vida.',
        'La convivencia pacífica es esencial promover una sociedad libre de violencia al sembrar semilla de bondad.',
        'Cultivando un futuro lleno de paz, amor y prosperidad para todos. Juntos podemos crear un mundo mejor',
        
        
]
   
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

<div class="relative  object-none w-full h-90 bg-cover bg-top saturate-150"   style="background-image: url({slides[currentIndex]});">
	

  <div class=" relative py-20  " >
    <div class="py-10 text-start max-w-3xl text-white ml-7  bg-gradient-to-r from-color-title mx-auto items-center ">
      <h1 class="ml-6 font-extrabold text-4xl">
        SEMBRANDO<br/>UN FUTURO PACIFICO
      </h1>
  
      <p class="mt-4 ml-4 max-w-xl text-2xl text-white">
        {slogan[currentIndex]}
      </p>

      <div class="mt-4 ml-6 py-6 flex flex-wrap ">
        <a href="/participar" class=" rounded border rounded-2xl px-10 py-3 text-sm font-medium text-white hover:bg-color-primary focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ">
          <i class="fa-solid fa-handshake text-3xl"></i>
        </a>
      </div>

    </div>
  </div>

  <button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" on:click={handlePrev}>
    <i class="fa-sharp fa-solid fa-chevron-left text-white text-4xl ml-1 "></i>
  </button>
  <button class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" on:click={handleNext}>
    <i class="fa-sharp fa-solid fa-chevron-right text-white text-4xl mx-1 "></i>
  </button>

</div>

<script>

	let currentIndex = 0;
	let slides = [ 'imagen5.jpg', '/actividad/emprender7.jpg', 'imagen2.jpg', 'actividad/cultura2.jpg','imagen3.jpg','actividad/deporte2.jpg' ];
  let slogan = [
    'Fortalecemos a mujeres vitimas del conflicto armado en diferentes ámbitos de la vida: educación, salud, economía y deporte.',
    'El emprendimiento y la productividad son clave para el desarrollo económico y la creación de empleo.',
    'La convivencia pacífica es esencial para lograr justicia para las víctimas de la violencia y promover una sociedad libre de violencia, trabajemos juntos por la paz y la dignidad de todos.',
    'El medio ambiente es nuestra responsabilidad y debemos actuar ahora para preservarlo para futuras generaciones',
    'La práctica de deportes y actividades recreativas contribuyen a mejorar la salud física y mental de la comunidades.',
    'La cultura y la biodiversidad son dos aspectos fundamentales de nuestra sociedad, debemos preservarlos para las futuras generaciones.',
    'La gestión pública eficiente ayuda en reducir tiempos en procesos, mejorando la eficacia y eficiencia en la atención de las necesidades de la ciudadanía.'
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

<div class="relative w-full">
	<div class="absolute inset-0 flex saturate-200 mx-auto flex items-center ">
		<img alt="slide" src={slides[currentIndex]} class="w-full h-full object-cover " />
	</div>

  <div class=" relative py-12   " >
    <div class="max-w-2xl py-4 text-start  text-white ml-7  bg-gradient-to-r from-color-title mx-auto items-center ">
      <h1 class="ml-6 font-extrabold text-5xl ">
        Construyendo <br/>un futuro pacífico
      </h1>
  
      <p class="mt-4 ml-6 max-w-xl text-lg text-white">
        {slogan[currentIndex]}
      </p>
  
      <div class="mt-4 ml-6 py-6 flex flex-wrap ">
        <a href="/actividad" class=" rounded border rounded-2xl px-10 py-3 text-sm font-medium text-white hover:bg-color-primary focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ">
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

<script>

	let currentIndex = 0;
	let slides = [ 'nosotros.jpg'];
  let slogan = ['Somos una organización, sin ánimo de lucro que busca promover el desarrollo integral y el mejoramiento de la calidad de vida de poblaciones en condición de vulnerabilidad asentadas en la cuenta del pacifico sur y zonas de influencia, mediante la gestión de proyectos y alianzas público – privadas que fortalezcan el tejido social desde los diferentes ámbitos.']
   
    
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
	<div class="absolute inset-0 flex saturate-150 mx-auto flex items-center ">
		<img alt="slide" src={slides[currentIndex]} class="w-full h-full object-cover " />
	</div>

  <div class=" relative py-12   " >
    <div class="max-w-2xl py-4 text-start  text-white ml-7  bg-gradient-to-r from-color-title mx-auto items-center ">
      <h1 class="ml-6 font-extrabold text-5xl ">
        ¿Quiénes SOMOS? 
      </h1>
  
      <p class="mt-4 ml-6 max-w-xl text-lg text-white">
        {slogan[currentIndex]}
      </p>
    </div>
  </div>
</div>

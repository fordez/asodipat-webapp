<script>

	let currentIndex = 0;
	let slides = ['about.jpg'];
  let slogan = ['Somos una organización, sin ánimo de lucro que busca promover el desarrollo integral y el mejoramiento de la calidad de vida de poblaciones en condición de vulnerabilidad asentadas en la cuenta del pacifico sur y zonas de influencia, mediante la gestión de proyectos y alianzas público – privadas que fortalezcan el tejido social desde los diferentes ámbitos.']
   
</script>

<div class="relative  object-none w-full h-90 bg-cover bg-top saturate-200">
	
  <img src={slides[0]} class="w-full h-full  object-cover absolute" />
  <div class=" relative py-20  " >
    <div class="py-10 text-start rounded-xl text-white ml-5 max-w-2xl bg-gradient-to-r from-color-title mx-auto items-center ">
      <h1 class="ml-6 font-extrabold text-5xl text-white">
        ¿Quiénes SOMOS? 
      </h1>
  
      <p class="mt-4 ml-6 max-w-xl text-lg text-white">
        {slogan[currentIndex]}
      </p>
    </div>
  </div>
</div>

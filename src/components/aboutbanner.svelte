<script>

	let currentIndex = 0;
	let slides = ['https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fnosotros%2Fnosotros.jpg?alt=media&token=d83f3f44-323d-462c-ab0c-2dda8f494d8b'];
  let slogan = ['Somos una organización, sin ánimo de lucro que busca promover el desarrollo integral y el mejoramiento de la calidad de vida de poblaciones en condición de vulnerabilidad asentadas en la cuenta del pacifico sur y zonas de influencia, mediante la gestión de proyectos y alianzas público – privadas que fortalezcan el tejido social desde los diferentes ámbitos.']
   
</script>

<div class="relative  object-none w-full h-90 bg-cover bg-top saturate-150"   style="background-image: url(nosotros.jpg);">
	

  <div class=" relative py-20  " >
    <div class="py-10 text-start  text-white ml-5  bg-gradient-to-r from-color-title mx-auto items-center ">
      <h1 class="ml-6 font-extrabold text-5xl ">
        ¿Quiénes SOMOS? 
      </h1>
  
      <p class="mt-4 ml-6 max-w-xl text-lg text-white">
        {slogan[currentIndex]}
      </p>
    </div>
  </div>
</div>

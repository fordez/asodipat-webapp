<script>
    let currentIndex = 0;
    let impactado = ['Diana Palacio','Chicas Roberto Payan', 'Cumunidad Vereda el Charco' ]
    let action = ['Emprendedora','Recreación', 'Ayudas Sociales']
    let testimonial = [
        '“ La Fundación Asodipat ha sido un apoyo incondicional en mi camino como emprendedora. Les estoy eternamente agradecida por brindarme las herramientas y oportunidades para hacer realidad mis sueños empresariales.”',
        '“ Queremos agradecer a Asodipat por brindarnos la oportunidad de disfrutar de un espacio de recreación donde pudimos desconectar de la rutina y compartir momentos inolvidables con nuestras amigas.”',
        '“ En nombre de toda la comunidad, queremos agradecer a Asodipat por organizar este evento, que tuvo un impacto significativo donde pudimos recibir estas ayudas necesarios para hacer frente a la situación difícil actual.”'
    ]
    let image = [
        'https://firebasestorage.googleapis.com/v0/b/asodipat.appspot.com/o/imagenes-web-asodipat%2Ftestimonial%2Ftestimonial1.jpg?alt=media&token=2d1548d0-8b04-46e5-89f6-905ccacc7209',
        'https://firebasestorage.googleapis.com/v0/b/asodipat.appspot.com/o/imagenes-web-asodipat%2Ftestimonial%2Ftestimonial2.jpg?alt=media&token=8edf9eb1-efa7-4d98-bc5b-7fa2d059e58f',
        'https://firebasestorage.googleapis.com/v0/b/asodipat.appspot.com/o/imagenes-web-asodipat%2Ftestimonial%2Ftestimonial3.jpg?alt=media&token=590f0e65-4524-45fc-b895-a48d0a359ee8'
    ]

    function handleNext() {
		currentIndex = currentIndex === testimonial.length - 1 ? 0 : currentIndex + 1;
	}

	function handlePrev() {
		currentIndex = currentIndex === 0 ? testimonial.length - 1 : currentIndex - 1;
	}

	setInterval(() => {
		handleNext();
	}, 15000); // cambia automáticamente la imagen cada 5 segundos

</script>


<section class="bg-color-header rounded-2xl py-4  pb-5 mx-auto">
    <div class=" px-2  mx-auto">
        <p class="text-3xl ml-1 sm:ml-10 font-medium text-color-second ">Testimonio</p>

        <h1 class="mt-2 ml-1 sm:ml-10 text-5xl font-semibold text-color-footer capitalize lg:text-4xl ">
            Lo que dicen de <span class="text-color-primary" >asodipat</span> 
        </h1>

        <main class="max-w-5xl mx-auto relative z-20 w-full p-4 mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full bg-color-primary -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-color-primary  md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img class=" w-24 mx-auto  object-cover shadow-md h-[20rem] w-80   saturate-150  rounded-2xl" src={image[currentIndex]} alt="client photo" />
                
                <div class="mt-2 md:mx-6">
                    <div>
                        <p class="text-xl font-medium tracking-tight text-white ">{impactado[currentIndex]}</p>
                        <p class="text-color-footer ">{action[currentIndex]}</p>
                    </div>

                    <p class="mt-4 text-lg leading-relaxed text-color-header md:text-xl">{testimonial[currentIndex]}</p>
                    
                    <div class="flex items-center justify-between mt-6 md:justify-center">
                        <button title="left arrow" class="p-2 text-color-naranja transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-color-button hover:text-white"on:click={handlePrev}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button title="right arrow" class="p-2 text-color-naranja transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-color-button hover:text-white"on:click={handleNext}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</section>
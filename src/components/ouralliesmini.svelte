
<script>
    let currentIndex = 0;
    let logos = [
        '/ourallies/gamvica.png',
        '/ourallies/gestiondesarrollo.png',
        '/ourallies/renacer.png',
        '/ourallies/fenix.png'
    ]
    function handleNext() {
		currentIndex = currentIndex === logos.length - 1 ? 0 : currentIndex + 1;
	}   

    function handlePrev() {
      currentIndex = currentIndex === 0 ? logos.length - 1 : currentIndex - 1;
    }

    setInterval(() => {
    handleNext();
  }, 2500);    
</script>

<div class="flex items-center p-6 bg-color-header" >
    <div class="max-w-lg mx-auto">
        <img src={logos[currentIndex]} alt="ourallies" class="w-50 h-40 transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-130">
    </div>

    <button class="carousel-control-prev absolute flex left-0" on:click={handlePrev}>
        <i class="fa-sharp fa-solid fa-chevron-left text-color-primary text-4xl ml-1 transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-130"></i>
      </button>
      <button class="carousel-control-next absolute flex right-0" on:click={handleNext}>
        <i class="fa-sharp fa-solid fa-chevron-right text-color-primary text-4xl mx-1 transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-130"></i>
      </button>
</div> 
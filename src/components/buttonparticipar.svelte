<script>
    let currentIndex = 0;
    let visibleModal1 = 'hidden';
    let visibleModal2 = 'block';
    let visibleModal3 = 'hidden';
    let title = [
      'Buscano Y Siguenos En ',
      'Suscribete Al ',
      'Unirse Al Grupo De ',
      'Comparte El Siguiente ',
      'Comenta El Siguiente ',
      'Asiste A Eventos En ',
      'Aporta Herramienta de ',
    ];
    let span = [
      'Redes Sociales',
      'Boletin De Noticias',
      'Facebook',
      'Contenido',
      'Contenido',
      'Vivo',
      'Trabajo',
    ];
    
    let visible = false;
    let tooltipVisible = false;

    function handleNext() {
		currentIndex = currentIndex === title.length - 1 ? 0 : currentIndex + 1;
	}

	function handlePrev() {
		currentIndex = currentIndex === 0 ? title.length - 1 : currentIndex - 1;
	}
  
    function openDialogDonar() {
      visible = true;
      document.body.classList.add('modal-open');
    }
  
    function closeDialogDonar() {
      visible = false;
      document.body.classList.remove('modal-close');
    }
  
    function copiarTexto() {
      const texto = document.getElementById('texto-a-copiar').innerText;
      navigator.clipboard.writeText(texto);
      tooltipVisible = true;
      setTimeout(() => {
        tooltipVisible = false;
      }, 2000); // Ocultar el tooltip después de 2 segundos
    }

  </script>

<div class="flex p-4 space-x-4 rounded-lg bg-color-footer transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
    <a href="/participar">
    <div class="flex justify-center p-4 align-middle rounded-lg bg-color-button">
        <i class="fa-sharp fa-regular fa-handshake text-4xl "></i>
    </div>
  </a>
  
    <a href="/participar">
    <div class="flex flex-col justify-center text-white align-middle ">
      <p class="text-2xl font-semibold leading-none">Participar</p>
      <p class="capitalize">Contribución Social</p>
    </div>
  </a>
  </div>

  {#if visible}
  <div class="fixed inset-y-0 left-0 z-50 w-full bg-black bg-opacity-50 flex items-center justify-center" on:click={e => {if(e.target === e.currentTarget) closeDialogDonar()}}>
    <div class="bg-color-header rounded-lg p-4 max-w-4xl overflow-hidden my-auto">
        <button type="button" class="text-color-naranja text-2xl" on:click={closeDialogDonar}><i class="fa-regular fa-circle-xmark"></i></button>
      <div class="dialog-body overflow-y-auto h-full p-6">
        <h1 class="text-color-nav font-bold text-2xl max-w-xs">{title[currentIndex]}<span class="text-color-button" >{span[currentIndex]}</span> </h1>

            
            <div class="grid grid-cols-2 grid-rows-4 gap-4 text-color-nav p-8 {visibleModal1}">
              <div class="text-center">
                  <i class="fa-brands fa-facebook text-2xl  hover:text-color-nav text-color-facebook   transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-150" />
              </div>
              <div>@asodipat</div>
              <div class="text-center">
                  <i class="fa-brands fa-instagram text-2xl hover:text-color-nav text-color-instagram    transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-150" />
              </div>
              <div>
                  @asodipat_
              </div>
              <div class="text-center" >
                  <i class="fa-brands fa-twitter text-2xl hover:text-color-nav text-color-twiter  transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-150" />
              </div>
              <div>
                  @asodipat
              </div>
              <div class="text-center" >
                  <i class="fa-brands fa-youtube text-xl text-reb"></i>
              </div>
              <div>
                  @asodipat
              </div>
            </div>
   
            <h1 class="" >Suscribete</h1>
        
        <div class="flex items-center  mt-6 justify-between">
          <button title="left arrow" class="p-2 text-color-button transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-color-button hover:text-white"on:click={handlePrev}>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
          </button>

          <button title="right arrow" class="p-2 text-color-button transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-color-button hover:text-white"on:click={handleNext}>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
          </button>
      </div>
      </div>
    </div>
  </div>
{/if}

<script>
    let currentIndex = 0;
    let visibleModal = 'block';
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
    <button class="" on:click={openDialogDonar}>
    <div class="flex justify-center p-4 align-middle rounded-lg  bg-color-button">
        <i class="fa-sharp fa-regular fa-handshake text-4xl "></i>
    </div>
  </button>
  
    <button class="" on:click={openDialogDonar}>
    <div class="flex flex-col justify-center text-white align-middle ">
      <p class="text-2xl font-semibold leading-none">Participar</p>
      <p class="capitalize">Contribución Social</p>
    </div>
  </button>
  </div>

  {#if visible}
  <div class="fixed inset-y-0 left-0 z-50 w-full bg-black bg-opacity-50 flex items-center justify-center" on:click={e => {if(e.target === e.currentTarget) closeDialogDonar()}}>
    <div class="bg-color-header rounded-lg p-4 max-w-4xl overflow-hidden my-auto">
        <button type="button" class="text-color-naranja text-2xl" on:click={closeDialogDonar}><i class="fa-regular fa-circle-xmark"></i></button>
      <div class="dialog-body overflow-y-auto h-full p-6">
        <h1 class="text-color-nav font-bold text-2xl max-w-xs">{title[currentIndex]}<span class="text-color-button" >{span[currentIndex]}</span> </h1>

        <div class="max-w-xs p-2 mx-auto sm:p-4 text-color-nav block">
            <div class="overflow-x-auto">
                <table class=" text-xs ">
                    <colgroup>
                        <col>
                        <col>
                        <col>
                        <col>
                        <col>
                        <col class="w-24">
                    </colgroup>
                    <thead class="bg-color-nav  text-color-header text-lg font-bold">
                        <tr class="text-left ">
                            <th class="p-3">RSS</th>
                            <th class="p-3">Usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td class="p-2">
                                <i class="fa-brands fa-facebook text-2xl  hover:text-color-nav text-color-facebook   transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-150" />
                            </td>
                            <td class="p-2">
                                <span class="text-md">@asodipat</span>
                            </td>
                         
                            <td class="p-2 text-right">
                                <button type="button" class="bg-color-primary hover:bg-color-button text-white p-1 px-4 rounded-lg" on:click={copiarTexto}>Copiar</button>
                            </td>
                        </tr>
                        <tr class="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td class="p-2">
                                <i class="fa-brands fa-instagram text-2xl hover:text-color-nav text-color-instagram    transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-150" />
                            </td>
                            <td class="p-2 text-md">
                                <span class="text-md">@asodipat_</span>
                            </td>
                            
                            <td class="p-2 text-right">
                                <button type="button" class="bg-color-primary hover:bg-color-button text-white p-1 px-4 rounded-lg" on:click={copiarTexto}>Copiar</button>
                            </td>
                        </tr>
                        <tr class="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td class="p-2">
                                <i class="fa-brands fa-twitter text-2xl hover:text-color-nav text-color-twiter  transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-150" />
                            </td>
                            <td class="p-2">
                                <span class="text-md">@asodipat</span>
                            </td>
                            
                            <td class="p-2 text-right">
                                <button type="button" class="bg-color-primary hover:bg-color-button text-white p-1 px-4 rounded-lg" on:click={copiarTexto}>Copiar</button>
                            </td>
                        </tr>
                        <tr class="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td class="p-2">
                                <p>97412378923</p>
                            </td>
                            <td class="p-2">
                                <span class="text-md">@asodipat</span>
                            </td>
                         
                            <td class="p-2 text-right">
                                <button type="button" class="bg-color-primary hover:bg-color-button text-white p-1 px-4 rounded-lg" on:click={copiarTexto}>Copiar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        
        <div class="flex items-center  mt-6 justify-center">
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
      <div class="flex justify-end mt-4 ">
        <button type="button" class="border p-2 border-color-naranja hover:bg-color-naranja hover:text-white text-color-naranja px-4 mr-2 rounded-xl" on:click={closeDialogDonar}>Cerrar Ventana</button>
        
      </div>
    </div>
  </div>
{/if}

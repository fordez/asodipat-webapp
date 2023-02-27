
<script>
    let visible = false;
    let tooltipVisible = false;
    let currentIndex = 0;
    let icon = ['fa-brands fa-twitter', 'fa-brands fa-facebook', 'fa-brands fa-instagram']
    let iconColor = ['text-color-twiter','text-color-facebook', 'text-color-instagram']

    function handleNext() {
		currentIndex = currentIndex === icon.length - 1 ? 0 : currentIndex + 1;
	} 

    setInterval(() => {
    handleNext();
  }, 1500);

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


<div class="flex p-2 ">
  <button class="" on:click={openDialogDonar}> <i class="{icon[currentIndex]} {iconColor[currentIndex]} text-2xl hover:text-color-primary transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-130" /></button>
</div>

{#if visible}
  <div class="fixed inset-y-0 left-0 z-50 w-full bg-black bg-opacity-50 flex items-center justify-center" on:click={e => {if(e.target === e.currentTarget) closeDialogDonar()}}>
    <div class="bg-white rounded-lg p-4 max-w-4xl overflow-hidden my-auto">
        <button type="button" class="text-2xl text-color-nav" on:click={closeDialogDonar}><i class="fa-regular fa-circle-xmark"></i></button>
      <div class="dialog-body overflow-y-auto h-full p-6">
        <h1 class="text-color-nav font-bold text-3xl max-w-xs">Siguenos En <span class="text-color-button" >Redes Sociales</span> </h1>


       

        <div class="p-2 mx-auto sm:p-4 text-color-nav">
            <div class="overflow-x-auto">
                <table class="text-xs ">
                    <colgroup>
                        <col>
                        <col>
                        <col>
                        <col>
                        <col>
                        <col class="w-24">
                    </colgroup>
                   
                    <tbody>
                        <tr class="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td class="p-2">
                                <i class="fa-brands fa-facebook text-2xl  hover:text-color-nav text-color-facebook   transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-150" />
                            </td>
                            <td class="p-2">
                                <span class="text-lg">@asodipat</span>
                            </td>
                         
                          
                        </tr>
                        <tr class="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td class="p-2">
                                <i class="fa-brands fa-instagram text-2xl hover:text-color-nav text-color-instagram    transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-150" />
                            </td>
                            <td class="p-2 text-md">
                                <span class="text-lg">@asodipat_</span>
                            </td>
                            
                          
                        </tr>
                        <tr class="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td class="p-2">
                                <i class="fa-brands fa-twitter text-2xl hover:text-color-nav text-color-twiter  transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-150" />
                            </td>
                            <td class="p-2">
                                <span class="text-lg">@asodipat</span>
                            </td>
                            
                          
                        </tr>
                        <tr class="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td class="p-2">
                                <i class="fa-brands fa-youtube text-xl text-reb"></i>
                            </td>
                            <td class="p-2">
                                <span class="text-lg">@asodipat</span>
                            </td>
                         
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

      </div>
      
      <div class="flex justify-end mt-4 ">
        <button type="button" class="border p-2 border-color-nav hover:bg-color-nav hover:text-white text-color-nav px-4 mr-2 rounded-xl" on:click={closeDialogDonar}>Cerrar Ventana</button>
        
      </div>
    </div>
  </div>
{/if}

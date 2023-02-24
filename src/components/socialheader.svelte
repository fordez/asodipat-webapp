
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
    <div class="bg-color-header rounded-lg p-4 max-w-4xl overflow-hidden my-auto">
        <button type="button" class="border p-1 border-color-naranja hover:bg-color-naranja hover:text-white text-color-naranja px-4 mr-2 rounded-xl" on:click={closeDialogDonar}>x</button>
      <div class="dialog-body overflow-y-auto h-full p-6">
        <h1 class="text-color-nav font-bold text-3xl max-w-xs">Buscano y Siguenos En <span class="text-color-button" >Redes Sociales</span> </h1>

        <div class="container p-2 mx-auto sm:p-4 text-color-nav">
            <div class="overflow-x-auto">
                <table class="max-w-xs text-xs ">
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

      </div>
      
      <div class="flex justify-end mt-4 ">
        <button type="button" class="border p-2 border-color-naranja hover:bg-color-naranja hover:text-white text-color-naranja px-4 mr-2 rounded-xl" on:click={closeDialogDonar}>Cerrar Ventana</button>
        
      </div>
    </div>
  </div>
{/if}

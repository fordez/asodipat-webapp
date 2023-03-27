<script>
    let visible = false;
    let tooltipVisible = false;
  
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

 

{#if visible}
  <div class="fixed inset-y-0 left-0 z-50 w-full bg-black bg-opacity-50 flex items-center justify-center" on:click={e => {if(e.target === e.currentTarget) closeDialogDonar()}}>
    <div class="bg-white rounded-lg p-4 max-w-4xl overflow-hidden my-auto">
      <button type="button" class="text-2xl text-color-nav top-0 right-0" on:click={closeDialogDonar}><i class="fa-regular fa-circle-xmark"></i></button>
      <div class="dialog-body overflow-y-auto h-full p-4">
        <h1 class="text-color-nav font-bold text-3xl max-w-xs p-2">Unirse Al Grupo De <span class="text-color-button ml-2" >  Facebook</span> </h1>

      </div>
    
    </div>
  </div>
{/if}



<div class="max-w-xs mx-auto rounded-3xl shadow-2xl bg-color-nav">
    <img src="https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fpremios%2Fpremio10.png?alt=media&token=05d514d0-9946-499d-859f-064f242f7624" alt="" class="object-cover object-center h-30 w-30 mx-auto   rounded-t-md dark:bg-gray-500">
    <div class="flex flex-col justify-between p-4 space-y-4">
        <div class="space-y-2">
            <h2 class="text-2xl font-semibold tracking-wide text-white">Unirse Al Grupo De Facebook</h2>
            
        </div>
        <button class=" text-lg bg-color-button hover:bg-color-primary text-white font-bold p-2 rounded-lg px-5 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110"on:click={openDialogDonar}>
            Unirse
        </button>
    </div>
</div>
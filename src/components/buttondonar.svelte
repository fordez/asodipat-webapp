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
<button class="" on:click={openDialogDonar}>
<div class="flex p-4 space-x-4 rounded-lg bg-color-footer transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110">
    
    <div class="flex justify-center p-4 align-middle rounded-lg  bg-cian">
      <i class="fa-sharp fa-solid fa-heart text-4xl px-1 text-color-instagram"></i>
    </div>
    <div class="flex flex-col justify-center text-white align-middle ">
      <p class="text-2xl font-semibold leading-none">Donar</p>
      <p class="capitalize">Experiencia</p>
    </div>
  </div>
</button>

{#if visible}
  <div class="fixed inset-y-0 left-0 z-50 w-full bg-black bg-opacity-50 flex items-center justify-center" on:click={e => {if(e.target === e.currentTarget) closeDialogDonar()}}>
    <div class="bg-white rounded-lg p-4 max-w-4xl overflow-hidden my-auto">
      <button type="button" class="text-2xl text-color-nav top-0 right-0" on:click={closeDialogDonar}><i class="fa-regular fa-circle-xmark"></i></button>
      <div class="dialog-body overflow-y-auto h-full p-4">
        <h1 class="text-color-footer font-bold text-lg">Recibir Bitcoin</h1>

        <div class="items-center justify-center py-3">
          <h1 class="text-color-footer text-xs text-center">QR Adress</h1>
          <img class="mx-auto" src="/qrbitcoin.png" alt="bitcoin-qr"/>
          <h1 class="text-color-footer text-xs text-center">Hash Adress</h1>
          
            <p id="texto-a-copiar" class="text-xs text-center text-color-nav px-5">bc1qpvgzfc964nl97trjfdekq32jxcs0h8dzzsjreflatgarl5h3x7qqnrg293</p>
            <button type="button" class="bg-color-primary hover:bg-color-button text-white px-3  rounded-xl" on:click={copiarTexto}>Copiar Adress</button>
          <div class="text-center text-xl text-color-footer font-bold hover:text-color-primary hover:underline py-6" on:click={closeDialogDonar}><a href="/contacto">Otro Metodo de Donación</a></div>
        </div>

      </div>
    
    </div>
  </div>
{/if}

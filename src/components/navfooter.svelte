<script>
  let visible = false;
  let tooltipVisible = false;

  function openDialog() {
    visible = true;
    document.body.classList.add('modal-open');
  }

  function closeDialog() {
    visible = false;
    document.body.classList.remove('modal-open');
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

    <div class="flex justify-center ">
      <a href="/" class="mr-6 text-xl text-color-nav hover:text-color-primary transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-110 "><i class="fa-sharp fa-solid fa-house"></i> </a>
      <a href="/participar" class="mr-6 text-xl text-color-nav hover:text-color-primary transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-110 "><i class="fa-solid fa-handshake"></i></a>
      <a href="/nosotros" class="mr-6 text-xl text-color-nav hover:text-color-primary transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-110 "><i class="fa-sharp fa-solid fa-users"></i></a>
      <button class="mr-6 text-xl text-color-nav hover:text-color-primary transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-110 " on:click={openDialog}><i class="fa-sharp fa-solid fa-hand-holding-heart mx-2"></i></button>
      <a href="/contacto" class="mr-6 text-xl text-color-nav hover:text-color-primary transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110 "><span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-color-primary opacity-75"></span><i class="fa-sharp fa-solid fa-headset"></i></a>
    </div>

    <div>
    {#if visible}
      <div class="fixed inset-y-0 left-0 z-50 w-full  bg-black bg-opacity-50 flex items-center justify-center" on:click={e => {if(e.target === e.currentTarget) closeDialog()}}>
        <div class="bg-color-header rounded-lg p-4 max-w-4xl overflow-hidden my-auto">
          <div class="dialog-body overflow-auto h-full p-4">
            <h1 class="text-color-footer font-bold text-lg">Recibir Bitcoin</h1>
            
            <div class="items-center justify-center py-3">
              <h1 class="text-color-footer">QR Adress</h1>
              <img class="mx-auto" src="/qrbitcoin.png" alt="bitcoin-qr"/>
              <h1 class="text-color-footer">Hash Adress</h1>
              <div class="p-2 border border-color-nav rounded-xl">
                  <p id="texto-a-copiar" class="text-xs text-center text-color-nav">bc1qpvgzfc964nl97trjfdekq32jxcs0h8dzzsjreflatgarl5h3x7qqnrg293</p>
              </div>
              <div class="text-center text-md text-color-footer font-bold hover:text-color-primary hover:underline py-2" on:click={closeDialog}><a href="/contacto">Otro Metodo de Donación</a></div>
          </div>
  
          </div>
          <div class="flex justify-end mt-4 ">
            <button type="button" class="border border-color-naranja hover:bg-color-naranja hover:text-white  text-color-naranja py-2 px-4 mr-2 rounded-xl" on:click={closeDialog}>Cerrar Ventana</button>
            <button type="button" class="bg-color-primary hover:bg-color-button text-white  py-2 px-4 rounded-xl " on:click={copiarTexto}>Copiar Adress</button>
          </div>
        </div>
      </div>
    {/if}
  </div>
  
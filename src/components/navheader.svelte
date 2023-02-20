<script>
  import Qr from "./qr.svelte";

  let visible = false;

  function openDialog() {
    visible = true;
    document.body.classList.add('modal-open');
  }

  function closeDialog() {
    visible = false;
    document.body.classList.remove('modal-open');
  }
</script>


<div class="max-w-lg text-center">
    <div class="container mx-auto flex items-center ">
      <a href="/" class="mr-6 text-lg text-color-nav hover:text-color-primary transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-110"><i class="fa-sharp fa-solid fa-house mx-2"></i>Inicio</a>
      <a href="/participar" class="mr-6 text-xl text-color-nav hover:text-color-primary transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-110 "><i class="fa-solid fa-handshake mx-2"></i>Participar</a>
      <a href="/nosotros" class="mr-6 text-xl text-color-nav hover:text-color-primary transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-110 "><i class="fa-sharp fa-solid fa-users mx-2"></i>Nosotros</a>
      <button class="mr-6 text-xl text-color-nav hover:text-color-primary transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-110 " on:click={openDialog}><i class="fa-sharp fa-solid fa-hand-holding-heart mx-2"></i>Donar</button>
      <a href="/contacto" class="mr-6 text-xl text-color-nav hover:text-color-primary transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110 "><span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-color-primary opacity-75"></span><i class="fa-sharp fa-solid fa-headset mx-2"></i>Contacto</a>
    </div>
</div>

<div>
  
  {#if visible}
    <div class="fixed inset-y-0 left-0 z-50 w-full  bg-color-title bg-opacity-50 flex items-center justify-center" on:click={e => {if(e.target === e.currentTarget) closeDialog()}}>
      <div class="bg-white rounded-lg p-4 max-w-4xl overflow-hidden my-auto">
        <div class="flex justify-between items-center mb-4">
          <button type="button" class="text-gray-500  hover:text-gray-800" aria-label="Close" on:click={closeDialog}>
          cerrar
          </button>
          
        </div>
        <div class="dialog-body overflow-auto h-full">
          <Qr/>
        </div>
        <div class="flex justify-end mt-4">
          <button type="button" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded" on:click={closeDialog}>Close</button>
          <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save changes</button>
        </div>
      </div>
    </div>
  {/if}
</div>

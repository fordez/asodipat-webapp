  <script>
    import Contacto from "./contacto.svelte";
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

  <div>
    <button class="bg-color-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={openDialog}>Full Screen Dialog</button>
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





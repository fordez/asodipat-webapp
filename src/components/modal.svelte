<script>
    import { createPortal } from 'svelte-portal';
  
    let isOpen = false;
    let modalContent = '';
  
    function openModal() {
      isOpen = true;
    }
  
    function closeModal() {
      isOpen = false;
    }
  </script>
  
  <button on:click={openModal}>Open modal</button>
  
  {#if isOpen}
    {#await createPortal(modalContent)}
      <div class="modal-overlay">
        <div class="modal">
          <div class="modal-content">
            <slot />
          </div>
          <button on:click={closeModal}>Close</button>
        </div>
      </div>
    {:then modal}
      {modal}
    {/await}
  {/if}
  
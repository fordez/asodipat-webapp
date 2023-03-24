
<script>
	import Networking from "./networking.svelte";

    let visible = false;
    let tooltipVisible = false;
    let currentIndex = 0;
    let icon = ['fa-brands fa-tiktok','fa-brands fa-twitter', 'fa-brands fa-facebook', 'fa-brands fa-instagram',' fa-brands fa-youtube']
    let iconColor = ['text-black','text-color-twiter','text-color-facebook', 'text-color-instagram','text-red']

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
        <button type="button" class="text-2xl text-color-nav top-0 right-0" on:click={closeDialogDonar}><i class="fa-regular fa-circle-xmark"></i></button>
      <div class="dialog-body overflow-y-auto h-full p-6">
        <Networking/>
        </div>
    </div>
  </div>
{/if}

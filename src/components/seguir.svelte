
<script>
    let visible = false;
    let tooltipVisible = false;
    let currentIndex = 0;
    let icon = ['fa-brands fa-twitter', 'fa-brands fa-facebook', 'fa-brands fa-instagram',' fa-brands fa-youtube']
    let iconColor = ['text-color-twiter','text-color-facebook', 'text-color-instagram','text-reb']

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


{#if visible}
  <div class="fixed inset-y-0 left-0 z-50 w-full bg-black bg-opacity-50 flex items-center justify-center" on:click={e => {if(e.target === e.currentTarget) closeDialogDonar()}}>
    <div class="bg-white rounded-lg p-4 max-w-4xl overflow-hidden my-auto">
        <button type="button" class="text-2xl text-color-nav top-0 right-0" on:click={closeDialogDonar}><i class="fa-regular fa-circle-xmark"></i></button>
      <div class="dialog-body overflow-y-auto h-full p-6">
        <h1 class="text-color-nav font-bold text-3xl max-w-xs">Siguenos En <span class="text-color-button" >Redes Sociales</span> </h1>


        <div class="grid grid-cols-2 grid-rows-4 gap-4 text-color-nav p-8">
            <div class="text-center">
                <i class="fa-brands fa-facebook text-2xl  hover:text-color-nav text-color-facebook   transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-150" />
            </div>
            <div>@asodipat</div>
            <div class="text-center">
                <i class="fa-brands fa-instagram text-2xl hover:text-color-nav text-color-instagram    transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-150" />
            </div>
            <div>
                @asodipat_
            </div>
            <div class="text-center" >
                <i class="fa-brands fa-twitter text-2xl hover:text-color-nav text-color-twiter  transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-150" />
            </div>
            <div>
                @asodipat
            </div>
            <div class="text-center" >
                <i class="fa-brands fa-youtube text-xl text-reb"></i>
            </div>
            <div>
                @asodipat
            </div>
          </div>

      
        </div>
    </div>
  </div>
{/if}


  
<div class="max-w-xs mx-auto my-auto bg-color-nav rounded-3xl shadow-2xl bg-color-header">
    <img src="https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fpremios%2Fpremio14.png?alt=media&token=6e3f749d-982f-4b55-89e7-3e95dcc892a1"  alt="" class="object-cover object-center h-30 w-30  mx-auto  rounded-t-md dark:bg-gray-500">
    <div class="flex flex-col justify-between p-4 space-y-4">
        <div class="space-y-2">
            <h2 class="text-2xl font-semibold tracking-wide text-white">Siguenos En Redes Sociales</h2>
        </div>
        <button class=" text-lg bg-color-button hover:bg-color-primary text-white font-bold p-2 rounded-lg px-5 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110"on:click={openDialogDonar}>
            Seguir
        </button>
    </div>
</div>


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
</script>


{#if visible}
  <div class="fixed inset-y-0 left-0 z-50 w-full bg-black bg-opacity-50 flex items-center justify-center" on:click={e => {if(e.target === e.currentTarget) closeDialogDonar()}}>
    <div class="bg-white rounded-lg p-4 max-w-4xl overflow-hidden my-auto">
        <button type="button" class="text-2xl text-color-nav top-0 right-0" on:click={closeDialogDonar}><i class="fa-regular fa-circle-xmark"></i></button>
      <div class="dialog-body overflow-y-auto h-full p-6">
        <h1 class="text-color-nav font-bold text-3xl max-w-xs p-4">Aportar Herraminetas De <span class="text-color-button" >Trabajo</span> </h1>

            <div class=" md:py-0 md:px-6">
                <h1 class="text-2xl font-bold text-color-footer">Ponerse en contacto</h1>
                <div class="space-y-4 py-6">
                    <p class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6 text-color-footer">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-color-nav">Av los Estudiantes, IPS Los Ángeles, #3er Piso</span>
                    </p>
                    <p class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6 text-color-footer">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                        <a href="https://api.whatsapp.com/send?phone=3206937812&text=Hola,%20deseo%20hablar%20con%20alg%C3%BAn%20representante"><span class="text-color-nav hover:text-color-primary">+57 3206937812</span></a>
                    </p>
                    <p class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6 text-color-footer">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <span class="text-color-nav">asodipat2022@gmail.com</span>
                    </p>
                    
                </div>
            </div> 
           
        </div>
    </div>
  </div>
{/if}





<div class="max-w-xs mx-auto my-auto rounded-3xl shadow-2xl bg-color-nav">
    <img src="https://firebasestorage.googleapis.com/v0/b/asodipat/o/webapp%2Fpremios%2Fpremio5.png?alt=media&token=30a90fa5-3c62-4757-8015-3d64c1da04ef" alt="" class="object-cover object-center h-30 w-30  mx-auto rounded-t-md dark:bg-gray-500">
    <div class="flex flex-col justify-between p-4 space-y-4">
        <div class="space-y-2">
            <h2 class="text-2xl font-semibold tracking-wide text-white">Aporta Herramientas De Trabajo</h2>
            
        </div>
        <button class=" text-lg bg-color-button hover:bg-color-primary text-white font-bold p-2 rounded-lg px-5 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110"on:click={openDialogDonar}>
            Aportar
        </button>
    </div>
</div>
<script>
  let visible = false;
  let tooltipVisible = false;

  function openDialogDonar() {
    visible = true;
    document.body.classList.add('modal-open');
    console.log('click open modal')
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
      <div class="dialog-body overflow-y-auto h-full p-4">
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
  </div>
{/if}

<section class=" mx-auto bg-color-header">
	<div class="container max-w-4xl flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
    <h1 class="text-5xl font-semibold text-color-footer p-6">Preguntas <span class="text-color-primary" >Frecuente</span></h1>
		<div class="space-y-4">
			<details class="w-full border border-color-nav rounded-lg">
				<summary class="px-4 py-6 focus:outline-none text-color-footer">¿Qué proyectos o programas actualmente está llevando a cabo la Asosaciación?</summary>
				<p class="px-4 py-6 pt-0 ml-4 -mt-4 text-color-nav">Estamos promoviendo prácticas agrícolas sostenibles para reducir la huella de carbono de la agricultura, conservar el suelo y el agua, y fomentar la seguridad alimentaria.</p>
				<p class="px-4 py-6 pt-0 ml-4 -mt-4 text-color-nav">Se están implementando iniciativas para reducir la cantidad de residuos que se producen, reciclar y reutilizar materiales, y promover la gestión adecuada de los residuos peligrosos.</p>
				<p class="px-4 py-6 pt-0 ml-4 -mt-4 text-color-nav">Próximo evento de capacitación para concienciar a las personas sobre la importancia de la sostenibilidad y la necesidad de proteger el medio ambiente.</p>
			</details>
			<details class="w-full border border-color-nav rounded-lg">
				<summary class="px-4 py-6 focus:outline-none text-color-footer">¿Cómo puede la sociedad beneficiarse o solicitar ayuda a la Asosación?</summary>
				<p class="px-4 py-6 pt-0 ml-4 -mt-4 text-color-nav">La Asociación ofrece una variedad de canales para participar en proyectos y programas  que ayudan a la sociedad a enfrentar sus desafíos y mejorar su calidad de vida. <br/> <br/>   La sociedad puede beneficiarse de estos recursos y servicios participando en el siguiente  <span class="text-color-primary  hover:underline"><a href="/participar" target="_blank" rel="noopener noreferrer">enlace</a></span> proporcionado por la Asociación.<br/> <br/>  Al hacerlo, pueden acceder a información y herramientas valiosas que les permiten tomar decisiones informadas y encontrar soluciones a los problemas que enfrentan. Además, al participar en los programas y servicios ofrecidos por la Asociación, la sociedad puede obtener el apoyo necesario para superar los desafíos y lograr sus objetivos.<br/> <br/> 
					 La Asociación también ofrece oportunidades para que la sociedad se involucre en la creación de soluciones a los problemas comunitarios y contribuya al fortalecimiento de la comunidad en general. En resumen, la sociedad puede beneficiarse y solicitar ayuda a la Asociación al participar en el enlace proporcionado y aprovechar los recursos, programas y servicios que la organización ofrece.</p>
			</details>
			<details class="w-full border border-color-nav rounded-lg">
				<summary class="px-4 py-6 focus:outline-none text-color-footer">¿Cómo puedo involucrarme y ayudar en las actividades de la Asosación?</summary>
				<p class="px-4 py-6 pt-0 ml-4 -mt-4 text-color-nav">La Asociación te invita a participar activamente en sus actividades a través del siguiente <span class="text-color-primary  hover:underline"><a href="/participar" target="_blank" >enlace :</a></span> <br/> <br/>Allí encontrarás información detallada sobre las diferentes formas en las que puedes colaborar y hacer una contribución significativa a la acción que promueve la Asociación. <br/> <br/> Ya sea a través de donaciones, voluntariado, participación en eventos y campañas, o difundiendo su mensaje en tus redes sociales, tu apoyo es crucial para el éxito de la Asociación y para la consecución de sus objetivos. ¡Únete ahora y sé parte del cambio! </p>
			</details>
      <details class="w-full border border-color-nav rounded-lg">
				<summary class="px-4 py-6 focus:outline-none text-color-footer"> ¿Qué medidas de transparencia manejan para asegurar que los recursos se utilicen efectivamente?</summary>
				<p class="px-4 py-6 pt-0 ml-4 -mt-4 text-color-nav">La Asociación utiliza la tecnología de blockchain para llevar un registro descentralizado y transparente de sus recursos y transacciones.<br/> <br/> Esto significa que todas las transacciones se registran en una base de datos compartida y segura, lo que garantiza que cualquier persona pueda acceder a la información de forma transparente y verificable.<br/> <br/>

					Además, la Asociación puede utilizar contratos inteligentes para establecer reglas y condiciones para el uso de los recursos. Estos contratos se ejecutan automáticamente cuando se cumplen ciertas condiciones, lo que reduce el riesgo de fraude y corrupción. <br/> <br/>
					
					Otras medidas de transparencia que la Asociación puede implementar incluyen la publicación regular de informes financieros y auditorías independientes, la divulgación de información sobre la gestión y el uso de los recursos, y la implementación de políticas y procedimientos claros y bien definidos para garantizar la integridad y la eficacia de sus operaciones.<br/> <br/> Estas medidas ayudan a garantizar que los recursos se utilicen de manera efectiva y en línea con los objetivos de la Asociación.</p>
			</details>

      <details class="w-full border  border-color-nav rounded-lg">
				<summary class="px-4 py-6 focus:outline-none text-color-footer">¿Cómo puedo hacer una donación a la Asosación?</summary>
				<p class="px-4 py-6 pt-0 ml-4 -mt-4 text-color-nav">Para hacer una donación a la Asociación puedes <span class="text-color-primary  hover:underline"><a href="/contacto" target="_blank" >contactarnos </a></span>o por medio de Bitcoin seguir los siguientes pasos:<br/> <br/> 

					1. Obtener la dirección de Bitcoin proporcionada por la Asociación. Esta <button class="text-color-primary  hover:underline" on:click={openDialogDonar}> dirección </button> es un código alfanumérico único que identifica la billetera de Bitcoin de la Asociación.<br/> <br/> 
					
					2. Si aún no tienes una billetera de Bitcoin, deberás crear una. Hay muchas opciones disponibles en línea, y la mayoría son gratuitas. Algunas opciones populares incluyen Coinbase, Binance y Kraken.<br/> <br/> 
					
					3. Una vez que tengas una billetera de Bitcoin, deberás agregar fondos a ella. Esto se puede hacer mediante una transferencia bancaria, una tarjeta de crédito o débito, o mediante otra billetera de Bitcoin.<br/> <br/> 
					
					4. Una vez que tengas fondos en tu billetera de Bitcoin, podrás enviar una transferencia a la dirección proporcionada por la Asociación. Asegúrate de verificar dos veces la dirección antes de enviar cualquier fondo para evitar errores.<br/> <br/> 
					
					5. Una vez que se haya completado la transferencia, deberías recibir una confirmación en tu billetera de Bitcoin. Es posible que la Asociación también te envíe un recibo o un agradecimiento por tu aporte.<br/> <br/> 
					
					También es importante asegurarte de que estás tomando medidas de seguridad adecuadas al manejar tus fondos de Bitcoin.</p>
			</details>
		</div>
	</div>
</section>





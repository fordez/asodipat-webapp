<script>
	import {addDoc, collection, doc} from 'firebase/firestore'
	import {db} from '../firebase'
	let contacto = {
		nombre:'',
		correo:'',
		mensaje:''
	}
  
	const hanldeSubmit = async () => {
	  await addDoc(collection(db,'mensaje'),contacto);
	  console.log('mensaje guardado')
	}
  </script>

<section class="py-4 ">
	<div class=" grid shadow-2xl rounded-3xl bg-white p-6 max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div class=" md:py-0 md:px-6">
			<h1 class="sm:text-5xl text-4xl font-bold text-color-footer">Ponerse en contacto</h1>
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
				<p class="pt-2 pb-4 text-color-nav">Rellena el formulario para enviarnos un correo</p>
			</div>
		</div>
		<form  class="flex flex-col  text-color-nav space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
				<span class="mb-1 text-color-nav">Nombre:</span>
				<input bind:value={contacto.nombre} type="text" placeholder="" class=" shadow-2xl rounded-lg border border-color-nav  p-1 block w-full  focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-color-footer">
				<span class="mb-1 text-color-nav">Correo:</span>
				<input bind:value={contacto.correo} type="email" placeholder="" class="border border-color-nav p-1 block w-full rounded-lg shadow-2xl focus:ring focus:ring-opacity-75 focus:ring-violet-400 ">
				<span class="mb-1 text-color-nav">Mensaje:</span>
				<textarea bind:value={contacto.mensaje} rows="3" class="border border-color-nav block w-full rounded-lg focus:ring focus:ring-opacity-75 focus:ring-violet-400 "></textarea>
			<button type="button" class="self-center px-8 py-3 text-lg rounded text-white focus:ring hover:ring focus:ring-opacity-75 bg-color-primary  focus:ring-violet-400 hover:ring-violet-400">Enviar</button>
		</form>
	</div>
</section>
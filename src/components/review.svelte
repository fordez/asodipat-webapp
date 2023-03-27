<script>
	let review = {
		rate: 0,
		feed: ''
	}

	let starColor = ['text-color-primary','text-color-primary','text-color-primary','text-color-primary','text-color-primary'];

	function handleChange1(){

		review.rate = 1
		console.log(review.rate)

		starColor.forEach((color, index)=>{ 
			index <=0 ? starColor[index]='text-yellow': starColor[index]='text-color-primary';
		})

	}

	function handleChange2(){
		review.rate = 2;
		console.log(review.rate)
		starColor.forEach((color, index)=>{
			if(index <= 1){
				starColor[index]='text-yellow'
			}
			else{
				starColor[index]='text-color-primary'
			}
		})

	}

	function handleChange3(){
		review.rate = 3;
		console.log(review.rate)
		starColor.forEach((color, index)=>{
			if(index <= 2){
				starColor[index]='text-yellow'
			}
			else{
				starColor[index]='text-color-primary'
			}
		})

	}

	function handleChange4(){
		review.rate = 4;
		console.log(review.rate)
		starColor.forEach((color, index)=>{
			if(index <= 3){
				starColor[index]='text-yellow'
			}
			else{
				starColor[index]='text-color-primary'
			}
		})

	}

	function handleChange5(){
		review.rate = 5;
		console.log(review.rate)
		starColor.forEach((color, index)=>{
			if(index <= 4){
				starColor[index]='text-yellow'
			}
			else{
				starColor[index]='text-color-primary'
			}
		})

	}

	function handleOpinar() {
		const button = document.querySelector('#btn');
		button.classList.add('btn-loading');
		const icon = button.querySelector('span');
		icon.classList.remove('hidden');

		const feedback = document.getElementById("feedback").value;
		review.feed = feedback;
		console.log(review);
		review.feed = '';
		review.rate = 0;

		starColor.forEach((color, index)=>{
			starColor[index]='text-color-primary';
		})

	}

</script>

<section class="py-6 bg-color-footer text-white">
	<div class="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
		<div class="flex flex-col justify-center lg:text-left">
			<p class="mb-1 text-xs font-medium tracking-widest uppercase text-color-primary ">Tu feedback nos ayuda a retroalimentarnos</p>
			<h1 class="py-2 text-4xl font-medium leading-tight title-font">¿Qué opinas sobre nuestro trabajo social?</h1>
		</div>
	</div>
</section>


<div class="flex flex-col  mx-auto p-8 shadow-sm rounded-xl lg:p-12 bg-color-header">
	<div class="flex flex-col items-center w-full">
		<h2 class="text-4xl font-semibold text-center text-color-footer">¡Tu opinión importa!</h2>
		<div class="flex flex-col items-center py-6 space-y-3 text-color-nav">
			<div class="flex space-x-3">
				<button id="rate-1" type="button" title="1 Estrella" aria-label="1 Estrella" on:click|preventDefault={handleChange1} value="1">
					<i class="fas fa-star fa-2x {starColor[0]}"></i>
				  </button>
				  <button id="rate-2" type="button" title="2 Estrella" aria-label="2 Estrella" on:click|preventDefault={handleChange2} value="2">
					<i class="fas fa-star fa-2x {starColor[1]}"></i>
				  </button>
				  <button type="button" title="3 Estrella" aria-label="3 Estrella" on:click|preventDefault={handleChange3} value="3">
					<i class="fas fa-star fa-2x {starColor[2]}"></i>
				  </button>
				  <button type="button" title="4 Estrella" aria-label="4 Estrella" on:click|preventDefault={handleChange4} value="4">
					<i class="fas fa-star fa-2x {starColor[3]}"></i>
				  </button>
				  <button id="rate-5" type="button" title="5 Estrella" aria-label="5 Estrella" on:click|preventDefault={handleChange5} value="5">
					<i class="fas fa-star fa-2x {starColor[4]}"></i>
				  </button>
				  
			</div>
		</div>
		<span class="text-color-footer">Calificación:{review.rate}</span>
		<div class="flex flex-col w-full max-w-xs">
			<textarea bind:value={review.feed} id="feedback" rows="3" placeholder="Feed..." class="p-4 rounded-md resize-none border border-color-nav "></textarea>
		</div>
		<button id='btn' type="button" on:click={handleOpinar} class="py-4 my-8 px-10 font-semibold rounded-md bg-color-naranja hover:bg-color-naranjahover text-white transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110 ">
			<span class="absolute inset-0 flex items-center justify-center hidden">
				<i class="fas fa-spinner fa-spin text-2xl"></i>
			  </span>
			Opinar
		</button>
	</div>
</div>
<script>
	let logos = [
	  '/ourallies/gamvica.png',
	  '/ourallies/gestiondesarrollo.png',
	  '/ourallies/renacer.png',
	  '/ourallies/fenix.png'
	];
  
	let currentLogoIndex = 0;
	let holding = false;
	
	function handleMouseDown() {
	  holding = true;
	}
	
	function handleMouseUp() {
	  holding = false;
	}
	
	function handleMouseLeave() {
	  holding = false;
	}
	
	function handleMouseMove(event) {
	  if (holding) {
		if (event.movementX > 0) {
		  currentLogoIndex++;
		  if (currentLogoIndex >= logos.length) {
			currentLogoIndex = 0;
		  }
		} else if (event.movementX < 0) {
		  currentLogoIndex--;
		  if (currentLogoIndex < 0) {
			currentLogoIndex = logos.length - 1;
		  }
		}
	  }
	}
  </script>
  
  <div 
	class="flex justify-center items-center w-full h-64 bg-gray-400" 
	on:mousedown={handleMouseDown} 
	on:mouseup={handleMouseUp}
	on:mouseleave={handleMouseLeave}
	on:mousemove={handleMouseMove}
  >
	<img 
	   
	  src={logos[currentLogoIndex]} 
	  alt="Logo"
	/>
  </div>
  
  
  
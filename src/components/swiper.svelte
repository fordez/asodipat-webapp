<script>
        let currentIndex = 0;
        let logos= ["/ourallies/alcaldiacharco.png", 
                    "/ourallies/pdetlogo.png", 
                    "/ourallies/gestiondesarrollo.png",
                    "/ourallies/gamvica.png",
                    "/ourallies/renacer.png",
                    "/ourallies/gestiondesarrollo.png"
          ]
   
    function handleNext() {
		currentIndex = currentIndex === logos.length - 1 ? 0 : currentIndex + 1;
	}   

    function handlePrev() {
      currentIndex = currentIndex === 0 ? logos.length - 1 : currentIndex - 1;
    }

    setInterval(() => {
    handleNext();
  }, 5000);

  </script>
  



<div >
    <div >
          <img alt='ourallies' src={logos[currentIndex]}/>
    </div>
  </div>

   
    
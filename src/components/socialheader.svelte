<script>
    let currentIndex = 0;
    let icon = ['fa-brands fa-twitter', 'fa-brands fa-facebook', 'fa-brands fa-instagram']
    let iconColor = ['text-color-twiter','text-color-facebook', 'text-color-instagram']

    function handleNext() {
		currentIndex = currentIndex === icon.length - 1 ? 0 : currentIndex + 1;
	} 

    setInterval(() => {
    handleNext();
  }, 1500);
</script>

<div class="flex p-2 ">
    <i class="{icon[currentIndex]} {iconColor[currentIndex]} text-2xl hover:text-color-primary transition ease-in-out delay-30  hover:-translate-y-1 hover:scale-130" />
</div>


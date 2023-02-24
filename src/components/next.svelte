<script>
	import News from "./news.svelte";

</script>

<section class="bg-color-header shadow-xl p-5">
	<div
		class="mx-auto flex flex-col items-center px-4  text-center py-6 md:px-10 lg:px-32 xl:max-w-5xl"
	>
		<h1 class="text-6xl font-bold leading-none sm:text-6xl text-color-footer">
			Noticiás
			<span class="text-color-primary">Destacadas</span>
		</h1>
		<p class="px-8 mt-8 text-lg text-color-nav">Participar para las proximas experiencias!</p>
	</div>
    <News/>
</section>

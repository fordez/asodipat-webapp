<script>
	import { db } from '../firebase';
	import { getDocs, collection } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { writable, derived } from 'svelte/store';

	export const experiencia = writable([]);

	onMount(async () => {
		let data = [];
		const querySnapshot = await getDocs(collection(db, 'experiencia'));
		querySnapshot.forEach((doc) => {
			data.push({ id: doc.id, ...doc.data() });
		});
		experiencia.set(data);

		const paragraph = document.querySelector('.paragraph');
		isExpanded = paragraph.offsetHeight < paragraph.scrollHeight;
	});

	let isExpanded = false;

	function toggleExpanded() {
		isExpanded = !isExpanded;
	}
</script>

{#each $experiencia as experiencia}
	{experiencia.id}
	<div class="flex flex-wrap mb-12 p-8">
		<h1>{experiencia.id}</h1>
		<h3 class="text-3xl font-bold tracking-tight  sm:text-4xl sm:hidden p-6 text-color-footer ">
			{experiencia.ubicacion}
		</h3>
		<div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
			<div
				class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
				style="background-position: 50%"
				data-mdb-ripple="true"
				data-mdb-ripple-color="light"
			>
				<img src={experiencia.imagen} class="w-full" alt="Louvre" />
				<a href="#!">
					<div
						class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
						style="background-color: rgba(251, 251, 251, 0.2)"
					/>
				</a>
			</div>
			<div class=" p-4 text-center">
				<button
					title="left arrow"
					class="p-2 text-color-button transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-color-button hover:text-white"
					on:click={handlePrev}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<button
					title="right arrow"
					class="p-2 text-color-button transition-colors duration-300 border rounded-full rtl:-scale-x-100 mx-6 hover:bg-color-button hover:text-white"
					on:click={handleNext}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>
		</div>

		<div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
			<h3 class="text-3xl font-bold mb-4 hidden sm:block text-color-footer">
				{experiencia.ubicacion}
			</h3>

			<div class="container max-w-4xl py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
				<div class="flex items-center justify-between">
					<span class="text-sm text-color-footer">{experiencia.fecha}</span>
					<a
						rel="noopener noreferrer"
						href="#"
						class="px-3 py-1 font-bold rounded-lg text-white bg-color-purpura">{experiencia.tipo}</a
					>
				</div>
				<div class="mt-3">
					<a
						rel="noopener noreferrer"
						href="#"
						class="text-2xl font-bold hover:underlin text-color-footer">{experiencia.titulo}</a
					>

					<p class="text-color-nav  overflow-hidden h-24 paragraph" class:line-clamp={!isExpanded}>
						{experiencia.historia}
					</p>
					{#if isExpanded === false}
						<button
							class="text-color-footer hover:underline focus:outline-none"
							on:click={toggleExpanded}>Leer m??s</button
						>
					{:else}
						<p class="text-color-nav leading-relaxed paragraph">
							{experiencia.historia}
						</p>
						<button
							class="text-color-footer hover:underline focus:outline-none"
							on:click={toggleExpanded}>Leer menos</button
						>
					{/if}
				</div>
				<div class="flex items-center justify-between mt-4">
					<div>
						<a rel="noopener noreferrer" href="#" class="flex items-center">
							<img
								src="https://source.unsplash.com/50x50/?portrait"
								alt="avatar"
								class="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
							/>
							<span class="hover:underline text-color-footer">Leroy Jenkins</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
{/each}

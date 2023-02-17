<script>
    import { onMount } from 'svelte';
  
    let isExpanded = false;
  
    onMount(() => {
      const paragraph = document.querySelector('.paragraph');
      isExpanded = paragraph.offsetHeight < paragraph.scrollHeight;
    });
  
    function toggleExpanded() {
      isExpanded = !isExpanded;
    }
  </script>
  
  
    <p class="text-gray-800  overflow-hidden h-24 paragraph" class:line-clamp={!isExpanded}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed mauris mauris. Aenean faucibus risus non risus iaculis, non luctus libero convallis. Sed finibus aliquam turpis, et laoreet nulla venenatis ac. Nulla facilisi. Sed dictum nisl in quam porttitor, vel gravida est bibendum. Donec blandit, sapien vel bibendum volutpat, ex tellus malesuada lectus, quis scelerisque mauris nibh vel turpis. Praesent sit amet enim convallis, lacinia nisl vel, viverra felis. Sed ut eros non lorem vestibulum lobortis.
    </p>
    {#if isExpanded === false}
      <button class="text-blue-500 hover:underline focus:outline-none" on:click={toggleExpanded}>Leer más</button>
    {:else}
      <p class="text-gray-800 leading-relaxed paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed mauris mauris. Aenean faucibus risus non risus iaculis, non luctus libero convallis. Sed finibus aliquam turpis, et laoreet nulla venenatis ac. Nulla facilisi. Sed dictum nisl in quam porttitor, vel gravida est bibendum. Donec blandit, sapien vel bibendum volutpat, ex tellus malesuada lectus, quis scelerisque mauris nibh vel turpis. Praesent sit amet enim convallis, lacinia nisl vel, viverra felis. Sed ut eros non lorem vestibulum lobortis.
      </p>
      <button class="text-blue-500 hover:underline focus:outline-none" on:click={toggleExpanded}>Leer menos</button>
    {/if}

  
  
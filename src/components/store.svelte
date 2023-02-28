<script>
    import { count } from '../store/experiencia';
  
    function increment() {
      count.update(n => n + 1);
    }
  </script>
  
  <button on:click={increment}>Incrementar</button>
  <p>El contador es { $count }</p>
  
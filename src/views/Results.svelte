<script >
  import Result from '../components/Result.svelte';
  export let active = true;
  export let documents = [
    { nombre: "nombre1", valor: 1 },
    { nombre: "nombre2", valor: 1 },
    { nombre: "nombre3", valor: 1 },
    { nombre: "nombre4", valor: 1 },
    { nombre: "nombre5", valor: 1 }
  ]
  
</script>
<style lang="scss">
  @import '../assets/_variables';
  .hidden{
    display: none;
  }
</style>

<div >
  <h2>Resultados de la busqueda:</h2s>
    {#if active}
      <div>
        {#each documents as doc}
          <Result title={doc.nombre}/>      
          <br/>
        {/each}
      </div>
    {:else}
      
    {/if}
  
</div>
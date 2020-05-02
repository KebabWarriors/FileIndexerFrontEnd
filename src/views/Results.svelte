<script >
  import { beforeUpdate } from 'svelte';
  import Result from '../components/Result.svelte';
  export let active = true;
  export let documents=[];
  export let operableDocuments = [
    {
      "documento.txt": 0.15156,
      "documento.pdf": 0.45687,
      "documento.docx": 0.15555
    }
  ];
  beforeUpdate(async () => {
    let map = new Map(Object.entries(operableDocuments[0]));
    map.forEach((key,value)=>{
      console.log(key);
      documents.push({nombre:value , valor:key});
    })
    
    
  });
  
</script>
<style lang="scss">
  @import '../assets/_variables';
  .hidden{
    display: none;
  }
</style>

<div >
  <h2>Resultados de la busqueda:</h2>
    {#if active}
      <div>
        {#each documents as doc}
          <Result title={doc.nombre} valor={doc.valor}/>      
          
          
          <br/>
        {/each}
      </div>
    {:else}
      
    {/if}
  
</div>
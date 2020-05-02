<script >
  export let title = 'tituo';
  export let valor = 0.15;

</script>
<style lang="scss">
  @import '../assets/_variables';
  .result-container {
    background-color: $nord6;
    color: $nord0;
    box-shadow: $shadow-color 0 3px 6px 0;
    transition: box-shadow 0.3s ease-in;
    
    margin-bottom: 0.7rem;
  }

  .result-container:hover {
    box-shadow: $shadow-color-transition 2px 6px 6px 0;
  }
  .result-title{
    display: flex;
    justify-content: space-between;
    background-color: $nord1;
    color: $nord6;
    padding: 1rem;
  }
</style>
<div class="result-container">
  <div class="result-title">
    <h3>{title}</h3>
    <h6>{valor}</h6>
  </div>
</div>
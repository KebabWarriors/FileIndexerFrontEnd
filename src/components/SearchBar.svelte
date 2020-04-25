<script>
  import Icon from 'mdi-svelte';
  import { mdiMagnify } from '@mdi/js';
  import { searchTerm } from '../stores/store.js';

  function handleKeyDown(event) {
    if (event.key === 'Enter')
      console.log('Submit.');
  }
</script>

<style type="text/scss">
  @import '../assets/_variables';

  .search-bar-container {
    padding-right: 10px;
    display: flex;
    background-color: #ECEFF4;
    box-shadow: $shadow-color 0 3px 6px 0;
    transition: box-shadow 0.3s ease-in;
  }

  .search-bar-container:focus-within {
    box-shadow: $shadow-color-transition 2px 6px 6px 0;
  }

  .search-bar-container:hover {
    box-shadow: $shadow-color-transition 2px 6px 6px 0;
  }

  .search-bar-input {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    display: flex;
    width: 100%;
    height: 45px;
    border: none;
    outline: none;
    background-color: #ECEFF4;
    font-size: 16px;
    color: #2E3440;
  }
</style>

<div class="search-bar-container">
  <div style="display: flex; flex-direction: column; justify-content: center; margin-left: 10px;
    margin-right: 10px;">
    <Icon path={mdiMagnify} color="#5E81AC" />
  </div>
  <input
    class="search-bar-input"
    placeholder="Buscar..."
    on:keydown={handleKeyDown}
    bind:value={$searchTerm} />
</div>

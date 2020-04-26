<script>
  import Icon from 'mdi-svelte';
  import { mdiMagnify } from '@mdi/js';
  import { searchTerm } from '../stores/store.js';
  import InputBar from './InputBar.svelte';

  function handleKeyDown(event) {
    if (event.key === 'Enter')
      console.log('Submit.');
  }
</script>

<InputBar>
  <div slot="icon">
    <Icon path={mdiMagnify} color="#5E81AC" />
  </div>
  <input slot="input" on:keydown={handleKeyDown} placeholder="Buscar" />
</InputBar>

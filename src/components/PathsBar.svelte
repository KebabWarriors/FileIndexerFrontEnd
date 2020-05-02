<script>
  import Icon from 'mdi-svelte';
  import { mdiFileMultiple } from '@mdi/js';
  import InputBar from './InputBar.svelte';
  import { paths } from '../stores/store.js';
</script>

<InputBar>
  <div slot="icon">
    <Icon path={mdiFileMultiple} color="#5E81AC" />
  </div>
  <input slot="input" placeholder="Ex. ~/Documents" bind:value={$paths} />
</InputBar>

<script>
  import Icon from 'mdi-svelte';
  import { mdiFileMultiple } from '@mdi/js';
  import InputBar from './InputBar.svelte';
</script>

<InputBar>
  <div slot="icon">
    <Icon path={mdiFileMultiple} color="#5E81AC" />
  </div>
  <input slot="input" placeholder="Ex. ~/Documents" />
</InputBar>

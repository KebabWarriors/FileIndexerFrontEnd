<script>
  import Checkbox from './Checkbox.svelte';
  import PathsBar from './PathsBar.svelte';
  import { docx, doc, pdf, txt } from '../stores/store.js';
</script>

<style lang="scss">

</style>

<div>
  <h3>Directorios</h3>
  <PathsBar />
  <br />
  <small style="font-weight: 100;"><i><b>Separados por comas</b></i></small>
  <br />
  <h3>Tipos de archivos</h3>
  <Checkbox label=".docx" bind:checked={$docx} />
  <Checkbox label=".doc" bind:checked={$doc}/>
  <Checkbox label=".pdf" bind:checked={$pdf} />
  <Checkbox label=".txt" bind:checked={$txt} />
</div>

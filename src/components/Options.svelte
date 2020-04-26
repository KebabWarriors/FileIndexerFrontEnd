<script>
  import Checkbox from './Checkbox.svelte';
  import PathsBar from './PathsBar.svelte';
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
  <Checkbox label=".docx" />
  <Checkbox label=".doc" />
  <Checkbox label=".pdf" />
  <Checkbox label=".txt" />
</div>

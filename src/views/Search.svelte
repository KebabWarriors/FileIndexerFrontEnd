<script>
  import SearchBar from '../components/SearchBar.svelte';
  import Card from '../components/Card.svelte';
  import Options from '../components/Options.svelte';
  import Results from './Results.svelte';
</script>

<div>
  <SearchBar />
  <br />
  <Card>
    <Options />
  </Card>
  <br/>
  <Results />
</div>

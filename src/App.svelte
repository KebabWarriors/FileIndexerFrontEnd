<script>
  import { Router, Route } from 'svelte-routing';
  import SearchBar from './components/SearchBar.svelte';
  import Icon from 'mdi-svelte';
  import { mdiGithub } from '@mdi/js';
  import Card from './components/Card.svelte';
  import Options from './components/Options.svelte';

  export let url = '';
</script>

<style lang="scss">
  @import './assets/_variables';
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap');

  :global(html) {
    scroll-padding-top: 60px;
  }

  :global(body::-webkit-scrollbar) {
    width: 12px;
    margin-right: 10px;
  }

  :global(body::-webkit-scrollbar-thumb) {
    background-color: $nord0;
    border-radius: 6px;
    border: 3px solid $nord3;
  }

  :global(body::-webkit-scrollbar-track) {
    background-color: $nord3;
  }

  :global(body, html) {
    background-color: $nord3;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column; /* creates rows out of the elements main and footer */
    height: 100vh;
  }

  :global(body) {
    font-family: 'Roboto', sans-serif;
    scrollbar-width: thin;
    scrollbar-color: $nord3;
  }

  footer {
    left: 0;
    color: white;
    text-align: center;
    justify-content: center;
    display: flex;
    padding: 5px;
    bottom: 0;
  }

  main {
    padding-top: 60px;
    color: white;
    padding-left: 20%;
    padding-right: 20%;
    flex: 1 0 auto;
  }

  .github-link {
    display: flex;
    text-decoration: inherit;
    color: inherit;
  }

  .github-link-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 6px;
  }

  .title {
    font-size: 40px;
  }
</style>

<Router url={url}>
  <main>
    <h1 class="title">File indexer</h1>
    <SearchBar />
    <br />
    <Card>
      <Options />
    </Card>
  </main>
  <footer>
    <a
      class="github-link"
      href="https://github.com/KebabWarriors" style="none"
    >
      <div class="github-link-icon">
        <Icon path={mdiGithub} color="white" style="" />
      </div>
      <h3>Kebab warriors</h3>
    </a>
  </footer>
</Router>


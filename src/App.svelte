<script>
  import { Router, Link, Route } from 'svelte-routing';
  import TabBar from './components/TabBar.svelte';

  export let url = '';
</script>

<style>
  footer {
    left: 0;
    color: white;
    text-align: center;
    justify-content: center;
    display: flex;
    padding: 5px;
    background-color: #3B4252;
    box-shadow: rgba(36, 41, 51, 0.15) 0px 5px 10px 5px;
    bottom: 0;
  }

  main {
    padding-top: 10px;
    padding-bottom: 60px;
    margin-top: 60px;
    color: white;
    padding-left: 10%;
    padding-right: 10%;
    height: 100%;
  }

  .github-link {
    text-decoration: inherit;
    color: inherit;
  }

  .app-header {
    z-index: 10;
    overflow: hidden;
    top: 0;
    background-color: #2E3440;
    display: flex;
    justify-content: space-between;
    height: 50px;
    box-shadow: rgba(36, 41, 51, 0.15) 0px 5px 10px 0px;
    position: fixed;
    width: 100%;
  }

  .app-title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 20px;
    margin-left: 15px;
  }

  .app-tab-container {
    display: flex;
    margin-right: 15px;
  }
</style>

<Router url={url}>
  <header class="app-header">
    <div class="app-title-container">
      <span>File Indexer</span>
    </div>
    <div class="app-tab-container">
      <TabBar route="/">
        Inicio
      </TabBar>
      <TabBar route="/index">
        Indexear
      </TabBar>
    </div>
  </header>
  <main>
    <Route path="/">
      <h1>Inicio</h1>
    </Route>
    <Route path="/index">
      <h1>Indexear</h1>
    </Route>
  </main>
  <footer>
    <a
      class="github-link"
      href="https://github.com/KebabWarriors" style="none"
    >
      <h3>Kebab warriors</h3>
    </a>
  </footer>
</Router>


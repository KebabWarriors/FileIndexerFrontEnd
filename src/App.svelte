<script>
  import { Router, Link, Route } from 'svelte-routing';
  import TabBar from './components/TabBar.svelte';

  export let url = '';
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap');

  main {
    padding-top: 10px;
    margin-top: 60px;
    color: white;
    padding-left: 10%;
    padding-right: 10%;
  }

  .app-header {
    z-index: 10;
    overflow: hidden;
    top: 0;
    background-color: #2E3440;
    display: flex;
    justify-content: space-between;
    height: 50px;
    box-shadow: rgba(36, 41, 51, 0.15) 0px 5px 10px 0px;;
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
</Router>


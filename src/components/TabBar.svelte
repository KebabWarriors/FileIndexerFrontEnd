<script>
  import {getContext} from 'svelte';
  import {ROUTER} from 'svelte-routing/src/contexts';
  const { activeRoute } = getContext(ROUTER);

  import { navigate } from 'svelte-routing';

  export let route = '';

  export function goToRoute() {
    navigate(route);
  }
</script>

<style>
  .tab-container {
    display: flex;
  }

  .tab {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
    color: white;
    cursor: pointer;
    margin: 0;
    font-weight: 600;
  }

  .tab:hover {
    background-color: #81A1C1;
  }

  .tab-active {
    background-color: #5E81AC;
    cursor: initial;
  }
</style>

<div class="tab-container">
  {#if ($activeRoute ? $activeRoute.uri : '') === route}
    <div class="tab tab-active">
      <slot />
    </div>
  {:else}
    <div class="tab" on:click={goToRoute}>
      <slot />
    </div>
  {/if}
</div>

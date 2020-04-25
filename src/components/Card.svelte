<script>
  import Icon from 'mdi-svelte';
  import {mdiChevronDown, mdiChevronUp} from '@mdi/js';

  let active = false;

  function toggleCard() {
    active = !active;
  }
</script>

<style lang="scss">
  @import '../assets/_variables';

  .card-container {
    background-color: $nord6;
    color: $nord0;
    box-shadow: $shadow-color 0 3px 6px 0;
    transition: box-shadow 0.3s ease-in;
    user-select: none;
  }

  .card-container:hover {
    box-shadow: $shadow-color-transition 2px 6px 6px 0;
  }

  .card-title {
    display: flex;
    justify-content: space-between;
    background-color: $nord1;
    color: $nord6;
    padding: 10px;
    cursor: pointer;
  }

  .card-title > b {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card-container-content {
    background-color: $nord6;
    color: $nord0;
    padding: 10px 20px 20px 20px;
    min-height: 100px;
    overflow: hidden;
  }

  .card-container-content-hidden {
    @extend .card-container-content;
    display: none;
  }
</style>

<div class="card-container">
  <div class="card-title" on:click={toggleCard}>
    <b>Opciones</b>
    {#if !active}
      <Icon path={mdiChevronDown} color="#5E81AC" />
    {:else}
      <Icon path={mdiChevronUp} color="#5E81AC" />
    {/if}
  </div>
  <div class="{active ? 'card-container-content' : 'card-container-content-hidden'}">
    <slot />
  </div>
</div>

<style lang="scss">
  @import '../assets/_variables';

  .input-bar-container {
    padding-right: 10px;
    padding-left: 10px;
    display: flex;
    background-color: #ECEFF4;
    box-shadow: $shadow-color 0 3px 6px 0;
    transition: box-shadow 0.3s ease-in;
  }

  .input-bar-container:focus-within {
    box-shadow: $shadow-color-transition 2px 6px 6px 0;
  }

  .input-bar-container:hover {
    box-shadow: $shadow-color-transition 2px 6px 6px 0;
  }

  :global(.input-bar-container > input) {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    display: flex;
    width: 100%;
    height: 45px;
    border: none;
    outline: none;
    background-color: #ECEFF4;
    font-size: 16px;
    color: #2E3440;
  }

  .input-bar-icon-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  :global(.input-bar-icon-container > div) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
  }
</style>

<div class="input-bar-container">
  <div class="input-bar-icon-container">
    <slot name="icon" />
  </div>
  <slot name="input" />
</div>

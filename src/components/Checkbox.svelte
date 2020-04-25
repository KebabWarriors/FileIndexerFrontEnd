<script>
  export let label = '';
</script>

<style lang="scss">
  @import '../assets/_variables';

  .checkbox-container {
    position: relative;
    cursor: pointer;
    user-select: none;
    padding-left: 25px;
    display: block;
    margin-bottom: 10px;
  }

  .checkbox-container input {
    position: absolute;
    cursor: pointer;
    opacity: 0;
    height: 0;
    width: 0;
  }

  .checkbox-checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: transparent;
    border: 2px solid $nord10;
    border-radius: 4px;
  }

  .checkbox-checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkbox-container input:checked ~ .checkbox-checkmark {
    background-color: $nord10;
  }

  .checkbox-container .checkbox-checkmark:after {
    left: 4px;
    top: 0px;
    width: 5px;
    height: 10px;
    border: solid $nord6;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  .checkbox-container input:checked ~ .checkbox-checkmark:after {
    display: block;
  }
</style>

<label class="checkbox-container">
  {label}
  <input type="checkbox" />
  <span class="checkbox-checkmark" />
</label>

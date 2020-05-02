<script>
  import Icon from 'mdi-svelte';
  import { mdiMagnify } from '@mdi/js';
  import { searchTerm, data } from '../stores/store.js';
  import InputBar from './InputBar.svelte';

  function handleKeyDown(event) {

    if (event.key === 'Enter'){
      console.log('Submit.');
      //Indexamos
      fetch('http://localhost:5000/index',{
        method: 'POST',
        body: JSON.stringify({"path": "./documents/"}),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        alert(myJson);
      });
      //Asignamos la query que vamos a buscar
      let terminos;
      const unsubscribe = searchTerm.subscribe(value => {
        terminos = value;
      });
      //Buscamos 
      fetch("http://localhost:5000/search", {
        method: 'POST', 
        body: JSON.stringify({"query": terminos}), 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        data.subscribe(value => {
          data.update(response.data);
        });
      });
    }
      
    }
</script>

<InputBar>
  <div slot="icon">
    <Icon path={mdiMagnify} color="#5E81AC" />
  </div>
  <input slot="input" on:keydown={handleKeyDown} placeholder="Buscar" bind:value={$searchTerm} />
</InputBar>

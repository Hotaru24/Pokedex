import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/pokemon`)
    .then((result) => {
      console.log(result.data)
    })
  }) 

  return (
    <div className="App">
      <header className="App-header">
       <h1>The Great Pokedex</h1>
      </header>
    </div>
  );
}

export default App;

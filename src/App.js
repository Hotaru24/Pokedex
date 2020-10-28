import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [pokeData, setPokeData]= useState([]);


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then((result) => {
      console.log(result.data)
      setPokeData(result.data)
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

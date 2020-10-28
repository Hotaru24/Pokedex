import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PokeCard from "./Components/PokeCard";
import './App.css';

function App() {

  const [pokeData, setPokeData]= useState([]);


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then((result) => {
      setPokeData(result.data.results)
    })
  },[]) 

  return (
    <div className="App">
      <header className="App-header">
       <h1>The Great Pokedex</h1>
       {console.log(pokeData)}
       <div>
        {pokeData.map(
          (poke, index) => {
            return ( 
            
              <div key={index}>
                <h2>{poke.name}</h2>
              </div>
            )
          }

        )}
       </div>

      </header>
    </div>
  );
}

export default App;

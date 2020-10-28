import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PokeCard from "./Components/PokeCard";
import './App.css';

function App() {

  const [pokeList, setPokeList]= useState([]);


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then((result) => {
      setPokeList(result.data.results)
    })
  },[]);
  

  return (
    <div className="App">
      <header className="App-header">
       <h1>The Great Pokedex</h1>
       {console.log(pokeList)}
       <div>
        {pokeList.map(
          (poke, index) => {
            return ( 
              <div key={index}>
                <PokeCard poke={poke}/>
              </div> 
            )
          }
        )}
       </div>

      </header>
    </div>
  )
};

export default App;

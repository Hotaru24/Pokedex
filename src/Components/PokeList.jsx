import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PokeCard from "./PokeCard";

function PokeList () {

  const [pokeList, setPokeList]= useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then((result) => {
      setPokeList(result.data.results)
    })
  },[]);
  

  return (
    <div className="App">
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
    </div>
  )
};

export default PokeList;

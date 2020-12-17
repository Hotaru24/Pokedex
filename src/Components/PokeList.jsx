import React, {useContext} from 'react';
import PokeCard from "./PokeCard";
import pokeCtx from "./pokeCtx";

const PokeList = () => {

  const [pokeList] = useContext(pokeCtx);
  console.log(pokeList)
  
  return (
    <div className="App">
      <p>toto</p>
       <h1>The Great Pokedex</h1>
       {console.log(pokeCtx)}
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

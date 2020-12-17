import React, {useContext, useState, useEffect} from 'react';
import pokeCtx from "./pokeCtx";

const PokePage = (props) => {
    
  const [pokeList] = useContext(pokeCtx);
  const [pokeId, setPokeId] = useState(0);
  const reverseUrl = window.location.href.split("").reverse().join("");

  
  useEffect(() => {
    if (reverseUrl.substr(1, 2)  == "/"){
      setPokeId(reverseUrl.substr(0, 1).split("").reverse().join(""));
    } else {
      setPokeId(reverseUrl.substr(0, 2).split("").reverse().join(""));
    }        
  },[]);

  return (
    <>
      <div id="pageBody">
        {/* rajouter un filter pour ne récupérer 
        les données du pokemon dont l'id est = à 
        pokeId  */}
        {pokeList
        
        .map(
          (poke, index) => {
            return ( 
              <div key={index}>
                <p>{`totopage ${pokeId}`}</p>
              </div> 
            )
          }
        )}
      </div>
    </>

)
};

export default PokePage;
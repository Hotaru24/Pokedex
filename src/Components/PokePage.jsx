import React, {useState, useEffect} from 'react';
import axios from "axios";

const PokePage = () => {
    
  const [pokeId, setPokeId] = useState(1);
  const [pokeData, setPokeData] = useState([])
  const reverseUrl = window.location.href.split("").reverse().join("");
  const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`

  
  useEffect(() => {
    if (reverseUrl.substr(1, 2)  === "/"){
      setPokeId(reverseUrl.substr(0, 1).split("").reverse().join(""));
    } else {
      setPokeId(reverseUrl.substr(0, 2).split("").reverse().join(""));
    }        
  },[]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
    .then((result, err) => {
        if (err) {
          throw err;
        } else {
          setPokeData(result.data)      
        }
    })    
  },[pokeId]);

  console.log(pokeData.types)

  return (
    <>        
      <h1>{pokeData.name}</h1>
        <div id="pageBody">
          <img  src={pokeImg}  alt={pokeData.name}/>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
    </>
  )
};

export default PokePage;

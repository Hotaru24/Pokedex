import React, {useState, useEffect} from 'react';
import axios from "axios";

const PokePage = () => {
  
  const [pokeId, setPokeId] = useState("");
  const [pokeData, setPokeData] = useState([]);
  const [pokeType, setPokeType] = useState("")
  const reverseUrl = window.location.href.split("").reverse().join("");
  const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`

  
  useEffect(() => {
    if (reverseUrl.substring(1, 2)  === "/"){
      setPokeId(reverseUrl.substring(0, 1).split("").reverse().join(""));
    } else {
      setPokeId(reverseUrl.substring(0, 2).split("").reverse().join(""));
    }        
  },[]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
    .then((result, err) => {
        if (err) {
          throw err;
        } else {
          setPokeData(result.data);
          setPokeType(result.data.types[0].type.name);
          localStorage.clear();
        }; 
    })  
  },[pokeId]);
 console.log(reverseUrl.substring(1, 2))

  return (
    <>        
      <h1>{pokeData.name}</h1>
        <div id="pageBody">
          <img  src={pokeImg}  alt={pokeData.name}/>
          <ul>
            <li>Type : {pokeType}</li>
            <li>Weight : {Math.round(pokeData.weight*0.45359237)}kg</li>
            <li>Height : {Math.round(pokeData.height*10)}cm</li>
          </ul>
        </div>
    </>
  )
};

export default PokePage;

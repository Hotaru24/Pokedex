import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PokeCard = (props) =>  {

  const [pokeData, setPokeData]= useState([]);
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`

  useEffect(() => {
    axios.get(props.poke.url)
    .then((result) => {
      setPokeData(result.data)
    })
  });

  return(
    <>
      <img  src={imgUrl}  alt={props.poke.name}/>
      <h5 >{props.poke.name}</h5> 
    </>
    )
};

export default PokeCard;


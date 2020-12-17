import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

const PokeCard = (props) => {

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
      <Link to={{
      pathname: `/page/${pokeData.id}`
      }} >
        <img  src={imgUrl}  alt={pokeData.name}/>
        <h5 >{pokeData.name}</h5> 
      </Link>
    </>
  )
};

export default PokeCard;


import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PokePage from './PokePage'

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

      <Link to="/page">
      <img  src={imgUrl}  alt={props.poke.name}/>
      <h5 >{props.poke.name}</h5> 
      </Link>

    )
};

export default PokeCard;


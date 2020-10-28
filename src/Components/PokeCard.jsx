import React from 'react';
import {Link} from 'react-router-dom';


const PokeCard = (props) =>  {

  return(
    <div className="card mb-3">

          <img  src={props.poke.url.sprites.front_default}  alt={props.poke.url.name}/>


            <h5 >{props.poke.url.name}</h5>


    </div>
    )
};

export default PokeCard;


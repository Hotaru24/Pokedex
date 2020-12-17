import React, {useEffect, useState} from 'react';
import PokeList from "./Components/PokeList";
import PokePage from "./Components/PokePage";
import PokeCtx from "./Components/pokeCtx";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {

  const [pokeList, setPokeList]= useState([]);
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then((result, err) => {
        if (err) {
          throw err;
        } else {
          setPokeList(result.data.results)      
        }
    })
  },[]);  

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <PokeCtx.Provider value={[pokeList, setPokeList]}>
            <Switch>
              <Route exact path="/" component={PokeList}/>
              <Route path="/page" component={PokePage}/>
            </Switch>  
          </PokeCtx.Provider>     
        </header>
      </div>
    </Router>

  )
};

export default App;

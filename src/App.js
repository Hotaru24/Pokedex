import React from 'react';
import PokeList from "./Components/PokeList";
import PokePage from "./Components/PokePage";
import {Route, Switch} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={PokeList}/>
          <Route path="/page" component={PokePage}/>
        </Switch>       
      </header>
    </div>
  )
};

export default App;

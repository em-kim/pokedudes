import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import PokemonStore from './stores/pokemonStore';
import { Provider } from "mobx-react";
import Picture from './picture/Picture';
import Moves from './moves/Move';
import Stats from './stats/Stats';
import NavBar from './navbar/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Provider pokemonStore={new PokemonStore()}>
          
            <div> 
                  <NavBar />    
                  <Route path='/' component={Picture} />
                  <Route path='/moves'  component={Moves}/>
                  <Route path='/stats' component={Stats} />
            </div>
          
        </Provider>
        </Router>
      </div>
      
    );
  }
}

export default App;

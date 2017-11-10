import React, { Component } from 'react';
import {observer, inject} from "mobx-react";

var Picture = observer(class Picture extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props.pokemonStore.pokemon.sprites.front_shiny);
    //var pokemonImg = this.props.pokemonStore.pokemon
    var pokemonImg = this.props.pokemonStore.pokemon.sprites.front_shiny
    return (
      <div>
        <img src={pokemonImg} />
      </div>
    );
  }
})

export default (inject('pokemonStore')(Picture))

//convert to an observer
//inject the store stuff
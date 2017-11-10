import React, { Component } from 'react';
import {observer, inject} from "mobx-react";

var Stats = observer(class Stats extends Component {
  render() {
    
    var a = this.props.pokemonStore.pokemonStat.map((str)=>{
      return <li>{str}</li>
    });
    console.log(a);
    console.log(this.props.pokemonStore.pokemonStat)
    var statName = this.props.pokemonStore.pokemon.stats[0].stat.name;
    console.log(this.props.pokemonStore.pokemon.stats[0].stat.name)
    return (
      <div> 
        <ul>
          {a} 
        </ul>
      </div>
    );
  }
})
export default (inject('pokemonStore')(Stats))


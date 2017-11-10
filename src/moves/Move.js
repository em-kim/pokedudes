import React, { Component } from 'react';
import {observer, inject} from "mobx-react";

var Moves = observer(class Moves extends Component {  
  render() {
    // var moveNames = [];
    // var movesArr = this.props.pokemonStore.pokemon.moves;
    // for (var i = 0; i < 10; i++) {
    //   debugger;
    //     moveNames.push(<li>{movesArr[i].move.name}</li>)
    // }


    var moveNames = this.props.pokemonStore.pokemon.moves.slice(0,10).map((moveObj) => {
      return <li>{moveObj.move.name}</li>
    });

    return (
      <div>
        <ul>
            {moveNames}
        </ul>
      </div>
    );
  }
})

export default (inject('pokemonStore')(Moves))

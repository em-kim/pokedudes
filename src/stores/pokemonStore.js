import {extendObservable} from "mobx";
var axios = require('axios');

export default class PokemonStore {
  constructor(){
    extendObservable(this, {
      pokemon: {
        sprites: {
          front_shiny: null
        },
        stats: [
          {stat: {
            name: null
          }}
        ],
        moves: [
          {move: {
            name: null
          }}
        ]
      },
      get retrievePokemon() {
        return this.pokemon
      },
      get pokemonStat() {
        var array = this.pokemon.stats.slice(0,3).map((s)=>{
          return s.base_stat + " : " + s.stat.name;
        });

        return array;
      }
    });
    axios.get('https://pokeapi.co/api/v2/pokemon/' + this.getPokemon()).then((res) =>{
      this.pokemon = res.data
      //debugger;
      //console.log(this.pokemon);
    });
    
    this.getPokemon = this.getPokemon.bind(this);
  }

  fetchPokemon(idNum) { //idNum was supposed to be sent as a prop on the navbar's button ??
    
    axios.get('https://pokeapi.co/api/v2/pokemon/' + idNum).then((res) =>{
      //this.pokemon = res.data
      var pokemonObj = { 
        name: res.data.name,
        moves: res.data.moves[0].move.name
        }
      axios.post('/addPokemon', pokemonObj);
    });
  }

  getPokemon() {
    var pokemonInt = Math.floor(Math.random()* 151)
    return pokemonInt
  }

}
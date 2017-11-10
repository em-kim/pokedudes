/*finally build a nav bar that does two things: display the pokemons name on the left side and has an input and button on 
the right side which allows a user to input an integer and upon clicking the button calls the api, using the input as the
{integer} and updates the store, which should then update the name of the pokemon and each route's component. */

import React, { Component } from 'react';
import {observer, inject} from "mobx-react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink, Button, Collapse, NavbarToggler, NavbarBrand, Input } from 'reactstrap';

var NavBar = observer(class Stats extends Component {
  constructor() {
    super();
    this.state = {
      pokemonNum: 1
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleInput(event) {
    console.log(event.target.value);
    this.setState({pokemonNum: event.target.value});
  }

  handleClick() {
    var int = this.state.pokemonNum //how do I get the value from the handleInput into handleClick?
    console.log(int)
    this.props.pokemonStore.fetchPokemon(int) //this is how to get 'int' over to the fetchPokemon() in the store.  I tried to send it as an attribute in the button..to no avail.
  
  }


  render() {
    var name = this.props.pokemonStore.pokemon.name;
    return (
      <div>
        <Navbar color="faded" >
          <NavbarBrand href="/">{name}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              
                <Link to="/moves/">Moves</Link>
                <Link to="/stats">Stats</Link>
              
              <NavItem>
                <Input type="text" placeholder="enter # less than 151" onChange={this.handleInput} />
                <Button type='submit' onClick={this.handleClick} >Submit</Button>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
})
export default (inject('pokemonStore')(NavBar))



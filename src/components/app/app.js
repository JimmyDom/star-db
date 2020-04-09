import React, { Component } from "react";

import Header from "../header";
import RandomPokemon from "../random-pokemon";
import ItemList from "../item-list";
import PokemonDetails from "../pokemon-details";

import "./app.css"

export default class App extends Component {

    render() {
        return (
            <div className="app">
              <Header />
              <RandomPokemon />

              <div className="row mb-2">
                  <div className="col-md-6">
                      <ItemList />
                  </div>

                  <div className="col-md-6">
                      <PokemonDetails />
                  </div>
              </div>

            </div>
        );
    }
}
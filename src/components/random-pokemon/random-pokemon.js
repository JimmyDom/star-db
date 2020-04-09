import React, { Component } from "react";

import ApiService from "../../services/api-service";

import "./random-pokemon.css";

export default class RandomPokemon extends Component{

    constructor() {
        super();
        this.updatePokemon();
    }

    pokemon = new ApiService();

    state = {
        id: null,
        name: null,
        shortEffect: null,
        effect: null,
        flavorText: null
    };

    updatePokemon = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        // const id = 11;
        console.log(id);
        this.pokemon.getPokemon(id).then((pokemon) => {
            this.setState({
                id: id,
                name: pokemon.name,
                shortEffect: pokemon.effect_entries[0].short_effect,
                effect: pokemon.effect_entries[0].effect,
                flavorText: pokemon.flavor_text_entries[2].flavor_text,
            });
        });
    };

    render() {
        const { id, name, shortEffect, effect, flavorText } = this.state;

        return (

          <div className="random-pokemon">
              <div>
                  <img className="pokemon-img"
                       src={`http://www.youloveit.ru/uploads/gallery/main/162/youloveit_ru_pokemony_kartinki_s_imenami_${id}.png`}
                       alt="pokemon">
                  </img>
              </div>
              <div>
                  <h4>{ name }</h4>
                  <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                          <span className="term">Short effect:</span>
                          <span>{ shortEffect }</span>
                      </li>
                      <li className="list-group-item">
                          <span className="term">Effect:</span>
                          <span>{ effect }</span>
                      </li>
                      <li className="list-group-item">
                          <span className="term">Flavor text:</span>
                          <span>{ flavorText }</span>
                      </li>
                  </ul>
              </div>

          </div>
        );
    }
}
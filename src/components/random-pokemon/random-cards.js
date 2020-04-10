import React, { Component } from "react";

import ApiService from "../../services/api-service";

import "./random-cards.css";

export default class RandomCards extends Component{

    constructor() {
        super();
        this.updateCards();
    }

    card = new ApiService();

    state = {
        card: {}
    };

    onCardLoaded = (card) => {
      this.setState({ card });
    };

    updateCards = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        this.card.getCards(id).then(this.onCardLoaded);
    };

    render() {
        const { card: {name, artist, originalText, multiverseid, imageUrl} } = this.state;

        return (

          <div className="random-cards">
              <div>
                  <img className="cards-img"
                       src={ imageUrl }
                       alt="cards">
                  </img>
              </div>
              <div>
                  <h4>{ name }</h4>
                  <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                          <span className="term">Artist:</span>
                          <span>{ artist }</span>
                      </li>
                      <li className="list-group-item">
                          <span className="term">Description:</span>
                          <span>{ originalText }</span>
                      </li>
                      <li className="list-group-item">
                          <span className="term">Multiverseid:</span>
                          <span>{ multiverseid }</span>
                      </li>
                  </ul>
              </div>

          </div>
        );
    }
}

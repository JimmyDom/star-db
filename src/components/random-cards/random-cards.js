import React, { Component } from "react";

import ApiService from "../../services/api-service";

import "./random-cards.css";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator"

export default class RandomCards extends Component{

    constructor() {
        super();
        this.updateCards();
    }

    card = new ApiService();

    state = {
        card: {},
        loading: true,
        error: false,
    };

    onCardLoaded = (card) => {
      this.setState({
          card,
          loading: false,
          error: false
      });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
        console.log(err);
    };

    updateCards = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        this.card.getCards(id)
            .then(this.onCardLoaded)
            .catch(this.onError);
    };

    render() {
        const { card, loading, error } = this.state;
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = ( !loading && !error ) ? <CardView card={card}/> : null;

        return (

          <div className="random-cards">
              { errorMessage }
              { spinner }
              { content }
          </div>
        );
    }
}


const CardView = ({ card }) => {
    const { name, artist, originalText, multiverseid, imageUrl } = card;

    return (
      <React.Fragment>

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

      </React.Fragment>
  );
};

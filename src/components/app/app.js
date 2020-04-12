import React, { Component } from "react";

import Header from "../header";
import RandomCards from "../random-cards";
import ItemList from "../item-list";
import CardDetails from "../card-details";

import "./app.css"

export default class App extends Component {

    state = {
        selectedPerson: null,
    };

    onCardSelected = (id) => {
        this.setState({
            selectedCard: id
        })
    };

    render() {
        return (
            <div className="app">
              <Header />
              <RandomCards />

              <div className="row mb-2">
                  <div className="col-md-6">
                      <ItemList onCardSelected={this.onCardSelected}/>
                  </div>

                  <div className="col-md-6">
                      <CardDetails />
                  </div>
              </div>

            </div>
        );
    }
}
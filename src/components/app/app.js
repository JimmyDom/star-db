import React, { Component } from "react";

import Header from "../header";
import RandomPlanets from "../random-palnet";
import ItemList from "../item-list";
import PeopleDetails from "../people-details";

import "./app.css"

export default class App extends Component {

    state = {
        selectedPeople: null,
    };

    onPeopleSelected = (id) => {
        this.setState({
            selectedPeople: id
        })
    };

    render() {
        return (
            <div className="app">
              <Header />
              <RandomPlanets />

              <div className="row mb-2">
                  <div className="col-md-6">
                      <ItemList onPeopleSelected={this.onPeopleSelected}/>
                  </div>

                  <div className="col-md-6">
                      <PeopleDetails peopleId={this.state.selectedPeople}/>
                  </div>
              </div>

            </div>
        );
    }
}
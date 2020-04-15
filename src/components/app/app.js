import React, { Component } from "react";

import Header from "../header";
import RandomPlanets from "../random-palnet";
import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details";
import PersonPage from "../person-page";
import ApiService from "../../services/api-service"
import "./app.css"
import Row from "../row";

export default class App extends Component {

    apiService = new ApiService();

    state = {
        hasError: false,
    };

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        const personDetails = (
            <ItemDetails
            itemId={11}
            getData = { this.apiService.getPeople }
            getImgUrl={ this.apiService.getPeopleImg } >

                <Record field="gender" label="Gender" />
                <Record field="birth_year" label="Birth Year" />

            </ItemDetails>
        );
        const starshipDetails = (
            <ItemDetails
            itemId={5}
            getData={ this.apiService.getStarships }
            getImgUrl = { this.apiService.getStarshipsImg } >

                <Record field="model" label="Model" />
                <Record field="max_atmosphering_speed" label="Max Atmosphering Speed" />

            </ItemDetails>
        );

        return (
            <div className="app">
              <Header />
              {/*<RandomPlanets />*/}

                {/*<PersonPage*/}
                    {/*getData = { this.apiService.getAllPeople } />*/}

                    <Row left={personDetails} right={starshipDetails}/>


                {/*<div className="row mb-2">*/}
                    {/*<div className="col-md-6">*/}
                        {/*<ItemList*/}
                            {/*getData = { this.apiService.getAllPlanets }*/}
                            {/*onPeopleSelected={this.onPeopleSelected}*/}
                            {/*getRender = { ({ name, diameter}) => `${name} (${diameter})`}/>*/}
                    {/*</div>*/}

                    {/*<div className="col-md-6">*/}
                        {/*<PeopleDetails peopleId={this.state.selectedPeople}/>*/}
                    {/*</div>*/}
                {/*</div>*/}

                {/*<div className="row mb-2">*/}
                    {/*<div className="col-md-6">*/}
                        {/*<ItemList*/}
                            {/*getData = { this.apiService.getAllStarships }*/}
                            {/*onPeopleSelected={this.onPeopleSelected}*/}
                            {/*getRender = { ({ name, model}) => `${name} (${model})`}/>*/}
                    {/*</div>*/}

                    {/*<div className="col-md-6">*/}
                        {/*<PeopleDetails peopleId={this.state.selectedPeople}/>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}
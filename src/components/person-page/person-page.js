import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row"

import "./person-page.css"

export default class PersonPage extends Component {

    state = {
        selectedPeople: null,
    };


    onPeopleSelected = (id) => {
        this.setState({
            selectedPeople: id
        })
    };

    render() {
        const itemList = (
            <ItemList
                getData = { this.props.getData }
                onPeopleSelected={this.onPeopleSelected}>
                { (item) =>
                    `${item.name} (${item.gender})`
                }
            </ItemList>
        );

        const personDetails = <ItemDetails itemId={this.state.selectedPeople}/> ;


        return(
            <Row left={ itemList } right={ personDetails } />
        )
    }
}

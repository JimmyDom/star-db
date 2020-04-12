import React, { Component } from "react";
import ApiService from "../../services/api-service"
import Spinner from "../spinner";

import "./item-list.css"

export default class ItemList extends Component {
    apiService = new ApiService;


    state = {
        peopleList: null,
    };

    componentDidMount() {
        this.apiService
            .getAllCards()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            });
    }

    propsOnItemSelected = (id) => {
        console.log(id);
    };

    renderItems =(arr) => {
        return (
            arr.map(({ id, name }) => {
                return (
                    <li className="list-group-item"
                        key={id}
                        onClick={() => this.propsOnItemSelected(id)}>
                            {name}
                    </li>
                )
            })
        );
    };

    render() {
        const { peopleList } = this.state;

        if (!peopleList) {
            return <Spinner />
        }

        const items = this.renderItems(peopleList);

        return (
            <div>
                <ul className="item-list list-group">
                    {items}
                </ul>
            </div>
        );
    }
}
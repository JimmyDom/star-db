import React, { Component } from "react";

import Spinner from "../spinner";
import "./item-details.css";

export default class ItemDetails extends Component {
    state = {
        item: null,
        image: null,
        loading: true,
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImgUrl } = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId).then((item) => {
            this.setState({
                item,
                loading: false,
                image: getImgUrl(item)
            });
        });
    }

    render() {

        const { item, loading } = this.state;
        if(!item) {
            return <span>Select a person from a list</span>
        }

        const spinner = loading ? <Spinner /> : null;
        const viewItem = !loading ? <ItemView item={ item } /> : null;

        return (
            <div className="item-details item">
                {spinner}
                {viewItem}
            </div>
        );
    }
}

const ItemView = ({ item }) => {
    // const { image } = this.state;
    const { name, birth_year, gender, mass } = item;

    return (
        <React.Fragment>
            <img className="item-image" alt="item"
                  />
            <div className="item-body">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Birth year:</span>
                        <span>{ birth_year }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Gender:</span>
                        <span>{ gender }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Mass:</span>
                        <span>{ mass }</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};
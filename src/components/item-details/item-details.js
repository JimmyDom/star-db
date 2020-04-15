import React, { Component } from "react";

import "./item-details.css";

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{ label }</span>
            <span>{ item[field] }</span>
        </li>
    )
};

export { Record };

export default class ItemDetails extends Component {
    state = {
        item: null,
        image: null,
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
                image: getImgUrl(item)
            });
        });
    }

    render() {

        const { item, image } = this.state;

        if(!item) {
            return <span>Select a person from a list</span>
        }

        const { id, name, gender, birthYear, eyeColor } = item;

        return (
            <div className="item-details item">
                <img className="item-image" alt="item"
                     src={ image }/>
                <div className="item-body">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
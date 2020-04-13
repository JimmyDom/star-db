import React, { Component } from "react";

import ApiService from "../../services/api-service";
import Spinner from "../spinner";
import "./people-details.css";

export default class PeopleDetails extends Component {

    apiService = new ApiService();

    state = {
        people: null,
        loading: true, //нужно изменить поведение, когда файл загрузится
    };

    componentDidMount() {
        this.updatePeople();
    }

    componentDidUpdate(prevProps) {
        if(this.props.peopleId !== prevProps.peopleId) {
            this.updatePeople();
        }
    }

    updatePeople() {
        const { peopleId } = this.props;
        if (!peopleId) {
            return;
        }

        this.apiService.getPeople(peopleId)
            .then((people) => {
                this.setState({ people });
            })
    }

    render() {

        if(!this.state.people) {
            return <span>Select a person from a list</span>
        }

        const spinner = this.state.loading && this.state.people ? <Spinner /> : null;
        const viewItem = !this.state.loading ? <PeopleView people={this.state.people} /> : null;

        return (
            <div className="people-details people">
                {spinner}
                {viewItem}
            </div>
        );
    }
}

const PeopleView = ({ people }) => {

    const { id, name, birth_year, gender, mass } = this.state.people;
    return (
        <React.Fragment>
            <img className="people-image" alt="people"
                 src={ `https://apxuapi.herokuapp.com/assets/img/characters/${id}.jpg `} />
            <div className="people-body">
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
import React, { Component } from "react";

import ApiService from "../../services/api-service";

import "./random-planet.css";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator"

export default class RandomPlanet extends Component{

    planets = new ApiService();

    state = {
        planets: {},
        loading: true,
        error: false,
    };

    componentDidMount() {
        this.updatePlanets();
        setInterval(this.updatePlanets, 5000);
    }

    onPlanetsLoaded = (planets) => {
      this.setState({
          planets,
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

    updatePlanets = () => {
        const id = Math.floor(Math.random() * 10) + 1;
        this.planets.getPlanet(id)
            .then(this.onPlanetsLoaded)
            .catch(this.onError);
    };

    render() {
        const { planets, loading, error } = this.state;
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = ( !loading && !error ) ? <PlanetsView planets={planets}/> : null;

        return (

          <div className="random-planet">
              { errorMessage }
              { spinner }
              { content }
          </div>
        );
    }
}


const PlanetsView = ({ planets }) => {
    const { id, name, diameter, population, gravity } = planets;
    return (
      <React.Fragment>

          <div>
              <img className="planet-img"
                   src={ `https://apxuapi.herokuapp.com/assets/img/planets/${id}.jpg` }
                   alt="planet">
              </img>
          </div>
          <div>
              <h4>{ name }</h4>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                      <span className="term">Diameter:</span>
                      <span>{ diameter }</span>
                  </li>
                  <li className="list-group-item">
                      <span className="term">Population:</span>
                      <span>{ population }</span>
                  </li>
                  <li className="list-group-item">
                      <span className="term">Gravity:</span>
                      <span>{ gravity }</span>
                  </li>
              </ul>
          </div>

      </React.Fragment>
  );
};

import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from '../pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import './app.css';
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
      isLoggedIn: false,
    };

    onLogin = () => {
      this.setState({
          isLoggedIn: true
      })
    };

    render() {

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header />
                            <RandomPlanet />
                            <Switch>
                                <Route path={'/'} render={() => <h2>Welcome to StarDB</h2>} exact/>
                                <Route path={'/people/:id?'} component={PeoplePage}/>
                                <Route path={'/planets'} component={PlanetsPage}/>
                                <Route path={'/starships'} component={StarshipsPage} exact/>
                                <Route path={'/starships/:id'}
                                       render={({ match }) => {
                                           const { id } = match.params;
                                           return (
                                               <StarshipDetails itemId={id}/>
                                           )
                                       }}/>
                                <Route path={'/login'}
                                       render={() => (
                                           <LoginPage isLoggedIn={this.state.isLoggedIn}
                                                      onLogin={this.onLogin} />
                                       )}/>
                                <Route path={'/secret'}
                                       render={() => (
                                           <SecretPage isLoggedIn={this.state.isLoggedIn} />
                                       )}/>
                                <Route render={() => <h2>Page not found</h2>}/>
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
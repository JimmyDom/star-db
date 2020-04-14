import React from "react"
import ReactDOM from "react-dom";

import App from "./components/app"

import ApiService from "./services/api-service"



ReactDOM.render(<App />, document.getElementById("root"));

const person = new ApiService();


/*person.getAllPlanets().then((person) => {
    // person.forEach((p) => {
        console.log(person);
    // });
});*/

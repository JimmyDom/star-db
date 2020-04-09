import React from "react"
import ReactDOM from "react-dom";

import App from "./components/app"

import ApiService from "./services/api-service"



ReactDOM.render(<App />, document.getElementById("root"));

const pokemon = new ApiService();


pokemon.getPokemon(4).then((people) => {
//     people.forEach((p) => {
        console.log(people);
//     });
});

//people.effect_changes[0].effect_entries
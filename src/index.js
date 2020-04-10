import React from "react"
import ReactDOM from "react-dom";

import App from "./components/app"

import ApiService from "./services/api-service"



ReactDOM.render(<App />, document.getElementById("root"));

const cards = new ApiService();


cards.getCards(21).then((cards) => {
    // cards.forEach((p) => {
        console.log(cards);
    // });
});

// cards.getAllCards().then((cards) => {
//     cards.forEach((c) => {
//         console.log(c);
//     });
// });
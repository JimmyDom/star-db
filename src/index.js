import React from "react"
import ReactDOM from "react-dom";

import App from "./components/app"

import ApiService from "./services/api-service"



ReactDOM.render(<App />, document.getElementById("root"));

const cards = new ApiService();


// cards.getAllCards().then((cards) => {
//     cards.forEach((p) => {
//         console.log(p);
//     });
// });

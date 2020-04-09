import React from "react";

import "./header.css";

const Header = () => {
    return (
        <div className="header d-flex">
            <h2><a href="../../index.js">Poke DB</a></h2>
            <ul className="d-flex">
                <li><a href="#">Pokemon</a></li>
                <li><a href="#">More Pokemon</a></li>
                <li><a href="#">Still Pokemon</a></li>
            </ul>
        </div>
    );
};

export default Header;
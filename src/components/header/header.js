import React from "react";

import "./header.css";

const Header = () => {
    return (
        <div className="header d-flex">
            <h2><a href="../../index.js">Cards DB</a></h2>
            <ul className="d-flex">
                <li><a href="#">Cards</a></li>
                <li><a href="#">More Cards</a></li>
                <li><a href="#">Still Cards</a></li>
            </ul>
        </div>
    );
};

export default Header;
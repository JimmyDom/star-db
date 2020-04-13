import React from "react";

import "./header.css";

const Header = () => {
    return (
        <div className="header d-flex">
            <h2><a href="../../index.js">Star DB</a></h2>
            <ul className="d-flex">
                <li><a href="#">People</a></li>
                <li><a href="#">Planet</a></li>
                <li><a href="#">Starships</a></li>
            </ul>
        </div>
    );
};

export default Header;
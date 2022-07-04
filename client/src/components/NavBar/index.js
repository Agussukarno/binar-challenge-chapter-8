import React, { Component } from "react";
import "./navbar.css";

class NavBar extends Component {

    render() {
        return(
            <div className={"navbar-container"}>
                <div className={"menu-container"}>
                    <button className={"navbar-button"}>Add Player</button>
                    <button className={"navbar-button"}>Update Player</button>
                    <button className={"navbar-button"}>Search Player</button>
                </div>
            </div>
        )
    }
}

export default NavBar;
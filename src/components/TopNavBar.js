import React, { Component } from "react";
import logo from "../assets/images/nba-logoman-word-white.svg";

class TopNavBar extends Component {
    render(){
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        );
    }
}

export default TopNavBar;
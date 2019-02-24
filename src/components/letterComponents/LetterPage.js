import React, { Component } from "react";
import HeaderSelection from "./headers/HeaderSelection";

export default class LetterPage extends Component {
    state = {
        headerSelected: false,
        addressSelected: false,
        bodySelected: false,
        signatureSelected: false,
        footerSelected: false
    }

    switchSection = (section) => {
        let newState = this.state;
        let key = section + "Selected";
        newState[key] = true;
        this.setState(newState);
    }

    render(){
        return (
            <div className="letter-page">
                <HeaderSelection switchSection={this.switchSection} />
                {
                    this.state.headerSelected &&
                    <div>
                        Selected A Header
                    </div>
                }
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }
}
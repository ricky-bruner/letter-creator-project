import React, { Component } from "react";
import HeaderSelection from "./headers/HeaderSelection";

export default class LetterPage extends Component {
    state = {
        headerSelected: {
            selected: false,
            option: ""
        },
        addressSelected: false,
        bodySelected: false,
        signatureSelected: false,
        footerSelected: false
    }

    switchSection = (section, option) => {
        let newState = this.state;
        let key = section + "Selected";
        newState[key].selected = true;
        newState[key].option = option;
        this.setState(newState);
    }

    render(){
        return (
            <div className="letter-page">
                <HeaderSelection switchSection={this.switchSection} selected={this.state.headerSelected.selected}/>
                {
                    this.state.headerSelected.selected &&
                    <div>
                        Selected A Header: {this.state.headerSelected.option}
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
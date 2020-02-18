import React, { Component } from "react";
import HeaderSelection from "./headers/HeaderSelection";
import FieldSelection from "./shared/FieldSelection";
import LetterLine from "./shared/LetterLine";

export default class LetterPage extends Component {
    state = {
        lines: []
    }

    saveLine = () => {
        let line = {}

        this.setState({
            lines: this.state.push(line)
        })
    }

    render(){
        return (
            <div className="letter-page">
                <div>
                    <LetterLine parent={this} />
                </div>
            </div>
        );
    }
}
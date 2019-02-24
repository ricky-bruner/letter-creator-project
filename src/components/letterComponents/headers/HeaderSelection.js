import React, { Component } from "react";

export default class HeaderSelection extends Component {
    state = {}

    render(){
        return (
            <div>
                <h4>Choose a Header Style</h4>
                <select>
                    <option>Logo Header</option>
                    <option>Address with Logo</option>
                    <option>Address Only</option>
                </select>
                <button onClick={() => this.props.switchSection("header")}>Build Section</button>
            </div>
        );
    }

}
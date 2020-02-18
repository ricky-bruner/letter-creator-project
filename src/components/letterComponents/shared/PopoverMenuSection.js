import React, { Component } from "react";
import { PopoverHeader, PopoverBody } from "reactstrap";
import CheckboxOption from "./CheckboxOption";
import SelectionDropdown from "./SelectionDropdown";

export default class PopoverMenuSection extends Component {
    render(){
        return (
            <div>
                <PopoverHeader>{this.props.title}</PopoverHeader>
                <PopoverBody>
                    <div className="selection-menu">
                        {
                            this.props.menuOptions.filter(mO => mO.type !== "checkbox").map(o => <SelectionDropdown />)
                        }
                        {
                            this.props.menuOptions.filter(mO => mO.type === "checkbox").map(o => <CheckboxOption />)
                        }
                    </div>
                </PopoverBody>
            </div>
        );
    }
}
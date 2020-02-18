import React, { Component } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import BaseMethods from "../../../modules/BaseMethods";

export default class SelectionDropdown extends Component {
    state = {
        selected: false
    }   

    handleSelection = (e) => {
        this.props.handleFieldChange(e);
        this.setState({
            selected: true
        })
    }

    render(){
        return (
            <div className="selection-option">
                <UncontrolledDropdown size="sm" key={this.props.id} onChange={(e) => this.handleSelection(e)}>
                    <DropdownToggle color="primary" caret>
                        {
                            !this.state.selected &&
                            this.props.type
                        }
                        {
                            this.state.selected &&
                            this.props.selectedValue
                        }
                    </DropdownToggle>
                    <DropdownMenu>
                        {
                            this.props.options.map(x => <DropdownItem id={this.props.id} onClick={(e) => BaseMethods.handleSelection(this, e)}>{x}</DropdownItem>)
                        }
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }
}
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
                <UncontrolledDropdown size="sm">
                    <DropdownToggle color="primary" caret>
                        {
                            !this.state.selected &&
                            this.props.options.name
                        }
                        {/* {
                            this.state.selected &&
                            this.props.selectedValue
                        } */}
                    </DropdownToggle>
                    <DropdownMenu>
                        {
                            this.props.options.options.map(x => <DropdownItem>{x}</DropdownItem>)
                        }
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }
}
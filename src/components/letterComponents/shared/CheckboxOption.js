import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";

export default class CheckboxOption extends Component {

    render(){
        return (
            <div>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="checkbox2" />{' '}DATA
                    </Label>
                </FormGroup>
            </div>
        );
    }
}
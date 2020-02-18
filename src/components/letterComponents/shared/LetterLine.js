import React, { Component } from "react";
import { Button, InputGroup, InputGroupAddon } from "reactstrap";
import PopoverMenu from "./PopoverMenu";
import MenuFactory from "../../../modules/MenuFactory";
import TextSection from "./TextSection";

export default class LetterLine extends Component {
    state = {
        activated: false,
        textSections: [],
        menus: []
    }

    activateLine = () => {
        let menus = this.state.menus;
        menus.push(MenuFactory.getLineMenu);

        this.setState({ 
            activated: !this.state.activated,
            menus: menus
        });
    }

    addMenu = (menu) => {
        this.setState({
            menus: this.state.menus.push(menu)
        })
    }

    saveTextSection = () => {
        let section = {

        }

        this.setState({
            textSections: this.state.textSections.push(section)
        })
    }
    
    render(){
        return (
            <div>
                {
                    !this.state.activated &&
                    <Button size="sm" onClick={() => this.activateLine()}>
                        Add Letter Line
                    </Button>
                }
                {
                    this.state.activated &&
                    <div>
                        <div id="UncontrolledPopover" type="button" className="selection-input">
                            <InputGroup>
                                <TextSection />
                                {/* <Input size="sm" placeholder="Type or Drag Data" onClick={(e) => BaseMethods.handleFieldChange(this, e)} /> */}
                                <InputGroupAddon addonType="append">
                                    <Button size="sm" color="secondary" onClick={() => this.saveTextSection()}>Complete Line</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                        <PopoverMenu id={"UncontrolledPopover"} parent={this} />
                    </div>
                }
            </div>
        );
    }
}
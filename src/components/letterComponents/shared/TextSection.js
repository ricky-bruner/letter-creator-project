import React, { Component } from "react";
import { Button } from "reactstrap";
import MenuFactory from "../../../modules/MenuFactory";

export default class TextSection extends Component {
    state = {
        activated: false
    }

    activateText = () => {
        this.setState({
            activated: !this.state.activated
        });
    }

    onPropertyDrop = () => {
        let menu = MenuFactory.getTextMenu;
        let data = menu.options.filter(o => o.name === "Data Generated");
        data.set = true;
        menu.options = menu.options.filter(o => o.name !== "Data Generated");
        menu.options.push(data);
        this.props.addMenuOptions(menu);
    }

    initiateTextMenu = () => {
        this.props.addMenuOptions(MenuFactory.getTextMenu);
    }
    
    render(){
        return (
            <div>
                {
                    !this.state.activated &&
                    <div>
                        <Button size="sm" onClick={() => this.activateText()}>
                            Add Content
                        </Button>
                    </div>
                }
                {
                    this.state.addContent &&
                    <div>
                        {
                            !this.state.contentActivated &&
                            <div onClick={() => this.initiateTextMenu()}>
                                Type or Drag Data
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
}
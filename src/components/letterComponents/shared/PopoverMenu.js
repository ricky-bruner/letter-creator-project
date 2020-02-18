import React, { Component } from "react";
import { UncontrolledPopover } from "reactstrap"; 
import PopoverMenuSection from "./PopoverMenuSection";

export default class PopoverMenu extends Component {
    state = {
        // menus: []
    }

    addMenu = () => {

    }

    render(){
        console.log(this.props.parent);
        return (
            <div>
                <UncontrolledPopover placement="bottom" target={this.props.id}>
                    {
                        this.props.parent.state.menus.map(mS => <PopoverMenuSection title={mS.title} menuOptions={mS.options} />)
                    }
                </UncontrolledPopover>
            </div>
        );
    }
}
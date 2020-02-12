import React, { Component } from "react";
import './App.css';

export default class DragAndDropTest extends Component {
    state = {        
        generatedFields: [
            {
                name:"Provider Name",
                category:"provider"
            },  
            {
                name:"Provider Address 1", 
                category:"provider"
            },  
            {
                name: "Provider Address 2", 
                category:"provider"
            },
            {
                name: "Provider City",
                category: "provider"
            },
            {
                name: "Provider State",
                category: "provider"
            } ,
            {
                name: "Provider Zip",
                category: "provider"
            }           
        ],
        tempFields: []
    }

    onDragOver = (e) => {
        e.preventDefault();
    }

    onDragStart = (e, name) => {
        e.dataTransfer.setData("name", name);
    }

    onStaticDragStart = (e, name, number) => {
        e.dataTransfer.setData("name", name);
        e.dataTransfer.setData("number", number);
    }

    onDrop = (e, cat) => {       
        let newObj = {
            name: e.dataTransfer.getData("name"),
            category: cat,
        };

        let sorted = this.state.tempFields.filter(x => x.name === e.dataTransfer.getData("name")).sort(x => x.number);
        let number = "";

        if(sorted.length > 0){
            number = (parseInt(sorted[sorted.length - 1].number) + 1).toString();
        } else {
            number = "1";
        }

        newObj.number = number;

        let tempFields = this.state.tempFields;
        tempFields.push(newObj);

        this.setState({              
            tempfields: tempFields       
        });    
    }

    onStaticDrop = (e, cat) => {       
        let newObj = {
            name: e.dataTransfer.getData("name"),
            category: cat,
            number: e.dataTransfer.getData("number")
        };

        let newFields = this.state.tempFields;
        let index = newFields.findIndex(x => x.name === newObj.name && x.number === newObj.number);

        if(index !== -1){
            newFields.splice(index, 1);
        }

        this.setState({                   
            tempFields: newFields
        }); 
    }

    render() {
        return (
            <div>
                <h2>Letter Creator Demo</h2>
                <div className="container-drag">
                    DRAG & DROP DEMO
                </div>
                <div className="flex-around">
                    <div className="generated-field-menu" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onStaticDrop(e, "complete")}}>
                        <span className="task-header">Provider</span>
                        {
                            this.state.generatedFields.map((gF) => <div key={gF.name} onDragStart={(e)=>this.onDragStart(e, gF.name)} draggable className="draggable">{gF.name}</div>)
                        }                    
                    </div>                
                    <div className="letter-page" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>this.onDrop(e, "complete")}>     
                        <span className="task-header">COMPLETED</span>
                        {
                            this.state.tempFields.map((tF) => <div key={tF.name} onDragStart={(e)=>this.onStaticDragStart(e, tF.name, tF.number)} draggable className="draggable">{tF.name}</div>)
                        }                      
                    </div>    
                </div>
            </div>
        );
    }
}

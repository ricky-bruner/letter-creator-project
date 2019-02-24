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
        ]
    }

    onDragOver = (e) => {
        e.preventDefault();
    }

    onDragStart = (e, name) => {
        e.dataTransfer.setData("name", name);
    }

    onDrop = (ev, cat) => {       
        let name = ev.dataTransfer.getData("name");
        let generatedFields = this.state.generatedFields.filter((field) => {
            if (field.name === name) {
                field.category = cat;           
            }              
            return field;       
        });        
        this.setState({           
            ...this.state,           
            generatedFields       
        });    
    }

    render() {
        var generatedFields = { 
            provider: [], 
            complete: []        
        }      
        this.state.generatedFields.forEach ((f) => {               
            generatedFields[f.category].push(<div key={f.name} onDragStart={(e)=>this.onDragStart(e, f.name)} draggable className="draggable">{f.name}</div>);        
        });

        return (
            <div>
                <h2>Letter Creator Demo</h2>
                <div className="container-drag">
                    DRAG & DROP DEMO
                </div>
                <div className="flex-around">
                    <div className="generated-field-menu" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, "provider")}}>
                        <span className="task-header">Provider</span>                    
                        {generatedFields.provider}                
                    </div>                
                    <div className="letter-page" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>this.onDrop(e, "complete")}>     
                        <span className="task-header">COMPLETED</span>                     
                        {generatedFields.complete}                
                    </div>    

                </div>
            </div>
        );
    }
}
import React, { Component } from "react";
import './App.css';

export default class DragAndDropTest extends Component {
    state = {        
        tasks: [
            {
                name:"Learn Angular",
                category:"wip", 
                bgcolor: "yellow"
            },  
            {
                name:"React", 
                category:"wip", 
                bgcolor:"pink"
            },  
            {
                name:"Vue", 
                category:"complete", 
                bgcolor:"skyblue"
            },
            {
                name: "Vanilla JS",
                category: "wip",
                bgcolor: "lime"
            }          
        ]
    }

    onDragOver = (e) => {
        e.preventDefault();
    }

    onDragStart = (e, name) => {
        console.log("dragstart: ", name);
        e.dataTransfer.setData("name", name);
    }

    onDrop = (ev, cat) => {       
        let name = ev.dataTransfer.getData("name");
        let tasks = this.state.tasks.filter((task) => {
            if (task.name === name) {
                task.category = cat;           
            }              
            return task;       
        });        
        this.setState({           
            ...this.state,           
            tasks       
        });    
    }

    render() {
        var tasks = { 
            wip: [], 
            complete: []        
        }      
        this.state.tasks.forEach ((t) => {               
            tasks[t.category].push(<div key={t.name} onDragStart={(e)=>this.onDragStart(e, t.name)} draggable className="draggable" style={{backgroundColor: t.bgcolor}}>{t.name}</div>);        
        });

        return (
            <div>
                <h2>Letter Creator Demo</h2>
                <div className="container-drag">
                    DRAG & DROP DEMO
                </div>
                <div className="wip" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">WIP</span>                    
                    {tasks.wip}                
                </div>                
                <div className="droppable" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>this.onDrop(e, "complete")}>     
                    <span className="task-header">COMPLETED</span>                     
                    {tasks.complete}                
                </div>    
            </div>
        );
    }
}
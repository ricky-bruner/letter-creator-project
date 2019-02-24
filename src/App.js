import React, { Component } from 'react';
import './App.css';
// import DragAndDropTest from './DragAndDropTest';
import LetterPage from './components/letterComponents/LetterPage';
import "./components/letterStyles.css";
import GeneratedFieldMenu from './components/toolbarComponents/GeneratedFieldMenu';

export default class App extends Component {
    state = {}

    render() {
        return (
            <div>
                <h2>Testing</h2>
                {/* <DragAndDropTest /> */}
                <div className="flex-around">
                    <GeneratedFieldMenu />
                    <LetterPage />
                </div>
            </div>
        );
    }
}


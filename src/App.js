import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StickyComponent from './StickyComponent.js';
import Draggable from 'react-draggable';

class App extends Component {
    constructor(props) {
        super(props);
        this.onStart= this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.state={
            activeDrags: 0
        }
    }

    onStart() {
        this.setState({activeDrags: ++this.state.activeDrags});
    }

      onStop() {
        this.setState({activeDrags: --this.state.activeDrags});
    }

    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        return (
            <div className="container-box" style={{height: '500px', width: '500px', position: 'relative', overflow: 'auto', padding: '0'}}>
                <div style={{height: '1000px', width: '1000px', padding: '10px'}}>
                    <Draggable bounds="parent" {...dragHandlers}>
                        <div className="box">
                            <StickyComponent/>
                        </div>
                    </Draggable>
                </div>
            </div>
        );
    }
}

export default App;

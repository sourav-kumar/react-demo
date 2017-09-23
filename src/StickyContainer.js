import React, { Component } from 'react';
import './App.css';
import StickyComponent from './StickyComponent.js';
import shortId from 'shortid';


class StickyContainer extends Component {
    constructor(props) {
        super(props);
        this.handleAddClick= this.handleAddClick.bind(this);
        this.removeSticky = this.removeSticky.bind(this);
        this.state={
            noteNumbers : []
        }
    }

    handleAddClick() {
        let arr= this.state.noteNumbers;
        arr.push(shortId.generate());
        this.setState({noteNumbers:arr});
    }

    removeSticky(id) {
        let arr = this.state.noteNumbers.filter((item)=> item!==id);
        this.setState({noteNumbers:arr});
    }

    render() {
        let self = this;
        return (
            <div className="container-box" style={{height: '800px', width: '800px', position: 'relative', overflow: 'auto', padding: '0'}}>
                <button className="add-button" onClick={this.handleAddClick}>{"+"}</button>
                <div style={{height: '1500px', width: '1500px', padding: '10px'}}>
                            {this.state.noteNumbers.map(function(item,i){
                                return (<StickyComponent key={item} id={item} onDestroy={self.removeSticky}/>);}
                            )}
                </div>
            </div>
        );
    }
}
export default StickyContainer;

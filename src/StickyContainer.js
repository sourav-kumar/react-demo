import React, { Component } from 'react';
import './App.css';
import StickyComponent from './StickyComponent.js';
import shortId from 'shortid';


class StickyContainer extends Component {
    constructor(props) {
        super(props);
        this.handleAddClick= this.handleAddClick.bind(this);
        this.removeSticky = this.removeSticky.bind(this);
        this.changeStickyText = this.changeStickyText.bind(this);
        this.state={
            stickyNotes : []
        }
    }

    handleAddClick() {
        let arr= this.state.stickyNotes;
        arr.push({id: shortId.generate(),text:''});
        this.setState({stickyNotes:arr});
    }

    removeSticky(id) {
        let arr = this.state.stickyNotes.filter((item)=> item.id!==id);
        this.setState({stickyNotes:arr});
    }

    changeStickyText(newText, stickyId) {
        let arr = this.state.stickyNotes.map((item)=> item.id === stickyId ? {id: stickyId, text: newText} : item );
        this.setState({stickyNotes:arr});
    }

    

    render() {
        let self = this,
            notes = self.state.stickyNotes;

        return (
            <div className="container-box" style={{height: '800px', width: '860px', position: 'relative', overflow: 'auto', padding: '10px 0 0'}}>
                <button className="add-button" onClick={this.handleAddClick}>{"+"}</button>
                <div style={{height: '1500px', width: '800px', padding: '10px'}}>
                            {notes.map(function(item,i){
                                return (<StickyComponent key={item.id} id={item.id} text={item.text}
                                            onDestroy={self.removeSticky} 
                                            onStickyTextChange={self.changeStickyText} />);}
                            )}
                </div>
            </div>
        );
    }
}
export default StickyContainer;

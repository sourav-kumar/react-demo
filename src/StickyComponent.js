import React, { Component } from 'react';
import StickyContentDisplay from './StickyContentDisplay';
import StickyContentEdit from './StickyContentEdit';


export default class  StickyComponent extends Component {

	constructor(props) {
		super(props);
		this.changeEditState = this.changeEditState.bind(this);
		this.saveText = this.saveText.bind(this);
		this.removeSticky = this.removeSticky.bind(this);
		this.state = {
			text : "",
			reminder: false,
			edit: false,
			closed: false
		}
	}

	stickyDom = (ref) => { this.stickyContainer = ref }

	changeEditState(e) {
		this.setState({edit: true});
	}

	saveText(stickyText) {
		this.setState({edit:false, text: stickyText});
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.state.closed) {
			this.stickyContainer.remove();
		}
	}

	removeSticky(e) {
		this.setState({closed: true});
	}

	render() {
		return (
			<div ref = {this.stickyDom}>
				{this.state.edit ? 
					(<StickyContentEdit 
						text={this.state.text} 
						onSaveBtnClick={this.saveText} />) :  
					(<StickyContentDisplay 
					text={this.state.text}
					onEditBtnClick={this.changeEditState}
					onStickyClose={this.removeSticky} />)
				}
			</div>
		)
	}
}
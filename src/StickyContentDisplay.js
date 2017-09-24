import React, { PureComponent } from 'react';
import "./App.css"	


export default class StickyContentDisplay extends PureComponent {
	constructor(props) {
		super(props);
		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleCloseClick = this.handleCloseClick.bind(this);
		this.showButtons = this.showButtons.bind(this);
	}

	btnNode= (ref)=>{this.btnDOMNode = ref}

	handleEditClick(e) {
		this.props.onEditBtnClick(e);
	}

	handleCloseClick(e) {
		this.props.onStickyClose(e);
	}

	showButtons() {

	}

	componentDidMount() {
		//console.log("asad");
	}

	render() {
		return (
			<div className="sticky-content" onMouseOver={this.showButtons}>
				<div className="sticky-text"><p>{this.props.text}</p></div>
				<div className="btn-wrapper" ref={this.btnNode}>
					<button id="edit" type="button" onClick={this.handleEditClick}>{"Edit"}</button>
					<button id="close" type="button" onClick={this.handleCloseClick}>{"X"}</button>
					<button id="setReminder" type="button">{"Set Reminder"}</button>
				</div>
			</div>
		);
	}
}
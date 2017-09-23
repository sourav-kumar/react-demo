import React, { Component } from 'react';
import "./App.css"	


export default class StickyContentDisplay extends Component {
	constructor(props) {
		super(props);
		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleCloseClick = this.handleCloseClick.bind(this);
	}

	handleEditClick(e) {
		this.props.onEditBtnClick(e);
	}

	handleCloseClick(e) {
		this.props.onStickyClose(e);
	}

	render() {
		return (
			<div className="sticky-content">
				<div className="sticky-text"><p>{this.props.text}</p></div>
				<div className="btn-wrapper">
					<button id="edit" type="button" onClick={this.handleEditClick}>{"Edit"}</button>
					<button id="close" type="button" onClick={this.handleCloseClick}>{"X"}</button>
					<button id="setReminder" type="button">{"Set Reminder"}</button>
				</div>
			</div>
		);
	}
}
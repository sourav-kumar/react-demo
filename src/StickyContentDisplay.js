import React, { PureComponent } from 'react';
import "./App.css"	


export default class StickyContentDisplay extends PureComponent {
	constructor(props) {
		super(props);
		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleCloseClick = this.handleCloseClick.bind(this);
		this.showButtons = this.showButtons.bind(this);
		this.hideButtons = this.hideButtons.bind(this);
		this.state={
			isMouseOver: false
		}
	}

	handleEditClick(e) {
		this.props.onEditBtnClick(e);
	}

	handleCloseClick(e) {
		this.props.onStickyClose(e);
	}

	showButtons() {
		this.setState({isMouseOver: true});
	}

	hideButtons() {
		this.setState({isMouseOver: false});
	}

	render() {
		return (
			<div className="sticky-content" onMouseEnter={this.showButtons} onMouseLeave={this.hideButtons}>
				<div className="sticky-text"><p>{this.props.text}</p></div>
				{this.state.isMouseOver && (<div className="btn-wrapper">
					<button id="edit" type="button" onClick={this.handleEditClick}>{"Edit"}</button>
					<button id="close" type="button" onClick={this.handleCloseClick}>{"X"}</button>
					<button id="setReminder" type="button">{"Set Reminder"}</button>
				</div>)}
			</div>
		);
	}
}
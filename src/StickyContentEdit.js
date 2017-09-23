import React, { Component } from 'react';
import "./App.css"


export default class StickyContentEdit extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleStickyTextChange = this.handleStickyTextChange.bind(this);
		this.stickText = '';
	}

	handleSubmit(e) {
		this.props.onSaveBtnClick(this.stickText);
		//removeEventListener('change', this.handleStickyTextChange);
	}

	handleStickyTextChange(e) {
		this.stickText = e.target.value;
	}

	render() {
		return (
			<div className="sticky-content no-cursor">
				<form onSubmit={this.handleSubmit}>
					<textArea id="stickyText" 
						placeholder="Enter the Text" 
						onChange={this.handleStickyTextChange} 
						defaultValue={this.props.text}>
					</textArea>
					<div className="btn-wrapper">
						<input id="save" value="Save" type="submit" />
					</div>
				</form>
			</div>
		);
	}
}
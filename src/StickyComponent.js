import React, { Component } from 'react';

import StickyContentDisplay from './StickyContentDisplay';
import StickyContentEdit from './StickyContentEdit';


export default class  StickyComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text : "",
			reminder: false,
			edit: true
		}
	}

	render() {
		return (
			<div>
				{!this.state.edit && (<StickyContentEdit text={this.state.text} />)}
				{this.state.edit && (<StickyContentEdit text={this.state.text} />)}
			</div>
		)
	}
}
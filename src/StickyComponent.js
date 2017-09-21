import React, { Component } from 'react';

import StickyContentDisplay from './StickyContentDisplay';
import StickyContentEdit from './StickyContentEdit';


export default class  StickyComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text : "",
			reminder: false,
			edit: false
		}
	}

	render() {
		return (
			<div>
				{this.state.edit ? (<StickyContentEdit text={this.state.text} />):
				(<StickyContentDisplay text={this.state.text} />)}
			</div>
		)
	}
}
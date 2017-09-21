import React, { Component } from 'react';

import "./App.css"


export default function StickyContentEdit(props) {
	return (
		<div className="sticky-content">
			<textArea>{props.text}</textArea>
			<div className="btn-wrapper">
				<button id="save" type="button">{"Save"}
				</button>
			</div>
		</div>
	);
}
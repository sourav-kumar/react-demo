import React, { Component } from 'react';

import "./App.css"


export default function StickyContentDisplay(props) {
	return (
		<div className="sticky-content">
			<p>{props.text}</p>
			<div className="btn-wrapper">
				<button id="edit" type="button">{"Edit"}
				</button>
				<button id="close" type="button">{"X"}
				</button>
				<button id="setReminder" type="button">{"Set Reminder"}
				</button>
			</div>
		</div>
	);
}
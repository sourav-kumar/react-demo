import React, { PureComponent } from 'react';
import StickyContentDisplay from './StickyContentDisplay';
import StickyContentEdit from './StickyContentEdit';
import Draggable from 'react-draggable';


export default class  StickyComponent extends PureComponent {

	constructor(props) {
		super(props);
		this.changeEditState = this.changeEditState.bind(this);
		this.saveText = this.saveText.bind(this);
		this.removeSticky = this.removeSticky.bind(this);
		this.onStart= this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
		this.state = {
			text : "",
			edit: false,
			activeDrags: 0	
		}
	}

	//stickyDom = (ref) => { this.stickyContainer = ref }

	onStart() {
        this.setState({activeDrags: ++this.state.activeDrags});
    }

      onStop() {
        this.setState({activeDrags: --this.state.activeDrags});
    }

	changeEditState(e) {
		this.setState({edit: true});
	}

	saveText(stickyText) {
		this.setState({edit:false, text: stickyText});
	}

	// componentDidUpdate(prevProps, prevState) {
	// 	if(this.state.closed) {
	// 		this.stickyContainer.remove();
	// 	}
	// }

	removeSticky(e) {
		this.props.onDestroy(this.props.id);
	}

	render() {
		const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
		return (
			<Draggable bounds="parent" {...dragHandlers} disabled={this.state.edit}>	
				<div id={this.props.id} className="box">
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
			</Draggable>
		)
	}
}
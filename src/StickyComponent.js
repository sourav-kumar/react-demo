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
		this.props.onStickyTextChange(stickyText, this.props.id);
		this.setState({edit:false});
	}

	removeSticky(e) {
		this.props.onDestroy(this.props.id);
	}

	componentDidUpdate() {
		//console.log("asad");
	}

	componentWillUnmount() {
		//console.log(this.props.id);
	}

	render() {
		const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
		console.log("stickyText")
		return (
			<Draggable bounds="parent" {...dragHandlers} disabled={this.state.edit}>	
				<div id={this.props.id} className="box">
					{this.state.edit ? 
						(<StickyContentEdit 
							text={this.props.text} 
							onSaveBtnClick={this.saveText} />) :  
						(<StickyContentDisplay 
						text={this.props.text}
						onEditBtnClick={this.changeEditState}
						onStickyClose={this.removeSticky} />)
					}
				</div>
			</Draggable>
		)
	}
}
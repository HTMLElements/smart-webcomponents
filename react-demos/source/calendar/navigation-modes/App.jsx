import React from "react";
import ReactDOM from "react-dom";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
	}

	handleScrollButtonsPosition(position, event) {
		if (event.detail.value) {
			this.calendar.current.scrollButtonsPosition = position;
		}
	}

	handleScrollButtonsNavigationMode(mode, event) {
		if (event.detail.value) {
			this.calendar.current.scrollButtonsNavigationMode = mode;
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Calendar ref={this.calendar}></Calendar>
			    <div className="options">
			        <div className="caption">Scroll Buttons Position</div>
			        <div className="option">
			            <RadioButton onChange={this.handleScrollButtonsPosition.bind(this, 'near')}  groupName="a">Near</RadioButton>
			            <br/>
			            <RadioButton onChange={this.handleScrollButtonsPosition.bind(this, 'far')}  groupName="a">Far</RadioButton>
			            <br/>
			            <RadioButton onChange={this.handleScrollButtonsPosition.bind(this, 'both')} checked groupName="a">Both</RadioButton>
			            <br/>
			        </div>
			        <div className="caption">Scroll Buttons Navigation Mode</div>
			        <div className="option">
			            <RadioButton onChange={this.handleScrollButtonsNavigationMode.bind(this, 'landscape')} checked groupName="b">Landscape</RadioButton>
			            <br/>
			            <RadioButton onChange={this.handleScrollButtonsNavigationMode.bind(this, 'portrait')}  groupName="b">Portrait</RadioButton>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

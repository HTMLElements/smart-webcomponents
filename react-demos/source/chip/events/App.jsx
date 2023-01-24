import React from "react";
import ReactDOM from "react-dom";
import { Chip } from 'smart-webcomponents-react/chip';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.chip = React.createRef();
		this.chip2 = React.createRef();
		this.chip3 = React.createRef();
		this.eventLog = React.createRef();
	}

	handleChip1Event(event) {
		const that = this,
			action = event.type === 'click' ? 'clicked' : 'removed';

		that.eventLog.current.innerHTML = that.eventLog.current.innerHTML + action + ' <b>' + that.chip.current.value + '</b>\'s chip<br />';
	}

	handleChip2Event(event) {
		const that = this,
			action = event.type === 'click' ? 'clicked' : 'removed';

		that.eventLog.current.innerHTML = that.eventLog.current.innerHTML + action + ' <b>' + that.chip2.current.value + '</b>\'s chip<br />';
	}

	handleChip3Event(event) {
		const that = this,
			action = event.type === 'click' ? 'clicked' : 'removed';

		that.eventLog.current.innerHTML = that.eventLog.current.innerHTML + action + ' <b>' + that.chip3.current.value + '</b>\'s chip<br />';
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Chip ref={this.chip} avatar="https://www.htmlelements.com/demos//images/phonebook/mark.jpeg" value="Steven Buchanan"
					closeButton onClick={this.handleChip1Event.bind(this)} onClose={this.handleChip1Event.bind(this)}></Chip>
				<Chip ref={this.chip2} avatar="https://www.htmlelements.com/demos//images/phonebook/michael.png" value="Andrew Fuller"
					closeButton onClick={this.handleChip2Event.bind(this)} onClose={this.handleChip2Event.bind(this)}></Chip>
				<Chip ref={this.chip3} avatar="https://www.htmlelements.com/demos//images/phonebook/margaret.png"
					value="Nancy Davolio" closeButton onClick={this.handleChip3Event.bind(this)} onClose={this.handleChip3Event.bind(this)}></Chip>
				<div ref={this.eventLog} id="eventLog">
					<h1>Events</h1>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

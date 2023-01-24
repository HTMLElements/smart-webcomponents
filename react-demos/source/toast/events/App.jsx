import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Toast } from 'smart-webcomponents-react/toast';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.toast = React.createRef();
		this.log = React.createRef();
	}

	handleEvent(event) {
		this.log.current.innerHTML = event.type + '<br />' + this.log.current.innerHTML;
	}

	handleClick() {
		this.toast.current.open();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Toast ref={this.toast} onClose={this.handleEvent.bind(this)} onClick={this.handleEvent.bind(this)}
					onOpen={this.handleEvent.bind(this)} onSwipebottom={this.handleEvent.bind(this)} onSwipetop={this.handleEvent.bind(this)}
					onSwipeleft={this.handleEvent.bind(this)} onSwiperight={this.handleEvent.bind(this)} position="top-left"
					autoOpen autoClose showCloseButton autoCloseDelay={5000}>Toast!</Toast>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<Button onClick={this.handleClick.bind(this)} id="openButton">Open Toast</Button>
						<h2>Events log:</h2>
						<div ref={this.log} id="log"></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

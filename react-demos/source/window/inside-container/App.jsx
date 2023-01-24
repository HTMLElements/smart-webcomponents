import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Window } from 'smart-webcomponents-react/window';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.window = React.createRef();
	}

	handleClick() {
		this.window.current.opened ? this.window.current.close() : this.window.current.open();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="options">
			        <div className="option">
			            <Button onClick={this.handleClick.bind(this)}>Open/Close</Button>
			        </div>
			    </div>
			    <div id="windowContainer">
			        <Window ref={this.window} opened label="Nested Window" windowParent="windowContainer"
			        resizeMode="both">
			            <div>This is a window inside a container</div>
			        </Window>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Window } from 'smart-webcomponents-react/window';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.window = React.createRef();
		this.window2 = React.createRef();
	}

	handleClick() {
		this.window.current.opened = !this.window.current.opened;
		this.window2.current.opened = !this.window2.current.opened;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="options">
					<div className="option">
						<Button  id="openButton" onClick={this.handleClick.bind(this)}>Open/Close</Button>
					</div>
				</div>
				<Window ref={this.window} opened label="Window 1">
					<div id="article">
						<section>
							<h3>Window Minimizataion?</h3>
							<p>Window minimization allows the element to be temporarly minimized and
							placed in the bottom left corner of the viewport. When minimized the window
							can't be dragged nor resized. The window can be restored to it's normal
			                    state by calling the <b>restore</b> method.</p>
						</section>
					</div>
				</Window>
				<Window ref={this.window2} opened label="Window 2">
					<div id="article">
						<section>
							<h3>Usage</h3>
							<p>When multiple windows are opened the user can minimize those that are
							not in use in order to free the screen and see the background. Minimized
							windows are placed next to each other in a single line starting from the
							bottom left corner of the viewport. When a window has been restored, the
			                    minimized windows are re-aranged.</p>
						</section>
					</div>
				</Window>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

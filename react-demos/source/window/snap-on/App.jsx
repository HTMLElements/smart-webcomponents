import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Window } from 'smart-webcomponents-react/window';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.window = React.createRef();
	}

	handleClick(event) {
		if (this.window.current.disableSnap) {
			this.window.current.disableSnap = false;
			event.target.innerHTML = 'Disable Snapping';
		}
		else {
			this.window.current.disableSnap = true;
			event.target.innerHTML = 'Enable Snapping';
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Window ref={this.window} opened label="Window Snapping Demo">
					<section>
						<h3>What is Window snapping ?</h3>
						<p>Window snapping is a feature that allows the window custom element to
						attach or detach quickly to the edges of the viewport. When the element
						is dragged near the edges of the browser so that the mouse pointer is over
						the edge or passing it a snapping animation will appear indicating that
						the window can be snapped to the edge. When snapped-on the window takes
						the dimensions of the viewport but can still be resized. In order to detach
						it from it's snapped state simply drag the window away. The moment the
						user starts dragging, the window will restore itself to it's original dimensions
						(before snapping). Snapping can occure from the left,right or top side
			                of the viewport.</p>
					</section>
				</Window>
				<div className="options">
					<div className="caption">
						<label>Hint:</label>
					</div>
					<div className="option">
						<p>To snap a window on, simply drag it to the left, right or top until the
						mouse pointer reaches the edge of the browser or passes it. An animation
			                will appear when the window can be snapped on.</p>
					</div>
					<div className="option">
						<Button id="controlSnapping" onClick={this.handleClick.bind(this)}>Disable Snapping</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

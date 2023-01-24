import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Window } from 'smart-webcomponents-react/window';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.window = React.createRef();
	}

	handleResizeMode(mode) {
		this.window.current.resizeMode = mode;
	}
	
	handleResizeIndicator(value) {
		this.window.current.resizeIndicator = value;
	}
	
	handleLiveResize(value) {
		this.window.current.liveResize = value;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="options">
					<div className="caption">smartWindow Resizing Modes:</div>
					<div className="option">
						<RadioButton checked onChange={this.handleResizeMode.bind(this, 'none')}>none</RadioButton>
						<RadioButton onChange={this.handleResizeMode.bind(this, 'horizontal')}>Horizontal</RadioButton>
						<RadioButton onChange={this.handleResizeMode.bind(this, 'vertical')}>Vertical</RadioButton>
						<RadioButton onChange={this.handleResizeMode.bind(this, 'both')}>Both</RadioButton>
						<RadioButton onChange={this.handleResizeMode.bind(this, 'top')}>Top</RadioButton>
						<RadioButton onChange={this.handleResizeMode.bind(this, 'bottom')}>Bottom</RadioButton>
						<RadioButton onChange={this.handleResizeMode.bind(this, 'left')}>Left</RadioButton>
						<RadioButton onChange={this.handleResizeMode.bind(this, 'right')}>Right</RadioButton>
					</div>
					<div className="caption">Resize indicator:</div>
					<div className="option">
						<RadioButton onChange={this.handleResizeIndicator.bind(this, false)} checked>Off</RadioButton>
						<RadioButton onChange={this.handleResizeIndicator.bind(this, true)}>On</RadioButton>
					</div>
					<div className="caption">Live Resize:</div>
					<div className="option">
						<RadioButton onChange={this.handleLiveResize.bind(this, false)} checked>Off</RadioButton>
						<RadioButton onChange={this.handleLiveResize.bind(this, true)}>On</RadioButton>
					</div>
				</div>
				<Window ref={this.window} opened label="Window 1">
					<section>
						<h3>What is Lorem Ipsum?</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the
						1500s, when an unknown printer took a galley of type and scrambled it to
						make a type specimen book. It has survived not only five centuries, but
						also the leap into electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of Letraset sheets containing
						Lorem Ipsum passages, and more recently with desktop publishing software
			                like Aldus PageMaker including versions of Lorem Ipsum.</p>
					</section>
				</Window>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

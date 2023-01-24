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

	handleMaximize() {
		this.window.current.maximized ? this.window.current.restore() : this.window.current.maximize();
	}

	handleMinimize() {
		this.window.current.minimized ? this.window.current.restore() : this.window.current.minimize();
	}

	handlePin() {
		this.window.current.pinned ? this.window.current.unpin() : this.window.current.pin();
	}

	handleCollapse() {
		this.window.current.collapsed ? this.window.current.expand() : this.window.current.collapse();
	}

	handleDisable() {
		this.window.current.disabled = !this.window.current.disabled;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
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
				<div className="options">
					<div className="caoption">Methods:</div>
					<div className="option">
						<Button id="open" onClick={this.handleClick.bind(this)}>Open/Close</Button>
					</div>
					<div className="option">
						<Button id="max" onClick={this.handleMaximize.bind(this)}>Maximize/Restore</Button>
					</div>
					<div className="option">
						<Button id="min" onClick={this.handleMinimize.bind(this)}>Minimize/Restore</Button>
					</div>
					<div className="option">
						<Button id="pin" onClick={this.handlePin.bind(this)}>Pin/Unpin</Button>
					</div>
					<div className="option">
						<Button id="collapse" onClick={this.handleCollapse.bind(this)}>Collapse/Expand</Button>
					</div>
					<div className="option">
						<Button id="disable" onClick={this.handleDisable.bind(this)}>Disable/Enable</Button>
					</div>
				</div>
			</div >
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

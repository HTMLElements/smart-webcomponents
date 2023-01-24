import React from "react";
import ReactDOM from "react-dom";
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.log = React.createRef();
	}

	handleEvent(event) {
		function getElement(event) {
			const element = document.createElement('div');

			element.textContent = 'Type: ' + event.type;

			if (event.detail.x) {
				element.textContent += ', X: ' + event.detail.x + ', Y: ' + event.detail.y;
			}

			return element;
		}

		if (!event.detail) {
			return;
		}

		this.log.current.appendChild(getElement(event));
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Splitter onResize={this.handleEvent.bind(this)}
					onExpand={this.handleEvent.bind(this)} onCollapse={this.handleEvent.bind(this)}
					onResizeStart={this.handleEvent.bind(this)} onResizeEnd={this.handleEvent.bind(this)}>
					<SplitterItem collapsible size="150"></SplitterItem>
					<SplitterItem collapsible></SplitterItem>
				</Splitter>
				<div className="options">
					<div>Event Log:</div>
					<div className="option ">
						<div ref={this.log} id="log">
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

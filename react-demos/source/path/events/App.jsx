import React from "react";
import ReactDOM from "react-dom";
import { Path } from 'smart-webcomponents-react/path';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.log = React.createRef();
	}
	
	handleEvent(event) {
		this.log.current.innerHTML += event.type + '</br>';
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Path label="Path" onBrowseButtonClick={this.handleEvent.bind(this)} onDropDownButtonClick={this.handleEvent.bind(this)}
					onOpen={this.handleEvent.bind(this)} onOpening={this.handleEvent.bind(this)}
					onClose={this.handleEvent.bind(this)} onClosing={this.handleEvent.bind(this)}
					onChange={this.handleEvent.bind(this)} onItemClick={this.handleEvent.bind(this)}></Path>
				<div className="options">
					<div>Event Log:</div>
					<div className="option">
						<div ref={this.log} id="log"></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { MultiSplitButton, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multisplitbutton';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.log = React.createRef();
	}

	buttonsDataSource = ['Button 1', 'Button 2', 'Button 3'];

	dropDownButtonPosition = 'right';

	handleButtonClick(event) {
		this.log.current.innerHTML = "Clicked Button " + event.detail.index;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<MultiSplitButton buttonsDataSource={this.buttonsDataSource} dropDownButtonPosition={this.dropDownButtonPosition} id="multiSplitButton" onButtonClick={this.handleButtonClick.bind(this)}></MultiSplitButton>

				<div className="options">
					<div className="caption">Events</div>
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

import React from "react";
import ReactDOM from "react-dom";
import { ButtonGroup } from 'smart-webcomponents-react/buttongroup';
import { Input } from 'smart-webcomponents-react/input';

class App extends React.Component {
	constructor(prop) {
		super(prop);

		this.buttonGroup = React.createRef();
		this.options = React.createRef();
	}

	dataSource = ["a","b","c"];

	selectionModes = ["none", "one", "zeroOrOne", "zeroOrMany"];

	init() {
		const buttonGroup = this.buttonGroup.current;
		
	    document.querySelector('.options').addEventListener('change', function(event) {
	        buttonGroup.selectionMode = event.detail.value;
	    });
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
			    <ButtonGroup ref={this.buttonGroup}  dataSource={this.dataSource}></ButtonGroup>
			        <div className="options" ref={this.options}>
			             <h4>Select a Selection Mode:</h4>
			            <div className="option">
			                <Input readonly value="one" dataSource={this.selectionModes} dropDownButtonPosition="right"></Input>
			            </div>
			        </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

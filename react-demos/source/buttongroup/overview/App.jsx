import React from "react";
import ReactDOM from "react-dom";
import { ButtonGroup } from 'smart-webcomponents-react/buttongroup';

class App extends React.Component {

	dataSource = ["a","b","c"];

	init() {
	
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
			    <ButtonGroup dataSource={this.dataSource}></ButtonGroup>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

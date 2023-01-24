import React from "react";
import ReactDOM from "react-dom";
import { Array } from 'smart-webcomponents-react/array';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.array = React.createRef();
	}

	handleClick() {
		this.array.current.transposeArray();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Array ref={this.array} id="smartArray" showIndexDisplay type="numeric" value={[[1, 3, 5], [2, 4, 6]]}
					dimensions={2} rows={3} columns={3}></Array>
				<br />как
				<Button onClick={this.handleClick.bind(this)} id="transposeArray" className="demoButton">Transpose array</Button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

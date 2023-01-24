import React from "react";
import ReactDOM from "react-dom";
import { Array } from 'smart-webcomponents-react/array';
import { Button } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.array = React.createRef();
	}

	handleSpinButtons() {
		this.array.current.elementTemplate = function (element, dimensions) {
			element.spinButtons = false;
		};
	}

	handlePrecicisionDigits() {
		this.array.current.elementTemplate = function (element, dimensions) {
			element.precisionDigits = 3;
		};
	}

	handleElementWidth() {
		this.array.current.setColumnWidth(150);
	}

	handleElementHeight() {
		this.array.current.setRowHeight(50);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Array ref={this.array} id="jqxArray" style={{ marginBottom: '50px' }} showIndexDisplay type="numeric" value={[[[10], [12]], [[1], [6]]]} dimensions={3} rows={3} columns={3}></Array>
				<div style={{ marginBottom: '10px' }}>
					<Button id="hideSpinButtons" onClick={this.handleSpinButtons.bind(this)}>
						Hide spin buttons</Button>
					<Button id="changePrecisionDigits" onClick={this.handlePrecicisionDigits.bind(this)}>
						Change precision digits</Button>
				</div>
				<div>
					<Button id="changeElementWidth" onClick={this.handleElementWidth.bind(this)}>
						Change element width</Button>
					<Button id="changeElementHeight" onClick={this.handleElementHeight.bind(this)}>
						Change element height</Button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

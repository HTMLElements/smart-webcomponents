import React from "react";
import ReactDOM from "react-dom";
import { Array } from "smart-webcomponents-react/array";
import { Button } from "smart-webcomponents-react/button";

class App extends React.Component {
	constructor(p) {
		super(p);

		this.array = React.createRef();
		this.log = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
	}

	elementTemplate(element, dimensions) {
		ReactDOM.render(<Array
			showIndexDisplay
			type='string'
			dimensions={2}
			rows={3}
			columns={2}></Array>, new DocumentFragment(), function () {
				element.appendChild(this.nativeElement);
			})
	}

	getElementValue(element, dimensions) {
		return element.firstChild.value;
	}

	setElementValue(value, element, dimensions) {
		element.firstChild.value = value;
	}

	handleChange(event) {
		this.array.current.val().then((value) => {
			this.log.current.innerHTML = JSON.stringify(value) + '<hr />' + this.log.current.innerHTML;
		});
	}

	handleReset() {
		this.array.current.reset();
		this.button2.current.disabled = true;
	}

	handleEmpty() {
		this.array.current.emptyArray();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div style={{ fontFamily: 'Verdana' }}>
					Set inner array values to see how the value of the main array is changed.
					</div>
				<br />
				<Array ref={this.array} id="smartArray" onChange={this.handleChange.bind(this)}
					showIndexDisplay
					type="custom"
					value={[[["a", "c"], ["b", "d"]], [["α", "γ"], ["β", "δ"]]]}
					dimensions={2}
					rows={1}
					columns={3}
					customWidgetDefaultValue={[[]]}
					showHorizontalScrollbar
					elementTemplate={this.elementTemplate}
					getElementValue={this.getElementValue}
					setElementValue={this.setElementValue}></Array>
				<div style={{ marginTop: '50px' }}>
					<Button ref={this.button} onClick={this.handleReset.bind(this)} id="resetMainArray" className="demoButton">Reset main array</Button>
					<Button ref={this.button2} onClick={this.handleEmpty.bind(this)} id="emptyMainArray" className="demoButton">Empty main array</Button>
				</div>
				<div style={{ marginTop: '50px', fontFamily: 'Verdana' }}>Log:</div>
				<br />
				<div ref={this.log} id="log">
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

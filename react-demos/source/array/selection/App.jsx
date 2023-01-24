import React from "react";
import ReactDOM from "react-dom";
import { Array } from 'smart-webcomponents-react/array';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.array = React.createRef();
	}

	handleSelectElement() {
		this.array.current.selectElement(0, 0);
	}

	handleStartSelection() {
		this.array.current.startSelection(0, 0);
	}

	handleEndSelection() {
		this.array.current.endSelection(0, 1);
	}

	handleSelectAll() {
		this.array.current.selectAll();
	}

	handleClearSelection() {
		this.array.current.clearSelection();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Array ref={this.array} id="smartArray" showIndexDisplay type="numeric" value={[[[10, 1], [12, 6]]]}
			    dimensions={3} rows={3} columns={3} showSelection></Array>
			    <br />
			    <div style={{marginTop: '50px'}}>
			        <Button onClick={this.handleSelectElement.bind(this)} id="selectElement" className="demoButton">selectElement (0, 0)</Button>
			        <Button onClick={this.handleStartSelection.bind(this)} id="startSelection"
			        className="demoButton">startSelection (0, 0)</Button>
			        <Button onClick={this.handleEndSelection.bind(this)} id="endSelection"
			        className="demoButton">endSelection (0, 1)</Button>
			        <Button onClick={this.handleSelectAll.bind(this)} id="selectAll" className="demoButton">selectAll</Button>
			        <Button onClick={this.handleClearSelection.bind(this)} id="clearSelection" className="demoButton">clearSelection</Button>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Array } from 'smart-webcomponents-react/array';
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.array = React.createRef();
		this.log = React.createRef();
	}

	handleScroll(event) {
		this.log.current.innerHTML = event.detail.direction + ' scrollbar scrolled.<br />' + this.log.current.innerHTML;
	}

	handleIndexDisplay(event) {
		this.array.current.showIndexDisplay = event.detail.value;
	}

	handleVerticalScrollBar(event) {
		this.array.current.showVerticalScrollbar = event.detail.value;
	}

	handleHorizontalScrollBar(event) {
		this.array.current.showHorizontalScrollbar = event.detail.value;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<p style={{fontFamily: 'Verdana'}}>Visible items:</p>
				<CheckBox onChange={this.handleIndexDisplay.bind(this)} id="enableIndexDisplay" checked>Index Display</CheckBox>
				<CheckBox onChange={this.handleVerticalScrollBar.bind(this)} id="enableVerticalScrollbar"
					checked>Vertical Scrollbar</CheckBox>
				<CheckBox onChange={this.handleHorizontalScrollBar.bind(this)} id="enableHorizontalScrollbar"
					checked>Horizontal Scrollbar</CheckBox>
				<br />
				<br />
				<Array ref={this.array} onScroll={this.handleScroll.bind(this)} id="smartArray" type="string" value={[["A", "a", "α"], ["B", "b", "β"], ["C", "c", "κ"], ["D", "d", "δ"], ["E", "e", "ε"]]}
					dimensions={2} rows={2} columns={2} showIndexDisplay showVerticalScrollbar
					show-horizontal-scrollbar></Array>
				<br />
				<div ref={this.log} id="log"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

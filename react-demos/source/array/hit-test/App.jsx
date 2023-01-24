import React from "react";
import ReactDOM from "react-dom";
import { Array } from 'smart-webcomponents-react/array';
import { Button } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.array = React.createRef();
	}

	handleClick() {
		this.array.current.toggleElementGap();
	}

	init() {
		const that = this;

		document.body.addEventListener('click', function (event) {
			that.array.current.hitTest(event.pageX, event.pageY).then(function (hitTest) {
				let out;

				if (hitTest) {
					switch (hitTest.type) {
						case 'element':
							out = 'Clicked on: ' + hitTest.type + ', x: ' + hitTest.column + ', y: ' + hitTest.row;
							break;
						case 'indexer':
							out = 'Clicked on: ' + hitTest.type + ', dimension: ' + hitTest.dimension;
							break;
						case 'array':
							out = 'Clicked on: ' + hitTest.type;
							break;
					}
					alert(out);
				}
			})
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div style={{ fontFamily: 'Verdana' }}>
					Click anywhere in the array.
					</div>
				<br />
				<Array ref={this.array} id="jqxArray" showIndexDisplay type="numeric" value={[[[10], [12]], [[1], [6]]]} dimensions={3} rows={8} columns={2}></Array>
				<Button onClick={this.handleClick.bind(this)} id="toggleElementGap" className="demoButton" style={{ position: 'absolute', left: '270px', top: '46px' }}>Toggle element gap</Button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

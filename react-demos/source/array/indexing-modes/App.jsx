import React from "react";
import ReactDOM from "react-dom";
import { Array } from 'smart-webcomponents-react/array';

class App extends React.Component {

	numericValueArray1 = [
		[
			[
				[1, 88, 0, 0, 0],
				[22, 2, 0, 0, 0],
				[0, 0, 3, 0, 0],
				[0, 0, 0, 4, 0],
				[0, 0, 0, 0, 5]
			],
			[
				[10, 0, 0, 0, 13],
				[0, 20, 0, 0, 0],
				[0, 33, 30, 0, 0],
				[0, 0, 0, 40, 0],
				[0, 0, 0, 0, 50]
			]
		],
		[
			[
				[2, 0, 0, 0, 0],
				[0, 4, 0, 0, 0],
				[0, 0, 6, 0, 0],
				[0, 0, 0, 8, 0],
				[0, 0, 0, 0, 10]
			],
			[
				[44, 16, 0, 0, 0],
				[22, 44, 22, 22, 22],
				[0, 0, 44, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			]
		]
	];

	numericValueArray2 = JSON.parse(JSON.stringify(this.numericValueArray1));

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <p>arrayIndexingMode: 'LabVIEW'</p>
			    <Array id="smartArrayLabVIEW" value={this.numericValueArray1}
			    show-index-display type="numeric" dimensions={4} rows={6} columns={5} arrayIndexingMode="LabVIEW"></Array>
			    <br />
			    <p>arrayIndexingMode: 'JavaScript'</p>
			    <Array id="smartArrayJavaScript" value={this.numericValueArray2}
			    show-index-display type="numeric" dimensions={4} rows={6} columns={5} arrayIndexingMode="JavaScript"></Array>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

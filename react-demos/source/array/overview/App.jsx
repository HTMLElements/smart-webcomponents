import React from "react";
import ReactDOM from "react-dom";
import { Array } from 'smart-webcomponents-react/array';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Array id="smartArrayEmpty" showIndexDisplay type="none" dimensions={3}></Array>
			    <Array id="smartArrayNumeric" showIndexDisplay
			    type="numeric" value={[[[10], [12]], [[1], [6]]]} dimensions={3} rows={3} columns={3}></Array>
			    <Array id="smartArrayBoolean" showIndexDisplay
			    type="boolean" value={[false, true]} dimensions={1} rows={1} columns={7}></Array>
				<Array id="smartArrayString" showIndexDisplay type="string"
				 value={[["A", "C"], ["B", "D"]]} dimensions={2} rows={4} columns={2}></Array>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

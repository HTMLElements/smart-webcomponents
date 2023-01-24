import React from "react";
import ReactDOM from "react-dom";
import { Array } from 'smart-webcomponents-react/array';

class App extends React.Component {

	elementTemplate(element, dimensions) {
		element.inputFormat = 'complex';
	}

	componentDidMount() {

	}

	render() {
		return (
			<Array  id="smartArray" showIndexDisplay type="numeric" value={[["15 + 1i", "0 + 0i"], ["0 + 0i", "-5 - 21i"]]}
				dimensions={2} rows={3} columns={3} showVerticalScrollbar showHorizontalScrollbar
				customWidgetDefaultValue="0 + 0i" elementTemplate={this.elementTemplate}></Array>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

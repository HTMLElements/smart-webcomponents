import React from "react";
import ReactDOM from "react-dom";
import { Sortable } from 'smart-webcomponents-react/sortable';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div> <em>Drag and drop to solve the puzzle</em>
				<br />
				<br />
				<Sortable ref="sortable">
					<img src="https://www.htmlelements.com/demos/images/row-2-col-1.jpg" />
					<img src="https://www.htmlelements.com/demos/images/row-4-col-1.jpg" />
					<img src="https://www.htmlelements.com/demos/images/row-3-col-1.jpg" />
					<img src="https://www.htmlelements.com/demos/images/row-1-col-1.jpg" />
				</Sortable>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

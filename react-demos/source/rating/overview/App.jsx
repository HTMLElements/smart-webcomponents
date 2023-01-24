import React from "react";
import ReactDOM from "react-dom";
import { Rating } from 'smart-webcomponents-react/rating';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Rating ></Rating>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

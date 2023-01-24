import React from "react";
import ReactDOM from "react-dom";
import { Rating } from 'smart-webcomponents-react/rating';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="description">
			         <h2>Rating 7/10 stars.</h2>
			    </div>
			    <Rating max={10} value={7}></Rating>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

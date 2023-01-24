import React from "react";
import ReactDOM from "react-dom";
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h1>Progress Bar with Barber Shop Style</h1>
			    <br/>
			    <br/>
			    <br/>
			    <br/>
			    <br/>
			    <div>
			        <ProgressBar  className="ProgressBar-horizontal barber-shop-effect"
			        value={50}></ProgressBar>
			        <ProgressBar  orientation="vertical" className="ProgressBar-vertical barber-shop-effect"
			        value={50}></ProgressBar>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

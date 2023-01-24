import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="button-demo hover-glow-effect">
			        <label>Hover Glow Effect</label>
			        <div className="demo-buttons-group">
			            <Button ref="button" className="glow-on-hover">Hover me, then click me!</Button>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

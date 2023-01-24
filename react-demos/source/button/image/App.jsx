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
			    <Button  className="Button-large"><span className="glyphicon glyphicon-ok"></span> OK</Button>
			    <Button 
			    className="Button"><span className="glyphicon glyphicon-ok"></span> OK</Button>
			    <Button 
			    className="Button-small"><span className="glyphicon glyphicon-ok"></span> OK</Button>
			    <Button 
			    className="Button-very-small"><span className="glyphicon glyphicon-ok"></span> OK</Button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

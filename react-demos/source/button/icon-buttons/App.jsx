import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="button-demo icon-buttons">
			        <label>Icon buttons</label>
			        <br />
			        <div className="demo-buttons-group">
			            <Button  className="btn btn-1 btn-sep icon-info">Button</Button>
			            <Button  className="btn btn-2 btn-sep icon-cart">Button</Button>
			            <Button  className="btn btn-3 btn-sep icon-heart">Button</Button>
			            <Button  className="btn btn-4 btn-sep icon-send">Button</Button>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

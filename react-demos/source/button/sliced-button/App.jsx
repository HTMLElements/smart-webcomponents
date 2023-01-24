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
			    <div className="button-demo sliced-button">
			        <label>Sliced Button</label>
			        <div className="demo-buttons-group">
			            <Button  className="btn-slice" href="javascript:void(0)">
			                <div className="top"><span>Sliced Button</span>
			                </div>
			                <div className="bottom"><span>Sliced Button</span>
			                </div>
			            </Button>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

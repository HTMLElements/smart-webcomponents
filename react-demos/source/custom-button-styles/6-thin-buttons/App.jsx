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
			    <div className="button-demo thin-buttons">
			        <div className="header">
			            <label>Thin Buttons</label>
			        </div>
			        <div className="buttons-group">
			            <div className="box-1">
			                <Button ref="button" className="btn btn-one"> <span>HOVER ME</span>
			                </Button>
			            </div>
			            <div className="box-2">
			                <Button ref="button2" className="btn btn-two"> <span>HOVER ME</span>
			                </Button>
			            </div>
			            <div className="box-3">
			                <Button ref="button3" className="btn btn-three"> <span>HOVER ME</span>
			                </Button>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

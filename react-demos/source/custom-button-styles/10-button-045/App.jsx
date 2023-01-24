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
			    <div className="button-demo button-n-45">
			        <label>Button N° 045</label>
			        <div className="demo-buttons-group">
			            <div className="container">
			                <div className="center">
			                    <Button ref="button" className="btn">
			                        <svg width="180px" height="60px" viewBox="0 0 180 60">
			                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
			                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
			                        </svg> <span>HOVER ME</span>
			                    </Button>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="button-demo more-fancy-icon-buttons">
			        <label>More fancy Icon buttons</label>
			        <div className="demo-buttons-group">
			            <div className="icon-container">
			                <Button  className="icon icon-fill"><i className="fa fa-home"></i>
			                </Button>
			                <Button  className="icon icon-enter"><i className="fa fa-user"></i>
			                </Button>
			                <Button  className="icon icon-expand"> <i className="fa fa-bars"></i>
			                </Button>
			                <Button  className="icon icon-collapse"><i className="fa fa-sign-in"></i>
			                </Button>
			                <Button  className="icon icon-rotate"><i className="fa fa-phone"></i>
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

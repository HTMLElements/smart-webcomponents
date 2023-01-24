import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { WaitWindow } from 'smart-webcomponents-react/waitwindow';

class App extends React.Component {

	init() {
	
	
	    const smartWindow = document.querySelector('smart-wait-window');
	    document.getElementById('openButton').addEventListener('click', function() {
	        if (smartWindow.opened) {
	            return;
	        }
	        smartWindow.open();
	        setTimeout(function() {
	            smartWindow.close();
	        }, 2500);
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="options">
			        <div className="option">
			            <Button  id="openButton">Open</Button>
			        </div>
			    </div>
			    <WaitWindow  label="Wait Window" modal></WaitWindow>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

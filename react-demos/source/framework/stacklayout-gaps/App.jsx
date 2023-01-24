import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	init() {
	
	
	    const stackPanel = document.querySelector('.smart-stack-layout');
	    const app = new smartApp({
	        data: {
	            spacing: 'space-between',
	            orientation: 'horizontal'
	        }
	    });
	    app.notify(function(changes) {
	        if (changes.propertyName === 'spacing') {
	            stackPanel.classList.remove('space-between', 'space-around', 'space-evenly');
	        }
	        if (changes.propertyName === 'orientation') {
	            stackPanel.classList.remove('vertical');
	        }
	        stackPanel.classList.add(changes.newValue);
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description"></div>
			    <div className="smart-stack-layout space-between">
			        <Button ref="button" className="primary item">A</Button>
			        <Button ref="button2" className="secondary item">B</Button>
			        <Button ref="button3" className="primary item">C</Button>
			        <Button ref="button4" className="secondary item">D</Button>
			    </div>
			    <div className="options">
			        <div className="caption">Settings</div>
			        <div className="option">
			            <RadioButton ref="radiobutton" checked value="space-between" smart-model="spacing"
			            checked>Space Between</RadioButton>
			            <br/>
			            <RadioButton ref="radiobutton2" value="space-evenly" smart-model="spacing">Space Evenly</RadioButton>
			            <br/>
			            <RadioButton ref="radiobutton3" value="space-around" smart-model="spacing">Space Around</RadioButton>
			        </div>
			        <div className="option">
			            <RadioButton ref="radiobutton4" value="horizontal" smart-model="orientation"
			            checked>Horizontal</RadioButton>
			            <br/>
			            <RadioButton ref="radiobutton5" value="vertical" smart-model="orientation">Vertical</RadioButton>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

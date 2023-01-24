import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	init() {
	
	
	    const stackPanel = document.querySelector('.smart-stack-layout');
	    const app = new smartApp({
	        data: {
	            horizontalAlignment: 'left',
	            verticalAlignment: 'top',
	            orientation: 'horizontal'
	        }
	    });
	    app.notify(function(changes) {
	        if (changes.propertyName === 'horizontalAlignment') {
	            stackPanel.classList.remove('left', 'right', 'center');
	        }
	        if (changes.propertyName === 'verticalAlignment') {
	            stackPanel.classList.remove('top', 'bottom', 'middle');
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
			    <div className="demo-description">StackLayout organizes views in a one-dimensional line ("stack"), either
			        horizontally or vertically. Views in a StackLayout can be sized based on
			        the space in the layout using layout options. Positioning is determined
			        by the order views were added to the layout and the layout options of the
			        views.</div>
			    <div className="smart-stack-layout">
			        <Button ref="button" className="primary item">OK</Button>
			        <Button ref="button2" className="secondary item">Cancel</Button>
			    </div>
			    <div className="options">
			        <div className="caption">Settings</div>
			        <div className="option">
			            <RadioButton ref="radiobutton" value="left" smart-model="horizontalAlignment"
			            checked>Left</RadioButton>
			            <br/>
			            <RadioButton ref="radiobutton2" value="center" smart-model="horizontalAlignment">Center</RadioButton>
			            <br/>
			            <RadioButton ref="radiobutton3" value="right" smart-model="horizontalAlignment">Right</RadioButton>
			        </div>
			        <div className="option">
			            <RadioButton ref="radiobutton4" value="top" smart-model="verticalAlignment"
			            checked>Top</RadioButton>
			            <br/>
			            <RadioButton ref="radiobutton5" value="middle" smart-model="verticalAlignment">Middle</RadioButton>
			            <br/>
			            <RadioButton ref="radiobutton6" value="bottom" smart-model="verticalAlignment">Bottom</RadioButton>
			        </div>
			        <div className="option">
			            <RadioButton ref="radiobutton7" value="horizontal" smart-model="orientation"
			            checked>Horizontal</RadioButton>
			            <br/>
			            <RadioButton ref="radiobutton8" value="vertical" smart-model="orientation">Vertical</RadioButton>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

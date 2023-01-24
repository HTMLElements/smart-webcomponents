import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {

	init() {
	
	    import {
	        App
	    } from "../../../source/smart.core.js"
	
	    const app = new App({
	        id: 'app',
	        data: {
	            checkedNames: ['Peter']
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Multiple checkboxes, bound to the same Array:</div>
			    <br/>
			    <div id='app'>
			        <CheckBox ref="checkbox" type="checkbox" id="peter" value="Peter" smart-model="checkedNames">
			            <label for="jack">Peter</label>
			        </CheckBox>
			        <CheckBox ref="checkbox2" type="checkbox" id="john" value="Nancy" smart-model="checkedNames">
			            <label for="nancy">Nancy</label>
			        </CheckBox>
			        <CheckBox ref="checkbox3" type="checkbox" id="anthony" value="Anthony"
			        smart-model="checkedNames">
			            <label for="anthony">Anthony</label>
			        </CheckBox>
			        <br> <span>Checked names: {{ checkedNames }}</span>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

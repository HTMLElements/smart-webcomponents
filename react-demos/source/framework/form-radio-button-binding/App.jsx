import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            picked: 'One'
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Radio buttons binding.</div>
			    <RadioButton ref="radiobutton" type="radio"
			    id="one" value="One" smart-model="picked">
			        <label for="one">One</label>
			    </RadioButton>
			    <RadioButton ref="radiobutton2" type="radio" id="two" value="Two" smart-model="picked">
			        <label for="two">Two</label>
			    </RadioButton>
			    <RadioButton ref="radiobutton3" type="radio" id="three" value="Three"
			    smart-model="picked">
			        <label for="three">Three</label>
			    </RadioButton>
			    <br>Picked: <span>{{ picked }}</span>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

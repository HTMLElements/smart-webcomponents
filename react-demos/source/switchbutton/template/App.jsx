import React from "react";
import ReactDOM from "react-dom";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.switchbutton = React.createRef();
	}

	init() {
		document.getElementById('templateContainer').innerHTML = `
			<template id="trueTemplate"> <span className="smart-true-content">{{content}}</span>
			</template>
			<template id="falseTemplate"> <span className="smart-false-content">{{content}}</span>
			</template>`;

			this.switchbutton.current.trueTemplate = 'trueTemplate';
			this.switchbutton.current.falseTemplate = 'falseTemplate';
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>Custom Switch Button template
				<br />
				<br />
				<SwitchButton ref={this.switchbutton} checked={null} 
					trueContent="On" falseContent="Off"></SwitchButton>
				<div id="templateContainer"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

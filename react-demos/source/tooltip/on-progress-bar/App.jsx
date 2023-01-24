import React from "react";
import ReactDOM from "react-dom";
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.tooltip = React.createRef();
		this.tooltip2 = React.createRef();
		this.progressbar = React.createRef();
		this.progressbar2 = React.createRef();
	}

	handleChange(position) {
		this.tooltip.current.position = position;
		this.tooltip2.current.position = position;
	}

	init() {
		this.tooltip.current.nativeElement.innerHTML = 'Progress: ' + this.progressbar.current.value + '%';
		this.tooltip2.current.nativeElement.innerHTML = 'Progress: ' + this.progressbar2.current.value + '%';
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<ProgressBar ref={this.progressbar} id="linearProgressBar" value={50}></ProgressBar>
				<Tooltip ref={this.tooltip} id="tooltip" selector="linearProgressBar"
					arrow></Tooltip>
				<CircularProgressBar ref={this.progressbar2} id="circularProgressBar" value={75}></CircularProgressBar>
				<Tooltip ref={this.tooltip2} id="tooltip2" selector="circularProgressBar"
					arrow position="left"></Tooltip>
				<div className="options">
					<h3>Tooltip Position:</h3>
					<RadioButton checked onChange={this.handleChange.bind(this, 'top')}>Top</RadioButton>
					<br />
					<RadioButton onChange={this.handleChange.bind(this, 'bottom')}>Bottom</RadioButton>
					<br />
					<RadioButton onChange={this.handleChange.bind(this, 'left')}>Left</RadioButton>
					<br />
					<RadioButton onChange={this.handleChange.bind(this, 'right')}>Right</RadioButton>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

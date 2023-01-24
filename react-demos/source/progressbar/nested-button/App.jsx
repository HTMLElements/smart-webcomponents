import React from "react";
import ReactDOM from "react-dom";
import { CircularProgressBar } from 'smart-webcomponents-react/progressbar';
import { ToggleButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.progressbar = React.createRef();
		this.togglebutton = React.createRef();
	}

	handleChange(event) {
		const button = this.togglebutton.current,
			progressBar = this.progressbar.current;

		if (button.checked) {
			progressBar.indeterminate = false;
		}
		else {
			progressBar.indeterminate = true;
		}
	}

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<CircularProgressBar ref={this.progressbar} indeterminate value={100}>
					<ToggleButton ref={this.togglebutton} onChange={this.handleChange.bind(this)}></ToggleButton>
				</CircularProgressBar>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

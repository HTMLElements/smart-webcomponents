import React from "react";
import ReactDOM from "react-dom";
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.progressbar = React.createRef();
		this.progressbar2 = React.createRef();
		this.progressbar3 = React.createRef();
	}

	init() {
		const that = this;

		const progressBars = [that.progressbar.current, that.progressbar2.current, that.progressbar3.current];

		for (let i = 0; i < progressBars.length; i++) {
			progressBars[i].formatFunction = (value) => value + '%';
		}
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<ProgressBar ref={this.progressbar} value={50} showProgressValue rightToLeft></ProgressBar>
				<ProgressBar ref={this.progressbar2} orientation="vertical" value={50}
					showProgressValue rightToLeft></ProgressBar>
				<CircularProgressBar ref={this.progressbar3} value={50} showProgressValue rightToLeft></CircularProgressBar>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

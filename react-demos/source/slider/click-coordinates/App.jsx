import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.x = React.createRef();
		this.y = React.createRef();
	}

	handleSliderClick(event) {
		this.x.current.innerHTML = event.pageX;
		this.y.current.innerHTML = event.pageY;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Slider id="slider" showTooltip orientation="horizontal"
					min="0" max="100" value="30" scalePosition="near" onClick={this.handleSliderClick.bind(this)}></Slider>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<div><strong>Coorinates:</strong> (<span ref={this.x} id="x"></span>, <span ref={this.y} id="y"></span>)</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

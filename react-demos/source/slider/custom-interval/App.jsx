import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.slider = React.createRef();
		this.slider2 = React.createRef();
		this.slider3 = React.createRef();
	}

	handleToggleCustomIntervalChange(event) {
		const checked = event.detail.value;

		this.slider.current.customInterval = checked;
		this.slider2.current.customInterval = checked;
		this.slider3.current.customInterval = checked;
	}

	handleToggleCoerceChange(event) {
		const checked = event.detail.value;

		this.slider.current.coerce = checked;
		this.slider2.current.coerce = checked;
		this.slider3.current.coerce = checked;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Slider ref={this.slider} id="slider1" orientation="horizontal" min="100" max="10000"
					value="1000" coerce customInterval customTicks={[200, 1000, 8000]}></Slider>
				<p>Slider with floating point scale:</p>
				<br />
				<Slider ref={this.slider2} id="slider2" orientation="horizontal" scaleType="integer"
					word-length="int64" min="-9223372036854775808" max="9223372036854775807"
					value="1000" coerce customInterval customTicks={[-9e18, 0, 1e18, 5e18]}></Slider>
				<p>Slider with integer scale:</p>
				<br />
				<Slider ref={this.slider3} id="slider3" orientation="horizontal" min="100"
					max="10000" logarithmic-scale value="1000" coerce customInterval customTicks={[100, 200, 1000, 8000, 10000]}></Slider>
				<p>Slider with logarithmic scale:</p>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<CheckBox id="toggleCustomInterval" checked onChange={this.handleToggleCustomIntervalChange.bind(this)}>Custom interval</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="toggleCoerce" checked onChange={this.handleToggleCoerceChange.bind(this)}>Coerce</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

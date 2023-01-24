import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {
	slider2LabelFormatFunction(value) {
		if (value.year() === 2018 && value.month() === 5 && value.day() === 17) {
			return '<div id="birthday">' + value.toString('MMM d, yyyy') + '<br/>★Peter\'s birthday★</div>';
		}
		return value.toString('MMM d, yyyy');
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Slider id="slider1" interval="5" orientation="vertical"
					scalePosition="near" showTooltip tooltipPosition="far" mode="date" dateLabelFormatString="d"
					min={new Date(2000, 0, 1)} max={new Date(2020, 0, 1)} value={new Date(2008, 10, 1)}></Slider>
				<br />
				<Slider id="slider2" labelFormatFunction={this.slider2LabelFormatFunction}
					scalePosition="near" showTooltip tooltipPosition="far" mode="date" dateLabelFormatString="MMM d, yyyy"
					min={new Date(2017, 0, 1)} max={new Date(2019, 0, 1)} value={new Date(2018, 0, 1)}
					customInterval customTicks={[new Date(2017, 0, 1), new Date(2018, 0, 1), new Date(2018, 4, 17), new Date(2019, 0, 1)]}></Slider>
				<br />
				<Slider id="slider3" interval="5" inverted orientation="vertical"
					scalePosition="near" showTooltip showUnit tooltipPosition="far" unit="μs"
					mode="date" dateLabelFormatString="uu" min="new smartUtilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 45)"
					max="new smartUtilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 347)" value="new smartUtilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 300)"></Slider>
				<br />
				<Slider id="slider4" rangeSlider coerce interval="1" scalePosition="far"
					showTooltip mode="date" dateLabelFormatString="MMM, yy" min={new Date(2018, 0, 1)}
					max={new Date(2018, 11, 1)} values={[new Date(2018, 1, 1), new Date(2018, 5, 1)]}></Slider>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

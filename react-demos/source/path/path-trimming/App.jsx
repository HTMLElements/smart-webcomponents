import React from "react";
import ReactDOM from "react-dom";
import { Path } from 'smart-webcomponents-react/path';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.path = React.createRef();
		this.path2 = React.createRef();
	}

	value="C:\\Users\\Inowotny\\Documents\\LabVIEW Projects\\PathControlPlay\\DesktopPath.gvi";

	updatePathControls(event, dimension) {
		const pathControls = [this.path.current, this.path2.current];

		for (let p = 0; p < pathControls.length; p++) {
			pathControls[p].nativeElement.style[dimension] = event.detail.value + 'px';
		}
	}

	handleChange(event) {
		this.updatePathControls(event, 'width');
	}

	handleChange2(event) {
		this.updatePathControls(event, 'height');
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Path ref={this.path} label="Path Control" value={this.value}></Path>
				<Path ref={this.path2} label="Path Wrap" wrap value={this.value}></Path>
				<div className="options">
					<div className="option">
						<h2>Slider to change Path's <b>Width</b></h2>
						<Slider id="hSlider" min={100} value={250} max={600} onChange={this.handleChange.bind(this)}></Slider>
					</div>
					<div className="option">
						<h2>Slider to change Path's <b>Height</b></h2>
						<Slider id="vSlider" orientation="vertical" min={30} value={30}
							max={100} scalePosition="far" onChange={this.handleChange2.bind(this)}></Slider>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

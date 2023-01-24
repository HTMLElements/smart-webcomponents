import React from "react";
import ReactDOM from "react-dom";
import { ScrollBar } from 'smart-webcomponents-react/scrollbar';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.mediaSlider = React.createRef();
		this.alarmSlider = React.createRef();
		this.volumeSlider = React.createRef();
		this.lowBatterySlider = React.createRef();
		this.powerSaverSlider = React.createRef();
		this.lowBatteryAlert = React.createRef();
		this.powerSaver = React.createRef();
	}

	setIcon(event) {
		let below = "",
			above = "",
			off = "";
		const slider = event.target;

		switch (slider) {
			case this.mediaSlider.current.nativeElement:
				below = '<i className="material-icons">&#xE04D;</i>';
				above = '<i className="material-icons">&#xE050;</i>';
				off = '<i className="material-icons">&#xE04F;</i>';
				break;
			case this.alarmSlider.current.nativeElement:
				below = above = '<i className="material-icons">&#xE855;</i>';
				off = '<i className="material-icons">&#xE857;</i>';
				break;
			case this.volumeSlider.current.nativeElement:
				below = '<i className="material-icons">&#xE7F5;</i>';
				above = '<i className="material-icons">&#xE7F4;</i>';
				off = '<i className="material-icons">&#xE7F6;</i>';
				break;
		}

		if (slider.value === slider.min) {
			slider.previousElementSibling.innerHTML = off;
		}
		else if (slider.value < slider.max / 2) {
			slider.previousElementSibling.innerHTML = below;
		}
		else {
			slider.previousElementSibling.innerHTML = above;
		}
	}

	setBatteryLevel(event) {
		const slider = event.target;

		if (slider === this.lowBatterySlider.current.nativeElement) {
			this.lowBatteryAlert.current.textContent = slider.value.toString();
		}
		else {
			this.powerSaver.current.textContent = slider.value.toString();
		}
	}

	init() {
		this.mediaSlider.current.nativeElement.addEventListener('change', this.setIcon.bind(this));
		this.alarmSlider.current.nativeElement.addEventListener('change', this.setIcon.bind(this));
		this.volumeSlider.current.nativeElement.addEventListener('change', this.setIcon.bind(this));
		this.lowBatterySlider.current.nativeElement.addEventListener('change', this.setBatteryLevel.bind(this));
		this.powerSaverSlider.current.nativeElement.addEventListener('change', this.setBatteryLevel.bind(this));
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<section>
					<div>
						<h2>Scrollbars let users to select values by moving the scrollbar thumb.</h2>
						<div className="module">
							<p>
								Scrollbars are ideal components for adjusting settings that reflect intensity levels, such as volume, brightness, or color saturation.
                    </p>
						</div>
					</div>
				</section>

				<section id="continuousSliders">
					<h2>Continuous scrollbar</h2>
					<div className="module">
						<p>
							Use continuous scrollbars for subjective settings that do not require a specific value for the user to make meaningful adjustments.
                </p>
					</div>

					<div className="module continuousSliderLight">
						<table>
							<tr>
								<td><p>Normal</p></td>
								<tr />
								<td><ScrollBar rightToLeft></ScrollBar></td>
								<tr />
								<td><ScrollBar rightToLeft max={100} value={50}></ScrollBar></td>
								<tr />
								<td><ScrollBar rightToLeft max={100} value={100}></ScrollBar></td>
							</tr>
							<tr>
								<td><p>Disabled</p></td>
								<tr />
								<td><ScrollBar rightToLeft disabled max={100}></ScrollBar></td>
								<tr />
								<td><ScrollBar rightToLeft disabled max={100} value={50}></ScrollBar></td>
								<tr />
								<td><ScrollBar rightToLeft disabled max={100} value={100}></ScrollBar></td>
							</tr>
						</table>
					</div>
				</section>

				<section id="verticalSliders">
					<h2>Orientation</h2>
					<div className="module">
						<p>jqxScrollBar can be horizontal or vertical depending on the orientation property.</p>
					</div>
					<div className="module">
						<div>
							<ScrollBar rightToLeft max={100} value={50}></ScrollBar>
							<br />
							<br />
							<ScrollBar rightToLeft orientation="vertical" max={100} value={75}></ScrollBar>
						</div>
						<br />
						<p>Vertical scrollbars</p>
					</div>

				</section>

				<section id="demoSliders">
					<h2>Demo</h2>
					<div className="module">
						<p>ScrollBars are controls that are used for adjusting values precisely.</p>
					</div>
					<div className="module media-controls">
						<div>
							<h2>Volumes</h2>
							<div>
								<h3>Media volume</h3>
								<div id="mediaControl" className="controls">
									<i className="material-icons">&#xE04D;</i>
									<ScrollBar rightToLeft id="mediaSlider" ref={this.mediaSlider} max={100} value={25}></ScrollBar>
								</div>
							</div>
							<div>
								<h3>Alarm volume</h3>
								<div id="alarmControl" className="controls">
									<i className="material-icons">&#xE855;</i>
									<ScrollBar rightToLeft id="alarmSlider" ref={this.alarmSlider} max={100} value={50}></ScrollBar>
								</div>
							</div>
							<div>
								<h3>Ring volume</h3>
								<div id="ringControl" className="controls">
									<i className="material-icons">&#xE7F4;</i>
									<ScrollBar rightToLeft id="volumeSlider" ref={this.volumeSlider} max={100} value={75}></ScrollBar>
								</div>
							</div>
						</div>
					</div>
					<div className="module power-controls">
						<div>
							<h2>Battery Saver Mode</h2>
							<div>
								<h3>Low battery alert on <b ref={this.lowBatteryAlert} id="lowBatteryAlert">15</b> %</h3>
								<div id="mediaControl" className="controls">
									<i className="material-icons">&#xE8B2;</i>
									<ScrollBar rightToLeft id="lowBatterySlider" ref={this.lowBatterySlider} max={100} value={15} scaleType="integer"></ScrollBar>
								</div>
							</div>
							<div>
								<h3>Power saver mode active on <b ref={this.powerSaver} id="powerSaver">50</b>%</h3>
								<div id="alarmControl" className="controls">
									<i className="material-icons">&#xE19C;</i>
									<ScrollBar rightToLeft id="powerSaverSlider" ref={this.powerSaverSlider} max={100} value={50} scaleType="integer"></ScrollBar>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

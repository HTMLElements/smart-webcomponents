import React from "react";
import ReactDOM from "react-dom";
import { ScrollBar } from 'smart-webcomponents-react/scrollbar';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.scrollbar = React.createRef();
		this.scrollbar2 = React.createRef();
		this.scrollbar3 = React.createRef();
		this.scrollbar4 = React.createRef();
		this.scrollbar5 = React.createRef();
		this.lowbatteryalert = React.createRef();
		this.powersaver = React.createRef();
	}

	setIcon(sliderName, event) {
		const that = this;
		let below = "",
			above = "",
			off = "",
			slider;

		switch (sliderName) {
			case 'mediaSlider':
				below = '<i className="material-icons">&#xE04D;</i>';
				above = '<i className="material-icons">&#xE050;</i>';
				off = '<i className="material-icons">&#xE04F;</i>';
				slider = that.scrollbar.current;
				break;
			case 'alarmSlider':
				below = above = '<i className="material-icons">&#xE855;</i>';
				off = '<i className="material-icons">&#xE857;</i>';
				slider = that.scrollbar2.current;
				break;
			case 'volumeSlider':
				below = '<i className="material-icons">&#xE7F5;</i>';
				above = '<i className="material-icons">&#xE7F4;</i>';
				off = '<i className="material-icons">&#xE7F6;</i>';
				slider = that.scrollbar3.current;
				break;
		}

		if (slider.value === slider.min) {
			slider.nativeElement.previousElementSibling.innerHTML = off;
		}
		else if (slider.value < slider.max / 2) {
			slider.nativeElement.previousElementSibling.innerHTML = below;
		}
		else {
			slider.nativeElement.previousElementSibling.innerHTML = above;
		}
	}

	setBatteryLevel(sliderName, event) {
		const that = this;
		const slider = (sliderName === 'lowBatterySlider' ? that.scrollbar4 : that.scrollbar5).current,
			lowBatterySlider = that.scrollbar4.current;

		if (slider === lowBatterySlider) {
			this.lowbatteryalert.current.textContent = slider.value.toString();
		}
		else {
			this.powersaver.current.textContent = slider.value.toString();
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<section>
					<div>
						<h2>Scrollbars let users to select values by moving the scrollbar thumb.</h2>
						<div className="module">
							<p>Scrollbars are ideal components for adjusting settings that reflect intensity
			                    levels, such as volume, brightness, or color saturation.</p>
						</div>
					</div>
				</section>
				<section id="continuousSliders">
					<h2>Continuous scrollbar</h2>
					<div className="module">
						<p>Use continuous scrollbars for subjective settings that do not require
			                a specific value for the user to make meaningful adjustments.</p>
					</div>
					<div className="module continuousSliderLight">
						<table>
							<tr>
								<td>
									<p>Normal</p>
								</td>
							</tr>
							<tr>
								<td>
									<ScrollBar ></ScrollBar>
								</td>
							</tr>
							<tr>
								<td>
									<ScrollBar max={100} value={50}></ScrollBar>
								</td>
							</tr>
							<tr>
								<td>
									<ScrollBar max={100} value={100}></ScrollBar>
								</td>
							</tr>
							<tr>
								<td>
									<p>Disabled</p>
								</td>
							</tr>
							<tr>
								<td>
									<ScrollBar disabled max={100}></ScrollBar>
								</td>
							</tr>
							<tr>
								<td>
									<ScrollBar disabled max={100} value={50}></ScrollBar>
								</td>
							</tr>
							<tr>
								<td>
									<ScrollBar disabled max={100} value={100}></ScrollBar>
								</td>
							</tr>
						</table>
					</div>
				</section>
				<section id="verticalSliders">
					<h2>Orientation</h2>
					<div className="module">
						<p>smartScrollBar can be horizontal or vertical depending on the orientation
			                property.</p>
					</div>
					<div className="module">
						<div>
							<ScrollBar max={100} value={50}></ScrollBar>
							<br />
							<br />
							<ScrollBar orientation="vertical" max={100} value={75}></ScrollBar>
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
								<div id="mediaControl" className="controls"> <i className="material-icons">&#xE04D;</i>
									<ScrollBar ref={this.scrollbar} id="mediaSlider" onChange={this.setIcon.bind(this, 'mediaSlider')}
										max={100} value={25}></ScrollBar>
								</div>
							</div>
							<div>
								<h3>Alarm volume</h3>
								<div id="alarmControl" className="controls"> <i className="material-icons">&#xE855;</i>
									<ScrollBar ref={this.scrollbar2} id="alarmSlider" onChange={this.setIcon.bind(this, 'alarmSlider')}
										max={100} value={50}></ScrollBar>
								</div>
							</div>
							<div>
								<h3>Ring volume</h3>
								<div id="ringControl" className="controls"> <i className="material-icons">&#xE7F4;</i>
									<ScrollBar ref={this.scrollbar3} id="volumeSlider" onChange={this.setIcon.bind(this, 'volumeSlider')}
										max={100} value={75}></ScrollBar>
								</div>
							</div>
						</div>
					</div>
					<div className="module power-controls">
						<div>
							<h2>Battery Saver Mode</h2>
							<div>
								<h3>Low battery alert on <b ref={this.lowbatteryalert}  id="lowBatteryAlert">15</b> %</h3>
								<div id="mediaControl" className="controls"> <i className="material-icons">&#xE8B2;</i>
									<ScrollBar ref={this.scrollbar4} id="lowBatterySlider" onChange={this.setBatteryLevel.bind(this, 'lowBatterySlider')}
										max={100} value={15} scaleType="integer"></ScrollBar>
								</div>
							</div>
							<div>
								<h3>Power saver mode active on <b ref={this.powersaver} id="powerSaver">50</b>%</h3>
								<div id="alarmControl" className="controls"> <i className="material-icons">&#xE19C;</i>
									<ScrollBar ref={this.scrollbar5} id="powerSaverSlider" onChange={this.setBatteryLevel.bind(this, 'powerSaverSlider')}
										max={100} value={50} scaleType="integer"></ScrollBar>
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

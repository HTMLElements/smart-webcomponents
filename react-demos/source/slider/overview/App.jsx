import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	setIcon() {
		let below = "",
			above = "",
			off = "";
		const slider = this;
		switch (slider.id) {
			case "mediaSlider":
				below = '<i className="material-icons">&#xE04D;</i>';
				above = '<i className="material-icons">&#xE050;</i>';
				off = '<i className="material-icons">&#xE04F;</i>';
				break;
			case "alarmSlider":
				below = above = '<i className="material-icons">&#xE855;</i>';
				off = '<i className="material-icons">&#xE857;</i>';
				break;
			case "volumeSlider":
				below = '<i className="material-icons">&#xE7F5;</i>';
				above = '<i className="material-icons">&#xE7F4;</i>';
				off = '<i className="material-icons">&#xE7F6;</i>';
				break;
		}

		if (slider.value === slider.min) {
			slider.previousElementSibling.innerHTML = off;
		} else if (slider.value < slider.max / 2) {
			slider.previousElementSibling.innerHTML = below;
		} else {
			slider.previousElementSibling.innerHTML = above;
		}
	}

	setBatteryLevel() {
		const slider = this;
		if (slider.id === "lowBatterySlider") {
			document.getElementById('lowBatteryAlert').textContent = slider.value;
		} else {
			document.getElementById('powerSaver').textContent = slider.value;
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="smart-demo-container">
					<div id="materialSliderContainer">
						<section>
							<div>
								<h2>Sliders let users select from a range of values by moving the slider thumb.</h2>
								<div className="module">
									<p>Sliders are ideal components for adjusting settings that reflect intensity
			                            levels, such as volume, brightness, or color saturation.</p>
									<p>Sliders may have icons on both ends of the bar that reflect the value
									intensity. Place the smallest value for the slider range on the left and
			                            the largest value on the right.</p>
								</div>
								<div className="module">
									<h3>Continuous sliders</h3>
									<p>Continuous sliders allow users to select a value along a subjective range.
									They do not require a specific value to make adjustments, although they
			                            may, in some instances, offer an editable numeric value.</p>
									<h3>Discrete sliders</h3>
									<p>Discrete sliders allow users to select a specific value from a range.</p>
								</div>
							</div>
						</section>
						<nav>
							<h2>Contents</h2>
							<ul>
								<li><a href="#continuousSliders">Continuous slider</a>
								</li>
								<li><a href="#discreteSliders">Discrete slider</a>
								</li>
								<li><a href="#scaleSliders">Scales</a>
								</li>
								<li><a href="#verticalSliders">Orientation</a>
								</li>
								<li><a href="#demoSliders">Demo</a>
								</li>
							</ul>
						</nav>
						<section id="continuousSliders">
							<h2>Continuous slider</h2>
							<div className="module">
								<p>Use continuous sliders for subjective settings that do not require a specific
			                        value for the user to make meaningful adjustments.</p>
							</div>
							<div className="module continuousSliderLight">
								<table>
									<tr>
										<td>
											<Slider scalePosition="none"></Slider>
										</td>
									</tr>
									<tr>
										<td>
											<Slider scalePosition="none" value={50}></Slider>
										</td>
									</tr>
									<tr>
										<td>
											<Slider scalePosition="none" value="100"></Slider>
										</td>
									</tr>
								</table>
							</div>
						</section>
						<section id="discreteSliders">
							<h2>Discrete slider</h2>
							<div className="module">
								<p>The discrete slider thumb snaps to evenly spaced tick marks along the
								slider rail. Use for objective settings that require specific values for
								the user to make meaningful adjustments. Each tick mark should change the
								setting to a level that’s discernible to the user. The values are predetermined
			                        and aren’t user-editable.</p>
								<p>The thumb label can be positioned on the near of the far side of the track
								by setting the thumbLabelPosition property to "near" or "far". Default
			                        value is "near".</p>
							</div>
							<div className="module">
								<h2>With a numeric value label</h2>
								<p>Use for settings for which users need to know the exact value of the setting.</p>
							</div>
							<div className="module discreteSliderLight">
								<table>
									<tr>
										<td>
											<Slider labelsVisibility="endPoints" interval="10" coerce
												ticksVisibility="major" showThumbLabel scaleType="integer" scalePosition="far"></Slider>
										</td>
									</tr>
									<tr>
										<td>
											<Slider labelsVisibility="endPoints" interval="10" coerce
												ticksVisibility="major" showThumbLabel scaleType="integer" scalePosition="far"
												value={50}></Slider>
										</td>
									</tr>
									<tr>
										<td>
											<Slider labelsVisibility="endPoints" interval="10" coerce
												ticksVisibility="major" showThumbLabel scaleType="integer" scalePosition="far"
												value="100"></Slider>
										</td>
									</tr>
								</table>
							</div>
						</section>
						<section id="scaleSliders">
							<h2>Scales</h2>
							<div className="module">
								<p>Continuous smartSlider with a scale.</p>
							</div>
							<div className="module continuousScaleSlider">
								<table>
									<tr>
										<td>
											<Slider scaleType="integer" scalePosition="near" ticks-position="scale"
												ticksVisibility="major"></Slider>
										</td>
									</tr>
									<tr>
										<td>
											<Slider scalePosition="both" scaleType="integer" ticks-position="track"
												ticksVisibility="major"></Slider>
										</td>
									</tr>
									<tr>
										<td>
											<Slider scaleType="integer" scalePosition="far" ticks-position="scale"
												ticksVisibility="major"></Slider>
										</td>
									</tr>
								</table>
								<p>Continuous slider with scale positions: near, both and far</p>
							</div>
							<div className="module">
								<p>Discrete smartSlider can have a scale on the track</p>
							</div>
							<div className="module discreteScaleSlider">
								<div>
									<Slider coerce interval="20" showThumbLabel scaleType="integer"
										scalePosition="both" ticksVisibility="major"></Slider>
								</div>
								<p>Discrete slider</p>
							</div>
							<div className="module">
								<p>smartSlider can have multiple thumbs</p>
							</div>
							<div className="module discreteScaleSlider">
								<div>
									<Slider range-slider scaleType="integer" scalePosition="both"
										ticksVisibility="major"></Slider>
								</div>
								<p>Range slider</p>
							</div>
						</section>
						<section id="verticalSliders">
							<h2>Orientation</h2>
							<div className="module">
								<p>Smart Slider can be horizontal or vertical depending on the orientation
			                        property.</p>
							</div>
							<div className="module">
								<div>
									<Slider orientation="vertical" scalePosition="none" value={50}></Slider>
									<Slider orientation="vertical" scalePosition="none"
										value={75} inverted></Slider>
								</div>
								<p>Vertical continuous slider / Vertical continuous slider inverted</p>
							</div>
							<div className="module">
								<div>
									<Slider coerce interval="20" orientation="vertical" showThumbLabel
										scaleType="integer" scalePosition="both" value={50}></Slider>
									<Slider coerce interval="20" orientation="vertical"
										showThumbLabel scaleType="integer" scalePosition="both" value={25}
										inverted></Slider>
								</div>
								<p>Vertical discrete slider / Vertical discrete slider inverted</p>
							</div>
						</section>
						<section id="demoSliders">
							<h2>Demo</h2>
							<div className="module">
								<p>Sliders are controls that are used for adjusting values precisely.</p>
							</div>
							<div className="module media-controls">
								<div>
									<h2>Volumes</h2>
									<div>
										<h3>Media volume</h3>
										<div id="mediaControl" className="controls"> <i className="material-icons">&#xE04D;</i>
											<Slider onChange={this.setIcon} id="mediaSlider"
												scalePosition="none" value={25}></Slider>
										</div>
									</div>
									<div>
										<h3>Alarm volume</h3>
										<div id="alarmControl" className="controls"> <i className="material-icons">&#xE855;</i>
											<Slider onChange={this.setIcon} id="alarmSlider"
												scalePosition="none" value={50}></Slider>
										</div>
									</div>
									<div>
										<h3>Ring volume</h3>
										<div id="ringControl" className="controls"> <i className="material-icons">&#xE7F4;</i>
											<Slider onChange={this.setIcon} id="volumeSlider"
												scalePosition="none" value={75}></Slider>
										</div>
									</div>
								</div>
							</div>
							<div className="module power-controls">
								<div>
									<h2>Battery Saver Mode</h2>
									<div>
										<h3>Low battery alert on <b id="lowBatteryAlert">15</b> %</h3>
										<div id="mediaControl" className="controls"> <i className="material-icons">&#xE8B2;</i>
											<Slider onChange={this.setBatteryLevel} id="lowBatterySlider"
												scalePosition="none" value="15" scaleType="integer" showThumbLabel></Slider>
										</div>
									</div>
									<div>
										<h3>Power saver mode active on <b id="powerSaver">50</b>%</h3>
										<div id="alarmControl" className="controls"> <i className="material-icons">&#xE19C;</i>
											<Slider onChange={this.setBatteryLevel} id="powerSaverSlider"
												scalePosition="none" value={50} scaleType="integer" showThumbLabel></Slider>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

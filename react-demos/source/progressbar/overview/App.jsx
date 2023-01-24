import React from "react";
import ReactDOM from "react-dom";
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';
import { ToggleButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	init() {
		const progressBars = document.getElementsByClassName('determinate');
		let hoverArea = document.getElementById('hover-area'),
			linearProgressBar1 = progressBars[0],
			linearProgressBar2 = progressBars[1],
			linearProgressBar3 = progressBars[2],
			circularProgressBar1 = progressBars[3],
			circularProgressBar2 = progressBars[2],
			mouseHoverArea = document.getElementsByClassName('page-refresh-progress')[0],
			uploadButton = document.getElementById('toggleUploadButton'),
			value, isPaused;
		mouseHoverArea.addEventListener('mouseenter', function () {
			document.getElementById('refreshing').classList.remove('smart-visibility-hidden');
		});
		mouseHoverArea.addEventListener('mouseleave', function () {
			document.getElementById('refreshing').classList.add('smart-visibility-hidden');
		});
		uploadButton.addEventListener('change', function (event) {
			let circularProgressBar1 = document.getElementsByClassName('uploading')[0];
			if (uploadButton.disabled || (circularProgressBar1.value > 0 && circularProgressBar1.value < circularProgressBar1.max)) {
				return;
			}
			if (event.detail.value) {
				circularProgressBar1.readonly = true;
				circularProgressBar1.$.addClass('start');
				let uploading = setInterval(function () {
					circularProgressBar1.value += 25;
					circularProgressBar2.value += 25;
					if (circularProgressBar1.value > circularProgressBar1.max) {
						clearInterval(uploading);
						circularProgressBar1.$.addClass('finish');
						circularProgressBar1.$.removeClass('start');
						setTimeout(function () {
							uploadButton.$.button.style.backgroundColor = '#F47B12';
							uploadButton.$.button.innerHTML = '<i className="material-icons">done</i>';
							circularProgressBar1.readonly = false;
							circularProgressBar1.$.removeClass('finish');
						}, 250);
					}
				}, 750);
			} else {
				circularProgressBar1.value = circularProgressBar1.min;
				uploadButton.$.button.style.backgroundColor = '';
				uploadButton.$.button.innerHTML = '<i className="material-icons">cloud_upload</i>';
			}
		});

		setInterval(function () {
			if (isPaused) {
				return;
			}
			value = Math.random() * 15;
			linearProgressBar1.value += value;
			linearProgressBar2.value += value;
			circularProgressBar1.value += value;
			circularProgressBar2.value += value;
			if (linearProgressBar1.value >= linearProgressBar1.max) {
				isPaused = true;
				linearProgressBar1.classList.add('finished');
				linearProgressBar2.classList.add('finished');
				circularProgressBar1.classList.add('finished');
				setTimeout(function () {
					linearProgressBar1.value = linearProgressBar1.min;
					linearProgressBar2.value = linearProgressBar2.min;
					circularProgressBar1.value = circularProgressBar1.min;
					linearProgressBar1.classList.remove('finished');
					linearProgressBar2.classList.remove('finished');
					circularProgressBar1.classList.remove('finished');
					isPaused = false;
				}, 1500);
			}
		}, 500);

	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="smart-demo-container">
					<section>
						<div>
							<h2>Progress and activity indicators are visual indications of an app loading content.</h2>
							<div className="module">
								<p>A single visual indicator should be used to represent each type of operation.
								For example, a refresh operation should display either a refresh bar or
			                        an activity circle, but not both.</p>
								<p>Additional button types include:</p>
								<p><strong>Determinate indicators</strong> display how long an operation will
			                        take.</p>
								<p><strong>Indeterminate indicators</strong> visualize an unspecified wait
			                        time.</p>
							</div>
							<div className="module">
								<h3>Types</h3>
								<p>Linear
			                        <br />Circular</p>
								<h3>Behavior</h3>
								<p>Loading content in phases
			                        <br />Loading additional content</p>
							</div>
						</div>
					</section>
					<section id="indicatorTypes">
						<h2>Types of indicators</h2>
						<div className="module">
							<p>When indicators are <strong>determinate</strong> they indicate how long
			                    an operation will take when the percentage complete is detectable.</p>
							<p>When indicators are <strong>indeterminate</strong> they request that the
			                    user wait while something finishes when it’s not necessary to indicate
			                    how long it will take.</p>
							<p>Both linear and circular progress indicators may be either determinate
			                    or indeterminate.</p>
						</div>
						<div className="module progress-bar-linear">
							<h2>Linear</h2>
							<p>A linear progress indicator should always fill from 0% to 100% and never
							decrease in value. It should be represented by bars on the edge of a header
			                    or sheet that appear and disappear.</p>
							<p>For <strong>multiple operations</strong> happening in sequence, use the
			                    indicator to represent the progress as a whole, and not each individual
			                    operation.</p>
						</div>
						<div className="module progress-bar-animations">
							<div>
								<h3>Determinate</h3>
								<ProgressBar  value={50} className="determinate"></ProgressBar>
								<h3>Indeterminate</h3>
								<ProgressBar  indeterminate className=""></ProgressBar>
							</div>
							<p>Linear progress indicators Light Theme</p>
						</div>
						<div className="module"></div>
						<div className="module progress-bar-behavior">
							<h2>Demo usage</h2>
						</div>
						<div className="module files-loading-progress">
							<div>
								<p>Getting your files</p>
								<ProgressBar  className="determinate"
									indeterminate inverted></ProgressBar>
							</div>
							<p>Loading content for the first time</p>
						</div>
						<div className="module page-loading-progress">
							<div>
								<ProgressBar  indeterminate></ProgressBar>
							</div>
							<p>Query indicator on a webpage</p>
						</div>
					</section>
					<section id="circularProgressBar">
						<div className="module">
							<h2>Circular</h2>
						</div>
						<div className="module progress-bar-animations">
							<div>
								<h3>Determinate</h3>
								<CircularProgressBar className="determinate"></CircularProgressBar>
								<h3>Indeterminate</h3>
								<CircularProgressBar indeterminate></CircularProgressBar>
							</div>
							<p>Circular progress indicators Light Theme</p>
						</div>
						<div className="module ">
							<div>
								<h3>Determinate</h3>
								<CircularProgressBar value={50} className="determinate"></CircularProgressBar>
								<h3>Indeterminate</h3>
								<CircularProgressBar indeterminate></CircularProgressBar>
							</div>
							<p>Circular progress indicators Dark Theme</p>
						</div>
						<div className="module progress-bar-behavior">
							<h2>Demo usage</h2>
						</div>
						<div className="module circular-loading-progress">
							<div>
								<CircularProgressBar className="uploading">
									<ToggleButton id="toggleUploadButton"><i className="material-icons">cloud_upload</i>
									</ToggleButton>
								</CircularProgressBar>
							</div>
							<p>A circular loader may be integrated with a button.</p>
						</div>
						<div className="module page-refresh-progress">
							<div>
								<CircularProgressBar id="refreshing" className="smart-visibility-hidden" indeterminate></CircularProgressBar>
							</div>
							<p>A circular loader may be used to load something on hover.</p>
						</div>
					</section>
				</div>
			</div >
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

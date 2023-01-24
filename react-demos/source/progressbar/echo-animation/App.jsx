import React from "react";
import ReactDOM from "react-dom";
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';

class App extends React.Component {

	init() {
		document.getElementsByClassName('smart-value-path')[0].setAttribute('filter', 'url(#blueGlow)');
		document.getElementsByClassName('smart-value')[0].setAttribute('filter', 'url(#mainGlow)');
		/* Needed for IE11 ! CSS Stroke has no support for IE11 */
		document.getElementsByClassName('smart-value-path')[0].setAttribute('stroke', 'url(#blueGrad)');
		document.getElementsByClassName('smart-value')[0].setAttribute('stroke', 'url(#outlineGrad)');

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<svg>
					<defs>
						<filter id="mainGlow" x="0" y="0" width="200%" height="200%">
							<feGaussianBlur className="mainGlowBlur" stdDeviation="14" result="coloredBlur"
							/>
							<feOffset dx="0" dy="0" result="offsetblur"></feOffset>
							<feFlood flood-color="#50FFFF" flood-opacity="1"></feFlood>
							<feComposite in2="offsetblur" operator="atop"></feComposite>
							<feMerge>
								<feMergeNode />
								<feMergeNode in="SourceGraphic"></feMergeNode>
							</feMerge>
						</filter>
						<filter id="blueGlow" x="0" y="0" width="200%" height="200%">
							<feGaussianBlur stdDeviation="5" result="coloredBlur" />
							<feOffset dx="0" dy="0" result="offsetblur"></feOffset>
							<feFlood flood-color="#2144FB" flood-opacity="1"></feFlood>
							<feComposite in2="offsetblur" operator="in"></feComposite>
							<feMerge>
								<feMergeNode />
								<feMergeNode in="SourceGraphic"></feMergeNode>
							</feMerge>
						</filter>
						<radialGradient id="outlineGrad" cx="10" cy="10" r="50" gradientUnits="userSpaceOnUse">
							<stop offset="0" stop-color="#FFF" />
							<stop offset="0.3" stop-color="#50FFFF" stop-opacity="1" />
							<stop offset="1" stop-opacity="0" />
						</radialGradient>
						<radialGradient id="blueGrad" cx="10" cy="10" r="350" gradientUnits="userSpaceOnUse">
							<stop offset="0" stop-color="#2144FB" />
							<stop offset="1" stop-opacity="0" />
						</radialGradient>
					</defs>
				</svg>
				<CircularProgressBar className="echo-animation"></CircularProgressBar>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

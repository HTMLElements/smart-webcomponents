import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tank } from 'smart-webcomponents-react/tank';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tank = React.createRef();
		this.scaleWidth = React.createRef();
		this.scaleHeight = React.createRef();
		this.trackWidth = React.createRef();
		this.trackHeight = React.createRef();
	}

	setLogAndUpdateSize(tank) {
		const scaleWidth = this.scaleWidth.current,
			scaleHeight = this.scaleHeight.current,
			trackWidth = this.trackWidth.current,
			trackHeight = this.trackHeight.current;
		if (tank.scalePosition === 'far') {
			scaleWidth.innerHTML = window.getComputedStyle(tank.nativeElement.getElementsByClassName('smart-scale')[1]).getPropertyValue('width');
			scaleHeight.innerHTML = window.getComputedStyle(tank.nativeElement.getElementsByClassName('smart-scale')[1]).getPropertyValue('height');
		} else {
			scaleWidth.innerHTML = window.getComputedStyle(tank.nativeElement.getElementsByClassName('smart-scale')[0]).getPropertyValue('width');
			scaleHeight.innerHTML = window.getComputedStyle(tank.nativeElement.getElementsByClassName('smart-scale')[0]).getPropertyValue('height');
		}
		trackWidth.innerHTML = window.getComputedStyle(tank.nativeElement.getElementsByClassName('smart-track')[0]).getPropertyValue('width');
		trackHeight.innerHTML = window.getComputedStyle(tank.nativeElement.getElementsByClassName('smart-track')[0]).getPropertyValue('height');

		tank.getOptimalSize().then(function (size) {
			tank.nativeElement.style.width = size.width + 'px';
			tank.nativeElement.style.height = size.height + 'px';
		});
	};

	handleMaxTwoMlnChange(event) {
		const tank = this.tank.current;

		if (event.detail.value) {
			tank.max = 2000000;
			this.setLogAndUpdateSize(tank);
		}
	}

	handleMaxTwoThousandChange(event) {
		const tank = this.tank.current;

		if (event.detail.value) {
			tank.max = 2000;
			this.setLogAndUpdateSize(tank);
		}
	}

	handleMaxTwentyChange(event) {
		const tank = this.tank.current;

		if (event.detail.value) {
			tank.max = 20;
			this.setLogAndUpdateSize(tank);
		}
	}

	handleMinTwoMlnChange(event) {
		const tank = this.tank.current;

		if (event.detail.value) {
			tank.min = -2000000;
			this.setLogAndUpdateSize(tank);
		}
	}

	handleMinTwoThousandChange(event) {
		const tank = this.tank.current;

		if (event.detail.value) {
			tank.min = -2000;
			this.setLogAndUpdateSize(tank);
		}
	}

	handleMinTwentyChange(event) {
		const tank = this.tank.current;

		if (event.detail.value) {
			tank.min = -20;
			this.setLogAndUpdateSize(tank);
		}
	}

	handleHorizontalOrientationChange(event) {
		const tank = this.tank.current;

		if (event.detail.value) {
			tank.orientation = 'horizontal';
			this.setLogAndUpdateSize(tank);
		}
	}

	handleVerticalOrientationChange(event) {
		const tank = this.tank.current;

		if (event.detail.value) {
			tank.orientation = 'vertical';
			this.setLogAndUpdateSize(tank);
		}
	}

	handleScaleNearChange(event) {
		const tank = this.tank.current;

		if (event.detail.value) {
			tank.scalePosition = 'near';
			this.setLogAndUpdateSize(tank);
		}
	}

	handleScaleFarChange(event) {
		const tank = this.tank.current;

		if (event.detail.value) {
			tank.scalePosition = 'far';
			this.setLogAndUpdateSize(tank);
		}
	}

	handleScaleBothChange(event) {
		const tank = this.tank.current;

		if (event.detail.value) {
			tank.scalePosition = 'both';
			this.setLogAndUpdateSize(tank);
		}
	}

	handleScaleNoneChange(event) {
		const tank = this.tank.current;

		if (event.detail.value) {
			tank.scalePosition = 'none';
			this.setLogAndUpdateSize(tank);
		}
	}

	handleTurnLabelsOnChange(event) {
		const tank = this.tank.current;

		if (event.detail.value) {
			tank.labelsVisibility = 'all';
			this.setLogAndUpdateSize(tank);
		}
	}

	handleTurnLabelsOffChange(event) {
		const tank = this.tank.current;

		if (event.detail.value) {
			tank.labelsVisibility = 'none';
			this.setLogAndUpdateSize(tank);
		}
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tank ref={this.tank} id="tank" orientation="vertical" min="-20" max="20"></Tank>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<p>Set Max:</p>
						<RadioButton groupName="max" id="maxTwoMln" onChange={this.handleMaxTwoMlnChange.bind(this)}>2 000 000</RadioButton>
						<RadioButton groupName="max"
							id="maxTwoThousand" onChange={this.handleMaxTwoThousandChange.bind(this)}>2 000</RadioButton>
						<RadioButton groupName="max" id="maxTwenty"
							checked onChange={this.handleMaxTwentyChange.bind(this)}>20</RadioButton>
					</div>
					<div className="option">
						<p>Set Min:</p>
						<RadioButton groupName="min" id="minTwoMln" onChange={this.handleMinTwoMlnChange.bind(this)}>-2 000 000</RadioButton>
						<RadioButton groupName="min"
							id="minTwoThousand" onChange={this.handleMinTwoThousandChange.bind(this)}>-2 000</RadioButton>
						<RadioButton groupName="min" id="minTwenty"
							checked onChange={this.handleMinTwentyChange.bind(this)}>-20</RadioButton>
					</div>
					<div className="option">
						<p>Set Scale Position:</p>
						<RadioButton groupName="scalePosition"
							id="scaleNear" checked onChange={this.handleScaleNearChange.bind(this)}>Near</RadioButton>
						<RadioButton groupName="scalePosition"
							id="scaleFar" onChange={this.handleScaleFarChange.bind(this)}>Far</RadioButton>
						<RadioButton groupName="scalePosition"
							id="scaleBoth" onChange={this.handleScaleBothChange.bind(this)}>Both</RadioButton>
						<RadioButton groupName="scalePosition"
							id="scaleNone" onChange={this.handleScaleNoneChange.bind(this)}>None</RadioButton>
					</div>
					<div className="option">
						<p>Change orientation:</p>
						<RadioButton groupName="orientation"
							id="horizontalOrientation" onChange={this.handleHorizontalOrientationChange.bind(this)}>Horizontal</RadioButton>
						<RadioButton groupName="orientation"
							id="verticalOrientation" checked onChange={this.handleVerticalOrientationChange.bind(this)}>Vertical</RadioButton>
					</div>
					<div className="option">
						<p>Show labels:</p>
						<RadioButton groupName="labelVisibility"
							id="turnLabelsOn" checked onChange={this.handleTurnLabelsOnChange.bind(this)}>On</RadioButton>
						<RadioButton groupName="labelVisibility"
							id="turnLabelsOff" onChange={this.handleTurnLabelsOffChange.bind(this)}>Off</RadioButton>
					</div>
					<div className="option">
						<div id="log">Scale width: <span ref={this.scaleWidth} id="scaleWidth"></span>
							<br />Scale height: <span ref={this.scaleHeight} id="scaleHeight"></span>
							<br />Track width: <span ref={this.trackWidth} id="trackWidth"></span>
							<br />Track height: <span ref={this.trackHeight} id="trackHeight"></span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { NumberInput } from 'smart-webcomponents-react/numberinput';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.scheduler = React.createRef();
	    this.intervalInput = React.createRef();
		this.shaderSwitch = React.createRef();
		this.indicatorSwitch = React.createRef();
		
		const today = new Date(),
		todayDate = today.getDate(),
		currentYear = today.getFullYear(),
		currentMonth = today.getMonth();
		
		this.data = [{
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
			backgroundColor: '#E67C73'
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
			backgroundColor: '#8E24AA'
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
			backgroundColor: '#039BE5'
		}];
	}
	
	
 	currentTimeIndicator = true;
	shadeUntilCurrentTime = true;
	view = 'day';
	views = ['day', 'week', 'month', 'timelineDay', 'timelineWeek', 'timelineMonth'];
	firstDayOfWeek = 1;
	
	componentDidMount() {
		this.scheduler.current.scrollToDate(new Date());
	}
	
	handleIntervalChange() {
		this.scheduler.current.currentTimeIndicatorInterval = parseInt(this.intervalInput.current.value);
	}

	handleShadeChange() {
		this.scheduler.current.shadeUntilCurrentTime = this.shaderSwitch.current.checked;
	}

	handleIndicatorChange() {
		this.scheduler.current.currentTimeIndicator = this.indicatorSwitch.current.checked;
	}

	render() {
		return (
			<div>
			    <Scheduler 
					view={this.view}
					views={this.views}
					currentTimeIndicator={this.currentTimeIndicator} 
					shadeUntilCurrentTime={this.shadeUntilCurrentTime} 
					dataSource={this.data} 
					ref={this.scheduler}
					firstDayOfWeek={this.firstDayOfWeek}>
				</Scheduler>
			    <div className="options">
			        <div className="option">
			             <h4>Current Time Indicator:</h4>
			            <SwitchButton ref={this.indicatorSwitch} onChange={this.handleIndicatorChange.bind(this)} checked></SwitchButton>
			        </div>
			        <div className="option">
			             <h4>Shade Untill Current Time:</h4>
			            <SwitchButton ref={this.shaderSwitch} onChange={this.handleShadeChange.bind(this)} id="shadeUntilCurrentTime" checked></SwitchButton>
			        </div>
			        <div className="option">
			             <h4>Current Time Indicator/Shader Update Interval:</h4>
			            <NumberInput ref={this.intervalInput} onChange={this.handleIntervalChange.bind(this)} value={1}
			            min={1}></NumberInput>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

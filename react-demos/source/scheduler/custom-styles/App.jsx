import React from "react";
import ReactDOM from "react-dom";
import { Input } from 'smart-webcomponents-react/input';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.scheduler = React.createRef();
		this.colorInput = React.createRef();
		this.colorInput2 = React.createRef();
		this.colorInput3 = React.createRef();
		this.colorInput4 = React.createRef();
		this.input = React.createRef();
		this.input2 = React.createRef();

		const today = new Date(),
			todayDate = today.getDate(),
			currentYear = today.getFullYear(),
			currentMonth = today.getMonth();

		this.data = [{
			label: 'Apply Marketing Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 3, 0, 0),
			backgroundColor: '#F9A825'
		}, {
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
			backgroundColor: '#FF3D00'
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
			backgroundColor: '#3F51B5'
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
			backgroundColor: '#616161'
		}];
	}

	view = 'week';

	views = ['day', 'week', 'month'];

	firstDayOfWeek = 1;

	hourStart = 7;

	hourEnd = 21;

	timelineDayScale = 'halfHour';

	init() {
		const that = this;

		that.scheduler.current.scrollToDate(new Date());

		document.querySelector('.options').addEventListener('change', function (event) {
			const target = event.target,
				scheduler = that.scheduler.current.nativeElement;

			if (target instanceof window.Smart.SwitchButton) {
				scheduler[target.id] = event.target.checked;
			}
			else if (target === that.input.current || target === that.input2.current) {
				let size, type = target.id;

				scheduler.classList.remove(`${type}-size-small`, `${type}-size-medium`, `${type}-size-large`);

				switch (target.value) {
					case '1':
						size = 'small';
						break;
					case '2':
						size = 'medium';
						break;
					default:
						size = 'large';
						break;
				}

				scheduler.classList.add(`${type}-size-${size}`);
			}
			else if (target === that.colorInput.current || target === that.colorInput2.current ||
				target === that.colorInput3.current || target === that.colorInput4.current) {
				const color = event.detail.value,
					type = target.id;

				switch (type) {
					case 'indicator':
						scheduler.style.setProperty('--smart-scheduler-current-time-indicator-background', color);
						return;
					case 'line-horizontal':
						scheduler.style.setProperty('--smart-scheduler-day-week-view-hour-color', color);
						return;
					case 'line-vertical':
						scheduler.style.setProperty('--smart-scheduler-day-week-view-vertical-line-color', color);
						return;
					case 'shader':
						scheduler.style.setProperty('--smart-scheduler-shader-background', color);
						return;
				}
			}
		});
	};


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler ref={this.scheduler} id="scheduler" dataSource={this.data}
					view={this.view}
					views={this.views}
					firstDayOfWeek={this.firstDayOfWeek}
					hourStart={this.hourStart}
					hourEnd={this.hourEnd}
					timelineDayScale={this.timelineDayScale}></Scheduler>
				<div className="options">
					<div className="option">
						<h4>Current Time Indicator Color:</h4>
						<smart-color-input ref={this.colorInput} dropDownButtonPosition="right" id="indicator" className="color-selector"
							value="#005c99"></smart-color-input>
					</div>
					<div className="option">
						<h4>Time Shade Color:</h4>
						<smart-color-input ref={this.colorInput2} dropDownButtonPosition="right" id="shader" className="color-selector"
							value="#f4e0e080"></smart-color-input>
					</div>
					<div className="option">
						<h4>Day/Week Horizontal Line Size:</h4>
						<Input ref={this.input} dropDownButtonPosition="right" id="line-horizontal"
							className="size-selector" dataSource={["1", "2", "5"]} value="1" readonly></Input>
					</div>
					<div className="option">
						<h4>Day/Week Vertical Line Size:</h4>
						<Input ref={this.input2} dropDownButtonPosition="right" id="line-vertical"
							className="size-selector" dataSource='["1","2","5"]' value="1" readonly></Input>
					</div>
					<div className="option">
						<h4>Day/Week Horizontal Line color:</h4>
						<smart-color-input ref={this.colorInput3} dropDownButtonPosition="right" id="line-horizontal"
							className="color-selector" value="#464646"></smart-color-input>
					</div>
					<div className="option">
						<h4>Day/Week Vertical Line color:</h4>
						<smart-color-input ref={this.colorInput4} dropDownButtonPosition="right" id="line-vertical"
							className="color-selector" value="#464646"></smart-color-input>
					</div>
					<div className="option">
						<h4>Show Time Ruler Ticks:</h4>
						<SwitchButton id="timeRulerTicks"></SwitchButton>
					</div>
					<div className="option">
						<h4>Show Current Time Indicator:</h4>
						<SwitchButton id="currentTimeIndicator"></SwitchButton>
					</div>
					<div className="option">
						<h4>Shade Until Current Time:</h4>
						<SwitchButton id="shadeUntilCurrentTime"></SwitchButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

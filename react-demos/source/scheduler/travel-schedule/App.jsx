import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(prop) {
		super(prop);

		this.scheduler = React.createRef();
		this.options = React.createRef();

		const today = new Date(),
			currentYear = today.getFullYear(),
			currentMonth = today.getMonth();

		this.data = function () {
			const data = [],
				airways = [{
					label: 'Airways 1',
					backgroundColor: '#e67c73b3',
				},
				{
					label: 'Airways 2',
					backgroundColor: '#0b8043b3'
				},
				{
					label: 'Airways 3',
					backgroundColor: '#7986cbb3'
				}
				];
			let monthDays = new Date();
			monthDays.setDate(1);
			monthDays.setDate(32);
			monthDays.setDate(0);
			monthDays = monthDays.getDate();
			for (let i = 1; i < monthDays + 1; i++) {
				for (let a = 0; a < airways.length; a++) {
					const airway = Object.assign({}, airways[a]),
						random = Math.round(Math.random() * 100),
						hourStart = random % 23,
						minutesStart = random % 59,
						hourEnd = Math.min(23, hourStart + random % 6),
						minutesEnd = Math.min(59, minutesStart + random % 29),
						price = '$' + (Math.random() * 1000).toFixed(2);
					data.push(Object.assign(airway, {
						dateStart: new Date(currentYear, currentMonth, i, hourStart, minutesStart),
						hourStart: `${hourStart}:${minutesStart < 10 ? minutesStart + '0' : minutesStart}`,
						hourEnd: `${hourEnd}:${minutesEnd < 10 ? minutesEnd + '0' : minutesEnd}`,
						dateEnd: new Date(currentYear, currentMonth, i, hourEnd, minutesEnd),
						price: price
					}));
				}
			}
			return data;
		}();

		this.lowestPriceEvent = null;
	}

	getLowestPriceEvent(airways) {
		const scheduler = this.scheduler.current,
			events = scheduler.events;

		let lowestPriceEvent;
		for (let i = 0; i < events.length; i++) {
			const d = this.data[i];

			if (airways && !airways.includes(d.label)) {
				continue;
			}

			if (!lowestPriceEvent) {
				lowestPriceEvent = d;
				continue;
			}

			const lowestPrice = parseFloat(lowestPriceEvent.price.slice(1)),
				currentPrice = parseFloat(d.price.slice(1));

			if (lowestPrice > currentPrice) {
				lowestPriceEvent = d;
			}
		}

		return lowestPriceEvent;
	}

	isLowestPriceEvent(eventObj) {
		const eventDateStart = eventObj.dateStart;
		let lowestPriceEvent = eventObj;

		//Find the lowest price airway for the Date

		for (let i = 0; i < this.data.length; i++) {
			const d = this.data[i],
				dateStart = d.dateStart;
			if (dateStart.getFullYear() === eventDateStart.getFullYear() &&
				dateStart.getMonth() === eventDateStart.getMonth() && dateStart.getDate() === eventDateStart.getDate()) {
				const lowestPrice = parseFloat(lowestPriceEvent.price.slice(1)),
					currentPrice = parseFloat(d.price.slice(1));
				if (lowestPrice > currentPrice) {
					lowestPriceEvent = d;
				}
			}
		}

		return lowestPriceEvent === eventObj
	}

	//Properties
	view = 'month';

	views = ['month'];

	disableWindowEditor = true;

	disableDrag = true;

	disableResize = true;

	headerTemplate = (header) => {
		header.innerHTML = '<b class="scheduler-title">The Travel Schedule For The Current Month</b>';
	};

	eventTemplate = 'eventTemplate';

	cellTemplate = (cell, date) => {
		if (!this.lowestPriceEvent) {
			this.lowestPriceEvent = this.getLowestPriceEvent();
		}

		let cellDate = date.getDate();
		const scheduler = this.scheduler.current;

		if (cellDate === 1) {
			cellDate = new Intl.DateTimeFormat(scheduler.locale, {
				month: 'short',
				day: scheduler.dayFormat
			}).format(date);
		}
		if (this.lowestPriceEvent) {
			const lowestPriceDate = this.lowestPriceEvent.dateStart;
			if (lowestPriceDate.getFullYear() === date.getFullYear() &&
				lowestPriceDate.getMonth() === date.getMonth() && lowestPriceDate.getDate() === date.getDate()) {
				cell.classList.add('best-price-cell');
			} else {
				cell.classList.remove('best-price-cell');
			}
		}
		cell.textContent = cellDate;
	};

	filterable = true;

	filter = (eventObj) => this.isLowestPriceEvent(eventObj);

	init() {
		const that = this,
			scheduler = this.scheduler.current,
			template = document.createElement('template');

		template.id = 'eventTemplate';
		template.innerHTML = `
			<div class="custom-event-content">
				<div class="price">{{price}}</div>
				<div class="details"><i>&#9992;</i>{{label}}</div>
				<div class="flight-hours">
					<div>Departure
						<div>{{hourStart}}</div>
					</div>
					<div>Arrival
						<div>{{hourEnd}}</div>
					</div>
				</div>
			</div>`;

		document.body.appendChild(template);

		scheduler.eventTemplate = template.id;

		const options = that.options.current;

		options.addEventListener('change', function (event) {
			const target = event.target,
				airways = Array.from(options.querySelectorAll('smart-check-box[checked]')).map((checkBox) => checkBox.textContent.trim());

			if (target instanceof window.Smart.CheckBox) {
				that.lowestPriceEvent = that.getLowestPriceEvent(airways);

				scheduler.filter = (eventObj) => {
					if (!airways.includes(eventObj.label)) {
						return false;
					}
					else {
						return that.isLowestPriceEvent(eventObj);
					}
				}
			}
		});

		scheduler.nativeElement.style.setProperty('--smart-scheduler-view-background', 'url("./../../../../src/images/cloud.png") no-repeat center/cover');
	};

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler ref={this.scheduler} id="scheduler" view={this.view} dataSource={this.data} views={this.views} disableWindowEditor={this.disableWindowEditor}
					disableDrag={this.disableDrag} disableResize={this.disableResize}
					headerTemplate={this.headerTemplate} eventTemplate={this.eventTemplate}
					cellTemplate={this.cellTemplate.bind(this)} filterable={this.filterable} filter={this.filter.bind(this)}></Scheduler>

				<div ref={this.options} className="options">
					<div className="option">
						<h4>Filter Airways:</h4>
						<CheckBox checked>Airways 1</CheckBox>
						<CheckBox checked>Airways 2</CheckBox>
						<CheckBox checked>Airways 3</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

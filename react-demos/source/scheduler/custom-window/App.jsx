import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.scheduler = React.createRef();

		const today = new Date();

		today.setHours(0, 0, 0, 0);

		this.data = [{
			label: 'World Climate Changes',
			dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3, 12, 0, 0),
			dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3, 15, 30, 0),
			allDay: true,
			image: '../../../src/images/carousel-square-7.jpg',
			speaker: ['Linda', 'Maria'],
			backgroundColor: '#F4511E'
		},
		{
			label: 'Technologies',
			dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 10, 0, 0),
			dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 12, 0, 0),
			allDay: true,
			image: '../../../src/images/smart-home-3148026_1920.jpg',
			speaker: ['Christopher', 'Nina'],
			backgroundColor: '#7986CB'
		},
		{
			label: 'Company Strategy',
			dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 0, 0),
			dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 22, 30, 0),
			allDay: true,
			image: '../../../src/images/digital-marketing-1725340_960_720.jpg',
			speaker: ['Michael', 'Ivan'],
			backgroundColor: '#039BE5'
		}, {
			label: 'Marketing',
			dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 0, 0),
			dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 22, 0, 0),
			image: '../../../src/images/store.jpg',
			speaker: ['Marian'],
			backgroundColor: '#8E24AA'
		}, {
			label: 'Workflow',
			dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0, 0),
			dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0, 0),
			image: '../../../src/images/office-1209640_960_720.jpg',
			speaker: ['Michelle', 'Christy', 'Nicole'],
			backgroundColor: '#616161'
		}, {
			label: 'Team Building',
			dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 10, 0, 0),
			dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 18, 30, 0),
			image: '../../../src/images/carousel-square-4.jpg',
			speaker: ['Natalie'],
			backgroundColor: '#3F51B5'
		}
		];
	}

	view = 'month';

	views = [];

	firstDayOfWeek = 1;

	windowCustomizationFunction(target, type, event) {
		//We want to constomize the event window, so if the window is type 'confirm' return
		if (type) {
			return;
		}

		const scheduler = this.scheduler.current,
			events = scheduler.events;

		target.footerPosition = 'none';
		target.label = 'Events';

		let container = target.querySelector('.custom-container');

		if (!container) {
			//Empty the window
			target.clear();
			container = document.createElement('div');
			container.classList.add('custom-container');
		}

		container.remove();
		container.innerHTML = '';

		scheduler.containsEvent(event).then(result => {
			if (!result) {
				//A cell is clicked. Show all events for the target cell
				for (let i = 0; i < events.length; i++) {
					const e = events[i];
					if (e.dateStart.getTime() >= event.dateStart.getTime() && e.dateEnd.getTime() <= event.dateEnd.getTime()) {
						container.appendChild(this.createCard(events[i]));
					}
				}
			}
			else {
				//Event is clicked. Show the event
				container.appendChild(this.createCard(event));
			}
			//Show placeholder if no events
			if (!container.innerHTML) {
				container.innerHTML = 'No events at this time';
			}
			target.appendChild(container);
		})
	}

	createCard(event) {
		const token = document.createElement('div'),
			scheduler = this.scheduler.current;

		token.classList.add('event-token');

		ReactDOM.render(<div>
			<div className="content-section">
				<label>From:</label>
				<div className="date-start"></div>
			</div>
			<div className="content-section">
				<label>To:</label>
				<div className="date-end"></div>
			</div>
			<div className="content-section">
				<label>Topic:</label>
				<div className="label"></div>
			</div>
			<div className="content-section">
				<label>Speaker:</label>
				<div className="speaker"></div>
			</div>
			<div className="content-section">
				<img className="image"></img>
			</div>
		</div>, token, function () {
			const dateTimeObject = {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric'
			};

			this.querySelector('.date-start').innerHTML = event.dateStart.toLocaleDateString(scheduler.locale, dateTimeObject);
			this.querySelector('.date-end').innerHTML = event.dateEnd.toLocaleDateString(scheduler.locale, dateTimeObject);
			this.querySelector('.label').innerHTML = event.label || '';
			this.querySelector('.speaker').innerHTML = event.speaker ? event.speaker.toString() : '';
			this.querySelector('.image').src = event.image || '';
		});

		return token;
	}

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<Scheduler ref={this.scheduler} id="scheduler" dataSource={this.data} view={this.view}
				views={this.views}
				firstDayOfWeek={this.firstDayOfWeek} windowCustomizationFunction={this.windowCustomizationFunction.bind(this)}></Scheduler>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

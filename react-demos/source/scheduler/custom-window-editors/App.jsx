import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';
import { ProgressBar } from 'smart-webcomponents-react/progressbar';
import { Rating } from 'smart-webcomponents-react/rating';

class App extends React.Component {
	constructor(props) {
		super(props);

		const today = new Date(),
			todayDate = today.getDate(),
			currentYear = today.getFullYear(),
			currentMonth = today.getMonth();

		this.data = [{
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
			rating: 4,
			progress: 35,
			backgroundColor: '#039BE5'
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
			rating: 2.5,
			progress: 75,
			backgroundColor: '#0B8043'
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
			rating: 5,
			progress: 50,
			backgroundColor: '#3F51B5'
		}];
	}

	view = 'week';

	firstDayOfWeek = 1;

	handleEditDialogOpen(event) {
		const editors = event.detail.editors;

		if (!editors) {
			return;
		}

		const schedulerEvent = event.detail.item,
			descriptionEditor = editors.description,
			dateStartEditor = editors.dateStart,
			dateEndEditor = editors.dateEnd,
			labelEditor = editors.label,
			allDayEditor = editors.allDay,
			repeatEditor = editors.repeat,
			editorsContainer = editors.description.parentElement;

		dateStartEditor.querySelector('.smart-element').disabled = true;
		dateEndEditor.querySelector('.smart-element').disabled = true;

		repeatEditor.classList.add('smart-hidden');
		allDayEditor.classList.add('smart-hidden');

		labelEditor.querySelector('.smart-element').placeholder = 'Enter a label...';
		descriptionEditor.querySelector('.smart-element').placeholder = 'Enter a description for the event..';

		//Rating Element
		let ratingElement = editorsContainer.querySelector('#eventRating');

		if (!ratingElement) {
			const elementContainer = document.createElement('div');

			ReactDOM.render(<div>
				<label>Rating: </label>
				<Rating id="eventRating"></Rating>
			</div>, elementContainer, function () {
				this.querySelector('#eventRating').value = schedulerEvent.rating || 1;
			});

			editorsContainer.appendChild(elementContainer);
		}
		else {
			ratingElement.value = schedulerEvent.rating || 1;
		}

		//ProgressBar
		let progressElement = editorsContainer.querySelector('#eventProgress');

		if (!progressElement) {
			const elementContainer = document.createElement('div');

			ReactDOM.render(<div>
				<label>Progress: </label>
				<ProgressBar id="eventProgress" showProgressValue></ProgressBar>
			</div>, elementContainer, function () {
				this.querySelector('#eventProgress').value = schedulerEvent.progress || 0;
			});

			editorsContainer.appendChild(elementContainer);
		}
		else {
			progressElement.value = schedulerEvent.progress || 0;
		}
	}

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="description">Scheduler Window Editors have been modifed. Double click on a scheduler
			        cell to open the window.</div>
				<Scheduler id="scheduler" dataSource={this.data} view={this.view}
					firstDayOfWeek={this.firstDayOfWeek} onEditDialogOpen={this.handleEditDialogOpen.bind(this)}></Scheduler>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();
	}

	durationUnit = 'hour';

	taskColumns = [{
		label: 'tasks',
		value: 'label',
		size: '60%'
	},
	{
		label: 'duration',
		value: 'duration',
		formatFunction: (date) => parseInt(date)
	}
	];

	yearFormat = '2-digit';

	monthFormat = 'short';

	dayFormat = '2-digit';

	treeSize = '35%';

	timelineHeaderFormatFunction(date, type) {
		const gantt = this.ganttchart.current;

		if (type === 'month') {
			return date.toLocaleDateString(gantt.locale, {
				month: 'long',
				year: 'numeric'
			});
		}

		if (type === 'year') {
			return date.toLocaleDateString(gantt.locale, {
				year: 'numeric'
			});
		}

		if (type === 'week') {
			const startDayOfWeek = new Date(date),
				endDateOfWeek = new Date(date);
			endDateOfWeek.setDate(date.getDate() + 6);

			return startDayOfWeek.toLocaleDateString(gantt.locale, {
				day: gantt.dayFormat,
				month: gantt.monthFormat,
				year: gantt.yearFormat
			}) + ' - ' +
				endDateOfWeek.toLocaleDateString(gantt.locale, {
					day: gantt.dayFormat,
					month: gantt.monthFormat,
					year: gantt.yearFormat
				});
		}

		if (type === 'day') {
			return date.toLocaleDateString(gantt.locale, {
				day: gantt.dayFormat
			});
		}

		if (type === 'hour') {
			return date.toLocaleDateString(gantt.locale, {
				hour: 'numeric'
			});
		}
	};

	dataSource = [{
		label: 'PRD & User-Stories',
		dateStart: '2021-01-10',
		dateEnd: '2021-02-10',
		class: 'product-team',
		type: 'task'
	},
	{
		label: 'Persona & Journey',
		dateStart: '2021-02-11',
		dateEnd: '2021-03-10',
		class: 'marketing-team',
		type: 'task'
	},
	{
		label: 'Architecture',
		dateStart: '2021-03-11',
		dateEnd: '2021-04-1',
		class: 'product-team',
		type: 'task'
	},
	{
		label: 'Prototyping',
		dateStart: '2021-04-02',
		dateEnd: '2021-05-01',
		class: 'dev-team',
		type: 'task'
	},
	{
		label: 'Design',
		dateStart: '2021-05-02',
		dateEnd: '2021-06-31',
		class: 'design-team',
		type: 'task'
	},
	{
		label: 'Development',
		dateStart: '2021-07-01',
		dateEnd: '2021-08-10',
		class: 'dev-team',
		type: 'task'
	},
	{
		label: 'Testing & QA',
		dateStart: '2021-08-11',
		dateEnd: '2021-09-10',
		class: 'qa-team',
		type: 'task'
	},
	{
		label: 'UAT Test',
		dateStart: '2021-09-12',
		dateEnd: '2021-10-01',
		class: 'product-team',
		type: 'task'
	},
	{
		label: 'Handover & Documentation',
		dateStart: '2021-10-02',
		dateEnd: '2021-11-01',
		class: 'marketing-team',
		type: 'task'
	},
	{
		label: 'Release',
		dateStart: '2021-11-01',
		dateEnd: '2021-12-31',
		class: 'release-team',
		type: 'task'
	}
	];

	messages = {
		'en': {
			'incorrectArgument': '{{elementType}}: Incorrect argument {{argumentName}} in method {{methodName}}.',
			'outOfBounds': '{{elementType}}: Out of bounds argument {{argumentName}} in method {{methodName}}.',
			'noId': 'smartGanttChart requires an id in order to save/load/clear a state.',
			'ok': 'Ok',
			'cancel': 'Cancel',
			'delete': 'Delete',
			'confirm': '{{componentName}} will be deleted permanently, <b>are you sure? </b>',
			'tasks': 'Tasks',
			'duration': 'Duration (hours)'
		},
		'de': {
			'incorrectArgument': '{{elementType}}: Falsches Argument {{argumentName}} in Methode {{methodName}}.',
			'outOfBounds': '{{elementType}}: Unbegrenztes Argument {{argumentName}} in Methode {{methodName}}.',
			'noId': 'smartGanttChart erfordert eine ID, um einen Zustand speichern / laden / löschen.',
			'ok': 'Ok',
			'cancel': 'Stornieren',
			'delete': 'Löschen',
			'confirm': '{{componentName}} wird dauerhaft gelöscht, <b>bist du sicher? </b>',
			'tasks': 'Aufgaben',
			'duration': 'Dauer (Std)'
		},
		'bg': {
			'incorrectArgument': '{{elementType}}: Невалиден аргумент {{argumentName}} в метод {{methodName}}.',
			'outOfBounds': '{{elementType}}: Аргументът {{argumentName}} в метод {{methodName}} е извън обхват.',
			'noId': 'smartGanttChart трябва да има id за да може да записва/зарежда/изчиства запазени състояния.',
			'ok': 'Ok',
			'cancel': 'Отказ',
			'delete': 'Изтрий',
			'confirm': '{{componentName}} ще бъде изтрит завинаги, <b>сигурни ли сте? </b>',
			'tasks': 'Задачи',
			'duration': 'Продължителност (часове)'
		},
		'fr': {
			'incorrectArgument': '{{elementType}}: Argument incorrect {{argumentName}} en méthode {{methodName}}.',
			'outOfBounds': '{{elementType}}: Argument hors limites {{argumentName}} en méthode {{methodName}}.',
			'noId': 'smartGanttChart nécessite un identifiant pour sauvegarder / charger / effacer un état.',
			'ok': 'D\'accord',
			'cancel': 'Annuler',
			'delete': 'Effacer',
			'confirm': '{{componentName}} sera supprimé définitivement, <b>êtes-vous sûr? </b>',
			'tasks': 'Les tâches',
			'duration': 'Durée (heures)'
		}
	};

	handleChange(event) {
		this.ganttchart.current.locale = event.detail.label;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">Custom <b>timelineHeaderFormatFunction</b> is applied to change a specific
			        format for the header of the Timeline.
			        <br />Click on the Drop Down List to select a different Locale.</div>
				<GanttChart ref={this.ganttchart} view="month" durationUnit={this.durationUnit} taskColumns={this.taskColumns} yearFormat={this.yearFormat}
					monthFormat={this.monthFormat} dayFormat={this.dayFormat} treeSize={this.treeSize} timelineHeaderFormatFunction={this.timelineHeaderFormatFunction.bind(this)}
					dataSource={this.dataSource} messages={this.messages}></GanttChart>
				<div className="options">
					<div className="option">
						<h3>Select locale:</h3>
						<DropDownList onChange={this.handleChange.bind(this)}>
							<ListItem selected>en</ListItem>
							<ListItem>de</ListItem>
							<ListItem>bg</ListItem>
							<ListItem>fr</ListItem>
						</DropDownList>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

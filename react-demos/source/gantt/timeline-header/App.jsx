import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();
		this.button4 = React.createRef();
		this.button5 = React.createRef();

		this.views = ['day', 'week', 'month', 'year'];
		this.stateId = 0;
		this.states = {};
	}

	dataSource = [{
		label: 'Summer Camp',
		dateStart: '2021-06-01',
		dateEnd: '2021-06-20',
		type: 'task',
		resources: [{
			id: 'jack',
			label: 'Jack',
			type: 'conditioner'
		}]
	},
	{
		label: 'Stadium Maintenance',
		dateStart: '2021-06-01',
		dateEnd: '2021-07-30',
		type: 'task',
		resources: [{
			id: 'silvio',
			label: 'Silvio',
			type: 'director'
		}],
		connections: [{
			target: 0,
			type: 0
		}]
	},
	{
		label: 'Managing',
		synchronized: true,
		expanded: true,
		disableResources: true,
		type: 'project',
		connections: [{
			target: 4,
			type: 2
		}],
		tasks: [{
			label: 'Contracts Handling',
			dateStart: '2021-06-01',
			dateEnd: '2021-08-01',
			resources: [{
				id: 'yana',
				label: 'Yana',
				type: 'manager'
			}],
			connections: [{
				target: 5,
				type: 0
			}]
		},
		{
			label: 'Fans and Merchandise',
			dateStart: '2021-07-01',
			dateEnd: '2021-08-31',
			resources: [{
				id: 'tina',
				label: 'Tina',
				type: 'manager'
			}]
		},
		{
			label: 'Transfers',
			dateStart: '2021-06-01',
			dateEnd: '2021-08-01',
			type: 'task',
			resources: [{
				id: 'michael',
				label: 'Michael',
				type: 'manager'
			},
			{
				id: 'antony',
				label: 'Antony',
				type: 'manager'
			}
			]
		},
		],
		resources: [{
			id: 'silvio',
			label: 'Silvio',
			type: 'owner'
		}]
	},
	{
		label: 'Medical Treatment',
		dateStart: '2021-06-21',
		dateEnd: '2022-05-26',
		type: 'task',
		resources: [{
			id: 'oliver',
			label: 'Oliver',
			type: 'medic'
		},
		{
			id: 'melany',
			label: 'Melany',
			type: 'medic'
		}
		],
		connections: [{
			target: 7,
			type: 0
		}]
	},
	{
		label: 'Pre-season Training',
		dateStart: '2021-06-21',
		dateEnd: '2021-07-31',
		type: 'task',
		resources: [{
			id: 'michael',
			label: 'Michael',
			type: 'coach'
		},
		{
			id: 'antony',
			label: 'Antony',
			type: 'assistent'
		}
		],
		connections: [{
			target: 8,
			type: 1
		}]
	},
	{
		label: 'Winter Season',
		dateStart: '2021-08-10',
		dateEnd: '2021-12-31',
		type: 'task',
		resources: [{
			id: 'gigi',
			label: 'Gianluigi',
			type: 'defender'
		}],
		connections: [{
			target: 9,
			type: 1
		}]
	},
	{
		label: 'Mid-season Vacation',
		dateStart: '2022-01-01',
		dateEnd: '2022-01-20',
		type: 'task',
		resources: [{
			id: 'gigi',
			label: 'Gianluigi',
			type: 'defender'
		}],
		connections: [{
			target: 10,
			type: 1
		}]
	},
	{
		label: 'Spring Season',
		dateStart: '2022-01-21',
		dateEnd: '2022-05-24',
		type: 'task',
		resources: [{
			id: 'gigi',
			label: 'Gianluigi',
			type: 'defender'
		}],
		connections: [{
			target: 11,
			type: 1
		}]
	},
	{
		label: 'End Of Season',
		dateStart: '2022-05-26',
		disableResources: true,
		type: 'milestone'
	}
	];

	dateStart = '2021-05-26';

	view = 'month';

	treeSize = '30%';

	taskColumns = [{
		label: 'Labels',
		value: 'label',
		//Column min size
		size: '40%',
		//Custom format function
		formatFunction: function (label) {
			if (label === 'Learn') {
				return ' <i className="material-icons">&#xE80C;</i>' + label;
			} else if (label === 'Work') {
				return ' <i className="material-icons">&#xE30A;</i>' + label;
			} else if (label === 'Travel') {
				return ' <i className="material-icons">&#xE53D;</i>' + label;
			} else if (label === 'Eat') {
				return ' <i className="material-icons">&#xE56C;</i>' + label;
			} else if (label === 'Shop') {
				return ' <i className="material-icons">&#xE25C;</i>' + label;
			} else if (label === 'Train') {
				return ' <i className="material-icons">&#xE52F;</i>' + label;
			} else {
				return label;
			}
		}
	},
	{
		label: 'Date Start',
		value: 'dateStart',
		//Custom format function
		formatFunction: (date) => {
			return new Date(date).toLocaleDateString(this.ganttchart.current.locale, {});
		},
		size: '25%'
	},
	{
		label: 'Date End',
		value: 'dateEnd',
		size: '25%'
	}
	];

	hideResourcePanel = true;

	handleStoreState() {
		const that = this;

		that.stateId++;
		that.ganttchart.current.getState().then(state => that.states[that.stateId] = state);
		that.button4.current.disabled = false;
	}

	handleReady() {
		const that = this,
			ganttChart = this.ganttchart.current;

		ReactDOM.render(<Button ref={this.button} id="zoomIn"><i className="material-icons">zoom_in</i></Button>, new DocumentFragment(), function () {
			document.getElementById('zoomingContainer').appendChild(this.nativeElement);
		});

		ReactDOM.render(<Button ref={this.button2} id="zoomOut"><i className="material-icons">zoom_out</i></Button>, new DocumentFragment(), function () {
			document.getElementById('zoomingContainer').appendChild(this.nativeElement);
		});

		ReactDOM.render(<Button id="view">Show Resource View</Button>, document.getElementById('viewButtonContainer'));

		ReactDOM.render(<Button ref={this.button4} id="undo" disabled><i className="material-icons">restore</i></Button>, new DocumentFragment(), function () {
			document.getElementById('actionsContainer').appendChild(this.nativeElement);
		});

		ReactDOM.render(<Button ref={this.button5} id="redo" disabled><i className="material-icons">update</i></Button>, new DocumentFragment(), function () {
			document.getElementById('actionsContainer').appendChild(this.nativeElement);
		});

		document.querySelector('.header-controls').addEventListener('click', function (event) {
			const button = event.target.closest('smart-button');

			if (!button) {
				return;
			}

			let targetView;

			switch (button.id) {
				case 'view':
					if (ganttChart.view === 'resource') {
						ganttChart.view = that.view;
					}
					else {
						that.view = ganttChart.view;
						ganttChart.view = 'resource';
					}

					break;
				case 'zoomIn':
				case 'zoomOut': {
					const isResourceView = ganttChart.view === 'resource',
						isZoomIn = button.id === 'zoomIn',
						maxValue = isZoomIn ? that.views[that.views.length - 1] : that.views[0];

					ganttChart.view = that.view = that.views[that.views.indexOf(that.view) + (isZoomIn ? -1 : 1) * 1] || maxValue;

					if (isResourceView) {
						ganttChart.view = 'resource';
					}

					(isZoomIn ? that.button2.current : that.button.current).disabled = false;

					if ((isZoomIn && that.view === 'day') || (!isZoomIn && that.view === 'year')) {
						button.disabled = true;
					}

					break;
				}
				case 'undo':
				case 'redo':
					if (button.id === 'undo') {
						that.stateId -= 1;

						if (that.states[that.stateId]) {
							ganttChart.loadState(that.states[that.stateId]);
							that.button5.current.disabled = false;
						}
					}
					else {
						that.stateId += 1;

						if (that.states[that.stateId]) {
							ganttChart.loadState(that.states[that.stateId]);
							that.button4.current.disabled = false;
						}
					}

					that.stateId = Math.max(0, Math.min(Object.keys(that.states).length - 1, that.stateId));
					return;
			}

			ganttChart.ensureVisible(0);
		});
	}

	init() {
		const ganttChart = this.ganttchart.current;
		const template = document.createElement('template');

		template.id = 'headerTemplate';
		template.innerHTML = `
		<div className="header-controls">
			<div className="zooming" id="zoomingContainer"></div>
			<div className="resource-view" id="viewButtonContainer"></div>
			<div className="actions" id="actionsContainer"></div>
		</div>`;

		document.body.appendChild(template);

		ganttChart.headerTemplate = template.id;

		this.view = ganttChart.view;

		ganttChart.getState().then(state => this.states[0] = state);
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<p> <b>Description:</b> Custom Task Columns with custom content.</p>
				<GanttChart
					ref={this.ganttchart} id="ganttChart" dataSource={this.dataSource} dateStart={this.dateStart} view={this.view}
					treeSize={this.treeSize} taskColumns={this.taskColumns} hideResourcePanel={this.hideResourcePanel}
					onChange={this.handleStoreState.bind(this)} onDragEnd={this.handleStoreState.bind(this)} onReady={this.handleReady.bind(this)}
					onResizeEnd={this.handleStoreState.bind(this)} onProgressChangeEnd={this.handleStoreState.bind(this)}
					onConnectionEnd={this.handleStoreState.bind(this)}></GanttChart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

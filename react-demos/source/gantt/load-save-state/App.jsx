import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();
	}

	treeSize = '50%';
	taskColumns = [{
		label: 'Tasks',
		value: 'label',
		size: '50%'
	},
	{
		label: 'Start Date',
		value: 'dateStart',
		size: '25%'
	},
	{
		label: 'End Date',
		value: 'dateEnd'
	}
	];

	reset() {
		this.ganttchart.current.dataSource = [{
			label: 'Clear Site',
			dateStart: '2021-01-1',
			dateEnd: '2021-01-10',
			connections: [{
				target: 1,
				type: 0
			}]
		},
		{
			label: 'Drainage & Foundation',
			dateStart: '2021-01-11',
			dateEnd: '2021-01-20',
			connections: [{
				target: 2,
				type: 1
			}]
		},
		{
			label: 'Ground Floor',
			dateStart: '2021-01-21',
			dateEnd: '2021-01-31',
			connections: [{
				target: 3,
				type: 1
			}]
		},
		{
			label: 'First Floor',
			dateStart: '2021-02-01',
			dateEnd: '2021-02-20',
			connections: [{
				target: 4,
				type: 1
			}]
		},
		{
			label: 'Roofing',
			dateStart: '2021-02-25',
			dateEnd: '2021-03-5',
			connections: [{
				target: 5,
				type: 1
			}]
		},
		{
			label: 'Connect Electricity',
			dateStart: '2021-03-6',
			dateEnd: '2021-03-15',
			connections: [{
				target: 6,
				type: 1
			}]
		},
		{
			label: 'Air Conditioning',
			dateStart: '2021-03-16',
			dateEnd: '2021-03-20',
			connections: [{
				target: 7,
				type: 1
			}]
		},
		{
			label: 'Interiors',
			dateStart: '2021-03-21',
			dateEnd: '2021-03-28',
			connections: [{
				target: 8,
				type: 1
			}]
		},
		{
			label: 'Racking',
			dateStart: '2021-03-31',
			dateEnd: '2021-04-10',
			connections: [{
				target: 9,
				type: 1
			}]
		},
		{
			label: 'Stock Shelving',
			dateStart: '2021-04-12',
			dateEnd: '2021-05-01'
		}
		];
	}

	handleSave() {
		this.ganttchart.current.saveState();
	}

	handleLoad() {
		this.ganttchart.current.loadState();
	}

	handleReset() {
		this.ganttchart.current.clearState();
		this.ganttchart.current.dataSource = [];
		this.reset();
	}

	init() {
		const gantt = this.ganttchart.current;

		gantt.loadState();

		//Check if a state has been loaded
		if (!gantt.dataSource.length) {
			this.reset();
		}
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description"> <b>Save State</b> Button saves the current state of the Chart to LocalStorage. <b>Load State</b> Button
			        reloads a previously saved state. <b>Reset</b> Button will erase any cache
			        and will restore the Chart to it's initial state. <pre><b>Previously saved states of the element are pre-loade on page refresh !</b></pre>
					<br
					/> <pre><b>Notice that the element must have an 'id' in order to save/load it's state.</b></pre>
				</div>

				<GanttChart ref={this.ganttchart} id="myGanttChart" view="week" treeSize={this.treeSize} taskColumns={this.taskColumns}></GanttChart>
				<div className="options">
					<div className="option">
						<Button id="saveState" onClick={this.handleSave.bind(this)}>Save State</Button>
					</div>
					<div className="option">
						<Button id="loadState" onClick={this.handleLoad.bind(this)}>Load State</Button>
					</div>
					<div className="option">
						<Button id="clearState" onClick={this.handleReset.bind(this)}>Reset</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

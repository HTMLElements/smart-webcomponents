import React from "react";
import ReactDOM from "react-dom";
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.log = React.createRef();
	}

	view = 'week';

	durationUnit = 'day';

	taskColumns = [{
		label: 'Name',
		value: 'label'
	}];

	dataSource = [{
		label: 'Task A',
		dateStart: '2021-01-15',
		duration: 10
	},
	{
		label: 'Task B',
		dateStart: '2021-01-14',
		duration: 6
	},
	{
		label: 'Task C',
		dateStart: '2021-01-16',
		duration: 4
	},
	{
		label: 'Task D',
		dateStart: '2021-01-13',
		duration: 12
	},
	{
		label: 'Task E',
		dateStart: '2021-01-18',
		duration: 7
	},
	{
		label: 'Task F',
		dateStart: '2021-01-15T00:00:00',
		duration: 15
	}
	];

	handleEvent(e) {
		this.log.current.innerHTML += e.type + '<br />';
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<p>GanttChart fires a number of events on different ocasions, like dragging,resizing,inserting/removing
					a connection between tasks or editing/removing/inserting a task/resource.
					Double click on a task in order to open the Editor Window. When an item
			            is edited an event is fired and displayed in the log.</p>
						Events fired in the demo:
        			<ul>
						<li>change - fired when selection is changed</li>
						<li>opening - fired when the editor window is opening</li>
						<li>open - fired when the editor window is opened</li>
						<li>closing - fired when the editor window is closing</li>
						<li>close - fired when the editor window is closed</li>
						<li>dragStart - fired when a task bar dragging is started</li>
						<li>dragEnd - fired when a task bar dragging is finished</li>
						<li>resizeStart - fired when a task bar resizing is started</li>
						<li>resizeEnd - fired when a task bar resizing is finished</li>
						<li>progressChangeStart - fired when task bar progress thumb dragging is started</li>
						<li>progressChangeEnd - fired when task bar progress thumb dragging is finished</li>
						<li>connetionStart - fired when task bar connecting is started</li>
						<li>connetionEnd - fired when task bar conneciting is finished.</li>
						<li>itemRemove - fired when a task/resource/connection is removed.</li>
						<li>itemInsert - fired when a task/resource/connection is inserted.</li>
						<li>itemUpdate - fired when a task/resource/connection is updated.</li>
						<li>itemClick - fired when a task bar/task tree item/resource tree item/connection is clicked.</li>
					</ul>
				</div>
				<GanttChart id="ganttChart" view={this.view} durationUnit={this.durationUnit} taskColumns={this.taskColumns} dataSource={this.dataSource}
					onChange={this.handleEvent.bind(this)} onOpening={this.handleEvent.bind(this)} onClosing={this.handleEvent.bind(this)}
					onOpen={this.handleEvent.bind(this)} onClose={this.handleEvent.bind(this)} onDragStart={this.handleEvent.bind(this)}
					onDragEnd={this.handleEvent.bind(this)} onResizeStart={this.handleEvent.bind(this)} onResizeEnd={this.handleEvent.bind(this)}
					onProgressChangeStart={this.handleEvent.bind(this)} onProgressChangeEnd={this.handleEvent.bind(this)}
					onConnectionStart={this.handleEvent.bind(this)} onConnectionEnd={this.handleEvent.bind(this)}
					onItemRemove={this.handleEvent.bind(this)} onItemInsert={this.handleEvent.bind(this)} onItemUpdate={this.handleEvent.bind(this)}
					onItemClick={this.handleEvent.bind(this)}></GanttChart>
				<div className="options">
					<h3>Events:</h3>
					<div className="option" id="eventLog">
						<div id="log" ref={this.log}></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

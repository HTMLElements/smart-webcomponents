import React from "react";
import ReactDOM from "react-dom";
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.scheduler = React.createRef();
		this.tree = React.createRef();

		const today = new Date(),
			todayDate = today.getDate(),
			currentYear = today.getFullYear(),
			currentMonth = today.getMonth();

		this.rooms = [{
			label: 'Room 406',
			value: 406,
			dateStart: new Date(currentYear, currentMonth, 26, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, 31, 0, 0),
			backgroundColor: '#D50000',
			color: '#ffffff'
		},
		{
			label: 'Room 107',
			value: 107,
			dateStart: new Date(currentYear, currentMonth, 23, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, 26, 0, 0),
			backgroundColor: '#FFD600',
			color: '#000000'
		},
		{
			label: 'Room 212',
			value: 212,
			dateStart: new Date(currentYear, currentMonth, todayDate - 2, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 3, 0, 0),
			backgroundColor: '#00C853',
			color: '#000000'
		},
		{
			label: 'Room 309',
			value: 309,
			dateStart: new Date(currentYear, currentMonth, 5, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, 8, 0, 0),
			backgroundColor: '#0091EA',
			color: '#ffffff'
		},
		{
			label: 'Room 111',
			selected: true,
			value: 111,
			backgroundColor: '#C51162',
			color: '#000000'
		},
		{
			label: 'Room 207',
			value: 207,
			backgroundColor: '#9CCC65',
			color: '#000000'
		},
		{
			label: 'Room 208',
			value: 208,
			backgroundColor: '#9E9E9E',
			color: '#000000'
		},
		{
			label: 'Room 305',
			value: 305,
			backgroundColor: '#FFD740',
			color: '#000000'
		},
		{
			label: 'Room 401',
			value: 401,
			backgroundColor: '#9C27B0',
			color: '#ffffff'
		},
		{
			label: 'Room 101',
			value: 101,
			backgroundColor: '#00897B',
			color: '#ffffff'
		},
		{
			label: 'Room 102',
			value: 102,
			backgroundColor: '#AB47BC',
			color: '#ffffff'
		},
		{
			label: 'Room 103',
			value: 103,
			backgroundColor: '#FDD835',
			color: '#000000'
		},
		{
			label: 'Room 204',
			value: 204,
			backgroundColor: '#40C4FF',
			color: '#000000'
		},
		{
			label: 'Room 302',
			value: 302,
			backgroundColor: '#1A237E',
			color: '#ffffff'
		},
		{
			label: 'Room 408',
			value: 408,
			backgroundColor: '#B2FF59',
			color: '#000000'
		},
		{
			label: 'Room 109',
			value: 109,
			backgroundColor: '#EA80FC',
			color: '#000000'
		}
		];

		this.data = this.rooms.filter((i, index) => index < 5);

		this.treeData = [{
			label: 'Hotel All Seasons',
			expanded: true,
			items: this.rooms.filter((i, index) => index > 4)
		}];
	}

	view = 'month';

	views = ['month', 'timelineMonth'];

	allowDrag = true;

	allowDrop = true;

	sorted = true;

	handleDragStart(event) {
		if (event.detail.item instanceof window.Smart.TreeItemsGroup) {
			event.preventDefault();
		}
	}

	handleDragEnd(event) {
		const item = event.detail.item,
			scheduler = this.scheduler.current,
			tree = this.tree.current,
			schedulerCell = event.detail.target.closest('.smart-scheduler-cell');

		if (!schedulerCell) {
			return;
		}

		scheduler.getCellDateRange(schedulerCell).then(cellDateRange => {
			const colorData = this.rooms.find(r => r.value === item.value);

			if (scheduler.nativeElement.contains(schedulerCell)) {
				scheduler.insertEvent({
					label: item.label,
					value: item.value,
					dateStart: cellDateRange.dateStart,
					dateEnd: cellDateRange.dateEnd,
					backgroundColor: colorData.backgroundColor,
					color: colorData.color
				});
				tree.removeItem(item);
			}
		})
	}

	handleSchedulerDragEnd(event) {
		const item = event.detail.item,
			scheduler = this.scheduler.current,
			tree = this.tree.current,
			target = event.detail.target;

		if (!tree.nativeElement.contains(event.detail.target) && tree !== target) {
			return;
		}

		scheduler.removeEvent(item);

		tree.insert({
			label: item.label,
			value: item.value
		}, '0.1');
	}

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="container">
					<Tree ref={this.tree} id="tree" dataSource={this.treeData} allowDrag={this.allowDrag}
						allowDrop={this.allowDrop}
						sorted={this.sorted} onDragStart={this.handleDragStart.bind(this)} onDragEnd={this.handleDragEnd.bind(this)}></Tree>
					<Scheduler ref={this.scheduler} id="scheduler" dataSource={this.data} view={this.view}
						views={this.views} onDragEnd={this.handleSchedulerDragEnd.bind(this)}></Scheduler>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

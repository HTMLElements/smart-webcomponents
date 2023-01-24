import React from "react";
import ReactDOM from "react-dom";
import { Kanban } from 'smart-webcomponents-react/kanban';

class App extends React.Component {
	dataPhaseOne = [{
		id: 0,
		status: 'done',
		text: 'Research'
	}, {
		id: 1,
		status: 'done',
		text: 'Displaying data from data source'
	}, {
		id: 2,
		status: 'done',
		text: 'Showing cover and title'
	}, {
		id: 3,
		status: 'done',
		text: 'Property validation'
	}, {
		id: 4,
		status: 'done',
		text: 'formatFunction and formatSettings'
	}, {
		id: 5,
		status: 'inProgress',
		text: 'Expand/collapse arrow'
	}, {
		id: 6,
		status: 'inProgress',
		text: 'Deferred scrolling'
	}, {
		id: 7,
		status: 'inProgress',
		text: 'Virtual scrolling'
	}, {
		id: 8,
		status: 'inProgress',
		text: 'Infinite scrolling'
	}, {
		id: 9,
		status: 'toDo',
		text: 'Visible/hidden columns'
	}, {
		id: 10,
		status: 'toDo',
		text: 'Editing'
	}];

	dataPhaseTwo = [{
		id: 11,
		status: 'toDo',
		text: 'Header'
	}, {
		id: 12,
		status: 'toDo',
		text: 'Public methods'
	}, {
		id: 13,
		status: 'toDo',
		text: 'Dragging with feedback'
	}, {
		id: 14,
		status: 'toDo',
		text: 'Vertical virtualization'
	}];

	columns = [{
		label: 'To do',
		dataField: 'toDo'
	},
	{
		label: 'In progress',
		dataField: 'inProgress'
	},
	{
		label: 'Done',
		dataField: 'done'
	}
	];

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<h2>Phase 1</h2>
				<Kanban id="phaseOneKanban"
					selectionMode="zeroOrManyExtended"
					addNewButton
					collapsible
					dataSource={this.dataPhaseOne}
					columns={this.columns}
				></Kanban>
				<h2>Phase 2</h2>
				<Kanban id="phaseTwoKanban"
					selectionMode="zeroOrManyExtended"
					addNewButton
					collapsible
					dataSource={this.dataPhaseTwo}
					columns={this.columns}
				></Kanban>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

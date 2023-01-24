import React from "react";
import ReactDOM from "react-dom";
import { Kanban } from 'smart-webcomponents-react/kanban';

class App extends React.Component {
	data = [{
		'ID': 0,
		'dataField': 'done',
		'info': 'Research',
		'tags': 'initial',
		'progress': 100,
		'assignee': 2,
		'start': new Date(2020, 11, 30),
		'due': new Date(2021, 0, 13),
		'feedback': [],
		'category': 'q1'
	}, {
		'ID': 1,
		'dataField': 'toDo',
		'info': 'Displaying data from data source',
		'tags': 'data',
		'priority': 'high',
		'progress': 0,
		'assignee': 3,
		'start': null,
		'due': new Date(2021, 4, 3),
		'feedback': [{
			'text': 'Nulla sodales faucibus accumsan.',
			'assignee': 2,
			'time': new Date(2020, 11, 17, 1, 55)
		}, {
			'text': 'Aenean ultrices maximus ex id scelerisque. Suspendisse cursus maximus nulla, sed ornare lectus aliquet eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
			'assignee': 3,
			'time': '2020-12-18T06:43:33.614Z'
		}, {
			'text': 'Nulla sodales faucibus accumsan.',
			'assignee': 0,
			'time': '2020-12-20T18:43:33.614Z'
		}],
		'category': 'q2'
	}, {
		'ID': 2,
		'dataField': 'testing',
		'info': 'Showing cover and title',
		'tags': 'visual, property',
		'priority': 'high',
		'progress': 78,
		'assignee': 2,
		'start': new Date(2020, 11, 14),
		'due': new Date(2021, 3, 5),
		'feedback': [{
			'text': 'Curabitur at accumsan metus, rhoncus porttitor ligula.',
			'assignee': 0,
			'time': new Date(2020, 11, 23, 3, 13)
		}, {
			'text': 'Donec vitae dapibus mauris, quis cursus nibh.',
			'assignee': 3,
			'time': new Date(2020, 11, 24, 18, 2)
		}],
		'category': 'q2'
	}, {
		'ID': 3,
		'dataField': 'done',
		'info': 'Property validation',
		'tags': 'property',
		'toDoList': [{
			'text': 'addNewButton',
			'completed': true
		}, {
			'text': 'allowDrag',
			'completed': true
		}, {
			'text': 'cardHeight',
			'completed': true
		}, {
			'text': 'cellOrientation',
			'completed': true
		}, {
			'text': 'collapsible',
			'completed': true
		}, {
			'text': 'columns',
			'completed': true
		}],
		'assignee': 1,
		'start': new Date(2020, 0, 1),
		'due': new Date(2021, 0, 1),
		'feedback': [],
		'category': 'q1'
	}, {
		'ID': 4,
		'dataField': 'inProgress',
		'info': 'formatFunction and formatSettings',
		'tags': 'data, property',
		'progress': 17,
		'assignee': 0,
		'start': new Date(2020, 11, 4),
		'due': new Date(2021, 2, 19),
		'feedback': [],
		'category': 'q1'
	}, {
		'ID': 5,
		'dataField': 'testing',
		'info': 'Expand/collapse arrow',
		'tags': 'visual',
		'progress': 90,
		'assignee': 3,
		'start': new Date(2020, 10, 1),
		'due': new Date(2021, 2, 1),
		'feedback': [],
		'category': 'q1'
	}, {
		'ID': 7,
		'dataField': 'testing',
		'info': 'Virtual scrolling',
		'tags': 'scrolling, data',
		'progress': 10,
		'assignee': 3,
		'start': new Date(2020, 10, 1),
		'due': new Date(2021, 5, 1),
		'feedback': [{
			'text': 'Curabitur at accumsan metus, rhoncus porttitor ligula.',
			'assignee': 0,
			'time': new Date(2020, 10, 7, 13, 6)
		}, {
			'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			'assignee': 0,
			'time': new Date(2021, 0, 1, 3, 15)
		}],
		'category': 'q2'
	}];

	addNewButton = true;
	collapsible = true;
	currentUser = 1;
	dataSource = this.data;
	dataSourceMap = {
		checklist: 'toDoList',
		comments: 'feedback',
		dueDate: 'due',
		id: 'ID',
		startDate: 'start',
		status: 'dataField',
		swimlane: 'category',
		tags: 'tags',
		text: 'info',
		userId: 'assignee'
	};
	editable = true;
	swimlanes = [{
		label: 'Q1',
		dataField: 'q1'
	},
	{
		label: 'Q2',
		dataField: 'q2',
		color: '#C90086'
	}
	];
	taskActions = true;
	taskComments = true;
	taskDue = true;
	taskProgress = true;
	users = [{
		id: 0,
		name: 'Andrew',
		image: 'https://www.htmlelements.com/demos/images/people/andrew.png'
	},
	{
		id: 1,
		name: 'Anne',
		image: 'https://www.htmlelements.com/demos/images/people/anne.png'
	},
	{
		id: 2,
		name: 'Janet',
		image: 'https://www.htmlelements.com/demos/images/people/janet.png'
	},
	{
		id: 3,
		name: 'John',
		image: 'https://www.htmlelements.com/demos/images/people/john.png'
	},
	{
		id: 4,
		name: 'Laura',
		image: 'https://www.htmlelements.com/demos/images/people/laura.png'
	}
	];
	columns = [{
		label: 'To do',
		dataField: 'toDo'
	},
	{
		label: 'In progress',
		dataField: 'inProgress'
	},
	{
		label: 'Testing',
		dataField: 'testing'
	},
	{
		label: 'Done',
		dataField: 'done',
		addNewButton: false
	}
	];

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases the <strong>dataSourceMap</strong> property of Kanban.
			        It determines the the relation (mapping) between the Kanban's default fields
			        (keywords) and the data fields from the data source. Only some of the default
			        mapping can be overwritten.</div>
				<Kanban ref="kanban" id="kanban"
					addNewButton={this.addNewButton}
					collapsible={this.collapsible}
					currentUser={this.currentUser}
					dataSource={this.dataSource}
					dataSourceMap={this.dataSourceMap}
					editable={this.editable}
					swimlanes={this.swimlanes}
					taskActions={this.taskActions}
					taskComments={this.taskComments}
					taskDue={this.taskDue}
					taskProgress={this.taskProgress}
					users={this.users}
					columns={this.columns}></Kanban>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

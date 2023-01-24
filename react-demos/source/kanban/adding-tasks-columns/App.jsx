import React from "react";
import ReactDOM from "react-dom";
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

class App extends React.Component {
	addNewButton = true;
	addNewColumn = true;
	collapsible = true;
	dataSource = GetKanbanData();
	taskActions = true;
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
				<div className="demo-description">This demo shows how to add tasks and columns to the Kanban dynamically
			        via its UI.</div>
				<Kanban id="kanban"
					addNewButton={this.addNewButton}
					addNewColumn={this.addNewColumn}
					collapsible={this.collapsible}
					dataSource={this.dataSource}
					taskActions={this.taskActions}
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

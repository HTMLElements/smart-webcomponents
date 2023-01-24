import React from "react";
import ReactDOM from "react-dom";
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

class App extends React.Component {
	dataSource = GetKanbanData();

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
				<Kanban id="kanban"
					collapsible
					dataSource={this.dataSource}
					headerPosition="top"
					users={this.users}
					columns={this.columns}
				></Kanban>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

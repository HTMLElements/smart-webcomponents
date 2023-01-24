import React from "react";
import ReactDOM from "react-dom";
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

class App extends React.Component {
	dataSource = GetKanbanData();
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
	]

	componentDidMount() {

	}
	
	columnWidth = 350;
	addNewColumnWidth = 150;

	render() {
		return (
			<div>
				<Kanban
					columnWidth={this.columnWidth}
					addNewColumnWidth={this.addNewColumnWidth}
					columns={this.columns}
					dataSource={this.dataSource}
					collapsible>
				</Kanban>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

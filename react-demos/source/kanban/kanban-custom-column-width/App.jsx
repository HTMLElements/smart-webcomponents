import React from "react";
import ReactDOM from "react-dom";
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

class App extends React.Component {
	dataSource = GetKanbanData();
	columns = [ 
		{ color: '#33B679', label: 'To do', width: 300, dataField: 'toDo', allowHide: false },
		{ color: '#8E24AA', label: 'In progress', width: 400, dataField: 'inProgress' },
		{ color: '#039BE5', label: 'Testing', width: 300, dataField: 'testing' },
		{ color: '#DD5347', label: 'Done', width: 200, dataField: 'done', addNewButton: false }
	]

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Kanban
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

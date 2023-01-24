import React from "react";
import ReactDOM from "react-dom";
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

class App extends React.Component {
	collapsible = true;
    editable = true;
    columnActions = true;
    columnEditMode = 'menu';
    columnFooter = true;
    columnSummary = true;
    columnColors = true;
    columnColorEntireSurface = true;
    dataSource = GetKanbanData();
    allowColumnEdit = true;
    allowColumnReorder = true;
    taskActions = true;
    taskDue = true;
    taskSubtasks = true;
    taskComments = true;
    currentUser = 0;
    taskProgress = true;
    users = [
        { id: 0, name: 'Andrew', image: '../../images/people/andrew.png' },
        { id: 1, name: 'Anne', image: '../../images/people/anne.png' },
        { id: 2, name: 'Janet', image: '../../images/people/janet.png' },
        { id: 3, name: 'John', image: '../../images/people/john.png' },
        { id: 4, name: 'Laura', image: '../../images/people/laura.png' }
    ];
    columns = [
        { color: '#33B679', label: 'To do', dataField: 'toDo', allowHide: false },
        { color: '#8E24AA', label: 'In progress', dataField: 'inProgress' },
        { color: '#039BE5', label: 'Testing', dataField: 'testing' },
        { color: '#DD5347', label: 'Done', dataField: 'done', addNewButton: false }
    ];

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div class="demo-description">Kanban Sub-tasks have three different rendering modes. Sub-tasks in this example are
				displayed in the task card.</div>
				<Kanban
					collapsible={this.collapsible} editable={this.editable} columnActions={this.columnActions} columnEditMode={this.columnEditMode}
					columnFooter={this.columnFooter} columnSummary={this.columnSummary} columnColors={this.columnColors}
					columnColorEntireSurface={this.columnColorEntireSurface} dataSource={this.dataSource} allowColumnEdit={this.allowColumnEdit}
					allowColumnReorder={this.allowColumnReorder} taskActions={this.taskActions} taskDue={this.taskDue} taskSubTasks={this.taskSubtasks}
					taskComments={this.taskComments} currentUser={this.currentUser} taskProgress={this.taskProgress} users={this.users}
					columns={this.columns}
				>
				</Kanban>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

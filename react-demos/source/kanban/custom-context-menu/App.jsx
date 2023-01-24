import React from "react";
import ReactDOM from "react-dom";
import { Kanban } from 'smart-webcomponents-react/kanban';
import { Menu, MenuItem } from 'smart-webcomponents-react/menu';
import { GetKanbanData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.kanban = React.createRef();
		this.menu = React.createRef();
		this.doneItem = React.createRef();
		this.removeAllItem = React.createRef();
	}

	collapsible = true;
	dataSource = GetKanbanData();
	editable = true;
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
	}];

	processedTaskData;
	columnElement;

	handleContextMenu(event) {
		// disable the Kanban's default context menu
		event.preventDefault();
		return false;
	}

	handleMouseUp(event) {
		const menu = this.menu.current;

		if (event.button !== 2) {
			menu.close();
			return;
		}

		const target = event.target,
			taskElement = target.closest('.smart-kanban-task');

		if (taskElement) {
			this.processedTaskData = taskElement.data;
			this.doneItem.current.disabled = this.processedTaskData.status === 'done';
			menu.nativeElement.classList.add('task');
			menu.nativeElement.classList.remove('column');
			menu.open(event.pageX + 5, event.pageY + 5);
			return;
		}

		this.columnElement = target.closest('.smart-kanban-column');

		if (this.columnElement) {
			this.removeAllItem.current.disabled = this.columnElement.querySelectorAll('.smart-kanban-task').length === 0;
			menu.nativeElement.classList.add('column');
			menu.nativeElement.classList.remove('task');
			menu.open(event.pageX + 5, event.pageY + 5);
			return;
		}

		menu.close();
	}

	handleItemClick(event) {
		const kanban = this.kanban.current,
			processedTaskData = this.processedTaskData;

		switch (event.detail.label) {
			case 'Edit':
				kanban.beginEdit(processedTaskData.id);
				break;
			case 'Copy':
				kanban.copyTask(processedTaskData.id);
				break;
			case 'Mark as "Done"':
				kanban.moveTask(processedTaskData.id, 'done');
				break;
			case 'Remove all tasks': {
				const allTaskElementsInColumn = Array.from(this.columnElement.querySelectorAll('.smart-kanban-task'));

				allTaskElementsInColumn.forEach((taskElement) => kanban.removeTask(taskElement));
				break;
			}
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Kanban id="kanban" ref={this.kanban}
					columns={this.columns}
					dataSource={this.dataSource}
					collapsible={this.collapsible}
					editable={this.editable}
					onContextMenu={this.handleContextMenu}
					onMouseUp={this.handleMouseUp.bind(this)}>
				</Kanban>
				<Menu id="menu" ref={this.menu} mode="dropDown" onItemClick={this.handleItemClick.bind(this)}>
					<MenuItem id="edit">Edit</MenuItem>
					<MenuItem id="copy">Copy</MenuItem>
					<MenuItem id="done" ref={this.doneItem}>Mark as "Done"</MenuItem>
					<MenuItem id="removeAll" ref={this.removeAllItem}>Remove all tasks</MenuItem>
				</Menu>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

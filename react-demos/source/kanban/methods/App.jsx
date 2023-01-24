import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Input } from 'smart-webcomponents-react/input';
import { Kanban } from 'smart-webcomponents-react/kanban';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';
import { GetKanbanData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.kanban = React.createRef();
		this.input = React.createRef();
		this.numerictextbox = React.createRef();
	}

	counter = 1;

	handleCollapseClick() {
		this.kanban.current.collapse(this.input.current.value);
	}

	handleExpandClick() {
		this.kanban.current.expand(this.input.current.value);
	}

	handleExpandAllClick() {
		this.kanban.current.expandAll();
	}

	handleBeginEditClick() {
		this.kanban.current.beginEdit(parseFloat(this.numerictextbox.current.value));
	}

	handleEndEditClick() {
		this.kanban.current.endEdit();
	}

	handleCancelEditClick() {
		this.kanban.current.cancelEdit();
	}

	handleAddTaskClick() {
		this.kanban.current.addTask({
			id: 15 + this.counter,
			text: 'New task ' + this.counter,
			status: this.input.current.value
		});

		this.counter++;
	}

	handleCopyTaskClick() {
		this.kanban.current.copyTask(parseFloat(this.numerictextbox.current.value));
	}

	handleMoveTaskClick() {
		this.kanban.current.moveTask(parseFloat(this.numerictextbox.current.value), this.input.current.value);
	}

	handleRemoveTaskClick() {
		this.kanban.current.removeTask(parseFloat(this.numerictextbox.current.value));
	}

	handleUpdateTaskClick() {
		this.kanban.current.updateTask(parseFloat(this.numerictextbox.current.value), {
			text: 'Updated task at ' + new Date().toLocaleTimeString()
		});
	}

	handleEnsureVisibleClick() {
		this.kanban.current.ensureVisible(parseFloat(this.numerictextbox.current.value));
	}

	dataSource = GetKanbanData();

	textTemplate(settings) {
		settings.template = `<span className="smart-badge smart-badge-dark">${settings.data.id}</span>${settings.text}`;
	}

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

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Kanban ref={this.kanban} id="kanban"
					collapsible
					dataSource={this.dataSource}
					editable
					textTemplate={this.textTemplate}
					columns={this.columns}
				></Kanban>
				<div className="options">Manupulate column with status:
			        <Input ref={this.input} id="status" dataSource={["toDo", "inProgress", "testing", "done"]}
						dropDownButtonPosition="right" value="toDo"></Input>
					<br />
					<br />
					<Button id="collapse" onClick={this.handleCollapseClick.bind(this)}>Collapse column</Button>
					<Button id="expand" onClick={this.handleExpandClick.bind(this)}>Expand column</Button>
					<Button id="expandAll" onClick={this.handleExpandAllClick.bind(this)}>Expand all columns</Button>
					<br />
					<br />Manipulate task with ID:
			        <NumericTextBox ref={this.numerictextbox} id="idSelector"
						inputFormat="integer" value="0"></NumericTextBox>
					<br />
					<Button id="beginEdit" onClick={this.handleBeginEditClick.bind(this)}>Begin edit</Button>
					<Button id="endEdit" onClick={this.handleEndEditClick.bind(this)}>End edit</Button>
					<Button id="cancelEdit" onClick={this.handleCancelEditClick.bind(this)}>Cancel edit</Button>
					<Button id="addTask" onClick={this.handleAddTaskClick.bind(this)}>Add task</Button>
					<Button id="copyTask" onClick={this.handleCopyTaskClick.bind(this)}>Copy task</Button>
					<Button id="moveTask" onClick={this.handleMoveTaskClick.bind(this)}>Move task</Button>
					<Button id="removeTask" onClick={this.handleRemoveTaskClick.bind(this)}>Remove task</Button>
					<Button id="updateTask" onClick={this.handleUpdateTaskClick.bind(this)}>Update task</Button>
					<Button id="ensureVisible" onClick={this.handleEnsureVisibleClick.bind(this)}>Ensure visible</Button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

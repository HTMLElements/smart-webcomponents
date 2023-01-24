import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.kanban = React.createRef();
		this.button2 = React.createRef();
	}

	handleSaveStateClick() {
		this.kanban.current.saveState();
		this.button2.current.disabled = false;
	}

	handleLoadStateClick() {
		this.kanban.current.loadState();
	}

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
	];

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Kanban ref={this.kanban} id="kanban"
					autoLoadState
					collapsible
					dataSource={this.dataSource}
					editable
					headerPosition="top"
					selectionMode="zeroOrManyExtended"
					columns={this.columns}
				></Kanban>
				<div className="options">
					<Button id="saveState" onClick={this.handleSaveStateClick.bind(this)}>Save state</Button>
					<br />
					<br />
					<Button ref={this.button2} id="loadState" disabled onClick={this.handleLoadStateClick.bind(this)}>Load state</Button>
					<br />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

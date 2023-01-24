import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.kanban = React.createRef();
	}

	handleCSVClick() {
		this.kanban.current.exportData('csv', 'kanban');
	}

	handleHTMLClick() {
		this.kanban.current.exportData('html', 'kanban');
	}

	handleJSONClick() {
		this.kanban.current.exportData('json', 'kanban');
	}

	handlePDFClick() {
		this.kanban.current.exportData('pdf', 'kanban');
	}

	handleTSVClick() {
		this.kanban.current.exportData('tsv', 'kanban');
	}

	handleXLSXClick() {
		this.kanban.current.exportData('xlsx', 'kanban');
	}

	handleXMLClick() {
		this.kanban.current.exportData('xml', 'kanban');
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
					columns={this.columns}
				></Kanban>
				<div className="options">
					<Button id="csv" onClick={this.handleCSVClick.bind(this)}>Export to CSV</Button>
					<Button id="html" onClick={this.handleHTMLClick.bind(this)}>Export to HTML</Button>
					<Button id="json" onClick={this.handleJSONClick.bind(this)}>Export to JSON</Button>
					<Button id="pdf" onClick={this.handlePDFClick.bind(this)}>Export to PDF</Button>
					<Button id="tsv" onClick={this.handleTSVClick.bind(this)}>Export to TSV</Button>
					<Button id="xlsx" onClick={this.handleXLSXClick.bind(this)}>Export to XLSX</Button>
					<Button id="xml" onClick={this.handleXMLClick.bind(this)}>Export to XML</Button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanHierarchicalData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.kanban = React.createRef();
	}

	dataSource = GetKanbanHierarchicalData();

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
		dataField: 'testing',
		orientation: 'horizontal',
		columns: [{
			label: 'Manual testing',
			dataField: 'manualTesting',
			columns: [{
				label: 'Desktop devices',
				dataField: 'desktop'
			},
			{
				label: 'Mobile devices',
				dataField: 'mobile'
			}
			]
		},
		{
			label: 'Unit testing',
			dataField: 'unitTesting'
		}
		]
	},
	{
		label: 'Done',
		dataField: 'done'
	}
	];

	init() {
		this.dataSource[3].status = 'desktop';
		this.dataSource[12].status = 'mobile';
		this.dataSource[13].status = 'unitTesting';
		this.dataSource[14].status = 'desktop';

		this.kanban.current.dataSource = this.dataSource;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Kanban ref={this.kanban} id="kanban"
					collapsible
					taskPosition="leaf"
					columns={this.columns}
				></Kanban>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

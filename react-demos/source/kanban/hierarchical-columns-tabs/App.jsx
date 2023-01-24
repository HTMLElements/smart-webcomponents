import React from "react";
import ReactDOM from "react-dom";
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanHierarchicalData } from './common/data';

class App extends React.Component {
	dataSource = GetKanbanHierarchicalData();

	columns = [{
		label: 'To do',
		dataField: 'toDo',
		collapsed: true
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
			selected: true,
			columns: [{
				label: 'Desktop devices',
				dataField: 'desktop'
			},
			{
				label: 'Mobile devices',
				dataField: 'mobile',
				selected: true
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

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Kanban id="kanban"
					collapsible
					dataSource={this.dataSource}
					hierarchy="tabs"
					columns={this.columns}
				></Kanban>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

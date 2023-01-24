import React from "react";
import ReactDOM from "react-dom";
import { GroupPanel } from 'smart-webcomponents-react/grouppanel';

class App extends React.Component {

	dataSource = [{
		label: 'Name',
		dataField: 'Name',
		dataType: 'string',
		sortDirection: 'descending',
		groupIndex: 1,
		icon: 'name'
	},
	{
		label: 'Age',
		dataField: 'Age',
		dataType: 'number',
		sortDirection: 'ascending',
		groupIndex: -1,
		icon: 'age'
	},
	{
		label: 'Married',
		dataField: 'Married',
		dataType: 'boolean',
		sortDirection: 'ascending',
		groupIndex: 2,
		icon: 'married'
	},
	{
		label: 'Arrival date',
		dataField: 'Arrival',
		dataType: 'date',
		sortDirection: 'descending',
		groupIndex: 3,
		icon: 'arrival'
	},
	{
		label: 'Departure date',
		dataField: 'Departure',
		dataType: 'date',
		sortDirection: 'ascending',
		groupIndex: -1,
		icon: 'departure'
	},
	{
		label: 'Luggage',
		dataField: 'Luggage',
		dataType: 'string',
		sortDirection: 'descending',
		groupIndex: -1,
		icon: 'luggage'
	}
	]

	componentDidMount() {

	}

	render() {
		return (<GroupPanel dataSource={this.dataSource} id="groupPanel"></GroupPanel>);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

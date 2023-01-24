import React from "react";
import ReactDOM from "react-dom";
import { ColumnPanel } from 'smart-webcomponents-react/columnpanel';

class App extends React.Component {

	dataSource = [{
		label: 'Name',
		dataField: 'Name',
		visible: true,
		icon: 'name'
	},
	{
		label: 'Age',
		dataField: 'Age',
		visible: false,
		icon: 'age'
	},
	{
		label: 'Married',
		dataField: 'Married',
		visible: true,
		icon: 'married'
	},
	{
		label: 'Arrival date',
		dataField: 'Arrival',
		icon: 'arrival'
	},
	{
		label: 'Departure date',
		dataField: 'Departure',
		icon: 'departure'
	},
	{
		label: 'Luggage',
		dataField: 'Luggage',
		icon: 'luggage'
	}]

	componentDidMount() {

	}

	render() {
		return (<ColumnPanel dataSource={this.dataSource} id="columnPanel"></ColumnPanel>);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

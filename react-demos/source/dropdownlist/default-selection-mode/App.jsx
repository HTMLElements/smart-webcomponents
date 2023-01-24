import React from "react";
import ReactDOM from "react-dom";
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {

	dataSource = [{
		label: "Andrew",
		value: 1,
		group: "A"
	},
	{
		label: "Natalia",
		value: 5,
		group: "B"
	},
	{
		label: "Michael",
		value: 4,
		group: "B"
	},
	{
		label: "Angel",
		value: 2,
		group: "A"
	},
	{
		label: "Hristo",
		value: 6,
		group: "C"
	},
	{
		label: "Peter",
		value: 3,
		group: "A"
	},
	{
		label: "Albert",
		value: 3,
		group: "A"
	},
	{
		label: "Boyko",
		value: 3,
		group: "A"
	},
	{
		label: "Dimitar",
		value: 3,
		group: "B"
	},
	{
		label: "George",
		value: 3,
		group: "C"
	}]


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DropDownList  grouped sorted dataSource={this.dataSource}></DropDownList>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

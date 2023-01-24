import React from "react";
import ReactDOM from "react-dom";
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';

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
	}
	];

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<p>Click on item, press Ctrl or Shift key and select another item for multiple
			        selection.</p>
				<ListBox  id="list" dataSource={this.dataSource}></ListBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

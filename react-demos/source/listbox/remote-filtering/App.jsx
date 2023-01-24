import React from "react";
import ReactDOM from "react-dom";
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.listbox = React.createRef();
	}

	init() {
		const listBox = this.listbox.current;

		listBox.remoteFilteringDetails = {
			url: '../misc/customers.txt',
			success: function (filterQuery, items) {
				setTimeout(function () {
					console.log(items);
					if (!filterQuery) {
						listBox.dataSource = [];
						listBox.displayLoadingIndicator = false;
						return;
					}
					for (let i = 0; i < items.length; i++) {
						if (items[i].City.toLowerCase().indexOf(filterQuery.toLowerCase()) !== 0) {
							items[i] = undefined;
						}
					}
					items = items.filter((item) => item !== undefined);
					listBox.displayMember = 'CompanyName';
					listBox.valueMember = 'CustomerID';
					listBox.displayLoadingIndicator = false;
					listBox.dataSource = items;
				}, 500);
			},
			error: function (error) {
				console.log('Error');
			}
		};

	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<h3>Remote Filtering</h3>
				<label>Enter a filtering string(e.x. london)</label>
				<br />
				<br />
				<ListBox ref={this.listbox} filterable id="listBox" filterInputPlaceholder="Enter:"></ListBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

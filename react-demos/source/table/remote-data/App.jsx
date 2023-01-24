import React from "react";
import ReactDOM from "react-dom";
import { Table } from 'smart-webcomponents-react/table';

class App extends React.Component {

	dataSource = new window.Smart.DataAdapter({
		virtualDataSourceLength: 500,
		virtualDataSourceCache: true,
		virtualDataSource: function (resultCallbackFunction, details) {
			fetch('https://randomuser.me/api/?results=' + (details.last - details.first))
				.then(response => response.json())
				.then(json => {
					const data = json.results.map((result) => {
						return {
							title: result.name.title,
							firstName: result.name.first,
							lastName: result.name.last,
							phone: result.phone
						};
					});
					resultCallbackFunction({
						dataSource: data,
						virtualDataSourceLength: 500
					});
				});
		},
		dataFields: [
			'title: string',
			'firstName: string',
			'lastName: string',
			'phone: string'
		]
	});

	paging = true;

	pageIndex = 0;

	pageSize = 10;

	columns = [{
		label: 'Title',
		dataField: 'title',
		dataType: 'string'
	},
	{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string'
	},
	{
		label: 'Phone',
		dataField: 'phone',
		dataType: 'string'
	}
	];

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases how to retrieve data through HTTP in Table.</div>
				<Table id="table" dataSource={this.dataSource} paging={this.paging} pageIndex={this.pageIndex}
					pageSize={this.pageSize} columns={this.columns} ></Table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

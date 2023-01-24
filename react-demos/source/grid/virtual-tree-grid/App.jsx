import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';

class App extends React.Component {
	GetData() {
		const data = new Array();
		const generatekey = function () {
			const S4 = function () {
				return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
			};
			return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
		};
		for (let i = 0; i < 100; i++) {
			const row = {};
			const tasks = ["Shopping", "Housewares", "Kitchen supplies", "Groceries", "Cleaning supplies", "Office supplies", "Remodeling", "Paint bedroom", "Paint wall", "Fitness", "Decorate living room",
				"Fix lights", "Fix front door", "Clean kitchen"
			];
			const firstNames = [
				"Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
			];
			const lastNames = [
				"Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
			];
			const taskindex = Math.floor(Math.random() * tasks.length);
			row["id"] = generatekey();
			row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
			row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
			row["name"] = row["firstname"] + " " + row["lastname"];
			row["task"] = tasks[taskindex];
			row["duration"] = 1 + Math.floor(Math.random() * 10);
			data.push(row);
		}
		return data;
	}

	dataSource = new window.Smart.DataAdapter({
		virtualDataSourceLength: 20,
		virtualDataSourceCache: true,
		virtualDataSourceOnExpand: (resultCallbackFunction, details) => {
			const that = this;

			setTimeout(function () {
				const data = that.GetData().slice(0, 3);
				if (details.row.level === 1) {
					for (let i = 0; i < data.length; i++) {
						data[i].leaf = true;
					}
					resultCallbackFunction({
						dataSource: data
					});
				} else {
					resultCallbackFunction({
						dataSource: data
					});
				}
			}, 300);
		},
		virtualDataSource: (resultCallbackFunction, details) => {
			const that = this;

			setTimeout(function () {
				resultCallbackFunction({
					dataSource: that.GetData().slice(0, 20)
				});
			}, 300);
		},
		id: 'id',
		dataFields: [
			'id: string',
			'name: string',
			'duration: number',
			'task: string'
		]
	});
	behavior = {
		columnResizeMode: 'growAndShrink'
	};
	columns = [{
		label: 'Task',
		dataField: "task",
		align: 'center',
		width: 300
	},
	{
		label: 'Person Name',
		dataField: "name",
		cellsAlign: 'center',
		align: 'center',
		width: 300
	},
	{
		label: 'Duration',
		dataField: "duration",
		cellsAlign: 'center',
		align: 'center',
		formatFunction: function (row, column, value) {
			const hour = value > 1 ? " hours" : " hour";
			return value + hour;
		}
	}
	];

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Virtual Tree Grid</h1>
					<p>This demo showcases the Virtual Mode feature of our Tree Grid mode, in
					which child rows are generated on demand when a parent row is expanded.
					The Tree Grid mode allows you to display hierarchical structures in the
			            Grid like a Treeview.</p>
				</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					behavior={this.behavior}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

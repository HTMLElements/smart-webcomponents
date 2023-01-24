import React from "react";
import ReactDOM from "react-dom";
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	treeDataSource = [{
		label: 'Cats',
		selected: true,
		items: [{
			label: 'Tiger',
			selected: true
		},
		{
			label: 'Lion'
		},
		{
			label: 'Jaguar'
		},
		{
			label: 'Leopard'
		},
		{
			label: 'Serval'
		},
		{
			label: 'Domestic cat'
		}
		]
	},
	{
		label: 'Dogs',
		items: [{
			label: 'Gray wolf'
		},
		{
			label: 'Ethiopian wolf',
			selected: true
		},
		{
			label: 'Arctic fox',
			selected: true
		},
		{
			label: 'Dingo'
		},
		{
			label: 'Domestic dog',
			selected: true
		}
		]
	}
	];

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tree id="tree" scrollMode="scrollbar" className="animation" selectionMode="oneOrMany"
					showLines dataSource={this.treeDataSource}></Tree>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

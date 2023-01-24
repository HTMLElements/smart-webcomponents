import React from "react";
import ReactDOM from "react-dom";
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tree = React.createRef();
	}

	handleExpanding(event) {
		if (event.detail.label === 'Group 2' && event.detail.children.length === 0) {
			const load = window.confirm('Do you wish to load items dynamically?');
			if (!load) {
				event.preventDefault();
			}
		}
	}

	handleExpand(event) {
		if (event.detail.children.length > 0) {
			return;
		}

		const tree = this.tree.current;

		tree.displayLoadingIndicator = true;
		setTimeout(function () {
			const newItem1 = document.createElement('smart-tree-item'),
				newItem2 = document.createElement('smart-tree-item');
			newItem1.label = 'Item ' + event.detail.path + '.0';
			newItem2.label = 'Item ' + event.detail.path + '.1';
			tree.addTo(newItem1, event.detail.item);
			tree.addTo(newItem2, event.detail.item);
			if (event.detail.item.level < 4) {
				const newItemsGroup = document.createElement('smart-tree-items-group');
				newItemsGroup.label = 'Group ' + event.detail.path + '.2';
				tree.addTo(newItemsGroup, event.detail.item);
			}
			tree.displayLoadingIndicator = false;
		}, 1000);
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tree ref={this.tree} id="tree" className="animation" showLines showRootLines onExpanding={this.handleExpanding} onExpand={this.handleExpand.bind(this)}>
					<TreeItemsGroup>Group 0</TreeItemsGroup>
					<TreeItem>Item 1</TreeItem>
					<TreeItemsGroup>Group 2</TreeItemsGroup>
					<TreeItemsGroup>Group 3
			            <TreeItem>Item 1.1</TreeItem>
					</TreeItemsGroup>
				</Tree>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

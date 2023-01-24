import React from "react";
import ReactDOM from "react-dom";
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	customSortingFunction(items, parentItem) {
		if (parentItem.label === 'Numbers') {
			items.sort(function (a, b) {
				return parseFloat(a.label) - parseFloat(b.label);
			});
		}
		else if (parentItem.label === 'Letters') {
			items.sort(function (a, b) {
				return parseFloat(b.value) - parseFloat(a.value);
			});
		}
		else {
			// apply default sorting
			items.sort(function (a, b) {
				return (a.label).localeCompare(b.label);
			});
		}
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tree ref="tree" id="tree1" filterable showLines showRootLines sortDirection="asc"
					sorted toggleElementPosition="near">
					<TreeItemsGroup expanded>Numbers
			            <TreeItem>2</TreeItem>
						<TreeItem>3</TreeItem>
						<TreeItem>1</TreeItem>
						<TreeItem>10</TreeItem>
						<TreeItem>210</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup expanded>Letters
			            <TreeItem value="1000">A</TreeItem>
						<TreeItem value="50">C</TreeItem>
						<TreeItem value="30000">D</TreeItem>
						<TreeItem value="2">B</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup expanded>Greek letters
			            <TreeItem>β</TreeItem>
						<TreeItem>δ</TreeItem>
						<TreeItem>α</TreeItem>
						<TreeItem>γ</TreeItem>
					</TreeItemsGroup>
				</Tree>
				<p>Sort direction: ascending</p>
				<br />
				<br />
				<Tree ref="tree2" id="tree2" filterable showLines showRootLines sortDirection="desc"
					sorted toggleElementPosition="near">
					<TreeItemsGroup expanded>Numbers
			            <TreeItem>2</TreeItem>
						<TreeItem>3</TreeItem>
						<TreeItem>1</TreeItem>
						<TreeItem>10</TreeItem>
						<TreeItem>210</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup expanded>Letters
			            <TreeItem value="1000">A</TreeItem>
						<TreeItem value="50">C</TreeItem>
						<TreeItem value="30000">D</TreeItem>
						<TreeItem value="2">B</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup expanded>Greek letters
			            <TreeItem>β</TreeItem>
						<TreeItem>δ</TreeItem>
						<TreeItem>α</TreeItem>
						<TreeItem>γ</TreeItem>
					</TreeItemsGroup>
				</Tree>
				<p>Sort direction: descending</p>
				<br />
				<br />
				<Tree ref="tree3" id="tree3" filterable showLines showRootLines sort={this.customSortingFunction}
					sorted toggleElementPosition="near">
					<TreeItemsGroup expanded>Numbers
			            <TreeItem>2</TreeItem>
						<TreeItem>3</TreeItem>
						<TreeItem>1</TreeItem>
						<TreeItem>10</TreeItem>
						<TreeItem>210</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup expanded>Letters
			            <TreeItem value="1000">A</TreeItem>
						<TreeItem value="50">C</TreeItem>
						<TreeItem value="30000">D</TreeItem>
						<TreeItem value="2">B</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup expanded>Greek letters
			            <TreeItem>β</TreeItem>
						<TreeItem>δ</TreeItem>
						<TreeItem>α</TreeItem>
						<TreeItem>γ</TreeItem>
					</TreeItemsGroup>
				</Tree>
				<p>Sorting via a custom function</p>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

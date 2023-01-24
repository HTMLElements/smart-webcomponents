import React from "react";
import ReactDOM from "react-dom";
import { MultilineTextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multilinetextbox';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	handleDragStart(event) {
		if (event.detail.items[0].label === 'Communities') {
			event.preventDefault();
		}
	}

	handleDragEnd(event) {
		if (event.detail.items[0].label === 'Financial services') {
			event.preventDefault();
			return;
		}
		if (!event.detail.container.closest('smart-tree')) {
			const textBox = event.detail.target.closest('smart-multiline-text-box');
			if (textBox) {
				textBox.value = event.detail.items[0].label;
			}
		}
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div> <em>Note: <strong>Communities</strong> cannot be dragged and <strong>Financial services</strong> cannot be dropped.</em> You
			    can drag items only from Tree A. Items in Tree B are not draggable.
				<br
				/>
				<br />
				<Tree id="tree1" className="animation" allowDrag allowDrop
					onDragStart={this.handleDragStart.bind(this)}
					onDragEnd={this.handleDragEnd.bind(this)}>
					<TreeItem>Home</TreeItem>
					<TreeItemsGroup expanded>Solutions
			            <TreeItem>Education</TreeItem>
						<TreeItem>Transportation</TreeItem>
					</TreeItemsGroup>
					<TreeItem style={{ color: 'red' }}>Communities</TreeItem>
					<TreeItem style={{ color: 'blue' }}>Financial services</TreeItem>
					<TreeItemsGroup>Support
			            <TreeItem>Support home</TreeItem>
						<TreeItem>Customer Service</TreeItem>
						<TreeItem>Knowledge base</TreeItem>
						<TreeItem>Books</TreeItem>
						<TreeItem>Training and certification</TreeItem>
						<TreeItem>Support programs</TreeItem>
						<TreeItem>Forums</TreeItem>
						<TreeItem>Documentation</TreeItem>
						<TreeItem>Updates</TreeItem>
					</TreeItemsGroup>
				</Tree>
				<Tree ref={this.tree2} id="tree2" allowDrop scrollMode="scrollButtons">
					<TreeItem>Products</TreeItem>
					<TreeItemsGroup expanded>Support
			            <TreeItem>Support home</TreeItem>
						<TreeItem>Customer Service</TreeItem>
					</TreeItemsGroup>
					<TreeItem>Knowledge base</TreeItem>
					<TreeItem>Forum</TreeItem>
				</Tree>
				<br />
				<br />
				<div style={{ clear: 'both' }}></div>
				<MultilineTextBox placeholder="Drop Tree items here..."></MultilineTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

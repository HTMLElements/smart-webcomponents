import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tree = React.createRef();
	}

	handleMoveUpClick() {
		const tree = this.tree.current;

		tree.getItem(tree.selectedIndexes[0]).then(function (selectedItem) {
			tree.moveUp(selectedItem);
		});
	}

	handleMoveDownClick() {
		const tree = this.tree.current;

		tree.getItem(tree.selectedIndexes[0]).then(function (selectedItem) {
			tree.moveDown(selectedItem);
		});
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tree ref={this.tree} id="tree" className="animation" showLines showRootLines>
					<TreeItemsGroup id="numbers" expanded>Numbers
			            <TreeItem>3</TreeItem>
						<TreeItem>2</TreeItem>
						<TreeItem id="one">1</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup id="letters" expanded>Letters
			            <TreeItem>A</TreeItem>
						<TreeItem>C</TreeItem>
						<TreeItem>Z</TreeItem>
						<TreeItem>B</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup id="greekLetters" expanded>Greek letters
			            <TreeItem>β</TreeItem>
						<TreeItem>δ</TreeItem>
						<TreeItem>α</TreeItem>
						<TreeItem>γ</TreeItem>
					</TreeItemsGroup>
				</Tree>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<Button id="moveUp" title="Move selected item up" onClick={this.handleMoveUpClick.bind(this)}>Up</Button>
						<Button id="moveDown" title="Move selected item down" onClick={this.handleMoveDownClick.bind(this)}>Down</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

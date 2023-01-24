import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tree = React.createRef();
	}

	handleAddBeforeClick(event) {
		const newItem = document.createElement('smart-tree-item');
		newItem.label = 'Y';
		this.tree.current.addBefore(newItem, 'zed');
		event.target.disabled = true;
	}

	handleAddAfterClick(event) {
		const newItem = document.createElement('smart-tree-item');
		newItem.innerHTML = '0';
		this.tree.current.addAfter(newItem, 'three');
		event.target.disabled = true;
	}

	handleAddToClick(event) {
		const newItem = document.createElement('smart-tree-item');
		newItem.innerHTML = 'D';
		this.tree.current.addTo(newItem, 'letters');
		event.target.disabled = true;
	}

	handleAddGroupToClick(event) {
		const newItemsGroup = document.createElement('smart-tree-items-group');
		newItemsGroup.innerHTML = 'Capital letters<smart-tree-item>Α</smart-tree-item><smart-tree-item>Γ</smart-tree-item><smart-tree-item>Δ</smart-tree-item><smart-tree-item>Σ</smart-tree-item><smart-tree-item>Β</smart-tree-item>';
		newItemsGroup.expanded = true;
		this.tree.current.addTo(newItemsGroup, 'greekLetters');
		event.target.disabled = true;
	}

	handleRemoveItemClick(event) {
		this.tree.current.removeItem('one');
		event.target.disabled = true;
	}

	handleSortedChange(event) {
		this.tree.current.sorted = event.detail.value;
	}

	handleAutoSortChange(event) {
		this.tree.current.autoSort = event.detail.value;
	}


	init() {
		function handleSwipe(event) {
			const originalTarget = event.originalEvent.target,
				closestItem = originalTarget.closest('smart-tree-item') || originalTarget.closest('smart-tree-items-group');
			if (closestItem) {
				const remove = window.confirm('Do you wish to remove item "' + closestItem.label + '"?');
				if (remove) {
					tree.removeItem(closestItem);
				}
			}
		}

		const tree = this.tree.current;
		tree.nativeElement.addEventListener('swipeleft', function (event) {
			handleSwipe(event);
		});
		tree.nativeElement.addEventListener('swiperight', function (event) {
			handleSwipe(event);
		});
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Tree ref={this.tree} id="tree" filterable filterInputPlaceholder="Filter query..."
					filterMode="contains" showLines showRootLines toggleElementPosition="near">
					<TreeItemsGroup id="numbers" expanded>Numbers
			            <TreeItem id="three">3</TreeItem>
						<TreeItem>2</TreeItem>
						<TreeItem id="one">1</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup id="letters" expanded>Letters
			            <TreeItem>A</TreeItem>
						<TreeItem>C</TreeItem>
						<TreeItem id="zed">Z</TreeItem>
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
					<Button ref="button" id="addBefore" className="demoButton" onClick={this.handleAddBeforeClick.bind(this)}>Add before "Z"</Button>
					<br />
					<br />
					<Button ref="button2" id="addAfter" className="demoButton" onClick={this.handleAddAfterClick.bind(this)}>Add after "3"</Button>
					<br />
					<br />
					<Button ref="button3" id="addTo" className="demoButton" onClick={this.handleAddToClick.bind(this)}>Add to "Letters"</Button>
					<br />
					<br />
					<Button ref="button4" id="addGroupTo" className="demoButton" onClick={this.handleAddGroupToClick.bind(this)}>Add to
			            <br />"Greek letters"</Button>
					<br />
					<br />
					<Button ref="button5" id="removeItem" className="demoButton" onClick={this.handleRemoveItemClick.bind(this)}>Remove "1"</Button>
					<br />
					<br />
					<CheckBox ref="checkbox" id="sorted" onChange={this.handleSortedChange.bind(this)}>Sorted</CheckBox>
					<br />
					<br />
					<CheckBox ref="checkbox2" id="autoSort" checked onChange={this.handleAutoSortChange.bind(this)}>Auto sort</CheckBox>
					<br />	<em>Note: Items can also be removed by swiping left or right.</em>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

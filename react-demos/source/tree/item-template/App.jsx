import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tree = React.createRef();
	}

	handleClick(event) {
		const target = event.target;
		const button = target.closest('smart-button');
		if (!button) {
			return;
		}
		const input = button.previousElementSibling,
			editorItem = button.closest('smart-tree-item'),
			treeItemsGroup = button.closest('smart-tree-items-group');
		if (input.value) {
			const newItem = document.createElement('smart-tree-item');
			newItem.innerHTML = input.value;
			this.tree.current.addBefore(newItem, editorItem);
			input.value = '';
		}
	}

	init() {
		const tree = this.tree.current;

		function handleSwipe(event) {
			const originalTarget = event.originalEvent.target,
				closestItem = originalTarget.closest('smart-tree-item') || originalTarget.closest('smart-tree-items-group');
			if (closestItem && closestItem.level > 1 && closestItem.label !== 'editorTemplate') {
				const remove = window.confirm('Do you wish to remove item "' + closestItem.label + '"?');
				if (remove) {
					tree.removeItem(closestItem);
				}
			}
		}

		tree.nativeElement.addEventListener('swipeleft', function (event) {
			handleSwipe(event);
		});
		tree.nativeElement.addEventListener('swiperight', function (event) {
			handleSwipe(event);
		});

		const editorTemplate = document.createElement('template');

		editorTemplate.id = 'editorTemplate';
		editorTemplate.innerHTML = `<input className="tree-input" placeholder="New item..." />
<smart-button ref="button" className="btn primary" title="Add item">+</smart-button>`;
		document.body.appendChild(editorTemplate);

		this.tree.current.dataSource = [
			{
				label: 'Groceries',
				expanded: true,
				items: [{
					label: 'Bread'
				},
				{
					label: 'Milk'
				},
				{
					label: 'Potatoes'
				},
				{
					label: 'editorTemplate'
				}]
			},
			{
				label: 'To do',
				expanded: true,
				items: [{
					label: 'Check car'
				},
				{
					label: 'Attend board meeting'
				},
				{
					label: 'Take kids from school'
				},
				{
					label: 'Change light bulb'
				},
				{
					label: 'editorTemplate'
				}]
			}
		];
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div> <em>Note: Sub-items can be removed by swiping left or right and can be edited by double-clicking or pressing F2.</em>
				<br />
				<br />
				<Tree ref={this.tree} id="tree" editable showLines showRootLines toggleElementPosition="near" onClick={this.handleClick.bind(this)}></Tree>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

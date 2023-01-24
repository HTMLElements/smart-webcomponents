import React from "react";
import ReactDOM from "react-dom";
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownbutton = React.createRef();
		this.tree = React.createRef();
	}

	handleChange(event) {
		this.dropdownbutton.current.placeholder = event.detail.item.label;
	}

	handleReady() {
		const dropDownButton = this.dropdownbutton.current,
			tree = this.tree.current.nativeElement;

		//Get the label of the selected tree item
		dropDownButton.placeholder = tree.querySelector('smart-tree-item[selected], smart-tree-items-group[selected]').label;
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
				<DropDownButton ref={this.dropdownbutton} dropDownWidth="auto" onChange={this.handleChange.bind(this)}>
					<Tree ref={this.tree} onReady={this.handleReady.bind(this)}>
						<TreeItem>Home</TreeItem>
						<TreeItemsGroup>Solutions
			                <TreeItem>Education</TreeItem>
							<TreeItem>Financial services</TreeItem>
							<TreeItem>Government</TreeItem>
							<TreeItem>Manufacturing</TreeItem>
							<TreeItem>All industries and solutions</TreeItem>
						</TreeItemsGroup>
						<TreeItemsGroup expanded>Products
			                <TreeItem>PC products</TreeItem>
							<TreeItem>Mobile products</TreeItem>
							<TreeItem>All products</TreeItem>
						</TreeItemsGroup>
					</Tree>
				</DropDownButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tree = React.createRef();
		this.button3 = React.createRef();
		this.checkbox = React.createRef();
	}

	handleGetStateClick() {
		this.tree.current.getState().then(function (state) {
			alert(JSON.stringify(state));
		});
	}

	handleSaveStateClick() {
		this.tree.current.saveState();
		this.button3.current.disabled = false;
	}

	handleLoadStateClick() {
		this.tree.current.loadState();
		this.checkbox.current.checked = this.tree.current.sorted;
	}

	handleSortedChange(event) {
		this.tree.current.sorted = event.detail.value;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tree ref={this.tree} id="tree" filterable filterInputPlaceholder="Filter query..."
					filterMode="containsIgnoreCase" selectionMode="oneOrMany">
					<TreeItem>Home</TreeItem>
					<TreeItemsGroup>Solutions
			            <TreeItem>Education</TreeItem>
						<TreeItem>Financial services</TreeItem>
						<TreeItem>Government</TreeItem>
						<TreeItem>Manufacturing</TreeItem>
						<TreeItemsGroup>Solutions
			                <TreeItem>Consumer photo and video</TreeItem>
							<TreeItem>Mobile</TreeItem>
							<TreeItem>Rich Internet applications</TreeItem>
							<TreeItem>Technical communication</TreeItem>
							<TreeItem>Training and eLearning</TreeItem>
							<TreeItem>Web conferencing</TreeItem>
						</TreeItemsGroup>
						<TreeItem>All industries and solutions</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup>Products
			            <TreeItem>PC products</TreeItem>
						<TreeItem>Mobile products</TreeItem>
						<TreeItem>All products</TreeItem>
					</TreeItemsGroup>
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
					<TreeItemsGroup>Communities
			            <TreeItem>Designers</TreeItem>
						<TreeItem>Developers</TreeItem>
						<TreeItem>Educators and students</TreeItem>
						<TreeItem>Partners</TreeItem>
						<TreeItemsGroup>By resource
			                <TreeItem>Labs</TreeItem>
							<TreeItem>TV</TreeItem>
							<TreeItem>Forums</TreeItem>
							<TreeItem>Exchange</TreeItem>
							<TreeItem>Blogs</TreeItem>
							<TreeItem>Experience Design</TreeItem>
						</TreeItemsGroup>
					</TreeItemsGroup>
					<TreeItemsGroup>Company
			            <TreeItem>About Us</TreeItem>
						<TreeItem>Press</TreeItem>
						<TreeItem>Investor Relations</TreeItem>
						<TreeItem>Corporate Affairs</TreeItem>
						<TreeItem>Careers</TreeItem>
						<TreeItem>Showcase</TreeItem>
						<TreeItem>Events</TreeItem>
						<TreeItem>Contact Us</TreeItem>
						<TreeItem>Become an affiliate</TreeItem>
					</TreeItemsGroup>
				</Tree>
				<div className="options">
					<div className="caption"></div>
					<div className="option">
						<Button id="getState" onClick={this.handleGetStateClick.bind(this)}>Get state</Button>
						<br />
						<br />
						<Button id="saveState" onClick={this.handleSaveStateClick.bind(this)}>Save state</Button>
						<br />
						<br />
						<Button ref={this.button3} id="loadState" disabled onClick={this.handleLoadStateClick.bind(this)}>Load state</Button>
						<br />
						<br />
						<br />
						<CheckBox ref={this.checkbox} id="sorted" onChange={this.handleSortedChange.bind(this)}>Sorted tree</CheckBox>
						<br />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

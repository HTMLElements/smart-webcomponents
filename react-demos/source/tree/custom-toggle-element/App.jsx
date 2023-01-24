import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tree = React.createRef();
		this.tree2 = React.createRef();
	}

	handleNearChange() {
		this.tree.current.toggleElementPosition = 'near';
		this.tree2.current.toggleElementPosition = 'near';
	}

	handleFarChange() {
		this.tree.current.toggleElementPosition = 'far';
		this.tree2.current.toggleElementPosition = 'far';
	}

	handleAutoHideToggleElementChange(event) {
		const autoHideToggleElement = event.detail.value;
		this.tree.current.autoHideToggleElement = autoHideToggleElement;
		this.tree2.current.autoHideToggleElement = autoHideToggleElement;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tree ref={this.tree} id="tree1" className="animation">
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
					<TreeItemsGroup expanded>Products
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
				<Tree ref={this.tree2} id="tree2" className="animation plus-minus">
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
					<TreeItemsGroup expanded>Products
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
					<div className="caption">Settings</div>
					<div>
						<p>Toggle element position:</p>
						<br />
						<RadioButton id="near" checked onChange={this.handleNearChange.bind(this)}>Near</RadioButton>
						<br />
						<RadioButton id="far" onChange={this.handleFarChange.bind(this)}>Far</RadioButton>
					</div>
					<br />
					<CheckBox id="autoHideToggleElement" onChange={this.handleAutoHideToggleElementChange.bind(this)}>Auto-hide toggle element</CheckBox>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

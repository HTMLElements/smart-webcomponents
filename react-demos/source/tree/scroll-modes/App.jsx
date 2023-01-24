import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tree = React.createRef();
		this.tree2 = React.createRef();
	}

	handleAutoChange() {
		this.tree.current.overflow = 'auto';
		this.tree2.current.overflow = 'auto';
	}

	handleHiddenChange() {
		this.tree.current.overflow = 'hidden';
		this.tree2.current.overflow = 'hidden';
	}

	handleScrollChange() {
		this.tree.current.overflow = 'scroll';
		this.tree2.current.overflow = 'scroll';
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tree ref={this.tree} id="tree1" filterable filterMode="containsIgnoreCase"
					scrollMode="scrollbar">
					<TreeItem>Home</TreeItem>
					<TreeItemsGroup expanded>Solutions
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
				<br />
				<Tree ref={this.tree2} id="tree2" className="animation" filterable filterMode="containsIgnoreCase"
					scrollMode="scrollButtons">
					<TreeItem>Home</TreeItem>
					<TreeItemsGroup expanded>Solutions
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
						<RadioButton ref={this.radiobutton} id="auto" checked onChange={this.handleAutoChange.bind(this)}>Auto</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton2} id="hidden" onChange={this.handleHiddenChange.bind(this)}>Hidden</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton3} id="scroll" onChange={this.handleScrollChange.bind(this)}>Scroll</RadioButton>
						<br />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

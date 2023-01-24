import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tree = React.createRef();
	}

	handleRowChange() {
		this.tree.current.selectionDisplayMode = 'row';
	}

	handleLabelChange() {
		this.tree.current.selectionDisplayMode = 'label';
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tree ref={this.tree} id="tree" selectionDisplayMode="label">
					<TreeItem>Home</TreeItem>
					<TreeItem selected>Education</TreeItem>
					<TreeItem>Financial services</TreeItem>
					<TreeItem>Government</TreeItem>
					<TreeItem disabled>Manufacturing</TreeItem>
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
					<TreeItemsGroup disabled>Products
			            <TreeItem>PC products</TreeItem>
						<TreeItem>Mobile products</TreeItem>
						<TreeItem>All products</TreeItem>
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
				</Tree>
				<div className="options">
					<div className="caption"></div>
					<div className="option">
						<p>Selection display mode:</p>
						<RadioButton id="row" onChange={this.handleRowChange.bind(this)}>Row</RadioButton>
						<br />
						<RadioButton checked id="label" onChange={this.handleLabelChange.bind(this)}>Label</RadioButton>
						<br />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

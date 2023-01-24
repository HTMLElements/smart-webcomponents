import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tree = React.createRef();
	}

	handleNoneChange() {
		this.tree.current.selectionMode = 'none';
	}

	handleOneChange() {
		this.tree.current.selectionMode = 'one';
	}

	handleZeroOrOneChange() {
		this.tree.current.selectionMode = 'zeroOrOne';
	}

	handleZeroOrManyChange() {
		this.tree.current.selectionMode = 'zeroOrMany';
	}

	handleOneOrManyChange() {
		this.tree.current.selectionMode = 'oneOrMany';
	}

	handleOneOrManyExtendedChange() {
		this.tree.current.selectionMode = 'oneOrManyExtended';
	}

	handleCheckBoxChange() {
		this.tree.current.selectionMode = 'checkBox';
	}

	handleRadioButtonChange() {
		this.tree.current.selectionMode = 'radioButton';
	}

	handleDblclickChange() {
		this.tree.current.toggleMode = 'dblclick';
	}

	handleClickChange() {
		this.tree.current.toggleMode = 'click';
	}

	handleArrowChange() {
		this.tree.current.toggleMode = 'arrow';
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tree ref={this.tree} id="tree" className="animation" selectionMode="zeroOrMany"
					selectedIndexes={["0", "4"]}>
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
						<div>
							<p>Selection mode:</p>
							<RadioButton ref="radiobutton" id="none" onChange={this.handleNoneChange.bind(this)}>None</RadioButton>
							<br />
							<RadioButton ref="radiobutton2" id="one" onChange={this.handleOneChange.bind(this)}>One</RadioButton>
							<br />
							<RadioButton ref="radiobutton3" id="zeroOrOne" onChange={this.handleZeroOrOneChange.bind(this)}>Zero or one</RadioButton>
							<br />
							<RadioButton ref="radiobutton4" id="zeroOrMany" checked onChange={this.handleZeroOrManyChange.bind(this)}>Zero or many</RadioButton>
							<br />
							<RadioButton ref="radiobutton5" id="oneOrMany" onChange={this.handleOneOrManyChange.bind(this)}>One or many</RadioButton>
							<br />
							<RadioButton ref="radiobutton6" id="oneOrManyExtended" onChange={this.handleOneOrManyExtendedChange.bind(this)}>One or many extended</RadioButton>
							<br />
							<RadioButton ref="radiobutton7" id="checkBox" onChange={this.handleCheckBoxChange.bind(this)}>Checkbox</RadioButton>
							<br />
							<RadioButton ref="radiobutton8" id="radioButton" onChange={this.handleRadioButtonChange.bind(this)}>Radio button</RadioButton>
						</div>
						<br />
						<div>
							<p>Toggle mode:</p>
							<RadioButton ref="radiobutton9" id="dblclick" checked onChange={this.handleDblclickChange.bind(this)}>Item double click</RadioButton>
							<br />
							<RadioButton ref="radiobutton10" id="click" onChange={this.handleClickChange.bind(this)}>Item click</RadioButton>
							<br />
							<RadioButton ref="radiobutton11" id="arrow" onChange={this.handleArrowChange.bind(this)}>Item arrow click</RadioButton>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

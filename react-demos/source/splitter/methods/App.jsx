import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.splitter = React.createRef();
	}

	handleAppend() {
		const splitter = this.splitter.current;

		if (splitter.items.length === 0) {
			return;
		}

		ReactDOM.render(<SplitterItem></SplitterItem>, new DocumentFragment(), function () {
			this.innerHTML = 'New Item Content';

			splitter.appendChild(this.nativeElement);
		});
	}

	handleInsertBefore() {
		const splitter = this.splitter.current;

		if (splitter.items.length === 0) {
			return;
		}

		ReactDOM.render(<SplitterItem></SplitterItem>, new DocumentFragment(), function () {
			this.innerHTML = 'New Item Content';

			splitter.insertBefore(this.nativeElement, splitter.items[0]);
		});
	}

	handleRemoveItem() {
		const splitter = this.splitter.current;

		if (splitter.items.length === 0) {
			return;
		}

		splitter.removeChild(splitter.items[0]);
	}

	handleInsert() {
		const splitter = this.splitter.current;

		if (splitter.items.length === 0) {
			return;
		}

		splitter.insert(0, {
			content: 'Newly Inserted Item'
		});
	}

	handleRemove() {
		const splitter = this.splitter.current;

		if (splitter.items.length === 0) {
			return;
		}

		splitter.removeAt(0);
	}

	handleShowSplitterBar() {
		const splitter = this.splitter.current;

		if (splitter.items.length === 0) {
			return;
		}
		splitter.showBar(0);
	}

	handleHideSplitterBar() {
		this.splitter.current.hideBar(0);
	}

	handleCollapse() {
		this.splitter.current.collapse(0);
	}

	handleExpand() {
		this.splitter.current.expand(0);
	}

	handleLockSplitterItem() {
		this.splitter.current.lockItem(0);
	}

	handleUnlockSplitterItem() {
		this.splitter.current.unlockItem(0);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Splitter ref={this.splitter} id="horizontalSplitter">
					<SplitterItem size="25%" collapsible>Item 1</SplitterItem>
					<SplitterItem size="25%" collapsible>item 2</SplitterItem>
					<SplitterItem collapsible>item 3</SplitterItem>
				</Splitter>
				<div className="options">
					<div className="caption">Methods</div>
					<div className="option">
						<Button id="appendItem" onClick={this.handleAppend.bind(this)}>Append Item</Button>
					</div>
					<div className="option">
						<Button id="insertBefore" onClick={this.handleInsertBefore.bind(this)}>Insert Before</Button>
					</div>
					<div className="option">
						<Button id="removeItem" onClick={this.handleRemoveItem.bind(this)}>Remove Item</Button>
					</div>
					<div className="option">
						<Button id="insertButton" onClick={this.handleInsert.bind(this)}>Insert</Button>
					</div>
					<div className="option">
						<Button id="removeButton" onClick={this.handleRemove.bind(this)}>Remove</Button>
					</div>
					<div className="option">
						<Button id="collapseItem" onClick={this.handleCollapse.bind(this)}>Collapse</Button>
					</div>
					<div className="option">
						<Button id="expandItem" onClick={this.handleExpand.bind(this)}>Expand</Button>
					</div>
					<div className="option">
						<Button id="showSplitterBar" onClick={this.handleShowSplitterBar.bind(this)}>Show Splitter Bar</Button>
					</div>
					<div className="option">
						<Button id="hideSplitterBar" onClick={this.handleHideSplitterBar.bind(this)}>Hide Splitter Bar</Button>
					</div>
					<div className="option">
						<Button id="lockSplitterItem" onClick={this.handleLockSplitterItem.bind(this)}>Lock Splitter Item</Button>
					</div>
					<div className="option">
						<Button id="unlockSplitterItem" onClick={this.handleUnlockSplitterItem.bind(this)}>Unlock Splitter Item</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

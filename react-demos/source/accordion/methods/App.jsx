import React from "react";
import ReactDOM from "react-dom";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.accordion = React.createRef();
		this.expandCollapseIndex = React.createRef();
		this.crudIndex = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();
		this.button4 = React.createRef();
		this.button5 = React.createRef();

		this.insertCounter = 0;
	}

	//Insert, Update, Remove
	updateButtons = function () {
		const insertBtn = this.button3.current,
			removeBtn = this.button5.current;

		if (this.insertCounter === 3) {
			insertBtn.disabled = true;
		}
		else {
			insertBtn.disabled = false;
		}

		if (this.insertCounter === -3) {
			removeBtn.disabled = true;
		}
		else {
			removeBtn.disabled = false;
		}
	};

	//Expand, Collapse
	handleCollapse(event) {
		this.accordion.current.collapse(Number(this.expandCollapseIndex.current.value) || 0);
	}

	handleExpand(event) {
		this.accordion.current.expand(Number(this.expandCollapseIndex.current.value) || 0);
	}

	handleInsert(event) {
		this.insertCounter++;

		this.accordion.current.insert(Number(this.crudIndex.current.value) || 0, {
			"label": "New label",
			"content": "New content"
		});

		this.updateButtons();
	}

	handleUpdate(event) {
		this.accordion.current.update(Number(this.crudIndex.current.value) || 0, {
			"label": "Updated Label",
			"content": "Updated Content"
		});
	}

	handleRemove(event) {
		this.accordion.current.removeAt(Number(this.crudIndex.current.value) || 0);
		this.insertCounter--;
		this.updateButtons();
	}

	init() {
		this.expandCollapseIndex.current.value = 0;
		this.crudIndex.current.value = 0;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Accordion ref={this.accordion} expandMode="toggle" id="accordion">
					<AccordionItem label="Item 0">Content 0</AccordionItem>
					<AccordionItem label="Item 1">Content 1</AccordionItem>
					<AccordionItem label="Item 2">Content 2</AccordionItem>
				</Accordion>
				<div className="options">
					<div className="caption">Options</div>
					<div className="option">
						<Button ref={this.button} onClick={this.handleCollapse.bind(this)} id="collapse">Collapse #</Button>
					</div>
					<div className="option">
						<Button ref={this.button2} onClick={this.handleExpand.bind(this)} id="expand">Expand #</Button>
					</div>
					<div className="option">
						<input className="text-input" ref={this.expandCollapseIndex} type="text" id="expandCollapseIndex" placeholder="Item Index" />
					</div>
					<div className="option">
						<Button ref={this.button3} onClick={this.handleInsert.bind(this)} id="insert">Insert #</Button>
					</div>
					<div className="option">
						<Button ref={this.button4} onClick={this.handleUpdate.bind(this)} id="update">Update #</Button>
					</div>
					<div className="option">
						<Button ref={this.button5} onClick={this.handleRemove.bind(this)} id="remove">Remove #</Button>
					</div>
					<div className="option">
						<input className="text-input" ref={this.crudIndex} type="text" placeholder="Item Index" id="crudIndex" />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

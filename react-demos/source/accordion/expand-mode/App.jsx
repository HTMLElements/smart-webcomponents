import React from "react";
import ReactDOM from "react-dom";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.accordion = React.createRef();
	}

	handleChange(event) {
		this.accordion.current.expandMode = event.detail.value;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Accordion ref={this.accordion} expandMode="singleFitHeight" id="accordion">
					<AccordionItem label="Item 0">Content</AccordionItem>
					<AccordionItem label="Item 1">Content</AccordionItem>
					<AccordionItem label="Item 3">Content</AccordionItem>
					<AccordionItem label="Item 2">Content</AccordionItem>
					<AccordionItem label="Item 4">Content</AccordionItem>
				</Accordion>
				<div className="options">
					<div className="caption">Options</div>
					<div className="option">
						<DropDownList onChange={this.handleChange.bind(this)} id="expandMode" selectionMode="one"
							selectedIndexes={[1]}>
							<ListItem value="single">Single</ListItem>
							<ListItem value="singleFitHeight">SingleFitHeight</ListItem>
							<ListItem value="multiple">Multiple</ListItem>
							<ListItem value="toggle">Toggle</ListItem>
							<ListItem value="none">None</ListItem>
						</DropDownList>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

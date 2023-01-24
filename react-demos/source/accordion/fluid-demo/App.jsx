import React from "react";
import ReactDOM from "react-dom";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<Accordion id="accordion">
				<AccordionItem label="Item 1">Content</AccordionItem>
				<AccordionItem label="Item 3">Content</AccordionItem>
				<AccordionItem label="Item 2">Content</AccordionItem>
				<AccordionItem label="Item 4">Content</AccordionItem>
				<AccordionItem label="Item 5">Content</AccordionItem>
				<AccordionItem label="Item 6">Content</AccordionItem>
				<AccordionItem label="Item 7">Content</AccordionItem>
				<AccordionItem label="Item 8">Content</AccordionItem>
				<AccordionItem label="Item 9">Content</AccordionItem>
			</Accordion>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

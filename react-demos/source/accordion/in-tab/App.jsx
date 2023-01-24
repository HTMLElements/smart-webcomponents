import React from "react";
import ReactDOM from "react-dom";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

class App extends React.Component {

	init() {
	
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Tabs id="tabs" selectedIndex={0}>
			        <TabItem label="Accordion 1">
			            <Accordion expandMode="single">
			                <AccordionItem index={0} label="Item 0">Content</AccordionItem>
			                <AccordionItem index={1} label="Item 1">Content</AccordionItem>
			                <AccordionItem index={2} label="Item 3">Content</AccordionItem>
			            </Accordion>
			        </TabItem>
			        <TabItem label="Accordion 2">
			            <Accordion expand-mode="single">
			                <AccordionItem index={0} label="Item 0">Content</AccordionItem>
			                <AccordionItem index={1} label="Item 1">Content</AccordionItem>
			                <AccordionItem index={2} label="Item 3">Content</AccordionItem>
			            </Accordion>
			        </TabItem>
			        <TabItem label="Accordion 3">
			            <Accordion expand-mode="single">
			                <AccordionItem index={0} label="Item 0">Content</AccordionItem>
			                <AccordionItem index={1} label="Item 1">Content</AccordionItem>
			                <AccordionItem index={2} label="Item 3">Content</AccordionItem>
			            </Accordion>
			        </TabItem>
			    </Tabs>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

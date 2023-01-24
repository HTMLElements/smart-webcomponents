import React from "react";
import ReactDOM from "react-dom";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Accordion rightToLeft locale="he">
			        <AccordionItem label="פריט ראשון">תוכן הפריט הראשון.</AccordionItem>
			        <AccordionItem label="פריט שני">תוכן הפריט השני.</AccordionItem>
			        <AccordionItem label="פריט שלישי">תוכן הפריט השלישי.</AccordionItem>
			        <AccordionItem label="פריט רביעי">תוכן הפריט הרביעי.</AccordionItem>
			    </Accordion>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

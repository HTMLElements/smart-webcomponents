import React from "react";
import ReactDOM from "react-dom";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Accordion>
			        <AccordionItem label="First Item">First Item Content.</AccordionItem>
			        <AccordionItem label="Second Item">Second Item Content.</AccordionItem>
			        <AccordionItem label="Third Item">Third Item Content.</AccordionItem>
			        <AccordionItem label="Fourth Item">Fourth Item Content.</AccordionItem>
			    </Accordion>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

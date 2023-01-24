import React from "react";
import ReactDOM from "react-dom";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	handleChange(theme) {
		document.body.className = theme;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<h3>Select custom theme</h3>
				<RadioButton checked value="" onChange={this.handleChange.bind(this, '')}>Metro Light</RadioButton>
				<RadioButton value="metro-dark" onChange={this.handleChange.bind(this, 'metro-dark')}>Metro Dark</RadioButton>
				<RadioButton value="metro-red" onChange={this.handleChange.bind(this, 'metro-red')}>Metro Red</RadioButton>
				<RadioButton value="metro-blue" onChange={this.handleChange.bind(this, 'metro-blue')}>Metro Blue</RadioButton>
				<hr />
				<Accordion>
					<AccordionItem label="SECTION 1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere
					eros nulla, sit amet molestie metus viverra id. Sed fermentum nisl in lorem
			            auctor, non mollis dolor conse...</AccordionItem>
					<AccordionItem label="SECTION 2">Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it to
			            make a type specimen book.</AccordionItem>
					<AccordionItem label="SECTION 3">It has survived not only five centuries, but also the leap into electronic
			            typesetting, remaining essentially unchanged.</AccordionItem>
					<AccordionItem
						label="SECTION 4">It was popularised in the 1960s with the release of Letraset sheets containing
						Lorem Ipsum passages, and more recently with desktop publishing software
			            like Aldus PageMaker including versions of Lorem Ipsum.</AccordionItem>
				</Accordion>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

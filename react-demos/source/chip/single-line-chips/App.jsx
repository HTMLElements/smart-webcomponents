import React from "react";
import ReactDOM from "react-dom";
import { Chip } from 'smart-webcomponents-react/chip';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<h1>Single line chips</h1>
				<Chip avatar="A" value="Chip with text avatar"></Chip>
				<Chip avatar="https://www.htmlelements.com/demos/images/phonebook/mark.jpeg" value="Chip with image avatar"></Chip>
				<Chip avatar="https://www.htmlelements.com/demos/images/phonebook/margaret.png"
					value="Chip with close button" closeButton></Chip>
				<Chip >Basic chip</Chip>
				<h1>Disabled</h1>
				<Chip avatar="A" value="Chip with text avatar" disabled></Chip>
				<Chip avatar="https://www.htmlelements.com/demos/images/phonebook/mark.jpeg" value="Chip with image avatar"
					disabled></Chip>
				<Chip avatar="https://www.htmlelements.com/demos/images/phonebook/margaret.png"
					value="Chip with close button" closeButton disabled></Chip>
				<Chip disabled>Basic chip</Chip>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownbutton = React.createRef();
	}

	handleDropDownPositionButtonClick(event) {
		let mode = event.target.textContent.trim();

		this.dropdownbutton.current.dropDownPosition = mode.charAt(0).toLowerCase() + mode.slice(1);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div id="container">
			        <DropDownButton ref={this.dropdownbutton} className="drop-down-list-modes-demo"
			        dropDownAppendTo="body" placeholder="Press to Open">Where does it come from? Contrary to popular belief, Lorem Ipsum is not
			            simply random text. It has roots in a piece of classical Latin literature
			            from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
			            professor at Hampden-Sydney College in Virginia, looked up one of the more
			            obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
			            through the cites of the word in classical literature, discovered the undoubtable
			            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
			            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
			            in 45 BC. This book is a treatise on the theory of ethics, very popular
			            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
			            sit amet..", comes from a line in section 1.10.32. The standard chunk of
			            Lorem Ipsum used since the 1500s is reproduced below for those interested.
			            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
			            are also reproduced in their exact original form, accompanied by English
			            versions from the 1914 translation by H. Rackham.</DropDownButton>
			        <div
			        id="controlPanel">
			            <div>DropDown list Position:</div>
			            <RadioButton  checked onClick={this.handleDropDownPositionButtonClick.bind(this)}>Auto</RadioButton>
			            <RadioButton  onClick={this.handleDropDownPositionButtonClick.bind(this)}>Bottom</RadioButton>
			            <RadioButton  onClick={this.handleDropDownPositionButtonClick.bind(this)}>Overlay-bottom</RadioButton>
			            <RadioButton  onClick={this.handleDropDownPositionButtonClick.bind(this)}>Overlay-center</RadioButton>
			            <RadioButton  onClick={this.handleDropDownPositionButtonClick.bind(this)}>Overlay-top</RadioButton>
			            <RadioButton  onClick={this.handleDropDownPositionButtonClick.bind(this)}>Top</RadioButton>
			            <RadioButton  onClick={this.handleDropDownPositionButtonClick.bind(this)}>Center-bottom</RadioButton>
			            <RadioButton  onClick={this.handleDropDownPositionButtonClick.bind(this)}>Center-top</RadioButton>
			    </div>
			</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

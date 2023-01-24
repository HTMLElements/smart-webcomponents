import React from "react";
import ReactDOM from "react-dom";
import { ComboBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/combobox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.combobox = React.createRef();
		this.radiobutton = React.createRef();
		this.radiobutton2 = React.createRef();
		this.radiobutton3 = React.createRef();
		this.radiobutton4 = React.createRef();
	}

	dataSource = [
		"Affogato",
		"Americano",
		"Bicerin",
		"Breve",
		"Café Bombón",
		"Café au lait",
		"Caffé Corretto",
		"Café Crema",
		"Caffé Latte",
		"Caffé macchiato",
		"Café mélange",
		"Coffee milk",
		"Cafe mocha",
		"Cappuccino",
		"Carajillo",
		"Cortado",
		"Cuban espresso",
		"Espresso",
		"Eiskaffee",
		"The Flat White",
		"Frappuccino",
		"Galao",
		"Greek frappé coffee",
		"Indian filter coffee",
		"Instant coffee",
		"Irish coffee",
		"Liqueur coffee"
	];

	handleRadioButtonChange() {
		const that = this,
		target = [that.radiobutton.current, that.radiobutton2.current, that.radiobutton3.current, that.radiobutton4.current].find(b => b.checked);
		let mode = target.innerHTML.trim();

		that.combobox.current.autoComplete = mode.charAt(0).toLowerCase() + mode.slice(1);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <ComboBox ref={this.combobox} autoComplete="manual" minLength={1} selectionMode="zeroOrOne" dataSource={this.dataSource}></ComboBox>
			    <div className="options">
			        <div className="caption">Auto Complete Modes</div>
			        <div className="option">
			            <RadioButton ref={this.radiobutton} onChange={this.handleRadioButtonChange.bind(this)}>None</RadioButton>
			            <RadioButton ref={this.radiobutton2} onChange={this.handleRadioButtonChange.bind(this)}>Auto</RadioButton>
			            <RadioButton ref={this.radiobutton3} onChange={this.handleRadioButtonChange.bind(this)}>Inline</RadioButton>
			            <RadioButton ref={this.radiobutton4} checked onChange={this.handleRadioButtonChange.bind(this)}>Manual</RadioButton>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

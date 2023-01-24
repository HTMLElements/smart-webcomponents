import React from "react";
import ReactDOM from "react-dom";
import { NumberInput } from 'smart-webcomponents-react/numberinput';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.numericInput = React.createRef();
		this.currencyInput = React.createRef();
		this.currencyInputLocalized = React.createRef();
		this.accountingInput = React.createRef();
		this.percentInput = React.createRef();
		this.customInput = React.createRef();
	}

	init() {
	    this.numericInput.current.numberFormat = {
	        minimumFractionDigits: 2
	    };
	    this.currencyInput.current.numberFormat = {
	        style: 'currency',
	        currency: 'USD'
	    };
	    this.currencyInputLocalized.current.numberFormat = {
	        style: 'currency',
	        currency: 'EUR'
	    };
	    this.currencyInputLocalized.current.locale = 'de';
	    this.accountingInput.current.numberFormat = {
	        style: 'currency',
	        currency: 'USD',
	        currencySign: 'accounting'
	    };
	    this.percentInput.current.numberFormat = {
	        style: "percent"
	    };
	    this.customInput.current.numberFormat = {
	        style: "unit",
	        unit: "liter",
	        unitDisplay: "long"
	    };
	
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			        <p> <b>Smart.NumberInput</b> is an input that allows you to easily enter and
			            format numbers. It uses the Intl.NumberFormat API for formatting the numbers.</p>
			    </div>
			    	<h2>Styling and Appearance</h2>
			    	<h3>Default "1000"</h3>
			    <NumberInput ref={this.numberinput} placeholder="Please Enter a Number"></NumberInput>
			    	<h3>Underlined</h3>
			    <NumberInput ref={this.numberinput} className="underlined" placeholder="Please Enter a Number"></NumberInput>
			    	<h3>Outlined</h3>
			    <NumberInput ref={this.numberinput3} className="outlined" placeholder="Please Enter a Number"></NumberInput>
			    	<h2>Number Formats</h2>
			    	<h3>Number "1000.42"</h3>
			    <NumberInput ref={this.numericInput} value={1000.42} id="numericInput" placeholder="Please Enter a Number"></NumberInput>
			    	<h4>Currency "$1000.42"</h4>
			    <NumberInput ref={this.currencyInput} value={1000.42} id="currencyInput" placeholder="Please Enter a Currency"></NumberInput>
			    	<h4>Accounting "($1000.42)"</h4>
			    <NumberInput ref={this.accountingInput} value={-1000.42} min={-9999} id="accountingInput"
			    placeholder="Please Enter a Currency"></NumberInput>
			    	<h4>Currency Localized "1000,42 EUR"</h4>
			    <NumberInput ref={this.currencyInputLocalized} value={1000.42} id="currencyInputLocalized"
			    placeholder="Please Enter a Currency"></NumberInput>
			    	<h4>Percent "10%"</h4>
			    <NumberInput ref={this.percentInput} value={10} id="percentInput" placeholder="Please Enter a Percent"></NumberInput>
			    	<h4>Custom "10 litres"</h4>
			    <NumberInput ref={this.customInput} value={10} id="customInput" placeholder="Please Enter litres"></NumberInput>
			    <br/>
			    <br/>
			    <br/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

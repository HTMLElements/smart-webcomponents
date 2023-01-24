import React from "react";
import ReactDOM from "react-dom";
import { Array } from 'smart-webcomponents-react/array';
import { Button } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.array = React.createRef();
		this.log = React.createRef();
	}

	elementTemplate(element, dimensions) {
		const that = this.array.current;

		element.style.width = that.elementWidth + 'px';
		element.style.height = that.elementHeight + 'px';

		if (!document.getElementById('template')) {
			const template = document.createElement('template');

			template.id = 'template';
			template.innerHTML = `
			<div className="container">
			<div>First name:</div>
			<input type="text" />
			<div>Last name:</div>
			<input type="text" className="lastNameinput" />
			</div>`;

			document.body.appendChild(template);
		}

		const templateContent = document.importNode(document.getElementById('template').content, true);

		element.appendChild(templateContent);

		element.firstChild.addEventListener('change', function (event) {
			if (element.supressChange) {
				// 'supressChange' is set to true when scrolling the array and the 'change' events of the controls must not invoke the smartArray 'change' event
				event.stopPropagation();
			}
		});
	}

	// 'getElementValue' is called when manually updating the inner widgets in order to reflect the change in the array's value itself (as well as in various other checks)
	getElementValue(element, dimensions) {
		const inputs = element.getElementsByTagName('input'),
			firstNameinput = inputs[0],
			lastNameinput = inputs[1];
		return {
			firstName: firstNameinput.value,
			lastName: lastNameinput.value
		};
	}

	// 'setElementValue' is called when setting the initial values of inner widgets and when scrolling the array
	setElementValue(value, element, dimensions) {
		const inputs = element.getElementsByTagName('input'),
			firstNameinput = inputs[0],
			lastNameinput = inputs[1];

		if (typeof value === 'string') {
			value = JSON.parse(value);
		}

		firstNameinput.value = value.firstName;
		lastNameinput.value = value.lastName;
	}

	handleClick() {
		this.array.current.val({
			firstName: 'Vestara',
			lastName: 'Khai'
		}, [2, 0]);
	}

	handleChange(event) {
		const log = this.log.current;

		this.array.current.val().then((value) => log.innerHTML = JSON.stringify(value) + '<hr />' + log.innerHTML);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Array ref={this.array} id="jqxArray" onChange={this.handleChange.bind(this)}
					showIndexDisplay
					type="custom"
					value={[[{ "firstName": "Roan", "lastName": "Fel" }, { "firstName": "Mara", "lastName": "Jade" }], [{ "firstName": "Ben", "lastName": "Skywalker" }, { "firstName": "Gilad", "lastName": "Pellaeon" }]]}
					dimensions={2}
					rows={3}
					columns={3}
					elementWidth={200}
					elementHeight={200}
					customWidgetDefaultValue={{ "firstName": "", "lastName": "" }}
					elementTemplate={this.elementTemplate.bind(this)}
					getElementValue={this.getElementValue}
					setElementValue={this.setElementValue}></Array>
				<br />
				<Button onClick={this.handleClick.bind(this)} id="setValueToOneElement" className="demoButton">Set the value of (2, 0)</Button>
				<div style={{ marginTop: '50px', fontFamily: 'Verdana' }}>Log:</div>
				<br />
				<div ref={this.log} id="log"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

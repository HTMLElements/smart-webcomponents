import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Input } from 'smart-webcomponents-react/input';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	constructor(p) {
		super(p);

		this.input = React.createRef();
	}

	dataSource = [{
		label: "Andrew Watson"
	},
	{
		label: "Anne Kean"
	},
	{
		label: "Avril Janin"
	},
	{
		label: "Janet Pattenson"
	},
	{
		label: "Johanna Svensson"
	},
	{
		label: "Johnny Abana"
	},
	{
		label: "Laura Thene"
	},
	{
		label: "Margaret Vetton"
	},
	{
		label: "Maria Sevrano"
	},
	{
		label: "Mark Yemen"
	},
	{
		label: "Maya Verdara"
	},
	{
		label: "Michael Barton"
	},
	{
		label: "Monica Oghini"
	},
	{
		label: "Nancy Queens"
	},
	{
		label: "Robert Drawny"
	},
	{
		label: "Steven Fedrichy"
	},
	{
		label: "Toni Versachi"
	}
	];

	init() {
		let input = this.input.current;

		document.querySelector('.options').addEventListener('change', function (event) {
			const target = event.target;
			const targetClassList = target.classList;

			if (targetClassList.contains('readonly')) {
				input.readonly = event.detail.value;
				return;
			}

			const inputClassList = input.nativeElement.classList;

			if (targetClassList.contains('render-mode')) {
				inputClassList.remove('underlined', 'outlined');

				const textContent = target.textContent.toLowerCase();

				if (textContent.indexOf('underlined') > -1) {
					inputClassList.add('underlined');
				}
				else if (textContent.indexOf('outlined') > -1) {
					inputClassList.add('outlined');
				}
			}
		});

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<p> <b>Smart.Input</b> is a simple input that can have a predefined options
			            list.</p>
					<p><b>Readonly</b> will turn the input in to a drop down list.</p>
					<p><b>RenderMode</b> radio buttons allow to change the appearance of the input.</p>
				</div>
				<Input ref={this.input} placeholder="Please Select" dataSource={this.dataSource} dropDownButtonPosition="right"></Input>
				<div className="options">
					<div className="description">Readonly Input acts as a simple DropDownList.</div>
					<div className="option">
						<CheckBox className="readonly">Read only</CheckBox>
					</div>
					<div className="option">
						<div className="description">Render Mode</div>
						<RadioButton checked className="render-mode">Default</RadioButton>
						<RadioButton className="render-mode">Outlined</RadioButton>
						<RadioButton className="render-mode">Underlined</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

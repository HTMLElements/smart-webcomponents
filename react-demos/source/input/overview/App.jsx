import React from "react";
import ReactDOM from "react-dom";
import { Input } from 'smart-webcomponents-react/input';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.input = React.createRef();
	}

	init() {
		let input = this.input.current;

		document.querySelector('.options').addEventListener('change', function (event) {
			const target = event.target,
				inputClassList = input.nativeElement.classList;

			if (target.classList.contains('render-mode')) {
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
					<p><b>RenderMode</b> radio buttons allow to change the appearance of the input.</p>
				</div>
				<Input ref={this.input} placeholder="Empty"></Input>
				<div className="options">
					<div className="option">
						<div className="description">Render Mode</div>
						<RadioButton  checked className="render-mode">Default</RadioButton>
						<RadioButton  className="render-mode">Outlined</RadioButton>
						<RadioButton  className="render-mode">Underlined</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Smart, Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.button = React.createRef();
	}

	init() {
		class ModuleA {
			static get moduleName() {
				return 'Module1';
			}
			static get properties() {
				const properties = {
					'property1': {
						value: 'red',
						type: 'string',
						observer: 'obsFunc'
					}
				};
				return properties;
			}
			obsFunc() {
				alert('test');
			}
		}
		class ModuleB extends ModuleA {
			moduleTwoFunc() { }
			obsFunc() {
				alert('test2');
			}
		}

		Smart.Elements.whenRegistered('smart-button', function (proto) {
			proto.addModule(ModuleB);
		});
	}

	clickMe(event) {
		this.button.current.nativeElement.obsFunc();
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Button ref={this.button} id="button" onClick={this.clickMe.bind(this)}>Click Me</Button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

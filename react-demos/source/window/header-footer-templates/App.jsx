import React from "react";
import ReactDOM from "react-dom";
import { Gauge } from 'smart-webcomponents-react/gauge';
import { Window } from 'smart-webcomponents-react/window';
import { PowerButton } from 'smart-webcomponents-react/button';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.window = React.createRef();
		this.gauge = React.createRef();
		this.button = React.createRef();
	}

	handleClick() {
		this.gauge.current.disabled = !this.button.current.checked;
	}

	handleChange(event) {
		document.getElementById('value').textContent = event.detail.value;
	}

	handleReady() {
		const that = this;
		
		ReactDOM.render(<PowerButton id="power" ref={that.button} checked onClick={that.handleClick.bind(that)}></PowerButton>,  document.getElementById('powerButtonContainer'));
	}

	init() {
		const that = this;
		const template = document.createElement('template'),
			template2 = document.createElement('template');

		template.innerHTML = '<div id="powerButtonContainer"></div><label>Gauge</label>';
		template2.innerHTML = '<div>Value:<span id="value"></span></div>';

		template.id = 'headerTemplate';
		template2.id = 'footerTemplate';

		document.body.appendChild(template);
		document.body.appendChild(template2);

		this.window.current.headerTemplate = template.id;
		this.window.current.footerTemplate = template2.id;

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Window ref={this.window} opened onReady={this.handleReady.bind(this)}>
					<section>
						<Gauge ref={this.gauge} analogDisplayType="needle" startAngle={-30} endAngle={210} onChange={this.handleChange.bind(this)}
							min={0} max={100} value={0} sizeMode="auto"></Gauge>
					</section>
				</Window>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dockinglayout = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();
		this.button4 = React.createRef();

		this.insertCount = 0;
	}

	layout = [{
		type: 'LayoutPanel',
		label: 'Tabs 0',
		items: [{
			label: 'Tab 0',
			content: 'Content of Tab 0'
		}]
	},
	{
		type: 'LayoutPanel',
		label: 'Tabs 1',
		items: [{
			label: 'Tab 1',
			content: 'Content of Tab 1',
		}]
	}];

	validate() {
		this.insertCount++;
		if (this.insertCount === 2) {
			this.button.current.disabled = true;
			this.button2.current.disabled = true;
			this.button3.current.disabled = true;
			this.button4.current.disabled = true;
			return true;
		}

		if (this.insertCount > 2) {
			return false;
		}

		return true;
	};

	handleInsertLayout(position) {
		const result = this.validate(),
			tabsWindowObject = {
				label: 'New Item',
				items: [{
					label: 'New Tab Item',
					content: 'New Tab Item Content'
				}]
			};

		if (!result) {
			return;
		}

		this.dockinglayout.current[`insertLayout${position}`](tabsWindowObject);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DockingLayout ref={this.dockinglayout} id="layout" layout={this.layout}></DockingLayout>
				<div className="options">
					<div className="caption">Insert Layout</div>
					<div className="option">
						<Button ref={this.button} id="insertLayoutLeft" onClick={this.handleInsertLayout.bind(this, 'Left')}>Left</Button>
					</div>
					<div className="option">
						<Button ref={this.button2} id="insertLayoutRight" onClick={this.handleInsertLayout.bind(this, 'Right')}>Right</Button>
					</div>
					<div className="option">
						<Button ref={this.button3} id="insertLayoutTop" onClick={this.handleInsertLayout.bind(this, 'Top')}>Top</Button>
					</div>
					<div className="option">
						<Button ref={this.button4} id="insertLayoutBottom" onClick={this.handleInsertLayout.bind(this, 'Bottom')}>Bottom</Button>
					</div>
				</div>
				<br />
				<br />
				<div className="description">Insert Top Level Docking Layout Item on Left, Right, Top, Bottom</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

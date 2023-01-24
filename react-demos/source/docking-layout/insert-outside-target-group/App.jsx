import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dockinglayout = React.createRef();
		this.dropdownlist = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();
		this.button4 = React.createRef();

		this.insertCount = 0;
	}

	layout = [{
		type: 'LayoutGroup',
		size: '50%',
		orientation: 'horizontal',
		items: [{
			type: 'LayoutPanel',
			label: 'Tabs 0',
			size: '50%',
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
				content: 'Content of Tab 1'
			}]
		}
		]
	},
	{
		type: 'LayoutGroup',
		orientation: 'horizontal',
		items: [{
			type: 'LayoutPanel',
			label: 'Tabs 2',
			size: '25%',
			items: [{
				label: 'Tab 2',
				content: 'Content of Tab 2'
			}]
		},
		{
			type: 'LayoutPanel',
			label: 'Tabs 3',
			items: [{
				label: 'Tab 3',
				content: 'Content of Tab 3',
			}]
		}
		]
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

	handleInsertOutsideTargetGroup(position) {
		const result = this.validate();
		const createTabsWindowObject = function () {
			return {
				label: 'New Item',
				items: [{
					label: 'New Tab Item',
					content: 'New Tab Item Content'
				}]
			}
		};

		if (!result) {
			return;
		}

		this.dockinglayout.current['insertOutsideTargetGroup' + position](0, new createTabsWindowObject());
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DockingLayout ref={this.dockinglayout} id="layout" layout={this.layout}></DockingLayout>
				<div className="options">
					<div className="caption">Insert Outside Tab 0 and Tab 1 group:</div>
					<div className="option">
						<Button ref={this.button} id="insertOutsideTargetGroupLeft" onClick={this.handleInsertOutsideTargetGroup.bind(this, 'Left')}>Left</Button>
					</div>
					<div className="option">
						<Button ref={this.button2} id="insertOutsideTargetGroupRight" onClick={this.handleInsertOutsideTargetGroup.bind(this, 'Right')}>Right</Button>
					</div>
					<div className="option">
						<Button ref={this.button3} id="insertOutsideTargetGroupTop" onClick={this.handleInsertOutsideTargetGroup.bind(this, 'Top')}>Top</Button>
					</div>
					<div className="option">
						<Button ref={this.button4} id="insertOutsideTargetGroupBottom" onClick={this.handleInsertOutsideTargetGroup.bind(this, 'Bottom')}>Bottom</Button>
					</div>
				</div>
				<br />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

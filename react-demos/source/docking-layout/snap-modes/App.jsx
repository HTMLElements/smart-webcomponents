import React from "react";
import ReactDOM from "react-dom";
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dockinglayout = React.createRef();
	}

	layout = [{
		id: 'item1',
		label: 'Tabs 1',
		items: [{
			label: 'Tab 1',
			content: 'Content of Tab 1',
			selected: true
		},
		{
			label: 'Tab 2',
			content: 'Content of Tab 2'
		}
		],
		dropPosition: ['top', 'bottom', 'left', 'layout-left', 'layout-top']
	},
	{
		id: 'item2',
		label: 'Tabs 2',
		items: [{
			label: 'Tab 3',
			content: 'Content of Tab 3'
		}]
	}];

	handleChange(position) {
		this.dockinglayout.current.snapMode = position;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DockingLayout ref={this.dockinglayout} id="layout" layout={this.layout}></DockingLayout>
				<div className="options">
					<div className="caption">Snap Mode</div>
					<div className="option">
						<RadioButton checked onChange={this.handleChange.bind(this, 'advanced')}>Advanced</RadioButton>
						<RadioButton onChange={this.handleChange.bind(this, 'simple')}>Simple</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

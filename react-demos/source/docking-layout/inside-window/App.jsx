import React from "react";
import ReactDOM from "react-dom";
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { Window } from 'smart-webcomponents-react/window';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';
import { Gauge } from 'smart-webcomponents-react/gauge';
import { TextBox } from 'smart-webcomponents-react/textbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dockinglayout = React.createRef();
	}

	handleReady() {
		ReactDOM.render(<TextBox>Some Text Inside the Text Box</TextBox>, document.getElementById('textBoxContainer'));
		ReactDOM.render(<MultilineTextBox id="editor2">File Editor 2</MultilineTextBox>, document.getElementById('multilineTextBoxContainer'));
		ReactDOM.render(<MultilineTextBox id="editor3">File Editor 3</MultilineTextBox>, document.getElementById('multilineTextBoxContainer2'));
		ReactDOM.render(<Gauge></Gauge>, document.getElementById('gaugeContainer'));
		ReactDOM.render(<MultilineTextBox id="editor1">
			<Tree id="tree" filterable>
				<TreeItemsGroup>
					<i className="material-icons">folder</i> Attractions
									<TreeItem>Movies</TreeItem>
					<TreeItem>Circus</TreeItem>
					<TreeItem>Concerts</TreeItem>
					<TreeItem>Monuments</TreeItem>
				</TreeItemsGroup>
				<TreeItemsGroup>
					<i className="material-icons">folder</i> Dining
									<TreeItem>Restaurants</TreeItem>
					<TreeItem>Caf&eacute;s</TreeItem>
					<TreeItem>Bars</TreeItem>
				</TreeItemsGroup>
				<TreeItemsGroup>
					<i className="material-icons">folder</i> Education
									<TreeItem>Schools</TreeItem>
					<TreeItem>Colleges</TreeItem>
					<TreeItem>Universities</TreeItem>
					<TreeItem>Educational courses</TreeItem>
				</TreeItemsGroup>
				<TreeItemsGroup>
					<i className="material-icons">folder</i> Family
									<TreeItem>Babysitting</TreeItem>
					<TreeItem>Family trips</TreeItem>
					<TreeItem>Theme parks</TreeItem>
				</TreeItemsGroup>
				<TreeItemsGroup>
					<i className="material-icons">folder</i> Health
									<TreeItem>Hospitals</TreeItem>
					<TreeItem>Family physicians</TreeItem>
					<TreeItem>Optics</TreeItem>
				</TreeItemsGroup>
			</Tree></MultilineTextBox>, document.getElementById('multilineTextBoxContainer3'));
		ReactDOM.render(<Tree id="tree" filterable>
			<TreeItemsGroup>
				<i className="material-icons">folder</i> Attractions
								<TreeItem>Movies</TreeItem>
				<TreeItem>Circus</TreeItem>
				<TreeItem>Concerts</TreeItem>
				<TreeItem>Monuments</TreeItem>
			</TreeItemsGroup>
			<TreeItemsGroup>
				<i className="material-icons">folder</i> Dining
								<TreeItem>Restaurants</TreeItem>
				<TreeItem>Caf&eacute;s</TreeItem>
				<TreeItem>Bars</TreeItem>
			</TreeItemsGroup>
			<TreeItemsGroup>
				<i className="material-icons">folder</i> Education
								<TreeItem>Schools</TreeItem>
				<TreeItem>Colleges</TreeItem>
				<TreeItem>Universities</TreeItem>
				<TreeItem>Educational courses</TreeItem>
			</TreeItemsGroup>
			<TreeItemsGroup>
				<i className="material-icons">folder</i> Family
								<TreeItem>Babysitting</TreeItem>
				<TreeItem>Family trips</TreeItem>
				<TreeItem>Theme parks</TreeItem>
			</TreeItemsGroup>
			<TreeItemsGroup>
				<i className="material-icons">folder</i> Health
								<TreeItem>Hospitals</TreeItem>
				<TreeItem>Family physicians</TreeItem>
				<TreeItem>Optics</TreeItem>
			</TreeItemsGroup></Tree>, document.getElementById('treeContainer'));

	}

	layout = [{
		id: 'item0',
		label: 'Tabs 0',
		items: [{
			label: 'Tab A',
			selected: true,
			content: 'This is the first item of the Tabs 0.'
		},
		{
			label: 'Tab B',
			content: '<div id="textBoxContainer"></div>'
		}
		],
		autoHide: true,
		autoHidePosition: 'left'
	},
	{
		id: 'item1',
		label: 'Tabs 1',
		items: [{
			label: 'Tab 1',
			selected: true,
			content: '<div id="multilineTextBoxContainer3"></div>'
		},
		{
			label: 'Tab 2',
			content: '<div id="multilineTextBoxContainer"></div>'
		},
		{
			label: 'Tab 3',
			content: '<div id="multilineTextBoxContainer2"></div>'
		}
		],
		headerPosition: 'none',
		tabCloseButtons: true
	},
	{
		id: 'item2',
		label: 'Solution Explorer',
		items: [{
			label: 'Tab 4',
			content: '<div id="treeContainer"></div>'
		}],
		tabPosition: 'hidden'
	},
	{
		id: 'item3',
		label: 'Tabs 3',
		items: [{
			label: 'Tab 4',
			selected: true,
			content: '<div id="gaugeContainer"></div>'
		},
		{
			label: 'Tab 5',
			content: 'Contents of Tab Item 5.'
		}
		],
		autoHide: true,
		autoHidePosition: 'top'
	}];

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Window label="Smart Docking Layout" opened resizeMode="both"
					id="layoutWindow">
					<DockingLayout ref={this.dockinglayout} id="layout" layout={this.layout} onReady={this.handleReady.bind(this)}></DockingLayout>
				</Window>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

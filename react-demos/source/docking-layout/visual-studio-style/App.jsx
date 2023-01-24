import React from "react";
import ReactDOM from "react-dom";
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';
import { MultilineTextBox} from 'smart-webcomponents-react/multilinetextbox';
import { TextBox} from 'smart-webcomponents-react/textbox';

class App extends React.Component {
	layout = [{
		id: 'item0',
		label: 'View',
		items: [{
			label: 'Team Explorer',
			selected: true,
			content: 'This is the first item of the Tabs 0.'
		},
		{
			label: 'Server Explorer',
			content: '<div id="textBoxContainer"></div>'
		}
		],
		autoHide: true,
		autoHidePosition: 'left'
	},
	{
		type: 'LayoutGroup',
		items: [{
			type: 'LayoutPanel',
			id: 'tabPanel',
			label: 'Tabs 1',
			items: [{
				label: 'helloWorld.js',
				selected: true,
				content: '<div id="multilineTextBoxContainer"></div>'
			},
			{
				label: 'helloWorld.css',
				content: '<div id="multilineTextBoxContainer2"></div>'
			},
			{
				label: 'helloWorld.html',
				content: '<div id="multilineTextBoxContainer3"></div>'
			}
			],
			headerPosition: 'none',
			tabCloseButtons: true,
			panelContainerSettings: {
				size: '75%'
			}
		},
		{
			type: 'LayoutPanel',
			label: 'Output',
			items: [{
				label: 'Output',
				headerPosition: 'none',
				content: 'All files are up to date.'
			}],
			headerPosition: 'none'
		}
		],
		orientation: 'horizontal'
	},
	{
		id: 'item2',
		label: 'Solution Explorer',
		items: [{
			label: 'Solution Explorer',
			content: '<div id="treeContainer"></div>'
		}],
		tabPosition: 'hidden'
	}];

	handleReady() {
		ReactDOM.render(<TextBox>Some Text Inside the Text Box</TextBox>, document.getElementById('textBoxContainer'));
		ReactDOM.render(<MultilineTextBox>
			this.button.current.addEventListener('click', function() {
				//..
			};
						}</MultilineTextBox>, document.getElementById('multilineTextBoxContainer'));
		ReactDOM.render(<MultilineTextBox id="editor2">smart-button {}</MultilineTextBox>, document.getElementById('multilineTextBoxContainer2'));
		ReactDOM.render(<MultilineTextBox id="editor3"><smart-button>Click Me</smart-button></MultilineTextBox>, document.getElementById('multilineTextBoxContainer3'));
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
			</TreeItemsGroup>
		</Tree>, document.getElementById('treeContainer'));
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DockingLayout layout={this.layout} onReady={this.handleReady.bind(this)}></DockingLayout>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

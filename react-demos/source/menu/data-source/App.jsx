import React from "react";
import ReactDOM from "react-dom";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

class App extends React.Component {
	menuDataSource = [{
		label: 'File',
		items: [{
			label: 'New',
			shortcut: 'Ctrl+N'
		},
		{
			label: 'Open',
			shortcut: 'Ctrl+0'
		},
		{
			label: 'Open Containing Folder',
			items: [{
				label: 'Explorer'
			},
			{
				label: 'cmd'
			}
			]
		},
		{
			label: 'Save',
			shortcut: 'Ctrl+S',
			disabled: true,
			separator: true
		},
		{
			label: 'Exit',
			shortcut: 'Alt+F4'
		}
		]
	},
	{
		label: '<img id="helpIcon" src="https://www.htmlelements.com/demos/images/help-icon.png" title="Help" />'
	},
	{
		label: '<div className="planetIcon" title="Planet"></div>'
	},
	{
		label: 'About',
		value: 'customValue'
	}
	];

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Menu id="menu" dataSource={this.menuDataSource}></Menu>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

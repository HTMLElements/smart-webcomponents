import React from "react";
import ReactDOM from "react-dom";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

class App extends React.Component {
	dataSource = [{
		checkable: true,
		checkMode: 'radioButton, none',
		items: [{
			label: 'Line',
			value: 'line',
			checked: true
		},
		{
			label: 'Bar',
			value: 'bar'
		},
		{
			label: 'Point',
			value: 'point'
		},
		{
			label: 'Area',
			value: 'area'
		},
		{
			label: 'Hide',
			value: 'hide',
			separator: true
		},
		{
			label: 'Sort',
			checkable: true,
			checkMode: 'radioButton',
			items: [{
				label: 'Descending',
				value: 'descending'
			},
			{
				label: 'None',
				value: 'none',
				checked: true
			},
			{
				label: 'Ascending',
				value: 'ascending'
			}
			]
		}
		]
	}];

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Menu id="menu1" checkboxes>
					<MenuItemsGroup>File
			            <MenuItem shortcut="Ctrl+N">New</MenuItem>
						<MenuItem shortcut="Ctrl+0">Open</MenuItem>
						<MenuItemsGroup>Open Containing Folder
			                <MenuItem>Explorer</MenuItem>
							<MenuItem>cmd</MenuItem>
						</MenuItemsGroup>
						<MenuItem shortcut="Ctrl+S" disabled>Save</MenuItem>
						<MenuItem shortcut="Ctrl+Alt+S" separator>Save As...</MenuItem>
						<MenuItem shortcut="Alt+F4">Exit</MenuItem>
					</MenuItemsGroup>
					<MenuItemsGroup>Edit
			            <MenuItem shortcut="Ctrl+Z">Undo</MenuItem>
						<MenuItem shortcut="Ctrl+Y" separator>Redo</MenuItem>
						<MenuItem shortcut="Ctrl+X">Cut</MenuItem>
						<MenuItem shortcut="Ctrl+C">Copy</MenuItem>
						<MenuItem shortcut="Ctrl+V" disabled>Paste</MenuItem>
					</MenuItemsGroup>
					<MenuItemsGroup checkable checkMode="radioButton, none, none">Encoding
			            <MenuItem>Encode in ANSI</MenuItem>
						<MenuItem>Encode in UTF-8</MenuItem>
						<MenuItem>Encode in UTF-8-BOM</MenuItem>
						<MenuItem>Encode in UTCS-2 BE BOM</MenuItem>
						<MenuItem separator>Encode in UTCS-2 LE BOM</MenuItem>
						<MenuItemsGroup separator>Character sets
			                <MenuItemsGroup>Cyrillic
			                    <MenuItem>ISO 8859-5</MenuItem>
								<MenuItem>KOI8-R</MenuItem>
								<MenuItem>KOI8-U</MenuItem>
								<MenuItem>Windows-1251</MenuItem>
							</MenuItemsGroup>
							<MenuItemsGroup>Chinese
			                    <MenuItem>Big5 (Traditional)</MenuItem>
								<MenuItem>GB2312 (Simplified)</MenuItem>
							</MenuItemsGroup>
							<MenuItemsGroup>Western European
			                    <MenuItem>ISO 8859-1</MenuItem>
								<MenuItem>ISO 8859-15</MenuItem>
								<MenuItem>OEM 850</MenuItem>
								<MenuItem>Windows-1252</MenuItem>
							</MenuItemsGroup>
						</MenuItemsGroup>
						<MenuItem>Convert to ANSI</MenuItem>
						<MenuItem>Convert to UTF-8</MenuItem>
						<MenuItem>Convert to UTF-8-BOM</MenuItem>
						<MenuItem>Convert to UTCS-2 BE BOM</MenuItem>
						<MenuItem>Convert to UTCS-2 LE BOM</MenuItem>
					</MenuItemsGroup>
				</Menu>
				<Menu id="menu2" checkboxes checkMode="radioButton, none, checkbox"
					checkable mode="vertical">
					<MenuItem>Encode in ANSI</MenuItem>
					<MenuItem checked>Encode in UTF-8</MenuItem>
					<MenuItem>Encode in UTF-8-BOM</MenuItem>
					<MenuItem>Encode in UTCS-2 BE BOM</MenuItem>
					<MenuItem separator>Encode in UTCS-2 LE BOM</MenuItem>
					<MenuItemsGroup separator>Convert
			            <MenuItem>Convert to ANSI</MenuItem>
						<MenuItem>Convert to UTF-8</MenuItem>
						<MenuItem>Convert to UTF-8-BOM</MenuItem>
						<MenuItem>Convert to UTCS-2 BE BOM</MenuItem>
						<MenuItem>Convert to UTCS-2 LE BOM</MenuItem>
					</MenuItemsGroup>
					<MenuItem checked>Cyrillic character set</MenuItem>
					<MenuItem>Chinese character set</MenuItem>
					<MenuItem checked>Western European character set</MenuItem>
				</Menu>
				<Menu id="menu3" checkboxes dataSource={this.dataSource}></Menu>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

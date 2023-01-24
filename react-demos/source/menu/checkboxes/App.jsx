import React from "react";
import ReactDOM from "react-dom";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Menu id="menu" checkboxes>
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
					<MenuItemsGroup checkable checkMode="checkbox">View
			            <MenuItem shortcut="Ctrl+W, S" checked>Solution Explorer</MenuItem>
						<MenuItem shortcut="Ctrl+\, Ctrl+M" checked>Team Explorer</MenuItem>
						<MenuItem shortcut="Ctrl+W, L">Server Explorer</MenuItem>
					</MenuItemsGroup>
					<MenuItemsGroup checkable checkMode="radioButton">Encoding
			            <MenuItem>Encode in ANSI</MenuItem>
						<MenuItem>Encode in UTF-8</MenuItem>
						<MenuItem>Encode in UTF-8-BOM</MenuItem>
						<MenuItem>Encode in UTCS-2 BE BOM</MenuItem>
						<MenuItem>Encode in UTCS-2 LE BOM</MenuItem>
					</MenuItemsGroup>
				</Menu>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

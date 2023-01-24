import React from "react";
import ReactDOM from "react-dom";
import { ListMenu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/listmenu';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const listMenu = document.getElementById('listMenu'),
	        radioButtons = document.getElementsByTagName('smart-radio-button');
	    document.getElementById('resizeSlider').addEventListener('change', function(event) {
	        const size = this.value + 'px';
	        listMenu.style.width = size;
	    });
	    radioButtons[0].addEventListener('change', function(event) {
	        listMenu.minimizeIconTemplate = null;
	    });
	    radioButtons[1].addEventListener('change', function(event) {
	        listMenu.minimizeIconTemplate = 'customIconTemplate';
	    });
	    radioButtons[2].addEventListener('change', function(event) {
	        listMenu.minimizeIconTemplate = 'textTemplate';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="resizeSlider" min="100" max="500" value="500"
			    orientation="horizontal" scale-position="near" show-unit unit="px"></Slider>
			    <br />
			     <h3>Minimize icon:</h3>
			    <RadioButton ref="radiobutton" checked>Hamburger icon <em>(default)</em>
			    </RadioButton>
			    <RadioButton ref="radiobutton2">Custom icon</RadioButton>
			    <RadioButton ref="radiobutton3">Text</RadioButton>
			    <br />
			    <br />
			    <ListMenu ref="listmenu" id="listMenu" className="animation" minimize-width="150"
			    drop-down-append-to="body">
			        <MenuItems-group label="File">
			            <MenuItem label="New" shortcut="Ctrl+N"></MenuItem>
			            <MenuItem label="Open" shortcut="Ctrl+0"></MenuItem>
			            <MenuItems-group label="Open Containing Folder">
			                <MenuItem label="Explorer"></MenuItem>
			                <MenuItem label="cmd"></MenuItem>
			            </MenuItems-group>
			            <MenuItem label="Save" shortcut="Ctrl+S" disabled></MenuItem>
			            <MenuItem label="Save As..." shortcut="Ctrl+Alt+S" separator></MenuItem>
			            <MenuItem label="Exit" shortcut="Alt+F4"></MenuItem>
			        </MenuItems-group>
			        <MenuItems-group label="Edit">
			            <MenuItem label="Undo" shortcut="Ctrl+Z"></MenuItem>
			            <MenuItem label="Redo" shortcut="Ctrl+Y" separator></MenuItem>
			            <MenuItem label="Cut" shortcut="Ctrl+X"></MenuItem>
			            <MenuItem label="Copy" shortcut="Ctrl+C"></MenuItem>
			            <MenuItem label="Paste" shortcut="Ctrl+V" disabled></MenuItem>
			        </MenuItems-group>
			        <MenuItems-group label="Encoding">
			            <MenuItem label="Encode in ANSI"></MenuItem>
			            <MenuItem label="Encode in UTF-8"></MenuItem>
			            <MenuItem label="Encode in UTF-8-BOM"></MenuItem>
			            <MenuItem label="Encode in UTCS-2 BE BOM"></MenuItem>
			            <MenuItem label="Encode in UTCS-2 LE BOM" separator></MenuItem>
			            <MenuItems-group label="Character sets">
			                <MenuItems-group label="Cyrillic">
			                    <MenuItem label="ISO 8859-5"></MenuItem>
			                    <MenuItem label="KOI8-R"></MenuItem>
			                    <MenuItem label="KOI8-U"></MenuItem>
			                    <MenuItem label="Windows-1251"></MenuItem>
			                </MenuItems-group>
			                <MenuItems-group label="Chinese">
			                    <MenuItem label="Big5 (Traditional)"></MenuItem>
			                    <MenuItem label="GB2312 (Simplified)"></MenuItem>
			                </MenuItems-group>
			                <MenuItems-group label="Western European">
			                    <MenuItem label="ISO 8859-1"></MenuItem>
			                    <MenuItem label="ISO 8859-15"></MenuItem>
			                    <MenuItem label="OEM 850"></MenuItem>
			                    <MenuItem label="Windows-1252"></MenuItem>
			                </MenuItems-group>
			            </MenuItems-group>
			        </MenuItems-group>
			        <MenuItems-group label="Settings">
			            <MenuItem label="Preferences..."></MenuItem>
			            <MenuItem label="Style Configurator..."></MenuItem>
			            <MenuItem label="Shortcut Mapper..." separator></MenuItem>
			            <MenuItems-group label="Import" separator>
			                <MenuItem label="Import plugin(s)..."></MenuItem>
			                <MenuItem label="Import style theme(s)..."></MenuItem>
			            </MenuItems-group>
			            <MenuItem label="Edit Popup ContextMenu"></MenuItem>
			        </MenuItems-group>
			    </ListMenu>
			    <template id="customIconTemplate">
			        <div id="customIcon"></div>
			    </template>
			    <template id="textTemplate">
			        <div id="textIcon">MENU</div>
			    </template>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

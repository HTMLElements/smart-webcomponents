import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.menu1Container = React.createRef();
		this.menu = React.createRef();
	}

	componentDidMount() {
		const menu1Container = this.menu1Container.current;
		const menu1 = this.menu.current;

		menu1.open(202, 35);
		window.scrollTo(0, 0);

		document.body.addEventListener('contextmenu', function (event) {
			let target = event.target;
			if (menu1Container.contains(target)) {
				event.preventDefault();
			}
		});

		document.addEventListener('mousedown', function (event) {
			if (!menu1.nativeElement.contains(event.target)) {
				menu1.close();
			}
		});
	}

	render() {
		return (
			<div>
				<div className="smart-demo-container">
					<section>
						<div>
							<h2>Menus display a list of choices on a transient sheet of material.</h2>
							<div className="module">
								<p>Menus appear upon interaction with a button, action, or other control.
			                        They display a list of choices, with one choice per line.</p>
								<p>Menu items may be disabled if not applicable to a certain context. Contextual
								menus dynamically change their available menu items based on the current
			                        state of the app.</p>
							</div>
							<div className="module">
								<h3>Types</h3>
								<p>Simple menus (mobile and tablet)
			                        <br />Cascading menus (desktop)
			                        <br />Tree menus
			                        <br />List menus</p>
								<h3>Elevation</h3>
								<p>Menus dropdowns appear above other in-app elements.</p>
								<h3>Behavior</h3>
								<p>Scrollable
			                        <br />Minimizable</p>
							</div>
							<div className="module"></div>
						</div>
					</section>
					<section id="menu-usage">
						<h2>Usage</h2>
						<div className="module module-wide">
							<p>A menu is a temporary piece of material that appears upon interaction
							with a button, action, pointer, or other control. It contains at least
			                    two menu items.</p>
							<p>Each menu item consists of a discrete option or action that can affect
			                    the app, the view, or selected elements within a view.</p>
						</div>
						<div className="module">
							<div ref={this.menu1Container} id="menu1Container">
								<Button id="menu1Token" className="material flat menu-token"><i className="material-icons">&#xE5D4;</i>
								</Button>
								<Menu ref={this.menu} id="menu1" mode="dropDown">
									<MenuItem label="Refresh"></MenuItem>
									<MenuItem label="Settings"></MenuItem>
									<MenuItem label="Send feedback"></MenuItem>
									<MenuItem label="Help"></MenuItem>
									<MenuItem label="Signout"></MenuItem>
								</Menu>
							</div>
							<div>The action overflow in the app bar will emit a menu. It contains five
			                    menu items: “Refresh”, “Settings”, “Send feedback”,“Help,” and “Signout”.</div>
						</div>
						<div className="module">
							<h3>Menu labels</h3>
							<p>The label of a button or control should concisely and accurately reflect
							the items within the menu. Menu bars typically use single words as labels,
			                    like “file,” “view,” and “edit.” Other contexts may require longer labels.</p>
							<h3>Disabled menu options</h3>
							<p>Menus display a consistent set of menu items. A menu item may be enabled
			                    or disabled based on the current state of the application.</p>
						</div>
						<div className="module module-wide">
							<div id="menu2Container">
								<Menu id="menu2" className="material animation" checkboxes>
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
							<div>The title “View” accurately describes the unifying characteristic of the
			                    menu items it contains.</div>
						</div>
						<div className="module module-wide">
							<h3>Contextual menus</h3>
							<p>Contextual menus dynamically change their available menu items based on
			                    the current state of the application.</p>
							<ul>
								<li>Menu items that are irrelevant to the current context may be removed</li>
								<li>Menu items which are relevant but need certain conditions to be met may
								be disabled. For example, the Copy menu option becomes enabled when text
			                        is selected.</li>
							</ul>
							<h3>Single menu-item states</h3>
							<p>Some app states may result in a contextual menu with only a single menu
							item. For example, when highlighting text on a web page, Android display
			                    only the Copy menu item, as users cannot cut or paste text.</p>
						</div>
					</section>
					<section id="menu-items">
						<h2>Menu items</h2>
						<div className="module">
							<h3>Single-line display</h3>
							<p>Each menu item is limited to a single line of text (a single word or short
			                    phrase) that describes the action it will perform when selected.</p>
							<p>Menu items may also contain:</p>
							<ul>
								<li>Icons and helper text, like keyboard shortcuts</li>
								<li>Controls like checkmarks to indicate multiple selected items or states</li>
							</ul>
							<h3>Menu ordering</h3>
							<p>Menus with static content should have the most frequently used menu items
			                    placed at the top of the menu.</p>
							<p>Menus with dynamic content may have other behavior, such as placing previously
			                    used fonts at the top of the menu. The order can change based on user actions.</p>
							<h3>Menu nesting</h3>
							<p>Menu items can reveal nested submenus. Ideally, limit nesting to one level
			                    deep, as it can be difficult to navigate multiple nested submenus.</p>
							<h3>Open direction</h3>
							<p>Submenu open direction (dropdown position) can be also specified. Available
							options are: 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'overlay-left',
							'overlay-right', and 'auto' (behaves like 'bottom-right', but also has
			                    browser bounds detection).</p>
							<h3>Disabled actions</h3>
							<p>Displaying actions as disabled, rather than removing them, lets the user
			                    know they exist under the right conditions.</p>
							<p>For example, Redo is disabled when there is nothing to redo. Cut and Copy
			                    are disabled until content is selected.</p>
							<h3>Scrollable content</h3>
							<p>If the height of the main Menu or a submenu is specified and the content
			                    overflows, the content becomes scrollable.</p>
						</div>
						<div className="module">
							<div className="vertical-menu-container">
								<Menu id="menu4" className="material animation" mode="vertical"
									checkboxes>
									<MenuItemsGroup label="File">
										<MenuItem label="New" shortcut="Ctrl+N"></MenuItem>
										<MenuItem label="Open" shortcut="Ctrl+0"></MenuItem>
										<MenuItemsGroup label="Open Containing Folder">
											<MenuItem label="Explorer"></MenuItem>
											<MenuItem label="cmd"></MenuItem>
										</MenuItemsGroup>
										<MenuItem label="Save" shortcut="Ctrl+S" disabled></MenuItem>
										<MenuItem label="Save As..." shortcut="Ctrl+Alt+S" separator></MenuItem>
										<MenuItem label="Exit" shortcut="Alt+F4"></MenuItem>
									</MenuItemsGroup>
									<MenuItemsGroup label="Edit">
										<MenuItem label="Undo" shortcut="Ctrl+Z"></MenuItem>
										<MenuItem label="Redo" shortcut="Ctrl+Y" separator></MenuItem>
										<MenuItem label="Cut" shortcut="Ctrl+X"></MenuItem>
										<MenuItem label="Copy" shortcut="Ctrl+C"></MenuItem>
										<MenuItem label="Paste" shortcut="Ctrl+V" disabled></MenuItem>
									</MenuItemsGroup>
									<MenuItemsGroup label="Encoding">
										<MenuItem label="Encode in ANSI"></MenuItem>
										<MenuItem label="Encode in UTF-8"></MenuItem>
										<MenuItem label="Encode in UTF-8-BOM"></MenuItem>
										<MenuItem label="Encode in UTCS-2 BE BOM"></MenuItem>
										<MenuItem label="Encode in UTCS-2 LE BOM" separator></MenuItem>
										<MenuItemsGroup label="Character sets">
											<MenuItemsGroup label="Cyrillic">
												<MenuItem label="ISO 8859-5"></MenuItem>
												<MenuItem label="KOI8-R"></MenuItem>
												<MenuItem label="KOI8-U"></MenuItem>
												<MenuItem label="Windows-1251"></MenuItem>
											</MenuItemsGroup>
											<MenuItemsGroup label="Chinese">
												<MenuItem label="Big5 (Traditional)"></MenuItem>
												<MenuItem label="GB2312 (Simplified)"></MenuItem>
											</MenuItemsGroup>
											<MenuItemsGroup label="Western European">
												<MenuItem label="ISO 8859-1"></MenuItem>
												<MenuItem label="ISO 8859-15"></MenuItem>
												<MenuItem label="OEM 850"></MenuItem>
												<MenuItem label="Windows-1252"></MenuItem>
											</MenuItemsGroup>
										</MenuItemsGroup>
									</MenuItemsGroup>
									<MenuItemsGroup label="Show" checkable checkMode="checkbox">
										<MenuItem label="Grid lines" checked></MenuItem>
										<MenuItem label="Page breaks"></MenuItem>
										<MenuItem label="Rules" checked></MenuItem>
									</MenuItemsGroup>
								</Menu>
							</div>
							<div>Vertical Menu with nested items and auto/bottom-right open direction</div>
						</div>
						<div className="module"></div>
						<div className="module module-wide">
							<div className="vertical-menu-container">
								<Menu id="menu5" className="material animation" mode="vertical"
									checkboxes drop-down-position="top-left">
									<MenuItemsGroup label="File">
										<MenuItem label="New" shortcut="Ctrl+N"></MenuItem>
										<MenuItem label="Open" shortcut="Ctrl+0"></MenuItem>
										<MenuItem label="Save" shortcut="Ctrl+S" disabled></MenuItem>
										<MenuItem label="Save As..." shortcut="Ctrl+Alt+S" separator></MenuItem>
										<MenuItem label="Exit" shortcut="Alt+F4"></MenuItem>
									</MenuItemsGroup>
									<MenuItemsGroup label="Edit">
										<MenuItem label="Undo" shortcut="Ctrl+Z"></MenuItem>
										<MenuItem label="Redo" shortcut="Ctrl+Y" separator></MenuItem>
										<MenuItem label="Cut" shortcut="Ctrl+X"></MenuItem>
										<MenuItem label="Copy" shortcut="Ctrl+C"></MenuItem>
										<MenuItem label="Paste" shortcut="Ctrl+V" disabled></MenuItem>
									</MenuItemsGroup>
									<MenuItemsGroup label="Encoding">
										<MenuItem label="Encode in ANSI"></MenuItem>
										<MenuItem label="Encode in UTF-8"></MenuItem>
										<MenuItem label="Encode in UTF-8-BOM"></MenuItem>
										<MenuItem label="Encode in UTCS-2 BE BOM"></MenuItem>
										<MenuItem label="Encode in UTCS-2 LE BOM" separator></MenuItem>
									</MenuItemsGroup>
								</Menu>
							</div>
							<div>Vertical Menu with nested items and top-left open direction</div>
						</div>
					</section>
					<section id="tree-menu">
						<h2>Tree menu</h2>
						<div className="module">A tree menu is a vertical menu that shows submenus with indentation under
			                the parent item, akin to a tree view.</div>
						<div className="module module-wide">
							<div className="vertical-menu-container">
								<Menu id="menu6" className="material animation" mode="tree">
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
									<MenuItemsGroup>Encoding
			                            <MenuItem>Encode in ANSI</MenuItem>
										<MenuItem>Encode in UTF-8</MenuItem>
										<MenuItem>Encode in UTF-8-BOM</MenuItem>
										<MenuItem>Encode in UTCS-2 BE BOM</MenuItem>
										<MenuItem separator>Encode in UTCS-2 LE BOM</MenuItem>
										<MenuItemsGroup>Character sets
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
									</MenuItemsGroup>
								</Menu>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

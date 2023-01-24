import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';
import { TextBox } from 'smart-webcomponents-react/textbox';
import { Window } from 'smart-webcomponents-react/window';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.templateContainer = React.createRef();
	}

	componentDidMount() {
		this.templateContainer.current.innerHTML = `
		<template id="headerTemplate">
			<div className="headerTemplateContainer"> <i className="material-icons">&#xE8B8;</i> Window with an Icon inside the Header</div>
		</template>
		<template id="footerTemplate">
			<div className="footerTemplateContainer">
				<smart-button  className="flat">Cancel</smart-button>
				<smart-button  className="flat">Ok</smart-button>
			</div>
		</template>
		<template id="footerTemplateLight">
			<div className="footerTemplateContainer">
				<smart-button  className="flat">CANCEL</smart-button>
				<smart-button  className="flat">DISCARD</smart-button>
			</div>
		</template>
		<template id="footerTemplateAgreenment">
			<div className="footerTemplateContainer">
				<smart-button  className="flat">DISAGREE</smart-button>
				<smart-button  className="flat">AGREE</smart-button>
			</div>
		</template>
		`;
	}

	render() {
		return (
			<div>
				<div ref={this.templateContainer}></div>
				<div className="smart-demo-container">

					<div id="materialWindowContainer">
						<section>
							<div>
								<h2>Windows inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.</h2>
								<div className="module">
									<p>Windows contain text and UI controls. They retain focus until dismissed
									or a required action has been taken. Use windows sparingly because they
			                            are interruptive.</p>
									<p>Some windows types include:</p>
									<ul>
										<li><strong>Alerts </strong>are urgent interruptions that inform about a situation
			                                and require acknowledgement.</li>
										<li><strong>Progress</strong> windows inform about a specific task completion.</li>
										<li><strong>Dialogs</strong> require users to explicitly confirm a choice.</li>
									</ul>
								</div>
								<div className="module">
									<h3>Behavior</h3>
									<p>Windows should never be obscured, either by other elements or the screen
			                            edge. Dialogs are dismissed when a required action has been taken.</p>
									<h3>Full-screen dialogs</h3>
									<p>Full-screen dialogs are best suited to complex tasks, or require an input
									method editor, as they group a series of tasks together before they can
			                            be saved.</p>
								</div>
								<div className="module"></div>
							</div>
						</section>
						<section id="appearance">
							<h2>Appearance</h2>
							<div className="module">
								<p>Windows consist of three main sections: Header, Content and Footer.</p>
							</div>
							<div className="module">
								<p>Window sections</p>
							</div>
							<div className="module">
								<p><strong>Header</strong> section is optional. It can contain an arbitrary
			                        text or other Custom Elements.</p>
								<p>By default, the header section contains the lable of the Window. The label
			                        can be changed by setting the <strong>label</strong> property.</p>
								<p>The content of the Header section can be completely replaced using an
								HTMLTemplate. In order to do that the user has to apply the id of an HTML
			                        Template to the <strong>headerTempalte</strong> property.</p>
							</div>
							<div className="module">
								<Window opened pinned headerTemplate="headerTemplate">No Content Added</Window>
								<p>Window with a material icon inside the Header</p>
							</div>
							<div className="module">
								<p><strong>Content</strong> section holds the main information presented to
			                        the user. It can contain any HTML.</p>
								<p>When the window is collapsed the content is hidden. The only visible section
			                        if the Header.</p>
							</div>
							<div className="module">
								<Window className="content-window" opened pinned label="Window with Content">
									<ListBox >
										<ListItem>Item 1</ListItem>
										<ListItem>Item 2</ListItem>
										<ListItem>Item 3</ListItem>
										<ListItem>Item 4</ListItem>
									</ListBox>
								</Window>
								<p>Window with a ListBox inside.</p>
							</div>
							<div className="module">
								<p><strong>Footer</strong> section is optional. It can contain an arbitrary
			                        text or other Custom Elements.</p>
								<p>Usualy used to hold the Dialog interaction controls.</p>
							</div>
							<div className="module confirmation-window2">
								<Window className="content-window animation" opened pinned label="Permissions"
									footerTemplate="footerTemplate">
									<ListBox selectionMode="radioButton">
										<ListItem selected>Danish scrollable list item</ListItem>
										<ListItem>Eggs scrollable list item</ListItem>
									</ListBox>
								</Window>
								<p>Permissions</p>
							</div>
							<div className="module confirmation-window">
								<Window className="content-window animation" opened pinned label="Phone ringtone"
									footerTemplate="footerTemplate">
									<ListBox selectionMode="radioButton">
										<ListItem>None</ListItem>
										<ListItem>Callisto</ListItem>
										<ListItem>Dione</ListItem>
										<ListItem selected>Ganymede</ListItem>
										<ListItem>Hangouts Call</ListItem>
										<ListItem>Luna</ListItem>
										<ListItem>Oberon</ListItem>
										<ListItem>Phobos</ListItem>
										<ListItem>Natural</ListItem>
										<ListItem>Onward</ListItem>
										<ListItem>Organic</ListItem>
										<ListItem>Orion</ListItem>
										<ListItem>Pegasus</ListItem>
										<ListItem>Titania</ListItem>
										<ListItem>Pyxis</ListItem>
										<ListItem>Luna</ListItem>
									</ListBox>
								</Window>
								<p>Ringtone selection window</p>
							</div>
							<div className="module window-themes">
								<h2>Themes</h2>
								<br />
								<h3>Windows without header bars</h3>
								<p>Most windows don't need headers.</p>
								<p>They summarize a decision in a sentence or two by either:</p>
								<ul>
									<li>Asking a question (e.g. "Delete this conversation?")</li>
									<li>Making a statement related to the action buttons</li>
								</ul>
							</div>
							<div className="module window-themes window-themes1">
								<Window className="content-window animation" opened pinned footerTemplate="footerTemplateLight">
									<p>Discard draft ?</p>
								</Window>
							</div>
							<div className="module window-themes">
								<h3>Windows width header bars</h3>
								<p>Use header bar windows only for high-risk situations, such as the potential
								loss of connectivity. Users should be able to understand the choices based
			                        on the header and button text alone.</p>
								<p>If a header is required:</p>
								<ul>
									<li>Use a clear question or statement with an explanation in the content area,
			                            such as "Erase USB storage?"</li>
									<li>Avoid apologies, ambiguity, or questions, such as “Warning!” or “Are you
			                            sure?”</li>
								</ul>
							</div>
							<div className="module window-themes window-with-header-themes2">
								<Window className="content-window animation" opened pinned label="Use Google's location service?"
									footerTemplate="footerTemplateAgreenment">
									<p>Let Google help apps determine location. This means sending anonymous
			                            location data to Google, event when no apps are running.</p>
								</Window>
							</div>
						</section>
						<section id="behavior">
							<h2>Behavior</h2>
							<div className="module">
								<h2>Modal</h2>
								<p>Windows can be modal by setting the <strong>modal</strong> property.</p>
								<p>Modal windows disable background intereaction whilte opened.</p>
							</div>
							<div className="module window-themes window-modal">
								<Window className="content-window animation" opened pinned modal
									footerTemplate="footerTemplateLight">
									<p>Discard draft ?</p>
								</Window>
							</div>
							<div className="module"></div>
							<div className="module">
								<h2>Pinned</h2>
								<p>Pinned Windows can't be dragged. They are used for alerts or dialogs.
			                        By default <strong>pinned</strong> property is not applied. The Header section
			                        of the element is the window's draggable area.</p>
							</div>
							<div className="module window-themes window-modal unpinned">
								<Window className="content-window animation" opened label="Hi"
									footerTemplate="footerTemplateLight">
									<p>What's your favourite animal ?</p>
									<TextBox ></TextBox>
								</Window>
							</div>
							<div className="module"></div>
							<div className="module">
								<h2>Resizable</h2>
								<p>Resizable Windows can be resized from any direction. By default <strong>resizeMode</strong> property
			                        is not set.</p>
								<p>Several modes are available:</p>
								<ul>
									<li>none</li>
									<li>horizontal</li>
									<li>vertical</li>
									<li>both</li>
								</ul>
							</div>
							<div className="module window-themes window-modal scrollable-content">
								<Window className="content-window animation" opened resizeMode="both"
									label="Resizable Window">
									<div>
										<h4>Scrollable content exception</h4>
										<p>Some dialog content requires scrolling, such as lists of ringtones.</p>
										<ul>
											<li>For scrollable lists of options, the dialog title remains pinned to the
											top. This ensures that a selected item remains visible with the title,
			                                    regardless of the item’s position in the list.</li>
											<li>Otherwise, the title scrolls off with the content. Actions always remain
			                                    in place when content scrolls.</li>
										</ul>
										<p>Dialogs are separate from the underlying parent material and do not scroll
			                                with it.</p>
										<h4>Displaying additional content</h4>
										<p>To disclose additional content in a dialog, do so using inline expansion
										within the content area. Or consider alternative components that are optimized
			                                for large amounts of content.</p>
										<h4>Dismissing dialogs</h4>
										<p>Dialogs may be dismissed either by tapping outside of the dialog, or tapping
										the system back button (on Android). Alternatively, the user’s ability
										to dismiss a dialog may be disabled, so that one of the actions must be
			                                chosen before proceeding.</p>
									</div>
								</Window>
							</div>
							<div className="module">
								<h2>Header Controls</h2>
								<p>The header section of the Window element contains the control buttons
								used to do operations like maximizing, minimizing, closing, collapsing
			                        and etc.</p>
								<p>Those operations can be executed programatically as well by calling the
			                        appropriate method.</p>
							</div>
							<div className="module window-themes window-modal header-controls">
								<Button className="open-window-button">Open</Button>
								<Window className="content-window animation" opened
									resizable label="Albums">
									<img src="https://www.htmlelements.com/demos/images/albums_pop.png" />
								</Window>
							</div>
							<div className="module window-themes window-modal header-controls dark">
								<Button className="open-window-button">Open</Button>
								<Window className="content-window animation" opened
									resizable maximized label="Albums">
									<Tabs className="animation padding">
										<TabItem label="Pop">
											<img src="https://www.htmlelements.com/demos/images/albums_pop.png" />
										</TabItem>
										<TabItem label="Alternative">
											<img src="https://www.htmlelements.com/demos/images/albums_alternative.png" />
										</TabItem>
										<TabItem label="Rock">
											<img src="https://www.htmlelements.com/demos/images/albums_rock.png" />
										</TabItem>
										<TabItem label="R & B">
											<img src="https://www.htmlelements.com/demos/images/albums_rnb.png" />
										</TabItem>
									</Tabs>
								</Window>
							</div>
						</section>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

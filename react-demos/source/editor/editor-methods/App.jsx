import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Editor } from 'smart-webcomponents-react/editor';

class App extends React.Component {
	constructor(prop) {
		super(prop);

		this.editor = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.options = React.createRef();
	}

	init() {
		const editor = this.editor.current,
			disableToolbarItemButton = this.button.current,
			enableToolbarItemButton = this.button2.current;

		this.options.current.addEventListener('click', function (event) {
			const button = event.target.closest('smart-button');

			if (!button) {
				return;
			}

			const methodName = event.target.closest('smart-button').id;
			let value;

			if (methodName === 'disableToolbarItem') {
				value = 'formats';
				disableToolbarItemButton.disabled = true;
				enableToolbarItemButton.disabled = false;
			}
			else if (methodName === 'enableToolbarItem') {
				value = 'formats';
				disableToolbarItemButton.disabled = false;
				enableToolbarItemButton.disabled = true;
			}

			const output = editor[methodName](value ? value : undefined);

			if (output instanceof Promise) {
				output.then(o => o && window.alert(o));
			}
			else if (output) {
				window.alert(output);
			}
		});
	};

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Editor ref={this.editor} id="editor">
					<p>smartEditor represents a ready-for-use HTML text editor which can simplify
			            web content creation or be a replacement of your HTML Text Areas.</p>
					<h2>Features:</h2>
					<ul>
						<li>Basic &amp; advanced styling. With smartEditor, you can easily apply bold,
			                italic, underline styles as well as different fonts and font size.</li>
						<li>Colors Picking. The built-in Color Pickers allow you to highlight text
			                by changing its text color or background color.</li>
						<li>Inline editing. The feature allows you to edit inline and the smartEditor's
			                toolbar is displayed on demand above the editing area.</li>
						<li>Right to left interface. smartEditor can switch to Right to Left layout
			                and editing mode by setting a single property called "rtl" to true.</li>
						<li>Hyperlinks. A built-in tool for inserting, modifying and removing hyperlinks
			                is available.</li>
						<li>Images. Images can be edited via a built-in Dialog where you can define
			                the image's url, size, alt text and layout.</li>
						<li>Tables. The Editor allows to creata tables with custom rows/colums and
			                apply attributes like header, alternation and etc.</li>
						<li>Export to HTML and Print.</li>
						<li>Customizable Toolbars. The Toolbar items can be customized as well as
			                the Dialog Window for the table/image/hyperlink actions.</li>
						<li>Force paste as plain text. smartEditor has a property called "pasteFormat".
						By setting it to "plainText", the clipboard data will be always pasted
			                as plain text</li>
						<li>PC, Touch and Mobile Devices Support</li>
						<li>Web Standards Compliant</li>
						<li>Rich and easy to use JavaScript API</li>
						<li>Easy customization and built-in themes</li>
					</ul>
					<p>
						<table className="browserref notranslate">
							<tbody>
								<tr>
									<th style={{ fontSize: '16px', textAlign: 'left' }}>Element</th>
									<th title="Chrome">
										<div className="bsChrome" />
									</th>
									<th title="MS Edge">
										<div className="bsEdge" />
									</th>
									<th title="Firefox">
										<div className="bsFirefox" />
									</th>
									<th title="Safari">
										<div className="bsSafari" />
									</th>
									<th title="Opera">
										<div className="bsOpera" />
									</th>
								</tr>
								<tr>
									<td style={{ textAlign: 'left' }}>&lt;Editor&gt;</td>
									<td>Yes</td>
									<td>Yes</td>
									<td>Yes</td>
									<td>Yes</td>
									<td>Yes</td>
								</tr>
							</tbody>
						</table>
					</p>
				</Editor>
				<div ref={this.options} className="options">
					<div className="description">
						<h4>Description</h4>
The following demo showcases most of the Smart Editor Methods. Clicking
			            on a button below will call the according method.</div>
					<div className="option">
						<Button id="focus">Focus</Button>
					</div>
					<div className="option">
						<Button id="blur">Blur</Button>
					</div>
					<div className="option">
						<Button id="collapseToolbar">Collapse toolbar</Button>
					</div>
					<div className="option">
						<Button id="expandToolbar">Expand Toolbar</Button>
					</div>
					<div className="option">
						<Button ref={this.button} id="disableToolbarItem">Disable Formats Item</Button>
					</div>
					<div className="option">
						<Button ref={this.button2} id="enableToolbarItem" disabled>Enable Formats Item</Button>
					</div>
					<div className="option">
						<Button id="getCharCount">Get Char Count</Button>
					</div>
					<div className="option">
						<Button id="selectAll">Select All</Button>
					</div>
					<div className="option">
						<Button id="clearContent">Clear Content</Button>
					</div>
					<div className="option">
						<Button id="getHTML">Get HTML</Button>
					</div>
					<div className="option">
						<Button id="getText">Get Text</Button>
					</div>
					<div className="option">
						<Button id="splitMode">Split Mode</Button>
					</div>
					<div className="option">
						<Button id="previewMode">Preview / Source Code Mode</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Editor } from 'smart-webcomponents-react/editor';

class App extends React.Component {
	constructor(prop) {
		super(prop);

		this.editor = React.createRef();
		this.options = React.createRef();
	}

	placeholder = 'Please Enter content...';

	toolbarItems = ['Bold', 'Italic', 'Underline', 'StrikeThrough',
		'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
		'LowerCase', 'UpperCase', '|',
		'Formats', 'Alignment', 'OrderedList', 'UnorderedList',
		'Outdent', 'Indent', '|',
		'hyperlink', 'Image', '|', 'ClearFormat',
		'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
	];

	init() {
		const editor = this.editor.current,
			options = this.options.current;

		options.addEventListener('change', function (event) {
			const target = event.target,
				innerHTML = target.innerHTML;

			if (target instanceof window.Smart.RadioButton) {
				if (innerHTML.indexOf('multiRow') > -1) {
					editor.toolbarViewMode = 'multiRow';
				}
				else if (innerHTML.indexOf('toggle') > -1) {
					editor.toolbarViewMode = 'toggle';
				}
				else {
					editor.toolbarViewMode = 'scroll';
				}
			}
		});
	};

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Editor ref={this.editor} id="editor" placeholder={this.placeholder} toolbarItems={this.toolbarItems}></Editor>
				<div ref={this.options} className="options">
					<div className="description">
						<h4>Toolbar Scroll View Mode</h4>
					</div>
					<div className="option">
						<p>
							<RadioButton groupName={"editorOptions"}><b>multiRow</b> - Multi-row Toolbar</RadioButton>
						</p>
						<p>
							<RadioButton groupName={"editorOptions"} checked><b>toggle</b> - Expandable Toolbar</RadioButton>
						</p>
						<p>
							<RadioButton groupName={"editorOptions"}><b>scroll</b> - Scrollable Toolbar</RadioButton>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

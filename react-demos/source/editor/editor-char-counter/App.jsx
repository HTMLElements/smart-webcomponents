import React from "react";
import ReactDOM from "react-dom";
import { Editor } from 'smart-webcomponents-react/editor';

class App extends React.Component {

	maxCharCount = 1000;

	showCharCount = true;

	toolbarItems = ['bold', 'italic', 'FontSize', 'fontColor', 'BackgroundColor', 'table', 'hyperlink',
		'removeLink', 'alignment', 'table', 'fontname', 'formats', 'splitmode'];


	componentDidMount() {
	}

	render() {
		return (
			<div>
				<Editor id="editor" maxCharCount={this.maxCharCount}
					showCharCount={this.showCharCount}
					toolbarItems={this.toolbarItems}>
					<h1>Smart HTMLElements</h1>
					<p> <strong>Smart</strong> is new, modern, easy, platform independent, cross-browser
			            compatible, Responsive and adjusts for the best user experience across
			            devices. Implements Google's Material Design.</p>
					<p>Reliable, feature rich Front-End Ecmascript6 framework. Create your own
					Custom Elements and Web Components or use our UI Toolkit built with Smart.
					It increases productivity and minimizes development cost. Works well with
			            Angular, React, Vue.</p>
					<h4>Here is a snapshot of a Dashboard Application that is available on the website:</h4>
					<a href="https://www.htmlelements.com/templates/"> <img style={{ width: "50%" }}

						src="https://www.htmlelements.com/demos/images/admin-template-3.png"

						data-lazy-src="https://www.htmlelements.com/demos/images/admin-template-3.png"

						alt="Admin Dashboard Template UX Theme" className="lazyloaded" data-was-processed="true" />
						<noscript>
							<img style={{ maxWidth: "100%" }} src="https://www.htmlelements.com/demos/images/admin-template-3.png"

								alt="Admin Dashboard Template UX Theme" />
						</noscript> </a>
					<p>You can find more demos, sample applications and documentations on the
			            <a
							href="https://www.htmlelements.com">website</a>
					</p>
				</Editor>
				<div className="options">
					<div className="description">
						<h4>Description</h4>
						<b>shorCharCount</b> property displays a char counter in the bottom right
			            corner of the Editor. <b>maxCharCount</b> detemrines the maximum number of
			            characters inside the Editor.
			            <p>When the characters inside the Editor are equal or above 70% of the maximum
			                the counter is colored in a different color (yellow by default).</p>
						<p>When the characters are more or equal to 90% of the maxmim the counter
						is colored in another color (dark red by default).
			                <p>These colorings indicate that the maximum is near or reached.</p>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

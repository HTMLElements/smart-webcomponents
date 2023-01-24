import React from "react";
import ReactDOM from "react-dom";
import { Editor } from 'smart-webcomponents-react/editor';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.log = React.createRef();
	}

	handleEvent(e) {
		this.log.current.innerHTML += e.type + '<br />';
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Editor ref="editor" id="editor" onChange={this.handleEvent.bind(this)}
					onActionStart={this.handleEvent.bind(this)} onActionEnd={this.handleEvent.bind(this)}
					onResizeStart={this.handleEvent.bind(this)}
					onResizeEnd={this.handleEvent.bind(this)}
					onInlineToolbarOpen={this.handleEvent.bind(this)}
					onInlineToolbarClose={this.handleEvent.bind(this)}
					onDropDownToolbarOpen={this.handleEvent.bind(this)}
					onDropDownToolbarClose={this.handleEvent.bind(this)}
					onDialogOpen={this.handleEvent.bind(this)}
					onDialogOpening={this.handleEvent.bind(this)}
					onDialogClose={this.handleEvent.bind(this)}
					onDialogClosing={this.handleEvent.bind(this)}
					onImageUploadSuccess={this.handleEvent.bind(this)}
					onImageUploadFailed={this.handleEvent.bind(this)}
					onToobarItemClick={this.handleEvent.bind(this)}>
					<p>
						<h1>HTML Image</h1>
						<img src="https://www.htmlelements.com/wp-content/design/assets/images/device-section-bg.png"
							alt="Smart HTML Elements Browser Support" />
					</p>
					<p>
						<h1>HTML Links</h1>
						<p><a href="https://www.htmlelements.com/">Smart Web Components Library</a>
						</p>
					</p>
					<p>
						<h1>HTML Table</h1>
						<table id="customers">
							<tr>
								<th>Company</th>
								<th>Contact</th>
								<th>Country</th>
							</tr>
							<tr>
								<td>Alfreds Futterkiste</td>
								<td>Maria Anders</td>
								<td>Germany</td>
							</tr>
							<tr>
								<td>Berglunds snabbköp</td>
								<td>Christina Berglund</td>
								<td>Sweden</td>
							</tr>
							<tr>
								<td>Centro comercial Moctezuma</td>
								<td>Francisco Chang</td>
								<td>Mexico</td>
							</tr>
							<tr>
								<td>Ernst Handel</td>
								<td>Roland Mendel</td>
								<td>Austria</td>
							</tr>
							<tr>
								<td>Island Trading</td>
								<td>Helen Bennett</td>
								<td>UK</td>
							</tr>
							<tr>
								<td>Königlich Essen</td>
								<td>Philip Cramer</td>
								<td>Germany</td>
							</tr>
							<tr>
								<td>Laughing Bacchus Winecellars</td>
								<td>Yoshi Tannamuri</td>
								<td>Canada</td>
							</tr>
							<tr>
								<td>Magazzini Alimentari Riuniti</td>
								<td>Giovanni Rovelli</td>
								<td>Italy</td>
							</tr>
							<tr>
								<td>North/South</td>
								<td>Simon Crowther</td>
								<td>UK</td>
							</tr>
							<tr>
								<td>Paris spécialités</td>
								<td>Marie Bertrand</td>
								<td>France</td>
							</tr>
						</table>
					</p>
				</Editor>
				<div class="options">
					<h3>Events:</h3>
					<div class="demo-description">
						<p>Smart Editor fires the following events:</p>
						<ul>
							<li>change - fired on blur if the content has changed</li>
							<li>actionStart - fired when a Toolbar action is about to start. Cancelable</li>
							<li>actionEnd - fired when a Toolbar action has ended.</li>
							<li>resizeStart - fired when an image/table resizing has started</li>
							<li>resizeEnd - fired when an image/table resizing has ended</li>
							<li>inlineToolbarOpen - fired when the inline Toolbar is opening</li>
							<li>inlineToolbarClose - fired when the inline Toolbar is closed</li>
							<li>dropDownToolbarOpen - fired when the Drop Down Toolbar is opened</li>
							<li>dropDownToolbarClose - fired when the Drop Down Toolbar is closed</li>
							<li>dialogOpen - fired when the Dialog Window is opened</li>
							<li>dialogOpening - fired when the Dialog Window is opening. Cancelable</li>
							<li>dialogClose - fired when the Dialog Window is closed</li>
							<li>dialogClosing - fired when the Dialog Window is closing. Cancelable</li>
							<li>imageUploadSuccess - fired when the uploading of an image is successful</li>
							<li>imageUploadFailed - fired when the uploading of an image is unsuccessful</li>
							<li>toobarItemClick - fired when a toolbar item is clicked</li>
						</ul>
					</div>
					<div class="option" id="eventLog">
						<h3>Event Log:</h3>
						<div ref={this.log} id="log"></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

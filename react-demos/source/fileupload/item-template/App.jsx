import React from "react";
import ReactDOM from "react-dom";
import { FileUpload } from 'smart-webcomponents-react/fileupload';
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.fileupload = React.createRef();
	}

	init() {
		const itemTemplate = document.createElement('template');

		itemTemplate.id = 'itemTemplate';
		itemTemplate.innerHTML = '<smart-progress-bar ref="progressbar">{{filename}}</smart-progress-bar>';
		document.body.appendChild(itemTemplate);

		this.fileupload.current.itemTemplate = 'itemTemplate';
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<FileUpload ref={this.fileupload} showProgress multiple uploadUrl=""></FileUpload>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

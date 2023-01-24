import React from "react";
import ReactDOM from "react-dom";
import { FileUpload } from 'smart-webcomponents-react/fileupload';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.eventContainer = React.createRef();
	}

	printEventName(event) {
		const item = document.createElement('div');
		item.innerHTML = item.innerHTML + event.type + '<br />';
		this.eventContainer.current.appendChild(item);
	}


	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">File Upload | Events which are raised by the Web Component</div>
				<div className="container">
					<FileUpload multiple uploadUrl=""
						onFileSelected={this.printEventName.bind(this)}
						onUploadCanceled={this.printEventName.bind(this)}
						onUploadCompleted={this.printEventName.bind(this)}
						onUploadError={this.printEventName.bind(this)}
						onUploadPaused={this.printEventName.bind(this)}
						onUploadStarted={this.printEventName.bind(this)}
						onValidationError={this.printEventName.bind(this)}
					></FileUpload>
				</div>
				<div ref={this.eventContainer} className="container" id="eventContainer">
					<h2>Events:</h2>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

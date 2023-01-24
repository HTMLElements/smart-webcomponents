import React from "react";
import ReactDOM from "react-dom";
import { FileUpload } from 'smart-webcomponents-react/fileupload';

class App extends React.Component {
	messages = {
		'en': {
			'browse': 'Browse',
			'uploadFile': 'Upload File',
			'cancelFile': 'Cancel File',
			'pauseFile': 'Pause File',
			'uploadAll': 'Upload All',
			'cancelAll': 'Cancel All',
			'pauseAll': 'Pause All',
			'totalFiles': 'Total files: ',
			'connectionError': '{{elementType}}: File Upload requires connection to the server.',
			'wrongItemIndex': '{{elementType}}: There is no file with such an index in the list of uploaded files.',
			'tooLongFileName': '{{elementType}}: File name is too long.'
		},
		'de': {
			'browse': 'Durchsuche',
			'uploadFile': 'Hochladen',
			'cancelFile': 'Absagen',
			'pauseFile': 'Abbrechen',
			'uploadAll': 'Alle Hochladen',
			'cancelAll': 'Alle Absagen',
			'pauseAll': 'Abbrechen',
			'totalFiles': 'Gesamtzahl der Dateien: ',
			'connectionError': '{{elementType}}: Der Datei-Upload erfordert eine Verbindung zum Server.',
			'wrongItemIndex': '{{elementType}}: Es gibt keine Datei mit einem solchen Index in der Liste der hochgeladenen Dateien.',
			'tooLongFileName': '{{elementType}}: Dateiname ist zu lang.'
		}
	};

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">File Upload | Localization of Strings</div>
				<FileUpload multiple uploadUrl="" messages={this.messages} locale="de"></FileUpload>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

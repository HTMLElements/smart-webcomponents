import React from "react";
import ReactDOM from "react-dom";
import { FileUpload } from 'smart-webcomponents-react/fileupload';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.fileupload = React.createRef();
	}

	init() {
		const messages = Object.assign({}, this.fileupload.current.messages);
		messages['he'] = {
			'browse': 'דפדף',
			'uploadFile': 'העלה קובץ',
			'cancelFile': 'בטל קובץ',
			'pauseFile': 'השהה קובץ',
			'uploadAll': 'העלה הכל',
			'cancelAll': 'בטל הכל',
			'pauseAll': 'השהה הכל',
			'totalFiles': 'סך הקבצים: ',
			'connectionError': '{{elementType}}: העלאת קובץ דורשת חיבור לשרת.',
			'wrongItemIndex': '{{elementType}}: אין קובץ עם אינדקס כזה ברשימת הקבצים שהועלה.',
			'tooLongFileName': '{{elementType}}: שם הקובץ ארוך מדי.'
		};
		this.fileupload.current.messages = messages;
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">העלאת קבצים - רכיב המאפשר להעלות קובץ אחד או מספר רב של קבצים.</div>
				<FileUpload ref={this.fileupload} rightToLeft locale="he"></FileUpload>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

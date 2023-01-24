import React from "react";
import ReactDOM from "react-dom";
import { Path } from 'smart-webcomponents-react/path';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.path = React.createRef();
		this.path2 = React.createRef();
	}

	value = "C:\\Users\\Inowotny\\Documents\\LabVIEW Projects\\PathControlPlay\\DesktopPath.gvi";

	init() {
		const paths = [this.path.current, this.path2.current],
			messages = Object.assign({}, paths[0].messages);
		messages['he'] = {
			'notAPath': 'הגדר לא לנתיב',
			'validPath': 'הגדר לנתיב תקף'
		};

		for (let p = 0; p < paths.length; p++) {
			paths[p].messages = messages;
		}
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Path ref={this.path} label="בקרת נתיבים" value={this.value}
					rightToLeft locale="he"></Path>
				<Path ref={this.path2} indicator label="מחוון נתיב" value={this.value}
					rightToLeft locale="he"></Path>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

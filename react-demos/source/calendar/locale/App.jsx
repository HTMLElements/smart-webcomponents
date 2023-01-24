import React from "react";
import ReactDOM from "react-dom";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
		this.log = React.createRef();
	}

	dataSource = ['en', 'tr', 'ar', 'ru', 'de', 'es', 'pt', 'fr', 'zh', 'ja', 'it', 'bg', 'nl'];

	handleChange(event) {
		this.calendar.current.locale = event.detail.label;
		this.log.current.innerHTML = 'Current locale is  ' + event.detail.label.toUpperCase();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Calendar ref={this.calendar} id="calendar"></Calendar>
				<div className="options">
					<div className="caption">Choose a locale</div>
					<div className="option">
						<DropDownList dataSource={this.dataSource} onChange={this.handleChange.bind(this)} selectedIndexes={[0]} id="localePicker"></DropDownList>
					</div>
					<div className="option">
						<div ref={this.log} id="log"></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

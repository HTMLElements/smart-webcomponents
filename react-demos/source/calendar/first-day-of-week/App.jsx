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

	dataSource = [{
		value: 0,
		label: "Sunday"
	},
	{
		value: 1,
		label: "Monday"
	},
	{
		value: 2,
		label: "Tuesday"
	},
	{
		value: 3,
		label: "Wednesday"
	},
	{
		value: 4,
		label: "Thursday"
	},
	{
		value: 5,
		label: "Friday"
	},
	{
		value: 6,
		label: "Saturday"
	}
	];

	handleChange(event) {
		this.calendar.current.firstDayOfWeek = event.detail.index;
		this.log.current.innerHTML = 'First day of week is ' + event.detail.label;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Calendar ref={this.calendar}></Calendar>
				<div className="options">
					<div className="option">Select first day of week</div>
					<div className="option">
						<DropDownList onChange={this.handleChange.bind(this)} dataSource={this.dataSource} selectedIndexes={[0]} id="dayOfWeekSelector"></DropDownList>
					</div>
					<div className="option">
						<div ref={this.log} id="log"></div>
					</div>
				</div>
			</div >
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        id: "app1",
	        template: {
	            "#dateTimePicker": {
	                properties: {
	                    calendarButton: true
	                }
	            }
	        },
	        data: {
	            date: new Date('2020-11-15 06:24:00')
	        }
	    });
	    app.notify(function(changes) {
	        console.log('data is updated');
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div id="form">
			        <DateTimePicker ref="datetimepicker" id="dateTimePicker" smart-model="date"></DateTimePicker>	<span>{{date}}</span>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

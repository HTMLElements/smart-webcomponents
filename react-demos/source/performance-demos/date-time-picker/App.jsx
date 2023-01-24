import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	    let dateTimePickersList = [];
	    // appends 100 date time inputs on the page
	    function appendDateTimePickers() {
	        const dateTimePickersContainer = document.createElement('div'),
	            containerFragment = document.createDocumentFragment();
	        for (let i = 0; i < 100; i++) {
	            const newDateTimePicker = document.createElement('smart-date-time-picker');
	            newDateTimePicker.calendarButton = true;
	            newDateTimePicker.calendarMode = 'classic';
	            newDateTimePicker.dropDownDisplayMode = 'classic';
	            newDateTimePicker.dropDownPosition = 'center-bottom';
	            dateTimePickersList.push(newDateTimePicker);
	            containerFragment.appendChild(newDateTimePicker);
	        }
	        dateTimePickersContainer.appendChild(containerFragment);
	        document.body.appendChild(dateTimePickersContainer);
	    }
	    // executes value updates for all date time inputs in a 10ms loop
	    function runTest() {
	        setInterval(function() {
	            for (let i = 0; i < 100; i++) {
	                const year = Math.floor(Math.random() * 20 + 2000),
	                    month = Math.floor(Math.random() * 11 + 12),
	                    day = Math.floor(Math.random() * 28 + 1);
	                dateTimePickersList[i].value = new Smart.Utilities.DateTime(year, month, day);
	            }
	        }, 10);
	    }
	
	    appendDateTimePickers();
	    runTest();
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>TYPE html>
			    <html xmlns="http://www.w3.org/1999/xhtml">
			        
			        <head>
			            <title>Date Time Picker Performance Test</title>
			            <meta charset="utf-8" />
			            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
			            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
			            />
			            <link rel="stylesheet" type="text/css" href="../../../source/styles/smart.default.css"
			            />
			            <link rel="stylesheet" type="text/css" href="../../../styles/demos.css"
			            />
			            <link rel="stylesheet" type="text/css" href="../../../styles/common.css"
			            />
			            <link rel="stylesheet" type="text/css" href="styles.css" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

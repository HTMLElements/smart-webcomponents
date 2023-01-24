import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	    let timePickersList = [];
	    // appends 100 time pickers on the page
	    function appendTimePickers() {
	        const timePickersContainer = document.createElement('div'),
	            containerFragment = document.createDocumentFragment();
	        for (let i = 0; i < 100; i++) {
	            const newtimePicker = document.createElement('smart-time-picker');
	            newtimePicker.calendarButton = true;
	            timePickersList.push(newtimePicker);
	            containerFragment.appendChild(newtimePicker);
	        }
	        timePickersContainer.appendChild(containerFragment);
	        document.body.appendChild(timePickersContainer);
	    }
	    // executes value updates for all time pickers in a 10ms loop
	    function runTest() {
	        setInterval(function() {
	            for (let i = 0; i < 100; i++) {
	                timePickersList[i].value = new Date(2017, 0, 1, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60));
	            }
	        }, 10);
	    }
	
	    appendTimePickers();
	    runTest();
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>TYPE html>
			    <html xmlns="http://www.w3.org/1999/xhtml">
			        
			        <head>
			            <title>Time Picker Performance Test</title>
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

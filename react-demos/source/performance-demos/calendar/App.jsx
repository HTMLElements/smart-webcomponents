import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	    let calendars = [];
	    // appends 100 calendar on the page
	    function appendCalendar() {
	        const calendarContainer = document.createElement('div'),
	            containerFragment = document.createDocumentFragment();
	        for (let i = 0; i < 100; i++) {
	            const calendar = document.createElement('smart-calendar');
	            calendars.push(calendar);
	            containerFragment.appendChild(calendar);
	        }
	        calendarContainer.appendChild(containerFragment);
	        document.body.appendChild(calendarContainer);
	    }
	    // executes value updates for all date time inputs in a 10ms loop
	    function runTest() {
	        setInterval(function() {
	            for (let i = 0; i < 100; i++) {
	                let day = Math.floor(Math.random() * 28 + 1),
	                    date = new Date();
	                date.setDate(day);
	                calendars[i].select(date);
	            }
	        }, 10);
	    }
	
	    appendCalendar();
	    runTest();
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>TYPE html>
			    <html xmlns="http://www.w3.org/1999/xhtml">
			        
			        <head>
			            <title>Calendar Performance Test</title>
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

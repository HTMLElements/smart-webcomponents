import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            itemClick: function(event) {
	                alert(event.target.innerHTML);
	            },
	            items: [{
	                    label: "Employee 1",
	                    details: {
	                        firstName: "John",
	                        lastName: "Brown",
	                        jobPosition: "Support Officer"
	                    }
	                },
	                {
	                    label: "Employee 2",
	                    details: {
	                        firstName: "Michael",
	                        lastName: "Roberts",
	                        jobPosition: "Support Officer"
	                    }
	                },
	                {
	                    label: "Employee 3",
	                    details: {
	                        firstName: "Nancy",
	                        lastName: "Smith",
	                        jobPosition: "Sales Representative"
	                    }
	                }
	            ]
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">The List in this examples is automatically rendered by reading the 'items'
			        array. The example also demonstrates Event binding. Clicking a Header is
			        bound to the 'itemClick' event handler.</div>
			    <ul id="list" smart-for="items">
			        <li>
			            	<h2 (click)="itemClick()">{{label}}</h2>
			            <ul>
			                <li><span>First Name: </span><span>{{details.firstName}}</span>
			                </li>
			                <li><span>Last Name: </span><span>{{details.lastName}}</span>
			                </li>
			                <li><span>Job Position: </span><span>{{details.jobPosition}}</span>
			                </li>
			            </ul>
			        </li>
			    </ul>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

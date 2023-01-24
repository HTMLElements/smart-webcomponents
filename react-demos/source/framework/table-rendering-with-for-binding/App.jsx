import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            cellClick: function(event) {
	                alert(event.target.innerHTML);
	            },
	            columns: [
	                'ID',
	                'First Name',
	                'Last Name'
	            ],
	            rows: [{
	                    id: 1,
	                    firstName: "Peter",
	                    lastName: "Johnes"
	                },
	                {
	                    id: 2,
	                    firstName: "Michael",
	                    lastName: "Roberts"
	                },
	                {
	                    id: 3,
	                    firstName: "Nancy",
	                    lastName: "Davolio"
	                },
	                {
	                    id: 4,
	                    firstName: "Thomas",
	                    lastName: "Purdy"
	                },
	                {
	                    id: 5,
	                    firstName: "John",
	                    lastName: "Wilkinson"
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
			    <div className="demo-description">The Table is rendered by using 'smart-for' loop data bound to model.</div>
			    <table
			    id="customers">
			        <tr smart-for="columns">
			            <th (click)="cellClick()">{{value}}</th>
			        </tr>
			        <tr smart-for-self smart-for="rows">
			            <td (click)="cellClick()">{{id}}</td>
			            <td (click)="cellClick()">{{firstName}}</td>
			            <td (click)="cellClick()">{{lastName}}</td>
			        </tr>
			        </table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

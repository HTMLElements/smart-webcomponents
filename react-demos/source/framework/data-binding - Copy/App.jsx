import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    const app = new Smart.App({
	        data: {
	            firstName: 'test',
	            items: ['item2']
	        }
	    });
	    // app.data.items = ['item1'];
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div id="form">First Name: <span>{{firstName}}</span>
			        <br />Last Name: <span>{{lastName}}</span>
			        <br /> <span>{{items.0}}</span>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

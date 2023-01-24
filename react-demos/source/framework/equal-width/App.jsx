import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Equal-width columns.</div>
			    <div className="Grid-layout">
			        <div className="row">
			            <div className="col-6">1 of 2</div>
			            <div className="col-6">2 of 2</div>
			        </div>
			        <div className="row">
			            <div className="col-4">1 of 3</div>
			            <div className="col-4">2 of 3</div>
			            <div className="col-4">3 of 3</div>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

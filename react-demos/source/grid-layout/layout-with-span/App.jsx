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
			    <div className="demo-description">Positioning items which span more than one grid track.</div>
			    <div className="Grid-layout">
			        <div className="row">
			            <div className="col-sm-8">A</div>
			            <div span="2" className="col-sm-4">B</div>
			            <div className="col-sm-4">C</div>
			            <div className="col-sm-4">C</div>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

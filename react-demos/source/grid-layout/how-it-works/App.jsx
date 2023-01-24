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
			    <div className="demo-description">Our grid system uses a series of containers, rows, and columns to layout
			        content. It is built with Grid Layout and is fully responsive. The columns
			        are defined with "col-sm-4" class for small devices and when the size reaches
			        the breakpoint, the columns are stacked.</div>
			    <div className="Grid-layout">
			        <div className="row">
			            <div className="col-sm-4">One of three columns</div>
			            <div className="col-sm-4">One of three columns</div>
			            <div className="col-sm-4">One of three columns</div>
			        </div>
			    </div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

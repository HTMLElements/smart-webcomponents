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
			    <div className="demo-description">Use our powerful mobile-first 12-column Grid layout system, five default
			        responsive tiers, row and column gaps, optional ordering.</div>
			    <div className="Grid-layout">
			        <div className="row">
			            <div className="col-2">Logo</div>
			            <div className="col-10">Header</div>
			        </div>
			        <div className="row">
			            <div span="2" className="col-sm-2">Side</div>
			            <div className="col-sm-10">Top Content</div>
			            <div className="col-sm-10">Bottom Content</div>
			        </div>
			        <div className="row">
			            <div className="col">Footer</div>
			        </div>
			    </div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

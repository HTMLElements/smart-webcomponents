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
			    <div className="demo-description"></div>
			    <div className="Grid-layout">
			        <div className="row">
			            <div className="col-sm-2">Orientation</div>
			            <div className="col-sm-5">Horizontal</div>
			            <div className="col-sm-5">Vertical - when "vertical" class name is used.</div>
			        </div>
			        <div className="row">
			            <div className="col-sm-2">Stretch</div>
			            <div className="col-sm-5">"stretch" - stretches items horizontally.</div>
			            <div className="col-sm-5">"vertical-stretch" - stretches items vertically.</div>
			        </div>
			        <div className="row">
			            <div className="col-sm-2">Class prefixes when Stretched</div>
			            <div className="col-sm-5">"item.strech-" - from 1 to 6. Defines the strech size of the item.</div>
			            <div
			            className="col-sm-5">"spacing-" - from 1 to 6. Defines the spacing between the items.</div>
			    </div>
			    <div className="row">
			        <div className="col-sm-2">Alignment Class</div>
			        <div className="col-sm-1">"left" - aligns items to the left.</div>
			        <div className="col-sm-1">"center" - aligns items in the center.</div>
			        <div className="col-sm-2">"right" - aligns items to the right.</div>
			        <div className="col-sm-2">"top" - aligns items to the top.</div>
			        <div className="col-sm-2">"middle" - aligns items in the middle.</div>
			        <div className="col-sm-2">"bottom" - aligns items to the bottom.</div>
			    </div>
			</div>
			<br/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

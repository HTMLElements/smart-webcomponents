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
			        content. It is built with CSS3 Grid layout and is fully responsive. The
			        columns are defined with "col-sm-4" class for small devices and when the
			        size reaches the breakpoint, the columns are stacked.</div>
			    <div className="Grid-layout">
			        <div className="row">
			            <div className="col-sm-2">Screen Size</div>
			            <div className="col-sm-2">Extra small
			                < 576px </div>
			                    <div className="col-sm-2">Small >= 576px</div>
			                    <div className="col-sm-2">Medium >= 768px</div>
			                    <div className="col-sm-2">Large >= 960px</div>
			                    <div className="col-sm-2">Extra large >= 1200px</div>
			            </div>
			            <div className="row">
			                <div className="col-sm-2">Max width</div>
			                <div className="col-sm-2">None(auto)</div>
			                <div className="col-sm-2">540px</div>
			                <div className="col-sm-2">720px</div>
			                <div className="col-sm-2">960px</div>
			                <div className="col-sm-2">1140px</div>
			            </div>
			            <div className="row">
			                <div className="col-sm-2">Class prefix</div>
			                <div className="col-sm-2">.col-</div>
			                <div className="col-sm-2">.col-sm-</div>
			                <div className="col-sm-2">.col-md-</div>
			                <div className="col-sm-2">.col-lg-</div>
			                <div className="col-sm-2">.col-xl-</div>
			            </div>
			            <div className="row">
			                <div className="col-sm-2">Columns</div>
			                <div className="col-sm-10">12</div>
			            </div>
			            <div className="row">
			                <div className="col-sm-2">Row Spacing</div>
			                <div className="col-sm-10">10px, controlled by --Grid-layout-row-gap.</div>
			            </div>
			            <div className="row">
			                <div className="col-sm-2">Columns Spacing</div>
			                <div className="col-sm-10">10px, controlled by --Grid-layout-col-gap.</div>
			            </div>
			            <div className="row">
			                <div className="col-sm-2">Nestable</div>
			                <div className="col-sm-10">Yes</div>
			            </div>
			            <div className="row">
			                <div className="col-sm-2">Column and Row Ordering</div>
			                <div className="col-sm-10">Yes</div>
			            </div>
			            <div className="row">
			                <div className="col-sm-2">Row Fill Remaining Space</div>
			                <div className="col-sm-10">Yes</div>
			            </div>
			        </div>
			        <br/>The table above is built with our Grid system.</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

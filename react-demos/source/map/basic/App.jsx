import React from "react";
import ReactDOM from "react-dom";
import { Map } from 'smart-webcomponents-react/map';

class App extends React.Component {
	mapType = "roadmap";
	apiKey = "";
	query = "la";

	init() {

	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="map-container">
			    <div className="demo-description">
			         <h1>Basic Map Overview</h1>
			        <div>In this demo, we show how to use our "Map" component. "Map" is a component
			            which displays a map of an area defined by a user. Maps are usually used
			            in combination with forms and modal windows. It's quite easy to implement
			            a Google map in your project since all it requires is a small piece of
			            code.</div>
			    </div>
				<div className="map-container">
					<Map id="map" query={this.query} apiKey={this.apiKey}
					mapType={this.mapType}></Map> 
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

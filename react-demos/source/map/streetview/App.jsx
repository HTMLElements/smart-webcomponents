import React from "react";
import ReactDOM from "react-dom";
import { Map } from 'smart-webcomponents-react/map';

class App extends React.Component {
	
	mode = "streetview";
	query= "sofia,bulgaria cherni vrah 75";
	apiKey = "";
	heading = "160";
	pitch = "20";	
	componentDidMount() {
	
			
	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			         <h1>Streetview Map Overview</h1>
			        <div>In this demo, we show how to use our "Map" component with "streetview"
			            mode.</div>
			    </div>
			    <Map ref="map" apiKey={this.apiKey} mode={this.mode} query={this.query}
			     heading={this.heading} pitch={this.pitch}></Map>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

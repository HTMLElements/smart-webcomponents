import React from "react";
import ReactDOM from "react-dom";
import { Map } from 'smart-webcomponents-react/map';

class App extends React.Component {


	apiKey = "";
	mapType1 = "roadmap";
	query1 = "la";
	mapType2 = "satellite";
	query2 = "arc de triunfo ,barcelona,spain";

	componentDidMount() {
	
	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			         <h1>Map Within Card Demo</h1>
			        <div>In this demo we are showcasing our "Map" component within a simple card
			            with a overlaping card header.</div>
			    </div>
			    <div className="card-wrapper">
			        <div className="card-container">
			            <div className="card-header regular-map-header">
			                 <h3>Regular map</h3>
			            </div>
			            <div className="map-container">
			                <Map ref="map" query={this.query1} apiKey={this.apiKey}
			                mapType={this.mapType1}></Map>
			            </div>
			        </div>
			        <div className="card-container">
			            <div className="card-header custom-map-header">
			                 <h3>Custom map</h3>
			            </div>
			            <div className="map-container">
			                <Map ref="map2" query={this.query2} apiKey={this.apiKey}
			                mapType={this.mapType2}></Map>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

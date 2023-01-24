import React from "react";
import ReactDOM from "react-dom";
import { Map } from 'smart-webcomponents-react/map';

class App extends React.Component {
	apiKey = "";
	mapType = "satellite";
	query = "la";



	componentDidMount() {
	
	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			         <h1>Satellite Map Overview</h1>
			        <div>The demo shown here displays different option that the "Map" component
			            has. In this case it shows the map in satellite mode, one of the optional
			            map types from Google.</div>
			    </div>
			    <Map ref="map" query={this.query} apiKey={this.apiKey}
			    mapType={this.mapType}></Map>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

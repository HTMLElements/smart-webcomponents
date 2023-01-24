import React from "react";
import ReactDOM from "react-dom";
import { Map } from 'smart-webcomponents-react/map';

class App extends React.Component {

	mapType = "roadmap";
	apiKey = "";
	query = "linz,ars electronica";

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			         <h1>Custom Map Demo</h1>
			        <div>"Map" component can also be used to show a more precise location.</div>
			    </div>
			    <Map ref="map" query={this.query} apiKey={this.apiKey} mapType={this.mapType}></Map>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

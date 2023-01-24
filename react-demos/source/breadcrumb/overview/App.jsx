import React from "react";
import ReactDOM from "react-dom";
import { Breadcrumb } from 'smart-webcomponents-react/breadcrumb';

class App extends React.Component {

	componentDidMount() {
	}

	render() {
		return (
			<div>
			    <Breadcrumb ref="breadcrumb" id="breadcrumb1" addNewItem allowDrag
			    allowDrop closeButtons dataSource='[{ "label": "Planets", "value": "A" }, { "label": "Continents", "value": "B" }, { "label": "Countries", "value": "C" }, { "label": "States", "value": "D" }, { "label": "Cities", "value": "E" }]'></Breadcrumb>
			    <br />
			    <Breadcrumb ref="breadcrumb2" id="breadcrumb2" allowDrag allowDrop closeButtons
			    data-source='[{ "label": "Email", "value": "alternate_email" }, { "label": "Phone", "value": "phone" }, { "label": "TV", "value": "tv" }, { "label": "Video game", "value": "videogame_asset" }, { "label": "Laptop", "value": "laptop" }]'
			    ></Breadcrumb>
			    <br />
			    <Breadcrumb ref="breadcrumb3" id="breadcrumb3" minimizeWidth="150" allowDrag
			    allowDrop closeButtons dataSource='[{ "label": "Planets", "value": "A" }, { "label": "Continents", "value": "B" }, { "label": "Countries", "value": "C" }, { "label": "States", "value": "D" }, { "label": "Cities", "value": "E" }]'></Breadcrumb>
			    
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            selected: ['A']
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">DropDownList (bound to Array)</div>
			    <br/>
			    <DropDownList ref="dropdownlist" selection-mode="checkBox" smart-model="selected">
			        <ListItem value="A">A</ListItem>
			        <ListItem value="B">B</ListItem>
			        <ListItem value="C">C</ListItem>
			    </DropDownList>
			    <br/>
			    <br/>Selected: <span>{{ selected }}</span>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

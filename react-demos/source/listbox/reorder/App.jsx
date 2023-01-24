import React from "react";
import ReactDOM from "react-dom";
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <ListBox  allowDrag allowDrop>
			        <ListItem selected value="volvo">Volvo</ListItem>
			        <ListItem value="saab">Saab</ListItem>
			        <ListItem value="saab">Scania</ListItem>
			        <ListItem value="mercedes">Mercedes</ListItem>
			        <ListItem value="vw">VW</ListItem>
			        <ListItem value="audi">Audi</ListItem>
			        <ListItem value="porsche">Porsche</ListItem>
			        <ListItem value="mazda">Mazda</ListItem>
			        <ListItem value="honda">Honda</ListItem>
			        <ListItem value="infinity">Infinity</ListItem>
			        <ListItem value="mitsubishi">Mitsubishi</ListItem>
			        <ListItem value="toyota">Toyota</ListItem>
			    </ListBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

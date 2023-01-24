import React from "react";
import ReactDOM from "react-dom";
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownlist = React.createRef();
	}

	init() {
		const that = this;
		const template = document.createElement('template');

		template.id = 'template';
		template.innerHTML = '<span className="glyphicon glyphicon-ok"></span><span style="margin-left:5px;">{{label}}</span>';

		document.body.appendChild(template);

		that.dropdownlist.current.itemTemplate = template.id;
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<DropDownList ref={this.dropdownlist}>
					<ListItemsGroup label="Swedish Cars">
						<ListItem selected value="volvo">Volvo</ListItem>
						<ListItem value="saab">Saab</ListItem>
						<ListItem value="saab">Scania</ListItem>
					</ListItemsGroup>
					<ListItemsGroup label="German Cars">
						<ListItem value="mercedes">Mercedes</ListItem>
						<ListItem value="vw">VW</ListItem>
						<ListItem value="audi">Audi</ListItem>
						<ListItem value="porsche">Porsche</ListItem>
					</ListItemsGroup>
					<ListItemsGroup label="Japanese Cars">
						<ListItem value="mazda">Mazda</ListItem>
						<ListItem value="honda">Honda</ListItem>
						<ListItem value="infinity">Infinity</ListItem>
						<ListItem value="mitsubishi">Mitsubishi</ListItem>
						<ListItem value="toyota">Toyota</ListItem>
					</ListItemsGroup>
				</DropDownList>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

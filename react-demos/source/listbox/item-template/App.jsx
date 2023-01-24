import React from "react";
import ReactDOM from "react-dom";
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.listbox = React.createRef();
	}

	init() {
		const that = this;
		const template = document.createElement('template');

		template.id = 'itemTemplate';
		template.innerHTML = '<span className="glyphicon glyphicon-ok"></span><span style="margin-left:5px;">{{label}}</span>';

		document.body.appendChild(template);

		this.listbox.current.itemTemplate = template.id;
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<ListBox ref={this.listbox}>
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
				</ListBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.listbox = React.createRef();
	}

	handleClick() {
		let array = [];

		for (let i = 0; i < 1000000; i++) {
			array.push("Item" + i);
		}

		this.listbox.current.dataSource = array;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<ListBox ref={this.listbox} itemHeight={36} virtualized id="list"></ListBox>
				<br />
				<div className="options">
					<div className="caption">Virtualization</div>
					<div className="option">
						<Button id="button" onClick={this.handleClick.bind(this)}>Load 1 million items</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

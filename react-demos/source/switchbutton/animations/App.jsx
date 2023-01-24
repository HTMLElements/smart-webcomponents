import React from "react";
import ReactDOM from "react-dom";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<h3>Horizontal Switch Button</h3>
				<SwitchButton switchMode="click"></SwitchButton>
				<br />
				<SwitchButton switchMode="default"></SwitchButton>
				<br />
				<SwitchButton switchMode="drag"></SwitchButton>
				<br />
				<SwitchButton checked={null} switchMode="click"></SwitchButton>
				<h3>Vertical Switch Button</h3>
				<SwitchButton orientation="vertical" switchMode="click"></SwitchButton>
				<SwitchButton checked={null} orientation="vertical"
					switchMode="click"></SwitchButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

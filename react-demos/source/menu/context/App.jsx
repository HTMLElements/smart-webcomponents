import React from "react";
import ReactDOM from "react-dom";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.menu = React.createRef();
	}

	init() {
		const menu = this.menu.current;

		document.addEventListener('contextmenu', function (event) {
			event.preventDefault();
		});
		document.addEventListener('mousedown', function (event) {
			if (!menu.nativeElement.contains(event.target)) {
				menu.close();
			}
		});
		document.addEventListener('mouseup', function (event) {
			if (event.which === 3 && !menu.nativeElement.contains(event.target)) {
				menu.open(event.pageX, event.pageY);
			}
		});

	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<p>Right-click anywhere to show the context menu.</p>
				<Menu ref={this.menu} id="menu" mode="dropDown">
					<MenuItem label="Default Formatting" separator></MenuItem>
					<MenuItem label="Format Cells..." separator></MenuItem>
					<MenuItem label="Insert..."></MenuItem>
					<MenuItem label="Delete..."></MenuItem>
					<MenuItem label="Cut"></MenuItem>
					<MenuItem label="Copy"></MenuItem>
					<MenuItem label="Paste"></MenuItem>
					<MenuItem label="Selection List..."></MenuItem>
				</Menu>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

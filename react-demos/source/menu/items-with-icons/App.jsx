import React from "react";
import ReactDOM from "react-dom";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.menu = React.createRef();
	}

	init() {
		this.menu.current.nativeElement.addEventListener('itemClick', function (event) {
			window.open('https://en.wikipedia.org/wiki/' + event.detail.value, '_blank');
		});
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Menu ref={this.menu} id="menu">
					<MenuItem value="Sun">
						<img src="https://www.htmlelements.com/demos/images/sun.png" title="Sun" />Sun</MenuItem>
					<MenuItemsGroup>
						<img src="https://www.htmlelements.com/demos/images/earth.png" title="Planets" />Planets
			            <MenuItem value="Earth">
							<img src="https://www.htmlelements.com/demos/images/earth.png" title="Earth" />Earth</MenuItem>
						<MenuItem value="Mars">
							<img src="https://www.htmlelements.com/demos/images/mars.png" title="Mars" />Mars</MenuItem>
					</MenuItemsGroup>
					<MenuItem value="Moon">
						<img src="https://www.htmlelements.com/demos/images/moon.png" title="Moon" />Moon</MenuItem>
				</Menu>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

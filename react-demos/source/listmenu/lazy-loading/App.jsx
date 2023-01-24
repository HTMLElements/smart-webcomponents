import React from "react";
import ReactDOM from "react-dom";
import { ListMenu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/listmenu';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.listmenu = React.createRef();
	}

	init() {
		const listMenu = this.listmenu.current;

		listMenu.nativeElement.addEventListener("scrollBottomReached", function () {
			listMenu.displayLoadingIndicator = true;
			setTimeout(function () {
				for (let i = 0; i < 5; i++) {
					const newItem = document.createElement('smart-menu-items-group');
					newItem.value = 'emptyItem';
					listMenu.addItem(newItem);
				}
				listMenu.displayLoadingIndicator = false;
			}, 1000);
		});

		listMenu.nativeElement.addEventListener("expand", function (event) {
			if (event.detail.value === 'emptyItem') {
				listMenu.displayLoadingIndicator = true;
				setTimeout(function () {
					for (let i = 0; i < 3; i++) {
						const newItem = document.createElement('smart-menu-item');
						listMenu.addItem(newItem, event.detail.path);
					}
					listMenu.displayLoadingIndicator = false;
				}, 1000);
				event.detail.item.value = 'populatedItem';
			}
		});
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div> <i>Hint: Scroll to the bottom to lazy load items.</i>
				<ListMenu ref={this.listmenu} id="listMenu">
					<MenuItem>Janet Leverling</MenuItem>
					<MenuItem>Andrew Fuller</MenuItem>
					<MenuItem>Robert King</MenuItem>
					<MenuItem>Anne Dodsworth</MenuItem>
					<MenuItem>Margaret Peacock</MenuItem>
					<MenuItem>Michael Suyama</MenuItem>
					<MenuItem>Nancy Davolio</MenuItem>
					<MenuItem>Steven Buchanan</MenuItem>
					<MenuItem>Laura Callahan</MenuItem>
				</ListMenu>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

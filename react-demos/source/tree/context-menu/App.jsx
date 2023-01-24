import React from "react";
import ReactDOM from "react-dom";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.tree = React.createRef();
		this.menu = React.createRef();
		this.item = null;
		this.itemGroup = null;
	}

	handleMenuItemClick(event) {
		const that = this,
			tree = this.tree.current,
			eventDetail = event.detail,
			methodName = eventDetail.value;

		switch (methodName) {
			case 'addAfter':
			case 'addTo':
				ReactDOM.render(<TreeItem>New item</TreeItem>, new DocumentFragment(), function () {
					tree[methodName](this.nativeElement, methodName === 'addTo' ? that.itemGroup : (that.item || that.itemGroup));
				})
				break;
			case 'removeItem':
				tree[methodName](that.item || that.itemGroup);
				break;
		}
	}

	init() {
		const that = this,
			tree = that.tree.current,
			menu = that.menu.current;

		tree.nativeElement.addEventListener('contextmenu', function (event) {
			const target = event.target;

			that.item = target.closest('smart-tree-item');
			that.itemGroup = target.closest('smart-tree-items-group');

			if (!that.item && !that.itemGroup) {
				return;
			}
			//Prevent default context menu
			event.preventDefault();

			const menuItems = menu.items;

			for (let i in menuItems) {
				const menuItem = menuItems[i];

				if (menuItem.value === 'addTo' && that.item) {
					menuItem.disabled = true;
				} else {
					menuItem.disabled = false;
				}
			}

			//Open Smart.Menu
			menu.open(event.pageX, event.pageY);
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<p>Right click on a Tree item to open the Context menu for the target item.</p>
				</div>
				<Tree ref={this.tree} id="tree">
					<TreeItemsGroup expanded> <i className="material-icons">fastfood</i> Fast Food
			            <TreeItem>Subway</TreeItem>
						<TreeItem>Starbucks</TreeItem>
						<TreeItem>McDonald's</TreeItem>
						<TreeItem>Dunkin</TreeItem>
						<TreeItem>Burger King</TreeItem>
						<TreeItem>Pizza Hut</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup> <i className="material-icons">local_pizza</i> Pizza
			            <TreeItem>Margherita</TreeItem>
						<TreeItem>Carbonara</TreeItem>
						<TreeItem>Quattro Stagioni</TreeItem>
						<TreeItem>Crudo</TreeItem>
						<TreeItem>Napoletana</TreeItem>
						<TreeItem>Frutti di Mare</TreeItem>
						<TreeItem>Diavola</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup> <i className="material-icons">local_bar</i> Drinks
			            <TreeItem>Wine</TreeItem>
						<TreeItem>Coffee</TreeItem>
						<TreeItem>Lemonade</TreeItem>
						<TreeItem>Iced tea</TreeItem>
						<TreeItem>Milkshake</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup> <i className="material-icons">cake</i> Snacks
			            <TreeItem>Hummus</TreeItem>
						<TreeItem>Candy</TreeItem>
						<TreeItem>Snack Bars</TreeItem>
						<TreeItem>Nuts</TreeItem>
						<TreeItem>Crackers</TreeItem>
					</TreeItemsGroup>
				</Tree>
				<Menu ref={this.menu} mode="dropDown" close-action="down" onItemClick={this.handleMenuItemClick.bind(this)}>
					<MenuItem value="addAfter"><i className="material-icons">playlist_add</i>Add new sibling item</MenuItem>
					<MenuItem value="addTo"><i className="material-icons">playlist_add</i>Add new child item</MenuItem>
					<MenuItem value="removeItem"><i className="material-icons">delete</i>Delete item</MenuItem>
				</Menu>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';
import { Map } from 'smart-webcomponents-react/map';

class App extends React.Component {
	mapType = "roadmap";
	apiKey = "";
	query = "la";
	minimizeWidth= 4600;
	componentDidMount() {
		
	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			         <h1>Full Page Map Demo</h1>
			        <div>In this demo, we show how to use our "Map" component. "Map" is a component
			            which displays a map of an area defined by a user.For the current demo
			            we have a full page with our map component.Additional used components for
			            this demo are "Menu".</div>
			    </div>
			    <div className="header-menu">
			        <Menu ref="menu" minimizeWidth={this.minimizeWidth} id="menu">
			            <MenuItem>Option 1</MenuItem>
			            <MenuItem>Option 2</MenuItem>
			            <MenuItem>Option 3</MenuItem>
			            <MenuItem>Option 4</MenuItem>
			        </Menu>
			        <Menu ref="menu2" id="menu-part-2">
			            <MenuItemsGroup minimizable> <span className="smart-badge smart-badge-danger ">3</span>
 <i className="material-icons">notifications</i>
			                <span
			                className="responsive-text">Notifications</span>
			                    <MenuItem>Some Notification</MenuItem>
			                    <MenuItem>Another Notification</MenuItem>
			                    <MenuItem>Another Notification</MenuItem>
			                    <MenuItem>Another Notification</MenuItem>
			            </MenuItemsGroup>
			            <MenuItem> <i className="material-icons"> mail</i>  <span className="responsive-text">Contact</span>
			            </MenuItem>
			            <MenuItem> <span className="responsive-text">Support</span> 
			            </MenuItem>
			            <MenuItemsGroup> <i className="material-icons">person</i>
 <span className="responsive-text">Profile</span>
			                <MenuItem>Log out</MenuItem>
			                <MenuItem>My account</MenuItem>
			            </MenuItemsGroup>
			        </Menu>
			    </div>
			    <Map ref="map" query={this.query} apiKey={this.apiKey} mapType={this.mapType}></Map>
			    <div className="footer"> <span>Copyright: </span>  <span>HTMLELEMENTS</span>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

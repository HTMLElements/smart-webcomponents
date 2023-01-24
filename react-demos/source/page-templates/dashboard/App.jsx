import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.splitter = React.createRef();
	}

	handleExpand() {
		const dashboard = this.splitter.current;

		dashboard.update(0, {
			size: 240
		});
		dashboard.nativeElement.setAttribute('expanded', '');
	}

	handleCollapse() {
		const dashboard = this.splitter.current;

		dashboard.update(0, {
			size: 70
		});
		dashboard.nativeElement.removeAttribute('expanded');
	}

	init() {
		this.splitter.current.hideBar(0);
		this.splitter.current.nativeElement.setAttribute('expanded', '');
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Splitter ref={this.splitter} id="dashboard">
					<SplitterItem collapsible id="leftPanel" size="240">
						<div className="dashboard-header">
							<Button onClick={this.handleCollapse.bind(this)} id="collapseBtn" className="floating"> <i className="material-icons">chevron_left</i>
							</Button>
							<Button onClick={this.handleExpand.bind(this)} id="expandBtn" className="floating"> <i className="material-icons">menu</i>
							</Button>
						</div>
						<div className="dashboard-menu-container">
							<Button className="flat menu-btn"><i className="material-icons">view_quilt</i>Dashboard</Button>
							<Button
								className="flat menu-btn"><i className="material-icons">shopping_cart</i>Orders</Button>
							<Button
								className="flat menu-btn"><i className="material-icons">people</i>Customers</Button>
							<Button
								className="flat menu-btn"><i className="material-icons">bar_chart</i>Reports</Button>
							<Button
								className="flat menu-btn"><i className="material-icons">layers</i>Integrations</Button>
							<h6>Saved reports</h6>
							<Button className="flat menu-btn"><i className="material-icons">assignment</i>Curent month</Button>
							<Button
								className="flat menu-btn"><i className="material-icons">assignment</i>Last quarter</Button>
							<Button
								className="flat menu-btn"><i className="material-icons">assignment</i>Year-end sale</Button>
						</div>
					</SplitterItem>
					<SplitterItem id="rightPanel">
						<div className="dashboard-header">Dashboard
			                <Button id="notifficationBtn" className="floating"> <i className="material-icons">notifications</i>
							</Button>
						</div>
						<h1>Orders</h1>
						<table cellpadding="0" cellspacing="0">
							<tr>
								<th>Orders/vizits</th>
								<th>Monday</th>
								<th>Tuesday</th>
								<th>Wednesday</th>
								<th>Thursday</th>
								<th>Friday</th>
								<th>Saturday</th>
								<th>Sunday</th>
							</tr>
							<tr>
								<td>Orders</td>
								<td>3400</td>
								<td>2398</td>
								<td>4300</td>
								<th>2908</th>
								<td>4780</td>
								<td>3800</td>
								<td>4300</td>
							</tr>
							<tr>
								<td>Vizits</td>
								<td>2200</td>
								<td>1280</td>
								<td>5000</td>
								<td>4780</td>
								<td>5890</td>
								<td>4390</td>
								<td>4490</td>
							</tr>
						</table>
						<h1>Products</h1>
						<table cellpadding="0" cellspacing="0">
							<tr>
								<th>Dessert (100g serving)</th>
								<th>Calories</th>
								<th>Fat (g)</th>
								<th>Carbs (g)</th>
								<th>Protein (g)</th>
							</tr>
							<tr>
								<td>Frozen yoghurt</td>
								<td>159</td>
								<td>6</td>
								<td>24</td>
								<td>4</td>
							</tr>
							<tr>
								<td>Ice cream sandwich</td>
								<td>237</td>
								<td>9</td>
								<td>37</td>
								<td>4.3</td>
							</tr>
							<tr>
								<td>Eclair</td>
								<td>262</td>
								<td>16</td>
								<td>24</td>
								<td>6</td>
							</tr>
							<tr>
								<td>Cupcake</td>
								<td>305</td>
								<td>3.7</td>
								<td>67</td>
								<td>4.3</td>
							</tr>
							<tr>
								<td>Gingerbread</td>
								<td>356</td>
								<td>16</td>
								<td>49</td>
								<td>3.9</td>
							</tr>
						</table>
					</SplitterItem>
				</Splitter>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

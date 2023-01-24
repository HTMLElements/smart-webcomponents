import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="smart-demo-container">
					<div id="materialListBoxContainer">
						<section>
							<div>
								<h2>Lists present multiple line items vertically as a single continuous element.</h2>
								<div className="module">
									<p>Lists are made up of a continuous column of rows. Each row contains a
									tile. Primary actions fill the tile, and supplemental actions are represented
			                            by icons and text.</p>
									<p>Lists are best suited for similar data types.:</p>
									<p><strong>Determinate indicators</strong> display how long an operation will
			                            take.</p>
									<p><strong>Indeterminate indicators</strong> visualize an unspecified wait
			                            time.</p>
								</div>
								<div className="module">
									<h3>Actions</h3>
									<p>Vertical and Horizontal scrolling
			                            <br />Filtering and Sorting</p>
									<h3>Gestures</h3>
									<p>Swipe
			                            <br />Drag and drop</p>
								</div>
							</div>
						</section>
						<section id="usage">
							<h2>Usage</h2>
							<div className="module">
								<p>A <strong>list</strong> consists of a single continuous column of tessellated
			                        sub-divisions of equal width called <strong>rows</strong> that function as
			                        containers for <strong>tiles</strong>.</p>
								<p><strong>Tiles</strong> hold content, and can vary in height within a list.</p>
							</div>
							<div className="module">
								<p>Lists are best suited to presenting a homogeneous data type or sets of
								data types, such as images and text. They are optimized for reading comprehension
								while differentiating either between similar data types, or qualities within
			                        a single data type.</p>
								<h3>Density</h3>
								<p>When the mouse and keyboard are the primary input methods, measurements
			                        may be condensed to accommodate denser layouts.</p>
							</div>
						</section>
						<section id="behavior">
							<h2>Behavior</h2>
							<div className="module">
								<h2>Scrolling</h2>
								<p>Lists scroll vertically and horizontally.</p>
							</div>
							<div className="module">
								<ListBox  className="horizontal-scrolling">
									<ListItem>Washington, Connecticut</ListItem>
									<ListItem>Washington, Iowa</ListItem>
									<ListItem>Washington Park, North Carolina</ListItem>
									<ListItem>Springfield, Massachusetts</ListItem>
									<ListItem>Mount Washington, Massachusetts</ListItem>
									<ListItem>Springfield, West Virginia</ListItem>
									<ListItem>Los Angeles, California</ListItem>
									<ListItem>Dallas, Texas</ListItem>
									<ListItem>Charleston, South Carolina</ListItem>
									<ListItem>Las Vegas, Nevada</ListItem>
									<ListItem>Seattle, Washington</ListItem>
									<ListItem>San Francisco, California</ListItem>
									<ListItem>Washington, D.C.</ListItem>
									<ListItem>New Orleans, Louisiana</ListItem>
									<ListItem>Palm Springs, California</ListItem>
									<ListItem>Saint Augustine, Florida</ListItem>
									<ListItem>St. Louis, Missouri</ListItem>
								</ListBox>
							</div>
							<div className="module"></div>
							<div className="module">
								<h2>Drag & Drop</h2>
								<p>Tiles may be moved between a list and drop target (similar to moving a
			                        file into a folder) and picked up and manually reordered within a list.</p>
								<p>Reorder property allows the items inside the list box to be moved.</p>
								<p>Items can even be moved accross list boxes.</p>
							</div>
							<div className="module dragDrop">
								<ListBox  allowDrag allowDrop id="dragDrop" reorder>
									<ListItem>Butter</ListItem>
									<ListItem>Tacos</ListItem>
									<ListItem>Bread</ListItem>
									<ListItem>Chocolate</ListItem>
									<ListItem>Ice cream</ListItem>
									<ListItem>Meat</ListItem>
									<ListItem>Fries</ListItem>
									<ListItem>Potatoes</ListItem>
									<ListItem>Salad</ListItem>
									<ListItem>Rice</ListItem>
									<ListItem>Recipies</ListItem>
									<ListItem>Pie</ListItem>
									<ListItem>Milk</ListItem>
									<ListItem>Eggs</ListItem>
									<ListItem>Seafood</ListItem>
									<ListItem>Cereal</ListItem>
									<ListItem>Spaghetti</ListItem>
								</ListBox>
								<p></p>
								<p>List box A</p>
								<ListBox  allowDrag allowDrop>
									<ListItem>Tofu</ListItem>
									<ListItem>Buttered toast with Marmite</ListItem>
									<ListItem>Marzipan</ListItem>
									<ListItem>Ketchup</ListItem>
									<ListItem>French toast</ListItem>
									<ListItem>Chicken parm</ListItem>
									<ListItem>Hummus</ListItem>
									<ListItem>Chili crab</ListItem>
									<ListItem>Maple syrup</ListItem>
									<ListItem>Ankimo</ListItem>
									<ListItem>Parma ham</ListItem>
									<ListItem>Goi cuon (summer roll),</ListItem>
									<ListItem>Ohmi-gyu beef steak</ListItem>
									<ListItem>Pho</ListItem>
									<ListItem>Lechón</ListItem>
									<ListItem>Fajitas</ListItem>
									<ListItem>Butter garlic crab</ListItem>
									<ListItem>Champ</ListItem>
									<ListItem>Lasagna</ListItem>
									<ListItem>Poke</ListItem>
									<ListItem>Croissant</ListItem>
									<ListItem>Arepas</ListItem>
								</ListBox>
								<p></p>
								<p>List box B</p>
							</div>
							<div className="module">
								<h2>Filtering and sorting</h2>
								<p>List tiles can be sorted or filtered by date, file size, alphabetical
			                        order, or other parameters.</p>
							</div>
							<div className="module">
								<ListBox  id="phoneBook" sorted>
									<ListItem>Andrew Watson</ListItem>
									<ListItem>Anne Kean</ListItem>
									<ListItem>Avril Janin</ListItem>
									<ListItem>Janet Pattenson</ListItem>
									<ListItem>Johanna Svensson</ListItem>
									<ListItem>Johnny Abana</ListItem>
									<ListItem>Laura Thene</ListItem>
									<ListItem>Margaret Vetton</ListItem>
									<ListItem>Maria Sevrano</ListItem>
									<ListItem>Mark Yemen</ListItem>
									<ListItem>Maya Verdara</ListItem>
									<ListItem>Michael Barton</ListItem>
									<ListItem>Monica Oghini</ListItem>
									<ListItem>Nancy Queens</ListItem>
									<ListItem>Robert Drawny</ListItem>
									<ListItem>Steven Fedrichy</ListItem>
									<ListItem>Toni Versachi</ListItem>
								</ListBox>
								<p></p>
								<p>Alphabetical sorting makes information easier to find.</p>
							</div>
							<div className="module">
								<ListBox  id="settingsMenu" selectionMode="none" filterable
									filter-input-placeholder="Searching ...">
									<ListItemsGroup label="Wireless & Networks">
										<ListItem>Wi-Fi</ListItem>
										<ListItem>Bluetooth</ListItem>
										<ListItem>Data usage</ListItem>
										<ListItem>Connect a device</ListItem>
										<ListItem>More...</ListItem>
									</ListItemsGroup>
									<ListItemsGroup label="Device">
										<ListItem>Personalisation</ListItem>
										<ListItem>Call Settings</ListItem>
										<ListItem>Sound</ListItem>
										<ListItem>Display</ListItem>
										<ListItem>Storage</ListItem>
										<ListItem>Power management</ListItem>
										<ListItem>Apps</ListItem>
										<ListItem>Users</ListItem>
									</ListItemsGroup>
									<ListItemsGroup label="Personal">
										<ListItem>Location</ListItem>
										<ListItem>Security</ListItem>
										<ListItem>Profiles</ListItem>
										<ListItem>Google</ListItem>
										<ListItem>Language & Keyboard</ListItem>
										<ListItem>Backup & Restore</ListItem>
									</ListItemsGroup>
									<ListItemsGroup label="System">
										<ListItem>Date & Time</ListItem>
										<ListItem>Accessibility</ListItem>
										<ListItem>Printing</ListItem>
										<ListItem>About phone</ListItem>
										<ListItem>Support</ListItem>
									</ListItemsGroup>
								</ListBox>
								<p></p>
								<p>Filtering allows the user to quickly find the needed items.</p>
							</div>
						</section>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'smart-webcomponents-react/button';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {

	init() {

		// Your code here.
	}


	componentDidMount() {

	}

	render() {
		return (
			<div className="smart-demo-container">
				<div id="materialDropDownListContainer">
					<section>
						<div>
							<h2>Smart HTML DropDownList is a form control that allows selecting a value from a drop down list.</h2>
							<div className="module">
								<p>A dropdown list selects between multiple selections. It displays the current
								state and a down/up arrow. Available states may be shown as a list of strings,
			                            a palette, or icons, for example.</p>
								<p>When a user interacts with the dropDown, a menu can appear over, under
								or below the drop down list and displays the possible states. Pressing
								a state dismisses the menu if the selection is single and updates the button
			                            to display this new state.</p>
								<p>Scrolling within the dropdown behaves the same way a menu scrolls.</p>
							</div>
							<div className="group"> <span>Phone</span><br />
								<DropDownList  selectedIndexes={[0]}
									dropDownPosition="bottom" selectionMode="one" className="combos1 ">
									<ListItem>Mobile</ListItem>
									<ListItem>Home</ListItem>
									<ListItem>Work</ListItem>
								</DropDownList>
							</div>
							<div className="group"> <span>Email</span><br />
								<DropDownList  selectedIndexes={[0]}
									dropDownPosition="bottom" selectionMode="one" className="combos1 ">
									<ListItem>Work</ListItem>
									<ListItem>Mobile</ListItem>
									<ListItem>Home</ListItem>
								</DropDownList>
							</div>
							<div className="group"> <span>Address</span><br />
								<DropDownList  selectedIndexes={[0]}
									dropDownPosition="bottom" selectionMode="one" className="combos1">
									<ListItem>Home</ListItem>
									<ListItem>Mobile</ListItem>
									<ListItem>Work</ListItem>
								</DropDownList>
							</div>
						</div>
					</section>
					<section>
						<div className="module">
							<h2>Generic overflow DropDownList</h2>
							<p>The generic overflow DropDownList displays an arrow by default. When the
							button is pressed, the menu appears. Pressing an option on the menu navigates
			                    to further settings for that option.</p>
							<br />
							<DropDownList  selectedIndexes={[0]} dropDownPosition="bottom">
								<ListItem>Arial</ListItem>
								<ListItem selected>Calibri</ListItem>
								<ListItem>Courier</ListItem>
								<ListItem>Verdana</ListItem>
							</DropDownList>
						</div>
					</section>
					<section id="style">
						<h2>Style</h2>
						<div className="module dropDownListLightTheme">
							<table>
								<tr>
									<td>
										<p>Normal</p>
									</td>
									<td>
										<DropDownList  selectedIndexes={[0]} dropDownPosition="bottom">
											<ListItem selected>Home</ListItem>
											<ListItem>Mobile</ListItem>
											<ListItem>Work</ListItem>
											<ListItem>Business</ListItem>
											<ListItem>Personal</ListItem>
										</DropDownList>
									</td>
								</tr>
								<tr>
									<td>
										<p>Disabled</p>
									</td>
									<td>
										<DropDownList  selectedIndexes={[0]} dropDownPosition="bottom"
											disabled>
											<ListItem>Home</ListItem>
											<ListItem>Mobile</ListItem>
											<ListItem>Work</ListItem>
											<ListItem>Business</ListItem>
											<ListItem selected>Personal</ListItem>
										</DropDownList>
									</td>
								</tr>
							</table>
						</div>
					</section>
					<section id="dropDownListOpenModes">
						<h2>Open Directions</h2>
						<div className="module">
							<p>smartDropDownList has a number of opening directions but the most popular
			                        are "bottom", "overlay-center" and "top".</p>
						</div>
						<div className="module dropDownOpenModes">
							<table>
								<tbody>
									<tr>
										<td>Bottom</td>
										<td>
											<DropDownList  selectedIndexes={[0]} dropDownPosition="bottom">
												<ListItem>Africa</ListItem>
												<ListItem selected>America</ListItem>
												<ListItem>Asia</ListItem>
												<ListItem>Europe</ListItem>
											</DropDownList>
										</td>
									</tr>
									<tr>
										<td>Overlay-center</td>
										<td>
											<DropDownList  selectedIndexes={[0]} dropDownPosition="overlay-center">
												<ListItem>Yogurt</ListItem>
												<ListItem selected>Honey</ListItem>
												<ListItem>Strawberries</ListItem>
											</DropDownList>
										</td>
									</tr>
									<tr>
										<td>Top</td>
										<td>
											<DropDownList  selectedIndexes={[0]} dropDownPosition="top">
												<ListItem>Peanuts</ListItem>
												<ListItem selected>Hazelnuts</ListItem>
												<ListItem>Almonds</ListItem>
											</DropDownList>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>
					<section id="dropDownListSelectionModes">
						<h2>Selection Modes</h2>
						<div className="module">
							<p>smartDropDownList has a variaty of selection modes allowing single or
			                        multiple item selection.</p>
						</div>
						<div>One(Selection of single item)</div>
						<br />
						<DropDownList  selectedIndexes={[0]} dropDownPosition="bottom">
							<ListItem selected>State 1</ListItem>
							<ListItem>State 2</ListItem>
							<ListItem>State 3</ListItem>
						</DropDownList>
						<br />
						<div>oneOrManyExtended - allows selection with shift and ctrl.</div>
						<br />
						<DropDownList  selectedIndexes={[0]} dropDownPosition="bottom"
							selectionMode="oneOrManyExtended">
							<ListItem>State 1</ListItem>
							<ListItem selected>State 2</ListItem>
							<ListItem>State 3</ListItem>
						</DropDownList>
						<br />
						<div>checkBox</div>
						<br />
						<DropDownList  selectedIndexes={[0]} dropDownPosition="bottom"
							selectionMode="checkBox">
							<ListItem>Item 1</ListItem>
							<ListItem selected>Item 2</ListItem>
							<ListItem>Item 3</ListItem>
						</DropDownList>
						<br />
						<div>radioButton</div>
						<br />
						<DropDownList  selectedIndexes={[0]} dropDownPosition="bottom"
							selectionMode="radioButton">
							<ListItem>Item 1</ListItem>
							<ListItem selected>Item 2</ListItem>
							<ListItem>Item 3</ListItem>
						</DropDownList>
						<br />
						<p>Additional selection modes are "zeroOrOne", "OneOrMany", "zeroOrMany"
			                    and "none"</p>
					</section>
					<section id="demoDropDown">
						<h2>Demo</h2>
						<div className="module">
							<p>DropDownListes are controls that are used for making a selection from
			                        a list of options.</p>
						</div>
						<div className="module shipping">
							<div>
								<h2>Edit shipping info</h2>
								<div>
									<div className="name"> <i className="material-icons">&#xE7FD;</i>
										<span>John Williams</span>
									</div>
									<div className="address">
										<div> <i className="material-icons">&#xE55F;</i>
											<span>2000 Main Street</span>
											<br
											/>
										</div>
										<div> <span>Hoboken</span>
											<DropDownList  selectedIndexes={[0]}
												dropDownPosition="overlay-center">
												<ListItem>NJ</ListItem>
												<ListItem selected>DE</ListItem>
												<ListItem>FL</ListItem>
												<ListItem>NH</ListItem>
												<ListItem>GA</ListItem>
												<ListItem>IN</ListItem>
												<ListItem>HI</ListItem>
												<ListItem>CT</ListItem>
												<ListItem>NM</ListItem>
												<ListItem>ID</ListItem>
												<ListItem>KS</ListItem>
												<ListItem>LA</ListItem>
												<ListItem>KY</ListItem>
												<ListItem>CO</ListItem>
												<ListItem>NE</ListItem>
												<ListItem>OH</ListItem>
												<ListItem>SC</ListItem>
												<ListItem>RI</ListItem>
												<ListItem>TX</ListItem>
												<ListItem>WA</ListItem>
											</DropDownList> <span>94122</span>
										</div>
									</div>
									<div className="email"> <i className="material-icons">&#xE0BE;</i>
										<span>Email</span>
									</div>
									<div className="buttons">
										<Button  className="material flat">Cancel</Button>
										<Button  className="material flat" disabled>Done</Button>
									</div>
								</div>
							</div>
						</div>
						<br />
						<br />
						<div className="module welcome">
							<div>
								<h2>Welcome</h2>
								<DropDownList  selectedIndexes={[0]} dropDownPosition="overlay-center"
									selectionMode="zeroOrOne" placeholder="Select Language">
									<ListItem>English(US)</ListItem>
									<ListItem>English(UK)</ListItem>
									<ListItem>English(AU)</ListItem>
									<ListItem>English(IN)</ListItem>
									<ListItem>Czech</ListItem>
									<ListItem>Dutch</ListItem>
									<ListItem>French</ListItem>
									<ListItem>German(DE)</ListItem>
									<ListItem>German(AT)</ListItem>
									<ListItem>Italian</ListItem>
									<ListItem>Japanase</ListItem>
									<ListItem>Korean</ListItem>
									<ListItem>Polish</ListItem>
									<ListItem>Russian</ListItem>
									<ListItem>Spanish</ListItem>
									<ListItem>Arabic(EG)</ListItem>
									<ListItem>Arabic(IL)</ListItem>
									<ListItem>Bulgarian</ListItem>
									<ListItem>Croatian</ListItem>
									<ListItem>Danish</ListItem>
									<ListItem>Finnish</ListItem>
									<ListItem>Romanian</ListItem>
									<ListItem>Swedish</ListItem>
									<ListItem>Thai</ListItem>
									<ListItem>Turkish</ListItem>
									<ListItem>Ukrainian</ListItem>
									<ListItem>Vietnamese</ListItem>
								</DropDownList>
								<Button  className="floating"><i className="material-icons">&#xE5C8;</i>
								</Button>
								<Button  className="raised error"><i className="material-icons">&#xE0CD;</i><span>EMERGENCY</span>
								</Button>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

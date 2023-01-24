import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'smart-webcomponents-react/button';
import { MultiSplitButton, ListItem } from 'smart-webcomponents-react/multisplitbutton';

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
							<h2>Smart HTML MultiSplitButton is a form control that allows either selecting a value from a drop down list or clicking one of the split buttons.</h2>
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

							<div className="module"></div>
							<div className="module preview">
								<div id="textFields"> <span>Name</span>
									<div className="group"> <span>Phone</span>
										<MultiSplitButton  buttonsDataSource={['Call Phone']}
											dropDownPosition="bottom" selectionMode="one" className="combos1 ">
											<ListItem>Mobile</ListItem>
											<ListItem>Home</ListItem>
											<ListItem>Work</ListItem>
										</MultiSplitButton>
									</div>
									<div className="group"> <span>Email</span>
										<MultiSplitButton  buttonsDataSource={['Send Email']}
											dropDownPosition="bottom" selectionMode="one" className="combos1 ">
											<ListItem>Work</ListItem>
											<ListItem>Mobile</ListItem>
											<ListItem>Home</ListItem>
										</MultiSplitButton>
									</div>
									<div className="group"> <span>Address</span>
										<MultiSplitButton  buttonsDataSource={['Send Address']}
											dropDownPosition="bottom" selectionMode="one" className="combos1">
											<ListItem>Home</ListItem>
											<ListItem>Mobile</ListItem>
											<ListItem>Work</ListItem>
										</MultiSplitButton>
									</div> <span>Ringtone</span>
									<span>Add note</span>
								</div>
							</div>
							<div className="module"></div>
						</div>
					</section>
					<div className="module">
						<h2>Generic overflow MultiSplitButton</h2>
						<p>The generic overflow MultiSplitButton displays an arrow by default. When
						the button is pressed, the menu appears. Pressing an option on the menu
			                    navigates to further settings for that option.</p>
						<br />
						<MultiSplitButton  buttonsDataSource={['Apply Font']}
							dropDownPosition="bottom">
							<ListItem>Arial</ListItem>
							<ListItem selected>Calibri</ListItem>
							<ListItem>Courier</ListItem>
							<ListItem>Verdana</ListItem>
						</MultiSplitButton>
					</div>
					<section id="style">
						<h2>Style</h2>
						<div className="module MultiSplitButtonLightTheme">
							<table>
								<tr>
									<td>
										<p>Normal</p>
									</td>
									<td>
										<MultiSplitButton  buttonsDataSource={['Get', 'Set']}
											dropDownPosition="bottom">
											<ListItem selected>Home</ListItem>
											<ListItem>Mobile</ListItem>
											<ListItem>Work</ListItem>
											<ListItem>Business</ListItem>
											<ListItem>Personal</ListItem>
										</MultiSplitButton>
									</td>
								</tr>
								<tr>
									<td>
										<p>Disabled</p>
									</td>
									<td>
										<MultiSplitButton  buttonsDataSource={['Get', 'Set']}
											dropDownPosition="bottom" disabled>
											<ListItem>Home</ListItem>
											<ListItem>Mobile</ListItem>
											<ListItem>Work</ListItem>
											<ListItem>Business</ListItem>
											<ListItem selected>Personal</ListItem>
										</MultiSplitButton>
									</td>
								</tr>
							</table>
						</div>
					</section>
					<section id="MultiSplitButtonOpenModes">
						<h2>Open Directions</h2>
						<div className="module">
							<p>smartMultiSplitButton has a number of opening directions but the most
			                        popular are "bottom", "overlay-center" and "top".</p>
						</div>
						<div className="module dropDownOpenModes">
							<table>
								<tbody>
									<tr>
										<td>Bottom</td>
										<td>
											<MultiSplitButton  buttonsDataSource={['Set Country']}
												dropDownPosition="bottom">
												<ListItem>Africa</ListItem>
												<ListItem selected>America</ListItem>
												<ListItem>Asia</ListItem>
												<ListItem>Europe</ListItem>
											</MultiSplitButton>
										</td>
									</tr>
									<tr>
										<td>Overlay-center</td>
										<td>
											<MultiSplitButton  buttonsDataSource={['Set Food']}
												dropDownPosition="overlay-center">
												<ListItem>Yogurt</ListItem>
												<ListItem selected>Honey</ListItem>
												<ListItem>Strawberries</ListItem>
											</MultiSplitButton>
										</td>
									</tr>
									<tr>
										<td>Top</td>
										<td>
											<MultiSplitButton  buttonsDataSource={['Set Nuts']}
												dropDownPosition="top">
												<ListItem>Peanuts</ListItem>
												<ListItem selected>Hazelnuts</ListItem>
												<ListItem>Almonds</ListItem>
											</MultiSplitButton>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>
					<section id="MultiSplitButtonSelectionModes">
						<h2>Selection Modes</h2>
						<div className="module">
							<p>smartMultiSplitButton has a variaty of selection modes allowing single
			                        or multiple item selection.</p>
						</div>
						<div>One(Selection of single item)</div>
						<br />
						<MultiSplitButton  buttonsDataSource={['Set State']}
							dropDownPosition="bottom">
							<ListItem selected>State 1</ListItem>
							<ListItem>State 2</ListItem>
							<ListItem>State 3</ListItem>
						</MultiSplitButton>
						<br />
						<div>oneOrManyExtended - allows selection with shift and ctrl.</div>
						<br />
						<MultiSplitButton  buttonsDataSource={['Submit']}
							dropDownPosition="bottom" selectionMode="oneOrManyExtended">
							<ListItem>State 1</ListItem>
							<ListItem selected>State 2</ListItem>
							<ListItem>State 3</ListItem>
						</MultiSplitButton>
						<br />
						<div>checkBox</div>
						<br />
						<MultiSplitButton  buttonsDataSource={['Submit Selection']}
							dropDownPosition="bottom" selectionMode="checkBox">
							<ListItem>Item 1</ListItem>
							<ListItem selected>Item 2</ListItem>
							<ListItem>Item 3</ListItem>
						</MultiSplitButton>
						<br />
						<div>radioButton</div>
						<br />
						<MultiSplitButton  buttonsDataSource={['Submit Selection']}
							dropDownPosition="bottom" selectionMode="radioButton">
							<ListItem>Item 1</ListItem>
							<ListItem selected>Item 2</ListItem>
							<ListItem>Item 3</ListItem>
						</MultiSplitButton>
						<br />
						<p>Additional selection modes are "zeroOrOne", "OneOrMany", "zeroOrMany"
			                    and "none"</p>
					</section>
					<MultiSplitButton  buttonsDataSource={['Set Country']}
						dropDownPosition="overlay-center" selectionMode="zeroOrOne" placeholder="Select Language">
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
					</MultiSplitButton>
				</div>
			</div >
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

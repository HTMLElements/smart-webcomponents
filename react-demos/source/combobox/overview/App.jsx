import React from "react";
import ReactDOM from "react-dom";
import { ComboBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/combobox';

class App extends React.Component {

	init() {

		// Your code here.
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<h2>Smart HTML ComboBox is an editable form control with an input that allows selecting a value from a list.</h2>
				<br />
				<div>
					<p>A dropdown list selects between multiple selections. It displays the current
					state and a down/up arrow. Available states may be shown as a list of strings,
					a palette, or icons, for example.
			            <br />
					</p>
					<p>When a user interacts with the dropDown, a menu can appear over, under
					or below the drop down list and displays the possible states. Pressing
					a state dismisses the menu if the selection is single and updates the button
					to display this new state.
			            <br />
					</p>
					<p>Scrolling within the dropdown behaves the same way a menu scrolls.</p>
				</div>
				<br />
				<br />
				<ComboBox  dropDownPosition="bottom" selectedIndexes={[0]}
					label="Phone" selectionMode="one" className="combos1">
					<ListItem>Mobile</ListItem>
					<ListItem>Home</ListItem>
					<ListItem>Work</ListItem>
				</ComboBox>
				<br />
				<br />
				<ComboBox  dropDownPosition="bottom" selectedIndexes={[0]}
					label="Email" selectionMode="one" className="combos1 ">
					<ListItem>Work</ListItem>
					<ListItem>Mobile</ListItem>
					<ListItem>Home</ListItem>
				</ComboBox>
				<br />
				<br />
				<ComboBox  dropDownPosition="bottom" selectedIndexes={[0]}
					label="Address" selectionMode="one" className="combos1">
					<ListItem>Home</ListItem>
					<ListItem>Mobile</ListItem>
					<ListItem>Work</ListItem>
				</ComboBox>
				<br />
				<br />
				<div>
					<h2>Generic overflow combobox</h2>
					<p>The generic overflow combobox displays an arrow by default. When the button
					is pressed, the menu appears. Pressing an option on the menu navigates
			            to further settings for that option.</p>
					<br />
					<ComboBox  dropDownPosition="bottom">
						<ListItem>Arial</ListItem>
						<ListItem selected>Calibri</ListItem>
						<ListItem>Courier</ListItem>
						<ListItem>Verdana</ListItem>
					</ComboBox>
				</div>
				<br />
				<br />
				<h2>ComboBox Style</h2>
				<br />
				<div>
					<p>Normal</p>
					<br />
					<ComboBox  dropDownPosition="bottom">
						<ListItem selected>Home</ListItem>
						<ListItem>Mobile</ListItem>
						<ListItem>Work</ListItem>
						<ListItem>Business</ListItem>
						<ListItem>Personal</ListItem>
					</ComboBox>
					<br />
					<p>Opened</p>
					<br />
					<ComboBox  opened dropDownPosition="bottom">
						<ListItem selected>Home</ListItem>
						<ListItem>Mobile</ListItem>
						<ListItem>Work</ListItem>
						<ListItem>Business</ListItem>
						<ListItem>Personal</ListItem>
					</ComboBox>
					<br />
					<p>Disabled</p>
					<br />
					<ComboBox  dropDownPosition="bottom" disabled>
						<ListItem>Home</ListItem>
						<ListItem>Mobile</ListItem>
						<ListItem>Work</ListItem>
						<ListItem>Business</ListItem>
						<ListItem selected>Personal</ListItem>
					</ComboBox>
				</div>
				<br />
				<br />
				<h2>ComboBox Open Directions</h2>
				<div className="module">
					<p>smartComboBox has a number of opening directions but the most popular
			            are "bottom", "overlay-center" and "top".</p>
				</div>
				<div className="dropDownOpenModes">
					<table>
						<tbody>
							<tr>
								<td>Bottom</td>
								<td>
									<ComboBox  dropDownPosition="bottom">
										<ListItem>Africa</ListItem>
										<ListItem selected>America</ListItem>
										<ListItem>Asia</ListItem>
										<ListItem>Europe</ListItem>
									</ComboBox>
								</td>
							</tr>
							<tr>
								<td>Overlay-center</td>
								<td>
									<ComboBox  dropDownPosition="overlay-center">
										<ListItem>Yogurt</ListItem>
										<ListItem selected>Honey</ListItem>
										<ListItem>Strawberries</ListItem>
									</ComboBox>
								</td>
							</tr>
							<tr>
								<td>Top</td>
								<td>
									<ComboBox  dropDownPosition="top">
										<ListItem>Peanuts</ListItem>
										<ListItem selected>Hazelnuts</ListItem>
										<ListItem>Almonds</ListItem>
									</ComboBox>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<br />
				<br />
				<h2>ComboBox Selection Modes</h2>
				<div className="module">
					<p>smartComboBox has a variaty of selection modes allowing single or multiple
			            item selection.</p>
				</div>
				<div>One(Selection of single item)</div>
				<br />
				<ComboBox  dropDownPosition="bottom">
					<ListItem selected>State 1</ListItem>
					<ListItem>State 2</ListItem>
					<ListItem>State 3</ListItem>
				</ComboBox>
				<br />
				<div>oneOrManyExtended - allows selection with shift and ctrl.</div>
				<br />
				<ComboBox  dropDownPosition="bottom" selectionMode="oneOrManyExtended">
					<ListItem>State 1</ListItem>
					<ListItem selected>State 2</ListItem>
					<ListItem>State 3</ListItem>
				</ComboBox>
				<br />
				<div>checkBox</div>
				<br />
				<ComboBox  dropDownPosition="bottom" selectionMode="checkBox">
					<ListItem>Item 1</ListItem>
					<ListItem selected>Item 2</ListItem>
					<ListItem>Item 3</ListItem>
				</ComboBox>
				<br />
				<div>radioButton</div>
				<br />
				<ComboBox  dropDownPosition="bottom" selectionMode="radioButton">
					<ListItem>Item 1</ListItem>
					<ListItem selected>Item 2</ListItem>
					<ListItem>Item 3</ListItem>
				</ComboBox>
				<br />
				<p>Additional selection modes are "zeroOrOne", "OneOrMany", "zeroOrMany"
			        and "none"</p>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

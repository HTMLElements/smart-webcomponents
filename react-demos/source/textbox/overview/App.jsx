import React from "react";
import ReactDOM from "react-dom";
import { ComboBox, ListItem } from 'smart-webcomponents-react/combobox';
import { TextBox } from 'smart-webcomponents-react/textbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.textbox = React.createRef();
		this.templateContainer = React.createRef();
	}

	init() {

	}

	componentDidMount() {
		this.templateContainer.current.innerHTML = `
		<template id="itemTemplate">
		<div className="templateContainer">
			<div className="primaryAction"><i className="material-icons"></i>{{ label }}</div>
			<div className="secondaryAction"></div>
		</div>
		</template>
		<template id="multiLineTemplate">
			<div className="templateContainer">
				<div className="firstLine">{{ label }}</div>
				<div className="secondLine"></div>
			</div>
		</template>
		`;
	}

	render() {
		return (
			<div className="smart-demo-container">
				<div ref={this.templateContainer}></div>
				<div>
					<section>
						<div>
							<h2>Text fields allow users to input, edit, and select text.</h2>
							<div className="module">
								<p>Text fields typically reside in forms but can appear in other places,
			                            like dialog boxes and search.</p>
							</div>
							<div className="module">
								<h3>Usage</h3>
								<p>Text fields validate input, help users fix errors, autocomplete words,
			                            and provide suggestions.</p>
								<h3>Field types</h3>
								<p>Single-line
			                            <br />Multi-line
			                            <br />Text area</p>
								<h3>Input types</h3>
								<p>Formatted inputs
			                            <br />Nested menus & pickers</p>
							</div>
						</div>
					</section>
					<section id="text-box-principles">
						<h2>Principles</h2>
						<div className="module">
							<p>Text fields should have the following characteristics:</p>
						</div>
						<div className="module module-wide">
							<h2>Identifiable</h2>
							<p>Using a tappable touch target, text fields should indicate that users
			                        can enter information.</p>
							<h2>Findable</h2>
							<p>It should be easy to find a text field among other elements.</p>
							<h2>Legible</h2>
							<p>Text fields should indicate their state – whether enabled or disabled,
							empty or filled, valid or invalid – with clear label, input, and assistive
			                        text.</p>
						</div>
					</section>
					<section id="text-box-layout">
						<h2>Layout</h2>
						<p>Text fields contain the following elements:</p>
						<div>
							<div className="module">
								<h2>Label</h2>
								<p>Text field labels display the type of input a field requires. Every text
								field should have a label.
			                            <br />Labels are aligned with the input line and always visible. They can be
			                            resting (when a field is inactive and empty) or floating.</p>
								<h2>Input line</h2>
								<p>The input line indicates where to enter text, displayed below the label.
								When a field is active or contains an error, the line’s color and thickness
			                            vary.</p>
								<h2>Cursor</h2>
								<p>The cursor indicates the user’s current input position.
			                            <br />
									<br />
									<br />
								</p>
							</div>
						</div>
						<div>
							<div className="module">
								<p>In forms with some required fields, indicate all of the required ones.
			                            However, if there are fewer optional fields, indicate those instead.</p>
							</div>
							<div className="module">
								<div className="light-theme" id="requiredExample">
									<TextBox id="layoutName" placeholder="Name *"></TextBox>
									<TextBox id="layoutAddress" placeholder="Address"></TextBox>
									<TextBox id="layoutCity" placeholder="City"></TextBox>
									<ComboBox id="layoutState">
										<ListItem>NY</ListItem>
										<ListItem>NC</ListItem>
										<ListItem>ND</ListItem>
										<ListItem>OH</ListItem>
									</ComboBox>
									<br />
									<TextBox id="layoutZip" placeholder="Zip"></TextBox>
									<TextBox id="layoutPhone" placeholder="Phone"></TextBox>
								</div>
								<p>Name and zip code are the only required fields in the form.</p>
							</div>
							<div className="module">
								<div className="light-theme" id="optionalExample">
									<TextBox id="layoutProductName" placeholder="Product name"></TextBox>
									<TextBox id="layoutPrice" placeholder="Price"></TextBox>
									<ComboBox id="layoutProductCategory" className="material animation"
										placeholder="Product category">
										<ListItem>Alabama</ListItem>
										<ListItem>California</ListItem>
										<ListItem>Delaware</ListItem>
									</ComboBox>
									<br />
									<TextBox id="layoutLocation" placeholder="Location"></TextBox>
									<TextBox id="layoutDescription" placeholder="Description (optional)"></TextBox>
								</div>
								<p>Description is the only optional field in the form.</p>
							</div>
						</div>
					</section>
					<section id="text-box-layout">
						<h2>States</h2>
						<div>
							<div className="module">
								<p>Text fields have two major states: enabled or disabled.</p>
								<p>In the enabled state, these user interactions are available:</p>
							</div>
							<div className="module">
								<div className="light-theme">
									<TextBox disabled></TextBox>
								</div>
								<p>Text field is disabled.</p>
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

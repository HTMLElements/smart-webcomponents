import React from "react";
import ReactDOM from "react-dom";
import { Chip } from 'smart-webcomponents-react/chip';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div style={{ position: 'relative' }} id="container">
					<section>
						<h1>smartChip</h1>
						<div>
							<h1>Chips represent complex entities in small blocks, such as a contact.</h1>
							<div className="module">
								<p>A chip may contain entities such as a photo, text, rules, an icon, or
			                        a contact.</p>
								<p>Contact chips may represent contact information in a compact way.</p>
							</div>
							<div className="module">
								<h3>Behavior</h3>
								<ul>
									<li>Selecting a chip opens a full detail view.</li>
									<li>Chips may be deleted if they display a delete icon.</li>
								</ul>
							</div>
							<div className="module"></div>
						</div>
					</section>
					<nav>
						<h1>Contents</h1>
						<ul>
							<li><a href="#chips-usage">Usage</a>
							</li>
							<li><a href="#chips-behavior">Behavior</a>
							</li>
							<li><a href="#chips-contact-chips">Contact chips</a>
							</li>
							<li><a href="#chips-specs">Specs</a>
							</li>
						</ul>
					</nav>
					<section id="chips-usage">
						<h2>Usage</h2>
						<div className="module ">
							<h2>Types of chips</h2>
							<p>Chips can be used for various types of entities, including free form text,
			                    predefined text, rules, or contacts. Chips may also contain icons.</p>
						</div>
						<div className="module">
							<div className="light">
								<Chip close-button className="material">Example Chip</Chip>
								<br />
								<br />
								<Chip className="material">Example Chip</Chip>
							</div>
							<p>Chips with text</p>
						</div>
						<div className="module">
							<div className="light">
								<Chip className="material" close-button>Trevor Hansen</Chip>
								<br />
								<br />
								<Chip className="material" avatar="A">ANZ Bank</Chip>
							</div>
							<p>Chips with text and an icon</p>
						</div>
					</section>
					<section id="chips-usage">
						<h2>Behavior</h2>
						<h3>Opening chips</h3>
						<p>Touching a chip opens a full detailed view (either in a card or full screen)
			                or a menu of options related to that chip.</p>
						<div className="module ">
							<h2>Deleting chips</h2>
							<p>Chips can be deletable or non-deletable. Display a delete icon if a chip
			                    is deletable.</p>
						</div>
						<div className="module module-large">
							<div className="light">
								<div id="deletableChips" className="chips"> <span className="left-container"><i className="material-icons">&#xE152;</i></span>
									<span
										className="edit-container">
										<Chip close-button className="material">Redbull (interest)</Chip>
										<Chip close-button className="material">GoPro (interest)</Chip>
									</span> <span className="right-container"> <span className="small">OR</span>  <i className="material-icons">&#xE161;</i>
										<i
											className="material-icons">&#xE14C;</i>
									</span>
								</div>
							</div>
							<p>Users may press the delete icon or use the keyboard “Delete” button to
			                    remove a chip.</p>
						</div>
						<div className="module"></div>
					</section>
					<section id="chips-themes">
						<h2>Themes</h2>
						<div className="module"></div>
						<div className="module">
							<div className="light">
								<Chip close-button className="material">ANZ Bank</Chip>
							</div>
							<p>Light theme</p>
						</div>
						<div className="module">
							<div className="dark">
								<Chip close-button className="material-dark">ANZ Bank</Chip>
							</div>
							<p>Dark theme</p>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

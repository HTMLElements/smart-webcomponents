import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.state = { showButton: false };
		this.hoverarea = React.createRef();
		this.floatinghoverbutton = React.createRef();
		this.floatingclickbutton = React.createRef();
		this.floatingclicksubaction = React.createRef();
		this.floatingclicksubaction2 = React.createRef();
	}

	init() {
		const that = this;

		const hoverArea = this.hoverarea.current;
		const floatingHoverButton = this.floatinghoverbutton.current;
		const floatingClickButton = this.floatingclickbutton.current;

		hoverArea.onmouseenter = (event) => {
			that.setState({
				showButton: true
			})
		};

		hoverArea.onmouseout = (event) => {
			if (event.relatedTarget && event.relatedTarget.classList.contains('smart-button')) {
				return;
			}

			that.setState({
				showButton: false
			})
		};

		floatingClickButton.onclick = (event) => {
			let subMenuButtons = [this.floatingclicksubaction.nativeElement.current, this.floatingclicksubaction2.nativeElement.current],
				changeIcon = false;

			for (let i = 0; i < subMenuButtons.length; i++) {
				if (subMenuButtons[i].classList.contains('smart-visibility-hidden')) {
					subMenuButtons[i].classList.remove('smart-visibility-hidden');
					changeIcon = true;
				}
				else {
					subMenuButtons[i].classList.add('smart-visibility-hidden');
				}
			}

			this.getElementsByClassName('material-icons')[0].innerHTML = changeIcon ? 'close' : 'share';
		}
	}


	componentDidMount() {
		this.init();
	}

	render() {
		const visible = this.state.showButton === false ? 'smart-visibility-hidden' : '';

		return (
			<div>
				<div className="smart-demo-container">
					<section>
						<div>
							<h2>Buttons communicate the action that will occur when the user touches them.</h2>
							<div className="module">
								<p>Smart buttons trigger an ink reaction on press. They may display text,
								imagery, or both. Flat buttons and raised buttons are the most commonly
			                        used types.</p>
								<p>
									<h3>Flat buttons</h3>
									<p>Flat buttons are text-only buttons.
			                            <br />They may be used in dialogs, toolbars, or inline.
			                            <br />They do not lift, but fill with color on press.</p>
									<h3>Raised buttons</h3>
									<p>Raised buttons are rectangular-shaped buttons.
			                            <br />They may be used inline.
			                            <br />They lift and display ink reactions on press.</p>
								</p>
							</div>
						</div>
					</section>
					<section id="button-types">
						<h2>Button types</h2>
						<div className="module">
							<p>There are three standard types of buttons:</p>
							<ul className="arrow-list">
								<li>Floating action button: A circular button that lifts and displays an ink
			                        reaction on press.</li>
								<li>Raised button: A typically rectangular button that lifts and displays
			                        ink reactions on press.</li>
								<li>Flat button: A button made of ink that displays ink reactions on press
			                        but does not lift</li>
							</ul>
						</div>
						<div className="module">
							<div className="button-container">
								<Button className="floating">+</Button>
							</div>
							<p>Floating action button</p>
						</div>
						<div className="module">
							<div className="button-container">
								<Button className="raised">button</Button>
							</div>
							<p>Raised button</p>
						</div>
						<div className="module">
							<div className="button-container">
								<Button className=" flat">button</Button>
							</div>
							<p>Flat button</p>
						</div>
						<div className="module">
							<div className="floating-demo-start">
								<Button className="secondary floating"><i className="material-icons">directions_car</i>
								</Button>
							</div>
							<p>Example of a floating action button</p>
						</div>
						<div className="module">
							<div className="raised-demo-start">
								<Button className="primary">force stop</Button>
								<Button className="error">uninstall</Button>
								<Button className="success">clear data</Button>
							</div>
							<p>Example of a raised button</p>
						</div>
						<div className="module">
							<div className="flat-demo-start">
								<Button className=" flat">disagree</Button>
								<Button className=" flat">agree</Button>
							</div>
							<p>Example of a flat button</p>
						</div>
						<div className="module button-style">
							<h2>Choosing button style</h2>
							<p>Choosing a button style depends on the primacy of the button, the number
			                    of containers on screen, and the screen layout.</p>
							<p><strong>Function:</strong> Is it important and ubiquitous enough to be
			                    a floating action button?</p>
							<p><strong>Dimension:</strong> Choose raised or flat depending on the container
			                    it will be in and how many z-space layers you have on screen. There should
			                    not be many layers of objects on the screen.</p>
							<p><strong>Layout:</strong> Use primarily one type of button per container.
			                    Only mix button types when you have a good reason to, such as emphasizing
			                    an important function.</p>
						</div>
					</section>
					<section id="button-usage">
						<h2>Usage</h2>
						<div className="module">
							<h2>Button types</h2>
							<p>The type of button used should be suited to the context in which it appears.</p>
						</div>
						<div className="module usage-table">
							<table>
								<tbody>
									<tr>
										<td colspan="1" rowspan="1">
											<p>Context</p>
										</td>
										<td colspan="1" rowspan="1">
											<p>Button type</p>
										</td>
									</tr>
									<tr>
										<td colspan="1" rowspan="1">
											<p>Dialogs</p>
										</td>
										<td colspan="1" rowspan="1">
											<p>Use <strong>flat buttons</strong> in dialogs.</p>
										</td>
									</tr>
									<tr>
										<td colspan="1" rowspan="1">
											<p>Inline</p>
										</td>
										<td colspan="1" rowspan="1">
											<p>Raised buttons or <strong>flat buttons</strong> can be used for inline buttons.</p>
										</td>
									</tr>
									<tr>
										<td colspan="1" rowspan="1">
											<p>Always available</p>
										</td>
										<td colspan="1" rowspan="1">
											<p>If your app requires actions to be persistent and readily available, you
			                                    can use the <strong>floating action button</strong>.</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="module">
							<h2>Recommended button placement</h2>
							<p><strong>Standard dialogs </strong>
							</p>
							<p>Button alignment on screen: right</p>
							<p>Place the affirmative button on the right, the dismissive button on the
			                    left.</p>
							<br />
							<p><strong>Forms</strong>
							</p>
							<p>Button alignment on screen: Left</p>
							<p>Place the affirmative button on the left, the dismissive button on the
			                    right.</p>
							<br />
							<p><strong>Cards</strong>
							</p>
							<p>Buttons are best placed on the left side of a card to increase their visibility.
							However, as cards have flexible layouts, buttons may be placed in a location
							suited to the content and context, while maintaining consistency within
			                    the product.</p>
							<br />
							<p><strong>Non-standard dialogs and modal windows</strong>
							</p>
							<p>Button placement in non-standard dialogs and modal windows depends on
			                    the complexity of the content they contain.</p>
							<p>For dialogs with relatively simple content, it is recommended to place
							buttons on the right side of a dialog, with the affirmative button to the
			                    right of the dismissive button.</p>
							<p>For lengthy or complex forms, it is recommended to place buttons on the
							left of the form, with the affirmative button to the left of the dismissive
			                    button.</p>
						</div>
					</section>
					<section id="button-flat">
						<h2>Outlined buttons</h2>
						<div className="module">
							<h2>Specs & Behavior</h2>
							<p>Outlined buttons are medium-emphasis buttons. They contain actions that
			                    are important, but aren’t the primary action in an app.</p>
						</div>
						<div className="module button-light">
							<div>
								<Button className="primary outlined">normal</Button>
								<br />
								<Button focus className="primary outlined">focused</Button>
								<br />
								<Button active className="primary outlined">Pressed</Button>
								<br />
								<Button className="primary outlined" disabled>disabled</Button>
							</div>
						</div>
					</section>
					<section id="button-flat">
						<h2>Flat buttons</h2>
						<div className="module">
							<h2>Specs & Behavior</h2>
						</div>
						<div className="module button-light">
							<div>
								<Button className="primary flat">normal</Button>
								<br />
								<Button focus className="primary flat">focused</Button>
								<br />
								<Button active className="primary flat">Pressed</Button>
								<br />
								<Button className="primary flat" disabled>disabled</Button>
							</div>
						</div>
					</section>
					<section id="button-flat-demo">
						<div className="module">
							<h2>Demo usage</h2>
							<br />
							<p>Flat buttons are printed on material. They do not lift, but fill with
			                    color on press.</p>
						</div>
						<div className="module">
							<div className="flat-demo">
								<Button className="primary flat">share</Button>
								<Button className="primary flat">explore</Button>
							</div>
							<p>Flat buttons minimize distraction from content.</p>
						</div>
						<div className="module">
							<div className="flat-demo2">
								<Button className="primary flat">button</Button>
								<Button className="primary flat">button</Button>
							</div>
							<p>Flat buttons are appropriate in dialogs.</p>
						</div>
					</section>
					<section id="button-raised">
						<h2>Raised buttons</h2>
						<div className="module">
							<h2>Specs & Behavior</h2>
							<br />
							<p>Raised buttons behave like a piece of material resting on another sheet
			                    – they lift and fill with color on press.</p>
						</div>
						<div className="module button-light">
							<div>
								<Button className="primary raised">normal</Button>
								<br />
								<Button focus className="primary raised">focused</Button>
								<br />
								<Button active className="primary raised">Pressed</Button>
								<br />
								<Button className="primary raised" disabled>disabled</Button>
							</div>
						</div>
					</section>
					<section id="button-raised-demo">
						<div className="module">
							<h2>Demo usage</h2>
							<br />
							<p>Raised buttons add dimension to mostly flat layouts. They emphasize functions
			                    on busy or wide spaces.</p>
						</div>
						<div className="module">
							<div className="raised-demo">
								<Button className="primary raised">force stop</Button>
								<Button className="primary raised error">uninstall</Button>
								<Button className="primary raised">clear data</Button>
							</div>
							<p>Raised buttons stand out more than flat buttons.</p>
						</div>
					</section>
					<section id="button-floating">
						<h2>Floating action buttons</h2>
						<div>
							<h2>A floating action button represents the primary action in an application.</h2>
							<div className="module">
								<p>A floating action button is used for a promoted action.</p>
								<p>Shaped like a circled icon floating above the UI, it changes color upon
								focus and lifts upon selection. When pressed, it may contain more related
			                        actions.</p>
							</div>
							<div className="module">
								<h3>Usage</h3>
								<p>Only one floating action button is recommended per screen to represent
			                        the most common action.</p>
								<h3>Behavior</h3>
								<p>It animates onto the screen as an expanding piece of material, by default.</p>
								<h3>Sizes </h3>
								<p>Default: 56 x 56dp
			                        <br />Mini: 40 x 40dp</p>
							</div>
						</div>
					</section>
					<section>
						<div className="module">
							<p>The floating action button should be placed 16dp minimum from the edge
			                    on mobile and 24dp minimum on tablet/desktop.</p>
						</div>
						<div className="module">
							<p>Raised buttons behave like a piece of material resting on another sheet
			                    – they lift and fill with color on press.</p>
						</div>
						<div className="module">
							<p>Raised buttons behave like a piece of material resting on another sheet
			                    – they lift and fill with color on press.</p>
						</div>
					</section>
					<section id="button-floating">
						<div className="module specs-behavior">
							<h2>Specs & Behavior</h2>
							<br />
							<p>Raised buttons behave like a piece of material resting on another sheet
			                    – they lift and fill with color on press.</p>
						</div>
						<div className="module button-light specs-behavior">
							<div>
								<Button className="secondary floating"><i className="material-icons">add_circle</i>
								</Button>
								<br />
								<Button className="success floating"><i className="material-icons">call</i>
								</Button>
								<br />
								<Button className="primary floating"><i className="material-icons">search</i>
								</Button>
								<br />
								<Button className="error floating" disabled><i className="material-icons">replay</i>
								</Button>
							</div>
						</div>
					</section>
					<section id="button-floating-demo">
						<div className="module">
							<h2>Demo usage</h2>
							<br />
							<p>Floating action buttons are designed to be flexible.</p>
							<p>The floating action button can simply trigger an action or navigate somewhere.
							The animation of the touch ripple expands outwards as the force that causes
			                    changes to the UI.</p>
						</div>
						<div className="module">
							<div className="floating-action-area">
								<Button ref={this.floatingclickbutton} className="secondary floating" id="floating-click-action"><i className="material-icons">share</i>
								</Button>
								<Button ref={this.floatingclicksubaction} className="secondary floating floating-click-sub-action smart-visibility-hidden "><i className="material-icons">cast</i>
								</Button>
								<Button ref={this.floatingclicksubaction2} className="secondary floating floating-click-sub-action smart-visibility-hidden"><i className="material-icons">cloud</i>
								</Button>
							</div>
							<p>A floating action button flinging out related actions</p>
						</div>
						<div className="module">
							<div className="floating-action-area">
								<div ref={this.hoverarea} id="hover-area"></div>
								<Button ref={this.floatinghoverbutton} className={`${visible}`} className="primary floating"
									id="floating-hover-action"><i className="material-icons">apps</i>
								</Button>
							</div>
							<p>A floating action button that spans multiple lateral screens (such as
			                    tabbed screens) should briefly disappear, then reappear if its action changes.</p>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Led } from 'smart-webcomponents-react/led';
import { MultiSplitButton, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multisplitbutton';
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div id="container">
			        <section>
			             <h1>smartButton</h1>
			            <div>
			                 <h1>Buttons communicate the action that will occur when the user touches them.</h1>
			                <div className="module">
			                    <p>Material buttons trigger an ink reaction on press. They may display text,
			                        imagery, or both. Flat buttons and raised buttons are the most commonly
			                        used types.</p>
			                    <p>Additional button types include:</p>
			                    <ul>
			                        <li><strong>Persistent footer</strong> buttons are flat buttons that may be
			                            used in screen footers or dialogs.</li>
			                        <li><strong>Floating action</strong> buttons are circular buttons that represent
			                            the primary action in an application.</li>
			                        <li><strong>Dropdown buttons</strong> display multiple selections.</li>
			                        <li><strong>Toggle buttons</strong> group related options. Icon toggles allow
			                            a single choice to be selected or deselected.</li>
			                    </ul>
			                </div>
			                <div className="module">
			                     <h3>Flat buttons</h3>
			                    <p>Flat buttons are text-only buttons.
			                        <br/>They may be used in dialogs, toolbars, or inline.
			                        <br/>They do not lift, but fill with color on press.</p>
			                    <h3>Raised buttons</h3>
			                    <p>Raised buttons are rectangular-shaped buttons.
			                        <br/>They may be used inline.
			                        <br/>They lift and display ink reactions on press.</p>
			                    <h3>Elevation </h3>
			                    <p>Flat buttons: 0dp
			                        <br/>Raised buttons: 2dp</p>
			                </div>
			                <div className="module">
			                    <figure>
			                        <img alt="" src="./../../../src/images/components-buttons.png"/>
			                    </figure>
			                </div>
			            </div>
			        </section>
			        <nav>
			             <h1>Contents</h1>
			            <ul>
			                <li><a href="#button-types">Button types</a>
			                </li>
			                <li><a href="#button-usage">Usage</a>
			                </li>
			                <li><a href="#button-style">Style</a>
			                </li>
			                <li><a href="#button-flat">Flat buttons</a>
			                </li>
			                <li><a href="#button-raised">Raised buttons</a>
			                </li>
			                <li><a href="#button-floating">Floating action buttons</a>
			                </li>
			                <li><a href="#toggle-button">Toggle buttons</a>
			                </li>
			                <li><a href="#power-button">Power buttons</a>
			                </li>
			                <li><a href="#led-button">LED</a>
			                </li>
			                <li><a href="#repeat-button">Repeat buttons</a>
			                </li>
			                <li><a href="#check-box">Check box</a>
			                </li>
			                <li><a href="#radio-button">Radio button</a>
			                </li>
			                <li><a href="#switch-button">Switch button</a>
			                </li>
			            </ul>
			        </nav>
			        <section id="button-types">
			             <h1>Button types</h1>
			            <div className="module">
			                <p>There are three standard types of buttons:</p>
			                <ul>
			                    <li>Floating action button: A circular material button that lifts and displays
			                        an ink reaction on press.</li>
			                    <li>Raised button: A typically rectangular material button that lifts and
			                        displays ink reactions on press.</li>
			                    <li>Flat button: A button made of ink that displays ink reactions on press
			                        but does not lift</li>
			                </ul>
			            </div>
			            <div className="module">
			                <div className="button-container">
			                    <Button  className="material floating">+</Button>
			                </div>
			                <p>Floating action button</p>
			            </div>
			            <div className="module">
			                <div className="button-container">
			                    <Button  className="material">button</Button>
			                </div>
			                <p>Raised button</p>
			            </div>
			            <div className="module">
			                <div className="button-container">
			                    <Button  className="material flat">button</Button>
			                </div>
			                <p>Flat button</p>
			            </div>
			            <div className="module">
			                <div className="floating-demo-start">
			                    <Button  className="material floating"><i className="material-icons">&#xE531;</i>
			                    </Button>
			                </div>
			                <p>Example of a floating action button</p>
			            </div>
			            <div className="module">
			                <div className="raised-demo-start">
			                    <Button  className="material">force stop</Button>
			                    <Button  className="material">uninstall</Button>
			                    <Button  className="material">clear data</Button>
			                </div>
			                <p>Example of a raised button</p>
			            </div>
			            <div className="module">
			                <div className="flat-demo-start">
			                    <Button  className="material flat">disagree</Button>
			                    <Button  className="material flat">agree</Button>
			                </div>
			                <p>Example of a flat button</p>
			            </div>
			            <div className="module button-style">
			                 <h1>Choosing button style</h1>
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
			            <div className="module button-style">
			                <figure>
			                    <img alt="" src="https://storage.googleapis.com/material-design/publish/material_v_12/assets/0Bx4BSt6jniD7RHFUU2dFdmMtcm8/components-buttons-usage-main.png"/>
			                </figure>
			            </div>
			        </section>
			        <section id="button-usage">
			             <h2>Usage</h2>
			            <div className="module">
			                 <h1>Button types</h1>
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
			                 <h1>Recommended button placement</h1>
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
			        <section id="button-style">
			             <h2>Style</h2>
			            <div className="module">
			                 <h1>Button themes</h1>
			                <p>All kind of themes can be applied to the button custom element. However,
			                    there are two major themes light and dark.</p>
			                <p>Custom themes can be created by changing colors of the desired sections
			                    of the buttons.</p>
			                <p>The following CSS variables allow easier visual customization:</p>
			                <ul>
			                    <li><strong>--smart-material-color</strong> is the default font color of the
			                        button.</li>
			                    <li><strong>--smart-material-background-color</strong> is the default background
			                        color of the button.</li>
			                    <li><strong>--smart-material-focused-background-color</strong> is the background
			                        color of the button in focused state.</li>
			                    <li><strong>--smart-material-hovered-background-color</strong> is the background
			                        color of the button on hover.</li>
			                    <li><strong>--smart-material-pressed-background-color</strong> is the background
			                        color of the button when pressed.</li>
			                </ul>
			            </div>
			        </section>
			        <section id="button-flat">
			             <h2>Flat buttons</h2>
			            <div className="module">
			                 <h2>Specs & Behavior</h2>
			            </div>
			            <div className="module button-light">
			                <div>
			                    <Button  className="material flat">normal</Button>
			                    <br />
			                    <Button  className="material flat">focused</Button>
			                    <br />
			                    <Button  className="material flat">Pressed</Button>
			                    <br />
			                    <Button  className="material flat" disabled>disabled</Button>
			                </div>
			                <p>Flat Light/Light theme</p>
			                <br />
			                <p>Minimum width: 85px</p>
			                <p>Height: 36px</p>
			                <p>Border radius: 2px</p>
			                <p>Focused: #D5D5D5</p>
			                <p>Hovered: #009FEF</p>
			                <p>Pressed: #CCCCCC</p>
			                <p>Disabled text: 0.55 #555</p>
			            </div>
			            <div className="module button-dark">
			                <div>
			                    <Button  className="material-dark flat">normal</Button>
			                    <br />
			                    <Button  className="material-dark flat">focused</Button>
			                    <br />
			                    <Button  className="material-dark flat">Pressed</Button>
			                    <br />
			                    <Button  className="material-dark flat" disabled>disabled</Button>
			                </div>
			                <p>Flat Dark/Dark theme</p>
			                <br />
			                <p>Minimum width: 85px</p>
			                <p>Height: 36px</p>
			                <p>Border radius: 2px</p>
			                <p>Focused: #4C4C4C</p>
			                <p>Hovered: #5A5A5A</p>
			                <p>Pressed: #595959</p>
			                <p>Disabled text: 0.55 #555</p>
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
			                    <Button  className="material flat">share</Button>
			                    <Button  className="material flat">explore</Button>
			                </div>
			                <p>Flat buttons minimize distraction from content.</p>
			            </div>
			            <div className="module">
			                <div className="flat-demo2">
			                    <Button  className="material flat">button</Button>
			                    <Button  className="material flat">button</Button>
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
			                    <Button  className="material">normal</Button>
			                    <br />
			                    <Button  className="material">focused</Button>
			                    <br />
			                    <Button  className="material">Pressed</Button>
			                    <br />
			                    <Button  className="material" disabled>disabled</Button>
			                </div>
			                <p>Raised Light/Light theme</p>
			                <br />
			                <p>Minimum width: 85px</p>
			                <p>Height: 36px</p>
			                <p>Border radius: 2px</p>
			                <p>Focused: #D5D5D5</p>
			                <p>Hovered: #009FEF</p>
			                <p>Pressed: #CCCCCC</p>
			                <p>Disabled text: 0.55 #555</p>
			            </div>
			            <div className="module button-dark">
			                <div>
			                    <Button  className="material-dark">normal</Button>
			                    <br />
			                    <Button  className="material-dark raised-focused">focused</Button>
			                    <br />
			                    <Button  className="material-dark raised-pressed">Pressed</Button>
			                    <br />
			                    <Button  className="material-dark" disabled>disabled</Button>
			                </div>
			                <p>Raised Dark/Dark theme</p>
			                <br />
			                <p>Minimum width: 85px</p>
			                <p>Height: 36px</p>
			                <p>Border radius: 2px</p>
			                <p>Focused: #2076C3</p>
			                <p>Hovered: #009FEF</p>
			                <p>Pressed: #1978CC</p>
			                <p>Disabled text: 0.55 #555</p>
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
			                    <Button  className="material">force stop</Button>
			                    <Button  className="material">uninstall</Button>
			                    <Button  className="material">clear data</Button>
			                </div>
			                <p>Raised buttons stand out more than flat buttons.</p>
			            </div>
			            <div className="module">
			                <div className="raised-demo2">
			                    <Button  className="material">button</Button>
			                    <Button  className="material">button</Button>
			                    <Button  className="material">button</Button>
			                </div>
			                <p>Raised buttons can help delineate sections of content on a page.</p>
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
			                        <br/>Mini: 40 x 40dp</p>
			                </div>
			                <div className="module">
			                    <figure>
			                        <img alt="" src="https://storage.googleapis.com/material-design/publish/material_v_12/assets/0B7WCemMG6e0VN20tOXJoUjVxQjg/components-buttons-fab.png"/>
			                    </figure>
			                </div>
			            </div>
			        </section>
			        <section>
			            <div className="module">
			                <p>The floating action button should be placed 16dp minimum from the edge
			                    on mobile and 24dp minimum on tablet/desktop.</p>
			            </div>
			            <div className="module">
			                <figure>
			                    <img alt="" src="https://storage.googleapis.com/material-design/publish/material_v_12/assets/0Bx4BSt6jniD7dkNVa080Ykd0ejg/patterns-actions-fab3.png"/>
			                </figure>
			                <p>Raised buttons behave like a piece of material resting on another sheet
			                    – they lift and fill with color on press.</p>
			            </div>
			            <div className="module">
			                <figure>
			                    <img alt="" src="https://storage.googleapis.com/material-design/publish/material_v_12/assets/0Bx4BSt6jniD7VW9vQ3o4V2hrYkE/patterns-actions-fab4.png"/>
			                </figure>
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
			                    <Button  className="material floating"><i className="material-icons">&#xE147;</i>
			                    </Button>
			                    <br />
			                    <Button  className="material floating"><i className="material-icons">&#xE0B0;</i>
			                    </Button>
			                    <br />
			                    <Button  className="material floating"><i className="material-icons">&#xE8B6;</i>
			                    </Button>
			                    <br />
			                    <Button  className="material floating" disabled><i className="material-icons">&#xE042;</i>
			                    </Button>
			                </div>
			                <p>Raised Light/Light theme</p>
			                <br />
			                <p>Minimum width: 40px</p>
			                <p>Height: 40px</p>
			                <p>Border radius: 50%</p>
			                <p>Focused: #D5D5D5</p>
			                <p>Hovered: #009FEF</p>
			                <p>Pressed: #CCCCCC</p>
			                <p>Disabled text: 0.55 #555</p>
			            </div>
			            <div className="module button-dark specs-behavior">
			                <div>
			                    <Button  className="material-dark floating"><i className="material-icons">&#xE150;</i>
			                    </Button>
			                    <br />
			                    <Button  className="material-dark floating floating-focused"><i className="material-icons">&#xE5D5;</i>
			                    </Button>
			                    <br />
			                    <Button  className="material-dark floating floating-pressed"><i className="material-icons">&#xE8B8;</i>
			                    </Button>
			                    <br />
			                    <Button  className="material-dark floating" disabled><i className="material-icons">&#xE5CD;</i>
			                    </Button>
			                </div>
			                <p>Raised Dark/Dark theme</p>
			                <br />
			                <p>Minimum width: 40px</p>
			                <p>Height: 40px</p>
			                <p>Border radius: 50%</p>
			                <p>Focused: #2076C3</p>
			                <p>Hovered: #009FEF</p>
			                <p>Pressed: #1978CC</p>
			                <p>Disabled text: 0.55 #555</p>
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
			                    <Button  className="material floating" id="floating-click-action"><i className="material-icons">&#xE80D;</i>
			                    </Button>
			                    <Button  className="material floating floating-click-sub-action smart-visibility-hidden "><i className="material-icons">&#xE307;</i>
			                    </Button>
			                    <Button  className="material floating floating-click-sub-action smart-visibility-hidden"><i className="material-icons">&#xE2BD;</i>
			                    </Button>
			                </div>
			                <p>A floating action button flinging out related actions</p>
			            </div>
			            <div className="module">
			                <div className="floating-action-area">
			                    <div id="hover-area"></div>
			                    <Button  className="material-dark floating smart-visibility-hidden"
			                    id="floating-hover-action"><i className="material-icons">&#xE5C3;</i>
			                    </Button>
			                </div>
			                <p>A floating action button that spans multiple lateral screens (such as
			                    tabbed screens) should briefly disappear, then reappear if its action changes.</p>
			            </div>
			        </section>
			        <section id="toggle-button">
			             <h2>smartToggleButton</h2>
			            <div className="module">
			                <br />
			                <p>Toggle buttons may be used to group related options. Arrange layout and
			                    spacing to convey that certain toggle buttons are part of a group.</p>
			                <p>Focus and pressed states may reinforce that toggles are part of a group.
			                    For example, when one button segment is focused, focus may be displayed
			                    simultaneously on the rest of the segment.</p>
			                <p>Toggle button requirements:</p>
			                <ul>
			                    <li>Have at least three toggle buttons in a group</li>
			                    <li>Label buttons with text, an icon, or both</li>
			                </ul>
			                <p>The following combinations are recommended:</p>
			                <ul>
			                    <li>Multiple and unselected</li>
			                    <li>Exclusive and unselected</li>
			                    <li>Exclusive only</li>
			                </ul>
			            </div>
			            <div className="module">
			                <div>
			                    <div className="toggle-button-container toggle-button-exclusive-selection">
			                        <div>
			                            <ToggleButton className="material exclusive-selection" group="A"><i className="material-icons">&#xE236;</i>
			                            </ToggleButton>
			                            <ToggleButton className="material exclusive-selection" group="A" checked><i className="material-icons">&#xE234;</i>
			                            </ToggleButton>
			                            <ToggleButton className="material exclusive-selection" group="A"><i className="material-icons">&#xE237;</i>
			                            </ToggleButton>
			                            <ToggleButton className="material exclusive-selection" group="A"><i className="material-icons">&#xE235;</i>
			                            </ToggleButton>
			                        </div>
			                    </div>
			                    <p>Exclusive selection</p>
			                    <p>Text justification toggle buttons present options for left, right, center,
			                        full, and justified text with only one item available for selection at
			                        a time. Selecting one option deselects any other.</p>
			                </div>
			                <div>
			                    <div className="toggle-button-container toggle-button-no-selection">
			                        <div>
			                            <ToggleButton className="material"><i className="material-icons">&#xE236;</i>
			                            </ToggleButton>
			                            <ToggleButton className="material"><i className="material-icons">&#xE234;</i>
			                            </ToggleButton>
			                            <ToggleButton className="material"><i className="material-icons">&#xE237;</i>
			                            </ToggleButton>
			                            <ToggleButton className="material"><i className="material-icons">&#xE235;</i>
			                            </ToggleButton>
			                        </div>
			                    </div>
			                    <p>No options are selected</p>
			                </div>
			            </div>
			            <div className="module">
			                <div>
			                    <div className="toggle-button-container toggle-button-multiple-selection">
			                        <div>
			                            <ToggleButton className="material" checked><i className="material-icons">&#xE238;</i>
			                            </ToggleButton>
			                            <ToggleButton className="material" checked><i className="material-icons">&#xE23F;</i>
			                            </ToggleButton>
			                            <ToggleButton className="material" checked><i className="material-icons">&#xE249;</i>
			                            </ToggleButton>
			                            <ToggleButton className="material"><i className="material-icons">&#xE23A;</i>  <i className="material-icons">&#xE5C5;</i>
			                            </ToggleButton>
			                        </div>
			                    </div>
			                    <p>Multiple selection</p>
			                    <p>Logically-grouped options, like Bold, Italic, and Underline, allow multiple
			                        options to be selected.</p>
			                </div>
			                <div>
			                    <div className="toggle-button-container toggle-button-single-selection">
			                        <div>
			                            <ToggleButton className="material"><i className="material-icons">&#xE238;</i>
			                            </ToggleButton>
			                            <ToggleButton className="material" checked><i className="material-icons">&#xE23F;</i>
			                            </ToggleButton>
			                            <ToggleButton className="material"><i className="material-icons">&#xE249;</i>
			                            </ToggleButton>
			                            <ToggleButton className="material"><i className="material-icons">&#xE23A;</i>  <i className="material-icons">&#xE5C5;</i>
			                            </ToggleButton>
			                        </div>
			                    </div>
			                    <p>One option is selected</p>
			                </div>
			            </div>
			        </section>
			        <section id="toggle-button-icons">
			            <div className="module">
			                 <h1>Icon toggles</h1>
			                <br />
			                <p>Icons are appropriate for toggle buttons that allow a single choice to
			                    be selected or deselected, such as adding or removing a star to an item.</p>
			                <p>They are best located in app bars, toolbars, action buttons or toggles.</p>
			                <p>Icon toggles may display bounded or unbounded ink surface reaction ripples
			                    beyond their touch-target bounds.</p>
			            </div>
			            <div className="module">
			                <div className="toggle-button-icons-container">
			                     <h3>Toggles</h3>
			                    <table>
			                        <tbody>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>normal</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>hover</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>focused</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>pressed</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>inactive</p>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <ToggleButton className="material normal"><i className="material-icons">&#xE63E;</i>
			                                    </ToggleButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <ToggleButton className="material hover"><i className="material-icons">&#xE63E;</i>
			                                    </ToggleButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <ToggleButton className="material focused"><i className="material-icons">&#xE63E;</i>
			                                    </ToggleButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <ToggleButton className="material pressed"><i className="material-icons">&#xE63E;</i>
			                                    </ToggleButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <ToggleButton className="material" disabled><i className="material-icons">&#xE63E;</i>
			                                    </ToggleButton>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <ToggleButton className="material normal"><i className="material-icons">&#xE63E;</i>
			                                    </ToggleButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <ToggleButton className="material hover"><i className="material-icons">&#xE63E;</i>
			                                    </ToggleButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <ToggleButton className="material focused"><i className="material-icons">&#xE63E;</i>
			                                    </ToggleButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <ToggleButton className="material pressed"><i className="material-icons">&#xE63E;</i>
			                                    </ToggleButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <ToggleButton className="material" disabled><i className="material-icons">&#xE63E;</i>
			                                    </ToggleButton>
			                                </td>
			                            </tr>
			                        </tbody>
			                    </table>
			                </div>
			                <p>Icon toggles in normal, hover, focused, pressed, and inactive states</p>
			            </div>
			            <div className="module"></div>
			            <div className="module">
			                <div className="toggle-button-icons-themes">
			                    <div>
			                        <p>Light icon</p>
			                        <ToggleButton className="material" checked><i className="material-icons">&#xE87D;</i>
			                        </ToggleButton>
			                        <p>30% white</p>
			                    </div>
			                    <div>
			                        <p>Dark icon</p>
			                        <ToggleButton className="material" checked><i className="material-icons">&#xE87D;</i>
			                        </ToggleButton>
			                        <p>12% black</p>
			                    </div>
			                    <div>
			                        <p>Color icon</p>
			                        <ToggleButton className="material" checked><i className="material-icons">&#xE87D;</i>
			                        </ToggleButton>
			                        <p>26% color</p>
			                    </div>
			                    <div>
			                        <p>Dark Theme</p>
			                        <ToggleButton className="material" checked><i className="material-icons">&#xE87D;</i>
			                        </ToggleButton>
			                        <p>20% white</p>
			                    </div>
			                    <div>
			                        <p>Dark Theme</p>
			                        <ToggleButton className="material" checked><i className="material-icons">&#xE87D;</i>
			                        </ToggleButton>
			                        <p>26% color</p>
			                    </div>
			                </div>
			                <p>The icon toggle focus indicator color and opacity are related to the color
			                    of the icon.</p>
			            </div>
			        </section>
			        <section id="power-button">
			             <h2>smartPowerButton</h2>
			            <div className="module">
			                <p>Power button is a two-state type of toggle button with an indicator.</p>
			                <p>Used as indicator.</p>
			            </div>
			            <div className="module power-button-flat-light">
			                <div>
			                    <PowerButton className="material flat"></PowerButton>
			                    <br />
			                    <PowerButton className="material flat"></PowerButton>
			                    <br />
			                    <PowerButton className="material flat" checked></PowerButton>
			                    <br />
			                    <PowerButton className="material flat" disabled></PowerButton>
			                </div>
			                <p>Flat power button Light/Light theme</p>
			            </div>
			            <div className="module power-button-flat-dark">
			                <div>
			                    <PowerButton className="material-dark flat"></PowerButton>
			                    <br />
			                    <PowerButton className="material-dark flat"></PowerButton>
			                    <br />
			                    <PowerButton className="material-dark flat" checked></PowerButton>
			                    <br />
			                    <PowerButton className="material-dark flat" disabled></PowerButton>
			                </div>
			                <p>Flat power button Dark/Dark theme</p>
			            </div>
			            <div className="module"></div>
			            <div className="module power-button-light">
			                <div>
			                    <PowerButton className="material"></PowerButton>
			                    <br />
			                    <PowerButton className="material"></PowerButton>
			                    <br />
			                    <PowerButton className="material" checked></PowerButton>
			                    <br />
			                    <PowerButton className="material" disabled></PowerButton>
			                </div>
			                <p>Raised Power button Light/Light theme</p>
			            </div>
			            <div className="module power-button-dark">
			                <div>
			                    <PowerButton className="material-dark"></PowerButton>
			                    <br />
			                    <PowerButton className="material-dark"></PowerButton>
			                    <br />
			                    <PowerButton className="material-dark" checked></PowerButton>
			                    <br />
			                    <PowerButton className="material-dark" disabled></PowerButton>
			                </div>
			                <p>Raised Power button Dark/Dark theme</p>
			            </div>
			            <div className="module power-button-dark">
			                 <h2>Demo usage</h2>
			            </div>
			            <div className="module power-button">
			                <div>
			                    <CircularProgressBar className="material" id="progressBarAnimated" indeterminate
			                    value={100}>
			                        <PowerButton className="material" id="powerButtonAnimation"></PowerButton>
			                    </CircularProgressBar>
			                </div>
			                <p>A power button can control the loading process.</p>
			            </div>
			        </section>
			        <section id="led-button">
			             <h2>smartLED</h2>
			            <div className="module">
			                <p>LED button is a type of toggle button that has three states: checked,
			                    unchecked and indeterminate.</p>
			                <p>Used as indicator.</p>
			            </div>
			            <div className="module">
			                <div className="led-buttons-table">
			                    <table>
			                        <tbody>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>Theme</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>normal</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>pressed</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>indeterminate</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>inactive</p>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>Light</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <Led  className="material"></Led>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <Led  className="material" checked></Led>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <Led  className="material" indeterminate></Led>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <Led  className="material" disabled></Led>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>Dark</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <Led  className="material-dark"></Led>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <Led  className="material-dark" checked></Led>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <Led  className="material-dark" indeterminate></Led>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <Led  className="material-dark" disabled></Led>
			                                </td>
			                            </tr>
			                        </tbody>
			                    </table>
			                </div>
			            </div>
			        </section>
			        <section id="repeat-button">
			             <h2>smartRepeatButton</h2>
			            <div className="module">
			                <p>Repeat buttons are normal buttons that repeat a single action until release.</p>
			                <p>The repeat button can simply trigger an action multiple times depending
			                    on the time interval applied.</p>
			            </div>
			            <div className="module">
			                <div className="repeat-buttons-container">
			                    <RepeatButton className="material"><i className="material-icons">&#xE314;</i>
			                    </RepeatButton>
			                    <RepeatButton className="material"><i className="material-icons">&#xE315;</i>
			                    </RepeatButton>
			                    <RepeatButton className="material"><i className="material-icons">&#xE316;</i>
			                    </RepeatButton>
			                    <RepeatButton className="material"><i className="material-icons">&#xE313;</i>
			                    </RepeatButton>
			                </div>
			                <p>Repeat buttons can be used for navigation.</p>
			            </div>
			            <div className="module">
			                <div className="repeat-buttons-container">
			                    <RepeatButton className="material"><i className="material-icons">&#xE059;</i>
			                    </RepeatButton>
			                    <RepeatButton className="material"><i className="material-icons">&#xE056;</i>
			                    </RepeatButton>
			                </div>
			                <p>A repeat button can also be used to configure a range control.</p>
			            </div>
			        </section>
			        <section id="repeat-buttons-specs-behavior">
			            <div className="module">
			                 <h2>Specs & Behavior</h2>
			            </div>
			            <div className="module repeat-button-light">
			                <div>
			                    <RepeatButton className="material"><i className="material-icons">&#xE020;</i>
			                    </RepeatButton>
			                    <br />
			                    <RepeatButton className="material"><i className="material-icons">&#xE01F;</i>
			                    </RepeatButton>
			                    <br />
			                    <RepeatButton className="material"><i className="material-icons">&#xE8FF;</i>
			                    </RepeatButton>
			                    <br />
			                    <RepeatButton className="material" disabled><i className="material-icons">&#xE900;</i>
			                    </RepeatButton>
			                </div>
			                <p>Repeat button Light/Light theme</p>
			                <br />
			                <p>Minimum width: 30px</p>
			                <p>Height: 30px</p>
			                <p>Border radius: 2px</p>
			                <p>Focused: #D5D5D5</p>
			                <p>Hovered: #009FEF</p>
			                <p>Pressed: #CCCCCC</p>
			                <p>Disabled text: 0.55 #555</p>
			            </div>
			            <div className="module repeat-button-dark">
			                <div>
			                    <RepeatButton className="material-dark"><i className="material-icons">&#xE5C4;</i>
			                    </RepeatButton>
			                    <br />
			                    <RepeatButton className="material-dark"><i className="material-icons">&#xE5DB;</i>
			                    </RepeatButton>
			                    <br />
			                    <RepeatButton className="material-dark"><i className="material-icons">&#xE5C8;</i>
			                    </RepeatButton>
			                    <br />
			                    <RepeatButton className="material-dark" disabled><i className="material-icons">&#xE5D8;</i>
			                    </RepeatButton>
			                </div>
			                <p>Repeat button Dark/Dark theme</p>
			                <br />
			                <p>Minimum width: 30px</p>
			                <p>Height: 30px</p>
			                <p>Border radius: 2px</p>
			                <p>Focused: #4C4C4C</p>
			                <p>Hovered: #5A5A5A</p>
			                <p>Pressed: #595959</p>
			                <p>Disabled text: 0.55 #555</p>
			            </div>
			        </section>
			        <section id="repeat-button-demo">
			            <div className="module">
			                 <h2>Demo usage</h2>
			                <br />
			                <p>Repeating actions can be performed using Repeat buttons.</p>
			            </div>
			            <div className="module">
			                <div className="repeat-buttons-container">
			                    <RepeatButton className="material" id="progressUp"><i className="material-icons">&#xE5D8;</i>
			                    </RepeatButton>
			                    <RepeatButton className="material" id="progressDown"><i className="material-icons">&#xE5DB;</i>
			                    </RepeatButton>
			                </div>
			                <p>Repeat buttons that control the fill of the progress bar.</p>
			            </div>
			            <div className="module">
			                <div className="progress-bar-container">
			                    <ProgressBar  className="material" id="progressBar" orientation="vertical"
			                    inverted show-progress-value value={5}></ProgressBar>
			                    <CircularProgressBar className="material" id="progressBarCircular"
			                    show-progress-value value={5}></CircularProgressBar>
			                </div>
			                <p>Progress bars : vertical and circular.</p>
			            </div>
			            <div className="module">
			                <p>Repeat button nested inside a Circular progress bar.</p>
			            </div>
			            <div className="module">
			                <div className="progress-bar-container">
			                    <CircularProgressBar className="material" id="progressBarCircularControl"
			                    value={25}>
			                        <RepeatButton className="material" id="incrementButton"><i className="material-icons">&#xE5D8;</i>
			                        </RepeatButton>
			                        <RepeatButton className="material" id="decrementButton"><i className="material-icons">&#xE5DB;</i>
			                        </RepeatButton>
			                    </CircularProgressBar>
			                </div>
			                <p>Light theme</p>
			            </div>
			            <div className="module">
			                <div className="progress-bar-container-dark-theme">
			                    <CircularProgressBar className="material-dark" id="progressBarCircularControl2"
			                    value={50}>
			                        <RepeatButton className="material-dark" id="incrementButton2"><i className="material-icons">&#xE3CB;</i>
			                        </RepeatButton>
			                        <RepeatButton className="material-dark" id="decrementButton2"><i className="material-icons">&#xE3CD;</i>
			                        </RepeatButton>
			                    </CircularProgressBar>
			                </div>
			                <p>Dark theme</p>
			            </div>
			        </section>
			        <section id="check-box">
			             <h2>smartCheckBox</h2>
			            <div className="module">
			                <p>Checkboxes allow the user to select multiple options from a set.</p>
			                <p>If you have multiple options appearing in a list, you can preserve space
			                    by using checkboxes instead of on/off switches.</p>
			                <p>If you have a single option, avoid using a checkbox and use an on/off
			                    switch instead.</p>
			            </div>
			            <div className="module">
			                <div className="check-box-container-light">
			                    <CheckBox  className="material animation" group-name="A" checked></CheckBox>
			                    <CheckBox  className="material animation" group-name="A"></CheckBox>
			                </div>
			                <p>Light theme for check boxes</p>
			            </div>
			            <div className="module">
			                <div className="check-box-container-dark">
			                    <CheckBox  className="material-dark animation" group-name="B"
			                    checked></CheckBox>
			                    <CheckBox  className="material-dark animation" group-name="B"></CheckBox>
			                </div>
			                <p>Dark theme for check box</p>
			            </div>
			        </section>
			        <section id="check-box-light">
			            <div className="module">
			                 <h2>Light</h2>
			                <p>On: #009788, Opacity 100%</p>
			                <p>Off: #555, Opacity 100%</p>
			                <p>Disabled: #000000, Opacity 25%</p>
			            </div>
			            <div className="module">
			                <div className="check-box-table-light">
			                    <table>
			                        <tbody>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p></p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>hover</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>focused</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>pressed</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>disabled</p>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>On</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material animation" checked></CheckBox>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material focused animation" checked></CheckBox>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material animation" checked></CheckBox>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material animation" checked disabled></CheckBox>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>Off</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material animation"></CheckBox>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material focused animation"></CheckBox>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material animation"></CheckBox>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material animation" disabled></CheckBox>
			                                </td>
			                            </tr>
			                        </tbody>
			                    </table>
			                </div>
			                <p>Light theme for check box in hover, focused, pressed, disabled states.</p>
			            </div>
			        </section>
			        <section id="check-box-dark">
			            <div className="module">
			                 <h2>Dark</h2>
			                <p>On: #009788, Opacity 100%</p>
			                <p>Off: #1978CC, Opacity 100%</p>
			                <p>Disabled: #FFFFFF, Opacity 25%</p>
			            </div>
			            <div className="module">
			                <div className="check-box-table-dark">
			                    <table>
			                        <tbody>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p></p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>hover</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>focused</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>pressed</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>disabled</p>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>On</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material-dark animation" checked></CheckBox>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material-dark focused animation" checked></CheckBox>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material-dark animation" checked></CheckBox>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material-dark animation" checked disabled></CheckBox>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>Off</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material-dark animation"></CheckBox>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material-dark focused animation"></CheckBox>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material-dark animation"></CheckBox>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <CheckBox  className="material-dark animation" disabled></CheckBox>
			                                </td>
			                            </tr>
			                        </tbody>
			                    </table>
			                </div>
			                <p>Dark theme for check box in hover, focused, pressed, disabled states.</p>
			            </div>
			        </section>
			        <section id="radio-button">
			             <h2>smartRadioButton</h2>
			            <div className="module">
			                <p>Radio buttons allow the selection of a single option from a set.</p>
			                <p>Radio buttons allow the user to select one option from a set. Use radio
			                    buttons for exclusive selection if you think that the user needs to see
			                    all available options side-by-side</p>
			                <p>Otherwise, consider a dropdown, which uses less space than displaying
			                    all options.</p>
			            </div>
			            <div className="module">
			                <div className="radio-buttons-container-light">
			                    <RadioButton  className="material" group-name="A" checked></RadioButton>
			                    <RadioButton  className="material" group-name="A"></RadioButton>
			                </div>
			                <p>Light theme for radio buttons</p>
			            </div>
			            <div className="module">
			                <div className="radio-buttons-container-dark">
			                    <RadioButton  className="material-dark" group-name="B" checked></RadioButton>
			                    <RadioButton  className="material-dark" group-name="B"></RadioButton>
			                </div>
			                <p>Dark theme for radio buttons</p>
			            </div>
			        </section>
			        <section id="radio-button-light">
			            <div className="module">
			                 <h2>Light</h2>
			                <p>On: #009788, Opacity 100%</p>
			                <p>Off: #555, Opacity 100%</p>
			                <p>Disabled: #000000, Opacity 25%</p>
			            </div>
			            <div className="module">
			                <div className="radio-buttons-table-light">
			                    <table>
			                        <tbody>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p></p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>hover</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>focused</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>pressed</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>disabled</p>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>On</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material" checked></RadioButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material focused" checked></RadioButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material" checked></RadioButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material" checked disabled></RadioButton>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>Off</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material"></RadioButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material focused"></RadioButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material"></RadioButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material" disabled></RadioButton>
			                                </td>
			                            </tr>
			                        </tbody>
			                    </table>
			                </div>
			                <p>Light theme for radio buttons in hover, focused, pressed, disabled states.</p>
			            </div>
			        </section>
			        <section id="radio-button-dark">
			            <div className="module">
			                 <h2>Dark</h2>
			                <p>On: #009788, Opacity 100%</p>
			                <p>Off: #1978CC, Opacity 100%</p>
			                <p>Disabled: #FFFFFF, Opacity 25%</p>
			            </div>
			            <div className="module">
			                <div className="radio-buttons-table-dark">
			                    <table>
			                        <tbody>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p></p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>hover</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>focused</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>pressed</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>disabled</p>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>On</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material-dark" checked></RadioButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material-dark focused" checked></RadioButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material-dark" checked></RadioButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material-dark" checked disabled></RadioButton>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>Off</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material-dark"></RadioButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material-dark focused"></RadioButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material-dark"></RadioButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <RadioButton  className="material-dark" disabled></RadioButton>
			                                </td>
			                            </tr>
			                        </tbody>
			                    </table>
			                </div>
			                <p>Dark theme for radio buttons in hover, focused, pressed, disabled states.</p>
			            </div>
			        </section>
			        <section id="switch-button">
			             <h2>smartSwitchButton</h2>
			            <div className="module">
			                <p>On/off switches toggle the state of a single settings option. The option
			                    that the switch controls, as well as the state it’s in, should be made
			                    clear from the corresponding inline label. Switches take on the same visual
			                    properties of the radio button.</p>
			                <p>Material switch buttons don't use labels.</p>
			            </div>
			            <div className="module">
			                <div className="switch-button-container-light">
			                    <SwitchButton  className="material animation" checked inverted></SwitchButton>
			                    <SwitchButton  className="material animation"
			                    inverted></SwitchButton>
			                </div>
			                <p>Light theme</p>
			            </div>
			            <div className="module">
			                <div className="switch-button-container-dark">
			                    <SwitchButton  className="material-dark animation" checked
			                    inverted></SwitchButton>
			                    <SwitchButton  className="material-dark animation"
			                    inverted></SwitchButton>
			                </div>
			                <p>Dark theme</p>
			            </div>
			        </section>
			        <section id="switch-button-light">
			            <div className="module">
			                 <h2>Light</h2>
			                <p>Thumb On: #009788, Opacity 100%</p>
			                <p>Track On: #009788, Opacity 60%</p>
			                <p>Thumb Off: #000000, #FAFAFA, Opacity 30%</p>
			                <p>Track Off: #808080, Opacity 100%</p>
			                <p>Disabled: #000000, Opacity 25%</p>
			            </div>
			            <div className="module">
			                <div className="switch-button-table-light">
			                    <table>
			                        <tbody>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p></p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>hover</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>focused</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>pressed</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>disabled</p>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>On</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material animation" checked inverted></SwitchButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material animation focused" checked
			                                    inverted></SwitchButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material animation pressed" checked
			                                    inverted></SwitchButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material animation" checked disabled
			                                    inverted></SwitchButton>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>Off</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material animation" inverted></SwitchButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material animation focused"
			                                    inverted></SwitchButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material animation pressed"
			                                    inverted></SwitchButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material animation" disabled
			                                    inverted></SwitchButton>
			                                </td>
			                            </tr>
			                        </tbody>
			                    </table>
			                </div>
			                <p>Light theme for switches in hover, focused, pressed, disabled states.</p>
			            </div>
			        </section>
			        <section id="switch-button-dark">
			            <div className="module">
			                 <h2>Dark</h2>
			                <p>Thumb On: #00d2bd, Opacity 100%</p>
			                <p>Track On: #00d2bd, Opacity 60%</p>
			                <p>Thumb Off: #00000, Opacity 80%</p>
			                <p>Track Off: #00000, Opacity 40%</p>
			                <p>Disabled: #FFFFFF, Opacity 25%</p>
			            </div>
			            <div className="module">
			                <div className="switch-buttons-table-dark">
			                    <table>
			                        <tbody>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p></p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>hover</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>focused</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>pressed</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <p>disabled</p>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>On</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material-dark animation" checked
			                                    inverted></SwitchButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material-dark animation focused"
			                                    checked inverted></SwitchButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material-dark animation pressed"
			                                    checked inverted></SwitchButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material-dark animation" checked
			                                    disabled inverted></SwitchButton>
			                                </td>
			                            </tr>
			                            <tr>
			                                <td colspan="1" rowspan="1">
			                                    <p>Off</p>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material-dark animation" inverted></SwitchButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material-dark animation focused"
			                                    inverted></SwitchButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material-dark animation pressed"
			                                    inverted></SwitchButton>
			                                </td>
			                                <td colspan="1" rowspan="1">
			                                    <SwitchButton  className="material-dark animation" disabled
			                                    inverted></SwitchButton>
			                                </td>
			                            </tr>
			                        </tbody>
			                    </table>
			                </div>
			                <p>Dark theme for switches in hover, focused, pressed, disabled states.</p>
			            </div>
			        </section>
			        <section id="multi-split-button">
			             <h2>smartMultiSplitButton</h2>
			            <div className="module">
			                <p>The split button allows having multiple buttons inside one.</p>
			                <p>The Multi Split Button is a composite control with which the user can
			                    select a default value bound to a primary button, or select from a list
			                    of mutually exclusive values displayed in a drop-down list bound to a secondary
			                    button.</p>
			            </div>
			            <div className="module">
			                <div className="multi-split-button-container-light">
			                    <MultiSplitButton  id="multiSplitButtonLight" className="animation material">Multi Split Button</MultiSplitButton>
			                    <br />
			                    <MultiSplitButton  className="animation material" disabled>Multi Split Button</MultiSplitButton>
			                </div>
			                <p>Light theme</p>
			            </div>
			            <div className="module">
			                <div className="multi-split-button-container-dark">
			                    <MultiSplitButton  id="multiSplitButtonDark" className="animation material-dark">Multi Split Button</MultiSplitButton>
			                    <br />
			                    <MultiSplitButton  className="animation material-dark"
			                    disabled>Multi Split Button</MultiSplitButton>
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

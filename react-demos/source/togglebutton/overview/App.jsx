import React from "react";
import ReactDOM from "react-dom";
import { ToggleButton } from "smart-webcomponents-react/button";

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div className="smart-demo-container">
				<section id="toggle-button">
					<div className="module">
						<br />
						<p>Toggle buttons may be used to group related options. Arrange layout and
			                    spacing to convey that certain toggle buttons are part of a group.</p>
						<p>Focus and pressed states may reinforce that toggles are part of a group.
						For example, when one button segment is focused, focus may be displayed
			                    simultaneously on the rest of the segment.</p>
						<p>Toggle button requirements:</p>
						<ul className="arrow-list">
							<li>Have at least three toggle buttons in a group</li>
							<li>Label buttons with text, an icon, or both</li>
						</ul>
						<p>The following combinations are recommended:</p>
						<ul className="arrow-list">
							<li>Multiple and unselected</li>
							<li>Exclusive and unselected</li>
							<li>Exclusive only</li>
						</ul>
					</div>
					<div className="module">
						<div>
							<div className="toggle-button-container toggle-button-exclusive-selection">
								<div>
									<ToggleButton className="primary" group="A"><i className="material-icons">format_align_left</i>
									</ToggleButton>
									<ToggleButton className="secondary" group="A" checked><i className="material-icons">format_align_center</i>
									</ToggleButton>
									<ToggleButton className="error" group="A"><i className="material-icons">format_align_right</i>
									</ToggleButton>
									<ToggleButton className="success" group="A"><i className="material-icons">format_align_justify</i>
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
									<ToggleButton><i className="material-icons">format_align_left</i>
									</ToggleButton>
									<ToggleButton><i className="material-icons">format_align_center</i>
									</ToggleButton>
									<ToggleButton><i className="material-icons">format_align_right</i>
									</ToggleButton>
									<ToggleButton><i className="material-icons">format_align_justify</i>
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
									<ToggleButton checked><i className="material-icons">format_bold</i>
									</ToggleButton>
									<ToggleButton checked><i className="material-icons">format_italic</i>
									</ToggleButton>
									<ToggleButton checked><i className="material-icons">format_underlined</i>
									</ToggleButton>
									<ToggleButton><i className="material-icons">format_color_fill</i>  <i className="material-icons">arrow_drop_down</i>
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
									<ToggleButton className="primary raised exclusive-selection"> <i className="material-icons">format_bold</i>
									</ToggleButton>
									<ToggleButton className="primary raised exclusive-selection" checked><i className="material-icons">format_italic</i>
									</ToggleButton>
									<ToggleButton className="primary raised exclusive-selection"><i className="material-icons">format_underlined</i>
									</ToggleButton>
									<ToggleButton className="primary  raised exclusive-selection"><i className="material-icons">format_color_fill</i><i className="material-icons">arrow_drop_down</i>
									</ToggleButton>
								</div>
							</div>
							<p>One option is selected</p>
						</div>
					</div>
				</section>
				<section id="toggle-button-icons">
					<div className="module">
						<h2>Icon toggles</h2>
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
											<ToggleButton className="normal"><i className="material-icons">wifi</i>
											</ToggleButton>
										</td>
										<td colspan="1" rowspan="1">
											<ToggleButton className="error"><i className="material-icons">wifi</i>
											</ToggleButton>
										</td>
										<td colspan="1" rowspan="1">
											<ToggleButton className="success"><i className="material-icons">wifi</i>
											</ToggleButton>
										</td>
										<td colspan="1" rowspan="1">
											<ToggleButton className="primary"><i className="material-icons">wifi</i>
											</ToggleButton>
										</td>
										<td colspan="1" rowspan="1">
											<ToggleButton className="secondary"><i className="material-icons">wifi</i>
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
								<p>icon</p>
								<ToggleButton checked><i className="material-icons">favorite</i>
								</ToggleButton>
							</div>
						</div>
						<p>The icon toggle focus indicator color and opacity are related to the color
			                    of the icon.</p>
					</div>
				</section>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

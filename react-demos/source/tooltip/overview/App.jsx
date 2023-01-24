import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.togglebutton = React.createRef();
		this.togglebutton2 = React.createRef();
		this.togglebutton3 = React.createRef();
		this.togglebutton4 = React.createRef();
		this.togglebutton5 = React.createRef();
		this.togglebutton6 = React.createRef();
		this.togglebutton7 = React.createRef();
		this.togglebutton8 = React.createRef();
		this.togglebutton9 = React.createRef();

		this.tooltip = React.createRef();
		this.tooltip2 = React.createRef();
	}

	attachTooltipToGroup(tooltip, elements, labels) {
		for (let i = 0; i < elements.length; i++) {
			const btn = elements[i],
				label = labels[i];

			btn.nativeElement.addEventListener('mouseenter', function () {
				tooltip.selector = btn.nativeElement;
				tooltip.value = label;
				tooltip.open();
			});
		}
	}

	componentDidMount() {
		const smallMenu = this.refs.smallMenu;

		window.onload = () => {
			const smallMenuButtons = [this.togglebutton.current, this.togglebutton2.current, this.togglebutton3.current, this.togglebutton4.current],
				smallMenuLabels = ['Bold', 'Italic', 'Underline', 'Color'],
				commonSmallMenuTooltip = this.tooltip.current,
				largeMenuButtons = [this.togglebutton5.current, this.togglebutton6.current, this.togglebutton7.current, this.togglebutton8.current, this.togglebutton9.current],
				largeMenuLabels = ['Font Family', 'Font Size', 'Bold', 'Italic', 'Underline', /* 'Color',*/ 'Align Left', 'Align Center', 'Align Right', 'Align Justify'],
				commonLargeMenuTooltip = this.tooltip2.current;

			this.attachTooltipToGroup(commonSmallMenuTooltip, smallMenuButtons, smallMenuLabels);
			this.attachTooltipToGroup(commonLargeMenuTooltip, largeMenuButtons, largeMenuLabels);

		}
	}

	render() {
		return (
			<div>
				<div className="smart-demo-container">
					<section>
						<div>
							<h2>Tooltips are text labels that appear when the user hovers over, focuses on, or touches an element.</h2>
							<div className="module">
								<p>Tooltips identify an element when they are activated. They may contain
								brief helper text about its function. For example, they may contain text
			                        information about actionable icons.</p>
								<p>Tooltip labels do not receive input focus.</p>
							</div>
							<div className="module">
								<h3>Summoned by:</h3>
								<p>Hovering over an element with a cursor
			                        <br />Focusing on an element with a keyboard (usually the tab key)
			                        <br />Upon touch</p>
							</div>
							<div className="module"></div>
						</div>
					</section>
					<nav>
						<h2>Contents</h2>
						<ul>
							<li><a href="#tooltip-usage">Usage</a>
							</li>
							<li><a href="#tooltip-interaction">Interaction</a>
							</li>
							<li><a href="#tooltip-desktop">Tooltips - desktop style</a>
							</li>
							<li><a href="#tooltip-mobile">Tooltips - mobile style</a>
							</li>
						</ul>
					</nav>
					<section id="tooltip-usage">
						<h2>Usage</h2>
						<div className="module">
							<p>Use tooltips for interactive imagery.</p>
						</div>
						<div className="module light module-large">
							<table>
								<tr>
									<td>
										<Button id="usageTooltipNormalBtn"><i className='material-icons'>&#xE8AD;</i>
										</Button>
										<br />
										<br />
										<Tooltip id="usageTooltipNormal" selector="usageTooltipNormalBtn"
											position="bottom" className="animation material">Print</Tooltip>
									</td>
								</tr>
							</table>
						</div>
					</section>
					<section id="tooltip-usage2">
						<div className="module">
							<p>Tooltips usually don’t display rich information including images and formatted
			                    text.</p>
							<p>Tooltips are different than ALT-attributes, which are intended primarily
			                    for static images.</p>
							<p>Tooltips by default don’t have directional arrows; instead, they rely
			                    on motion emanating from the source to convey direction.</p>
						</div>
						<div className="quick">
							<p>Move the pointer over the icon</p> <i id="quickAdd"
								className="material-icons">&#xE145;</i>
							<Tooltip id="tooltipQuickAdd"
								selector="quickAdd" position="bottom" offset={[0, 20]} className="animation material">Quick add</Tooltip>
						</div>
						<div className="module">
							<br />
							<br />
							<div className="menu-container toggle-button-exclusive-selection">
								<div id="smallMenu">
									<ToggleButton ref={this.togglebutton} className="exclusive-selection" group="small"><i className="material-icons">format_bold</i>
									</ToggleButton>
									<ToggleButton ref={this.togglebutton2} className="exclusive-selection" group="small"><i className="material-icons">format_italic</i>
									</ToggleButton>
									<ToggleButton ref={this.togglebutton3} className="exclusive-selection" group="small"><i className="material-icons">format_underlined</i>
									</ToggleButton>
									<ToggleButton ref={this.togglebutton4} className="exclusive-selection" group="small"><i className="material-icons">format_color_fill</i>
									</ToggleButton>
								</div>
							</div>
							<Tooltip ref={this.tooltip} id="commonSmallMenuTooltip" position="bottom"
								offset={[0, 10]} className="animation material"></Tooltip>
						</div>
					</section>
					<section id="tooltip-interaction">
						<h2>Interaction</h2>
						<div className="module ">
							<p>A tooltip is triggered by tapping and holding an item. Keep the tooltip
			                    displayed as long as the user continues to hold the element.</p>
							<h2>Motion details</h2>
							<p>The tooltip entrance occurs over 150ms, using the Deceleration Curve.
			                    It also exits over 150ms, using the Acceleration Curve.</p>
							<h2>Tooltip delay</h2>
							<p>User can control the delay of tooltip show by configuring the "delay"
			                    property.</p>
						</div>
						<div className="module module-large" >
							<Button id="button300ms" className="material">300ms</Button>
							<br />
							<br />
							<Tooltip id="tooltip300ms" selector="button300ms" position="bottom"
								delay={300} offset={[0, 10]} className="animation material">300ms delay</Tooltip>
							<br />
							<br />
							<Button id="button500ms" className="material">500ms</Button>
							<br />
							<br />
							<Tooltip id="tooltip500ms" selector="button500ms" position="bottom"
								delay={500} offset={[0, 10]} className="animation material">500ms delay</Tooltip>
							<br />
							<br />
							<Button id="button1000ms" className="material">1000ms</Button>
							<br />
							<br />
							<Tooltip id="tooltip1000ms" selector="button1000ms" position="bottom"
								delay={1000} offset={[0, 10]} className="animation material">1000ms delay</Tooltip>
							<br />
							<br />
							<Button id="button1500ms" className="material">1500ms</Button>
							<br />
							<br />
							<Tooltip id="toolti1500ms" selector="button1500ms" position="bottom"
								delay={1500} offset={[0, 10]} className="animation material">1500ms delay</Tooltip>
						</div>
					</section>
					<section id="tooltip-desktop">
						<div className="module module-large" >
							<div className="menu-container toggle-button-exclusive-selection">
								<div id="largeMenu">
									<ToggleButton ref={this.togglebutton5} id="btnBold" className="exclusive-selection" group="large"><i className="material-icons">format_bold</i>
									</ToggleButton>
									<ToggleButton ref={this.togglebutton6} id="btnItalic" className="exclusive-selection" group="large"><i className="material-icons">format_italic</i>
									</ToggleButton>
									<ToggleButton ref={this.togglebutton7} id="btnUnderline" className="exclusive-selection" group="large"><i className="material-icons">format_underlined</i>
									</ToggleButton>
									<ToggleButton ref={this.togglebutton8} id="btnAlignLeft" className="exclusive-selection" group="large"><i className="material-icons">format_align_left</i>
									</ToggleButton>
									<ToggleButton ref={this.togglebutton9} id="btnAlignCenter" className="exclusive-selection" group="large"><i className="material-icons">format_align_center</i>
									</ToggleButton>
								</div>
							</div>
							<Tooltip ref={this.tooltip2} id="commonLargeMenuTooltip" selector="btnAlignJustify"
								position="bottom" offset={[0, 10]} className="animation material">Align Justify</Tooltip>
						</div>
					</section>
					<section id="tooltip-mobile">
						<h2>Tooltips</h2>
						<div className="module"></div>
						<div className="module light" >
							<div>
								<Button id="button4a" className="primary"><i className="material-icons">&#xE5D5;</i>
								</Button>
								<br />
								<br />
								<Tooltip id="tooltip4a" selector="button4a" position="bottom"
									offset={[0, 10]} className="animation mobile">Refresh</Tooltip>
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

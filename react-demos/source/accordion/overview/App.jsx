import React from "react";
import ReactDOM from "react-dom";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

class App extends React.Component {

	handleExpand(event) {
		console.log("Expanded: " + event.detail.label);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<section>
					<div>
						<h2>smartAccordion element represents a custom element with expandable items. It is a lightweight container that may either stand alone or be connected to a larger surface.</h2>
						<div>
							<p>Each accordion item contains header and content part. Click on the header
			                    toggles the content part.</p>
							<p>smartAccordion may be used for a variety of tasks, such as:</p>
							<ul>
								<li>To edit a setting</li>
								<li>To create a tool for ad campaigns</li>
							</ul>
						</div>
						<br />
						<div>
							<h3>Usage</h3>
							<p>Editing
			                    <br />Creating flows</p>
							<br />
							<h3>Behavior</h3>
							<p>Expand
			                    <br />Collapse
			                    <br />Focus</p>
						</div>
					</div>
				</section>
				<br />
				<section>
					<h2>Accordion Web Components Usage</h2>
					<br />
					<div>
						<p><strong>Editing </strong>
						</p>
						<p>Accordions are best used for lightweight editing of an element, such as
			                selecting a value for a setting.</p>
						<p>For example, an app that contains tables may use accordion to adjust settings
			                on table elements.</p>
						<br />
						<p><strong>Creation flows </strong>
						</p>
						<p>Accordion items may be displayed in a sequence to form creation flows.</p>
						<p>This is an example of a tool for creating ad campaigns.</p>
					</div>
					<div>
						<Accordion  onExpand={this.handleExpand} expandMode="toggle" id="accordionUsage">
							<AccordionItem index={0} label="Trip name <span className='description'>Carribean cruise</span>"
								expanded>Carribean cruise</AccordionItem>
							<AccordionItem index={1} label="Location <span className='description'>Barbados</span>">Barbados</AccordionItem>
							<AccordionItem index={2} label="Start and end dates"></AccordionItem>

							<AccordionItem index={3} label="Carrier <span className='description'>The best cruise line</span>">The best cruise line</AccordionItem>
							<AccordionItem
								index={4} label="Meal preferences <span className='description'>Vegetarian</span>">Vegetarian</AccordionItem>
						</Accordion>
					</div>
					<div className="module"></div>
				</section>
				<section>
					<h2>Behavior</h2>
					<div>
						<h2>Collapsed accordion item</h2>
						<p>Displays summary information. Upon selecting the collapsed panel, it expands
			                to display the full expansion panel.</p>
						<h2>Expanded accordion item</h2>
						<p>Upon selection, a collapsed panel expands, allowing users to add or edit
			                information.</p>
						<p>Helper text may be added to the panel to assist the user.</p>
						<h2>Focus state</h2>
						<p>An expansion panel may use a focus state (by using a grey background on
			                the list item) to provide focus to individual list items.</p>
						<p>On a keyboard, users may traverse through list items by using the Tab
			                key.</p>
					</div>
					<div>
						<Accordion  expandMode="toggle" id="accordionBehavior">
							<AccordionItem index={0} label="Personal data" expanded>
								<br />
								<br />
								<TextBox  label="First name"></TextBox>
								<br />
								<br />
								<TextBox  label="Age"></TextBox>
								<br />
								<br />
							</AccordionItem>
							<AccordionItem index={1} label="<span className='description'>Currently I am closed</span>">I'm visible because I am open
			                    <br />
								<br />
							</AccordionItem>
						</Accordion>
					</div>
				</section>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

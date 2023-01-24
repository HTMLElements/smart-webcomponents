import React from "react";
import ReactDOM from "react-dom";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.log = React.createRef();
	}

	updateEventLog(event) {
		const eventContainer = document.createElement('div'),
			eventsLog = this.log.current,
			eventType = event.type;

		eventContainer.innerText = eventType + ' item #' + event.detail.index;
		eventContainer.className = eventType === 'expanded' ? 'expanded' : '';

		if (eventsLog) {
			eventsLog.appendChild(eventContainer);
		}
	}

	handleEvent(event) {
		this.updateEventLog(event);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Accordion reorder onExpanding={this.handleEvent.bind(this)} onExpand={this.handleEvent.bind(this)}
					onCollapsing={this.handleEvent.bind(this)} onCollapse={this.handleEvent.bind(this)}
					onDragStart={this.handleEvent.bind(this)} onDragEnd={this.handleEvent.bind(this)}>
					<AccordionItem label="Item 0">Content</AccordionItem>
					<AccordionItem label="Item 1">Content</AccordionItem>
					<AccordionItem label="Item 3">Content</AccordionItem>
					<AccordionItem label="Item 2">Content</AccordionItem>
					<AccordionItem label="Item 4">Content</AccordionItem>
					<AccordionItem label="Item 5">Content</AccordionItem>
				</Accordion>
				<div className="options">
					<div className="caption">Events</div>
					<div className="option" ref={this.log} id="log"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

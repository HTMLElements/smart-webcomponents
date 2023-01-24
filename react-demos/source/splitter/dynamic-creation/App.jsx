import React from "react";
import ReactDOM from "react-dom";
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.splitter = React.createRef();
	}

	init() {
		const splitter = this.splitter.current;

		splitter.nativeElement.addEventListener('dblclick', function (event) {
			const splitterItem = event.target.closest('smart-splitter-item');

			if (splitterItem) {
				ReactDOM.render(<Splitter>
					<SplitterItem>{splitterItem.innerHTML}</SplitterItem>
					<SplitterItem>New Item</SplitterItem>
				</Splitter>, document.createDocumentFragment(), function () {
					splitterItem.innerHTML = '';
					splitterItem.appendChild(this.nativeElement);
				});
			}
		});

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<h4>Hint:</h4>
				<p>Double click inside a Splitter Item in order to split it in two section.</p>
				<Splitter
					ref={this.splitter} orientation="horizontal" id="horizontalSplitter">
					<SplitterItem>Item 1</SplitterItem>
					<SplitterItem>Item 2</SplitterItem>
				</Splitter>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

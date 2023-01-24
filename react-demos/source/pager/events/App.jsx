import React from "react";
import ReactDOM from "react-dom";
import { Pager } from 'smart-webcomponents-react/pager';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.log = React.createRef();
	}

	handleChange(event) {
		this.log.current.innerHTML = 'Selected item #' + event.detail.index;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Pager onChange={this.handleChange.bind(this)} showPrevNextNavigationButtons showFirstLastNavigationButtons
					showPageIndexSelectors pagesCount={10} pageIndexSelectors={5} showSummary></Pager>
				<div className="options">
					<div className="caption">Event Log:</div>
					<div className="option">
						<div ref={this.log} id="eventLog"></div>
					</div>
					<div className="option">
						<div id="selectedPage"></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

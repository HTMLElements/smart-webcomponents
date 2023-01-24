import React from "react";
import ReactDOM from "react-dom";
import { Pager } from 'smart-webcomponents-react/pager';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Pager showPrevNextNavigationButtons showFirstLastNavigationButtons
			    showPageIndexSelectors pagesCount={5} pageIndexSelectors={5}></Pager>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

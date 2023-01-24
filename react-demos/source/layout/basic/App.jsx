import React from "react";
import ReactDOM from "react-dom";
import { Layout, LayoutItem, LayoutGroup } from 'smart-webcomponents-react/layout';

class App extends React.Component {

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Layout>
					<LayoutItem>Item 1</LayoutItem>
					<LayoutItem>Item 2</LayoutItem>
					<LayoutGroup orientation="horizontal">
						<LayoutItem>Item 3</LayoutItem>
						<LayoutItem>Item 4</LayoutItem>
					</LayoutGroup>
				</Layout >
			</div >
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

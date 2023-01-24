import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from 'smart-webcomponents-react/carousel';

class App extends React.Component {

	generateDataSource(items) {
		const dataSource = Array(items).fill({});

		dataSource.forEach((element, index) => dataSource[index] = {
			image: `./../../../src/images/carousel-medium-${index + 1}.jpg`,
			label: 'שקופית ' + index,
			content: 'תוכן ' + index
		});

		return dataSource;
	}

	dataSource = this.generateDataSource(6);

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Carousel dataSource={this.dataSource} rightToLeft keyboard></Carousel>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from 'smart-webcomponents-react/carousel';

class App extends React.Component {

	generateDataSource(items) {
		let dataSource = [];

		for (let i = 0; i < items; i++) {
			const item = {
				image: `./../../../src/images/carousel-square-${i + 1}.jpg`
			};
			dataSource.push(item);
		}

		return dataSource;
	}

	dataSource = this.generateDataSource(7);

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Carousel dataSource={this.dataSource} id="carousel" className="vertical circle" autoPlay
					slideShow loop keyboard displayMode="3d" interval={10000}></Carousel>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

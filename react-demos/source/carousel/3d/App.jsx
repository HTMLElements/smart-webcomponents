import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from 'smart-webcomponents-react/carousel';

class App extends React.Component {

	generateDataSource(items) {
		let dataSource = Array(items).fill({});

		dataSource.forEach((element, index) => dataSource[index] = {
			image: `./../../../src/images/carousel-square-${index + 1}.jpg`
		});
		return dataSource;
	}

	dataSource = this.generateDataSource(7);

	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h2>3d Carousel Square Style</h2>
			    <Carousel dataSource={this.dataSource} id="carouselSquare" autoPlay slideShow loop
			    hideIndicators keyboard displayMode="3d" interval={10000}></Carousel>
			     <h2>3d Carousel Circle Style</h2>
			    <Carousel dataSource={this.dataSource} id="carouselCircle" className="circle" autoPlay
			    slideShow loop hideIndicators keyboard displayMode="3d" interval={10000}></Carousel>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

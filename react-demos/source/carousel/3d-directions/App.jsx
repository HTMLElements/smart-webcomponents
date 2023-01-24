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
				<h2>Horizontal 3D Carousel</h2>
				<Carousel dataSource={this.dataSource} id="carouselHorizontal" className="horizontal" autoPlay
					slideShow loop hideIndicators keyboard displayMode="3d" interval={10000}></Carousel>

				<Carousel dataSource={this.dataSource} id="carouselHorizontal2" className="horizontal circle"
					autoPlay slideShow loop hideIndicators keyboard displayMode="3d" interval={10000}></Carousel>
				<br />
				<br />
				<h2>Bottom - Top  3D Carousel</h2>
				<Carousel dataSource={this.dataSource} id="carouselBottomTop" className="bottom-top" autoPlay
					slideShow loop hideIndicators keyboard displayMode="3d"></Carousel>

				<Carousel dataSource={this.dataSource} id="carouselBottomTop2" className="bottom-top circle"
					autoPlay slideShow loop hideIndicators keyboard displayMode="3d"></Carousel>

				<br />
				<br />
				<h2>Top - Bottom  3D Carousel</h2>
				<Carousel dataSource={this.dataSource} id="carouselTopBottom" className="top-bottom" autoPlay
					slideShow loop hideIndicators keyboard displayMode="3d"></Carousel>

				<Carousel dataSource={this.dataSource} id="carouselTopBottom2" className="top-bottom circle"
					autoPlay slideShow loop hideIndicators keyboard displayMode="3d"></Carousel>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

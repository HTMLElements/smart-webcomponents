import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from 'smart-webcomponents-react/carousel';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.carousel = React.createRef();
	}

	generateDataSource(items, headlineLength, contentLength) {
		const headlines = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			'Pellentesque facilisis dui ut faucibus laoreet',
			'Mauris tempus elit et metus sollicitudin, sit amet tempor justo auctor',
			'Cras dictum mauris et erat fringilla, ac porta nisl faucibus',
			'Duis in libero eu tortor cursus porttitor'
		],
			contentParagraphs = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, purus ac bibendum volutpat, justo orci finibus nulla, sed laoreet velit mauris eget est. Donec venenatis elit sit amet dui tempor, quis ornare augue viverra. In varius ut erat at cursus. Phasellus mollis odio sit amet neque imperdiet pharetra. Nam ut diam elementum, tempus lectus eget, pulvinar ligula. Morbi sit amet gravida justo. Integer ex orci, vulputate laoreet ornare sit amet, vehicula vel erat. Suspendisse molestie lacus sed fringilla pulvinar.`,
				`Nullam eget fermentum tellus. Nullam hendrerit ante eget pharetra ornare. Pellentesque posuere arcu elit, ut sagittis sapien lobortis quis. Duis ac aliquet lorem, vel ornare mauris. Aliquam lobortis blandit neque. Duis eros tellus, congue a faucibus non, pulvinar vitae magna. Morbi eu mauris velit. Sed in fringilla leo. Nullam ut odio ante. In gravida tortor sed tempor sagittis. Integer blandit, ligula eu blandit suscipit, nunc risus condimentum lectus, quis viverra orci tortor at est. Sed augue lacus, efficitur non purus quis, porta maximus metus.`,
				`Maecenas placerat vitae nunc sed egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Aliquam bibendum elit tempus sodales vestibulum. Maecenas a dapibus leo. Ut porta elit purus, eu lobortis nisl vehicula at. Aliquam vel ipsum ut metus ullamcorper porttitor. Nulla et facilisis orci, sed varius velit. In molestie in elit suscipit tincidunt.`,
				`Cras euismod iaculis tellus et laoreet. Proin eleifend porttitor mattis. Maecenas in dolor dignissim, mollis lacus consequat, tempus nunc. Morbi lacus ante, convallis eget rutrum eu, consectetur nec augue. Nullam vel sodales nulla. Donec in rhoncus odio, non cursus enim. Donec at mauris sit amet justo sagittis eleifend. Vivamus vel ligula id purus venenatis lobortis. Integer laoreet fermentum urna in lacinia. Maecenas sed urna eu ligula porta elementum non sit amet tortor. Praesent tincidunt laoreet quam ac congue. Sed eu ex ac lectus suscipit aliquet. Vivamus interdum ullamcorper sapien ut aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus posuere dolor in sollicitudin. Sed scelerisque fermentum urna, at ultricies lacus rutrum sed.`,
				`Aliquam scelerisque elit pharetra, finibus turpis quis, dictum ex. Morbi venenatis sodales commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In vitae tortor magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin in diam lacinia, ultricies dui in, cursus lectus. Cras risus lorem, rhoncus ac neque quis, auctor gravida leo. In hac habitasse platea dictumst. Nunc nulla felis, porttitor et tempor consectetur, pretium in nisl. Vivamus sollicitudin dolor gravida risus cursus viverra.`
			];
		let dataSource = [];
		items = items || 1;
		headlineLength = headlineLength || 10;
		contentLength = contentLength || 100;

		for (let i = 0; i < items; i++) {
			const image = `./../../../src/images/carousel-medium-${i + 1}.jpg`,
				headline = headlines[parseInt('' + Math.random() * 5)].substring(0, headlineLength),
				content = contentParagraphs[parseInt('' + Math.random() * 5)].substring(0, contentLength) + '.';
			let item = {
				image: image,
				headline: headline,
				content: content
			};
			dataSource.push(item);
		}

		return dataSource;
	}

	dataSource = this.generateDataSource(6, 30, 250);

	init() {
		const template = document.createElement('template');

		template.id = 'itemTemplate';
		template.innerHTML = `
		<div className="image-container" style="background-image:url('{{image}}')"> <span className="date-container">29 July 2018</span>
		</div>
		<div className="text-container">
			<h2>{{headline}}</h2>
			<p>{{content}}</p>
			<p>Read more ...</p>
		</div>
		<div className="footer-container"> <span className="footer-item"> <i className="material-icons">local_offer</i> <span className="footer-text">Art</span></span>
			<span
				className="footer-item"><i className="material-icons">person</i> admin</span> <span className="footer-item"><i className="material-icons">forum</i> 4</span>
			<span
				className="footer-item"><i className="material-icons">favorite</i> Favorite</span>
		</div>`;

		document.body.appendChild(template);

		this.carousel.current.itemTemplate = template.id;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Carousel dataSource={this.dataSource} ref={this.carousel} id="carousel" autoPlay loop wheel keyboard displayMode="3d"
					interval={10000}></Carousel>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

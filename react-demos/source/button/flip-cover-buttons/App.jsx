import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	flipCover(css, options) {
		options = options || {};

		if (typeof css === 'object') {
			options = css;
		}
		else {
			options.css = css;
		}

		css = options.css;

		let url = options.url || '';
		let text = options.text || css;
		let width = options.width || '';
		let height = options.height || '';
		let section = document.querySelector('.flip-cover-' + css);

		if (!section) {
			return;
		}

		section.classList.add(css + '-section');

		ReactDOM.render(<div>
			<div className={`${css + '-button'}`} style={{ width: '100%', height: '100%' }}>
				<a href={url}>
					<Button>{text}</Button>
				</a>
			</div>
			<div className={`${css + '-cover'}`} style={{ width: width }}>
				<div className={`${css + '-outer'}`} style={{ height: height }}></div>
			</div>
		</div>, section, function () {
			if (height) {
				let lineHeight = ':after{line - height: ' + height + ';}';
				let outerStyle = document.createElement('style');
				let innerStyle = document.createElement('style');

				outerStyle.innerHTML = '.' + css + '-outer' + lineHeight;
				innerStyle.innerHTML = '.' + css + '-inner' + lineHeight;

				section.appendChild(outerStyle);
				section.appendChild(innerStyle);
			}
		});
	}

	init() {
		this.flipCover('twiter', {
			url: 'https://google.com',
			text: 'Smart Web Components',
			width: '80px'
		});

		this.flipCover('linkedin', {
			url: 'https://google.com',
			text: 'Smart Web Components',
			width: '80px'
		});

		this.flipCover('email', {
			text: 'Smart Web Components @gmail',
			width: '80px',
			height: '50px'
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="button-demo flipcover-buttons">
					<label>Flip Cover Buttons</label>
					<div className="demo-buttons-group">
						<div className="flip-cover-twiter"></div>
						<br />
						<br />
						<div className="flip-cover-linkedin"></div>
						<br />
						<br />
						<div className="flip-cover-email"></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import Card from 'smart-webcomponents-react/card';

class App extends React.Component {

	init() {
		const album = document.getElementById('album'),
			fragment = document.createDocumentFragment(),
			items = 12;

		for (let i = 0; i < items; i++) {
			ReactDOM.render(<Card>
				<div className="thumb-section">Thumbnail</div>
				<div className="content">
					<h2>Heading</h2>
					<p>This is a media card. You can use this section to describe the content.</p>
				</div>
				<div id="buttonContainer">
					<Button  className="flat primary">VIEW</Button>
					<Button  className="flat primary">EDIT</Button>
				</div>
			</Card>, new DocumentFragment(), function () {
				fragment.appendChild(this.nativeElement);

				if (fragment.children.length === items) {
					album.appendChild(fragment);
				}
			});
		}
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<header>
					<div className="logo"><i className="material-icons">camera_alt</i> Album layout</div>
				</header>
				<section className="user">
					<div className="container">
						<h1 className="headline">Album layout</h1>
						<p className="content">Something short and leading about the collection below—its contents, the
						creator, etc. Make it short and sweet, but not too short so folks don't
			                simply skip over it entirely.</p>
						<div className="buttons">
							<Button className="primary">Main call to action</Button>
							<Button className="outlined primary">Secondary action</Button>
						</div>
					</div>
				</section>
				<section className="articles">
					<div className="container" id="album"></div>
				</section>
				<footer>
					<h4>Footer</h4>
					<p>Something here to give the footer a purpose!</p>
				</footer>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

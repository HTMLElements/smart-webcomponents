import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Window } from 'smart-webcomponents-react/window';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.window = React.createRef();
		this.log = React.createRef();
	}

	handleEvent(event) {
		function getElement(event) {
			const element = document.createElement('div');

			element.textContent = 'Type: ' + event.type;

			if (event.detail.x) {
				element.
				textContent += ', X: ' + event.detail.x + ', Y: ' + event.detail.y;
			}

			return element;
		}

		this.log.current.appendChild(getElement(event));
	}

	handleClick() {
		this.window.current.opened ? this.window.current.close() : this.window.current.open();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Window ref={this.window} opened label="Window 1" resizeMode="both" onCollapse={this.handleEvent.bind(this)}
				onExpand={this.handleEvent.bind(this)} onMaximize={this.handleEvent.bind(this)} onMinimize={this.handleEvent.bind(this)}
				onRestore={this.handleEvent.bind(this)} onOpen={this.handleEvent.bind(this)} onClose={this.handleEvent.bind(this)}
				onOpening={this.handleEvent.bind(this)} onClosing={this.handleEvent.bind(this)} onDragStart={this.handleEvent.bind(this)}
				onDragEnd={this.handleEvent.bind(this)} onResizeStart={this.handleEvent.bind(this)} onResizeEnd={this.handleEvent.bind(this)}>
					<div id="article">
						<section>
							<h3>What is Lorem Ipsum?</h3>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the
							1500s, when an unknown printer took a galley of type and scrambled it to
							make a type specimen book. It has survived not only five centuries, but
							also the leap into electronic typesetting, remaining essentially unchanged.
							It was popularised in the 1960s with the release of Letraset sheets containing
							Lorem Ipsum passages, and more recently with desktop publishing software
			                    like Aldus PageMaker including versions of Lorem Ipsum.</p>
						</section>
						<section>
							<h3>Where does it come from?</h3>
							<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It
							has roots in a piece of classical Latin literature from 45 BC, making it
							over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
							College in Virginia, looked up one of the more obscure Latin words, consectetur,
							from a Lorem Ipsum passage, and going through the cites of the word in
							classical literature, discovered the undoubtable source. Lorem Ipsum comes
							from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
							Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
							treatise on the theory of ethics, very popular during the Renaissance.
							The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
							a line in section 1.10.32. The standard chunk of Lorem Ipsum used since
							the 1500s is reproduced below for those interested. Sections 1.10.32 and
							1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
							in their exact original form, accompanied by English versions from the
			                    1914 translation by H. Rackham.</p>
						</section>
					</div>
				</Window>
				<div className="options">
					<div className="caption">Event Log:</div>
					<div className="option">
						<div ref={this.log} id="log"></div>
					</div>
					<div className="option">
						<Button onClick={this.handleClick.bind(this)} id="openButton">Open/Close</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

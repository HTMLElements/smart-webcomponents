import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Window } from 'smart-webcomponents-react/window';

class App extends React.Component {

	handleClick() {
		const windows = document.querySelectorAll('smart-window');

		for (let i = 0; i < windows.length; i++) {
			windows[i].open();
		}
	}

	handleCreate() {
		const windowCount = document.getElementsByTagName('smart-window').length,
			id = 'Window ' + (windowCount + 1);

		ReactDOM.render(<Window id={id} label={id} opened resizable>
			This is the content of Window {windowCount + 1}</Window>, new DocumentFragment(), function () {
			document.getElementById('windowContainer').appendChild(this.nativeElement);
		});
	}

	componentDidMount() {

	}

	render() {
		return (
			<div id="windowContainer">
				<Window id="window1" opened label="Window 1">
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
				<Window id="window2" opened label="Window 2">
					<div id="article">
						<section>
							<h3>What is Lorem Ipsum?</h3>
							<p>Why do we use it? It is a long established fact that a reader will be
							distracted by the readable content of a page when looking at its layout.
							The point of using Lorem Ipsum is that it has a more-or-less normal distribution
							of letters, as opposed to using 'Content here, content here', making it
							look like readable English. Many desktop publishing packages and web page
							editors now use Lorem Ipsum as their default model text, and a search for
							'lorem ipsum' will uncover many web sites still in their infancy. Various
							versions have evolved over the years, sometimes by accident, sometimes
			                    on purpose (injected humour and the like).</p>
						</section>
						<section>
							<h3>Where does it come from?</h3>
							<p>Where can I get some? There are many variations of passages of Lorem Ipsum
							available, but the majority have suffered alteration in some form, by injected
							humour, or randomised words which don't look even slightly believable.
							If you are going to use a passage of Lorem Ipsum, you need to be sure there
							isn't anything embarrassing hidden in the middle of text. All the Lorem
							Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
							making this the first true generator on the Internet. It uses a dictionary
							of over 200 Latin words, combined with a handful of model sentence structures,
							to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
							is therefore always free from repetition, injected humour, or non-characteristic
			                    words etc.</p>
						</section>
					</div>
				</Window>
				<Window id="window3" opened label="Window 3">
					<div id="article">
						<section>
							<h3>Want more ?</h3>
							<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
							ac turpis egestas. Ut nisi lectus, bibendum eu enim ac, mattis suscipit
							lorem. Aliquam nec dignissim eros. Proin at metus quis lectus eleifend
							placerat. Aliquam risus nisi, dapibus id turpis non, malesuada cursus arcu.
							Ut a neque ipsum. Maecenas dignissim ut lorem in porta. Pellentesque in
							metus eget orci mattis convallis eu ut arcu. Aenean enim augue, egestas
							sed eleifend sit amet, dapibus a nibh. Aliquam erat volutpat. Integer et
							lorem vel mi semper venenatis. Mauris lacinia, lacus eget rhoncus pretium,
							massa ligula maximus eros, eu commodo nunc mauris vitae nibh. Integer eget
							vestibulum ex, ut dictum dui. Curabitur finibus iaculis porta. Nulla id
							nibh est. Cras et enim eu purus vulputate varius quis eget erat. Integer
							in varius justo. Vivamus eleifend, velit ut molestie feugiat, erat nibh
							hendrerit neque, sit amet suscipit elit ipsum vitae risus. Nulla semper
							sapien at lectus elementum ornare. Ut sit amet dolor nunc. Proin id dui
							eget lacus luctus euismod quis sed lectus. Suspendisse eget pharetra nulla.
							Vivamus gravida, libero nec blandit placerat, augue urna dictum mauris,
							et pharetra nisl ex a neque. Donec ante ligula, efficitur quis lorem gravida,
							ornare pellentesque tortor. Cras eget turpis enim. Donec sagittis sapien
			                    orci, vitae viverra enim lobortis ut.</p>
						</section>
						<section>
							<h3>Further more ...</h3>
							<p>Maecenas iaculis luctus vestibulum. Duis at auctor justo. Mauris maximus
							eget ante in fermentum. Phasellus ut leo erat. Praesent id turpis vitae
							augue vestibulum hendrerit at eu urna. Vestibulum ante ipsum primis in
							faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse blandit
							sem vitae sem consequat pellentesque. Fusce et sagittis turpis. Maecenas
							dolor nisi, interdum a justo sed, vehicula pretium mauris. Praesent eget
							dignissim ante. Mauris et ex risus. In varius gravida egestas. Nam convallis,
							lorem at pulvinar malesuada, nisl metus aliquam nisi, eget congue nisi
							enim sed odio. Mauris vitae molestie eros. Vestibulum vel eros ut est fermentum
							egestas. Integer nec ex est. In hac habitasse platea dictumst. Nam elementum
							lorem fringilla elit elementum, ut posuere odio viverra. Praesent efficitur
							nisl tortor, sit amet pretium nunc consequat vel. Phasellus finibus vel
							velit nec placerat. Phasellus vitae urna scelerisque, tincidunt nisi eu,
							consequat orci. Sed id nisl tincidunt, finibus lectus in, eleifend neque.
							Suspendisse lobortis sit amet elit eu porta. Suspendisse ultricies tortor
							sed purus faucibus, ut convallis tortor accumsan. Sed nisl ipsum, consectetur
							non scelerisque nec, fringilla non metus. Suspendisse quis ipsum massa.
							Proin ut nisi lacus. Phasellus ut hendrerit est. Sed consectetur metus
			                    ac erat tincidunt cursus. Ut maximus nibh ultrices lectus condimentum feugiat.</p>
						</section>
					</div>
				</Window>
				<div className="options">
					<div className="option">
						<Button id="openWindows" onClick={this.handleClick.bind(this)}>Open</Button>
					</div>
					<div className="option">
						<Button id="addWindow" onClick={this.handleCreate.bind(this)}>Add New</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

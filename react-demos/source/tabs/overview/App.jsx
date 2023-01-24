import React from "react";
import ReactDOM from "react-dom";
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

class App extends React.Component {

	init() {

		// your code here
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="smart-demo-container">
					<section>
						<h2>Tabs make it easy to explore and switch between different views.</h2>
						<div className="module">
							<p>Tabs enable content organization at a high level, such as switching between
			                    views, data sets, or functional aspects of an app.</p>
							<h3>Types of Tabs Layouts</h3>
							<p>Fixed
			                    <br />Scrollable
			                    <br />Overflow with DropDown
			                    <br />Shrink
			                    <br />Wrap</p>
							<h3>Tab labels</h3>
							<p>Tab labels may include icons and text.</p>
						</div>
					</section>
					<section id="tabs-usage">
						<h2 id="usageHeading">Usage</h2>
						<div>
							<p>A tab provides the affordance for displaying grouped content. A tab label
			                    succinctly describes the tab’s associated grouping of content.</p>
						</div>
					</section>
					<Tabs ref="tabs" id="tabs3" className="animation mobile">
						<TabItem label="Tab One">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the
						1500s, when an unknown printer took a galley of type and scrambled it to
						make a type specimen book. It has survived not only five centuries, but
						also the leap into electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of Letraset sheets containing
						Lorem Ipsum passages, and more recently with desktop publishing software
			                like Aldus PageMaker including versions of Lorem Ipsum</TabItem>
						<TabItem
							label="Tab Two">Contrary to popular belief, Lorem Ipsum is not simply random text. It
							has roots in a piece of classical Latin literature from 45 BC, making it
							over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
							College in Virginia, looked up one of the more obscure Latin words, consectetur,
							from a Lorem Ipsum passage, and going through the cites of the word in
							classical literature, discovered the undoubtable source. Lorem Ipsum comes
							from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
							Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
			                treatise on the theory of ethics.</TabItem>
						<TabItem label="Tab Three">It is a long established fact that a reader will be distracted by the
						readable content of a page when looking at its layout. The point of using
						Lorem Ipsum is that it has a more-or-less normal distribution of letters,
						as opposed to using 'Content here, content here', making it look like readable
						English. Many desktop publishing packages and web page editors now use
						Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
						will uncover many web sites still in their infancy. Various versions have
						evolved over the years, sometimes by accident, sometimes on purpose (injected
			                    humour and the like).</TabItem>
					</Tabs>
					<div>Fixed tab bar pinned to top</div>
					<Tabs ref="tabs2">
						<TabItem label="<i className='material-icons'>phone</i>">Calls</TabItem>
						<TabItem label="<i className='material-icons'>favorite</i>">Favorites</TabItem>
						<TabItem label="<i className='material-icons'>perm_contact_calendar</i>">Contacts</TabItem>
					</Tabs>
					<div>Default app bar and fixed tab bar with icons</div>
					<Tabs ref="tabs3" id="tabs8"
						className="animation desktop padding" tab-layout="dropdown">
						<TabItem label="Web">Web Content</TabItem>
						<TabItem label="Shopping">Shopping Content</TabItem>
						<TabItem label="Videos">Videos Content</TabItem>
						<TabItem label="Images">Images Content</TabItem>
						<TabItem label="News">News Content</TabItem>
						<TabItem label="Maps">Maps Content</TabItem>
						<TabItem label="Books">Books Content</TabItem>
						<TabItem label="Flights">Flights Content</TabItem>
						<TabItem label="Apps">Apps Content</TabItem>
					</Tabs>
					<div>Tabs with a dropdown menu</div>
					<Tabs ref="tabs4" id="tabs9">
						<TabItem label="Item One">Content One</TabItem>
						<TabItem label="Item Two">Content Two</TabItem>
						<TabItem label="Item Three">Content Three</TabItem>
						<TabItem label="Item Four">Content Four</TabItem>
						<TabItem label="Item Five">Content Five</TabItem>
						<TabItem label="Item Six">Content Six</TabItem>
						<TabItem label="Item Seven">Content Seven</TabItem>
						<TabItem label="Item Eight">Content Eight</TabItem>
						<TabItem label="Item Nine">Content Nine</TabItem>
						<TabItem label="Item Ten">Content Ten</TabItem>
						<TabItem label="Item Eleven">Content Eleven</TabItem>
					</Tabs>
					<div>Tabs with overflow pagination</div>
					<Tabs ref="tabs5" id="tabs10" tabPosition="left">
						<TabItem label="Item One">Content One</TabItem>
						<TabItem label="Item Two">Content Two</TabItem>
						<TabItem label="Item Three">Content Three</TabItem>
						<TabItem label="Item Four">Content Four</TabItem>
					</Tabs>
					<div>Tab bar on the left</div>
					<Tabs ref="tabs6" id="tabs11" tabPosition="right">
						<TabItem label="Item One">Content One</TabItem>
						<TabItem label="Item Two">Content Two</TabItem>
						<TabItem label="Item Three">Content Three</TabItem>
						<TabItem label="Item Four">Content Four</TabItem>
					</Tabs>
					<div>Tab bar on the right</div>
					<Tabs ref="tabs7" id="tabs12" tabPosition="bottom">
						<TabItem label="Item One">Content One</TabItem>
						<TabItem label="Item Two">Content Two</TabItem>
						<TabItem label="Item Three">Content Three</TabItem>
						<TabItem label="Item Four">Content Four</TabItem>
					</Tabs>
					<div>Tab bar on the bottom</div>
					<Tabs ref="tabs8" id="tabs13" tabTextOrientation="vertical">
						<TabItem label="One">Content One</TabItem>
						<TabItem label="Two">Content Two</TabItem>
						<TabItem label="Three">Content Three</TabItem>
						<TabItem label="Four">Content Four</TabItem>
					</Tabs>
					<div>Tab labels with vertical text</div>
					<Tabs ref="tabs9" id="tabs14" className="animation desktop"
						tabPosition="left" tabTextOrientation="vertical">
						<TabItem label="Item One">Content One</TabItem>
						<TabItem label="Item Two">Content Two</TabItem>
						<TabItem label="Item Three">Content Three</TabItem>
						<TabItem label="Item Four">Content Four</TabItem>
					</Tabs>
					<div>Tab bar on the left with vertical labels</div>
					<Tabs ref="tabs10" id="tabs15"
						className="animation desktop" tabPosition="right" tabTextOrientation="vertical">
						<TabItem label="Item One">Content One</TabItem>
						<TabItem label="Item Two">Content Two</TabItem>
						<TabItem label="Item Three">Content Three</TabItem>
						<TabItem label="Item Four">Content Four</TabItem>
					</Tabs>
					<div>Tab bar on the right with vertical labels</div>
					<Tabs ref="tabs11" id="tabs16"
						className="animation desktop" tabPosition="bottom" tabTextOrientation="vertical">
						<TabItem label="Item One">Content One</TabItem>
						<TabItem label="Item Two">Content Two</TabItem>
						<TabItem label="Item Three">Content Three</TabItem>
						<TabItem label="Item Four">Content Four</TabItem>
					</Tabs>
					<div>Tab bar on the bottom with vertical labels</div>
					<Tabs ref="tabs12" id="tabs17"
						className="animation desktop">
						<TabItems-group label="Fruits">
							<TabItem label="Apple">Apple information</TabItem>
							<TabItem label="Lime">Lime information</TabItem>
							<TabItem label="Orange">Orange information</TabItem>
						</TabItems-group>
						<TabItems-group label="Vegetables">
							<TabItem label="Carrot">Carrot information</TabItem>
							<TabItem label="Raddish">Raddish information</TabItem>
						</TabItems-group>
						<TabItem label="Meat">Meat information</TabItem>
						<TabItem label="Fish">Fish information</TabItem>
					</Tabs>
					<div>Tabs with grouping</div>
					<Tabs ref="tabs13" className="albums">
						<TabItem label="Pop">
							<img src="https://htmlelements.com/demos/images/albums_pop.png" />
						</TabItem>
						<TabItem label="Alternative">
							<img src="https://htmlelements.com/demos/images/albums_alternative.png"
							/>
						</TabItem>
						<TabItem label="Rock">
							<img src="https://htmlelements.com/demos/images/albums_rock.png" />
						</TabItem>
						<TabItem label="R & B">
							<img src="https://htmlelements.com/demos/images/albums_rnb.png" />
						</TabItem>
					</Tabs>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

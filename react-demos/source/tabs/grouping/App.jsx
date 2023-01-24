import React from "react";
import ReactDOM from "react-dom";
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tabs className="demoTabs" tabPosition="top">
					<TabItemsGroup label="Tiger">
						<TabItem label="Bengal tiger">
							<div className="demoContainer tabsContent">The Bengal tiger (<em>Panthera tigris tigris</em>) is the most numerous
			                    tiger. By 2011, the total population was estimated at fewer than 2,500
			                    individuals with a decreasing trend.</div>
							<div className="demoContainer tabsContent">
								<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/220px-Tiger_in_Ranthambhore.jpg"
								/>
							</div>
						</TabItem>
						<TabItem label="Indochinese tiger">
							<div className="demoContainer tabsContent">The Indochinese tiger (<em>Panthera tigris corbetti</em>) is a tiger subspecies
			                    occurring in Myanmar, Thailand, Lao PDR, Viet Nam, Cambodia and southwestern
			                    China.</div>
							<div className="demoContainer tabsContent">
								<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg/220px-Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg"
								/>
							</div>
						</TabItem>
					</TabItemsGroup>
					<TabItem label="Snow leopard">
						<div className="demoContainer tabsContent">The snow leopard or ounce (<em>Panthera uncia</em> syn. <em>Uncia uncia</em>)
			                is a large cat native to the mountain ranges of Central and South Asia.</div>
						<div
							className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Lightmatter_snowleopard.jpg/220px-Lightmatter_snowleopard.jpg"
							/>
						</div>
					</TabItem>
					<TabItemsGroup label="Lion">
						<TabItem label="Asiatic lion">
							<div className="demoContainer tabsContent">The Asiatic lion (<em>Panthera leo persica</em>), also known as the Indian
			            lion and Persian lion, is a lion subspecies that lives as a single population
			            in Gujarat, India. It is listed as Endangered on the IUCN Red List because
			            of its small population size.</div>
							<div className="demoContainer tabsContent">
								<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Adult_Asiatic_Lion.jpg/220px-Adult_Asiatic_Lion.jpg"
								/>
							</div>
						</TabItem>
						<TabItem label="West African lion" selected>
							<div className="demoContainer tabsContent">The West African lion (<em>Panthera leo senegalensis</em>), also called
			            Senegal lion, was considered a lion subspecies native to Central and Western
			            Africa.</div>
							<div className="demoContainer tabsContent">
								<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Lionne_du_Cameroun.JPG/220px-Lionne_du_Cameroun.JPG"
								/>
							</div>
						</TabItem>
					</TabItemsGroup>
					<TabItem label="Cheetah">
						<div className="demoContainer tabsContent">The cheetah (<em>Acinonyx jubatus</em>) is a large felid of the subfamily
			        Felinae. Cheetahs are active mainly during the day, with hunting their
			        major activity.</div>
						<div className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cheetah_%28Acinonyx_jubatus%29_female_2.jpg/220px-Cheetah_%28Acinonyx_jubatus%29_female_2.jpg"
							/>
						</div>
					</TabItem>
				</Tabs>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

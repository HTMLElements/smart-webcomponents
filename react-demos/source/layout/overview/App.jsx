import React from "react";
import ReactDOM from "react-dom";
import { Layout, TabLayoutItem, TabLayoutGroup } from 'smart-webcomponents-react/layout';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';
import { GoogleMap, LoadScript } from '@react-google-maps/api'

class App extends React.Component {
	constructor(props) {
		super(props);

		this.map = React.createRef();
	}

	handleMapLoad() {
		if (this.map.current.mapRef.previousElementSibling) {
			this.map.current.mapRef.previousElementSibling.remove();
		}
	}

	init() {
		new window.google.maps.Map(this.map.current.mapRef, {
			center: new window.google.maps.LatLng(45.4642, 9.1900),
			zoom: 8,
			mapTypeId: window.google.maps.MapTypeId.ROADMAP
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Layout>
					<TabLayoutGroup size="80%">
						<TabLayoutItem label="My Milan Notes">
							<textarea className="input">The massive Cathedral of Santa Maria Nascente, which the Milanese call
							just "Il Duomo" is among the world's largest (it holds up to 40,000 people)
							and most magnificent churches, the ultimate example of the Flamboyant Gothic
							style. It was begun in the 14th century, but its façade was not completed
							until the early 1800s, under Napoleon. The roof is topped by 135 delicately
							carved stone pinnacles and the exterior is decorated with 2,245 marble
							statues. The dim interior, in striking contrast to the brilliant and richly
							patterned exterior, makes a powerful impression with its 52 gigantic pillars.
							The stained-glass windows in the nave (mostly 15th-16th centuries) are
							the largest in the world; the earliest of them are in the south aisle.
							Highlights include the seven-branched bronze candelabrum by Nicholas of
							Verdun (c. 1200) in the north transept, the 16th-century tomb of Gian Giacomo
							Medici, and the jeweled gold reliquary of San Carlo Borromeo in the octagonal
							Borromeo Chapel leading off the crypt. Behind the high altar, the choir
							has deeply carved panels, and misericords under the seats. In the south
							sacristy is the treasury with gold and silver work dating from the fourth
							to the 17th century. A walk on the roof of the cathedral is an impressive
							experience, offering views across the city and extending on clear days
							to the snow-covered Alps. (An elevator ascends all but the last 73 steps
							to the platform of the dome). At the front of the Duomo, near the central
							doorway, you can descend under Piazza del Duomo into the foundations of
							the Basilica di Santa Tecla (fourth-fifth and seventh century) and the
							fourth-century baptistery, Battistero di San Giovanni alle Fonti, which
			                    were discovered during the construction of the Milan Metro system.</textarea>
						</TabLayoutItem>
						<TabLayoutItem label="Milan City Map">
							<LoadScript
								id="script-loader"
								googleMapsApiKey="AIzaSyDLNo8WFhrz_4zuLdl423WX9h5Kh0SedHQ">
								<GoogleMap ref={this.map} id='map'
									mapContainerStyle={{
										height: "100%",
										width: "100%"
									}}
									onLoad={this.handleMapLoad.bind(this)}
								></GoogleMap>
							</LoadScript>
						</TabLayoutItem>
					</TabLayoutGroup>
					<TabLayoutGroup position="right">
						<TabLayoutItem label="Explorer">
							<Tree id="tree" filterable>
								<TreeItems-group>	<i className="material-icons">folder</i> Attractions
			                        <TreeItem>Movies</TreeItem>
									<TreeItem>Circus</TreeItem>
									<TreeItem>Concerts</TreeItem>
									<TreeItem>Monuments</TreeItem>
								</TreeItems-group>
								<TreeItems-group>	<i className="material-icons">folder</i> Dining
			                        <TreeItem>Restaurants</TreeItem>
									<TreeItem>Cafés</TreeItem>
									<TreeItem>Bars</TreeItem>
								</TreeItems-group>
								<TreeItems-group>	<i className="material-icons">folder</i> Education
			                        <TreeItem>Schools</TreeItem>
									<TreeItem>Colleges</TreeItem>
									<TreeItem>Universities</TreeItem>
									<TreeItem>Educational courses</TreeItem>
								</TreeItems-group>
								<TreeItems-group>	<i className="material-icons">folder</i> Family
			                        <TreeItem>Babysitting</TreeItem>
									<TreeItem>Family trips</TreeItem>
									<TreeItem>Theme parks</TreeItem>
								</TreeItems-group>
								<TreeItems-group>	<i className="material-icons">folder</i> Health
			                        <TreeItem>Hospitals</TreeItem>
									<TreeItem>Family physicians</TreeItem>
									<TreeItem>Optics</TreeItem>
								</TreeItems-group>
							</Tree>
						</TabLayoutItem>
						<TabLayoutItem label="About Milan">
							<p>Milan, a metropolis in Italy's northern Lombardy region, is a global capital
							of fashion and design. Home to the national stock exchange, it’s a financial
							hub also known for its high-end restaurants and shops. The Gothic Duomo
							di Milano cathedral and the Santa Maria delle Grazie convent, housing Leonardo
			                    da Vinci’s mural “The Last Supper,” testify to centuries of art and culture.</p>
						</TabLayoutItem>
					</TabLayoutGroup>
				</Layout>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

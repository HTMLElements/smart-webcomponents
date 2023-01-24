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
				<Tabs className="scroll" selectedIndex={0} tabLayout="scroll">
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
					<TabItem label="Malayan tiger">
						<div className="demoContainer tabsContent">The Malayan tiger (<em>Panthera tigris jacksoni</em>) is a tiger subspecies
			                that inhabits the southern and central parts of the Malay Peninsula and
			                has been classified as Critically Endangered by IUCN in 2015 as the population
			                was roughly estimated at 250 to 340 adult individuals in 2013; this population
			                likely comprises less than 250 mature breeding individuals, with a declining
			                trend.</div>
						<div className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/MalayanTiger01.jpg/220px-MalayanTiger01.jpg"
							/>
						</div>
					</TabItem>
					<TabItem label="Siberian tiger">
						<div className="demoContainer tabsContent">The Siberian tiger (<em>Panthera tigris altaica</em>), also called Amur
			                tiger, is a tiger subspecies inhabiting mainly the Sikhote Alin mountain
			                region with a small population in southwest Primorye Province in the Russian
			                Far East. The Siberian tiger once ranged throughout all of Korea, north-eastern
			                China, Russian Far East, and eastern Mongolia.</div>
						<div className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/220px-P.t.altaica_Tomak_Male.jpg"
							/>
						</div>
					</TabItem>
				</Tabs>
				<p>Scroll Tabs Layout Mode</p>
				<br />
				<br />
				<br />
				<Tabs className="dropdown" selectedIndex={1} tabLayout="dropDown">
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
					<TabItem label="West African lion">
						<div className="demoContainer tabsContent">The West African lion (<em>Panthera leo senegalensis</em>), also called
			                Senegal lion, was considered a lion subspecies native to Central and Western
			                Africa.</div>
						<div className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Lionne_du_Cameroun.JPG/220px-Lionne_du_Cameroun.JPG"
							/>
						</div>
					</TabItem>
					<TabItem label="Ethiopian lion">
						<div className="demoContainer tabsContent">The Ethiopian lion (<em>Panthera leo roosevelti</em> syn. <em>Panthera leo abyssinica</em>),
			                also called "Addis Ababa lion" or "Abyssinian lion," is considered a possible
			                lion subspecies native to Ethiopia, following a genetic and phenotypic
			                analysis on lions in Addis Abeba's zoo. Previously, researchers thought
			                that the East African lion inhabited Ethiopia.</div>
						<div className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Lion_zoo_Addis_Ababa.jpg/220px-Lion_zoo_Addis_Ababa.jpg"
							/>
						</div>
					</TabItem>
					<TabItem label="Masai lion">
						<div className="demoContainer tabsContent">The Masai lion or East African lion (<em>Panthera leo nubica</em> syn. <em>Panthera leo massaica</em>)
			                is a lion subspecies in eastern Africa. The type specimen is described
			                as being from "Nubia".</div>
						<div className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Ngorongoro_Crater%2C_Tanzania_%282288742082%29.jpg/220px-Ngorongoro_Crater%2C_Tanzania_%282288742082%29.jpg"
							/>
						</div>
					</TabItem>
				</Tabs>
				<p>DropDown Tabs Layout Mode</p>
				<br />
				<br />
				<br />
				<Tabs className="wrap" selectedIndex={2} tabLayout="wrap">
					<TabItem label="African leopard">
						<div className="demoContainer tabsContent">The African leopard (<em>Panthera pardus pardus</em>) is the leopard nominate
			                subspecies native to many countries in Africa. It is widely distributed
			                in most of sub-Saharan Africa, but the historical range has been fragmented
			                in the course of habitat conversion.</div>
						<div className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Leopard_africa.jpg/220px-Leopard_africa.jpg"
							/>
						</div>
					</TabItem>
					<TabItem label="Indian leopard">
						<div className="demoContainer tabsContent">The Indian leopard (<em>Panthera pardus fusca</em>) is a leopard subspecies
			                widely distributed on the Indian subcontinent.</div>
						<div className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Leopard_Male_Nagarhole.jpg/220px-Leopard_Male_Nagarhole.jpg"
							/>
						</div>
					</TabItem>
					<TabItem label="Arabian leopard">
						<div className="demoContainer tabsContent">The Arabian leopard (<em>Panthera pardus nimr</em>) is a leopard subspecies
			                native to the Arabian Peninsula.</div>
						<div className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%D7%A0%D7%9E%D7%A8.JPG/220px-%D7%A0%D7%9E%D7%A8.JPG"
							/>
						</div>
					</TabItem>
					<TabItem label="Persian leopard">
						<div className="demoContainer tabsContent">The Persian leopard (<em>Panthera pardus ciscaucasica</em> syn. <em>Panthera pardus saxicolor</em>),
			                also called the Caucasian leopard or Central Asian leopard, is the largest
			                leopard subspecies native to the Caucasus region.</div>
						<div className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Persian_Leopard_sitting.jpg/220px-Persian_Leopard_sitting.jpg"
							/>
						</div>
					</TabItem>
				</Tabs>
				<p>Wrap Tabs Layout Mode</p>
				<br />
				<br />
				<br />
				<Tabs className="shrink" selectedIndex={3} tabLayout="shrink">
					<TabItem label="Eurasian lynx">
						<div className="demoContainer tabsContent">The Eurasian lynx (<em>Lynx lynx</em>) is a medium-sized cat native to
			                Siberia, Central, East, and Southern Asia, North, Central and Eastern Europe.</div>
						<div
							className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lynx_lynx2.jpg/220px-Lynx_lynx2.jpg"
							/>
						</div>
					</TabItem>
					<TabItem label="Canada lynx">
						<div className="demoContainer tabsContent">The Canada lynx (<em>Lynx canadensis</em>) or Canadian lynx is a North
			        American mammal of the cat family, Felidae. With the recognised subspecies,
			        it ranges across Canada and into Alaska as well as some parts of the northern
			        United States and extending down the Rocky Mountains to Colorado, where
			        they were reintroduced in the 1990s.</div>
						<div className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Canada_lynx_by_Michael_Zahra.jpg/220px-Canada_lynx_by_Michael_Zahra.jpg"
							/>
						</div>
					</TabItem>
					<TabItem label="Iberian lynx">
						<div className="demoContainer tabsContent">The Iberian lynx (<em>Lynx pardinus</em>) is a wild cat species native
			        to the Iberian Peninsula in southwestern Europe that is listed as Endangered
			        on the IUCN Red List. It preys almost exclusively on the European rabbit.</div>
						<div
							className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Linces19.jpg/220px-Linces19.jpg"
							/>
						</div>
					</TabItem>
					<TabItem label="Bobcat">
						<div className="demoContainer tabsContent">The bobcat (<em>Lynx rufus</em>) is a North American cat that appeared
			        during the Irvingtonian stage of around 1.8 million years ago (AEO).</div>
						<div
							className="demoContainer tabsContent">
							<img className="tabsDemoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Bobcat2.jpg/220px-Bobcat2.jpg"
							/>
						</div>
					</TabItem>
				</Tabs>
				<p>Shrink Tabs Layout Mode</p>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

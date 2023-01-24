import React from "react";
import ReactDOM from "react-dom";
import { Button} from 'smart-webcomponents-react/button';
import { Window } from 'smart-webcomponents-react/window';
import { Map } from 'smart-webcomponents-react/map';

class App extends React.Component {
	
	apiKey = "";
	mapType1 = "roadmap";
	query1 = "boston";
	mapType2 = "satellite";
	query2 = "mit";
	mapType3 = "roadmap";
	query3 = "Sofia,Bulagaria,NDK";

	constructor(props){
		super(props);
		this.openRegularMapBtn = React.createRef();
		this.openSatelliteMapBtn = React.createRef();
		this.openCustomMapBtn = React.createRef();
		this.regularMapWindow = React.createRef();
		this.satelliteMapWindow = React.createRef();
		this.customMapWindow = React.createRef();
	}
	
	handleReady(type) {
		ReactDOM.render(<section>
			 <Button className="primary medium raised" id="saveLocationRegularMap"> <span className="primary">
			Save Location <i className="material-icons">location_on</i>
				</span>
			</Button>
			<Button onClick={this.handleClick.bind(this)} 
				className="primary outlined medium raised" id="closeRegularMap"> <span className="primary">
				Close <i className="material-icons">close</i>
				</span>
			</Button>
			</section>
			, document.querySelector("#buttonContainer"));
	}

	handleReadySatellite(type) {
		ReactDOM.render(<section>
			<Button className="success medium raised" id="saveLocationSatelliteMap"> <span className="primary">
					Save Location <i className="material-icons">location_on</i>
		 			</span>
	 		</Button>
			 <Button onClick={this.handleClickSatellite.bind(this)} 
			 		className="success outlined medium raised" id="closeSatelliteMap"> <span className="primary">
			 		Close <i className="material-icons">close</i>
					</span>
	 		</Button>
	   		</section>
	   			, document.querySelector("#buttonContainer2"));
	}
	handleReadyCustom(type) {
		ReactDOM.render(<section>
			<Button className="raised" id="saveLocationCustomMap"> <span className="primary">
					Save Location <i className="material-icons">location_on</i>
				</span>
	 		</Button>
			 <Button  onClick={this.handleClickCustom.bind(this)} 
			 	className="raised" id="closeCustomMap"> <span className="primary">
					Close <i className="material-icons">close</i>
				</span>
	 		</Button>
  		 	</section>
   			, document.querySelector("#buttonContainer3"));
	}
	init(){
		const window1 =  this.regularMapWindow.current;
		const window2 =  this.satelliteMapWindow.current;
		const window3 =  this.customMapWindow.current;
		const template = document.createElement('template');
		const template2 = document.createElement('template');
		const template3 = document.createElement('template');

		template.id = 'footerTemplate';
		template2.id = 'footerTemplate2';
		template3.id = 'footerTemplate3';

		template.innerHTML = '<div id="buttonContainer"></div>';
		template2.innerHTML = '<div id="buttonContainer2"></div>';
		template3.innerHTML = '<div id="buttonContainer3"></div>';

		document.body.appendChild(template);
		document.body.appendChild(template2);
		document.body.appendChild(template3);

		window1.footerTemplate = template.id;
		window2.footerTemplate = template2.id;
		window3.footerTemplate = template3.id;		
		
	}
	handleClick() {
		this.regularMapWindow.current.opened ? this.regularMapWindow.current.close() : this.regularMapWindow.current.open();
	}
	handleClickSatellite() {
		this.satelliteMapWindow.current.opened ? this.satelliteMapWindow.current.close() : this.satelliteMapWindow.current.open();
	}
	handleClickCustom() {
		this.customMapWindow.current.opened ? this.customMapWindow.current.close() : this.customMapWindow.current.open();
	}
	
	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				
			   
			    <div className="demo-description">
			         <h1>Map In Modal Window Overview Demo</h1>
			        <div>For this demo we used our "Map","Button" and "Window" components. The
			            purpose of this demo is to demonstrate our "Map" component in a modal window
			            when opened by clicking it representitive button.</div>
			    </div>
			    <div className="modal-buttons">
			        <div className="open-modal-buttons">
						<Button ref={this.openRegularMapBtn} id="regular-map-button" 
							onClick={this.handleClick.bind(this)}
							className="raised primary">Regular Map Modal
						</Button>
			            <Button ref={this.openSatelliteMapBtn} id="satellite-map-button"
			            	className="raised success"
							onClick={this.handleClickSatellite.bind(this)}
							>Satellite Map Modal
						</Button>
						<Button ref={this.openCustomMapBtn} id="custom-map-button"
							onClick={this.handleClickCustom.bind(this)}
			            	lass="raised">Custom Map Modal
						</Button>
			        </div>
			    </div>
				<Window ref={this.regularMapWindow} pinned modal
						windowParent="body"  
						headerButtons={["close", "maximize"]}
						label="Regular map" id="windowRegularMap" className="mapWindow" 
						onReady={this.handleReady.bind(this)} >
			        <section>
			            <Map ref="map" query={this.query1} apiKey={this.apiKey} mapType={this.mapType1}></Map>
			        </section>
			    </Window>
				<Window ref={this.satelliteMapWindow} pinned modal 
						windowParent="body"
						headerButtons={["close", "maximize"]}
						label="Satellite map" id="windowSatelliteMap" className="mapWindow" 
						onReady={this.handleReadySatellite.bind(this)}>
			        <section>
			            <Map ref="map2" query={this.query2} apiKey={this.apiKey} mapType={this.mapType2}></Map>
			        </section>
			    </Window>
				<Window ref={this.customMapWindow} pinned modal 
						windowParent="body"
						headerButtons={["close", "maximize"]}
						label="Custom map" id="windowCustomMap" className="mapWindow" 
						onReady={this.handleReadyCustom.bind(this)}>
			        <section>
			            <Map ref="map3" query={this.query3} apiKey={this.apiKey} mapType={this.mapType3}></Map>
			        </section>
			    </Window>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
/*
	init() {
	        window.onload = function() {
	            var regularMapButton = document.getElementById("regular-map-button");
	            var satelliteMapButton = document.getElementById("satellite-map-button");
	            var customMapButton = document.getElementById("custom-map-button");
	
	
	            var customWindowMap = document.getElementById("windowCustomMap");
	            var windowMap = document.getElementById("windowRegularMap")
	            var satelliteWindowMap = document.getElementById("windowSatelliteMap")
	
	            var modalButtonRegularMap = document.getElementById("closeRegularMap");
	            var modalButtonSatelliteMap = document.getElementById("closeSatelliteMap");
	            var modalButtonCustomMap = document.getElementById("closeCustomMap");
	
	            regularMapButton.onclick = function() {
	                windowMap.open();
	            };
	            satelliteMapButton.onclick = function() {
	                satelliteWindowMap.open();
	            };
	            customMapButton.onclick = function() {
	                customWindowMap.open()
	            };
	
	
	            modalButtonRegularMap.onclick = function() {
	                if (windowMap.opened) {
	                    windowMap.close();
	                }
	            };
	            modalButtonSatelliteMap.onclick = function() {
	                if (satelliteWindowMap.opened) {
	                    satelliteWindowMap.close();
	                }
	            };
	            modalButtonCustomMap.onclick = function() {
	                if (customWindowMap.opened) {
	                    customWindowMap.close();
	                }
	            };
	
	
				 <template id="footerTemplate">
			        <div>
			            <Button ref={this.openRegularMapBtn1} className="primary medium raised" id="saveLocationRegularMap"> <span className="primary">
			
			                   Save Location <i className="material-icons">location_on</i>
			
			                </span>
			            </Button>
			            <Button ref={this.openRegularMapBtn2} className="primary outlined medium raised" id="closeRegularMap"> <span className="primary">
			
			                  Close <i className="material-icons">close</i>
			
			                </span>
			            </Button>
			        </div>
			    </template>
			    <template id="footerTemplateSatellite">
			        <div>
			            <Button ref="button3" className="success medium raised" id="saveLocationSatelliteMap"> <span className="primary">
			
			                   Save Location <i className="material-icons">location_on</i>
			
			                </span>
			            </Button>
			            <Button ref="button4" className="success outlined medium raised" id="closeSatelliteMap"> <span className="primary">
			
			                  Close <i className="material-icons">close</i>
			
			                </span>
			            </Button>
			        </div>
			    </template>
			    <template id="footerTemplateCustom">
			        <div>
			            <Button ref="button5" className="raised" id="saveLocationCustomMap"> <span className="primary">
			
			                   Save Location <i className="material-icons">location_on</i>
			
			                </span>
			            </Button>
			            <Button ref="button6" className="raised" id="closeCustomMap"> <span className="primary">
			
			                  Close <i className="material-icons">close</i>
			
			                </span>
			            </Button>
			        </div>
			    </template>
	
	        }

*/
	/*
		const template = document.createElement('template'), template2 = document.createElement('template'),template3 = document.createElement('template');
		template.innerHTML = ' <div><Button ref={this.openRegularMapBtn1} className="primary medium raised" id="saveLocationRegularMap"> <span className="primary"> Save Location <i className="material-icons">location_on</i></span></Button><Button ref={this.openRegularMapBtn2} className="primary outlined medium raised" id="closeRegularMap"> <span className="primary"> Close <i className="material-icons">close</i></span></Button>';
		template2.innerHTML= ' <div><Button ref="button3" className="success medium raised" id="saveLocationSatelliteMap"> <span className="primary">Save Location <i className="material-icons">location_on</i></span></Button><Button ref="button4" className="success outlined medium raised" id="closeSatelliteMap"> <span className="primary">  Close <i className="material-icons">close</i></span></Button></div>';
		template3.innerHTML = ' <div><Button ref="button5" className="raised" id="saveLocationCustomMap"> <span className="primary">Save Location <i className="material-icons">location_on</i></span></Button><Button ref="button6" className="raised" id="closeCustomMap"> <span className="primary">Close <i className="material-icons">close</i></span></Button></div>'
		
		template.id = 'footerTemplate';
		template2.id = 'footerTemplateSatellite';
		template3.id = 'footerTemplateCustom';

		document.body.appendChild(template, template2, template3)
		this.regularMapWindow.current.footerTemplate = template.id
		this.satelliteMapWindow.current.footerTemplate = template2.id
		this.customMapWindow.current.footerTemplate = template3.id
		*/
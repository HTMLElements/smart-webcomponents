import React from "react";
import ReactDOM from "react-dom";
import { Card } from 'smart-webcomponents-react/card';
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';
import { Rating } from 'smart-webcomponents-react/rating';
import { Grid, Smart } from 'smart-webcomponents-react/grid';
import { GoogleMap, LoadScript } from '@react-google-maps/api'

class App extends React.Component {
	constructor(p) {
		super(p);

		this.card = React.createRef();
		this.card2 = React.createRef();
		this.card3 = React.createRef();
		this.card4 = React.createRef();
		this.card5 = React.createRef();
		this.card6 = React.createRef();
		this.card7 = React.createRef();
		this.map = React.createRef();

		this.options = {
			zoom: 4,
			center: {
				lat: -31.024,
				lng: 145.887
			},
			styles: [{
				'elementType': 'geometry',
				'stylers': [{
					'color': '#f5f5f5'
				}]
			},
			{
				'elementType': 'labels.icon',
				'stylers': [{
					'visibility': 'off'
				}]
			},
			{
				'elementType': 'labels.text.fill',
				'stylers': [{
					'color': '#616161'
				}]
			},
			{
				'elementType': 'labels.text.stroke',
				'stylers': [{
					'color': '#f5f5f5'
				}]
			},
			{
				'featureType': 'administrative.land_parcel',
				'elementType': 'labels.text.fill',
				'stylers': [{
					'color': '#bdbdbd'
				}]
			},
			{
				'featureType': 'poi',
				'elementType': 'geometry',
				'stylers': [{
					'color': '#eeeeee'
				}]
			},
			{
				'featureType': 'poi',
				'elementType': 'labels.text.fill',
				'stylers': [{
					'color': '#757575'
				}]
			},
			{
				'featureType': 'poi.park',
				'elementType': 'geometry',
				'stylers': [{
					'color': '#e5e5e5'
				}]
			},
			{
				'featureType': 'poi.park',
				'elementType': 'labels.text.fill',
				'stylers': [{
					'color': '#9e9e9e'
				}]
			},
			{
				'featureType': 'road',
				'elementType': 'geometry',
				'stylers': [{
					'color': '#ffffff'
				}]
			},
			{
				'featureType': 'road.arterial',
				'elementType': 'labels.text.fill',
				'stylers': [{
					'color': '#757575'
				}]
			},
			{
				'featureType': 'road.highway',
				'elementType': 'geometry',
				'stylers': [{
					'color': '#dadada'
				}]
			},
			{
				'featureType': 'road.highway',
				'elementType': 'labels.text.fill',
				'stylers': [{
					'color': '#616161'
				}]
			},
			{
				'featureType': 'road.local',
				'elementType': 'labels.text.fill',
				'stylers': [{
					'color': '#9e9e9e'
				}]
			},
			{
				'featureType': 'transit.line',
				'elementType': 'geometry',
				'stylers': [{
					'color': '#e5e5e5'
				}]
			},
			{
				'featureType': 'transit.station',
				'elementType': 'geometry',
				'stylers': [{
					'color': '#eeeeee'
				}]
			},
			{
				'featureType': 'water',
				'elementType': 'geometry',
				'stylers': [{
					'color': '#c9c9c9'
				}]
			},
			{
				'featureType': 'water',
				'elementType': 'labels.text.fill',
				'stylers': [{
					'color': '#9e9e9e'
				}]
			}
			]
		};
	}

	handleClick(e) {
		let qaCards = [this.card.current.nativeElement, this.card2.current.nativeElement, this.card3.current.nativeElement,
		this.card4.current.nativeElement, this.card5.current.nativeElement, this.card6.current.nativeElement,
		this.card7.current.nativeElement];

		for (let i = 0; i < qaCards.length; i++) {
			if (qaCards[i].classList.contains('active')) {
				qaCards[i].classList.remove('active');
			}
		}

		e.target.closest('smart-card').classList.add('active');
	}

	gridProps = {
		sorting: {
			enabled: true
		},
		layout: {
			rowHeight: 95
		},
		dataSource: new Smart.DataAdapter({
			dataSource: [{
				date: '9:44 AM',
				bug: 'Can each series in a line chart have its own dataCollection?',
				status: 'Complete',
			},
			{
				date: '11:52 AM',
				bug: 'Datatable editing within multiview',
				status: 'Pending',
			},
			{
				date: '12:37 AM',
				bug: 'Error: [DOM] Found 7 elements with non-unique id',
				status: 'Open',
			},
			{
				date: '1:18 PM',
				bug: 'Prevent clearing CSS added to node after filterByAll() in datatable filter',
				status: 'Open',
			},
			{
				date: '3:44 PM',
				bug: 'How to apply fewer options of drop down menu for specific rows of datatable?',
				status: 'Open',
			},
			{
				date: '8:20 PM',
				bug: 'Links in the upper right menu',
				status: 'Pending',
			},
			{
				date: '11:49 PM',
				bug: 'Document export is empty',
				status: 'Open',
			},
			],
			dataFields: [
				'date: string',
				'bug: string',
				'status: string',
			]
		}),
		columns: [{
			label: 'Date',
			dataField: 'date',
			cellsAlign: 'center',
			align: 'center',
			width: '20%'
		},
		{
			label: 'Bug',
			dataField: 'bug',
			width: '60%'
		},
		{
			label: 'Status',
			dataField: 'status',
			width: '20%',
			formatFunction(settings) {
				settings.template = '<span className="status-' + settings.row.data.status.toLowerCase() + '">' + settings.row.data.status + '</span>';
			}
		},
		]
	}

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<header>
					<div className="header-container">
						<h1>QA Dashboard</h1>
						<Menu id="menu" minimizeWidth={500} dropDownPosition="bottom-left">
							<MenuItem shortcut="Shopping Cart"> <i className="material-icons">shopping_cart</i>
							</MenuItem>
							<MenuItem shortcut="Notifications"> <i className="material-icons">notifications</i>
							</MenuItem>
							<MenuItem shortcut="Search"> <i className="material-icons">search</i>
							</MenuItem>
						</Menu>
					</div>
				</header>
				<section className="page-container">
					<div className="smart-grid-layout centered">
						<div className="row">
							<div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 col-12">
								<div id="top-qa-container" className="top-qa-container">
									<Card ref={this.card} onClick={this.handleClick.bind(this)} className="recent-tickets-card">
										<div className="title">Top QA</div>
										<Card ref={this.card2} className="top-qa-card">
											<div className="image">
												<img src="./../../../src/images/girl-2771001_960_720.jpg" />
											</div>
											<div className="rating">
												<Rating></Rating>
											</div>
											<div className="title">Daisy Fitzroy</div>
											<div className="description">Automation</div>
											<div className="points">135</div>
										</Card>
										<Card ref={this.card3} className="top-qa-card">
											<div className="image">
												<img src="./../../../src/images/woman-3096664_960_720.jpg" />
											</div>
											<div className="rating">
												<Rating ></Rating>
											</div>
											<div className="title">Elizabeth DeWitt</div>
											<div className="description">Automation</div>
											<div className="points">336</div>
										</Card>
										<Card ref={this.card4} className="top-qa-card">
											<div className="image">
												<img src="./../../../src/images/man-4252192_960_720.jpg" />
											</div>
											<div className="rating">
												<Rating ></Rating>
											</div>
											<div className="title">Elizabeth DeWitt</div>
											<div className="description">Automation</div>
											<div className="points">228</div>
										</Card>
										<Card ref={this.card5} className="top-qa-card">
											<div className="image">
												<img src="./../../../src/images/girl-2366438_960_720.jpg" />
											</div>
											<div className="rating">
												<Rating ></Rating>
											</div>
											<div className="title">Elizabeth DeWitt</div>
											<div className="description">Automation</div>
											<div className="points">216</div>
										</Card>
										<Card ref={this.card6} className="top-qa-card">
											<div className="image">
												<img src="./../../../src/images/entrepreneur-593358_960_720.jpg" />
											</div>
											<div className="rating">
												<Rating ></Rating>
											</div>
											<div className="title">Elizabeth DeWitt</div>
											<div className="description">Automation</div>
											<div className="points">426</div>
										</Card>
										<Card ref={this.card7} className="top-qa-card">
											<div className="image">
												<img src="./../../../src/images/woman-2003647_960_720.jpg" />
											</div>
											<div className="rating">
												<Rating ></Rating>
											</div>
											<div className="title">Elizabeth DeWitt</div>
											<div className="description">Automation</div>
											<div className="points">435</div>
										</Card>
									</Card>
								</div>
								<div className="user-activity-container">
									<Card className="maps-card">
										<div className="title">User activity</div>
										<LoadScript
											id="script-loader"
											googleMapsApiKey="AIzaSyDLNo8WFhrz_4zuLdl423WX9h5Kh0SedHQ">
											<GoogleMap ref={this.map} id='example-map'
												zoom={this.options.zoom}
												center={this.options.center}
												styles={this.options.styles}
											></GoogleMap>
										</LoadScript>
									</Card>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
								<div className="recent-tickets-container">
									<Card className="recent-tickets-card">
										<div className="title">Recent tickets</div>
										<Grid {...this.gridProps} id="recentTickets"></Grid>
									</Card>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div >
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

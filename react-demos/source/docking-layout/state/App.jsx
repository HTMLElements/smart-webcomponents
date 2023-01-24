import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { ProgressBar } from 'smart-webcomponents-react/progressbar';
import { Gauge } from 'smart-webcomponents-react/gauge';
import { Tank } from 'smart-webcomponents-react/tank';
import { Carousel } from 'smart-webcomponents-react/carousel';
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dockinglayout = React.createRef();
		this.state = React.createRef();

		this.currentState = null;
	}

	loadData() {
		if (this.dockinglayout.current.items.length > 0) {
			let progressBar1, progressBar2;

			ReactDOM.render(<ProgressBar />, document.createDocumentFragment(), function () {
				progressBar1 = this;
				progressBar1.showProgressValue = true;

				document.getElementById('tabItem10').appendChild(progressBar1.nativeElement);
			});

			ReactDOM.render(<ProgressBar />, document.createDocumentFragment(), function () {
				progressBar2 = this;
				progressBar2.showProgressValue = true;

				document.getElementById('tabItem10').appendChild(progressBar2.nativeElement);
			});

			ReactDOM.render(<Gauge />, document.createDocumentFragment(), function () {
				this.nativeElement.addEventListener('change', function (event) {
					progressBar1.value = event.detail.value;
				});

				document.getElementById('tabItem7').appendChild(this.nativeElement);
			});

			ReactDOM.render(<Gauge />, document.createDocumentFragment(), function () {
				this.analogDisplayType = 'fill';
				this.startAngle = 0;
				this.endAngle = 180;
				this.digitalDisplay = true;
				this.digitalDisplayPosition = 'center';


				this.nativeElement.addEventListener('change', function (event) {
					progressBar2.value = event.detail.value;
				});

				document.getElementById('tabItem8').appendChild(this.nativeElement);
			});

			ReactDOM.render(<Carousel />, document.createDocumentFragment(), function () {
				let data = [];
				const urlString = 'https://picsum.photos/1000/500/?image=';

				for (let i = 0; i < 5; i++) {
					const item = {
						image: urlString + (100 + i)
					};
					data.push(item);
				}

				this.dataSource = data;
				this.swipe = true;
				this.slideShow = true;
				this.loop = true;
				this.indicators = true;
				this.keyboard = true;

				document.getElementById('tabItem6').appendChild(this.nativeElement);
			});


			ReactDOM.render(<MultilineTextBox />, document.createDocumentFragment(), function () {
				this.value = 'What is Lorem Ipsum? \n\n' +
					'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a' + 'galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially' + ' unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker' + 'including versions of Lorem Ipsum.';

				document.getElementById('tabItem2').appendChild(this.nativeElement);
			});

			ReactDOM.render(<Tank />, document.createDocumentFragment(), function () {
				this.max = 50;
				this.value = 25;

				document.getElementById('tabItem1').appendChild(this.nativeElement);
			});
		}

		this.dockinglayout.current.getJSONStructure().then(state => {
			this.state.current.innerHTML = JSON.stringify(state, null, 4);
		})
	}

	handleLayout() {
		this.dockinglayout.current.layout = [{
			type: "LayoutGroup",
			items: [{
				type: "LayoutGroup",
				items: [{
					type: "LayoutGroup",
					items: [{
						type: "LayoutPanel",
						label: "Tab 10",
						items: [{
							id: "tabItem10",
							type: "LayoutPanelItem",
							label: "Tab 10",
							selected: true
						}],
						size: 153
					},
					{
						type: "LayoutPanel",
						label: "Tabs 1",
						items: [{
							id: "tabItem1",
							type: "LayoutPanelItem",
							label: "Tab 1",
							selected: true
						}],
						size: 218
					}
					],
					orientation: "horizontal",
					size: 203
				},
				{
					type: "LayoutPanel",
					label: "Tab 6",
					tabPosition: "hidden",
					items: [{
						id: "tabItem6",
						type: "LayoutPanelItem",
						label: "Tab 6",
						selected: true
					}],
					size: 739
				}
				],
				orientation: "vertical",
				size: 381
			},
			{
				type: "LayoutGroup",
				items: [{
					type: "LayoutPanel",
					label: "Tabs 2",
					items: [{
						id: "tabItem2",
						type: "LayoutPanelItem",
						label: "Tab 2",
						selected: true
					}],
					size: 604
				},
				{
					type: "LayoutPanel",
					label: "Tabs 3",
					items: [{
						id: "tabItem7",
						type: "LayoutPanelItem",
						label: "Tab 7",
						selected: true
					},
					{
						id: "tabItem8",
						type: "LayoutPanelItem",
						label: "Tab 8"
					}
					],
					size: 338,
					resizeMode: 'both'
				}
				],
				orientation: "vertical",
				size: 334
			}
			],
			orientation: "horizontal"
		}];

		//Set Content
		this.loadData();

		this.dockinglayout.current.getJSONStructure().then(state => {
			this.state.current.innerHTML = JSON.stringify(state, null, 4);
		})
	}

	handleStateChange() {
		this.dockinglayout.current.getJSONStructure().then(state => {
			this.state.current.innerHTML = JSON.stringify(state, null, 4);
		});
	}

	handleSaveSate() {
		this.dockinglayout.current.saveState();
	}

	handleSaveCurrentState() {
		this.dockinglayout.current.getState().then(value => this.currentState = value);
	}

	handleLoadState() {
		this.dockinglayout.current.loadState(this.currentState);
	}

	handleClearState() {
		this.dockinglayout.current.clearState();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DockingLayout ref={this.dockinglayout} id="layout" snapMode="simple" onReady={this.loadData.bind(this)} onStateChange={this.handleStateChange.bind(this)}></DockingLayout>
				<div className="options">
					<div className="caption">State Maintanance</div>
					<div className="option">
						<Button id="createLayout" onClick={this.handleLayout.bind(this)}>Load Layout</Button>
					</div>
					<div className="option">
						<Button id="saveState" onClick={this.handleSaveSate.bind(this)}>Save Layout State</Button>
					</div>
					<div className="option">
						<Button id="saveCurrentState" onClick={this.handleSaveCurrentState.bind(this)}>Save Current State</Button>
					</div>
					<div className="option">
						<Button id="loadState" onClick={this.handleLoadState.bind(this)}>Load Layout State</Button>
					</div>
					<div className="option">
						<Button id="clearState" onClick={this.handleClearState.bind(this)}>Clear State</Button>
					</div>
					<div className="option">
						<div ref={this.state} id="state"></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

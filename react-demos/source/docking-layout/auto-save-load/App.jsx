import React from "react";
import ReactDOM from "react-dom";
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { Gauge } from 'smart-webcomponents-react/gauge';
import { ProgressBar } from 'smart-webcomponents-react/progressbar';
import { Tank } from 'smart-webcomponents-react/tank';
import { Carousel } from 'smart-webcomponents-react/carousel';
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dockinglayout = React.createRef();
	}

	handleReady() {
		const smartDockingLayout = this.dockinglayout.current,
			data = [],
			urlString = 'https://picsum.photos/1000/500/?image=';
		let state, currentState, progressBar1, gauge1;

		function loadData() {
			if (smartDockingLayout.items.length > 0) {
				let fragment = document.createDocumentFragment();

				ReactDOM.render(<ProgressBar />, fragment, function () {
					progressBar1 = this;
					progressBar1.showProgressValue = true;

					document.getElementById('tabItem10').appendChild(fragment);
				});

				fragment = document.createDocumentFragment();

				ReactDOM.render(<Gauge />, fragment, function () {
					gauge1 = this;
					gauge1.nativeElement.addEventListener('change', function (event) {
						progressBar1.value = event.detail.value;
					});

					document.getElementById('tabItem7').appendChild(fragment);
				});

				fragment = document.createDocumentFragment();

				ReactDOM.render(<Carousel />, fragment, function () {

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
					this.keyboard = true;

					document.getElementById('tabItem6').appendChild(fragment);
				});

				fragment = document.createDocumentFragment();

				ReactDOM.render(<MultilineTextBox />, fragment, function () {
					this.value = 'What is Lorem Ipsum? \n\n' +
						'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a' + 'galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially' + ' unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker' + 'including versions of Lorem Ipsum.';

					document.getElementById('tabItem2').appendChild(fragment);
				});

				fragment = document.createDocumentFragment();

				ReactDOM.render(<Tank />, fragment, function () {
					this.max = 50;
					this.value = 25;

					document.getElementById('tabItem1').appendChild(fragment);
				});
			}
		}

		if (smartDockingLayout.items.length === 0) {
			smartDockingLayout.layout = [{
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
								label: "Tab 10"
							}],
							size: 153
						},
						{
							type: "LayoutPanel",
							label: "Tabs 1",
							items: [{
								id: "tabItem1",
								type: "LayoutPanelItem",
								label: "Tab 1"
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
							label: "Tab 6"
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
							label: "Tab 2"
						}],
						size: 604
					},
					{
						type: "LayoutPanel",
						label: "Tabs 3",
						items: [{
							id: "tabItem7",
							type: "LayoutPanelItem",
							label: "Tab 7"
						}],
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
		}

		//Set Content
		loadData();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DockingLayout ref={this.dockinglayout} id="layout" autoSaveState autoLoadState onReady={this.handleReady.bind(this)}></DockingLayout>
				<div className="description">Automatic State Handling. Resize or Reorder item. The state(like a snapshot
				of the layout) is automatically saved. Then open the demo again, and Your
			        State is loaded.</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

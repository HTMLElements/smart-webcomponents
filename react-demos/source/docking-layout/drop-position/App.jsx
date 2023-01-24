import React from "react";
import ReactDOM from "react-dom";
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';

class App extends React.Component {

	layout = [{
		type: "LayoutGroup",
		orientation: "horizontal",
		items: [{
				type: "LayoutGroup",
				items: [{
						type: "LayoutPanel",
						id: "item1",
						label: "Tabs 1",
						tabPosition: "top",
						dropPosition: ["top", "bottom", "header", "layout-top", "layout-left", "layout-right", "layout-bottom"],
						items: [{
							type: "LayoutPanelItem",
							label: "Tab 1",
							selected: true,
							content: "Item dropping is allowed only on the top, bottom and header positions."
						}],
						min: 200,
						size: 627
					},
					{
						type: "LayoutPanel",
						id: "item2",
						label: "Tab 2",
						tabPosition: "top",
						items: [{
							type: "LayoutPanelItem",
							label: "Tab 2",
							selected: true,
							content: "Dragging of this Item is disabled.",
							draggable: false
						}],
						size: 952
					},
					{
						type: "LayoutPanel",
						id: "item3",
						label: "Tabs 3",
						tabPosition: "top",
						dropPosition: ["top", "bottom", "header", "left", "right", "center"],
						items: [{
							type: "LayoutPanelItem",
							label: "Tab 3",
							selected: true,
							content: "Content of Tab 3"
						}],
						min: 200,
						size: 305
					}
				],
				orientation: "vertical",
				size: 395
			},
			{
				type: "LayoutPanel",
				label: "Tab 4",
				tabPosition: "top",
				dropPosition: ["none"],
				items: [{
					type: "LayoutPanelItem",
					label: "Tab 4",
					selected: true,
					content: "Item dropping is not allowed here."
				}],
				size: 200
			}
		]
	}];

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <DockingLayout ref={this.dockinglayout} snapMode="advanced" layout={this.layout}></DockingLayout>
			    <div className="description">smartDockingLayout Drag & Drop Customization</div>
			    <p>Every DockingLayout item can have a specific drop position. Drop position
			        is the destination of an item as a result of a dragging operation ( reordering
			        of items ). They are applied as a property <b>dropPosition</b> to the items
			        of the Layout.</p>
			    <p>The Drop position is an array of strings indicating the allowed locations
			        at which the item can be dropped. Possible values are:</p>
			    <ul>
			        <li>All - all possible drop positions are available</li>
			        <li>Top - position Top is allowed.</li>
			        <li>Bottom - position Bottom is allowed.</li>
			        <li>Left - position Left is allowed.</li>
			        <li>Right - position Right is allowed.</li>
			        <li>Center - position Center (available only in snapMode = "advanced") is
			            allowed.</li>
			        <li>Header - position Header is allowed.</li>
			        <li>None - dropping is not allowed.</li>
			    </ul>
			    <p><b>draggable</b> is a smartTabItem property that can be applied in order
			        to disable the dragging of a specific tab items.</p>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

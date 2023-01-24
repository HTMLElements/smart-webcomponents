import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dockinglayout = React.createRef();
		this.dropdownlist = React.createRef();
		
	}

	layout = [{
		type: 'LayoutGroup',
		orientation: 'horizontal',
		items: [{
				type: 'LayoutPanel',
				label: 'Window A',
				items: [{
					id: 'itemA',
					label: '#itemA',
					content: 'Content of item with id "itemA"',
					selected: true
				}]
			},
			{
				type: 'LayoutGroup',
				id: 'verticalGroup',
				orientation: 'vertical',
				items: [{
						type: 'LayoutPanel',
						label: 'Window B',
						items: [{
							id: 'itemB',
							label: '#itemB',
							content: 'Content of item with id "itemB"',
						}]
					},
					{
						type: 'LayoutPanel',
						label: 'Window C',
						items: [{
							id: 'itemC',
							label: '#itemC',
							content: 'Content of item with id "itemC"'
						}]
					},
				]
			},
			{
				type: 'LayoutPanel',
				label: 'Window D',
				items: [{
					id: 'itemD',
					label: '#itemD',
					content: 'Content of item with id "itemD"',
				}]
			}
		]
	}];

	handleAutoHideTop() {
		this.dockinglayout.current.autoHideTop(this.dropdownlist.current.selectedValues[0]);
	}

	handleAutoHideBottom() {
		this.dockinglayout.current.autoHideBottom(this.dropdownlist.current.selectedValues[0]);
	}

	handleAutoHideLeft() {
		this.dockinglayout.current.autoHideLeft(this.dropdownlist.current.selectedValues[0]);
	}

	handleAutoHideRight() {
		this.dockinglayout.current.autoHideRight(this.dropdownlist.current.selectedValues[0]);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <DockingLayout ref={this.dockinglayout} id="layout" layout={this.layout}></DockingLayout>
			    <div className="options">
			        <div className="option">
			            <DropDownList ref={this.dropdownlist}>
			                <ListItem value="itemA">ItemA</ListItem>
			                <ListItem value="itemB">ItemB</ListItem>
			                <ListItem value="itemC">ItemC</ListItem>
			                <ListItem value="itemD">ItemD</ListItem>
			            </DropDownList>
			        </div>
			        <br />
			        <div className="option">
			            <Button id="autoHideTop" onClick={this.handleAutoHideTop.bind(this)}>AutoHideTop</Button>
			        </div>
			        <div className="option">
			            <Button id="autoHideBottom" onClick={this.handleAutoHideBottom.bind(this)}>AutoHideBottom</Button>
			        </div>
			        <div className="option">
			            <Button id="autoHideLeft" onClick={this.handleAutoHideLeft.bind(this)}>AutoHideLeft</Button>
			        </div>
			        <div className="option">
			            <Button id="autoHideRight" onClick={this.handleAutoHideRight.bind(this)}>AutoHideRight</Button>
			        </div>
			    </div>
			    <br />
			    <br />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

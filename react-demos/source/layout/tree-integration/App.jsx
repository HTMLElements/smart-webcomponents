import React from "react";
import ReactDOM from "react-dom";
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {

	init() {
	
	
	    const layout = document.querySelector('smart-layout'),
	        tree = document.getElementById('tree');
	    tree.dataSource = layout.dataSource;
	    layout.addEventListener('stateChange', function(event) {
	        tree.dataSource = layout.dataSource;
	    });
	    layout.addEventListener('change', function(event) {
	        tree.selectedIndexes = [event.detail.selectedIndex];
	        tree.ensureVisible(event.detail.selectedIndex);
	    });
	    tree.addEventListener('change', function(event) {
	        layout.selectedIndex = event.detail.selectedIndexes[0];
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div class="Grid-layout">
			        <div class="row">
			            <div class="col">Header</div>
			        </div>
			        <div class="row">
			            <div class="col-sm-2">
			                <ListBox ref="listbox" id="listBox">
			                    <ListItem>Accordion</ListItem>
			                    <ListItem>Breadcrumb</ListItem>
			                    <ListItem>Button</ListItem>
			                    <ListItem>Calendar</ListItem>
			                    <ListItem>Card</ListItem>
			                    <ListItem>CardView</ListItem>
			                    <ListItem>Carousel</ListItem>
			                    <ListItem>Chart</ListItem>
			                    <ListItem>Checkbox</ListItem>
			                    <ListItem>Chip</ListItem>
			                    <ListItem>ColorPanel</ListItem>
			                    <ListItem>ColorPicker</ListItem>
			                    <ListItem>ComboBox</ListItem>
			                    <ListItem>DateTimePicker</ListItem>
			                    <ListItem>DropDownButton</ListItem>
			                    <ListItem>DropDownList</ListItem>
			                    <ListItem>FileUpload</ListItem>
			                    <ListItem>GanttChart</ListItem>
			                    <ListItem>Gauge</ListItem>
			                    <ListItem>Grid</ListItem>
			                    <ListItem>Input</ListItem>
			                    <ListItem>ListBox</ListItem>
			                </ListBox>
			            </div>
			            <div class="col-sm-8">
			                <smart-layout></smart-layout>
			            </div>
			            <div class="col-sm-2">
			                <Tree ref="tree" id="tree" items-member="content"></Tree>
			            </div>
			        </div>
			        <div class="row">
			            <div class="col">Footer</div>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

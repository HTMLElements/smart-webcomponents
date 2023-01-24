import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

class App extends React.Component {

	init() {
	
	
	    const slider = document.getElementById('horizontalSlider'),
	        tabs = document.getElementById('tabs');
	    slider.addEventListener('change', function(event) {
	        const size = event.detail.value + 'px';
	        tabs.style.width = size;
	        tabs.style.height = size;
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="125" max="1000" value="200"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <Tabs ref="tabs" id="tabs" className="demoTabs" tab-layout="scroll">
			        <TabItem label="TAB 1">Content 1</TabItem>
			        <TabItem label="TAB 2">Content 2</TabItem>
			        <TabItem label="TAB 3">Content 3</TabItem>
			        <TabItem label="TAB 4">Content 4</TabItem>
			        <TabItem label="TAB 5">Content 5</TabItem>
			        <TabItem label="TAB 6">Content 6</TabItem>
			        <TabItem label="TAB 7">Content 7</TabItem>
			        <TabItem label="TAB 8">Content 8</TabItem>
			        <TabItem label="TAB 9">Content 9</TabItem>
			        <TabItem label="TAB 10">Content 10</TabItem>
			    </Tabs>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

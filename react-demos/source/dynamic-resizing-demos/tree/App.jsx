import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {

	init() {
	
	
	    const tree = document.getElementById('tree');
	    tree.expandAll(false);
	    document.getElementById('resizeSlider').addEventListener('change', function(event) {
	        const size = this.value + 'px';
	        tree.style.width = size;
	        tree.style.height = size;
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="resizeSlider" min="300" max="800" value="300"
			    orientation="horizontal" scale-position="near" show-unit unit="px"></Slider>
			    <br />
			    <br />
			    <Tree ref="tree" id="tree" className="animation" filterable filter-input-placeholder="Filter query..."
			    filter-mode="containsIgnoreCase">
			        <TreeItem>Home</TreeItem>
			        <TreeItems-group>Solutions
			            <TreeItem>Education</TreeItem>
			            <TreeItem>Financial services</TreeItem>
			            <TreeItem>Government</TreeItem>
			            <TreeItem>Manufacturing</TreeItem>
			            <TreeItems-group>Solutions
			                <TreeItem>Consumer photo and video</TreeItem>
			                <TreeItem>Mobile</TreeItem>
			                <TreeItem>Rich Internet applications</TreeItem>
			                <TreeItem>Technical communication</TreeItem>
			                <TreeItem>Training and eLearning</TreeItem>
			                <TreeItem>Web conferencing</TreeItem>
			            </TreeItems-group>
			            <TreeItem>All industries and solutions</TreeItem>
			        </TreeItems-group>
			        <TreeItems-group>Products
			            <TreeItem>PC products</TreeItem>
			            <TreeItem>Mobile products</TreeItem>
			            <TreeItem>All products</TreeItem>
			        </TreeItems-group>
			        <TreeItems-group>Support
			            <TreeItem>Support home</TreeItem>
			            <TreeItem>Customer Service</TreeItem>
			            <TreeItem>Knowledge base</TreeItem>
			            <TreeItem>Books</TreeItem>
			            <TreeItem>Training and certification</TreeItem>
			            <TreeItem>Support programs</TreeItem>
			            <TreeItem>Forums</TreeItem>
			            <TreeItem>Documentation</TreeItem>
			            <TreeItem>Updates</TreeItem>
			        </TreeItems-group>
			        <TreeItems-group>Communities
			            <TreeItem>Designers</TreeItem>
			            <TreeItem>Developers</TreeItem>
			            <TreeItem>Educators and students</TreeItem>
			            <TreeItem>Partners</TreeItem>
			            <TreeItems-group>By resource
			                <TreeItem>Labs</TreeItem>
			                <TreeItem>TV</TreeItem>
			                <TreeItem>Forums</TreeItem>
			                <TreeItem>Exchange</TreeItem>
			                <TreeItem>Blogs</TreeItem>
			                <TreeItem>Experience Design</TreeItem>
			            </TreeItems-group>
			        </TreeItems-group>
			        <TreeItems-group>Company
			            <TreeItem>About Us</TreeItem>
			            <TreeItem>Press</TreeItem>
			            <TreeItem>Investor Relations</TreeItem>
			            <TreeItem>Corporate Affairs</TreeItem>
			            <TreeItem>Careers</TreeItem>
			            <TreeItem>Showcase</TreeItem>
			            <TreeItem>Events</TreeItem>
			            <TreeItem>Contact Us</TreeItem>
			            <TreeItem>Become an affiliate</TreeItem>
			        </TreeItems-group>
			    </Tree>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

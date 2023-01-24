import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	    let tabsList = [];
	    // appends 100 tabs on the page
	    function appendTabs() {
	        const tabsContainer = document.createElement('div');
	        const containerFragment = document.createDocumentFragment();
	        for (let i = 0; i < 100; i++) {
	            const newTabs = document.createElement('smart-tabs');
	            newTabs.classList.add('performanceDemoTabs');
	            newTabs.innerHTML = '<smart-tab-item label="TAB 1">Content 1</smart-tab-item><smart-tab-item label="TAB 2" selected>Content 2</smart-tab-item><smart-tab-item label="TAB 3">Content 3</smart-tab-item><smart-tab-item label="TAB 4">Content 4</smart-tab-item>';
	            tabsList.push(newTabs);
	            containerFragment.appendChild(newTabs);
	        }
	        tabsContainer.appendChild(containerFragment);
	        document.body.appendChild(tabsContainer);
	    }
	    // executes value updates for all tabs in a 10ms loop
	    function runTest() {
	        setInterval(function() {
	            for (let i = 0; i < 100; i++) {
	                tabsList[i].select(Math.floor(Math.random() * 4));
	            }
	        }, 10);
	    }
	
	    appendTabs();
	    runTest();
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>TYPE html>
			    <html xmlns="http://www.w3.org/1999/xhtml">
			        
			        <head>
			            <title>Tabs Performance Test</title>
			            <meta charset="utf-8" />
			            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
			            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
			            />
			            <link rel="stylesheet" type="text/css" href="../../../source/styles/smart.default.css"
			            />
			            <link rel="stylesheet" type="text/css" href="../../../styles/demos.css"
			            />
			            <link rel="stylesheet" type="text/css" href="../../../styles/common.css"
			            />
			            <link rel="stylesheet" type="text/css" href="styles.css" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

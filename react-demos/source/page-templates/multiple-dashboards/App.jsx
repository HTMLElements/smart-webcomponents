import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.splitter = React.createRef();
		this.button = React.createRef();
		this.button5 = React.createRef();
		this.pageheader = React.createRef();
		this.pagecontent = React.createRef();
	}

	handleCollapse() {
		this.button.current.nativeElement.classList.add('collapsed');
		this.splitter.current.collapse(0);
	}

	handleExpand() {
		this.button.current.nativeElement.classList.remove('collapsed');
		this.splitter.current.expand(0);
	}

	//Add event listener for the Menu button
	handleClick() {
		this.button.current.nativeElement.classList.contains('collapsed') ? this.handleExpand() : this.handleCollapse();
	}

	// Add event listener to the menu
	handleChange(event) {
		if(event.detail.item) {
			this.load(event.detail.item.value);
		}
	}

	//Add event lisneter for the Theme button
	handleThemeClick() {
		const button = this.button5.current

		button.theme = !button.theme || button.theme === 'light' ? 'dark' : 'light';
		this.applyTheme();
	}


	getPageFunctionFromPageName(currPage) {
		let newPageName = (currPage.charAt(0).toUpperCase() + currPage.slice(1));

		newPageName = newPageName.split('-');

		if (newPageName[1]) {
			newPageName = newPageName[0] + (newPageName[1].charAt(0).toUpperCase() + newPageName[1].slice(1));
		}
		else {
			newPageName = newPageName[0];
		}

		return newPageName;
	}

	applyTheme() {
		const currPage = this.pagecontent.current.getAttribute('demo-page');
		let currPageName = this.getPageFunctionFromPageName(currPage);
		const themeButton = this.button5.current;

		if (!themeButton.theme) {
			themeButton.theme = 'light';
		}

		const themeName = themeButton.theme;

		this.splitter.current.theme = themeName;

		//Calls the applyTheme function of the appropriate demo
		window['applyTheme' + currPageName]();
	}

	loadContent(fileName, elmnt) {
		const that = this;
		let xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status === 200) {
					//Add the module for the neccessary JS files
					that.loadView(fileName, elmnt, this);
				}
				if (this.status === 404) {
					elmnt.innerHTML = 'Page not found.';
				}
				/* Remove the attribute, and call this function once more: */
			}
		};
		xhttp.open('GET', './../../../source/page-templates/dashboard-advanced/' + fileName + '/index.htm', true);
		xhttp.send();
	}

	loadView(fileName, elmnt, response) {
		function loadScript(source) {
			let scriptModule = document.createElement('script');

			scriptModule.type = 'text/javascript';
			scriptModule.src = source;
			elmnt.appendChild(scriptModule);
		}

		function loadMaps(initCallback) {
			if (!window.google) {
				loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDLNo8WFhrz_4zuLdl423WX9h5Kh0SedHQ&callback=' + initCallback);
			} else {
				const callback = window[initCallback];
				callback();
			}
		}

		//Add the new demo content
		elmnt.innerHTML = response.responseText;

		//Add the demo styles
		let style = document.createElement('link');

		style.type = 'text/css';
		style.rel = 'stylesheet';
		style.href = './../../../source/page-templates/dashboard-advanced/' + fileName + '/styles.css';

		//Add the demo script
		let script = document.createElement('script');

		script.type = 'text/javascript';
		script.src = './../../../source/page-templates/dashboard-advanced/' + fileName + '/index.js';

		script.onload = function () {
			switch (fileName) {
				case 'dashboard':
					loadMaps('initDashboardMaps');
					break;
				case 'maps':
					loadMaps('initMaps');
					break;
				case 'multiple-maps':
					loadMaps('initMultipleMaps');
					break;
			}
		};

		elmnt.appendChild(style);
		elmnt.appendChild(script);
	}

	load(fileName) {
		const that = this;

		if (!fileName) {
			return;
		}

		const elmnt = this.pagecontent.current;

		elmnt.setAttribute('demo-page', fileName);

		function loadModule(elName, isLastModule) {
			if (!arguments.length) {
				that.loadContent(fileName, elmnt);
				return;
			}
			if (elName && window.Smart[elName]) {
				if (isLastModule) {
					that.loadContent(fileName, elmnt);
				}
				return;
			}
			elName = elName.toLowerCase();
			import(`./../node_modules/smart-webcomponents-react/source/modules/smart.${elName}.js`)
				.then(() => {
					if (isLastModule) {
						that.loadContent(fileName, elmnt);
					}
				})
				.catch(err => {
					//Fallback
					let scriptModule = document.createElement('script');

					scriptModule.type = 'module';
					scriptModule.text = 'import \'./../../../node_modules/smart-webcomponents-react/source/modules/' + 'smart.' + elName + '.js\'';
					elmnt.appendChild(scriptModule);
				});
		}

		if (!fileName) {
			return;
		}

		//Added modules
		switch (fileName) {
			case 'button':
				loadModule('Pager', true);
				break;
			case 'calendar':
				loadModule('Calendar', true);
				break;
			case 'chart':
			case 'timeline':
				loadModule('Card', true);
				break;
			case 'dashboard':
				loadModule('DropDownButton');
				loadModule('Chart');
				loadModule('Card');
				loadModule('Tabs');
				loadModule('Grid');
				loadModule('ProgressBar', true);
				break;
			case 'extended-forms':
				loadModule('DateTimePicker');
				loadModule('ProgressBar');
				loadModule('Chip');
				loadModule('DropDownList');
				loadModule('DropDownButton');
				loadModule('Slider', true);
				break;
			case 'extended-table':
				loadModule('Grid');
				loadModule('CheckBox');
				loadModule('ProgressBar', true);
				break;
			case 'grid-system':
				loadModule('Grid', true);
				break;
			case 'lock':
				loadModule('TextBox', true);
				break;
			case 'login':
				loadModule('Card');
				loadModule('TextBox', true);
				break;
			case 'maps':
			case 'maps-large':
			case 'multiple-maps':
				loadModule();
				break;
			case 'panels':
				loadModule('Accordion');
				loadModule('Card');
				loadModule('Tabs', true);
				break;
			case 'pricing':
				loadModule('progressbar', true);
				break;
			case 'register':
				loadModule('TextBox', true);
				break;
			case 'regular-forms':
				loadModule('TextBox', true);
				break;
			case 'tables':
				loadModule('Card');
				loadModule('Grid', true);
				break;
			case 'user-profile':
				loadModule('TextBox', true);
				break;
			case 'widgets':
				loadModule('Grid');
				loadModule('Card');
				loadModule('CheckBox', true);
				break;
		}
	}

	init() {
		const that = this;
		let currPage = this.pagecontent.current.getAttribute('demo-page'),
			throttled;

		//Window Resize event handling
		window.onresize = function () {
			if (!throttled) {
				const docElement = document.documentElement;

				docElement.offsetWidth && docElement.offsetWidth <= 860 ? that.handleCollapse() : that.handleExpand();
				throttled = true;

				// set a timeout to un-throttle
				setTimeout(function () {
					throttled = false;
				}, 250);
			}
		};

		this.load(currPage);
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div id="dashboardHeader">
					<div>
						<img src="https://www.htmlelements.com/wp-content/design/assets/images/logo-htmlelements.svg"
							className="smart-logo" />
						<Button ref={this.button} onClick={this.handleClick.bind(this)} id="menu-btn"> <i className="material-icons">menu</i></Button>
					</div>
					<div className="floating">
						<Button id="header-person-btn"> <i className="material-icons">person</i>
						</Button>
						<Button id="notifficationBtn"> <i className="material-icons">notifications</i>
						</Button>
						<Button id="header-dashboard-btn"> <i className="material-icons">view_quilt</i>
						</Button>
						<Button ref={this.button5} onClick={this.handleThemeClick.bind(this)} id="header-change-theme-btn" theme="light"> <i className="material-icons">invert_colors</i>
						</Button>
					</div>
				</div>
				<Splitter ref={this.splitter} id="dashboard" animation="none">
					<SplitterItem collapsible id="leftPanel" size="240">
						<Tree ref={this.tree} onChange={this.handleChange.bind(this)} className="dashboard-menu" mode="tree" scrollMode="scrollButtons"
							toggleElementPosition="far" toggleMode="click">
							<TreeItem value="dashboard" separator><i className="material-icons">view_quilt</i>Dashboard</TreeItem>
							<TreeItemsGroup readonly> <i className="material-icons">apps</i> Pages
			                    <TreeItem value="pricing">Pricing</TreeItem>
								<TreeItem value="timeline">Timeline</TreeItem>
								<TreeItem value="login">Login</TreeItem>
								<TreeItem value="register">Register</TreeItem>
								<TreeItem value="lock">Lock</TreeItem>
								<TreeItem value="user-profile">User Profile</TreeItem>
							</TreeItemsGroup>
							<TreeItemsGroup> <i className="material-icons">list_alt</i> Components
			                        <TreeItem value="button">Button</TreeItem>
								<TreeItem value="grid-system">Grid System</TreeItem>
								<TreeItem value="panels">Panels</TreeItem>
							</TreeItemsGroup>
							<TreeItemsGroup> <i className="material-icons">view_list</i> Forms
			                        <TreeItem value="regular-forms">Regular form</TreeItem>
								<TreeItem value="extended-forms">Extended form</TreeItem>
							</TreeItemsGroup>
							<TreeItemsGroup> <i className="material-icons">table_chart</i> Tables
			                        <TreeItem value="tables">Regular tables</TreeItem>
								<TreeItem value="extended-table">Extended tables</TreeItem>
							</TreeItemsGroup>
							<TreeItemsGroup> <i className="material-icons">map</i> Maps
			                        <TreeItem value="maps-large">Vector map tables</TreeItem>
								<TreeItem value="maps">Full screen map</TreeItem>
								<TreeItem value="multiple-maps">Google maps</TreeItem>
							</TreeItemsGroup>
							<TreeItem value="widgets"><i className="material-icons">hdr_strong</i> Widgets</TreeItem>
							<TreeItem value="chart"><i className="material-icons">bar_chart</i> Charts</TreeItem>
							<TreeItem value="calendar"><i className="material-icons">calendar_today</i> Calendar</TreeItem>
						</Tree>
					</SplitterItem>
					<SplitterBar className="smart-hidden"></SplitterBar>
					<SplitterItem id="rightPanel">
						<div ref={this.pageheader} id="custom-html-header"></div>
						<div ref={this.pagecontent} id="include-html-page" demo-page="dashboard"></div>
					</SplitterItem>
				</Splitter>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

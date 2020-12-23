
// demos.js
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

	if (iOS) {
		document.addEventListener('touchmove', function (event) {
		  if (event.scale !== 1) { event.preventDefault(); }
		}, { passive: false });
	}
	
	const demoRequest = new (function () {	
		function requestPage (sURL) {	
			if( !window.processDemoLink) {
				window.open(sURL, '_self');
				return;
			}
			
			processDemoLink(sURL.replace('https://www.htmlelements.com', ''));				
		}

		function init () {
			const title = document.title;
			const url =	  location.href.replace('https://www.htmlelements.com', '');
			
			const stateObject = {url: url, title: title};
			history.pushState(stateObject, title, url);
		
			const navRight = document.querySelector('.nav-right');
			
			const links = document.querySelector('.nav-right a');
			
			navRight.addEventListener('click', function(event) {
				const anchor = event.target.parentNode;
				
				
				if (anchor.href) {
					requestPage(anchor.href);
				}
				else if (event.target.href) {
					requestPage(event.target.href);
				}
				
				event.stopPropagation();
				event.preventDefault();
				return false;
			});		
		}
		
		window.onpopstate = function (event) {
			if (event.state && window.processDemoLink) {
				const page = event.state;
						
				processDemoLink(page.url, true);
			} else {
				//No "history" 
			}
		};

		window.addEventListener ? addEventListener("load", init, false) : window.attachEvent ? attachEvent("onload", init) : (onload = init);

		// Public methods
		this.rebuildLinks = init;		
	})();


// custom select
function initCustomSelect() {
	var x, i, j, selElmnt, a, b, c;
	/*look for any elements with the class "custom-select":*/
	x = document.getElementsByClassName("custom-select");
	for (i = 0; i < x.length; i++) {
	  selElmnt = x[i].getElementsByTagName("select")[0];
	  /*for each element, create a new DIV that will act as the selected item:*/
	  a = document.createElement("DIV");
	  a.setAttribute("class", "select-selected");
	  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	  x[i].appendChild(a);
	  /*for each element, create a new DIV that will contain the option list:*/
	  b = document.createElement("DIV");
	  b.setAttribute("class", "select-items select-hide");
	  for (j = 0; j < selElmnt.length; j++) {
		/*for each option in the original select element,
		create a new DIV that will act as an option item:*/
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		if (j===0) {
			c.classList.add('same-as-selected');
		}
		c.addEventListener("click", function(e) {
			/*when an item is clicked, update the original select box,
			and the selected item:*/
			var y, i, k, s, h;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
			  if (s.options[i].innerHTML == this.innerHTML) {
				s.selectedIndex = i;
				h.innerHTML = this.innerHTML;
				y = this.parentNode.getElementsByClassName("same-as-selected");
				for (k = 0; k < y.length; k++) {
				  y[k].removeAttribute("class");
				}
				this.setAttribute("class", "same-as-selected");
				
				var setTheme = function() {
					var theme = document.querySelector('iframe').contentDocument.body.getAttribute('theme');
						
					Array.prototype.slice.call(document.querySelector('iframe').contentDocument.body.querySelectorAll('*')).filter(function (el) { 
					 if (el.tagName.match(/^smart-/i)) {
						if (theme) {
							el.setAttribute('theme', theme);
						}
						else {
							el.removeAttribute('theme');
						}
					 }
	  			    });
				}
				
				  switch(this.innerHTML){
					case 'Light':
						document.body.classList.remove('dark-mode');
						document.querySelector('iframe').contentDocument.body.removeAttribute('theme');
						document.querySelector('iframe').contentDocument.body.classList.remove('dark-mode');
						break;
					case 'Dark':
						document.body.classList.add('dark-mode');
						document.querySelector('iframe').contentDocument.body.setAttribute('theme','dark');
						document.querySelector('iframe').contentDocument.body.classList.add('dark-mode');
						
						break;
				  }		
				  
				  setTheme();
				break;
			  }
			}
			h.click();
		});
		b.appendChild(c);
	  }
	  x[i].appendChild(b);
	  
		
	  a.addEventListener("click", function(e) {
		  /*when the select box is clicked, close any other select boxes,
		  and open/close the current select box:*/
		  e.stopPropagation();
		  closeAllSelect(this);
		  this.nextSibling.classList.toggle("select-hide");
		  
		  if (!this.nextSibling.classList.contains('select-hide')){
			document.querySelector('.custom-select').classList.add('open');
		  }
		  
		  this.classList.toggle("select-arrow-active");
		});
	}
	function closeAllSelect(elmnt) {
	  /*a function that will close all select boxes in the document,
	  except the current select box:*/
	  var x, y, i, arrNo = [];
	  x = document.getElementsByClassName("select-items");
	  y = document.getElementsByClassName("select-selected");
	  if (!document.querySelector('.custom-select')){
		  return;
	  }
	  document.querySelector('.custom-select').classList.remove('open');
	  
	  for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
		  arrNo.push(i)
		} else {
		  y[i].classList.remove("select-arrow-active");
		}
	  }
	  for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
		  x[i].classList.add("select-hide");
		}
	  }
	}
	/*if the user clicks anywhere outside the select box,
	then close all select boxes:*/
	document.addEventListener("click", closeAllSelect);
}
	
window.addEventListener('load', function() {
	initCustomSelect();
	const tabs = document.getElementById('sourceTabs');
	
	if (!tabs) {
		return;
	}
	
	const escapeHtml = function(text) {
	  var map = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;'
	  };

	  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
	}
		
	const indexjs = document.getElementById('indexjs');
	const indexhtm = document.getElementById('indexhtm');
	const styles = document.getElementById('styles');
	
	const updateSourceTabs = function(href, pop) {
		const hrefParts = href.split('/');
		const elementName = hrefParts[hrefParts.indexOf('demos') + 1];
		const demoName = hrefParts[hrefParts.indexOf('demos') + 2];
		const header = document.querySelector('.demo-title');
		const imgURL = '/wp-content/design/assets/images/';
		
		document.querySelector('.wide-content').scrollTop = 0;
		
		const elementCurrent = document.querySelector('.nav-left .current');
		
		document.getElementById('submitToCodePenButton').style.display = "none";
		if (window.framework !== "angular" ){
			document.getElementById('submitToCodePenButton').style.display = "";
		}

		if (elementCurrent) {
			elementCurrent.classList.remove('current');
		}
		
		const demoCurrent = document.querySelector('.nav-right .current');
		
		if (demoCurrent) {
			demoCurrent.classList.remove('current');
		}
		
		header.firstElementChild.className = elementName + '-icon';
		switch(elementName) {
			case 'framework':
			//	header.firstElementChild.src = imgURL + 'data_adapter.svg';
				header.lastElementChild.innerHTML = 'Smart is Framework for building user interfaces';
				header.firstElementChild.className = 'dataadapter-icon';
				break;
			case 'accordion':
			//	header.firstElementChild.src = imgURL + 'accordion.svg';
				header.lastElementChild.innerHTML = 'Smart.Accordion';
				break;
			case 'button':
		//		header.firstElementChild.src = imgURL + 'button.svg';
				header.lastElementChild.innerHTML = 'Smart.Button';
				break;
			case 'badge':
			//	header.firstElementChild.src = imgURL + 'badge.svg';
				header.lastElementChild.innerHTML = 'Smart.Badge';
				break;
			case 'calendar':
			//	header.firstElementChild.src = imgURL + 'calendar.svg';
				header.lastElementChild.innerHTML = 'Smart.Calendar';
				break;
			case 'carousel':
			//	header.firstElementChild.src = imgURL + 'scroll_view.svg';
				header.firstElementChild.className = 'scrollview-icon';
				header.lastElementChild.innerHTML = 'Smart.Carousel';
				break;
			case 'card':
			//	header.firstElementChild.src = imgURL + 'navigation_bar.svg';
				header.firstElementChild.className = 'navbar-icon';			
				header.lastElementChild.innerHTML = 'Smart.Card';
				break;
			case 'checkbox':
			//	header.firstElementChild.src = imgURL + 'check_box.svg';
				header.lastElementChild.innerHTML = 'Smart.CheckBox';
				break;
			case 'combobox':
			//	header.firstElementChild.src = imgURL + 'combo_box.svg';
				header.lastElementChild.innerHTML = 'Smart.ComboBox';
				break;
			case 'datetimepicker':
			//	header.firstElementChild.src = imgURL + 'date_time_input.svg';
				header.lastElementChild.innerHTML = 'Smart.DateTimePicker';
				break;
			case 'docking-layout':
			//	header.firstElementChild.src = imgURL + 'docking_layout.svg';
					header.firstElementChild.className = 'dockinglayout-icon';
		
				header.lastElementChild.innerHTML = 'Smart.DockingLayout';
				break;
			case 'dropdownlist':
			//	header.firstElementChild.src = imgURL + 'dropdown_list.svg';
				header.lastElementChild.innerHTML = 'Smart.DropDownList';
				break;
			case 'chart':
			//	header.firstElementChild.src = imgURL + 'grid.svg';
				header.lastElementChild.innerHTML = 'Smart.Chart';
				break;
			case 'grid':
			//	header.firstElementChild.src = imgURL + 'grid.svg';
				header.lastElementChild.innerHTML = 'Smart.Grid';
				break;
			case 'gauge':
			//	header.firstElementChild.src = imgURL + 'gauge.svg';
				header.lastElementChild.innerHTML = 'Smart.Gauge';
				break;
			case 'listbox':
		//		header.firstElementChild.src = imgURL + 'list_box.svg';
				header.lastElementChild.innerHTML = 'Smart.ListBox';
				break;
			case 'listmenu':
		//		header.firstElementChild.src = imgURL + 'list_menu.svg';
				header.lastElementChild.innerHTML = 'Smart.ListMenu';
				break;
			case 'maskedtextbox':
			//	header.firstElementChild.src = imgURL + 'masked_input.svg';
				header.lastElementChild.innerHTML = 'Smart.MaskedTextBox';
				break;
			case 'menu':
			//	header.firstElementChild.src = imgURL + 'menu.svg';
				header.lastElementChild.innerHTML = 'Smart.Menu';
				break;
			case 'multilinetextbox':
			//	header.firstElementChild.src = imgURL + 'text_area.svg';
				header.firstElementChild.className = 'textarea-icon';
				header.lastElementChild.innerHTML = 'Smart.MultilineTextBox';
				break;
			case 'multisplitbutton':
			//	header.firstElementChild.src = imgURL + 'button.svg';
				header.firstElementChild.className = 'button-icon';
				header.lastElementChild.innerHTML = 'Smart.MultiSplitButton';
				break;
			case 'numerictextbox':
		//		header.firstElementChild.src = imgURL + 'numeric_input.svg';
				header.lastElementChild.innerHTML = 'Smart.NumericTextBox';
				break;
			case 'pager':
			//	header.firstElementChild.src = imgURL + 'pager.png';
				header.lastElementChild.innerHTML = 'Smart.Pager';
				break;
			case 'passwordtextbox':
			//	header.firstElementChild.src = imgURL + 'password_input.svg';
				header.lastElementChild.innerHTML = 'Smart.PasswordTextBox';
				break;
			case 'powerbutton':
			//	header.firstElementChild.src = imgURL + 'power_button.svg';
				header.lastElementChild.innerHTML = 'Smart.PowerButton';
				break;
			case 'progressbar':
			//	header.firstElementChild.src = imgURL + 'progress_bar.svg';
				header.lastElementChild.innerHTML = 'Smart.ProgressBar';
				break;
			case 'radiobutton':
			//	header.firstElementChild.src = imgURL + 'radio.svg';
				header.lastElementChild.innerHTML = 'Smart.RadioButton';
				break;
			case 'repeatbutton':
			//	header.firstElementChild.src = imgURL + 'repeat_button.svg';
				header.lastElementChild.innerHTML = 'Smart.RepeatButton';
				break;
			case 'scrollbar':
		//		header.firstElementChild.src = imgURL + 'scroll_bar.svg';
				header.lastElementChild.innerHTML = 'Smart.Scrollbar';
				break;
			case 'slider':
			//	header.firstElementChild.src = imgURL + 'slider.svg';
				header.lastElementChild.innerHTML = 'Smart.Slider';
				break;
			case 'switchbutton':
		//		header.firstElementChild.src = imgURL + 'switch_button.svg';
				header.lastElementChild.innerHTML = 'Smart.SwitchButton';
				break;
			case 'splitter':
			//	header.firstElementChild.src = imgURL + 'splitter.svg';
				header.lastElementChild.innerHTML = 'Smart.Splitter';
				break;
			case 'tabs':
			//	header.firstElementChild.src = imgURL + 'tabs.svg';
				header.lastElementChild.innerHTML = 'Smart.Tabs';
				break;
			case 'table':
			header.firstElementChild.className =  'datatable-icon';
	//			header.firstElementChild.src = imgURL + 'data_table.svg';
				header.lastElementChild.innerHTML = 'Smart.Table';
				break;
			case 'tank':
	//			header.firstElementChild.src = imgURL + 'tank.svg';
				header.lastElementChild.innerHTML = 'Smart.Tank';
				break;
			case 'textbox':
		//		header.firstElementChild.src = imgURL + 'input.svg';
				header.lastElementChild.innerHTML = 'Smart.TextBox';
				break;
			case 'timepicker':
		//		header.firstElementChild.src = imgURL + 'time_picker.svg';
				header.lastElementChild.innerHTML = 'Smart.TimePicker';
				break;
			case 'toast':
			//	header.firstElementChild.src = imgURL + 'notification.svg';
				header.firstElementChild.className = 'notification-icon';
				header.lastElementChild.innerHTML = 'Smart.Toast';
				break;
			case 'togglebutton':
		//		header.firstElementChild.src = imgURL + 'toggle_button.svg';
				header.lastElementChild.innerHTML = 'Smart.ToggleButton';
				break;
			case 'tooltip':
		//		header.firstElementChild.src = imgURL + 'tool_tip.svg';
				header.lastElementChild.innerHTML = 'Smart.Tooltip';
				break;
			case 'tree':
		//		header.firstElementChild.src = imgURL + 'tree.svg';
				header.lastElementChild.innerHTML = 'Smart.Tree';
				break;
			case 'window':
	//			header.firstElementChild.src = imgURL + 'window.svg';
				header.lastElementChild.innerHTML = 'Smart.Window';
				break;				
		}
		
		header.firstElementChild.className += ' demo-header-icon';
		document.querySelector('.nav-left #' + elementName.replace('-', '') + '_left').firstElementChild.classList.add('current');
		const currentDemoList = document.querySelector('.nav-right #' + elementName.replace('-', '') + '_right a[href="/demos/' + elementName + '/' + demoName + '/"]');
		
		if (currentDemoList) {
			currentDemoList.classList.add('current'); 
		}
		
		const index_httpRequest = new XMLHttpRequest()
		index_httpRequest.onload = function () {
 		    let data = index_httpRequest.response;

		  	document.getElementById('indexhtmvalue').value = data;
			indexhtm.firstElementChild.innerHTML = escapeHtml(data);
			indexhtm.firstElementChild.classList.remove('prettyprinted');
						
			const title = data.substring(data.indexOf('title') + 6, data.indexOf('</title>'));
			document.title = title;
		
			document.querySelector('.demo-description').innerHTML = header.lastElementChild.innerHTML + ' Custom Element: ' + title;
			
			if (!pop) {
				const stateObject = {url :href, title: title};
				history.pushState(stateObject, title, href);
			}
			
			requestAnimationFrame(() => {
				prettyPrint();
			});
		}
		
		const indexhtmlhref = window.framework === "angular" ? href.replace('demos/', 'demos/angular/') + 'src/app/app.component.html' : href + 'index.htm'; 
		
		
		
		index_httpRequest.open('GET', indexhtmlhref)
		index_httpRequest.send();

		// indexjs
		const indexjs_httpRequest = new XMLHttpRequest()
		indexjs_httpRequest.onload = function () {
		    let data = indexjs_httpRequest.response;

			document.getElementById('indexjsvalue').innerHTML = '<pre>' + data + '</pre>';
			indexjs.firstElementChild.innerHTML = data;
			indexjs.firstElementChild.classList.remove('prettyprinted');
			requestAnimationFrame(() => {
				prettyPrint();
			});
		}
		
		const indexjshref = window.framework === "angular" ? href.replace('demos/', 'demos/angular/') + 'src/app/app.component.ts' : href + 'index.js' ; 
		indexjs_httpRequest.open('GET', indexjshref)
		indexjs_httpRequest.send();

		// styles
		const styles_httpRequest = new XMLHttpRequest()
		styles_httpRequest.onload = function () {
		    let data = styles_httpRequest.response;
			
			document.getElementById('stylesvalue').innerHTML = data;
			styles.firstElementChild.innerHTML = data;
			styles.firstElementChild.classList.remove('prettyprinted');
			requestAnimationFrame(() => {
				prettyPrint();
			});
	
		}
		
		const styleshref = window.framework === "angular" ? href.replace('demos/', 'demos/angular/') + 'src/app/app.component.css' : href + 'styles.css'; 
		styles_httpRequest.open('GET', styleshref)
		styles_httpRequest.send();
	}

	const navRight = document.querySelector('.nav-right');
	
	window.processDemoLink = function(href, pop) {		
		const iFrameID = document.querySelector('iframe');

	//	document.querySelector('.loader').style.display = 'block';
	
		const sideBar = document.querySelector('.demos-sidebar');
		if (sideBar && sideBar.classList.contains('open')) {
			const closeSideNav = document.querySelector('.close-sidenav');
			
			closeSideNav.click();
		}
		const iframe = iFrameID.cloneNode();
		
		iframe.src = href + 'index.htm';
		iFrameID.parentNode.appendChild(iframe);
		iFrameID.parentNode.removeChild(iFrameID);
		
		
		requestAnimationFrame(() => {			
			updateSourceTabs(href, pop);
		});
	};
	
	// init tabs and toggle buttons
	
	const frameworkItems = document.querySelectorAll('.framework a');	
	const tabItems = document.querySelectorAll('#sourceTabs .tab-item');
	const selector = document.querySelector('#sourceTabs .tab-item-selector');
		
	for (let i = 0; i < frameworkItems.length; i++ ){
		frameworkItems[i].addEventListener('click', function(event) {
			frameworkItems[0].classList.remove('active');
			frameworkItems[1].classList.remove('active');
		
			this.classList.add('active');
		
			if (this.innerHTML === "Angular") {
				window.framework = "angular";
				tabItems[0].style.display = "none";
				tabItems[1].style.display = "none";
				tabItems[2].style.display = "none";
				tabItems[3].style.display = "";
				tabItems[4].style.display = "";
				tabItems[5].style.display = "";
				tabItems[3].dispatchEvent(new MouseEvent('click'));								
			}
			else {
				window.framework = "";
				tabItems[3].style.display = "none";
				tabItems[4].style.display = "none";
				tabItems[5].style.display = "none";
				tabItems[0].style.display = "";
				tabItems[1].style.display = "";
				tabItems[2].style.display = "";
				tabItems[0].dispatchEvent(new MouseEvent('click'));
			}
			
			let currentAnchor = document.querySelector('.nav-right a.current');
			
			if (!currentAnchor) {
				currentAnchor = document.querySelector('.nav-right a')
			}
			
			if (currentAnchor && currentAnchor.href) {
				updateSourceTabs(currentAnchor.href.replace('https://www.htmlelements.com', ''));
			}
		});
	}
	
	selector.style.left = tabItems[0].offsetLeft +'px';	
	selector.style.width = tabItems[0].offsetWidth + 'px';
	
	for(let i = 0; i < tabItems.length; i++) {
		tabItems[i].addEventListener('click', function(event) {
			for(let j = 0; j < tabItems.length; j++) {
				tabItems[j].classList.remove('active');
			}
			
			this.classList.add('active');
			
			selector.style.left = this.offsetLeft +'px';	
			selector.style.width = this.offsetWidth + 'px';

			var event = new CustomEvent('change', { detail: {index: Array.prototype.slice.call(tabItems).indexOf(this) }});
			
			document.querySelector('#sourceTabs').dispatchEvent(event);
		});
	}	
	
	const buttons = document.querySelectorAll('.device-button');
	
	for(let i = 0; i < buttons.length; i++) {
		const button = buttons[i];
		
		button.checked = false;
		
		if (button.hasAttribute('checked')) {
			button.checked = true;
		}
		
		button.addEventListener('click', function(event) {
			if (this.hasAttribute('checked')) {
				this.removeAttribute('checked');
				this.checked = false;
			}
			else {
				this.setAttribute('checked', '');
				this.checked = true;
			}
			
			var event = new CustomEvent('change', {detail: {value: this.checked}});
			this.dispatchEvent(event);
		});	
	}
	
	tabs.addEventListener('change', function(event) {
		let index = event.detail.index;
		
		indexjs.style.display = 'none';
		indexhtm.style.display = 'none';
		styles.style.display = 'none';
		
		if (index === 0 || index === 3) {
			indexjs.style.display = 'block';
		}
		
		if (index === 1 || index === 4) {
			indexhtm.style.display = 'block';
		}
		
		if (index === 2 || index === 5) {
			styles.style.display = 'block';
		}	
	});
	
    const osButtons = document.querySelectorAll('.os .device-button');
	const deviceButtons = document.querySelectorAll('.device .device-button');
	const settingsButtons = document.querySelectorAll('.settings .device-button');

	const updateFrame = function () {
		let os = 'web';
		let device = 'desktop';
		let orientation = 'portrait';

		if (osButtons[1].checked) {
			os = 'android';
		}

		if (osButtons[2].checked) {
			os = 'ios';
		}

		if (deviceButtons[1].checked) {
			device = 'phone';
		}

		if (deviceButtons[2].checked) {
			device = 'phone';
			orientation = 'landscape';
		}

		if (deviceButtons[3].checked) {
			device = 'tablet';
		}

		if (deviceButtons[4].checked) {
			device = 'tablet';
			orientation = 'landscape';
		}

		if (device === 'desktop') {
			osButtons[0].classList.add('hidden');
			osButtons[1].classList.add('hidden');
			osButtons[2].classList.add('hidden');
			osButtons[0].checked = true;
			osButtons[0].setAttribute('checked', '');
			os = 'web';
		}
		else {
			osButtons[1].classList.remove('hidden');
			osButtons[2].classList.remove('hidden');
			if (osButtons[0].checked) {
				osButtons[1].checked = true;
				osButtons[1].setAttribute('checked', '');
				os = 'android';
			}
		}

		const demoDevice = document.querySelector('.demo-device');

		demoDevice.className = 'demo-device demo-device-' + device + ' demo-' + orientation + '-' + os;
		
		
		resizeIframe();

	}

	updateFrame();

	const toggleHandler = function (toggleButtons) {
		for (let i = 0; i < toggleButtons.length; i++) {
			const toggleButton = toggleButtons[i];
			toggleButtons.isUpdating = false;

			(function (toggleButton) {
				toggleButton.addEventListener('change', function (event) {
					if (event.detail.value) {
						toggleButtons.isUpdating = true;
						for (let i = 0; i < toggleButtons.length; i++) {
							if (toggleButtons[i] !== toggleButton) {
								toggleButtons[i].checked = false;
								toggleButtons[i].removeAttribute('checked');
							}
						}
						toggleButtons.isUpdating = false;

						updateFrame();
					}
					else if (!toggleButtons.isUpdating) {
						toggleButton.checked = true;
						toggleButton.setAttribute('checked', '');
					}
				});
			})(toggleButton);
		}
	}

	toggleHandler(osButtons);
	toggleHandler(deviceButtons);
	toggleHandler(settingsButtons);
});
  window.onresize = function() {
	resizeIframe();
  }
   window.addEventListener('orientationchange', function() {
	resizeIframe();
   });
   window.addEventListener('orientationchanged', function() {
	resizeIframe();
   });
  
    var demoItems = document.querySelectorAll('[demo-key]');
	var toggleSubItems = function(item, itemKey) {
	   item.addEventListener('click', function() {
			var subItems = document.querySelectorAll('[demo-root=' + itemKey + ']');
			if (item.classList.contains('closed')) {
				for(let j = 0; j < subItems.length; j++) {
					subItems[j].classList.remove('closed');
					
					if (subItems[j].querySelector('a')) {
						subItems[j].querySelector('a').classList.add('ripple');  
					}
				}
				item.classList.remove('closed');
			}
			else {
				for(let j = 0; j < subItems.length; j++) {
					subItems[j].classList.add('closed');

					if (subItems[j].querySelector('a')) {
						subItems[j].querySelector('a').classList.remove('ripple');  
					}
				}
				item.classList.add('closed');
			} 
		 });
	}
	
   for (let i = 0; i < demoItems.length; i++){
	   var item = demoItems[i];
	   var itemKey = item.getAttribute('demo-key');
	   	
		toggleSubItems(item, itemKey);
   }
  
  function loadIframe() {
	 resizeIframe();
	 
	if (document.body.classList.contains('dark-mode')) {
		document.querySelector('iframe').contentDocument.body.setAttribute('theme','dark');
		document.querySelector('iframe').contentDocument.body.classList.add('dark-mode');	
		var setTheme = function() {
			var theme = document.querySelector('iframe').contentDocument.body.getAttribute('theme');
				
			Array.prototype.slice.call(document.querySelector('iframe').contentDocument.body.querySelectorAll('*')).filter(function (el) { 
			 if (el.tagName.match(/^smart-/i)) {
				if (theme) {
					el.setAttribute('theme', theme);
				}
				else {
					el.removeAttribute('theme');
				}
			 }
			});
		}
		setTheme();
	}
  }
  
  function updateSize() {
	let adminBarHeight = document.getElementById("wpadminbar") ? document.getElementById("wpadminbar").offsetHeight : 0;
  	if (!adminBarHeight) {
		adminBarHeight = 0;
	}

	if (document.body.offsetWidth > 1024) {
		var nav = document.getElementById("mobile-nav");
		
		if (nav) {
			nav.removeAttribute('checked');
		}
	}
	
	document.querySelector('.wide-sidebar').style.top = adminBarHeight + "px";
		
	const mobileSecNav = document.querySelector('.mobile-sec-nav ');
		
	if ( window.getComputedStyle(mobileSecNav).display !== 'none') {
	  document.querySelector('.nav-main').style.height = window.innerHeight - 160 - adminBarHeight +'px';
   }
   else {
	  document.querySelector('.nav-main').style.height = 'auto';
   }
	   
   if (window.location.pathname === "demos" || window.location.pathname === "/demos/" || window.location.pathname === "demos/") {
		return;
	}
	
	document.querySelector('.wide-content').style.height = window.innerHeight - 70 - adminBarHeight +'px';
	document.querySelector('.wide-sidebar').style.height = window.innerHeight - 70 - adminBarHeight +'px';
	document.querySelector('.nav-main').style.height = window.innerHeight - 230 - adminBarHeight +'px';
	document.querySelector('.mobile-sec-nav').style.top = 70 + adminBarHeight + 'px';
	document.querySelector('.wide-sidebar').style.top = 70 + adminBarHeight + 'px';
 }
 
  function resizeIframe() {
	  document.querySelector('.wide-content').style.overflow = "";
	  var iFrameID = document.querySelector('iframe');
	  var loader = document.querySelector('.loader');
	  
	  if (loader){
		loader.style.display = "none";
	  }
	  
	 const demoDevice = document.querySelector('.demo-device');

      if(iFrameID) {        
			// here you can make the height, I delete it first, then I make it again
            iFrameID.style.visibility = "visible";
  		    iFrameID.height = "";
			if (iFrameID.contentWindow && iFrameID.contentWindow.document && iFrameID.contentWindow.document.body) {
				iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + 150 + "px";
			}
			
			if (demoDevice.className.indexOf('web') === -1) {
				iFrameID.height = '100%';
			}
		} 
		
		updateSize();
  }
   
   
 function submitToCodepen () {
	let css_external = [
		'https://www.htmlelements.com/demos/source/styles/smart.default.css',
		'https://www.htmlelements.com/demos/styles/demos.css',
		'https://www.htmlelements.com/demos/styles/common.css'
	];
	let js_external = [
		'../../scripts/webcomponents-lite.js',	
		'https://www.htmlelements.com/demos/scripts/common.js',
		'https://www.htmlelements.com/demos/scripts/data.js',
		'https://www.htmlelements.com/demos/source/smart.element.js',
		'https://www.htmlelements.com/demos/source/smart.elements.js'
	];
	let title = document.title;

	const codepen = document.getElementById("codepen");
	const htmlcontent = document.getElementById('indexhtmvalue').value;
	const jscontent = document.getElementById('indexjsvalue').querySelector('pre');
	const js = jscontent ? jscontent.innerHTML : '<pre>// your code here</pre>';
	const html = htmlcontent.match(/<body[^>]*>((.|[\n\r])*)<\/body>/i)[1];
	const css = "html, body { padding: 10px; }\n\n" + document.getElementById('stylesvalue').innerHTML.trim();
	  
	data = {
		title: title,
		html: html,
		css: css,
		js: js,
		css_external:css_external.join(";"),
		js_external: js_external.join(";")
	};

	content = JSON.stringify(data);
	
	content = content.replace(/&lt;/ig, '<');
	content = content.replace(/&gt;/ig, '>');
	content = content.replace(/&amp;/ig, '&');
	
	codepen.querySelector('input').value = content;
	codepen.submit();

}

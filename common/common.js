function applyDemoTheme() 
{
    let theme = 'material';

    let themestart = window.location.toString().indexOf('?');
    let hasTheme = true;
	
	if (themestart == -1) {
		hasTheme = false;
    }

	if (hasTheme) {
		theme = window.location.toString().substring(1 + themestart);
    
		if (theme.indexOf('(') >= 0) {
			theme = theme.substring(1);
		}
		if (theme.indexOf(')') >= 0) {
			theme = theme.substring(0, theme.indexOf(')'));
		}
	}
    let url = "https://www.htmlelements.com/demos/source/styles/smart." + theme + '.css'; 
    let hasStyle = false;
	 
	for (let i = 0; i < document.styleSheets.length; i++) {
		const stylesheet = document.styleSheets[i];
		
		if (stylesheet.href != undefined && stylesheet.href.indexOf && stylesheet.href.indexOf(theme) !== -1) {
			hasStyle = true;
			break;
		}
	}

	if (!hasStyle) {
		let link = document.createElement('link');
		
		link.setAttribute('rel', 'stylesheet');
		link.setAttribute('href', url);
		link.setAttribute('media', 'screen');
		
	//	document.head.appendChild(link);			  
	}
	
	if (!window.Smart) {
		window.Smart = {};
	}

	Smart.Theme = theme;	
}

var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (iOS) {
	document.addEventListener('touchmove', function (event) {
	  if (event.scale !== 1) { event.preventDefault(); }
	}, { passive: false });
}

//applyDemoTheme();

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    'use strict';
	    flipCover({
	        css: 'dribbble',
	        url: 'https://google.com',
	        text: 'vveleva',
	        width: '80px',
	    });
	    flipCover('twiter', {
	        url: 'https://google.com',
	        text: 'vveleva',
	        width: '80px'
	    });
	    flipCover('linkedin', {
	        url: 'https://google.com',
	        text: 'vveleva',
	        width: '80px'
	    });
	    flipCover('email', {
	        text: 'vvveleva @gmail',
	        width: '80px',
	        height: '50px'
	    });
	
	    function flipCover(css, options = {}) {
	        options = options || {};
	        if (typeof css === 'object') {
	            options = css;
	        } else {
	            options.css = css;
	        }
	        css = options.css;
	        let url = options.url;
	        let text = options.text || css;
	        let width = options.width;
	        let height = options.height;
	        let section = document.querySelector('.flip-cover-' + css);
	        section.classList.add(css + '-section');
	        let button = document.createElement('div');
	        button.classList.add(css + '-button');
	        button.style.width = '100%';
	        button.style.height = '100%';
	        let link = document.createElement('a');
	        if (url) {
	            link.setAttribute('href', url);
	        }
	        let smartButton = document.createElement('smart-button');
	        smartButton.innerHTML = text;
	        link.appendChild(smartButton);
	        button.appendChild(link);
	        let cover = document.createElement('div');
	        cover.classList.add(css + '-cover');
	        if (width) {
	            section.style.width = width;
	        }
	        let outer = document.createElement('div');
	        outer.classList.add(css + '-outer');
	        let inner = document.createElement('div');
	        inner.classList.add(css + '-inner');
	        if (height) {
	            section.style.height = height;
	            let lineHeight = ':after{line - height: ' + height + ';}';
	            let outerStyle = document.createElement('style');
	            outerStyle.innerHTML = '.' + css + '-outer' + lineHeight;
	            outer.appendChild(outerStyle);
	            let innerStyle = document.createElement('style');
	            innerStyle.innerHTML = '.' + css + '-inner' + lineHeight;
	            inner.appendChild(innerStyle);
	        }
	        cover.appendChild(outer);
	        cover.appendChild(inner);
	        section.appendChild(button);
	        section.appendChild(cover);
	    }
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="button-demo flipcover-buttons">
			        <label>FlipCover Buttons</label>
			        <div className="demo-buttons-group">
			            <div className="flip-cover-dribbble"></div>
			            <br />
			            <br />
			            <div className="flip-cover-twiter"></div>
			            <br />
			            <br />
			            <div className="flip-cover-linkedin"></div>
			            <br />
			            <br />
			            <div className="flip-cover-email"></div>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

import "../smart.element.js";
import "../smart.button.js";
import "../smart.scrollbar.js";
import "../smart.splitter.js";

export class smartSplitter extends Smart.Component {
	get name() {
		return 'smartSplitter';
	}		
}

export class smartSplitterItem extends Smart.Component {
	get name() {
		return 'smartSplitterItem';
	}	
}
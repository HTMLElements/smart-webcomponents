import "../smart.element.js";
import "../smart.button.js";
import "../smart.scrollbar.js";
import "../smart.menu.js";

export class smartMenuItem extends Smart.Component {
	get name() {
		return 'smartMenuItem';
	}		
}

export class smartMenuItemsGroup extends Smart.Component {
	get name() {
		return 'smartMenuItemsGroup';
	}		
}

export class smartMenu extends Smart.Component {
	get name() {
		return 'smartMenu';
	}		
}

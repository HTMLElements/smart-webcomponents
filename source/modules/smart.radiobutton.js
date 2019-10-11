import "../smart.element.js";
import "../smart.button.js";
import "../smart.powerbutton.js";
import "../smart.radiobutton.js";
import "../smart.checkbox.js";
import "../smart.dropdownbutton.js";
import "../smart.switchbutton.js";

export class smartButton extends Smart.Component {
	get name() {
		return 'smartButton';
	}						
}

export class smartToggleButton extends Smart.Component {
	get name() {
		return 'smartToggleButton';
	}		
}

export class smartRepeatButton extends Smart.Component {
	get name() {
		return 'smartRepeatButton';
	}		
}

export class smartSwitchButton extends Smart.Component {
	get name() {
		return 'smartSwitchButton';
	}		
}

export class smartCheckBox extends Smart.Component {
	get name() {
		return 'smartCheckBox';
	}	
};
export class smartPowerButton extends Smart.Component{
	get name() {
		return 'smartPowerButton';
	}	
};
export class smartRadioButton extends Smart.Component{
	get name() {
		return 'smartRadioButton';
	}	
};
export class smartDropDownButton extends Smart.Component{
	get name() {
		return 'smartDropDownButton';
	}	
};

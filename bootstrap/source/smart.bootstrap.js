

Smart('bootstrap-button', class Button extends Smart.ContentElement {
	// Button's properties.
	static get properties() {
		return {
			'value': {
				type: 'string'
			},
			'name': {
				type: 'string'
			},
			'type': {
				type: 'string'
			},
			'styleMode': {
				value: 'primary',
				type: 'string'
			},
			'outlined': {
				value: false,
				type: 'boolean'
			},
			'sizeMode': {
				value: '',
				allowedValue: ['lg', 'sm', ''],
				type: 'string'
			}
		};
	}

	/** Button's template. */
	template() {
		return '<button inner-h-t-m-l=\'[[innerHTML]]\' id=\'button\' type=\'[[type]]\' name=\'[[name]]\' value=\'[[value]]\' disabled=\'[[disabled]]\' role=\'button\'></button>';
	}

	ready() {
		const that = this;

		that.render();
	}

	render() {
		const that = this;

		if (that.classList.contains('close')) {
			that.$.button.classList.add('close');
			return;
		}
		
		that.$.button.className = 'btn';

		if (that.outlined) {
			that.$.button.classList.add('btn-outline-' + that.styleMode);
		}
		else {
			that.$.button.classList.add('btn-' + that.styleMode);
		}

		if (that.sizeMode !== '') {
			that.$.button.classList.add('btn-' + that.sizeMode);
		}
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;

		that.render();
	}
});

Smart('bootstrap-check-box', class CheckBox extends Smart.ContentElement {
	// Button's properties.
	static get properties() {
		return {
			'checked': {
				value: false,
				type: 'boolean'
			},
			'indeterminate': {
				value: false,
				type: 'boolean'
			},
			'name': {
				type: 'string'
			},
			'styleMode': {
				value: 'secondary',
				type: 'string'
			},
			'type': {
				value: 'checkbox',
				type: 'string'
			}
		};
	}

	/**
	* CheckBox's Event Listeners
	*/
	static get listeners() {
		return {
			'click': 'toggle',
			'input.focus': 'focus',
			'input.blur': 'blur'
		};
	}

	/** CheckBox's template. */
	template() {
		return `<div><div id="button" class="btn">
				 	<input indeterminate=[[indeterminate]] checked=[[checked]] id="input" type="checkbox" name=\'[[name]]\' autocomplete="off"/>
				 	<label id="label"><span><content></content></span></label>
			   </div></div>`;
	}

	ready() {
		const that = this;

		that.$.button.classList.add('component');
		that.$.label.classList.add('component-label');
		that.$.input.classList.add('component-input');	
			
		that.$.button.classList.remove('btn');
		that.$.button.classList.remove('switch');
		that.$.button.classList.remove('checkbox');
		that.$.button.classList.remove('radio');
				
		if (that.type === 'switch') {
			that.$.button.classList.add('switch');
		}
			
		if (that.type === 'button') {
			that.$.button.classList.add('btn');
			that.$.button.classList.add('btn-' + that.styleMode);
		}
		
		if (that.type === 'checkbox') {
			that.$.button.classList.add('checkbox');
		}
		
		if (that.type === 'radio') {
			that.$.button.classList.add('radio');
			that.$.input.type = "radio";
		}
		
		if (!(that instanceof Smart.Bootstrap.ToggleButton)) {
			that.classList.add('btn-group-toggle');
		}
			
		if (that.checked) {
			that.$.button.classList.add('active');
		}
		else {
			that.$.button.classList.remove('active');
		}
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;

		if (propertyName === 'checked') {
			that.toggle();
		}
	}

	toggle(event) {
		const that = this;
		const input = that.querySelector('input');

		if (event) {
			event.preventDefault()
		}
		
		if (that.disabled) {
			return;
		}

		if (that.indeterminate) {
			that.indeterminate = false;
		}

		if (that.checked) {
			that.$.button.classList.remove('active');
			that.checked = false;
		}
		else {
			if (that instanceof Smart.Bootstrap.RadioButton) {
				const buttons = document.querySelectorAll('bootstrap-radio-button');

				for (let i = 0; i < buttons.length; i++) {
					if (buttons[i].group === that.group) {
						buttons[i].set('checked', false);
						buttons[i].$.button.classList.remove('active');
					}
				}
			}
			
			that.$.button.classList.add('active');
			that.checked = true;
		}

		that.$.fireEvent('change');
		input.focus();
	}

	dispose() {
		const that = this;

		if (that.parentElement) {
			that.parentElement.removeChild(that);
		}
	}

	blur() {
		this.$.button.classList.remove('focus');
	}

	focus() {
		this.$.button.classList.add('focus');
	}
});

Smart('bootstrap-switch-button', class SwitchButton extends Smart.Bootstrap.CheckBox {
	// Button's properties.
	static get properties() {
		return {
			'type': {
				value: 'switch',
				type: 'string'
			}
		};
	}
});

Smart('bootstrap-toggle-button', class ToggleButton extends Smart.Bootstrap.CheckBox {
	// Button's properties.
	static get properties() {
		return {
			'styleMode': {
				value: 'primary',
				type: 'string'
			},
			'type': {
				value: 'button',
				type: 'string'
			}
		};
	}

	static get listeners() {
		return {
			'click': 'toggle',
			'button.focus': 'focus',
			'button.blur': 'blur'
		};
	}

template() {
		return `<div><div id="button" class="btn">
				 	<input class="hide"  indeterminate=[[indeterminate]] checked=[[checked]] id="input" type="checkbox" name=\'[[name]]\' autocomplete="off"/>
				 	<label id="label"><content></content></label>
			   </div></div>`;
	}
	
	toggle(event) {
		const that = this;

		if (event) {
			event.preventDefault()
		}

		if (that.disabled) {
			return;
		}


		if (that.checked) {
			if (that instanceof Smart.Bootstrap.RadioButton) {
				that.$.button.focus();
				return;
			}

			that.$.button.classList.remove('active');
			that.set('checked', false);
		}
		else {
			that.$.button.classList.add('active');
			that.set('checked', true);
		}

		that.$.fireEvent('change');
		that.$.button.focus();
		that.$.button.setAttribute('area-pressed', that.checked);
	}
});

Smart('bootstrap-radio-button', class RadioButton extends Smart.Bootstrap.CheckBox {
	// Button's properties.
	static get properties() {
		return {
			'styleMode': {
				value: 'secondary',
				type: 'string'
			},
			'group': {
				value: '',
				type: 'string'
			},
			'type': {
				value: 'radio',
				type: 'string'
			}
		};
	}
});

Smart('bootstrap-drop-down', class DropDown extends Smart.ContentElement {

	// DropDown's properties.
	static get properties() {
		return {
			'styleMode': {
				value: 'secondary',
				type: 'string'
			},
			'label': {
				value: '',
				type: 'string'
			},
			'labelType': {
				allowedValues: ['a', 'button'],
				value: 'button',
				type: 'string'
			},
			'href': {
				value: '#',
				type: 'string'
			},
			'opened': {
				value: false,
				type: 'boolean'
			},
			'outlined': {
				value: false,
				type: 'boolean'
			},
			'dropDownPosition': {
				allowedValues: ['auto', 'top', 'bottom', 'left', 'right', 'custom'],
				value: 'auto',
				type: 'string'
			},
			'customDropDownPositionCallback': {
				value: null,
				type: 'function'
			},
			'sizeMode': {
				value: '',
				allowedValue: ['lg', 'sm', ''],
				type: 'string'
			}
		};
	}

	/**
	* CheckBox's Event Listeners
	*/
	static get listeners() {
		return {
			'document.click': '_clearMenus',
			'document.keyup': '_clearMenus',
			'button.keydown': '_dataApiKeydownHandler',
			'container.click': '_clickHandler',
			'dropDownContainer.click': '_clickHandler',
			'keydown': '_dataApiKeydownHandler'
		};
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;


		if (propertyName === 'styleMode' || propertyName === 'sizeMode') {
			that.$.button.classList.remove('button-' + oldValue);

			if (propertyName === 'styleMode') {
				that.$.button.classList.remove('button-outline-' + newValue);

				if (that.$.actionButton) {
					that.$.actionButton.classList.remove('button-outline-' + oldValue);
				}

				if (propertyName === 'outlined') {
					that.$.button.classList.add('button-outline-' + newValue);

					if (that.$.actionButton) {
						that.$.actionButton.classList.add('button-outline-' + newValue);
					}
				}
				else {
					that.$.button.classList.add('button-' + newValue);

					if (that.$.actionButton) {
						that.$.actionButton.classList.add('button-' + newValue);
					}
				}
			}
			else {
				that.$.button.classList.add('button-' + newValue);

				if (that.$.actionButton) {
					that.$.actionButton.classList.remove('button-' + oldValue);
					that.$.actionButton.classList.add('button-' + newValue);
				}
			}
		}
		else if (propertyName === 'dropDownPosition') {
			that._positionDetection.dropDownPositionChangedHandler();
			that._setArrowPosition();
		}
		else if (propertyName === 'opened') {
			newValue ? that.show() : that.hide();
		}
		else if (propertyName === 'labelType') {
			that.$.button.outerHTML = that.$.button.outerHTML.replace('<' + oldValue + ' ', '<' + newValue + ' ').replace('</' + oldValue + '>', '</' + newValue + '>');
			that.$.button = that.querySelector('[smart-id="button"]');

			if (newValue === 'a') {
				that.$.button.setAttribute('href', that.href);
			}
			else {
				that.$.button.classList.add('button');
				that.$.button.removeAttribute('href');
			}
		}
		else if (propertyName === 'href' && that.labelType === 'a') {
			that.$.button.setAttribute('href', newValue);
		}
	}

	/** CheckBox's template. */
	template() {
		return `<div class="dropdown btn-group" id="container">
					<button id="button" class="btn dropdown-toggle" data-toggle="dropdown">[[label]]</button>
					<div id="dropDownContainer" class="dropdown-menu"><content></content></div>
				</div>`;
	}

	ready() {
		const that = this;

		that.ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
		that.SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key
		that.TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key
		that.ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
		that.ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
		that.RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)
		that.REGEXP_KEYDOWN = new RegExp(`${that.ARROW_UP_KEYCODE}|${that.ARROW_DOWN_KEYCODE}|${that.ESCAPE_KEYCODE}`);

		if (that.labelType === 'a') {
			that.$.button.outerHTML = that.$.button.outerHTML.replace('<button ', '<a ').replace('</button>', '</a>');
			that.$.button = that.querySelector('[smart-id="button"]');
			that.$.button.setAttribute('href', that.href);
			that.$.button.classList.remove('btn');
		}

		if (!that.dropDownAppendTo) {
			that.dropDownAppendTo = that.$.container;
		}

		that._positionDetection = new Smart.Utilities.PositionDetection(that, that.$.dropDownContainer, that.$.container, 'hide');
		that._positionDetection.getDropDownParent(true);
		that._positionDetection.handleAutoPositioning();
		that._positionDetection.setDropDownPosition();
		that._positionDetection.customPositionDropDown = that._customPositionDropDown.bind(that);

		that._setArrowPosition();

		if (that.styleMode) {
			if (that.outlined) {
				that.$.button.classList.add('btn-outline-' + that.styleMode);
			}
			else {
				that.$.button.classList.add('btn-' + that.styleMode);
			}
		}

		if (that.sizeMode) {
			that.$.button.classList.add('btn-' + that.sizeMode);
		}

		if (that.$.actionButton) {
			if (that.outlined) {
				that.$.actionButton.classList.add('btn-outline-' + that.styleMode);
			}
			else {
				that.$.actionButton.classList.add('btn-' + that.styleMode);
			}

			if (that.sizeMode) {
				that.$.actionButton.classList.add('btn-' + that.sizeMode);
			}
		}

		if (that.opened) {
			that.$.dropDownContainer.classList.add('show');
			that.$.container.classList.add('show');
			that.set('opened', true);
		}
	}

	// Public
	toggle() {
		const that = this;

		if (that.disabled || that.classList.contains('disabled')) {
			return
		}

		const isHidden = !that.opened;

		that._clearMenus();

		if (isHidden) {
			that.show();
		}
	}

	show() {
		const that = this;

		if (that.disabled || that.classList.contains('disabled') || that.$.dropDownContainer.classList.contains('show')) {
			return
		}

		const isDefaultPrevented = that.$.fireEvent('show').defaultPrevented;

		if (isDefaultPrevented) {
			return
		}

		that.setAttribute('aria-expanded', true);

		that.$.dropDownContainer.classList.add('show');
		that.$.container.classList.add('show');
		that.set('opened', true);

		if (that.customDropDownPositionCallback) {
			that.customDropDownPositionCallback(that.$.dropDownContainer);
		}
		else {
			that._positionDetection.checkBrowserBounds('vertically');
			that._positionDetection.positionDropDown();
			that._positionDetection.checkBrowserBounds('horizontally');
			that.$.dropDownContainer.setAttribute('x-placement', that._dropDownListPosition + '-start');
		}

		that.$.fireEvent('shown');

		that.$.button.focus();
	}

	_setArrowPosition() {
		const that = this;

		that.$.container.classList.remove('dropup');
		that.$.container.classList.remove('dropleft');
		that.$.container.classList.remove('dropright');

		if (that.dropDownPosition !== 'auto') {
			switch (that._dropDownListPosition) {
				case 'top':
					that.$.container.classList.add('dropup');
					break;
				case 'right':
					that.$.container.classList.add('dropright');
					break;
				case 'left':
					that.$.container.classList.add('dropleft');
					break;
			}
		}

		if (that._repositionButtons) {
			that._repositionButtons();
		}
	}

	hide() {
		const that = this;

		if (that.disabled || that.classList.contains('disabled') || !that.$.dropDownContainer.classList.contains('show')) {
			return
		}

		const isDefaultPrevented = that.$.fireEvent('hide').defaultPrevented;

		if (isDefaultPrevented) {
			return
		}

		that.removeAttribute('aria-expanded', true);

		that.$.dropDownContainer.classList.remove('show');
		that.$.container.classList.remove('show');
		that.set('opened', false);

		that.$.fireEvent('hidden');

		that.$.button.focus()
	}

	dispose() {
		const that = this;

		if (that.parentElement) {
			that.parentElement.removeChild(that);
		}
	}

	_dataApiKeydownHandler(event) {
		const that = this;

		if (/input|textarea/i.test(event.target.tagName)
			? event.which === that.SPACE_KEYCODE || event.which !== that.ESCAPE_KEYCODE &&
			(event.which !== that.ARROW_DOWN_KEYCODE && event.which !== that.ARROW_UP_KEYCODE ||
				event.target.closest('.dropdown-menu')) : !that.REGEXP_KEYDOWN.test(event.which)) {
			return
		}

		event.preventDefault()
		event.stopPropagation()

		if (this.disabled || that.classList.contains('disabled')) {
			return
		}

		const isActive = that.opened;

		if (!isActive || isActive && (event.which === that.ESCAPE_KEYCODE || event.which === that.SPACE_KEYCODE)) {
			if (event.which === that.ESCAPE_KEYCODE) {
				that.$.button.focus(event);
			}


			that._clickHandler(event);
			return
		}

		const items = [].slice.call(that.querySelectorAll('.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'));

		if (items.length === 0) {
			return
		}

		let index = items.indexOf(event.target)

		if (event.which === that.ARROW_UP_KEYCODE && index > 0) { // Up
			index--;
		}

		if (event.which === that.ARROW_DOWN_KEYCODE && index < items.length - 1) { // Down
			index++;
		}

		if (index < 0) {
			index = 0
		}

		items[index].focus()
	}

	_clickHandler(event) {
		event.stopPropagation();

		if (event.target.closest('.dropdown-menu') || event.target.closest('.dropdown-toggle')) {
			event.preventDefault();
			this.toggle();
		}
	}

	_getParentFromElement(element) {
		return element.closest('bootstrap-drop-down');
	}

	_clearMenus(event) {
		const that = this;

		if (event && (event.which === that.RIGHT_MOUSE_BUTTON_WHICH ||
			event.type === 'keyup' && (event.which !== that.TAB_KEYCODE && event.which !== that.ESCAPE_KEYCODE))) {
			return
		}

		const toggles = [].slice.call(document.querySelectorAll('.dropdown-menu'))

		for (let i = 0, len = toggles.length; i < len; i++) {
			const parent = toggles[i].closest('bootstrap-drop-down') || toggles[i].closest('bootstrap-split-button');

			if (!parent) {
				continue;
			}

			const dropdownMenu = parent.$.dropDownContainer;

			if (!parent.opened) {
				continue
			}

			if (event && (event.type === 'click' &&
				/input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === that.TAB_KEYCODE) &&
				parent.contains(event.target)) {
				continue
			}

			const isDefaultPrevented = that.$.fireEvent('hide').defaultPrevented;

			if (isDefaultPrevented) {
				return
			}

			parent.setAttribute('aria-expanded', 'false');
			parent.$.container.classList.remove('show');
			parent.set('opened', false);
			dropdownMenu.classList.remove('show');

			parent.$.fireEvent('hidden');
		}
	}

	_customPositionDropDown() {
		const that = this,
			coordinates = that.$[that instanceof Smart.Bootstrap.SplitButton ? 'button' : 'container'].getBoundingClientRect(),
			dropDown = that.$.dropDownContainer;
		let top = coordinates.top,
			left = coordinates.left;

		switch (that._dropDownListPosition) {
			case 'bottom':
				top = coordinates.bottom;
				break;
			case 'top':
				top = coordinates.top - dropDown.offsetHeight;
				break;
			case 'left':
				top = coordinates.top;
				left -= dropDown.offsetWidth;
				break;
			case 'right':
				top = coordinates.top;
				left += coordinates.width;
				break;
		}

		return { left: left, top: top };
	}
});

Smart('bootstrap-split-button', class SplitButton extends Smart.Bootstrap.DropDown {

	/** CheckBox's template. */
	template() {
		return `<div class="dropdown btn-group" id="container">
					<div id="buttonGroup" class="btn-group"></div>
					<button id="actionButton" class="btn">[[label]]</button>
					<button id="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"></button>
					<div id="dropDownContainer" class="dropdown-menu"><content></content></div>
					</div>
				</div>`;
	}

	_repositionButtons() {
		const that = this,
			actionButton = that.$.actionButton,
			dropDown = that.$.dropDownContainer,
			button = that.$.button,
			container = that.$.container,
			buttonGroup = that.$.buttonGroup;

		//Reset
		actionButton.parentElement.removeChild(actionButton);
		button.parentElement.removeChild(button);
		dropDown.parentElement.removeChild(dropDown);

		container.appendChild(actionButton);
		container.appendChild(button);
		container.appendChild(dropDown);

		if (that.dropDownPosition === 'left' && !buttonGroup.contains(button)) {
			buttonGroup.appendChild(button);
			buttonGroup.appendChild(dropDown);
		}
		else if (that.dropDownPosition === 'right' && !buttonGroup.contains(actionButton)) {
			buttonGroup.appendChild(actionButton);
		}


		if (that.dropDownPosition !== 'left' && that.dropDownPosition !== 'right') {
			that.$.container.removeChild(buttonGroup);
		}
		else if (!buttonGroup.parentElement) {
			that.$.container.insertBefore(buttonGroup, actionButton);
		}
	}
});

Smart('bootstrap-input-group', class InputGroup extends Smart.ContentElement {
	// Element's properties.
	static get properties() {
		return {
			'contentBefore': {
				value: '',
				type: 'string'
			},
			'contentAfter': {
				value: '',
				type: 'string'
			},
			'type': {
				value: 'text',
				type: 'string'
			},
			'name': {
				value: '',
				type: 'string'
			},
			'placeholder': {
				value: '',
				type: 'string'
			},
			'styleMode': {
				value: '',
				type: 'string'
			},
			'noWrap': {
				value: false,
				type: 'boolean'
			},
			'sizeMode': {
				value: '',
				allowedValue: ['lg', 'sm', ''],
				type: 'string'
			},
			'value': {
				value: '',
				allowedValue: [],
				type: 'string'
			}
		};
	}

	
	template() {
		return `<div class="input-group" id="container">
					<div id="prependContainer" class="input-group-prepend">[[contentBefore]]</div>
					<div id="contentContainer"><content></content></div>
					<div id="appendContainer" class="input-group-append">[[contentAfter]]</div>
				</div>`;
	}

	ready() {
		const that = this;

		that.noWrap ? that.$.container.classList.add('flex-nowrap') : that.$.container.classList.remove('flex-nowrap');
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;

		if (propertyName === 'noWrap') {
			newValue ? that.$.container.classList.add('flex-nowrap') : that.$.container.classList.remove('flex-nowrap');
		}
		else if (propertyName === 'value') {
			if (that.input) {
				that.input.value = newValue;
			}
			
			const inputs = that.$.inputContainer.querySelectorAll('.form-component');

			for (let i = 0; i < inputs.length; i++) {
				inputs[i][propertyName] = newValue;
			}
		}
		else if (propertyName === 'placeholder' || propertyName === 'name' || propertyName === 'type') {
			const inputs = that.$.inputContainer.querySelectorAll('.form-component');

			for (let i = 0; i < inputs.length; i++) {
				inputs[i][propertyName] = newValue;
			}
		}
		else if (propertyName === 'styleMode' || propertyName === 'sizeMode') {
			that.$.container.classList.remove('input-group-' + oldValue);
			that.$.container.classList.add('input-group-' + newValue);
		}
		else if (propertyName === 'contentBefore' || propertyName === 'contentAfter') {
			const container = that.$[propertyName === 'contentBefore' ? 'prependContainer' : 'appendContainer'];

			container.innerHTML = newValue;

			if (newValue && !container.parentElement) {
				propertyName === 'contentBefore' ? that.$.container.insertBefore(container, that.$.container.firstElementChild) : that.$.container.appendChild(container);
			}
			else if (!newValue) {
				that.$.container.removeChild(container);
			}
		}
	}

	render() {
		const that = this,
			container = that.$.contentContainer,
			prependContainer = that.$.prependContainer,
			appendContainer = that.$.appendContainer;
		let formControl = container.querySelector('.form-component');

		if (!formControl) {
			const input = document.createElement('input');

			input.type = that.type;
			input.placeholder = that.placeholder;
			input.name = that.name;
			input.value = that.value;
			input.classList.add('form-component');
			input.onchange = function() {
				that.value = input.value;
			}
			input.onkeyup = function() {
				that.value = input.value;
			}
			that.input = input;
			container.appendChild(input);
			formControl = input;
		}

		let previousEl = formControl.previousElementSibling;

		while (previousEl) {
			const pe = previousEl;

			if (pe === prependContainer) {
				break;
			}

			previousEl = previousEl.previousElementSibling;

			if (!pe.classList.contains('form-component')) {
				prependContainer.insertBefore(pe, prependContainer.firstElementChild);
			}
		}

		for(let i = 0; i < prependContainer.children.length; i++) {
			prependContainer.children[i].classList.add('input-group-item');
		}
			
		let nextEl = formControl.nextElementSibling;

		while (nextEl) {
			const nx = nextEl;

			if (nx === appendContainer) {
				break;
			}

			nextEl = nextEl.nextElementSibling;

			if (!nx.classList.contains('form-component')) {
				appendContainer.appendChild(nx);
			}
		}
		
		for(let i = 0; i < appendContainer.children.length; i++) {
			appendContainer.children[i].classList.add('input-group-item');
		}
	

		while (container.firstElementChild) {
			that.$.container.insertBefore(container.firstElementChild, appendContainer);
		}

		if (!appendContainer.children.length) {
			that.$.container.removeChild(appendContainer);
		}

		if (!prependContainer.children.length) {
			that.$.container.removeChild(prependContainer);
		}

		if (!container.children.length) {
			that.$.container.removeChild(container);
		}

		if (that.sizeMode) {
			that.$.container.classList.add('input-group-' + that.sizeMode);
		}

		if (that.styleMode) {
			that.$.container.classList.add('input-group-' + that.styleMode);
		}
	}
});

Smart('bootstrap-modal', class Modal extends Smart.ContentElement {
	// Element's properties.
	static get properties() {
		return {
			'sizeMode': {
				value: '',
				allowedValue: ['sm', '', 'lg', 'xl'],
				type: 'string'
			},
			'scrollable': {
				value: false,
				type: 'boolean'
			},
			'focusable': {
				value: true,
				type: 'boolean'
			},
			'centered': {
				value: false,
				type: 'boolean'
			},
			'opened': {
				value: false,
				type: 'boolean'
			},
			'backdrop': {
				allowedValues: ['static', 'default', 'none'],
				value: 'default',
				type: 'string'
			},
			'keyboard': {
				value: true,
				type: 'boolean'
			}
		};
	}

	/**
	* Element's Event Listeners
	*/
	static get listeners() {
		return {
			'keydown': '_keydownHandler',
			'click': '_clickHandler'
		};
	}

	
	template() {
		return `<div><div class="modal-dialog" id="dialog">
					<div class="modal-content" inner-h-t-m-l="[[innerHTML]]">
						<content></content>
				</div></div>`;
	}

	ready() {
		const that = this;
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;

		if (propertyName === 'focusable') {
			newValue ? that.setAttribute('tabindex', -1) : that.removeAttribute('tabindex');
		}
		else if (propertyName === 'scrollable' || propertyName === 'centered') {
			that.$.dialog.classList[newValue ? 'add' : 'remove']('modal-dialog-' + propertyName);
		}
		else if (propertyName === 'sizeMode') {
			that.$.dialog.classList.remove('modal-' + oldValue);
			that.$.dialog.classList.add('modal-' + newValue);
		}
	}

	render() {
		const that = this;

		that.classList.add('modal');
		that.$.dialog.classList[that.scrollable ? 'add' : 'remove']('modal-dialog-scrollable');
		that.$.dialog.classList[that.centered ? 'add' : 'remove']('modal-dialog-centered');

		if (that.sizeMode !== '') {
			that.$.dialog.classList.add('modal-' + that.sizeMode);
		}

		if (that.opened) {
			that.show(true);
		}

		that.setAttribute('tabindex', that.tabindex);
		super.render();
	}

	handleUpdate() {
		this._adjustDialog()
	}

	toggle() {
		return this.opened ? this.hide() : this.show();
	}

	show(initialization) {
		const that = this;

		if ((!initialization && that.opened) || that._isTransitioning) {
			return;
		}

		if (that.classList.contains('fade')) {
			this._isTransitioning = true;
		}

		const isDefaultPrevented = that.$.fireEvent('show').defaultPrevented;

		if (isDefaultPrevented) {
			return
		}

		that.set('opened', true);

		// that._checkScrollbar()
		that._setScrollbar();

		that._adjustDialog();

		that._setResizeEvent();

		that._showBackdrop(() => that._showElement());
	}

	hide(event) {
		const that = this;

		if (event) {
			event.preventDefault()
		}

		if (!that.opened || that._isTransitioning) {
			return
		}

		const isDefaultPrevented = that.$.fireEvent('hide').defaultPrevented;

		if (isDefaultPrevented) {
			return
		}

		that.set('opened', false);

		const transition = that.classList.contains('fade');

		if (transition) {
			that._isTransitioning = true;
		}

		that._setResizeEvent();
		//off focusin

		that.classList.remove('show');

		if (transition) {
			that.addEventListener('transitionend', (event) => that._hideModal(event), { once: true });
		}
		else {
			that._hideModal();
		}
	}

	dispose() {
		const that = this;

		if (that.parentElement) {
			that.parentElement.removeChild(that);
		}

		window.removeEventListener('resize', that._windowResizeHandler);
		document.removeEventListener('focusin', that._forceFocusHandler);// Guard against infinite focus loop
	}

	_hideModal() {
		const that = this;

		that.style.display = 'none';
		that.setAttribute('aria-hidden', true)
		that.removeAttribute('aria-modal')
		that._isTransitioning = false
		that._showBackdrop(() => {
			document.body.classList.remove('modal-open');
			that.style.paddingLeft = ''
			that.style.paddingRight = ''
			// Restore fixed content padding
			const fixedContent = [].slice.call(document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'));

			fixedContent.forEach((index, element) => {
				const padding = element._paddingRight;

				delete element._paddingRight;
				element.style.paddingRight = padding ? padding : '';
			})

			// Restore sticky content
			const elements = [].slice.call(document.querySelectorAll('.sticky-top'));

			elements.forEach((index, element) => {
				const margin = element._marginRight;

				if (typeof margin !== 'undefined') {
					delete element._marginRight;
					element.style.marginRight = margin ? margin : '';
				}
			});

			// Restore body padding
			const padding = document.body._paddingRight;

			delete document.body._paddingRight;
			document.body.style.paddingRight = padding ? padding : ''

			that.$.fireEvent('hidden');
		})
	}

	_keydownHandler(event) {
		if (event.which === 27 && this.keyboard) {
			event.preventDefault()
			this.hide()
		}
	}

	_clickHandler(event) {
		const that = this;

		if (event.target.closest('[data-dismiss="modal"]')) {
			that.hide();
			return;
		}

		if (that._ignoreBackdropClick) {
			that._ignoreBackdropClick = false;
			return
		}
		if (event.target !== event.currentTarget) {
			return
		}

		if (that.backdrop === 'static') {
			that.focus();
			return;
		}

		that.hide()
	}

	_setScrollbar() {
		const that = this;
		const bodyRect = document.body.getBoundingClientRect();

		if (bodyRect.left + bodyRect.right < window.innerWidth) {
			// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
			//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
			const fixedContent = [].slice.call(document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'));
			const stickyContent = [].slice.call(document.querySelectorAll('.sticky-top'));

			// Adjust fixed content padding

			for (let i = 0; i < fixedContent.length; i++) {
				const element = fixedContent[i],
					calculatedPadding = parseFloat(getComputedStyle(element).getPropertyValue('padding-right')) || 0;

				element.style.paddingRight = (element._paddingRight = (calculatedPadding + that._getScrollbarWidth())) + 'px';
			}

			for (let i = 0; i < stickyContent.length; i++) {
				const element = stickyContent[i],
					calculatedMargin = parseFloat(getComputedStyle(element).getPropertyValue('margin-right')) || 0;

				element.style.marginRight = (element._marginRight = (calculatedMargin + that._getScrollbarWidth())) + 'px';
			}

			// Adjust body padding
			document.body._paddingRight = document.body.style.paddingRight;
			document.body.style.paddingRight = ((parseFloat(getComputedStyle(document.body).getPropertyValue('padding-right')) || 0) + that._getScrollbarWidth()) + 'px';
		}

		document.body.classList.add('modal-open');
	}

	_getScrollbarWidth() {
		const scrollDiv = document.createElement('div');

		scrollDiv.className = 'modal-scrollbar-measure';

		document.body.appendChild(scrollDiv);

		const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;

		document.body.removeChild(scrollDiv);

		return scrollbarWidth;
	}

	_adjustDialog() {
		const that = this,
			isModalOverflowing = that.scrollHeight > document.documentElement.clientHeight,
			bodyRect = document.body.getBoundingClientRect(),
			isBodyOverflowing = bodyRect.left + bodyRect.right < window.innerWidth;


		if (isBodyOverflowing && isModalOverflowing) {
			that.style.paddingLeft = that._getScrollbarWidth() + 'px';
		}

		if (isBodyOverflowing && !isModalOverflowing) {
			that.style.paddingRight = that._getScrollbarWidth() + 'px';
		}
	}

	_windowResizeHandler() {
		this._adjustDialog();
	}

	_setResizeEvent() {
		const that = this;

		if (that.opened) {
			window.addEventListener('resize', that._windowResizeHandler);
		}
		else {
			window.removeEventListener('resize', that._windowResizeHandler);
		}
	}

	_showElement() {
		const that = this;

		const transition = that.classList.contains('fade'),
			dialog = that.$.dialog;

		that.style.display = 'block';
		that.removeAttribute('aria-hidden');
		that.setAttribute('aria-modal', true);

		if (dialog.classList.contains('modal-dialog-scrollable')) {
			dialog.querySelector('.modal-body').scrollTop = 0
		}
		else {
			that.scrollTop = 0
		}

		if (transition) {
			that.offsetHeight;
		}

		that.classList.add('show')

		that._enforceFocus()

		const transitionComplete = () => {
			that.focus()
			that._isTransitioning = false;
			that.$.fireEvent('shown');
		}

		if (transition) {
			that.$.dialog.addEventListener('transitionend', transitionComplete, { once: true });
		}
		else {
			transitionComplete()
		}
	}

	_forceFocusHandler(event) {
		const that = this;

		if (document !== event.target && that !== event.target && !that.contains(event.target)) {
			event.preventDefault();
			that.hide();
		}
	}

	_enforceFocus() {
		const that = this;

		document.removeEventListener('focusin', that._forceFocusHandler);// Guard against infinite focus loop
		document.addEventListener('focusin', that._forceFocusHandler);
	}

	_showBackdrop(callback) {
		const that = this;
		const animate = that.classList.contains('fade');

		if (that.opened && that.backdrop !== 'none') {
			if (!that._backdrop) {
				that._backdrop = document.createElement('div')
				that._backdrop.className = 'modal-backdrop';
			}

			if (animate) {
				this._backdrop.classList.add('fade');
			}

			if (!that._backdrop.parentElement) {
				document.body.appendChild(that._backdrop);
			}

			if (animate) {
				//reflow
				that._backdrop.offsetHeight;
			}

			this._backdrop.classList.add('show')

			if (!callback) {
				return
			}

			if (!animate) {
				callback();
				return
			}
			
			if (that._backdrop.offsetHeight === 0) {
				callback();
			}
			

			that._backdrop.addEventListener('transitionend', callback, { once: true });
		}
		else if (!that.opened && that._backdrop) {
			that._backdrop.classList.remove('show');

			const callbackRemove = () => {
				if (that._backdrop.parentElement) {
					that._backdrop.parentElement.removeChild(that._backdrop);
				}

				if (callback) {
					callback()
				}
			}

			if (that.classList.contains('fade')) {
				that._backdrop.addEventListener('transitionend', callbackRemove, { once: true });
			}
			else {
				callbackRemove()
			}
		}
		else if (callback) {
			callback()
		}
	}
});

Smart('bootstrap-tabs', class Tabs extends Smart.ContentElement {
	// Element's properties.
	static get properties() {
		return {
			'sizeMode': {
				value: '',
				allowedValue: ['sm', '', 'lg', 'xl'],
				type: 'string'
			},
			'tabType': {
				value: 'tabs',
				allowedValue: ['tabs', 'nav', 'pills'],
				type: 'string'
			},
			'listType': {
				value: 'ul',
				allowedValue: ['ul', 'ol', 'nav'],
				type: 'string'
			},
			'alignment': {
				value: '',
				allowedValue: ['', 'center', 'end', 'vertical'],
				type: 'string'
			},
			'fill': {
				value: false,
				type: 'boolean'
			},
			'justified': {
				value: false,
				type: 'boolean'
			},
			'styleMode': {
				value: '',
				type: 'string'	
			}
		};
	}

	/**
	* Element's Event Listeners
	*/
	static get listeners() {
		return {
			'click': '_clickHandler'
		};
	}

	
	template() {
		return '<div id="container"><content></content></div>';
	}

	ready() {
		const that = this;

	
	}

	appendChild(node) {
		const that = this;

		if (!that.isCompleted) {
			const args = Array.prototype.slice.call(arguments, 2);
			return HTMLElement.prototype.appendChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
		}

		if (node) {
			that.$.container.appendChild(node);
		}
	}

	removeChild(node) {
		const that = this;

		if (!that.isCompleted) {
			const args = Array.prototype.slice.call(arguments, 2);
			return HTMLElement.prototype.removeChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
		}

		if (!node) {
			that.$.container.removeChild(node);
		}
	}

	insertBefore(newNode, referenceNode) {
		const that = this;

		if (!that.isCompleted) {
			const args = Array.prototype.slice.call(arguments, 2);
			return HTMLElement.prototype.insertBefore.apply(that, args.concat(Array.prototype.slice.call(arguments)));
		}

		if (newNode) {
			that.$.container.insertBefore(newNode, referenceNode);
		}
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;

		if (propertyName === 'listType') {
			const listItems = that.querySelectorAll('.nav-link');

			that.$.container.innerHTML = '';

			for (let i = 0; i < listItems.length; i++) {
				that.appendChild(listItems[i]);
			}

			that.render();
		}
		
		if (propertyName === 'styleMode') {
			that.classList.remove(oldValue);
			if (that.styleMode) {
				that.classList.add(that.styleMode);
			}
		}

		if (!that._list) {
			return;
		}

		if (propertyName === 'alignment') {
			that._list.classList.remove(newValue === 'vertical' ? 'flex-column' : 'justify-content-' + oldValue);

			if (newValue) {
				that._list.classList.add(newValue === 'vertical' ? 'flex-column' : 'justify-content-' + newValue);
			}
		}
		else if (propertyName === 'tabType') {
			that._list.classList.remove('nav-' + oldValue);

			if (newValue !== 'nav') {
				that._list.classList.add('nav-' + newValue);
			}
		}
		else if (propertyName === 'fill' || propertyName === 'justified') {
			that._list.classList[newValue ? 'add' : 'remove']('nav-' + propertyName);
		}
	}

	render() {
		const that = this,
			container = that.$.container,
			fragment = document.createDocumentFragment();

		while (container.firstElementChild) {
			const navLink = container.firstElementChild;

			if (navLink) {
				if (navLink instanceof Smart.Bootstrap.DropDown) {
					navLink.querySelector('.dropdown-toggle').classList.add('nav-link');
				}
				else {
					navLink.classList.add('nav-link');
				}

				fragment.appendChild(navLink);
			}
		}

		that.$.container.innerHTML = '';

		if (!fragment.children.length) {
			return;
		}

		const list = document.createElement(that.listType);

		that._list = list;

		list.classList.add('nav');

		if (that.listType === 'nav') {
			while (fragment.firstElementChild) {
				if (fragment.firstElementChild.classList.contains('tab-content')) {
					that.$.container.appendChild(fragment.firstElementChild);
					continue;
				}

				list.appendChild(fragment.firstElementChild);
			}
		}
		else {
			while (fragment.firstElementChild) {
				if (fragment.firstElementChild.classList.contains('tab-content')) {
					that.$.container.appendChild(fragment.firstElementChild);
					continue;
				}

				const listItem = document.createElement('li');

				listItem.classList.add('nav-item');
				listItem.appendChild(fragment.firstElementChild);

				list.appendChild(listItem);
			}
		}

		that.$.container.insertBefore(list, that.$.container.lastElementChild);
		that._refreshBarPosition();	
		
		if (!that._list) {
			return;
		}

		if (that.alignment && that._list) {
			that._list.classList.add(that.alignment === 'vertical' ? 'flex-column' : 'justify-content-' + that.alignment);
		}

		if (that.tabType !== 'nav') {
			that._list.classList.add('nav-' + that.tabType);
		}

		if (that.fill) {
			that._list.classList.add('nav-fill');
		}

		if (that.justified) {
			that._list.classList.add('nav-justified');
		}
		
		if (that.styleMode) {
			that.classList.add(that.styleMode);	
		}
	}

	_getSelectorFromElement(element) {
		let selector = element.getAttribute('data-target')

		if (!selector || selector === '#') {
			const hrefAttr = element.getAttribute('href');

			selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
		}

		return document.querySelector(selector);
	}

	// Public

	show(item) {
		const that = this;

		if (that.disabled) {
			return
		}

		const items = Array.from(that.getElementsByClassName('nav-link')),
			activeItem = items.find(item => item.classList.contains('active')),
			selector = that._getSelectorFromElement(item);

		if (!item || !item.classList.contains('nav-link') || item === activeItem) {
			return;
		}

		that.$.fireEvent('show', { relatedTarget: activeItem, target: item });

		const isDefaultPrevented = that.$.fireEvent('show', { relatedTarget: activeItem, target: item }).defaultPrevented;

		if (isDefaultPrevented) {
			return
		}

		that._activate(item, that);

		const complete = () => {
			that.$.fireEvent('shown', { relatedTarget: activeItem, target: item });
		}

		if (selector) {
			that._activate(selector, selector.parentElement, complete)
		}
		else {
			complete()
		}		
	}

	dispose() {
		const that = this;

		if (that.parentElement) {
			that.parentElement.removeChild(that);
		}
	}

	// Private
  _refreshBarPosition() {
		const that = this;

		if (!that.bar) {
			const bar = document.createElement('span');
			that._list.appendChild(bar);
			bar.classList.add('bar');
			
			that.bar = bar;	
		}
		
	   setTimeout(function () {
		   const items = Array.from(that.getElementsByClassName('nav-link')),
			activeItem = items.find(item => item.classList.contains('active'));
			
			let width = 0;
			let activeWidth = 0;
			
			for(let i = 0; i < items.length; i++){
				width += items[i].getBoundingClientRect().width;
				
				if (items[i] === activeItem) {
					activeWidth = width;
				}
			}
			
		  if (activeItem) {				
				const rect = activeItem.getBoundingClientRect();
				
				that.bar.style.left = -width + activeWidth - activeItem.offsetWidth + 'px';
				that.bar.style.top = rect.height + 'px';
				that.bar.style.width = activeItem.offsetWidth + 'px';			
			}
		});
	}
		
	_activate(item, container, callback) {
		const active = container && container.querySelector('.active'),
			complete = () => this._transitionComplete(item, active, callback);
	
		if (callback && active && active.classList.contains('fade')) {
			active.classList.remove('show');
			active.addEventListener('transitionend', complete, { once: true });
		}
		else {
			complete()
		}	
	}

	_transitionComplete(element, active, callback) {
		if (active) {
			active.classList.remove('active');

			const dropdownChild = active.parentElement.querySelector('.dropdown-menu .active');

			if (dropdownChild) {
				dropdownChild.classList.remove('active');
			}

			if (active.getAttribute('role') === 'tab') {
				active.setAttribute('aria-selected', false)
			}
		}

		element.classList.add('active');
		this._refreshBarPosition();
		
		if (element.getAttribute('role') === 'tab') {
			element.setAttribute('aria-selected', true)
		}

		//Causes reflow
		element.offsetHeight;

		if (element.classList.contains('fade')) {
			element.classList.add('show')
		}

		if (element.parentElement && element.parentElement.classList.contains('dropdown-menu')) {
			const dropdownElement = element.closest('.dropdown');

			if (dropdownElement) {
				const dropdownToggle = dropdownElement.querySelector('.dropdown-toggle');

				dropdownToggle.classList.add('active');
			}

			element.setAttribute('aria-expanded', true);
		}

		if (callback) {
			callback()
		}
	}

	_clickHandler(event) {
		const that = this;

		if (that.disabled) {
			return;
		}

		const target = event.target;

		//[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]
		if (['tab', 'pill', 'list'].indexOf(target.getAttribute('data-toggle')) > -1) {
			that.show(target);
		}
		
		event.stopPropagation();
		event.preventDefault();
	}
});

Smart('bootstrap-range', class Range extends Smart.BaseElement {
	// Button's properties.
	static get properties() {
		return {
			'min': {
				value: 0,
				type: 'number'
			},
			'max': {
				value: 10,
				type: 'number'	
			},
			'name': {
				type: 'string'
			},
			'value': {
				value: 5,
				type: 'number'	
			}
		};
	}

	/**
	* CheckBox's Event Listeners
	*/
	static get listeners() {
		return {
			'input.focus': 'focus',
			'input.blur': 'blur'
		};
	}

	/** CheckBox's template. */
	template() {
		return `<div><div id="range" class="slider">
				 	<input value=[[value]] max=[[max]] min=[[min]] disabled=[[disabled]]  id="input" type="range" name=\'[[name]]\'/>
			  </div></div>`;
	}

	ready() {
		const that = this;

		that.$.range.classList.add('component');
		that.$.input.classList.add('component-input');
		that.$.input.classList.add('range');
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;	
	}

	blur() {
		this.$.range.classList.remove('focus');
	}

	focus() {
		this.$.range.classList.add('focus');
	}
});

Smart('bootstrap-progress-bar', class ProgressBar extends Smart.ContentElement {
	// Button's properties.
	static get properties() {
		return {
			'min': {
				value: 0,
				type: 'number'
			},
			'max': {
				value: 10,
				type: 'number'	
			},
			'name': {
				type: 'string'
			},
			'type': {
				value: '',
				type: 'string'
			},
			'value': {
				value: 5,
				type: 'number'	
			},
			'striped': {
				value: false,
				type: 'boolean'	
			},
			'styleMode': {
				value: 'primary',
				type: 'string'	
			}
		};
	}

	template() {
		return `<div><div id="progress" class="progress">
				 	<div class="progress-bar" role="progressbar" aria-valuenow==[[value]] aria-valuemax==[[max]] aria-valuemin==[[min]] disabled=[[disabled]]  id="progressbar" name=\'[[name]]\'><content></content></div>
			  </div>
			 <progress id="circular" class="hide circular"/>
			  </div>`;
	}

	refresh() {
		const that = this;
	
		let value = Math.max(that.min, that.value);
		value = Math.min(that.value, that.max);
		
		const width = (value * that.offsetWidth) / (that.max - that.min)
		
		that.$.progressbar.style.width = width + 'px';
		that.$.progressbar.classList.add('bg-' + that.styleMode);
		that.$.circular.classList.add('bg-' + that.styleMode);
		
		that.$.progressbar.classList.remove('progress-bar-striped');
		
		if (that.striped) {
			that.$.progressbar.classList.add('progress-bar-striped');		
		}
			
		if (that.type === 'circular') {
			that.$.progress.classList.add('hide');
			that.$.circular.classList.remove('hide');
		}
		else {
			that.$.progress.classList.remove('hide');
			that.$.circular.classList.add('hide');
		}
	}
	
	ready() {
		const that = this;

		that.$.progress.classList.add('component');
		
		that.refresh();
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;	
		
		that.refresh();
	}
});

Smart('bootstrap-circular', class Circular extends Smart.Bootstrap.ProgressBar {
	static get properties() {
			return {
				'type': {
					value: 'circular',
					type: 'string'	
				}
			}
	}
});

Smart('bootstrap-input', class TextBox extends Smart.ContentElement {
	static get properties() {
		return {
			'name': {
				value: '',
				type: 'string'	
			},
			'value': {
				value: '',
				type: 'string'	
			},
			'placeholder': {
				value: '',
				type: 'string'	
			},
			'required': {
				value: false,
				type: 'boolean'	
			},	
			'outlined': {
				value: false,
				type: 'boolean'	
			},			
			'filled': {
				value: false,
				type: 'boolean'	
			},					
			'styleMode': {
				value: 'outlined',
				type: 'string'	
			}			
		};
	}

	template() {
		return `<div><label input id="label">
            <input name=[[name]] type="text" class="form-component" id="input" placeholder="[[placeholder]]"
									value="{{value::keydown}}" required="[[required]]"/>
            <span id="span">[[placeholder]]</span>
        </label></div>`;
	}

	refresh() {
		const that = this;
	
		that.$.label.removeAttribute('outlined');
		that.$.label.removeAttribute('filled');
		that.$.label.removeAttribute('default');
		
		if (that.outlined) {
			that.$.label.setAttribute('outlined', '');
		}
		else if (that.filled) {
			that.$.label.setAttribute('filled', '');
		}
		else {
			that.$.label.setAttribute('default', '');
		}
		
		that.$.label.className = '';
		
		if (that.styleMode) {
			that.$.label.classList.add(that.styleMode);	
			that.$.label.setAttribute('highlight', '');
		}
	}
	
	ready() {
		const that = this;
	
		that.refresh();
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;	
		
		that.refresh();
	}
});

Smart('bootstrap-textarea', class TextArea extends Smart.Bootstrap.Input {
	template() {
		return `<div><label input id="label">
            <textarea name=[[name]] type="text" class="form-component" id="input" placeholder="[[placeholder]]"
									value="{{value::keydown}}" required="[[required]]"></textarea>
            <span id="span">[[placeholder]]</span>
        </label></div>`;
	}
});

Smart('bootstrap-file-input', class FileInput extends Smart.ContentElement {
	static get properties() {
		return {
			'name': {
				value: '',
				type: 'string'	
			},
			'placeholder': {
				value: '',
				type: 'string'	
			},	
			'styleMode': {
				value: '',
				type: 'string'	
			},	
			'value': {
				value: '',
				type: 'string'	
			}					
		};
	}

	template() {
		return `<div><div class="file">
					<input  id="input" placeholder=[[placeholder]] name=[[name]] type="file" class="file-input" />
					<label class="file-label" for="inputGroupFile01"><content></content></label>
				</div></div>`;
	}

	refresh() {
		const that = this;	
		
		that.$.input.value = that.value;
		that.$.input.onchange = function() {
			that.value = that.$.input.value;
		}
	}
	
	ready() {
		const that = this;
	
		that.refresh();
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;	
		
		that.refresh();
	}
});



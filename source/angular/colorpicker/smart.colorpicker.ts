import { ColorPicker } from './../index';
import { Animation, ColorApplyValueMode, ColorDisplayMode, DropDownOpenMode, DropDownButtonPosition, DropDownPosition, ColorPalette, ResizeMode, ColorTooltipDisplayMode, ColorValueFormat, ColorValueDisplayMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, ColorApplyValueMode, ColorDisplayMode, DropDownOpenMode, DropDownButtonPosition, DropDownPosition, ColorPalette, ResizeMode, ColorTooltipDisplayMode, ColorValueFormat, ColorValueDisplayMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { ColorPicker } from './../index';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ColorPickerComponent),
    multi: true
}

@Directive({
	selector: 'smart-color-picker, [smart-color-picker]',
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class ColorPickerComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
	constructor(ref: ElementRef<ColorPicker>) {
		super(ref);
		this.nativeElement = ref.nativeElement as ColorPicker;
	}

	private eventHandlers: any[] = [];

	public nativeElement: ColorPicker;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <ColorPicker>document.createElement('smart-color-picker');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
        /**
        * @description
        * The registered callback function called when a change event occurs on the form elements.
        */
       _onChange: (value: any) => void = () => {};
        /**
        * @description
        * The registered callback function called when a blur event occurs on the form elements.
        */
       _onTouched: () => any = () => {};


	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description This property allows editting of colors via the input inside the element's action section. Accepts values in all supported types. This property works when 'valueDisplayMode' is set to default or colorCode. */
	@Input()
	get editable(): boolean {
		return this.nativeElement ? this.nativeElement.editable : undefined;
	}
	set editable(value: boolean) {
		this.nativeElement ? this.nativeElement.editable = value : undefined;
	}

	/** @description Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'. */
	@Input()
	get autoCloseDelay(): number {
		return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
	}
	set autoCloseDelay(value: number) {
		this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
	}

	/** @description Specifies how the user applies the selected value. In 'instantly' mode the value is applied immediately when color is selected. In 'useButtons' mode are shown 'Ok' and 'Cancel' buttons at the botom of the colorpicker's drop down. Only click on 'OK' button applies the value. */
	@Input()
	get applyValueMode(): ColorApplyValueMode {
		return this.nativeElement ? this.nativeElement.applyValueMode : undefined;
	}
	set applyValueMode(value: ColorApplyValueMode) {
		this.nativeElement ? this.nativeElement.applyValueMode = value : undefined;
	}

	/** @description Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'. */
	@Input()
	get columnCount(): number {
		return this.nativeElement ? this.nativeElement.columnCount : undefined;
	}
	set columnCount(value: number) {
		this.nativeElement ? this.nativeElement.columnCount = value : undefined;
	}

	/** @description Determines the colors that will be displayed and their layout. */
	@Input()
	get displayMode(): ColorDisplayMode {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value: ColorDisplayMode) {
		this.nativeElement ? this.nativeElement.displayMode = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality. */
	@Input()
	get disableUndo(): boolean {
		return this.nativeElement ? this.nativeElement.disableUndo : undefined;
	}
	set disableUndo(value: boolean) {
		this.nativeElement ? this.nativeElement.disableUndo = value : undefined;
	}

	/** @description Sets the parent container of the dropDown (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown. */
	@Input()
	get dropDownAppendTo(): any {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value: any) {
		this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
	}

	/** @description Determines how the drop down is going to open. */
	@Input()
	get dropDownOpenMode(): DropDownOpenMode {
		return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
	}
	set dropDownOpenMode(value: DropDownOpenMode) {
		this.nativeElement ? this.nativeElement.dropDownOpenMode = value : undefined;
	}

	/** @description Determines the position of the drop down button. */
	@Input()
	get dropDownButtonPosition(): DropDownButtonPosition {
		return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
	}
	set dropDownButtonPosition(value: DropDownButtonPosition) {
		this.nativeElement ? this.nativeElement.dropDownButtonPosition = value : undefined;
	}

	/** @description Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size. */
	@Input()
	get dropDownPosition(): DropDownPosition {
		return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	}
	set dropDownPosition(value: DropDownPosition) {
		this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
	}

	/** @description Sets the height of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn not support CSS variables. */
	@Input()
	get dropDownHeight(): string {
		return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	}
	set dropDownHeight(value: string) {
		this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
	}

	/** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
	@Input()
	get dropDownOverlay(): boolean {
		return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
	}
	set dropDownOverlay(value: boolean) {
		this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
	}

	/** @description Sets the width of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
	@Input()
	get dropDownWidth(): string {
		return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	}
	set dropDownWidth(value: string) {
		this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
	}

	/** @description Allows to edit the alpha(transparency) of the colors via an editor/slider in the following displayModes: 'palette', 'radial', 'hexagonal' */
	@Input()
	get editAlphaChannel(): boolean {
		return this.nativeElement ? this.nativeElement.editAlphaChannel : undefined;
	}
	set editAlphaChannel(value: boolean) {
		this.nativeElement ? this.nativeElement.editAlphaChannel = value : undefined;
	}

	/** @description Allows to select a custom color via an editor popup. Custom color selection is available in modes that don't have this option by default, like: 'grid', 'default, 'spectrum grid'. */
	@Input()
	get enableCustomColors(): boolean {
		return this.nativeElement ? this.nativeElement.enableCustomColors : undefined;
	}
	set enableCustomColors(value: boolean) {
		this.nativeElement ? this.nativeElement.enableCustomColors = value : undefined;
	}

	/** @description Defines an Array of colors that will be used as the Theme Colors in the corresponding section of displayMode: 'grid' and 'default'. */
	@Input()
	get gridThemeColors(): string[] | null {
		return this.nativeElement ? this.nativeElement.gridThemeColors : undefined;
	}
	set gridThemeColors(value: string[] | null) {
		this.nativeElement ? this.nativeElement.gridThemeColors = value : undefined;
	}

	/** @description Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'grid' and 'default'. */
	@Input()
	get gridShadeColors(): string[] | null {
		return this.nativeElement ? this.nativeElement.gridShadeColors : undefined;
	}
	set gridShadeColors(value: string[] | null) {
		this.nativeElement ? this.nativeElement.gridShadeColors = value : undefined;
	}

	/** @description Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'grid' and 'default'. */
	@Input()
	get gridStandardColors(): string[] | null {
		return this.nativeElement ? this.nativeElement.gridStandardColors : undefined;
	}
	set gridStandardColors(value: string[] | null) {
		this.nativeElement ? this.nativeElement.gridStandardColors = value : undefined;
	}

	/** @description Hides the alpha editor. Alpha editor is an input containing the value of the current color opacity. The input is available in the following modes: 'radial', 'palette', 'hexagonal'. The input is only visible if there's enough space. This editor is visible by default. */
	@Input()
	get hideAlphaEditor(): boolean {
		return this.nativeElement ? this.nativeElement.hideAlphaEditor : undefined;
	}
	set hideAlphaEditor(value: boolean) {
		this.nativeElement ? this.nativeElement.hideAlphaEditor = value : undefined;
	}

	/** @description Determines which color editors will be hidden first when there's not enough space for all of them to be visible. By default the editors are only visible in 'palette', 'radial' and 'hexagonal' display modes. This property allows to prioritize the visibility of the editors. */
	@Input()
	get hideContentToFit(): string[] {
		return this.nativeElement ? this.nativeElement.hideContentToFit : undefined;
	}
	set hideContentToFit(value: string[]) {
		this.nativeElement ? this.nativeElement.hideContentToFit = value : undefined;
	}

	/** @description HEX editor is an input containing the hexadecimal representation of a color. This editor is visible by default. Setting 'hideRGBeditor' to true hides it. */
	@Input()
	get hideHEXEditor(): boolean {
		return this.nativeElement ? this.nativeElement.hideHEXEditor : undefined;
	}
	set hideHEXEditor(value: boolean) {
		this.nativeElement ? this.nativeElement.hideHEXEditor = value : undefined;
	}

	/** @description Hides the preview container. Preview container is used to show the currently selected value in 'palette', 'radial' and 'hexagonal' display modes. */
	@Input()
	get hidePreviewContainer(): boolean {
		return this.nativeElement ? this.nativeElement.hidePreviewContainer : undefined;
	}
	set hidePreviewContainer(value: boolean) {
		this.nativeElement ? this.nativeElement.hidePreviewContainer = value : undefined;
	}

	/** @description Hides the RGB editor. This editor is a group of three separate inputs for the Red, Green and Blue values of the color. */
	@Input()
	get hideRGBEditor(): boolean {
		return this.nativeElement ? this.nativeElement.hideRGBEditor : undefined;
	}
	set hideRGBEditor(value: boolean) {
		this.nativeElement ? this.nativeElement.hideRGBEditor = value : undefined;
	}

	/** @description Sets additional helper text below the element that is only visible when the element is focused. */
	@Input()
	get hint(): string {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value: string) {
		this.nativeElement ? this.nativeElement.hint = value : undefined;
	}

	/** @description Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes. */
	@Input()
	get inverted(): boolean {
		return this.nativeElement ? this.nativeElement.inverted : undefined;
	}
	set inverted(value: boolean) {
		this.nativeElement ? this.nativeElement.inverted = value : undefined;
	}

	/** @description Sets a label above the element. */
	@Input()
	get label(): string {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		this.nativeElement ? this.nativeElement.label = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
	@Input()
	get localizeFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description Determines whether the popup is opened or closed */
	@Input()
	get opened(): boolean {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value: boolean) {
		this.nativeElement ? this.nativeElement.opened = value : undefined;
	}

	/** @description Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes. */
	@Input()
	get palette(): ColorPalette {
		return this.nativeElement ? this.nativeElement.palette : undefined;
	}
	set palette(value: ColorPalette) {
		this.nativeElement ? this.nativeElement.palette = value : undefined;
	}

	/** @description Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc). */
	@Input()
	get paletteColors(): {name: string, value: string}[] | string[] | null {
		return this.nativeElement ? this.nativeElement.paletteColors : undefined;
	}
	set paletteColors(value: {name: string, value: string}[] | string[] | null) {
		this.nativeElement ? this.nativeElement.paletteColors = value : undefined;
	}

	/** @description Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColor property is true. */
	@Input()
	get paletteCustomColors(): string[] | null {
		return this.nativeElement ? this.nativeElement.paletteCustomColors : undefined;
	}
	set paletteCustomColors(value: string[] | null) {
		this.nativeElement ? this.nativeElement.paletteCustomColors = value : undefined;
	}

	/** @description The placeholder is shown when the value is not set yet or is set to null. */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
	}

	/** @description Disables user interaction with the element. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode. */
	@Input()
	get resizeIndicator(): boolean {
		return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
	}
	set resizeIndicator(value: boolean) {
		this.nativeElement ? this.nativeElement.resizeIndicator = value : undefined;
	}

	/** @description Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
	@Input()
	get resizeMode(): ResizeMode {
		return this.nativeElement ? this.nativeElement.resizeMode : undefined;
	}
	set resizeMode(value: ResizeMode) {
		this.nativeElement ? this.nativeElement.resizeMode = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Determines how the tooltip displays the value of the color that is being hovered. */
	@Input()
	get tooltipDisplayMode(): ColorTooltipDisplayMode {
		return this.nativeElement ? this.nativeElement.tooltipDisplayMode : undefined;
	}
	set tooltipDisplayMode(value: ColorTooltipDisplayMode) {
		this.nativeElement ? this.nativeElement.tooltipDisplayMode = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Represents the value of the selected color as the value of the element. */
	@Input()
	get value(): string {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode. */
	@Input()
	get valueFormat(): ColorValueFormat {
		return this.nativeElement ? this.nativeElement.valueFormat : undefined;
	}
	set valueFormat(value: ColorValueFormat) {
		this.nativeElement ? this.nativeElement.valueFormat = value : undefined;
	}

	/** @description Determines which elements will be displayed in color picker's action section. */
	@Input()
	get valueDisplayMode(): ColorValueDisplayMode {
		return this.nativeElement ? this.nativeElement.valueDisplayMode : undefined;
	}
	set valueDisplayMode(value: ColorValueDisplayMode) {
		this.nativeElement ? this.nativeElement.valueDisplayMode = value : undefined;
	}

	/** @description This event is triggered when user clicks on the action button. 'Ok' button is visible only when applyValueMode is set to useButtons.
	*  @param event. The custom event. 	*/
	@Output() onActionButtonClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when applyValueMode is set to useButtons.
	*  @param event. The custom event. 	*/
	@Output() onCancelButtonClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the color value is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The previously selected color.
	*   value - The new selected color.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the drop down is closed.
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the drop down is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when enableCustomColors property is true.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value)
	*   value - A boolean that indicates whether the custom color view is shown or not.
	*/
	@Output() onCustomColorSelection: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when user clicks on the drop down button.
	*  @param event. The custom event. 	*/
	@Output() onDropDownButtonClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the ok button is clicked.
	*  @param event. The custom event. 	*/
	@Output() onOkButtonClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the drop down is opened.
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the drop down is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when user starts resizing the drop down.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position)
	*   position - An object containing the current left and top positions of the drop down.
	*/
	@Output() onResizeStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the resizing of the drop down is finished.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position)
	*   position - An object containing the current left and top positions of the drop down.
	*/
	@Output() onResizeEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Opens the drop down of the color picker. 
	*/
    public open(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open();
            });
        }
    }

	/** @description Closes the drop down of the color picker. 
	*/
    public close(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.close();
            });
        }
    }


	get isRendered(): boolean {
		return this.nativeElement ? this.nativeElement.isRendered : false;
	}    
	
	ngOnInit() {
	}
	
    ngAfterViewInit() {
      const that = this;

      that.onCreate.emit(that.nativeElement);

		Smart.Render();

		this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
		this.listen();
	}
	
	ngOnDestroy() {
		this.unlisten();
	}

	_initialChange = true; 

	get ngValue(): any {
		if (!this.nativeElement) {
			return null;
		}

		const value = this.nativeElement.value;
		return value;
	}

	set ngValue(value: any) {
		if (this.nativeElement) {
		    this.writeValue(value);
		}
	}

	writeValue(value: any): void {
        const that = this;
        const normalizedValue = value == null ? '' : value;

		that.nativeElement.whenRendered(() => {
			that.value = normalizedValue;
			if (that._initialChange === false) {
	    		that._onChange(that.value);
            }
		});
	}

	registerOnChange(fn: any): void {
		this._onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this._onTouched = fn;
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.nativeElement && this.nativeElement.isRendered) {
			for (const propName in changes) {
				if (changes.hasOwnProperty(propName)) {
					this.nativeElement[propName] = changes[propName].currentValue;
				}
			}
		}
	}

	/** @description Add event listeners. */
	private listen(): void {
        const that = this;
		that.eventHandlers['actionButtonClickHandler'] = (event: CustomEvent) => { that.onActionButtonClick.emit(event); }
		that.nativeElement.addEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);

		that.eventHandlers['cancelButtonClickHandler'] = (event: CustomEvent) => { that.onCancelButtonClick.emit(event); }
		that.nativeElement.addEventListener('cancelButtonClick', that.eventHandlers['cancelButtonClickHandler']);

		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

		that.eventHandlers['closingHandler'] = (event: CustomEvent) => { that.onClosing.emit(event); }
		that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);

		that.eventHandlers['customColorSelectionHandler'] = (event: CustomEvent) => { that.onCustomColorSelection.emit(event); }
		that.nativeElement.addEventListener('customColorSelection', that.eventHandlers['customColorSelectionHandler']);

		that.eventHandlers['dropDownButtonClickHandler'] = (event: CustomEvent) => { that.onDropDownButtonClick.emit(event); }
		that.nativeElement.addEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);

		that.eventHandlers['okButtonClickHandler'] = (event: CustomEvent) => { that.onOkButtonClick.emit(event); }
		that.nativeElement.addEventListener('okButtonClick', that.eventHandlers['okButtonClickHandler']);

		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['openingHandler'] = (event: CustomEvent) => { that.onOpening.emit(event); }
		that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);

		that.eventHandlers['resizeStartHandler'] = (event: CustomEvent) => { that.onResizeStart.emit(event); }
		that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);

		that.eventHandlers['resizeEndHandler'] = (event: CustomEvent) => { that.onResizeEnd.emit(event); }
		that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);

		
        that.eventHandlers['changeModelHandler'] = (event: Event) => {
            that._initialChange = false;
            that._onChange(that.nativeElement.value); 
        };
        that.eventHandlers['blurModelHandler'] = (event: Event) => {
            that._onTouched();
        };
        that.nativeElement.whenRendered(() => {
            if (that.nativeElement.querySelector('input')) {    
                that.eventHandlers['keyupModelHandler'] = (event) => {
                    setTimeout(() => { that.eventHandlers['changeModelHandler'](event); }, 50);
                };

                that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        });
		that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
		that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['actionButtonClickHandler']) {
			that.nativeElement.removeEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);
		}

		if (that.eventHandlers['cancelButtonClickHandler']) {
			that.nativeElement.removeEventListener('cancelButtonClick', that.eventHandlers['cancelButtonClickHandler']);
		}

		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

		if (that.eventHandlers['closingHandler']) {
			that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
		}

		if (that.eventHandlers['customColorSelectionHandler']) {
			that.nativeElement.removeEventListener('customColorSelection', that.eventHandlers['customColorSelectionHandler']);
		}

		if (that.eventHandlers['dropDownButtonClickHandler']) {
			that.nativeElement.removeEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);
		}

		if (that.eventHandlers['okButtonClickHandler']) {
			that.nativeElement.removeEventListener('okButtonClick', that.eventHandlers['okButtonClickHandler']);
		}

		if (that.eventHandlers['openHandler']) {
			that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
		}

		if (that.eventHandlers['openingHandler']) {
			that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
		}

		if (that.eventHandlers['resizeStartHandler']) {
			that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
		}

		if (that.eventHandlers['resizeEndHandler']) {
			that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
		}

		if (that.eventHandlers['changeModelHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeModelHandler']);
            if (that.nativeElement.querySelector('input')) {
                  that.nativeElement.querySelector('input').removeEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
		}
		if (that.eventHandlers['blurModelHandler']) {
			that.nativeElement.removeEventListener('blur', that.eventHandlers['blurModelHandler']);
		}
	}
}

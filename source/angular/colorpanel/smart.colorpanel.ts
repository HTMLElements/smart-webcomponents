import { ColorPanel } from './../index';
import { Animation, ColorApplyValueMode, ColorDisplayMode, ColorPalette, ColorTooltipDisplayMode, ColorValueFormat, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, ColorApplyValueMode, ColorDisplayMode, ColorPalette, ColorTooltipDisplayMode, ColorValueFormat, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { ColorPanel } from './../index';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ColorPanelComponent),
    multi: true
}

@Directive({
	selector: 'smart-color-panel, [smart-color-panel]',
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class ColorPanelComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
	constructor(ref: ElementRef<ColorPanel>) {
		super(ref);
		this.nativeElement = ref.nativeElement as ColorPanel;
	}

	private eventHandlers: any[] = [];

	public nativeElement: ColorPanel;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <ColorPanel>document.createElement('smart-color-panel');
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

	/** @description Specifies how the value is applied. */
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

	/** @description Enables or disables the element. Disabled elements can not be interacted with. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Determines the colors that will be displayed and their layout. */
	@Input()
	get displayMode(): ColorDisplayMode {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value: ColorDisplayMode) {
		this.nativeElement ? this.nativeElement.displayMode = value : undefined;
	}

	/** @description By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality. */
	@Input()
	get disableUndo(): boolean {
		return this.nativeElement ? this.nativeElement.disableUndo : undefined;
	}
	set disableUndo(value: boolean) {
		this.nativeElement ? this.nativeElement.disableUndo = value : undefined;
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

	/** @description Defines an Array of colors that will be used as the Theme Colors in the corresponding section in displayMode: 'default'. */
	@Input()
	get gridThemeColors(): string[] | null {
		return this.nativeElement ? this.nativeElement.gridThemeColors : undefined;
	}
	set gridThemeColors(value: string[] | null) {
		this.nativeElement ? this.nativeElement.gridThemeColors = value : undefined;
	}

	/** @description Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'default'. */
	@Input()
	get gridShadeColors(): string[] | null {
		return this.nativeElement ? this.nativeElement.gridShadeColors : undefined;
	}
	set gridShadeColors(value: string[] | null) {
		this.nativeElement ? this.nativeElement.gridShadeColors = value : undefined;
	}

	/** @description Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'default'. */
	@Input()
	get gridStandardColors(): [] | null {
		return this.nativeElement ? this.nativeElement.gridStandardColors : undefined;
	}
	set gridStandardColors(value: [] | null) {
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

	/** @description Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes. */
	@Input()
	get inverted(): boolean {
		return this.nativeElement ? this.nativeElement.inverted : undefined;
	}
	set inverted(value: boolean) {
		this.nativeElement ? this.nativeElement.inverted = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages. */
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
	get paletteColors(): any {
		return this.nativeElement ? this.nativeElement.paletteColors : undefined;
	}
	set paletteColors(value: any) {
		this.nativeElement ? this.nativeElement.paletteColors = value : undefined;
	}

	/** @description Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColors property is true. */
	@Input()
	get paletteCustomColors(): string[] | null {
		return this.nativeElement ? this.nativeElement.paletteCustomColors : undefined;
	}
	set paletteCustomColors(value: string[] | null) {
		this.nativeElement ? this.nativeElement.paletteCustomColors = value : undefined;
	}

	/** @description If the element is readonly, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
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

	/** @description Represents the value of the selected color. */
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

	/** @description Determines the value member for the color when the paletteColors consists of objects. Usefull in cases where the colors are loaded as objects in an array and the attribute that holds the color key is not named 'value'. */
	@Input()
	get valueMember(): string {
		return this.nativeElement ? this.nativeElement.valueMember : undefined;
	}
	set valueMember(value: string) {
		this.nativeElement ? this.nativeElement.valueMember = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description This event is triggered when the color is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The previously selected color.
	*   value - The new selected color.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when applyValueMode is set to useButtons.
	*  @param event. The custom event. 	*/
	@Output() onCancelButtonClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when enableCustomColors property is true.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value)
	*   value - A boolean that indicates whether the custom color view is shown or not.
	*/
	@Output() onCustomColorSelection: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the ok button is clicked. 'Ok' button is visible only when applyValueMode is set to useButtons.
	*  @param event. The custom event. 	*/
	@Output() onOkButtonClick: EventEmitter<CustomEvent> = new EventEmitter();


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
		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['cancelButtonClickHandler'] = (event: CustomEvent) => { that.onCancelButtonClick.emit(event); }
		that.nativeElement.addEventListener('cancelButtonClick', that.eventHandlers['cancelButtonClickHandler']);

		that.eventHandlers['customColorSelectionHandler'] = (event: CustomEvent) => { that.onCustomColorSelection.emit(event); }
		that.nativeElement.addEventListener('customColorSelection', that.eventHandlers['customColorSelectionHandler']);

		that.eventHandlers['okButtonClickHandler'] = (event: CustomEvent) => { that.onOkButtonClick.emit(event); }
		that.nativeElement.addEventListener('okButtonClick', that.eventHandlers['okButtonClickHandler']);

		
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
		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['cancelButtonClickHandler']) {
			that.nativeElement.removeEventListener('cancelButtonClick', that.eventHandlers['cancelButtonClickHandler']);
		}

		if (that.eventHandlers['customColorSelectionHandler']) {
			that.nativeElement.removeEventListener('customColorSelection', that.eventHandlers['customColorSelectionHandler']);
		}

		if (that.eventHandlers['okButtonClickHandler']) {
			that.nativeElement.removeEventListener('okButtonClick', that.eventHandlers['okButtonClickHandler']);
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

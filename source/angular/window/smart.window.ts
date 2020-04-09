import { Window } from './../index';
import { Animation, WindowAutoCapitalize, WindowDisplayMode, WindowDropPosition, WindowFooterPosition, TabPosition, WindowResizeMode, TabSelectionMode, WindowTabCloseButtonMode, Overflow, LayoutPosition, Orientation, WindowWrap, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, WindowAutoCapitalize, WindowDisplayMode, WindowDropPosition, WindowFooterPosition, TabPosition, WindowResizeMode, TabSelectionMode, WindowTabCloseButtonMode, Overflow, LayoutPosition, Orientation, WindowWrap, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Window } from './../index';


@Directive({
	selector: 'smart-window, [smart-window], smart-tabs-window, smart-prompt-window, smart-multilineprompt-window, smart-dialog-window,  smart-alert-window, smart-progress-window, smart-wait-window'
})

export class WindowComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Window>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Window;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Window;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Window>document.createElement('smart-window');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Determines if 'Add New' Tab inside the Tabs element is visible. Applicable only to TabsWindow */
	@Input()
	get addNewTab(): boolean {
		return this.nativeElement ? this.nativeElement.addNewTab : undefined;
	}
	set addNewTab(value: boolean) {
		this.nativeElement ? this.nativeElement.addNewTab = value : undefined;
	}

	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. Applicable only to MultilinePromptWindow. */
	@Input()
	get autoCapitalize(): WindowAutoCapitalize {
		return this.nativeElement ? this.nativeElement.autoCapitalize : undefined;
	}
	set autoCapitalize(value: WindowAutoCapitalize) {
		this.nativeElement ? this.nativeElement.autoCapitalize = value : undefined;
	}

	/** @description Determines whether element will auto expand when the input overflows vertically. Applicable only to MultilinePromptWindow. */
	@Input()
	get autoExpand(): boolean {
		return this.nativeElement ? this.nativeElement.autoExpand : undefined;
	}
	set autoExpand(value: boolean) {
		this.nativeElement ? this.nativeElement.autoExpand = value : undefined;
	}

	/** @description Determines the label for the 'cancel' button inside the Prompt Window. */
	@Input()
	get cancelLabel(): string {
		return this.nativeElement ? this.nativeElement.cancelLabel : undefined;
	}
	set cancelLabel(value: string) {
		this.nativeElement ? this.nativeElement.cancelLabel = value : undefined;
	}

	/** @description Determines the label for the 'Complete' button insinde the Progress Window. */
	@Input()
	get completeLabel(): string {
		return this.nativeElement ? this.nativeElement.completeLabel : undefined;
	}
	set completeLabel(value: string) {
		this.nativeElement ? this.nativeElement.completeLabel = value : undefined;
	}

	/** @description Determines the label for the 'Confirm' button insinde the Prompt Window. */
	@Input()
	get confirmLabel(): string {
		return this.nativeElement ? this.nativeElement.confirmLabel : undefined;
	}
	set confirmLabel(value: string) {
		this.nativeElement ? this.nativeElement.confirmLabel = value : undefined;
	}

	/** @description Determines if the window is collapsed or not. When collapsed the only the header of the window is visible. */
	@Input()
	get collapsed(): boolean {
		return this.nativeElement ? this.nativeElement.collapsed : undefined;
	}
	set collapsed(value: boolean) {
		this.nativeElement ? this.nativeElement.collapsed = value : undefined;
	}

	/** @description When a modal window is opened, thid property determines if clicking on the mask closes the window or not. */
	@Input()
	get closeOnMaskClick(): boolean {
		return this.nativeElement ? this.nativeElement.closeOnMaskClick : undefined;
	}
	set closeOnMaskClick(value: boolean) {
		this.nativeElement ? this.nativeElement.closeOnMaskClick = value : undefined;
	}

	/** @description Determines the data source that will be loaded to the TabsWindow. Applicable only to TabsWindow. */
	@Input()
	get dataSource(): {label: string, content: string}[] {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: {label: string, content: string}[]) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Enables or disables the window. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Enables or disables the window snapping feature. */
	@Input()
	get disableSnap(): boolean {
		return this.nativeElement ? this.nativeElement.disableSnap : undefined;
	}
	set disableSnap(value: boolean) {
		this.nativeElement ? this.nativeElement.disableSnap = value : undefined;
	}

	/** @description Determines how the characters are displayed inside the input. Applicable to Prompt Window. */
	@Input()
	get displayMode(): WindowDisplayMode {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value: WindowDisplayMode) {
		this.nativeElement ? this.nativeElement.displayMode = value : undefined;
	}

	/** @description Applicable to TabsWindow when docked inside a DockingLayout Custom Element.  Determines where the window(it's tab items as well) can be dropped inside the DockingLayout.  The property is an array that accepts multiple positions. Note: Positions with prefix 'layout-' are applied to the Tab item children of the TabsWidnow owner that is being dragged. The rest of the positions indicate the allowed drop position inside the hovered target(TabsWindow). Used only by jqxDockingLayout custom elements. Determines the possible drop position inside the DockingLayout. The following values are allowed. */
	@Input()
	get dropPosition(): WindowDropPosition {
		return this.nativeElement ? this.nativeElement.dropPosition : undefined;
	}
	set dropPosition(value: WindowDropPosition) {
		this.nativeElement ? this.nativeElement.dropPosition = value : undefined;
	}

	/** @description A callback function defining the new format for the label of the Progress Bar. Applicable only to ProgressWindow. */
	@Input()
	get formatFunction(): any {
		return this.nativeElement ? this.nativeElement.formatFunction : undefined;
	}
	set formatFunction(value: any) {
		this.nativeElement ? this.nativeElement.formatFunction = value : undefined;
	}

	/** @description Determines the position of the footer of the window element. */
	@Input()
	get footerPosition(): WindowFooterPosition {
		return this.nativeElement ? this.nativeElement.footerPosition : undefined;
	}
	set footerPosition(value: WindowFooterPosition) {
		this.nativeElement ? this.nativeElement.footerPosition = value : undefined;
	}

	/** @description Determines the template for the Dialog section of the window. By default footerTemplate is null. */
	@Input()
	get footerTemplate(): any {
		return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
	}
	set footerTemplate(value: any) {
		this.nativeElement ? this.nativeElement.footerTemplate = value : undefined;
	}

	/** @description Set's the buttons that will be visible in the header section. */
	@Input()
	get headerButtons(): string[] {
		return this.nativeElement ? this.nativeElement.headerButtons : undefined;
	}
	set headerButtons(value: string[]) {
		this.nativeElement ? this.nativeElement.headerButtons = value : undefined;
	}

	/** @description Determines the template for the Dialog section of the window. By default headerTemplate is null. */
	@Input()
	get headerTemplate(): any {
		return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
	}
	set headerTemplate(value: any) {
		this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
	}

	/** @description Determines the position of the header of the window element. */
	@Input()
	get headerPosition(): TabPosition {
		return this.nativeElement ? this.nativeElement.headerPosition : undefined;
	}
	set headerPosition(value: TabPosition) {
		this.nativeElement ? this.nativeElement.headerPosition = value : undefined;
	}

	/** @description Sets additional helper text below the text box. The hint is visible only when the text box is focued. Applicable to Prompt Window. */
	@Input()
	get hint(): any {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value: any) {
		this.nativeElement ? this.nativeElement.hint = value : undefined;
	}

	/** @description Sets the value of the Progress bar to indeterminate state(null) and starts the animation. Applicable only to ProgressWindow. */
	@Input()
	get indeterminate(): boolean {
		return this.nativeElement ? this.nativeElement.indeterminate : undefined;
	}
	set indeterminate(value: boolean) {
		this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
	}

	/** @description Sets the filling direction of the Progress Bar. Applicable only to ProgressWindow. */
	@Input()
	get inverted(): boolean {
		return this.nativeElement ? this.nativeElement.inverted : undefined;
	}
	set inverted(value: boolean) {
		this.nativeElement ? this.nativeElement.inverted = value : undefined;
	}

	/** @description The label of the window that appears in the header area. */
	@Input()
	get label(): string {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		this.nativeElement ? this.nativeElement.label = value : undefined;
	}

	/** @description When enabled the resizing operation happens live. By default it's not enabled and during resizing a highlighter around the edges of the window appears to outline  the current size of the element. */
	@Input()
	get liveResize(): boolean {
		return this.nativeElement ? this.nativeElement.liveResize : undefined;
	}
	set liveResize(value: boolean) {
		this.nativeElement ? this.nativeElement.liveResize = value : undefined;
	}

	/** @description Applicable only to TabsWindow when used with a DockingLayout custom element.Used only by jqxDockingLayout. Determines the owner jqxDockingLayout  that the window belongs to. When the tabsWindow has been removed from a DockingLayout element, the property is used to indicate that it belongs to that particular Dockinglayout. Accepts a string, representing the ID of a jqxDockingLayout on the page, or an instance of jqxDokcingLayout. */
	@Input()
	get layout(): any {
		return this.nativeElement ? this.nativeElement.layout : undefined;
	}
	set layout(value: any) {
		this.nativeElement ? this.nativeElement.layout = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Applicable only to TabsWindow when docked inside a DockingLayout Custom Element.Determines of the item can be resized or not. */
	@Input()
	get locked(): boolean {
		return this.nativeElement ? this.nativeElement.locked : undefined;
	}
	set locked(value: boolean) {
		this.nativeElement ? this.nativeElement.locked = value : undefined;
	}

	/** @description Callback, related to localization module.  */
	@Input()
	get localizeFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
	}

	/** @description Determines if the window is maximized or not. When maximized the window covers the whole viewport. */
	@Input()
	get maximized(): boolean {
		return this.nativeElement ? this.nativeElement.maximized : undefined;
	}
	set maximized(value: boolean) {
		this.nativeElement ? this.nativeElement.maximized = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Determines if the window is modal or not. If true the user can only interact with the window and nothing else on the page. */
	@Input()
	get modal(): boolean {
		return this.nativeElement ? this.nativeElement.modal : undefined;
	}
	set modal(value: boolean) {
		this.nativeElement ? this.nativeElement.modal = value : undefined;
	}

	/** @description Applicable to TabsWindow when docked inside a DockingLayout Custom Element. Determines the max size of the item. Applicable to Progress Window by allowing the user to specify the maximum of the ProgressBar. */
	@Input()
	get max(): string | number | null {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: string | number | null) {
		this.nativeElement ? this.nativeElement.max = value : undefined;
	}

	/** @description Applicable to TabsWindow when docked inside DockingLayout Custom Element. Determines the min size of the item. Applicable to Progress Window by allowing the user to specify the minimu of the ProgressBar. */
	@Input()
	get min(): string | number | null {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: string | number | null) {
		this.nativeElement ? this.nativeElement.min = value : undefined;
	}

	/** @description Determines if the window is minimized or not. When minimized the window is docked at the bottom left corner of the viewport. */
	@Input()
	get minimized(): boolean {
		return this.nativeElement ? this.nativeElement.minimized : undefined;
	}
	set minimized(value: boolean) {
		this.nativeElement ? this.nativeElement.minimized = value : undefined;
	}

	/** @description Sets or gets the maximum number of characters that the user can enter. Applicable to Prompt/MultilinePrompt Window. */
	@Input()
	get maxLength(): number {
		return this.nativeElement ? this.nativeElement.maxLength : undefined;
	}
	set maxLength(value: number) {
		this.nativeElement ? this.nativeElement.maxLength = value : undefined;
	}

	/** @description Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality. Applicable to Prompt/MultilinePrompt Window. */
	@Input()
	get minLength(): number {
		return this.nativeElement ? this.nativeElement.minLength : undefined;
	}
	set minLength(value: number) {
		this.nativeElement ? this.nativeElement.minLength = value : undefined;
	}

	/** @description Determines if the window is visible or not. */
	@Input()
	get opened(): boolean {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value: boolean) {
		this.nativeElement ? this.nativeElement.opened = value : undefined;
	}

	/** @description Determines if the window is pinned or not. Pinned window is a window that can't be dragged but can be resized. */
	@Input()
	get pinned(): boolean {
		return this.nativeElement ? this.nativeElement.pinned : undefined;
	}
	set pinned(value: boolean) {
		this.nativeElement ? this.nativeElement.pinned = value : undefined;
	}

	/** @description Determines the input's placeholder. Applicable to Prompt Window. */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
	}

	/** @description Determines the label for the Input insinde the PromptWindow. */
	@Input()
	get promptLabel(): string {
		return this.nativeElement ? this.nativeElement.promptLabel : undefined;
	}
	set promptLabel(value: string) {
		this.nativeElement ? this.nativeElement.promptLabel = value : undefined;
	}

	/** @description If the element is readonly, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description When applied a resize indicator is displayed in the bottom right corner of the window and resizing operation can be initiated only from its position. */
	@Input()
	get resizeIndicator(): boolean {
		return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
	}
	set resizeIndicator(value: boolean) {
		this.nativeElement ? this.nativeElement.resizeIndicator = value : undefined;
	}

	/** @description Determines the resizing mode of the window.  Several modes are available:   none - resizing is disabled.  vertical - vertical resizing is allowed.  horizontal - horizontal resizing is allowed. both - horizontal and vertical resizing is allowed. top - the window can only be resized from the top side. bottom - the window is resizable only from the bottom side. left - the window can be resized only from the left side. right - the window can be resized only from the right side.  */
	@Input()
	get resizeMode(): WindowResizeMode {
		return this.nativeElement ? this.nativeElement.resizeMode : undefined;
	}
	set resizeMode(value: WindowResizeMode) {
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

	/** @description Specifies that the user must fill the input before submitting a form with the text box.Applicable to Prompt Window. */
	@Input()
	get required(): boolean {
		return this.nativeElement ? this.nativeElement.required : undefined;
	}
	set required(value: boolean) {
		this.nativeElement ? this.nativeElement.required = value : undefined;
	}

	/** @description Specifies the message that will appear if required is set and no value is provided in the input. Applicable to Prompt Window. */
	@Input()
	get requiredMessage(): string {
		return this.nativeElement ? this.nativeElement.requiredMessage : undefined;
	}
	set requiredMessage(value: string) {
		this.nativeElement ? this.nativeElement.requiredMessage = value : undefined;
	}

	/** @description Determines whether the content of the input will be selected on focus or not. Applicable to Prompt Window. */
	@Input()
	get selectAllOnFocus(): boolean {
		return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
	}
	set selectAllOnFocus(value: boolean) {
		this.nativeElement ? this.nativeElement.selectAllOnFocus = value : undefined;
	}

	/** @description Sets or gets which tab is selected. Applicable only to TabsWindow. */
	@Input()
	get selectedIndex(): number | null {
		return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
	}
	set selectedIndex(value: number | null) {
		this.nativeElement ? this.nativeElement.selectedIndex = value : undefined;
	}

	/** @description Determines the way the user can switch between tabs. Applicable only to TabsWindow. */
	@Input()
	get selectionMode(): TabSelectionMode {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: TabSelectionMode) {
		this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
	}

	/** @description Indicates the index of the last character in the current selection. Applicable only to MultilinePromptWindow. */
	@Input()
	get selectionEnd(): number {
		return this.nativeElement ? this.nativeElement.selectionEnd : undefined;
	}
	set selectionEnd(value: number) {
		this.nativeElement ? this.nativeElement.selectionEnd = value : undefined;
	}

	/** @description Indicates the index to the first character in the current selection. Applicable only to MultilinePromptWindow. */
	@Input()
	get selectionStart(): number {
		return this.nativeElement ? this.nativeElement.selectionStart : undefined;
	}
	set selectionStart(value: number) {
		this.nativeElement ? this.nativeElement.selectionStart = value : undefined;
	}

	/** @description Enables/Disabled the label for the Progress Bar. Applicable only to Progress Window. */
	@Input()
	get showProgressValue(): boolean {
		return this.nativeElement ? this.nativeElement.showProgressValue : undefined;
	}
	set showProgressValue(value: boolean) {
		this.nativeElement ? this.nativeElement.showProgressValue = value : undefined;
	}

	/** @description A getter that returns the siblings (that share the same parent) of a LayoutPanel item that is docked inside a DockingLayout. The siblings are also DockingLayout items ( LayoutPanels).Applicable only to TabsWindow when docked inside a DockingLayout. */
	@Input()
	get siblings(): any {
		return this.nativeElement ? this.nativeElement.siblings : undefined;
	}
	set siblings(value: any) {
		this.nativeElement ? this.nativeElement.siblings = value : undefined;
	}

	/** @description Applicable to TabsWindow when nested inside a DockingLayout Custom Element. Determines the size of the item. */
	@Input()
	get size(): string {
		return this.nativeElement ? this.nativeElement.size : undefined;
	}
	set size(value: string) {
		this.nativeElement ? this.nativeElement.size = value : undefined;
	}

	/** @description Specifies whether the element is to have its spelling and grammar checked or not. Applicable only to MultilinePromptWindow. */
	@Input()
	get spellCheck(): boolean {
		return this.nativeElement ? this.nativeElement.spellCheck : undefined;
	}
	set spellCheck(value: boolean) {
		this.nativeElement ? this.nativeElement.spellCheck = value : undefined;
	}

	/** @description Sets or gets whether close buttons are displayed inside the Tab Strip of the TabsWindow. Applicable only to TabsWindow. */
	@Input()
	get tabCloseButtons(): boolean {
		return this.nativeElement ? this.nativeElement.tabCloseButtons : undefined;
	}
	set tabCloseButtons(value: boolean) {
		this.nativeElement ? this.nativeElement.tabCloseButtons = value : undefined;
	}

	/** @description Determines if the close button is visible on select or always. Applicable only to TabsWindow. */
	@Input()
	get tabCloseButtonMode(): WindowTabCloseButtonMode {
		return this.nativeElement ? this.nativeElement.tabCloseButtonMode : undefined;
	}
	set tabCloseButtonMode(value: WindowTabCloseButtonMode) {
		this.nativeElement ? this.nativeElement.tabCloseButtonMode = value : undefined;
	}

	/** @description Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. Applicable only to TabsWindow. */
	@Input()
	get tabOverflow(): Overflow {
		return this.nativeElement ? this.nativeElement.tabOverflow : undefined;
	}
	set tabOverflow(value: Overflow) {
		this.nativeElement ? this.nativeElement.tabOverflow = value : undefined;
	}

	/** @description Detetmines Tab Strip is positioned of the TabsWindow. Applicable only to TabsWindow. */
	@Input()
	get tabPosition(): TabPosition {
		return this.nativeElement ? this.nativeElement.tabPosition : undefined;
	}
	set tabPosition(value: TabPosition) {
		this.nativeElement ? this.nativeElement.tabPosition = value : undefined;
	}

	/** @description Sets or gets the position of the scroll buttons inside the Tab header of the TabsWindow. Applicable only to TabsWindow. */
	@Input()
	get tabScrollButtonsPosition(): LayoutPosition {
		return this.nativeElement ? this.nativeElement.tabScrollButtonsPosition : undefined;
	}
	set tabScrollButtonsPosition(value: LayoutPosition) {
		this.nativeElement ? this.nativeElement.tabScrollButtonsPosition = value : undefined;
	}

	/** @description Sets or gets the orientation of the text in the tabs labels of the TabsWindow. Applicable only to TabsWindow. */
	@Input()
	get tabTextOrientation(): Orientation {
		return this.nativeElement ? this.nativeElement.tabTextOrientation : undefined;
	}
	set tabTextOrientation(value: Orientation) {
		this.nativeElement ? this.nativeElement.tabTextOrientation = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Determines the value of the TextBox/ProgressBar inside the Dialog/Prompt/Progress Window */
	@Input()
	get value(): string | number {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string | number) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Determines the actual parent of the element. The window can size and move only in the area of that element. */
	@Input()
	get windowParent(): any {
		return this.nativeElement ? this.nativeElement.windowParent : undefined;
	}
	set windowParent(value: any) {
		this.nativeElement ? this.nativeElement.windowParent = value : undefined;
	}

	/** @description Indicates how the input wraps text. Applicable only to MultilinePromptWindow. */
	@Input()
	get wrap(): WindowWrap {
		return this.nativeElement ? this.nativeElement.wrap : undefined;
	}
	set wrap(value: WindowWrap) {
		this.nativeElement ? this.nativeElement.wrap = value : undefined;
	}

	/** @description This event is triggered just before the window starts opening.
	*  @param event. The custom event. 	*/
	@Output() onOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the window is opened( visible ).
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered just before the window starts closing.
	*  @param event. The custom event. 	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the window is closed( hidden )
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the window is collapsed.
	*  @param event. The custom event. 	*/
	@Output() onCollapse: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when window's dragging is ended.
	*  @param event. The custom event. 	*/
	@Output() onDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when window's dragging is started.
	*  @param event. The custom event. 	*/
	@Output() onDragStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the window is expanded.
	*  @param event. The custom event. 	*/
	@Output() onExpand: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the window is maximized.
	*  @param event. The custom event. 	*/
	@Output() onMaximize: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the window is minimized.
	*  @param event. The custom event. 	*/
	@Output() onMinimize: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when window's resizing is ended.
	*  @param event. The custom event. 	*/
	@Output() onResizeEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when window's resizing is started.
	*  @param event. The custom event. 	*/
	@Output() onResizeStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the window is restored to it's previous state before maximization.
	*  @param event. The custom event. 	*/
	@Output() onRestore: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Appends a tabitem to the end of the list of tab items inside element. 
	* @param {Node} node. A TabItem element that should be added to the rest of the items as the last item.
	* @returns {Node}
  */
	public async appendChild(node): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.appendChild(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Sets the window to the top level so the user can interact with it. 
	*/
    public bringToFront(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.bringToFront();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.bringToFront();
            });
        }
    }

	/** @description Clears the content of the Window. 
	*/
    public clear(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clear();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clear();
            });
        }
    }

	/** @description Closes the window. 
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

	/** @description Collapses the window. 
	* @returns {HTMLElement}
  */
	public async collapse(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.collapse();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Makes sure a tab item is visible by scrolling to it. Applicable only to TabsWindow. 
	* @param {number} index. The index of the tab to scroll to.
	*/
    public ensureVisible(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(index);
            });
        }
    }

	/** @description Expands the window after being collapsed. 
	* @returns {any[]}
  */
	public async expand(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.expand();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Inserts a new tab and an associated content section. Applicable only to TabsWindow. 
	* @param {number} index. The index to insert a new tab at.
	* @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
	*/
    public insert(index: number, details: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, details);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(index, details);
            });
        }
    }

	/** @description Inserts the specified "smart-tab-item" node before the reference "smart-tab-item" node. Applicable only to TabsWindow. 
	* @param {Node} newNode. The "smart-tab-item" node to insert.
	* @param {Node | null} referenceNode?. The "smart-tab-item" node before which newNode is inserted.
	* @returns {Node}
  */
	public async insertBefore(newNode, referenceNode?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.insertBefore(newNode, referenceNode);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Removes a tab and its associated content section. Applicable only to TabsWindow. 
	* @param {number} index. The index of the tab to remove.
	*/
    public removeAt(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(index);
            });
        }
    }

	/** @description Removes a child "smart-tab-item" node. Applicable only to TabsWindow. 
	* @param {Node} node. The "smart-tab-item" node to remove.
	* @returns {Node}
  */
	public async removeChild(node): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.removeChild(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Maximizes the window to fill the area. 
	*/
    public maximize(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.maximize();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.maximize();
            });
        }
    }

	/** @description Minimizes the window. 
	*/
    public minimize(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.minimize();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.minimize();
            });
        }
    }

	/** @description Opens the window 
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

	/** @description Pins the window. Disables window dragging. 
	*/
    public pin(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.pin();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.pin();
            });
        }
    }

	/** @description Restores the window to it's previous size before maximization/minimization. 
	*/
    public restore(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.restore();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.restore();
            });
        }
    }

	/** @description Selects a tab.  Applicalbe only to TabsWindow elements. 
	* @param {number} index. The index of the tab to select.
	*/
    public select(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(index);
            });
        }
    }

	/** @description Unpins the window. Enables window dragging. 
	*/
    public unpin(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unpin();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unpin();
            });
        }
    }

	/** @description Updates a tab and its associated content section.  Applicalbe only to TabsWindow elements. 
	* @param {number} index. The index of the tab to update.
	* @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
	* @param {string | HTMLElement} content. The new content of the tab.
	*/
    public update(index: number, label: string, content: string | HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, label, content);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(index, label, content);
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
		that.eventHandlers['openingHandler'] = (event: CustomEvent) => { that.onOpening.emit(event); }
		that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);

		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['closingHandler'] = (event: CustomEvent) => { that.onClosing.emit(event); }
		that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);

		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

		that.eventHandlers['collapseHandler'] = (event: CustomEvent) => { that.onCollapse.emit(event); }
		that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);

		that.eventHandlers['dragEndHandler'] = (event: CustomEvent) => { that.onDragEnd.emit(event); }
		that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);

		that.eventHandlers['dragStartHandler'] = (event: CustomEvent) => { that.onDragStart.emit(event); }
		that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);

		that.eventHandlers['expandHandler'] = (event: CustomEvent) => { that.onExpand.emit(event); }
		that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);

		that.eventHandlers['maximizeHandler'] = (event: CustomEvent) => { that.onMaximize.emit(event); }
		that.nativeElement.addEventListener('maximize', that.eventHandlers['maximizeHandler']);

		that.eventHandlers['minimizeHandler'] = (event: CustomEvent) => { that.onMinimize.emit(event); }
		that.nativeElement.addEventListener('minimize', that.eventHandlers['minimizeHandler']);

		that.eventHandlers['resizeEndHandler'] = (event: CustomEvent) => { that.onResizeEnd.emit(event); }
		that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);

		that.eventHandlers['resizeStartHandler'] = (event: CustomEvent) => { that.onResizeStart.emit(event); }
		that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);

		that.eventHandlers['restoreHandler'] = (event: CustomEvent) => { that.onRestore.emit(event); }
		that.nativeElement.addEventListener('restore', that.eventHandlers['restoreHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['openingHandler']) {
			that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
		}

		if (that.eventHandlers['openHandler']) {
			that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
		}

		if (that.eventHandlers['closingHandler']) {
			that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
		}

		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

		if (that.eventHandlers['collapseHandler']) {
			that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
		}

		if (that.eventHandlers['dragEndHandler']) {
			that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
		}

		if (that.eventHandlers['dragStartHandler']) {
			that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
		}

		if (that.eventHandlers['expandHandler']) {
			that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
		}

		if (that.eventHandlers['maximizeHandler']) {
			that.nativeElement.removeEventListener('maximize', that.eventHandlers['maximizeHandler']);
		}

		if (that.eventHandlers['minimizeHandler']) {
			that.nativeElement.removeEventListener('minimize', that.eventHandlers['minimizeHandler']);
		}

		if (that.eventHandlers['resizeEndHandler']) {
			that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
		}

		if (that.eventHandlers['resizeStartHandler']) {
			that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
		}

		if (that.eventHandlers['restoreHandler']) {
			that.nativeElement.removeEventListener('restore', that.eventHandlers['restoreHandler']);
		}

	}
}

import React from "react";
import { WindowProperties } from "./../../index";
import { Animation, WindowAutoCapitalize, WindowDisplayMode, WindowDropPosition, WindowFooterPosition, TabPosition, WindowResizeMode, TabSelectionMode, WindowTabCloseButtonMode, Overflow, LayoutPosition, Orientation, WindowWrap} from './../../index';
export { WindowProperties } from "./../../index";
export { Animation, WindowAutoCapitalize, WindowDisplayMode, WindowDropPosition, WindowFooterPosition, TabPosition, WindowResizeMode, TabSelectionMode, WindowTabCloseButtonMode, Overflow, LayoutPosition, Orientation, WindowWrap} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface WindowProps extends WindowProperties {
    className?: string;
    style?: React.CSSProperties;

	onOpening?: ((event?: Event) => void) | undefined;
	onOpen?: ((event?: Event) => void) | undefined;
	onClosing?: ((event?: Event) => void) | undefined;
	onClose?: ((event?: Event) => void) | undefined;
	onCollapse?: ((event?: Event) => void) | undefined;
	onDragEnd?: ((event?: Event) => void) | undefined;
	onDragStart?: ((event?: Event) => void) | undefined;
	onExpand?: ((event?: Event) => void) | undefined;
	onMaximize?: ((event?: Event) => void) | undefined;
	onMinimize?: ((event?: Event) => void) | undefined;
	onResizeEnd?: ((event?: Event) => void) | undefined;
	onResizeStart?: ((event?: Event) => void) | undefined;
	onRestore?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Window or Dialog displays the interactive custom confirmations, message boxes, alerts, warnings, errors, and modal dialogs.
*/
export class Window extends React.Component<React.HTMLAttributes<Element> & WindowProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Window' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Determines if 'Add New' Tab inside the Tabs element is visible. Applicable only to TabsWindow
	*	Property type: boolean
	*/
	get addNewTab(): boolean  {
		return this.nativeElement ? this.nativeElement.addNewTab : undefined;
	}
	set addNewTab(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.addNewTab = value;
		}
	}

	/** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
	*	Property type: Animation
	*/
	get animation(): Animation  {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. Applicable only to MultilinePromptWindow.
	*	Property type: WindowAutoCapitalize
	*/
	get autoCapitalize(): WindowAutoCapitalize  {
		return this.nativeElement ? this.nativeElement.autoCapitalize : undefined;
	}
	set autoCapitalize(value: WindowAutoCapitalize) {
		if (this.nativeElement) {
			this.nativeElement.autoCapitalize = value;
		}
	}

	/** Determines whether element will auto expand when the input overflows vertically. Applicable only to MultilinePromptWindow.
	*	Property type: boolean
	*/
	get autoExpand(): boolean  {
		return this.nativeElement ? this.nativeElement.autoExpand : undefined;
	}
	set autoExpand(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoExpand = value;
		}
	}

	/** Determines the label for the 'cancel' button inside the Prompt Window.
	*	Property type: string
	*/
	get cancelLabel(): string  {
		return this.nativeElement ? this.nativeElement.cancelLabel : undefined;
	}
	set cancelLabel(value: string) {
		if (this.nativeElement) {
			this.nativeElement.cancelLabel = value;
		}
	}

	/** Determines the label for the 'Complete' button insinde the Progress Window.
	*	Property type: string
	*/
	get completeLabel(): string  {
		return this.nativeElement ? this.nativeElement.completeLabel : undefined;
	}
	set completeLabel(value: string) {
		if (this.nativeElement) {
			this.nativeElement.completeLabel = value;
		}
	}

	/** Determines the label for the 'Confirm' button insinde the Prompt Window.
	*	Property type: string
	*/
	get confirmLabel(): string  {
		return this.nativeElement ? this.nativeElement.confirmLabel : undefined;
	}
	set confirmLabel(value: string) {
		if (this.nativeElement) {
			this.nativeElement.confirmLabel = value;
		}
	}

	/** Determines if the window is collapsed or not. When collapsed the only the header of the window is visible.
	*	Property type: boolean
	*/
	get collapsed(): boolean  {
		return this.nativeElement ? this.nativeElement.collapsed : undefined;
	}
	set collapsed(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.collapsed = value;
		}
	}

	/** When a modal window is opened, thid property determines if clicking on the mask closes the window or not.
	*	Property type: boolean
	*/
	get closeOnMaskClick(): boolean  {
		return this.nativeElement ? this.nativeElement.closeOnMaskClick : undefined;
	}
	set closeOnMaskClick(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.closeOnMaskClick = value;
		}
	}

	/** Determines the data source that will be loaded to the TabsWindow. Applicable only to TabsWindow.
	*	Property type: {label: string, content: string}[]
	*/
	get dataSource(): {label: string, content: string}[]  {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: {label: string, content: string}[]) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Enables or disables the window.
	*	Property type: boolean
	*/
	get disabled(): boolean  {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disabled = value;
		}
	}

	/** Enables or disables the window snapping feature.
	*	Property type: boolean
	*/
	get disableSnap(): boolean  {
		return this.nativeElement ? this.nativeElement.disableSnap : undefined;
	}
	set disableSnap(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableSnap = value;
		}
	}

	/** Determines how the characters are displayed inside the input. Applicable to Prompt Window.
	*	Property type: WindowDisplayMode
	*/
	get displayMode(): WindowDisplayMode  {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value: WindowDisplayMode) {
		if (this.nativeElement) {
			this.nativeElement.displayMode = value;
		}
	}

	/** Applicable to TabsWindow when docked inside a DockingLayout Custom Element.  Determines where the window(it's tab items as well) can be dropped inside the DockingLayout.  The property is an array that accepts multiple positions. Note: Positions with prefix 'layout-' are applied to the Tab item children of the TabsWidnow owner that is being dragged. The rest of the positions indicate the allowed drop position inside the hovered target(TabsWindow). Used only by jqxDockingLayout custom elements. Determines the possible drop position inside the DockingLayout. The following values are allowed.
	*	Property type: WindowDropPosition
	*/
	get dropPosition(): WindowDropPosition  {
		return this.nativeElement ? this.nativeElement.dropPosition : undefined;
	}
	set dropPosition(value: WindowDropPosition) {
		if (this.nativeElement) {
			this.nativeElement.dropPosition = value;
		}
	}

	/** A callback function defining the new format for the label of the Progress Bar. Applicable only to ProgressWindow.
	*	Property type: any
	*/
	get formatFunction(): any  {
		return this.nativeElement ? this.nativeElement.formatFunction : undefined;
	}
	set formatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.formatFunction = value;
		}
	}

	/** Determines the position of the footer of the window element.
	*	Property type: WindowFooterPosition
	*/
	get footerPosition(): WindowFooterPosition  {
		return this.nativeElement ? this.nativeElement.footerPosition : undefined;
	}
	set footerPosition(value: WindowFooterPosition) {
		if (this.nativeElement) {
			this.nativeElement.footerPosition = value;
		}
	}

	/** Determines the template for the Dialog section of the window. By default footerTemplate is null.
	*	Property type: any
	*/
	get footerTemplate(): any  {
		return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
	}
	set footerTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.footerTemplate = value;
		}
	}

	/** Set's the buttons that will be visible in the header section.
	*	Property type: string[]
	*/
	get headerButtons(): string[]  {
		return this.nativeElement ? this.nativeElement.headerButtons : undefined;
	}
	set headerButtons(value: string[]) {
		if (this.nativeElement) {
			this.nativeElement.headerButtons = value;
		}
	}

	/** Determines the template for the Dialog section of the window. By default headerTemplate is null.
	*	Property type: any
	*/
	get headerTemplate(): any  {
		return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
	}
	set headerTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.headerTemplate = value;
		}
	}

	/** Determines the position of the header of the window element.
	*	Property type: TabPosition
	*/
	get headerPosition(): TabPosition  {
		return this.nativeElement ? this.nativeElement.headerPosition : undefined;
	}
	set headerPosition(value: TabPosition) {
		if (this.nativeElement) {
			this.nativeElement.headerPosition = value;
		}
	}

	/** Sets additional helper text below the text box. The hint is visible only when the text box is focued. Applicable to Prompt Window.
	*	Property type: any
	*/
	get hint(): any  {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value: any) {
		if (this.nativeElement) {
			this.nativeElement.hint = value;
		}
	}

	/** Sets the value of the Progress bar to indeterminate state(null) and starts the animation. Applicable only to ProgressWindow.
	*	Property type: boolean
	*/
	get indeterminate(): boolean  {
		return this.nativeElement ? this.nativeElement.indeterminate : undefined;
	}
	set indeterminate(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.indeterminate = value;
		}
	}

	/** Sets the filling direction of the Progress Bar. Applicable only to ProgressWindow.
	*	Property type: boolean
	*/
	get inverted(): boolean  {
		return this.nativeElement ? this.nativeElement.inverted : undefined;
	}
	set inverted(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.inverted = value;
		}
	}

	/** The label of the window that appears in the header area.
	*	Property type: string
	*/
	get label(): string  {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		if (this.nativeElement) {
			this.nativeElement.label = value;
		}
	}

	/** When enabled the resizing operation happens live. By default it's not enabled and during resizing a highlighter around the edges of the window appears to outline  the current size of the element.
	*	Property type: boolean
	*/
	get liveResize(): boolean  {
		return this.nativeElement ? this.nativeElement.liveResize : undefined;
	}
	set liveResize(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.liveResize = value;
		}
	}

	/** Applicable only to TabsWindow when used with a DockingLayout custom element.Used only by jqxDockingLayout. Determines the owner jqxDockingLayout  that the window belongs to. When the tabsWindow has been removed from a DockingLayout element, the property is used to indicate that it belongs to that particular Dockinglayout. Accepts a string, representing the ID of a jqxDockingLayout on the page, or an instance of jqxDokcingLayout.
	*	Property type: any
	*/
	get layout(): any  {
		return this.nativeElement ? this.nativeElement.layout : undefined;
	}
	set layout(value: any) {
		if (this.nativeElement) {
			this.nativeElement.layout = value;
		}
	}

	/** Sets or gets the language. Used in conjunction with the property messages. 
	*	Property type: string
	*/
	get locale(): string  {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		if (this.nativeElement) {
			this.nativeElement.locale = value;
		}
	}

	/** Applicable only to TabsWindow when docked inside a DockingLayout Custom Element.Determines of the item can be resized or not.
	*	Property type: boolean
	*/
	get locked(): boolean  {
		return this.nativeElement ? this.nativeElement.locked : undefined;
	}
	set locked(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.locked = value;
		}
	}

	/** Callback, related to localization module. 
	*	Property type: any
	*/
	get localizeFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.localizeFormatFunction = value;
		}
	}

	/** Determines if the window is maximized or not. When maximized the window covers the whole viewport.
	*	Property type: boolean
	*/
	get maximized(): boolean  {
		return this.nativeElement ? this.nativeElement.maximized : undefined;
	}
	set maximized(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.maximized = value;
		}
	}

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
	*	Property type: any
	*/
	get messages(): any  {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		if (this.nativeElement) {
			this.nativeElement.messages = value;
		}
	}

	/** Determines if the window is modal or not. If true the user can only interact with the window and nothing else on the page.
	*	Property type: boolean
	*/
	get modal(): boolean  {
		return this.nativeElement ? this.nativeElement.modal : undefined;
	}
	set modal(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.modal = value;
		}
	}

	/** Applicable to TabsWindow when docked inside a DockingLayout Custom Element. Determines the max size of the item. Applicable to Progress Window by allowing the user to specify the maximum of the ProgressBar.
	*	Property type: string | number | null
	*/
	get max(): string | number | null  {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: string | number | null) {
		if (this.nativeElement) {
			this.nativeElement.max = value;
		}
	}

	/** Applicable to TabsWindow when docked inside DockingLayout Custom Element. Determines the min size of the item. Applicable to Progress Window by allowing the user to specify the minimu of the ProgressBar.
	*	Property type: string | number | null
	*/
	get min(): string | number | null  {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: string | number | null) {
		if (this.nativeElement) {
			this.nativeElement.min = value;
		}
	}

	/** Determines if the window is minimized or not. When minimized the window is docked at the bottom left corner of the viewport.
	*	Property type: boolean
	*/
	get minimized(): boolean  {
		return this.nativeElement ? this.nativeElement.minimized : undefined;
	}
	set minimized(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.minimized = value;
		}
	}

	/** Sets or gets the maximum number of characters that the user can enter. Applicable to Prompt/MultilinePrompt Window.
	*	Property type: number
	*/
	get maxLength(): number  {
		return this.nativeElement ? this.nativeElement.maxLength : undefined;
	}
	set maxLength(value: number) {
		if (this.nativeElement) {
			this.nativeElement.maxLength = value;
		}
	}

	/** Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality. Applicable to Prompt/MultilinePrompt Window.
	*	Property type: number
	*/
	get minLength(): number  {
		return this.nativeElement ? this.nativeElement.minLength : undefined;
	}
	set minLength(value: number) {
		if (this.nativeElement) {
			this.nativeElement.minLength = value;
		}
	}

	/** Determines if the window is visible or not.
	*	Property type: boolean
	*/
	get opened(): boolean  {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.opened = value;
		}
	}

	/** Determines if the window is pinned or not. Pinned window is a window that can't be dragged but can be resized.
	*	Property type: boolean
	*/
	get pinned(): boolean  {
		return this.nativeElement ? this.nativeElement.pinned : undefined;
	}
	set pinned(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.pinned = value;
		}
	}

	/** Determines the input's placeholder. Applicable to Prompt Window.
	*	Property type: string
	*/
	get placeholder(): string  {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		if (this.nativeElement) {
			this.nativeElement.placeholder = value;
		}
	}

	/** Determines the label for the Input insinde the PromptWindow.
	*	Property type: string
	*/
	get promptLabel(): string  {
		return this.nativeElement ? this.nativeElement.promptLabel : undefined;
	}
	set promptLabel(value: string) {
		if (this.nativeElement) {
			this.nativeElement.promptLabel = value;
		}
	}

	/** If the element is readonly, users cannot interact with it.
	*	Property type: boolean
	*/
	get readonly(): boolean  {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.readonly = value;
		}
	}

	/** When applied a resize indicator is displayed in the bottom right corner of the window and resizing operation can be initiated only from its position.
	*	Property type: boolean
	*/
	get resizeIndicator(): boolean  {
		return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
	}
	set resizeIndicator(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.resizeIndicator = value;
		}
	}

	/** Determines the resizing mode of the window.  Several modes are available:   none - resizing is disabled.  vertical - vertical resizing is allowed.  horizontal - horizontal resizing is allowed. both - horizontal and vertical resizing is allowed. top - the window can only be resized from the top side. bottom - the window is resizable only from the bottom side. left - the window can be resized only from the left side. right - the window can be resized only from the right side. 
	*	Property type: WindowResizeMode
	*/
	get resizeMode(): WindowResizeMode  {
		return this.nativeElement ? this.nativeElement.resizeMode : undefined;
	}
	set resizeMode(value: WindowResizeMode) {
		if (this.nativeElement) {
			this.nativeElement.resizeMode = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
	*	Property type: boolean
	*/
	get rightToLeft(): boolean  {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.rightToLeft = value;
		}
	}

	/** Specifies that the user must fill the input before submitting a form with the text box.Applicable to Prompt Window.
	*	Property type: boolean
	*/
	get required(): boolean  {
		return this.nativeElement ? this.nativeElement.required : undefined;
	}
	set required(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.required = value;
		}
	}

	/** Specifies the message that will appear if required is set and no value is provided in the input. Applicable to Prompt Window.
	*	Property type: string
	*/
	get requiredMessage(): string  {
		return this.nativeElement ? this.nativeElement.requiredMessage : undefined;
	}
	set requiredMessage(value: string) {
		if (this.nativeElement) {
			this.nativeElement.requiredMessage = value;
		}
	}

	/** Determines whether the content of the input will be selected on focus or not. Applicable to Prompt Window.
	*	Property type: boolean
	*/
	get selectAllOnFocus(): boolean  {
		return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
	}
	set selectAllOnFocus(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.selectAllOnFocus = value;
		}
	}

	/** Sets or gets which tab is selected. Applicable only to TabsWindow.
	*	Property type: number | null
	*/
	get selectedIndex(): number | null  {
		return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
	}
	set selectedIndex(value: number | null) {
		if (this.nativeElement) {
			this.nativeElement.selectedIndex = value;
		}
	}

	/** Determines the way the user can switch between tabs. Applicable only to TabsWindow.
	*	Property type: TabSelectionMode
	*/
	get selectionMode(): TabSelectionMode  {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: TabSelectionMode) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** Indicates the index of the last character in the current selection. Applicable only to MultilinePromptWindow.
	*	Property type: number
	*/
	get selectionEnd(): number  {
		return this.nativeElement ? this.nativeElement.selectionEnd : undefined;
	}
	set selectionEnd(value: number) {
		if (this.nativeElement) {
			this.nativeElement.selectionEnd = value;
		}
	}

	/** Indicates the index to the first character in the current selection. Applicable only to MultilinePromptWindow.
	*	Property type: number
	*/
	get selectionStart(): number  {
		return this.nativeElement ? this.nativeElement.selectionStart : undefined;
	}
	set selectionStart(value: number) {
		if (this.nativeElement) {
			this.nativeElement.selectionStart = value;
		}
	}

	/** Enables/Disabled the label for the Progress Bar. Applicable only to Progress Window.
	*	Property type: boolean
	*/
	get showProgressValue(): boolean  {
		return this.nativeElement ? this.nativeElement.showProgressValue : undefined;
	}
	set showProgressValue(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showProgressValue = value;
		}
	}

	/** A getter that returns the siblings (that share the same parent) of a LayoutPanel item that is docked inside a DockingLayout. The siblings are also DockingLayout items ( LayoutPanels).Applicable only to TabsWindow when docked inside a DockingLayout.
	*	Property type: any
	*/
	get siblings(): any  {
		return this.nativeElement ? this.nativeElement.siblings : undefined;
	}
	set siblings(value: any) {
		if (this.nativeElement) {
			this.nativeElement.siblings = value;
		}
	}

	/** Applicable to TabsWindow when nested inside a DockingLayout Custom Element. Determines the size of the item.
	*	Property type: string
	*/
	get size(): string  {
		return this.nativeElement ? this.nativeElement.size : undefined;
	}
	set size(value: string) {
		if (this.nativeElement) {
			this.nativeElement.size = value;
		}
	}

	/** Specifies whether the element is to have its spelling and grammar checked or not. Applicable only to MultilinePromptWindow.
	*	Property type: boolean
	*/
	get spellCheck(): boolean  {
		return this.nativeElement ? this.nativeElement.spellCheck : undefined;
	}
	set spellCheck(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.spellCheck = value;
		}
	}

	/** Sets or gets whether close buttons are displayed inside the Tab Strip of the TabsWindow. Applicable only to TabsWindow.
	*	Property type: boolean
	*/
	get tabCloseButtons(): boolean  {
		return this.nativeElement ? this.nativeElement.tabCloseButtons : undefined;
	}
	set tabCloseButtons(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.tabCloseButtons = value;
		}
	}

	/** Determines if the close button is visible on select or always. Applicable only to TabsWindow.
	*	Property type: WindowTabCloseButtonMode
	*/
	get tabCloseButtonMode(): WindowTabCloseButtonMode  {
		return this.nativeElement ? this.nativeElement.tabCloseButtonMode : undefined;
	}
	set tabCloseButtonMode(value: WindowTabCloseButtonMode) {
		if (this.nativeElement) {
			this.nativeElement.tabCloseButtonMode = value;
		}
	}

	/** Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. Applicable only to TabsWindow.
	*	Property type: Overflow
	*/
	get tabOverflow(): Overflow  {
		return this.nativeElement ? this.nativeElement.tabOverflow : undefined;
	}
	set tabOverflow(value: Overflow) {
		if (this.nativeElement) {
			this.nativeElement.tabOverflow = value;
		}
	}

	/** Detetmines Tab Strip is positioned of the TabsWindow. Applicable only to TabsWindow.
	*	Property type: TabPosition
	*/
	get tabPosition(): TabPosition  {
		return this.nativeElement ? this.nativeElement.tabPosition : undefined;
	}
	set tabPosition(value: TabPosition) {
		if (this.nativeElement) {
			this.nativeElement.tabPosition = value;
		}
	}

	/** Sets or gets the position of the scroll buttons inside the Tab header of the TabsWindow. Applicable only to TabsWindow.
	*	Property type: LayoutPosition
	*/
	get tabScrollButtonsPosition(): LayoutPosition  {
		return this.nativeElement ? this.nativeElement.tabScrollButtonsPosition : undefined;
	}
	set tabScrollButtonsPosition(value: LayoutPosition) {
		if (this.nativeElement) {
			this.nativeElement.tabScrollButtonsPosition = value;
		}
	}

	/** Sets or gets the orientation of the text in the tabs labels of the TabsWindow. Applicable only to TabsWindow.
	*	Property type: Orientation
	*/
	get tabTextOrientation(): Orientation  {
		return this.nativeElement ? this.nativeElement.tabTextOrientation : undefined;
	}
	set tabTextOrientation(value: Orientation) {
		if (this.nativeElement) {
			this.nativeElement.tabTextOrientation = value;
		}
	}

	/** Determines the theme. Theme defines the look of the element
	*	Property type: string
	*/
	get theme(): string  {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		if (this.nativeElement) {
			this.nativeElement.theme = value;
		}
	}

	/** If is set to true, the element cannot be focused.
	*	Property type: boolean
	*/
	get unfocusable(): boolean  {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.unfocusable = value;
		}
	}

	/** Determines the value of the TextBox/ProgressBar inside the Dialog/Prompt/Progress Window
	*	Property type: string | number
	*/
	get value(): string | number  {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}

	/** Determines the actual parent of the element. The window can size and move only in the area of that element.
	*	Property type: any
	*/
	get windowParent(): any  {
		return this.nativeElement ? this.nativeElement.windowParent : undefined;
	}
	set windowParent(value: any) {
		if (this.nativeElement) {
			this.nativeElement.windowParent = value;
		}
	}

	/** Indicates how the input wraps text. Applicable only to MultilinePromptWindow.
	*	Property type: WindowWrap
	*/
	get wrap(): WindowWrap  {
		return this.nativeElement ? this.nativeElement.wrap : undefined;
	}
	set wrap(value: WindowWrap) {
		if (this.nativeElement) {
			this.nativeElement.wrap = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["addNewTab","animation","autoCapitalize","autoExpand","cancelLabel","completeLabel","confirmLabel","collapsed","closeOnMaskClick","dataSource","disabled","disableSnap","displayMode","dropPosition","formatFunction","footerPosition","footerTemplate","headerButtons","headerTemplate","headerPosition","hint","indeterminate","inverted","label","liveResize","layout","locale","locked","localizeFormatFunction","maximized","messages","modal","max","min","minimized","maxLength","minLength","opened","pinned","placeholder","promptLabel","readonly","resizeIndicator","resizeMode","rightToLeft","required","requiredMessage","selectAllOnFocus","selectedIndex","selectionMode","selectionEnd","selectionStart","showProgressValue","siblings","size","spellCheck","tabCloseButtons","tabCloseButtonMode","tabOverflow","tabPosition","tabScrollButtonsPosition","tabTextOrientation","theme","unfocusable","value","windowParent","wrap"];
	}
	/**  This event is triggered just before the window starts opening.
	*  @param event. The custom event. 	*/
	onOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the window is opened( visible ).
	*  @param event. The custom event. 	*/
	onOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered just before the window starts closing.
	*  @param event. The custom event. 	*/
	onClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the window is closed( hidden )
	*  @param event. The custom event. 	*/
	onClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the window is collapsed.
	*  @param event. The custom event. 	*/
	onCollapse?: ((event?: Event) => void) | undefined
	/**  This event is triggered when window's dragging is ended.
	*  @param event. The custom event. 	*/
	onDragEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when window's dragging is started.
	*  @param event. The custom event. 	*/
	onDragStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the window is expanded.
	*  @param event. The custom event. 	*/
	onExpand?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the window is maximized.
	*  @param event. The custom event. 	*/
	onMaximize?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the window is minimized.
	*  @param event. The custom event. 	*/
	onMinimize?: ((event?: Event) => void) | undefined
	/**  This event is triggered when window's resizing is ended.
	*  @param event. The custom event. 	*/
	onResizeEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when window's resizing is started.
	*  @param event. The custom event. 	*/
	onResizeStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the window is restored to it's previous state before maximization.
	*  @param event. The custom event. 	*/
	onRestore?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onOpening","onOpen","onClosing","onClose","onCollapse","onDragEnd","onDragStart","onExpand","onMaximize","onMinimize","onResizeEnd","onResizeStart","onRestore","onCreate","onReady"];
	}
	/** Appends a tabitem to the end of the list of tab items inside element. 
	* @param {Node} node. A TabItem element that should be added to the rest of the items as the last item.
	* @returns {Node}
  */
	public async appendChild(node:Node) : Promise<any> {
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

	/** Sets the window to the top level so the user can interact with it. 
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

	/** Clears the content of the Window. 
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

	/** Closes the window. 
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

	/** Collapses the window. 
	* @returns {HTMLElement}
  */
	public async collapse() : Promise<any> {
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

	/** Makes sure a tab item is visible by scrolling to it. Applicable only to TabsWindow. 
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

	/** Expands the window after being collapsed. 
	* @returns {any[]}
  */
	public async expand() : Promise<any> {
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

	/** Inserts a new tab and an associated content section. Applicable only to TabsWindow. 
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

	/** Inserts the specified "smart-tab-item" node before the reference "smart-tab-item" node. Applicable only to TabsWindow. 
	* @param {Node} newNode. The "jqx-tab-item" node to insert.
	* @param {Node | null} referenceNode?. The "jqx-tab-item" node before which newNode is inserted.
	* @returns {Node}
  */
	public async insertBefore(newNode:Node, referenceNode?:Node | null) : Promise<any> {
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

	/** Removes a tab and its associated content section. Applicable only to TabsWindow. 
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

	/** Removes a child "smart-tab-item" node. Applicable only to TabsWindow. 
	* @param {Node} node. The "jqx-tab-item" node to remove.
	* @returns {Node}
  */
	public async removeChild(node:Node) : Promise<any> {
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

	/** Maximizes the window to fill the area. 
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

	/** Minimizes the window. 
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

	/** Opens the window 
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

	/** Pins the window. Disables window dragging. 
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

	/** Restores the window to it's previous size before maximization/minimization. 
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

	/** Selects a tab.  Applicalbe only to TabsWindow elements. 
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

	/** Unpins the window. Enables window dragging. 
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

	/** Updates a tab and its associated content section.  Applicalbe only to TabsWindow elements. 
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



	constructor(props: any) {
		super(props);
		this.componentRef = React.createRef();
	}

	componentDidRender(initialize: boolean) {
		const that = this;
		const props: any = {};
		const events: any = {};
		let styles: any = null;

		for(let prop in that.props) {
			if (prop === 'children') {
				continue;
			}

			if (prop === 'style') {
				styles = that.props[prop];
				continue;
			}

			if (prop.startsWith('on') && that.properties.indexOf(prop) === -1) {
				events[prop] = that.props[prop];
				continue;
			}

			props[prop] = that.props[prop];
		}

		if (initialize) {
			that.nativeElement = this.componentRef.current;
		}

		for(let prop in props) {
			if (prop === 'class') {
				const classNames = props[prop].trim().split(' ');

				for(let className in classNames) {
					if (!that.nativeElement.classList.contains(classNames[className]) && classNames[className] !== "") {
						that.nativeElement.classList.add(classNames[className]);
					}
				}

				continue;
			}

			if (props[prop] !== that.nativeElement[prop]) {
				const normalizeProp = (str: string) => {
					return str.replace(/-([a-z])/g, function (g) {
						return g[1].toUpperCase();
					});
				}

				if (prop === 'hover' || prop === 'active' || prop === 'focus' || prop === 'selected') {
					that.nativeElement.setAttribute(prop, '');
				}

				const normalizedProp = normalizeProp(prop);

				that.nativeElement[normalizedProp] = props[prop];
			}
		}

		
		for(let eventName in events) {
			that[eventName] = events[eventName];
			that.nativeElement[eventName.toLowerCase()] = events[eventName];
        }

		if (initialize) {
			if (that.onCreate) {
				that.onCreate();
			}

			that.nativeElement.whenRendered(() => {
				if (that.onReady) {
					that.onReady();
				}
			});
		}

		// setup styles.

		if (styles) {
			for(let styleName in styles) {
				that.nativeElement.style[styleName] = styles[styleName];
			}
		}
	}

	componentDidMount() {
		this.componentDidRender(true);
    }

	componentDidUpdate() {
		this.componentDidRender(false);
    }

	componentWillUnmount() {
		const that = this;

		if (!that.nativeElement) {
			return;
		}
		
		that.nativeElement.whenRenderedCallbacks = [];
		
		for(let i = 0; i < that.eventListeners.length; i++){
			const eventName = that.eventListeners[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-window", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Window;

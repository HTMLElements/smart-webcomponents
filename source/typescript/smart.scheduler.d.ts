import  {BaseElement, Animation} from "./smart.element"

export interface SchedulerProperties {
  /**
   * Determines the scroll speed while dragging an event. 
   * Default value: 30
   */
  autoScrollStep?: number;
  /**
   * Determines the color scheme for the event background selector in the event window editor. 
   * Default value: #D50000,#E67C73,#F4511E,#F6BF26,#33B679,#0B8043,#039BE5,#3F51B5,#7986CB,#8E24AA,#616161,
   */
  colorScheme?: string[];
  /**
   * Enables/Disables the current time indicator. Current time indicator shows the current time in the appropriate view cells. 
   * Default value: false
   */
  currentTimeIndicator?: boolean;
  /**
   * Determines the refresh interval in seconds for the currentTimeIndicator. 
   * Default value: 1
   */
  currentTimeIndicatorInterval?: number;
  /**
   * Determines the context menu items that are visible when the Context Menu is opened.
   * Default value: null
   */
  contextMenuDataSource?: any;
  /**
   * Allows to customize the content of the event elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
   * Default value: null
   */
  eventTemplate?: any;
  /**
   * Allows to customize the content of the event collector elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
   * Default value: null
   */
  eventCollectorTemplate?: any;
  /**
   *  Determines how the events inside the Scheduler are rendered.classic - the events are arranged next to each other and try to fit inside the cells.modern - the events obey the CSS property that determines their size and if there's not enough space inside the cell for all events to appear, an event collector is created to hold the rest of the events. On mobile phones only collectors are created.
   * Default value: "modern"
   */
  eventRenderMode?: string;
  /**
   * Allows to customize the content of the event menu items (tooltip). When clicked on an event element an event menu with details opens. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
   * Default value: null
   */
  eventTooltipTemplate?: any;
  /**
   * Allows to customize the content of the timeline cells. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each cell with the following parameters: cellContent - the content holder for the cell,cellDate - the cell date.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the value of the cell.
   * Default value: null
   */
  cellTemplate?: any;
  /**
   * Determines the currently visible date for the Scheduler.
   * Default value: new Date()
   */
  dateCurrent?: any;
  /**
   * Sets the Schedulers's Data Export options.
   * Default value: [object Object]
   */
  dataExport?: SchedulerDataExport;
  /**
   * Determines the events that will be loaded inside the Timeline. Each event represents an object that should contain the following properties:
   * Default value: 
   */
  dataSource?: SchedulerDataSource[];
  /**
   * A callback that can be used to customize the text inside the date selector located in the header. The callback has one parameter - the current date.
   * Default value: null
   */
  dateSelectorFormatFunction?: any;
  /**
   * Determines the day format of the dates in the timeline.
   * Default value: short
   */
  dayFormat?: SchedulerDayFormat;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Disables auto scrolling of the timeline while dragging/resizing an event.
   * Default value: false
   */
  disableAutoScroll?: boolean;
  /**
   * Disables dragging of events.
   * Default value: false
   */
  disableDrag?: boolean;
  /**
   * Disables dropping of events.
   * Default value: false
   */
  disableDrop?: boolean;
  /**
   * Disables resizing of events.
   * Default value: false
   */
  disableResize?: boolean;
  /**
   * Disables the cell selection.
   * Default value: false
   */
  disableSelection?: boolean;
  /**
   * Disables the window editor for the events.
   * Default value: false
   */
  disableWindowEditor?: boolean;
  /**
   * Disables the context menu of the events and cells.
   * Default value: false
   */
  disableContextMenu?: boolean;
  /**
   * Disables the event menu that appears when an event/collector has been clicked.
   * Default value: false
   */
  disableEventMenu?: boolean;
  /**
   * Disables the view menu that allows to select the current Scheduler view.
   * Default value: false
   */
  disableViewMenu?: boolean;
  /**
   * Disables the date menu that allows to select the current Scheduler date.
   * Default value: false
   */
  disableDateMenu?: boolean;
  /**
   * A callback that can be used to customize the drag feedback that appears when an event is dragged.
   * Default value: null
   */
  dragFeedbackFormatFunction?: any;
  /**
   * Determines the offset for the drag feedback from the pointer.
   * Default value: 10,10
   */
  dragOffset?: any;
  /**
   * A getter that returns  an array of all Scheduler events.
   * Default value: 
   */
  events?: SchedulerEvent[];
  /**
   * Determines the first day of week for the Scheduler. By default it's Sunday.
   * Default value: 0
   */
  firstDayOfWeek?: number;
  /**
   * Determines whether the events will be grouped by date.
   * Default value: false
   */
  groupByDate?: boolean;
  /**
   * Determines the grouping orientation.
   * Default value: horizontal
   */
  groupOrientation?: SchedulerGroupOrientation;
  /**
   * Allows to customize the content of the group cells that are visible inside the header. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each group cell with the following parameters: cellContent - the content holder for the group cell.cellObj - the group cell object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
   * Default value: null
   */
  groupTemplate?: any;
  /**
   * Determines the resources that the events are grouped by.
   * Default value: 
   */
  groups?: any;
  /**
   * Determines the end hour that will be displayed in 'day' and 'week' views.
   * Default value: 23
   */
  hourEnd?: number;
  /**
   * Determines the start hour that will be displayed in 'day' and 'week' views.
   * Default value: 0
   */
  hourStart?: number;
  /**
   * Determines the formatting of hours inside the element.
   * Default value: numeric
   */
  hourFormat?: SchedulerHourFormat;
  /**
   * Allows to customize the header of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: headerContent - the header container..
   * Default value: null
   */
  headerTemplate?: any;
  /**
   *  Determines the position of the Date selector inside the Header of the element.
   * Default value: near
   */
  headerDatePosition?: SchedulerHeaderDatePosition;
  /**
   *  Determines the styling of the Header navigation controls.
   * Default value: flat
   */
  headerNavigationStyle?: SchedulerHeaderNavigationStyle;
  /**
   *  Determines the position of the view selector control inside the Header of the element.
   * Default value: far
   */
  headerViewPosition?: SchedulerHeaderViewPosition;
  /**
   * Determines whether the 'All Day' container with the all day events is hidden or not.
   * Default value: false
   */
  hideAllDay?: boolean;
  /**
   * Determines whether the days set by 'nonworkingDays' property are hidden or not.
   * Default value: false
   */
  hideNonworkingWeekdays?: boolean;
  /**
   * Determines whether the 'Today' button is hidden or not.
   * Default value: false
   */
  hideTodayButton?: boolean;
  /**
   * Determines whether the checkable items in the view selection menu are hidden or not.
   * Default value: false
   */
  hideViewMenuCheckableItems?: boolean;
  /**
   * Determines whether the weekend days are hidden or not.
   * Default value: false
   */
  hideWeekend?: boolean;
  /**
   * Determines weather or not horizontal scrollbar is shown.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   *  Determines the language of the Scheduler. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Detetmines the maximum view date for the Scheduler.
   * Default value: 2100-1-1
   */
  max?: any;
  /**
   * Detetmines the minimum view date for the Scheduler.
   * Default value: 1900-1-1
   */
  min?: any;
  /**
   * Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the minute formatting inside the Scheduler.
   * Default value: 2-digit
   */
  minuteFormat?: MinuteFormat;
  /**
   * Determines the month name formatting inside the Scheduler.
   * Default value: long
   */
  monthFormat?: MonthFormat;
  /**
   * Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be colored differently inside the Timeline. The color is determined by a CSS variable.
   * Default value: 
   */
  nonworkingDays?: any;
  /**
   * Determines the nonworking hours of the day. Hours are represented as numbers inside an array, however ranges of hours can be defined as an array with starting and ending hour separated by a comma. In the timline the cells that represent nonworking days are colored differently from the rest.
   * Default value: 
   */
  nonworkingHours?: any;
  /**
   * Determines the interval (in seconds) at which the element will check for notifications.
   * Default value: 60
   */
  notificationInterval?: number;
  /**
   * Determines the visibility of the resize handles.
   * Default value: auto
   */
  resizeHandlesVisibility?: ResizeHandlesVisibility;
  /**
   * Determines the rate at which the element will refresh it's content on element resize. By default it's refresh immediately. This property is used for element resize throttling
   * Default value: 0
   */
  resizeInterval?: number;
  /**
   * An array of resources that can be assigned to the events.
   * Default value: 
   */
  resources?: SchedulerResource[];
  /**
   * Defines an array of dates that are not allowed to have events on. Events that overlap restricted Dates or start/end on them will not be displayed.
   * Default value: 
   */
  restrictedDates?: any;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   *  Determines the position of the date navigation navigation buttons inside the header of the element.
   * Default value: near
   */
  scrollButtonsPosition?: SchedulerScrollButtonsPosition;
  /**
   * Enables/Disables the current time shader. If enabled all cells that represent past time will be shaded.
   * Default value: false
   */
  shadeUntilCurrentTime?: boolean;
  /**
   * Determines the repeating delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons.
   * Default value: 80
   */
  spinButtonsDelay?: number;
  /**
   * Determines the initial delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons.
   * Default value: 0
   */
  spinButtonsInitialDelay?: number;
  /**
   * Defines the statuses that will be available for selection thourgh the window editor for the events.
   * Default value: [{"label":"None"},{"label":"Free","value":"free"},{"label":"Tentative","value":"tentative"},{"label":"Busy","value":"busy"},{"label":"Out of Office","value":"outOfOffice"}]
   */
  statuses?: SchedulerStatuse[];
  /**
   * Sets or gets the element's visual theme. 
   * Default value: ""
   */
  theme?: string;
  /**
   * A format function for the Header of the Timeline. Allows to modify the date labels in the header cells.
   * Default value: null
   */
  timelineHeaderFormatFunction?: any;
  /**
   * Determines the date scale for the timeline cells.
   * Default value: hour
   */
  timelineDayScale?: SchedulerTimelineDayScale;
  /**
   * Enables/Disables the tick marks next to the time cells in the vertical header of the element. Time header appears in 'day' and 'week' views.
   * Default value: "false"
   */
  timeRulerTicks?: string;
  /**
   * Determines the timeZone that the dates will be displayed in. Accepts values from the IANA time zone database. By default it uses the local time zone.
   * Default value: ""
   */
  timeZone?: string;
  /**
   * Allows to display multiple timeZones at once. Accepts an array values from the IANA time zone database. By default it uses the local time zone.
   * Default value: 
   */
  timeZones?: any;
  /**
   * Determines the delay ( in miliseconds) before the tooltip/menu appears.
   * Default value: 0
   */
  tooltipDelay?: number;
  /**
   * Determines the offset ot the tooltip/menu.
   * Default value: 
   */
  tooltipOffset?: number[];
  /**
   * Determines weather or not vertical scrollbar is shown.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /**
   * Determines the current view. The property accepts view values that are defined in the views property. Custom views should contain a valid value that will be set as the current view.
   * Default value: "day"
   */
  view?: string;
  /**
   * Indicates the current Scheduler viewType. Custom views must contain a valid type property that corresponds to one of the view types. This property should not be set.
   * Default value: day
   */
  viewType?: SchedulerViewType;
  /**
   * Determines the viewing date range of the timeline. Custom views can be defined as objects instead of strings. The view object should contain the following properties: label - the label for the view.value - the value for the view. The value is the unique identifier for the view.type - the type of view. The type should be one of the default allowed values for a view.hideWeekend - an Optional property that allows to hide the weekend only for this specific view.hideNonworkingWeekdays - an Optional property that allows to hide the nonwrking weekdays for this specific view.shortcutKey - an Optional property that allows to set a custom shortcut key for the view.
   * Default value: day,week
   */
  views?: SchedulerViews;
  /**
   * Determines type of the view selector located in the header of the element.
   * Default value: menu
   */
  viewSelectorType?: SchedulerViewSelectorType;
  /**
   * Determines the format of the week days inside the element. 
   * Default value: short
   */
  weekdayFormat?: WeekDayFormat;
  /**
   * Determines the format of the dates inside the timeline header when they represent years.
   * Default value: numeric
   */
  yearFormat?: YearFormat;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * A function that can be used to completly customize the popup Window that is used to edit events. The function has the following arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. The default type is an empty string which means that it's the default event editing window. The other type is 'confirm' ( confirmation window) that appears when clicking on a repeating event. eventObj - the event object that is going to be edited.
   * Default value: null
   */
  windowCustomizationFunction?: any;
}
/**
 Scheduler displays a set ot Events in Day, Week, Month, Agenda, Timeline Day, Timeline Week, Timeline Month views.
*/
export interface Scheduler extends BaseElement, SchedulerProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a batch update was started after executing the <b>beginUpdate</b> method.
	* @param event. The custom event.    */
  onBeginUpdate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a batch update was ended from after executing the <b>endUpdate</b> method.
	* @param event. The custom event.    */
  onEndUpdate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a new cell is selected/unselected.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue)
   *  value - The new selected Date.
   *  oldValue - The previously selected Date.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when en event, event item or a context menu item is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, type, itemObj)
   *  item - The HTMLElement for the event.
   *  type - The type of item that is clicked. The possible values are: <ul><li>event - when an event item is clicked.</li><li>context - when a context menu item is clicked.</li></ul>.
   *  itemObj - The event object.
   */
  onItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an Event is inserted.
	* @param event. The custom event. Custom data event was created with: ev.detail(item)
   *  item - An object that represents the actual item with it's attributes.
   */
  onItemInsert?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an Event is removed.
	* @param event. The custom event. Custom data event was created with: ev.detail(item)
   *  item - An object that represents the actual item with it's attributes.
   */
  onItemRemove?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an Event is updated.
	* @param event. The custom event. Custom data event was created with: ev.detail(type, item)
   *  type - The type of item that has been modified.
   *  item - An object that represents the actual item with it's attributes.
   */
  onItemUpdate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the view is changed via user interaction.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The value of the previously selected view.
   *  value - The value of the new selected view.
   */
  onViewChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a shortcut key for an event is pressed. By default only 'Delete' key is used.
	* @param event. The custom event. Custom data event was created with: ev.detail(key, target, eventObj)
   *  key - The shortcut key that was pressed.
   *  target - The event target (HTMLElement).
   *  eventObj - The scheduler Event object that affected by the keypress.
   */
  onEventShortcutKey?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the 'dateCurrent' property is changed. This can be caused by navigating to a different date.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous current date that was in view.
   *  value - The current date in view.
   */
  onDateChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when dragging of an event begins. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, itemDateRange, originalEvent)
   *  target - The HTMLElement that corresponds to the event that is going to be dragged.
   *  item - The scheduler Event object that is going to be dragged.
   *  itemDateRange - The start/end dates for the Scheduler Event.
   *  originalEvent - The original event object.
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when dragging of an event finishes.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, itemDateRange, originalEvent)
   *  target - The HTMLElement that corresponds to the event that is dragged.
   *  item - The scheduler Event object that is dragged.
   *  itemDateRange - The new start/end dates for the dragged Scheduler Event.
   *  originalEvent - The original event object.
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, itemDateRange, originalEvent)
   *  target - The HTMLElement that corresponds to the event that is going to be resized.
   *  item - The scheduler Event object that is going to be resized.
   *  itemDateRange - The start/end dates for Scheduler Event that is going to be resized.
   *  originalEvent - The original event object.
   */
  onResizeStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the resizing of an event finishes.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, itemDateRange, originalEvent)
   *  target - The HTMLElement that corresponds to the event that is resized.
   *  item - The scheduler Event object that is resized.
   *  itemDateRange - The new start/end dates for the resized Scheduler Event.
   *  originalEvent - The original event object.
   */
  onResizeEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user starts top open the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, type)
   *  target - The dialog window that is opening.
   *  item - The event object that is going to be edited.
   *  type - The type of window that is going to open. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
   */
  onEditDialogOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user opens the event dialog window.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, editors, item)
   *  target - The dialog window that is opened.
   *  editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
   *  item - The event object that is being edited.
   */
  onEditDialogOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user closes the event dialog window.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, editors, item)
   *  target - The dialog window that is closed.
   *  editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
   *  item - The event object that is being edited.
   */
  onEditDialogClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user is about to close the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, type)
   *  target - The dialog window that is closing.
   *  item - The event object that is edited.
   *  type - The type of window that is going to be closed. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
   */
  onEditDialogClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user begins to open the context menu on a timeline cell or an event element. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, cellObj, eventObj)
   *  target - The context menu instance.
   *  owner - The HTMLElement that the menu belongs to.
   *  cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
   *  eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
   */
  onContextMenuOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the context menu is opened.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, cellObj, eventObj)
   *  target - The context menu instance.
   *  owner - The HTMLElement that the menu belongs to.
   *  cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
   *  eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
   */
  onContextMenuOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the context menu is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, cellObj, eventObj)
   *  target - The context menu instance.
   *  owner - The HTMLElement that the menu belongs to.
   *  cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
   *  eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
   */
  onContextMenuClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user is about to close the context menu. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, cellObj, eventObj)
   *  target - The context menu instance.
   *  owner - The HTMLElement that the menu belongs to.
   *  cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
   *  eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
   */
  onContextMenuClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the event menu is about to open. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, eventObj)
   *  target - The menu instance.
   *  owner - The HTMLElement of the event that the menu belongs to.
   *  eventObj - The event object that is the target of the menu.
   */
  onEventMenuOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the event menu is opened.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, eventObj)
   *  target - The menu instance.
   *  owner - The HTMLElement of the event that the menu belongs to.
   *  eventObj - The event object that is the target of the menu.
   */
  onEventMenuOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the event menu is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, eventObj)
   *  target - The menu instance.
   *  owner - The HTMLElement of the event that the menu belongs to.
   *  eventObj - The event object that is the target of the menu.
   */
  onEventMenuClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the evet menu is about to close. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, eventObj)
   *  target - The menu instance.
   *  owner - The HTMLElement of the event that the menu belongs to.
   *  eventObj - The event object that is the target of the menu.
   */
  onEventMenuClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the date selection menu is opened.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The menu instance.
   */
  onDateMenuOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the date selection menu is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The menu instance.
   */
  onDateMenuClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the view selection menu is opened.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The menu instance.
   */
  onViewMenuOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the view selection menu is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The menu instance.
   */
  onViewMenuClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a notification is opened.
	* @param event. The custom event. Custom data event was created with: ev.detail(instance)
   *  instance - The toast item instance that is opened.
   */
  onNotificationOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a notification is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(instance)
   *  instance - The toast item instance that is closed.
   */
  onNotificationClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
   */
  beginUpdate(): void;
  /**
   * Ends the update operation. This method will resume the rendering and will refresh the element.
   */
  endUpdate(): void;
  /**
   * Refereshes the Scheduler by recalculating the Scrollbars. 
   * @param {boolean} fullRefresh?. If set the Scheduler will be re-rendered completely.
   */
  refresh(fullRefresh?: boolean): void;
  /**
   * Exports the events from the Scheduler.
   * @param {string} dataFormat. Determines the format of the exported file. The following values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>iCal</b></li></ul>
   * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
   */
  exportData(dataFormat: string, callback?: any): void;
  /**
   * Returns a JSON representation of the events inside the Scheduler.
   * @returns {any}
   */
  getState(): any;
  /**
   * Removes a previously saved state of the element form LocalStorage according to it's id. <strong>Requires an id to be set to the element.</strong>
   */
  clearState(): void;
  /**
   * Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
   * @param {any[]} state?. An Array containing a valid structure of Scheduler events. If no state is provided, the element will check localStorage for a saved state.
   */
  loadState(state?: any[]): void;
  /**
   * Saves the current events of the element to LocalStorage. <strong>Requires an id to be set to the element.</strong>
   * @param {any[]} state?. An Array containing a valid structure of Scheduler events.
   */
  saveState(state?: any[]): void;
  /**
   * Checks whether the Scheduler contains the event.
   * @param {any} eventObj. A Scheduler event object.
   * @returns {boolean}
   */
  containsEvent(eventObj: any): boolean;
  /**
   * Inserts an event.
   * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
   * @param {number} index?. A number that represents the index to insert the event at. If not provided the event is inserted at the end of the list.
   */
  insertEvent(eventObj: any, index?: number): void;
  /**
   * Updates an event.
   * @param {any} index. A number that represents the index of an event or a Scheduler event object.
   * @param {any} eventObj. An object describing a Scheduler event. The properties of this object will be applied to the desired event.
   */
  updateEvent(index: any, eventObj: any): void;
  /**
   * Removes an event.
   * @param {any} index. A number that represents the index of an event or the actual event object to be removed.
   */
  removeEvent(index: any): void;
  /**
   * Opens the popup Window for specific event Editing.
   * @param {any} index. A number that represents the index of a event or the actual event object to be edited.
   */
  openWindow(index: any): void;
  /**
   * Closes the popup window.
   */
  closeWindow(): void;
  /**
   * Prepares the Scheduler for printing by opening the browser's Print Preview.
   */
  print(): void;
  /**
   * Scrolls the Scheduler to a Date.
   * @param {Date} date. The date to scroll to.
   */
  scrollToDate(date: Date): void;
  /**
   * Scrolls the Scheduler to an event.
   * @param {any} index. The index of a Scheduler event or the actual event object to scroll to.
   */
  scrollToEvent(index: any): void;
  /**
   * Opens a custom notification.
   * @param {string} message. The notification message.
   * @param {any} toastSettings. Smart.Toast settings to be applied to the Toast element when opening the notification.
   */
  openNotification(message: string, toastSettings: any): void;
  /**
   * Closes all notifications.
   */
  closeNotifications(): void;
  /**
   * Returns all occurances of an event.
   * @param {any} eventObj. A Scheduler evnet object.
   * @param {number} count. The number of occurances to return. By default 100 date occurances of the event are returned.
   */
  occurrences(eventObj: any, count: number): void;
  /**
   * Returns all occurances of an event between two dates.
   * @param {any} eventObj. A Scheduler event object.
   * @param {Date} dateFrom. The start date.
   * @param {Date} dateTo. The end date.
   */
  occurrencesBetween(eventObj: any, dateFrom: Date, dateTo: Date): void;
  /**
   * Returns the first occurance of an event after a date.
   * @param {any} eventObj. A Scheduler event object.
   * @param {number} date. The date after which the first occurance of the event will be returned.
   */
  occurrenceAfter(eventObj: any, date: number): void;
  /**
   * Returns the first occurance of an event before a date.
   * @param {any} eventObj. A Scheduler event object.
   * @param {number} date. The date before which the first occurance of the event will be returned.
   */
  occurrenceBefore(eventObj: any, date: number): void;
  /**
   * Returns the dateStart/dateEnd of a timeline cell.
   * @param {HTMLElement} cell. A Scheduler timeline cell element.
   * @returns {any}
   */
  getCellDateRange(cell: HTMLElement): any;
  /**
   * Opens the tooltip(event menu) for an event.
   * @param {any} eventObj. A Scheduler event object or it's index.
   */
  openEventTooltip(eventObj: any): void;
  /**
   * Closes the event tooltip (event menu).
   */
  closeEventTooltip(): void;
  /**
   * Returns true or false whether the date is restricted or not.
   * @param {Date} date. A Scheduler event object or it's index.
   * @returns {boolean}
   */
  isDateRestricted(date: Date): boolean;
  /**
   * Returns true or false whether the event is restricted or not.
   * @param {any} eventObj. A Scheduler event  object or a direct event HTMLElement instance.
   * @returns {boolean}
   */
  isEventRestricted(eventObj: any): boolean;
}

/**Sets the Schedulers's Data Export options. */
export interface SchedulerDataExport {
  /**
   * Sets whether the columns header will be exported.
   * Default value: true
   */
  header?: boolean;
  /**
   * Sets the name of the event properties that will be exported as columns.
   * Default value: true
   */
  columns?: boolean;
  /**
   * Sets a custom style object of the dataExport. 
   * Default value: null
   */
  style?: any;
  /**
   * Sets the exported file's name.
   * Default value: "jqxScheduler"
   */
  fileName?: string;
  /**
   * Sets the page orientation, when exporting to PDF.
   * Default value: "portrait"
   */
  pageOrientation?: string;
}

export interface SchedulerDataSource {
  /**
   * Event Repeat Object.
   * Default value: undefined
   */
  repeat?: SchedulerDataSourceRepeat;
  /**
   * Event CSS class.
   * Default value: ""
   */
  class?: string;
  /**
   * Event start date.
   * Default value: 
   */
  dateStart?: string | Date;
  /**
   * Event end date.
   * Default value: 
   */
  dateEnd?: string | Date;
  /**
   * Determines whether dragging is disabled for the event.
   * Default value: false
   */
  disableDrag?: boolean;
  /**
   * Determines whether resizing is disabled for the event.
   * Default value: false
   */
  disableResize?: boolean;
  /**
   * Event unique id.
   * Default value: ""
   */
  id?: string;
  /**
   * Event Label.
   * Default value: ""
   */
  label?: string;
  /**
   * Event Description.
   * Default value: ""
   */
  description?: string;
  /**
   * Determines whether an event is an all day event ot nor. All day events ignore time.
   * Default value: false
   */
  allDay?: boolean;
  /**
   * Sets a background color for the event. The background color should be in HEX format.
   * Default value: "false"
   */
  backgroundColor?: string;
  /**
   * Sets a color for the event. The color should be in HEX format.
   * Default value: "false"
   */
  color?: string;
  /**
   * Event notifications.
   * Default value: null
   */
  notifications?: SchedulerNotification[];
}

/**Event Repeat Object. */
export interface SchedulerDataSourceRepeat {
  /**
   * Determines the repeating frequency. The event can repeat hourly, daily, weekly, monthly or yearly.
   * Default value: hourly
   */
  repeatFreq?: SchedulerRepeatFreq;
  /**
   * Determines the repeating interval.
   * Default value: 1
   */
  repeatInterval?: number;
  /**
   * Determines on wah day/date the event will repeat on. This is applicable only when repeatFreq is of type 'weekly' ( allows to pick the days of week from 0 to 6, where 0 is Sunday and 6 is Saturday), 'monthly' ( allows to pick a date of the month from 0 to 31) or 'yearly' (allows to pick a particular Date to repeat on. The date can be set as a Date or an object of type{ month: string, date: number }).
   * Default value: 
   */
  repeatOn?: any;
  /**
   * Determines when the repeating event will end. By default it does not have an end condition. If the value is set to a number than it is considered as the number of time the event will repeat before it ends. If it's a Date then it is considered as the end date for the repeating series. If not set it will never end.
   * Default value: 0
   */
  repeatEnd?: number | Date | undefined;
  /**
   * Event exceptions represent a repeating series event that has been re-scheduler for another date/time or it has been hidden from the Scheduler. Exceptions cannot repeat.
   * Default value: undefined
   */
  exceptions?: { Date: string | Date, DateStart: Date | string, DateEnd: Date | string, backgroundColor: 'string', color: string, hidden: boolean }[] | undefined;
}

export interface SchedulerNotification {
  /**
   * The number of days/weeks when the notification should appear before the event starts.
   * Default value: 0
   */
  interval?: number;
  /**
   * The type of the interval for the notification.
   * Default value: days
   */
  type?: SchedulerNotificationType;
  /**
   * An array that represents the time when the notification should appear before the event starts. The array should have the following format: [hours: number, minutes:number]
   * Default value: 
   */
  time?: any;
  /**
   * The message that will appear inside the notificaiton. If no message is set, then the label of the event is displayed.
   * Default value: ""
   */
  message?: string;
  /**
   * Determines the type of icon that will be displayed inside the notification. By default the iconType is 'info'.
   * Default value: ""
   */
  iconType?: string;
}

export interface SchedulerEvent {
  /**
   * Event Repeat Object.
   * Default value: undefined
   */
  repeat?: SchedulerEventRepeat;
  /**
   * Event CSS class.
   * Default value: ""
   */
  class?: string;
  /**
   * Event start date.
   * Default value: 
   */
  dateStart?: string | Date;
  /**
   * Event end date.
   * Default value: 
   */
  dateEnd?: string | Date;
  /**
   * Determines whether dragging is disabled for the event.
   * Default value: false
   */
  disableDrag?: boolean;
  /**
   * Determines whether resizing is disabled for the event.
   * Default value: false
   */
  disableResize?: boolean;
  /**
   * Event unique id.
   * Default value: 
   */
  id?: string | undefined;
  /**
   * Event Label.
   * Default value: 
   */
  label?: string | undefined;
  /**
   * Event Description.
   * Default value: 
   */
  description?: string | undefined;
  /**
   * Determines whether an event is an all day event ot nor. All day events ignore time.
   * Default value: false
   */
  allDay?: boolean | undefined;
  /**
   * Sets a background color for the event. The background color should be in HEX format.
   * Default value: false
   */
  backgroundColor?: string | undefined;
  /**
   * Sets a color for the event. The color should be in HEX format.
   * Default value: false
   */
  color?: string | undefined;
  /**
   * Event notifications.
   * Default value: null
   */
  notifications?: SchedulerNotification[];
}

/**Event Repeat Object. */
export interface SchedulerEventRepeat {
  /**
   * Determines the repeating frequency. The event can repeat hourly, daily, weekly, monthly or yearly.
   * Default value: hourly
   */
  repeatFreq?: SchedulerRepeatFreq;
  /**
   * Determines the repeating interval.
   * Default value: 1
   */
  repeatInterval?: number;
  /**
   * Determines on wah day/date the event will repeat on. This is applicable only when repeatFreq is of type 'weekly' ( allows to pick the days of week from 0 to 6, where 0 is Sunday and 6 is Saturday), 'monthly' ( allows to pick a date of the month from 0 to 31) or 'yearly' (allows to pick a particular Date to repeat on. The date can be set as a Date or an object of type{ month: string, date: number }).
   * Default value: 
   */
  repeatOn?: any;
  /**
   * Determines when the repeating event will end. By default it does not have an end condition. If the value is set to a number than it is considered as the number of time the event will repeat before it ends. If it's a Date then it is considered as the end date for the repeating series. If not set it will never end.
   * Default value: 0
   */
  repeatEnd?: number | Date | undefined;
  /**
   * Event exceptions represent a repeating series event that has been re-scheduler for another date/time or it has been hidden from the Scheduler. Exceptions cannot repeat.
   * Default value: undefined
   */
  exceptions?: { Date: string | Date, DateStart: Date | string, DateEnd: Date | string, backgroundColor: 'string', color: string, hidden: boolean }[] | undefined;
}

export interface SchedulerResource {
  /**
   * Resource label.
   * Default value: ""
   */
  label?: string;
  /**
   * Resource unique value.
   * Default value: ""
   */
  value?: string;
  /**
   * An array that defined the data of the resources. The data represents objects that should contain the following proeprties: lable - the label for the resource item.id - the unique id for the resource item.backgroundColor - the background color for the events that have the resource item assigned.color - the color for the events that have the resource item assigned.
   * Default value: 
   */
  dataSource?: any;
}

export interface SchedulerStatuse {
  /**
   * Status label.
   * Default value: ""
   */
  label?: string;
  /**
   * Status unique value.
   * Default value: ""
   */
  value?: string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-scheduler"): Scheduler;
        querySelector(selectors: "smart-scheduler"): Scheduler | null;
        querySelectorAll(selectors: "smart-scheduler"): NodeListOf<Scheduler>;
        getElementsByTagName(qualifiedName: "smart-scheduler"): HTMLCollectionOf<Scheduler>;
        getElementsByName(elementName: "smart-scheduler"): NodeListOf<Scheduler>;
    }
}

/**Determines the repeating frequency. The event can repeat hourly, daily, weekly, monthly or yearly. */
export declare type SchedulerRepeatFreq = 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
/**The type of the interval for the notification. */
export declare type SchedulerNotificationType = 'days' | 'weeks';
/**Determines the day format of the dates in the timeline. */
export declare type SchedulerDayFormat = '2-digit' | 'numeric' | 'long' | 'short' | 'narrow';
/**Determines the grouping orientation. */
export declare type SchedulerGroupOrientation = 'horizontal' | 'vertical';
/**Determines the formatting of hours inside the element. */
export declare type SchedulerHourFormat = '2-digit' | 'numeric';
/** Determines the position of the Date selector inside the Header of the element. */
export declare type SchedulerHeaderDatePosition = 'far' | 'near';
/** Determines the styling of the Header navigation controls. */
export declare type SchedulerHeaderNavigationStyle = 'flat' | 'raised';
/** Determines the position of the view selector control inside the Header of the element. */
export declare type SchedulerHeaderViewPosition = 'far' | 'near';
/**Determines weather or not horizontal scrollbar is shown. */
export declare type HorizontalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Determines the minute formatting inside the Scheduler. */
export declare type MinuteFormat = '2-digit' | 'numeric';
/**Determines the month name formatting inside the Scheduler. */
export declare type MonthFormat = '2-digit' | 'numeric' | 'long' | 'short' | 'narrow';
/**Determines the visibility of the resize handles. */
export declare type ResizeHandlesVisibility = 'auto' | 'hidden' | 'visible';
/** Determines the position of the date navigation navigation buttons inside the header of the element. */
export declare type SchedulerScrollButtonsPosition = 'both' | 'far' | 'near';
/**Determines the date scale for the timeline cells. */
export declare type SchedulerTimelineDayScale = 'hour' | 'halfHour' | 'quarterHour' | 'tenMinutes' | 'fiveMinutes';
/**Determines weather or not vertical scrollbar is shown. */
export declare type VerticalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Indicates the current Scheduler viewType. Custom views must contain a valid <b>type</b> property that corresponds to one of the view types. This property should not be set. */
export declare type SchedulerViewType = 'day' | 'week' | 'month' | 'agenda' | 'timelineDay' | 'timelineWeek' | 'timelineMonth';
/**Determines the viewing date range of the timeline. Custom views can be defined as objects instead of strings. The view object should contain the following properties: <b>label</b> - the label for the view.
<b>value</b> - the value for the view. The value is the unique identifier for the view.
<b>type</b> - the type of view. The type should be one of the default allowed values for a view.
<b>hideWeekend</b> - an Optional property that allows to hide the weekend only for this specific view.
<b>hideNonworkingWeekdays</b> - an Optional property that allows to hide the nonwrking weekdays for this specific view.
<b>shortcutKey</b> - an Optional property that allows to set a custom shortcut key for the view.
 */
export declare type SchedulerViews = 'day' | 'week' | 'month' | 'agenda' | 'timelineDay' | 'timelineWeek' | 'timelineMonth';
/**Determines type of the view selector located in the header of the element. */
export declare type SchedulerViewSelectorType = 'auto' | 'tabs' | 'menu';
/**Determines the format of the week days inside the element.  */
export declare type WeekDayFormat = 'short' | 'long' | 'narrow';
/**Determines the format of the dates inside the timeline header when they represent years. */
export declare type YearFormat = '2-digit' | 'numeric';

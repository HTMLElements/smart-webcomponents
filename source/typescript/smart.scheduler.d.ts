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
  contextMenuDataSource?: any[];
  /**
   * Determines whether the clipboard shortcuts for copy/paste/cut action of events are visible in the Scheduler context menu or not.
   * Default value: false
   */
  contextMenuClipboardActions?: boolean;
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
   * Default value: modern
   */
  eventRenderMode?: SchedulerEventRenderMode;
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
  dateCurrent?: string | Date;
  /**
   * Sets the Schedulers's Data Export options.
   * Default value: [object Object]
   */
  dataExport?: SchedulerDataExport;
  /**
   * Determines the events that will be loaded inside the Timeline. Each event represents an object that should contain the following properties:
   * Default value: 
   */
  dataSource?: SchedulerEvent[];
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
   * Determines the filtering condition for the events.The filter property takes an array of objects or a function. Each object represents a single filtering condition with the following attributes: name - the name of the Scheduler event property that will be filtered by.value - the filtering condition value. The value will be used to compare the events based on the filterMode, for example: [{ name: 'price', value: 25 }]. The value can also be a function. The function accepts a single arguemnt - the value that corresponds to the filtered attribute. The function allows to apply custom condition that is different from the default filter modes. It should return true ( if the evnet passes the filtering condition ) or false ( if the event does not meet the filtering condition ). Here's an example: [{ name: 'roomId', value: (id) => ['2', '3'].indexOf(id + '') > -1 }]. In the example the events that do not have a 'roomId' property that is equal to '2' or '3' will be filtered out.. If a function is set to the filter property instead, it allows to completely customize the filtering logic. The function passes a single argument - each Scheduler event that will be displayed. The function should return true ( if the condition is met ) or false ( if not ).
   * Default value: (eventObj) => return eventObj.label === 'TargetLabel',[{ name: 'roomId', value: (id) => ['2', '3'].indexOf(id + '') > -1 }]
   */
  filter?: any;
  /**
   * Determines whether Scheduler's filtering is enabled or not.
   * Default value: true,false
   */
  filterable?: any;
  /**
   * Determines the filter mode.
   * Default value: equals
   */
  filterMode?: FilterMode;
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
   * Allows to customize the footer of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: footerContainer - the footer container..
   * Default value: null
   */
  footerTemplate?: any;
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
   * Determines whether other month days are visible when view is set to month. When enabled, events that start on other month days are not displayed and the cells that represent such days do not allow the creation of new events on them. Also dragging and droping an event on other month days is not allowed. Reszing is also affected. Events can end on other month days, but cannot start on one.
   * Default value: false
   */
  hideOtherMonthDays?: boolean;
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
   * Determines the location of the legend inside the Scheduler. By default the location is inside the footer but it can also reside in the header.
   * Default value: footer
   */
  legendLocation?: SchedulerLegendLocation;
  /**
   * Determines the position of the legend. By default it's positioned to the near side but setting it to 'far' will change that.
   * Default value: near
   */
  legendPosition?: SchedulerLegendPosition;
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
  max?: string | Date;
  /**
   * Detetmines the maximum number of events per Scheduler cell. By default this property is null which means that the number of events per cell is automatically determined by the size of the events.
   * Default value: null
   */
  maxEventsPerCell?: number | null;
  /**
   * Detetmines the minimum view date for the Scheduler.
   * Default value: 1900-1-1
   */
  min?: string | Date;
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
   * Defines an array of hours that are not allowed to have events on. Events that overlap restricted Hours or start/end on them will not be displayed.
   * Default value: 
   */
  restrictedHours?: any;
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
   * Determines whether the resource legend is visible or not. The Legend shows the resources and their items in the footer section of the Scheduler. If filterable is enabled it is possible to filter by resource items by clicking on the corresponding resource item from the legend.
   * Default value: false
   */
  showLegend?: boolean;
  /**
   * Determines the name of the resource data item property that will be used for sorting the resource data defined as the resource.dataSource.
   * Default value: "null"
   */
  sortBy?: string;
  /**
   * Allows to define a custom sorting function that will be used to sort the resource data. The sortFunction is used when sortOrder is set to custom.
   * Default value: null
   */
  sortFunction?: any;
  /**
   * Determines the sorting order of the resource data items. When set to custom, a custom sorting function has to be defined for the sortFunction property. The asc stands for 'ascending' while desc means 'descending' sorting order.
   * Default value: asc
   */
  sortOrder?: SchedulerSortOrder;
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
   * Default value: false
   */
  timeRulerTicks?: boolean;
  /**
   * Determines the timeZone for the element. By default if the local time zone is used if the property is not set.
   * Default value: 
   */
  timeZone?: SchedulerTimeZone;
  /**
   * Allows to display additional timeZones at once along with the default that is set via the timeZone property. Accepts an array values that represent the ids of valid time zones. The possbile time zones can be viewed in the timeZone property description. By default the local time zone is displayed.
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
   * Determines the viewing date range of the timeline. The property should be set to an array of strings or view objects. When you set it to a string, you should use any of the following: 'day', 'week', 'month', 'agenda', 'timelineDay', 'timelineWeek', 'timelineMonth'. Custom views can be defined as objects instead of strings. The view object should contain the following properties: label - the label for the view.value - the value for the view. The value is the unique identifier for the view.type - the type of view. The type should be one of the default allowed values for a view.hideWeekend - an Optional property that allows to hide the weekend only for this specific view.hideNonworkingWeekdays - an Optional property that allows to hide the nonwrking weekdays for this specific view.shortcutKey - an Optional property that allows to set a custom shortcut key for the view.hideHours - an Optional property applicable only to timelineWeek view that allows to hide the hour cells and only show the day cells.
   * Default value: day,week,month
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
   * Determines the maximum number of redo/undo steps that will be remembered by the Scheduler. When the number is reached the oldest records are removed in order to add new.
   * Default value: 100
   */
  undoRedoSteps?: number;
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
   * This event is triggered when an Event has been updated/inserted/removed/dragged/resized or an exception of a repeating event has been added/updated/removed.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, type)
   *  item - An object that represents the actual item with it's attributes.
   *  type - The type of change that is being done to the item.
   */
  onItemChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an Event is going to be updated/inserted/removed. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, type)
   *  item - An object that represents the actual item with it's attributes.
   *  type - The type of change that is going to be made to the item (e.g. 'inserting', 'removing', 'updating', 'exceptionInserting', 'exceptionUpdating', 'exceptionRemoving').
   */
  onItemChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
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
   * This event is triggered before the view is changed via user interaction. The view change action can be canceled if event.preventDefault() is called on the event.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The value of the previously selected view.
   *  value - The value of the new selected view.
   */
  onViewChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
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
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, type, eventObj)
   *  target - The dialog window that is opening.
   *  item - The event object that is going to be edited.
   *  type - The type of window that is going to open. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
   *  eventObj - The event object that is the target of the menu.
   */
  onEditDialogOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user opens the event dialog window.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, editors, item, eventObj)
   *  target - The dialog window that is opened.
   *  editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
   *  item - The event object that is being edited.
   *  eventObj - The event object that is the target of the menu.
   */
  onEditDialogOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user closes the event dialog window.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, editors, item, eventObj)
   *  target - The dialog window that is closed.
   *  editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
   *  item - The event object that is being edited.
   *  eventObj - The event object that is the target of the menu.
   */
  onEditDialogClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user is about to close the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, type, eventObj)
   *  target - The dialog window that is closing.
   *  item - The event object that is edited.
   *  type - The type of window that is going to be closed. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
   *  eventObj - The event object that is the target of the menu.
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
   * Adds an event to the Scheduler. Accepts an event object of the following format (same as the dataSource format): <pre>{ label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }</pre>
   * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
   */
  addEvent(eventObj: any): void;
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
  getDataSource(): any;
  /**
   * Returns a JSON representation of the resources inside the Scheduler.
   * @returns {any}
   */
  getResources(): any;
  /**
   * Returns the current state of the Scheduler. Includes the current <b>dateCurernt</b>, <b>dataSource</b> and <b>timeZone</b> properties.
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
   * Inserts an event as object of the following format (same as the dataSource format): <pre>{ label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }</pre>
   * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
   * @param {number} index?. A number that represents the index to insert the event at. If not provided the event is inserted at the end of the list.
   */
  insertEvent(eventObj: any, index?: number): void;
  /**
   * Updates an event object of the following format (same as the dataSource format): <pre>{ label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }</pre>
   * @param {any} index. A number that represents the index of an event or a Scheduler event object.
   * @param {any} eventObj. An object describing a Scheduler event. The properties of this object will be applied to the desired event.
   */
  updateEvent(index: any, eventObj: any): void;
  /**
   * Removes an existing event.
   * @param {any} index. A number that represents the index of an event or the actual event object to be removed.
   */
  removeEvent(index: any): void;
  /**
   * Returns an array of all exceptions of the target repeating event.
   * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
   * @returns {any}
   */
  getEventExceptions(eventObj: any): any;
  /**
   * Adds an event exception to a repeating event. The exception occurences for a repeating event can be gathered via the following methods: <ul><li><b>occurences</b></li><li><b>occurrencesBetween</b></li><li><b>occurrenceAfter</b></li><li><b>occurrenceBefore</b></li></ul>.  <p>Example usage:</p> <pre>scheduler.addEventException(eventObj, { date: occuranceDate, dateStart: newDateStart, dateEnd: newDateEnd, label: 'Exception' });</pre>
   * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
   * @param {any} exceptionObj. An event object that describes an exception. Exception event objects must have a <b>date</b> attribute of type Date which indicates the date of occurence.
   */
  addEventException(eventObj: any, exceptionObj: any): void;
  /**
   * Updates an event exception of a repeating event. The exception occurences for a repeating event can be gathered via the following methods: <ul><li><b>occurences</b></li><li><b>occurrencesBetween</b></li><li><b>occurrenceAfter</b></li><li><b>occurrenceBefore</b></li></ul>.  <p>Example usage:</p> <pre>scheduler.updateEventException(eventObj, dateOfOccurance, { dateStart: newDateStart, dateEnd: newDateEnd, label: 'Updated Exception' });</pre>
   * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
   * @param {any} exceptionRef. The index, id, an occurence date of the exception or an object reference of an existing Scheduler repeating event exception.
   * @param {any} exceptionObj. An event object that describes an exception. All attributes of an exception can be updated except the occurance date (the <b>date</b> attribute).
   */
  updateEventException(eventObj: any, exceptionRef: any, exceptionObj: any): void;
  /**
   * Removes an exception from a repeating event.
   * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
   * @param {any} index. The index, id, occurance date or an object reference of an event exception that belongs to the target repeating event.
   */
  removeEventException(eventObj: any, index: any): void;
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
   * @param {boolean} strictScroll?. Determines whether to scroll strictly to the date or not. This mean sthat the Scheduler wll scroll to the begining of the cell that corresponds to the target date.
   */
  scrollToDate(date: Date, strictScroll?: boolean): void;
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
   * Returns the last occurance of an event before a date.
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
   * @param {Date} date. A Date object.
   * @returns {boolean}
   */
  isDateRestricted(date: Date): boolean;
  /**
   * Returns true or false whether the hour is restricted or not.
   * @param {number | Date} hour. A number that represents an hour ( 0 to 23 ) or a Date object.
   * @returns {boolean}
   */
  isHourRestricted(hour: number | Date): boolean;
  /**
   * Returns true or false whether the event is restricted or not.
   * @param {any} eventObj. A Scheduler event  object or a direct event HTMLElement instance.
   * @returns {boolean}
   */
  isEventRestricted(eventObj: any): boolean;
  /**
   * Deletes the current undo/redo history.
   * @returns {boolean}
   */
  deleteUndoRedoHistory(): boolean;
  /**
   * Indicates whether it is possible to redo an action.
   * @returns {boolean}
   */
  canRedo(): boolean;
  /**
   * Indicates whether it is possbile to undo an action.
   * @returns {boolean}
   */
  canUndo(): boolean;
  /**
   * Redo the next event modification.
   * @param {number} step?. A step to redo to.
   * @returns {boolean}
   */
  redo(step?: number): boolean;
  /**
   * Undo the last event modification.
   * @param {number} step?. A step to undo to.
   * @returns {boolean}
   */
  undo(step?: number): boolean;
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
   * Default value: 
   */
  columns?: string[];
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
   * Sets the appointment status.
   * Default value: "false"
   */
  status?: string;
  /**
   * Event resource unique id.
   * Default value: ""
   */
  resourceId?: string;
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
  exceptions?: { Date: string | Date, DateStart: Date | string, DateEnd: Date | string, backgroundColor: string, color: string, hidden: boolean }[] | undefined;
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
  time?: number[];
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
  /**
   * Determines the property name to sort the dataSource by.
   * Default value: "null"
   */
  sortBy?: string;
  /**
   * Determines the custom sorting function that will be used to sort the resource dataSource. The sortFunction is used when sortOrder is set to custom.
   * Default value: null
   */
  sortFunction?: any;
  /**
   * Determines the sorting order. When set to custom, a custom sorting function has to be defined for the sortFunction property. The asc stands for 'ascending' while desc means 'descending' sorting order.
   * Default value: asc
   */
  sortOrder?: SchedulerResourceSortOrder;
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

/** Determines how the events inside the Scheduler are rendered.<b>classic</b> - the events are arranged next to each other and try to fit inside the cells.
<b>modern</b> - the events obey the CSS property that determines their size and if there's not enough space inside the cell for all events to appear, an event collector is created to hold the rest of the events. On mobile phones only collectors are created.
 */
export declare type SchedulerEventRenderMode = 'classic' | 'modern';
/**Determines the repeating frequency. The event can repeat hourly, daily, weekly, monthly or yearly. */
export declare type SchedulerRepeatFreq = 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
/**The type of the interval for the notification. */
export declare type SchedulerNotificationType = 'days' | 'weeks';
/**Determines the day format of the dates in the timeline. */
export declare type SchedulerDayFormat = '2-digit' | 'numeric' | 'long' | 'short' | 'narrow';
/**Determines the filter mode. */
export declare type FilterMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
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
/**Determines the location of the legend inside the Scheduler. By default the location is inside the footer but it can also reside in the header. */
export declare type SchedulerLegendLocation = 'footer' | 'header';
/**Determines the position of the legend. By default it's positioned to the near side but setting it to 'far' will change that. */
export declare type SchedulerLegendPosition = 'near' | 'far';
/**Determines weather or not horizontal scrollbar is shown. */
export declare type HorizontalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Determines the minute formatting inside the Scheduler. */
export declare type MinuteFormat = '2-digit' | 'numeric';
/**Determines the month name formatting inside the Scheduler. */
export declare type MonthFormat = '2-digit' | 'numeric' | 'long' | 'short' | 'narrow';
/**Determines the visibility of the resize handles. */
export declare type ResizeHandlesVisibility = 'auto' | 'hidden' | 'visible';
/**Determines the sorting order. When set to <b>custom</b>, a custom sorting function has to be defined for the <b>sortFunction</b> property. The <b>asc</b> stands for 'ascending' while <b>desc</b> means 'descending' sorting order. */
export declare type SchedulerResourceSortOrder = 'asc' | 'desc' | 'custom';
/** Determines the position of the date navigation navigation buttons inside the header of the element. */
export declare type SchedulerScrollButtonsPosition = 'both' | 'far' | 'near';
/**Determines the sorting order of the resource data items. When set to <b>custom</b>, a custom sorting function has to be defined for the <b>sortFunction</b> property. The <b>asc</b> stands for 'ascending' while <b>desc</b> means 'descending' sorting order. */
export declare type SchedulerSortOrder = 'asc' | 'desc' | 'custom';
/**Determines the date scale for the timeline cells. */
export declare type SchedulerTimelineDayScale = 'hour' | 'halfHour' | 'quarterHour' | 'tenMinutes' | 'fiveMinutes';
/**Determines the timeZone for the element. By default if the local time zone is used if the property is not set. */
export declare type SchedulerTimeZone = 'Local' | 'Dateline Standard Time' | 'UTC-11' | 'Hawaiteratoran Standard Time' | 'Alaskan Standard Time' | 'Pacific Standard Time (Mexico)' | 'Pacific Standard Time' | 'US Mountain Standard Time' | 'Mountain Standard Time (Mexico)' | 'Mountain Standard Time' | 'Central Standard Time' | 'Central America Standard Time' | 'Canada Central Standard Time' | 'Central Standard Time (Mexico)' | 'SA Pacific Standard Time' | 'Eastern Standard Time' | 'US Eastern Standard Time' | 'Venezuela Standard Time' | 'Atlantic Standard Time' | 'Paraguay Standard Time' | 'Central Brazilian Standard Time' | 'Pacific SA Standard Time' | 'SA Western Standard Time' | 'Newfoundland Standard Time' | 'SA Eastern Standard Time' | 'Argentina Standard Time' | 'E. South America Standard Time' | 'Bahia Standard Time' | 'Montevideo Standard Time' | 'Greenland Standard Time' | 'UTC-02' | 'Mid-Atlantic Standard Time' | 'Azores Standard Time' | 'Cape Verde Standard Time' | 'Morocco Standard Time' | 'UTC' | 'GMT Standard Time' | 'Greenwich Standard Time' | 'Central European Standard Time' | 'Namibia Standard Time' | 'W. Central Africa Standard Time' | 'W. Europe Standard Time' | 'Central Europe Standard Time' | 'Romance Standard Time' | 'FLE Standard Time' | 'South Africa Standard Time' | 'Turkey Standard Time' | 'GTB Standard Time' | 'Libya Standard Time' | 'E. Europe Standard Time' | 'Jordan Standard Time' | 'Middle East Standard Time' | 'Egypt Standard Time' | 'Syria Standard Time' | 'Israel Standard Time' | 'Arab Standard Time' | 'E. Africa Standard Time' | 'Arabic Standard Time' | 'Kaliningrad Standard Time' | 'Iran Standard Time' | 'Mauritius Standard Time' | 'Georgian Standard Time' | 'Caucasus Standard Time' | 'Arabian Standard Time' | 'Azerbaijan Standard Time' | 'Russian Standard Time' | 'Afghanistan Standard Time' | 'Pakistan Standard Time' | 'West Asia Standard Time' | 'India Standard Time' | 'Sri Lanka Standard Time' | 'Nepal Standard Time' | 'Central Asia Standard Time' | 'Bangladesh Standard Time' | 'Ekaterinburg Standard Time' | 'Myanmar Standard Time' | 'SE Asia Standard Time' | 'N. Central Asia Standard Time' | 'Ulaanbaatar Standard Time' | 'China Standard Time' | 'Singapore Standard Time' | 'North Asia Standard Time' | 'Taipei Standard Time' | 'W. Australia Standard Time' | 'Korea Standard Time' | 'North Asia East Standard Time' | 'Tokyo Standard Time' | 'AUS Central Standard Time' | 'Cen. Australia Standard Time' | 'West Pacific Standard Time' | 'Tasmania Standard Time' | 'E. Australia Standard Time' | 'AUS Eastern Standard Time' | 'Yakutsk Standard Time' | 'Vladivostok Standard Time' | 'Central Pacific Standard Time' | 'Magadan Standard Time' | 'Kamchatka Standard Time' | 'Fiji Standard Time' | 'New Zealand Standard Time' | 'UTC+12' | 'Tonga Standard Time' | 'Samoa Standard Time';
/**Determines weather or not vertical scrollbar is shown. */
export declare type VerticalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Indicates the current Scheduler viewType. Custom views must contain a valid <b>type</b> property that corresponds to one of the view types. This property should not be set. */
export declare type SchedulerViewType = 'day' | 'week' | 'month' | 'agenda' | 'timelineDay' | 'timelineWeek' | 'timelineMonth';
/**Determines the viewing date range of the timeline. The property should be set to an array of strings or view objects. When you set it to a string, you should use any of the following: 'day', 'week', 'month', 'agenda', 'timelineDay', 'timelineWeek', 'timelineMonth'. Custom views can be defined as objects instead of strings. The view object should contain the following properties: <b>label</b> - the label for the view.
<b>value</b> - the value for the view. The value is the unique identifier for the view.
<b>type</b> - the type of view. The type should be one of the default allowed values for a view.
<b>hideWeekend</b> - an Optional property that allows to hide the weekend only for this specific view.
<b>hideNonworkingWeekdays</b> - an Optional property that allows to hide the nonwrking weekdays for this specific view.
<b>shortcutKey</b> - an Optional property that allows to set a custom shortcut key for the view.
<b>hideHours</b> - an Optional property applicable only to <b>timelineWeek</b> view that allows to hide the hour cells and only show the day cells.
 */
export declare type SchedulerViews = 'day' | 'week' | 'month' | 'agenda' | 'timelineDay' | 'timelineWeek' | 'timelineMonth';
/**Determines type of the view selector located in the header of the element. */
export declare type SchedulerViewSelectorType = 'auto' | 'tabs' | 'menu';
/**Determines the format of the week days inside the element.  */
export declare type WeekDayFormat = 'short' | 'long' | 'narrow';
/**Determines the format of the dates inside the timeline header when they represent years. */
export declare type YearFormat = '2-digit' | 'numeric';

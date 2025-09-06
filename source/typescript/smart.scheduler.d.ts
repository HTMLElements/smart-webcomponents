import  {BaseElement, Animation} from "./smart.element"

export interface SchedulerProperties {
  /**
   * Specifies how quickly the calendar view scrolls vertically or horizontally when a user drags an event near the edge of the view. Adjusting this value controls the speed at which the calendar auto-scrolls during drag-and-drop event operations, enhancing user navigation for long or densely populated calendars.
   * Default value: 30
   */
  autoScrollStep?: number;
  /**
   * Controls whether the height of all-day cells in the Day and Week calendar views automatically adjusts based on the number of events scheduled in each cell. When enabled, all-day cells will dynamically expand or contract in height to fit all contained events; when disabled, the cell height remains fixed regardless of the number of events.
   * Default value: false
   */
  autoHeightAllDayCells?: boolean;
  /**
   * Specifies an array of objects, each representing a time interval with start and end properties. Both the start and end fields are ISO 8601 formatted date-time strings (e.g., "2022-10-25T12:00:00.000Z") that indicate the beginning and end of the interval, respectively. Example:'''json[  {    "start": "2022-10-25T12:00:00.000Z",    "end": "2022-10-25T13:00:00.000Z"  }]'''This format is typically used to represent a list of time ranges, where each object defines one range with a precise start and end timestamp in UTC.
   * Default value: 
   */
  available?: any;
  /**
   * Specifies the color scheme used for the event background selector within the event window editor, defining the appearance and color options available for users when customizing the background of event windows.
   * Default value: #D50000,#E67C73,#F4511E,#F6BF26,#33B679,#0B8043,#039BE5,#3F51B5,#7986CB,#8E24AA,#616161,
   */
  colorScheme?: string[];
  /**
   * Specifies the reference time that the Scheduler uses to display the current time indicator. By default, this is set to the current date and time (today). You can customize this value to display the indicator at a specific time, which is useful for testing or demonstrating features independent of the actual system clock.
   * Default value: new Date()
   */
  currentTime?: string | Date;
  /**
   * Enables or disables the display of the current time indicator within the view. When enabled, a visual marker or line is shown on the relevant view cells to highlight the present time, helping users easily identify the current point in the schedule or calendar interface.
   * Default value: false
   */
  currentTimeIndicator?: boolean;
  /**
   * Specifies the frequency, in seconds, at which the currentTimeIndicator is updated or refreshed. This setting controls how often the indicator reflects the current time, allowing you to adjust the real-time accuracy of the display.
   * Default value: 1
   */
  currentTimeIndicatorInterval?: number;
  /**
   * Specifies which items will be displayed in the context menu when it is activated by the user, allowing you to control the visibility of specific context menu options based on the current application state or user actions.
   * Default value: null
   */
  contextMenuDataSource?: any[];
  /**
   * Specifies whether clipboard shortcuts (copy, paste, and cut actions) are displayed in the Scheduler's context menu. When enabled, users can access and perform clipboard operations directly from the context menu for scheduled events. Disabling this option hides clipboard shortcut commands from the menu.
   * Default value: false
   */
  contextMenuClipboardActions?: boolean;
  /**
   * Enables customization of the content displayed within event elements. This option accepts one of the following:- An 'HTMLTemplateElement' to define the layout and content for all event elements. Property bindings within the template can be used, and they will automatically map to the relevant properties of each event object.- The 'id' (as a string) of an 'HTMLTemplateElement', which will be used for rendering all events.- A custom function to generate event content dynamically. This function is called for each event and receives the following parameters:  - 'eventContent' – The content container element for the specific event.  - 'eventObj' – The JavaScript object representing the event’s data.Using an 'HTMLTemplateElement' allows you to leverage property bindings (e.g., '') within the template, enabling dynamic insertion of event-specific values when rendering each event element.
   * Default value: null
   */
  eventTemplate?: any;
  /**
   * Allows you to customize the content displayed by event collector elements. The customization can be provided in one of the following forms:- 'HTMLTemplateElement': Directly supply an 'HTMLTemplateElement'. This template will be cloned and applied to all event collector entries. You can define property bindings within the template, and these will be mapped to the corresponding properties of the event object for each entry.- 'String (Template ID)': Provide the string ID of an 'HTMLTemplateElement' present in the DOM. The element with this ID will be used as the template as described above.- 'Function': Provide a function that will be invoked for each event. This function receives the following parameters:  - 'eventContent': The container element for the event's content, which you can modify or populate.  - 'eventObj': The event data object itself, allowing you to access event-specific information.When using a template, dynamic property bindings are supported—you can reference fields from the 'eventObj' directly within your template markup.This flexibility allows you to fully control the structure, layout, and dynamic content of each event as it is rendered by the event collector.
   * Default value: null
   */
  eventCollectorTemplate?: any;
  /**
   * Determines the rendering style for events displayed within the Scheduler component.      classic &ndash; Events are visually arranged side-by-side within each cell, with their sizes adjusted to ensure they fit entirely within the cell boundaries. If multiple events overlap in the same time slot, they are compressed horizontally to avoid overflow and remain fully visible within the cell.        modern &ndash; Events adhere to their specified CSS size properties, such as height and width, rather than automatically resizing to fit the cell. If there are more events than can visibly fit within a cell, an "event collector" (typically a counter or indicator) is displayed that, when clicked, reveals the hidden events in a popup or modal. On mobile devices, due to limited screen space, only event collectors are shown within each cell, requiring the user to tap to view the full list of events.  
   * Default value: modern
   */
  eventRenderMode?: SchedulerEventRenderMode | string;
  /**
   * Enables the customization of the content displayed within the event menu tooltip. When a user clicks on an event element, a menu opens showing detailed information about that event. You can define this content in one of three ways:- 'HTMLTemplateElement': Provide a template element that will be applied to all events. Inside the template, you can use property bindings referencing the event object’s properties for dynamic content generation.- 'String (Template ID)': Pass the ID of an 'HTMLTemplateElement' as a string to use that template for all event tooltips.- 'Function': Supply a callback function that is invoked for each event. This function receives the following parameters:  - 'eventContent': The container element or node where the event’s menu content should be rendered or modified.  - 'eventObj': The event data object with all event properties.  Using an HTMLTemplateElement allows you to seamlessly bind event properties within the template’s markup, making it easy to display custom information for each event.This option gives you full flexibility to design and control the appearance and content of the event details menu, ensuring it matches your application's needs and styling.
   * Default value: null
   */
  eventTooltipTemplate?: any;
  /**
   * Enables customization of the timeline cell content. This option accepts one of the following:- 'HTMLTemplateElement': A template element whose content will be used for all timeline cells. When using a template, you can define property bindings within the template, which will be replaced with the corresponding values for each cell at render time.- 'String (template ID)': The ID of an HTMLTemplateElement defined elsewhere in the DOM. The referenced template's content will be applied to all cells.- 'Function': A callback function that will be invoked for each cell. The function receives the following parameters:  - 'cellContent': The container element for the cell’s content.  - 'cellDate': A date object representing the specific date of the cell.This flexibility allows you to either use a standard HTML template for all cells or provide a custom rendering function to dynamically generate cell content based on cell data. When using an HTMLTemplateElement, you can include dynamic bindings within the template, which will be populated with the appropriate cell values during rendering.
   * Default value: null
   */
  cellTemplate?: any;
  /**
   * Specifies the date that is currently displayed in the Scheduler view, allowing you to control which day, week, or month is shown to users. This property can be set programmatically to change the visible date or used to track which date the user is viewing in the Scheduler interface.
   * Default value: new Date()
   */
  dateCurrent?: string | Date;
  /**
   * Configures the data export settings for the Scheduler, including file format, export range, and additional export-related options.
   * Default value: [object Object]
   */
  dataExport?: SchedulerDataExport;
  /**
   * Specifies the list of events that will be displayed within the Timeline component. Each event must be represented as an object with the following required properties:
   * Default value: 
   */
  dataSource?: SchedulerEvent[];
  /**
   * A callback function that allows you to customize the text displayed within the date selector in the header section. This function receives a single parameter—the currently selected date—enabling you to return a custom string based on the date value. Use this callback to modify how the date appears in the header, such as formatting the date, adding prefixes or suffixes, or localizing the displayed value.
   * Default value: null
   */
  dateSelectorFormatFunction?: any;
  /**
   * Specifies the display format for the day component of dates shown in the timeline. This setting controls how days are rendered, such as numeric (e.g., "12"), abbreviated (e.g., "Mon"), or full weekday names (e.g., "Monday"), to match the desired presentation style in the timeline.
   * Default value: short
   */
  dayFormat?: SchedulerDayFormat | string;
  /**
   * Determines whether the element is interactive or non-interactive. When enabled, the element can receive user input and respond to events. When disabled, the element becomes inactive, preventing user interaction and applying any default disabled styling.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Prevents the timeline from automatically scrolling when you drag or resize an event, ensuring that the visible timeline remains stationary during these interactions.
   * Default value: false
   */
  disableAutoScroll?: boolean;
  /**
   * Prevents users from dragging and repositioning events within the calendar interface. Events will remain fixed in their original positions, and any attempt to move them via drag-and-drop functionality will be disabled.
   * Default value: false
   */
  disableDrag?: boolean;
  /**
   * Prevents events from being removed or discarded when system resources are limited or when buffer overflows occur. All incoming events will be retained and processed, ensuring no loss of event data.
   * Default value: false
   */
  disableDrop?: boolean;
  /**
   * Prevents users from resizing events within the calendar interface, ensuring event durations remain fixed and cannot be adjusted through drag-and-drop or other resizing actions.
   * Default value: false
   */
  disableResize?: boolean;
  /**
   * Prevents users from selecting or highlighting the contents of the cell, disabling any cell selection functionality.
   * Default value: false
   */
  disableSelection?: boolean;
  /**
   * Prevents the event window editor from opening, effectively disabling the ability for users to view or modify event details through the window interface.
   * Default value: false
   */
  disableWindowEditor?: boolean;
  /**
   * Prevents the default context menu from appearing when users right-click on events or cells. This disables the standard browser context menu and any custom right-click actions for these elements.
   * Default value: false
   */
  disableContextMenu?: boolean;
  /**
   * Prevents the event menu from appearing when a user clicks on an event or collector. This setting effectively disables the popup menu that typically provides event-related options or actions upon selection, ensuring that no event menu is shown during user interaction.
   * Default value: false
   */
  disableEventMenu?: boolean;
  /**
   * Prevents users from accessing the view selection menu in the Scheduler, thereby disabling the ability to switch between different Scheduler views (such as day, week, or month).
   * Default value: false
   */
  disableViewMenu?: boolean;
  /**
   * Prevents the date selection menu from appearing, disabling the user's ability to change the current Scheduler date through the interface.
   * Default value: false
   */
  disableDateMenu?: boolean;
  /**
   * A callback function that allows you to define and customize the visual feedback displayed to users while an event is being dragged. This enables you to modify the appearance or content of the drag preview element according to your application's requirements.
   * Default value: null
   */
  dragFeedbackFormatFunction?: any;
  /**
   * Specifies the distance and direction that the drag feedback widget is shifted relative to the user’s pointer during a drag operation. This offset customizes where the feedback appears in relation to the pointer, allowing for better visual alignment or to avoid obscuring elements beneath the pointer.
   * Default value: 10,10
   */
  dragOffset?: any;
  /**
   * Specifies the filtering criteria for events in the Scheduler. The filter property supports two formats: an 'array of filter objects' or a 'custom filtering function'.'Array of Filter Objects'  Each object in the array represents a distinct filtering rule, and must include the following attributes:- 'name': The name of the Scheduler event property to filter by (for example, '"price"' or '"roomId"').- 'value': The condition against which the event property will be evaluated. This can be:  - A static value—used as the comparison target based on the current 'filterMode'. For example:    '''json    [{ "name": "price", "value": 25 }]    '''    This filters events to only those where the 'price' property matches '25'.  - A function—enables advanced, custom filtering logic for that property. The function receives the value of the specified event property and should return 'true' (to keep the event) or 'false' (to exclude the event).      Example:    '''js    [      { name: 'roomId', value: (id) => ['2', '3'].includes(String(id)) }    ]    '''    This example filters in only the events whose 'roomId' property is ''2'' or ''3''. All other events are filtered out.'Function as Filter'  Alternatively, you may assign a function directly to the 'filter' property for full control over filtering logic. This callback function receives each Scheduler event as its single argument and should return 'true' to include or 'false' to exclude the event.  Example:'''jsfilter: (event) => event.status === 'confirmed' && event.attendees.length > 2'''This custom function ensures only confirmed events with more than two attendees are shown in the Scheduler.'Summary:'  - Use an 'array of filter objects' for property-based filtering, supporting simple values or custom functions for each attribute.- Use a 'function' for comprehensive, event-level filtering based on any combination of criteria.This flexibility allows you to implement straightforward or highly customized filtering logic to match your application's requirements.
   * Default value: (eventObj) => return eventObj.label === 'TargetLabel',[{ name: 'roomId', value: (id) => ['2', '3'].indexOf(id + '') > -1 }]
   */
  filter?: any;
  /**
   * Specifies whether filtering functionality is enabled for the Scheduler component. When set to true, users can filter scheduled items based on defined criteria; when false, filtering options are disabled and all items are displayed without filtering.
   * Default value: true,false
   */
  filterable?: any;
  /**
   * Specifies the method used to filter or process data, such as applying different algorithms or rules to control how information is displayed, sorted, or selected. The chosen filter mode affects how results are generated and presented.
   * Default value: equals
   */
  filterMode?: FilterMode | string;
  /**
   * A getter method that retrieves and returns an array containing all event objects currently managed by the Scheduler. Each event object in the array represents a scheduled event with its associated properties and details.
   * Default value: 
   */
  events?: SchedulerEvent[];
  /**
   * Specifies which day will be considered the first day of the week in the Scheduler component. By default, this is set to Sunday. You can configure this setting to start the week on any preferred day (e.g., Monday, Tuesday) to better match regional and user preferences. This affects how weeks are displayed and navigated within the Scheduler.
   * Default value: 0
   */
  firstDayOfWeek?: number;
  /**
   * Enables customization of the Scheduler's footer area. The footer content can be provided in one of the following ways:- As an HTMLTemplateElement.- By specifying the id of an existing HTML template as a string.- By passing a function with the following parameter:  - footerContainer – The container element for the footer, which you can use to programmatically modify or populate the footer’s content.This flexibility allows you to define the Scheduler's footer using markup, template references, or custom logic as needed.
   * Default value: null
   */
  footerTemplate?: any;
  /**
   * Indicates whether events should be organized and displayed based on their associated dates, grouping all events that occur on the same date together.
   * Default value: false
   */
  groupByDate?: boolean;
  /**
   * Specifies the direction or axis along which items are grouped, such as horizontal or vertical, affecting how elements are arranged and displayed within the interface.
   * Default value: horizontal
   */
  groupOrientation?: SchedulerGroupOrientation | string;
  /**
   * Enhances customization for group cell headers by allowing you to define how each group cell is rendered within the header section. You can specify one of the following as the template:- 'HTMLTemplateElement': Supply an HTML '' element that will be applied to all group header cells. Within your template, you can use property bindings that correspond to properties of the group cell object. These bindings will be automatically populated with the respective values for each cell.- 'Template ID (String)': Provide the 'id' attribute of an existing HTML '' element. The identified template will be used for rendering all group header cells.- 'Custom Function': Specify a function that will be called for each group cell. The function will receive two parameters:  - 'cellContent': A DOM element that acts as a container for the group cell’s content.  - 'cellObj': The data object associated with the current group cell.This approach gives you full flexibility to display custom content, styles, and data for group header cells according to your requirements. If you use an HTMLTemplateElement, you can leverage dynamic property bindings that map directly to the properties of each group cell’s data object.
   * Default value: null
   */
  groupTemplate?: any;
  /**
   * Specifies the resource type or category by which events are organized or grouped, enabling the display and management of events according to associated resources (such as users, rooms, equipment, or custom entities). This setting determines how events are visually separated and filtered within the application based on their linked resources.
   * Default value: 
   */
  groups?: any;
  /**
   * Specifies the latest hour that will be visible on the calendar in both 'day' and 'week' views. Events scheduled after this hour will not be displayed in these views.
   * Default value: 23
   */
  hourEnd?: number;
  /**
   * Specifies the starting hour of the visible time range in the 'day' and 'week' calendar views. Events or time slots before this hour will not be shown in these views.
   * Default value: 0
   */
  hourStart?: number;
  /**
   * Specifies how hours are displayed within the element, including aspects such as 12-hour or 24-hour format, inclusion of leading zeros, and any relevant separators or annotations (e.g., AM/PM).
   * Default value: numeric
   */
  hourFormat?: SchedulerHourFormat | string;
  /**
   * Enables customization of the Scheduler's header. The header can be specified in one of the following ways:- As an HTMLTemplateElement, allowing you to define a reusable template for the header's content.- As a string representing the id of an existing HTML template element in the DOM.- As a function that provides advanced customization. The function receives the following parameter:  - headerContent: The container element for the header, which you can modify or populate as needed.This flexibility lets you tailor the Scheduler's header to fit your specific design or functional requirements.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * Specifies the placement of the Date selector within the Header section of the component, allowing you to control where the Date selector appears relative to other header elements.
   * Default value: near
   */
  headerDatePosition?: SchedulerHeaderDatePosition | string;
  /**
   * Defines and customizes the appearance and layout of the header navigation controls, including their colors, fonts, spacing, and interactive states. This setting allows you to adjust how navigation elements are presented in the header section of the application or website.
   * Default value: flat
   */
  headerNavigationStyle?: SchedulerHeaderNavigationStyle | string;
  /**
   * Specifies the exact location of the view selector control within the header section of the element, allowing you to control where the selector appears in relation to other header components.
   * Default value: far
   */
  headerViewPosition?: SchedulerHeaderViewPosition | string;
  /**
   * Specifies whether the 'All Day' container—which displays events scheduled to last the entire day—is visible or hidden. When set to true, the container and its all-day events will not be displayed; when false, they will be shown.
   * Default value: false
   */
  hideAllDay?: boolean;
  /**
   * Specifies whether the days defined in the 'nonworkingDays' property should be visually hidden from view (e.g., not displayed in the calendar or schedule UI), rather than simply marked as non-working. When set to true, all days listed in 'nonworkingDays' will be completely omitted from the display. When set to false, these days remain visible but may be styled differently to indicate their non-working status.
   * Default value: false
   */
  hideNonworkingWeekdays?: boolean;
  /**
   * Enhances the calendar's month view by controlling the visibility and interactivity of "other month" days—those that do not belong to the currently displayed month. When this option is enabled:- Days from previous or next months are displayed as inactive background cells.- Events 'cannot' be created, dragged, or dropped onto these "other month" days.- Events that 'start' on "other month" days are hidden; only events that 'end' on these days may be partially shown.- Resizing of events cannot begin or end on "other month" days.- Overall, "other month" days serve purely as visual placeholders, preventing user interaction or event association.
   * Default value: false
   */
  hideOtherMonthDays?: boolean;
  /**
   * Specifies whether the 'Today' button is visible in the user interface. When set to true, the 'Today' button will be hidden; when set to false, the button will be displayed.
   * Default value: false
   */
  hideTodayButton?: boolean;
  /**
   * Controls the visibility of checkable items within the view selection menu. When enabled, checkable items are hidden from the menu; when disabled, checkable items are displayed, allowing users to select or deselect individual views.
   * Default value: false
   */
  hideViewMenuCheckableItems?: boolean;
  /**
   * Specifies whether weekend days (typically Saturday and Sunday) should be displayed or hidden in the calendar view. If set to true, weekend days will be hidden; if set to false, weekend days will be visible.
   * Default value: false
   */
  hideWeekend?: boolean;
  /**
   * Specifies where the legend is displayed within the Scheduler component. By default, the legend appears in the footer section, but it can be configured to display in the header instead. This setting allows you to customize the placement of the legend to better fit your application's layout and user experience requirements.
   * Default value: footer
   */
  legendLocation?: SchedulerLegendLocation | string;
  /**
   * Specifies the placement of the legend within the chart area. By default, the legend appears on the 'near' side (typically aligned to the left or top, depending on chart orientation). Setting this property to 'far' positions the legend on the opposite side (right or bottom), allowing customization of the legend's location to better suit your layout needs.
   * Default value: near
   */
  legendPosition?: SchedulerLegendPosition | string;
  /**
   * Specifies how the legend items are arranged within the chart, such as organizing them in a horizontal row, vertical column, or a customized layout. This property controls the visual structure and ordering of items displayed in the legend.
   * Default value: auto
   */
  legendLayout?: SchedulerLegendLayout | string;
  /**
   * Specifies the maximum number of items that can be displayed in the legend as a horizontal list. If the number of legend items exceeds this value, the legend will automatically switch to a dropdown menu format for better readability and usability.
   * Default value: 10
   */
  legendLayoutMenuBreakpoint?: number;
  /**
   * Controls the scroll increment when using the mouse wheel or trackpad. Setting this property to a positive number specifies the distance (in pixels, lines, or a defined unit) that the content will scroll with each wheel or trackpad movement. A higher value increases the scroll distance per step, while a lower value results in finer, more precise scrolling.
   * Default value: 50
   */
  mouseWheelStep?: number;
  /**
   * Specifies whether the horizontal scrollbar is visible. If set to true, a horizontal scrollbar will appear when the content overflows the container’s width; if false, the scrollbar will be hidden regardless of overflow.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility | string;
  /**
   * Sets or retrieves the 'unlockKey', a unique value required to unlock and access the product’s full features or functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies the language and regional settings used to display all interface elements, dates, and messages within the Scheduler component. This setting ensures that the Scheduler is localized according to the selected language.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Determines the latest date that can be displayed or selected in the Scheduler, effectively setting an upper limit for the Scheduler's visible or selectable date range.
   * Default value: 2100-1-1
   */
  max?: string | Date;
  /**
   * Specifies the maximum number of events that can be displayed in each Scheduler cell. If this property is set to null (the default value), the Scheduler automatically calculates how many events can fit in a cell based on the available space and the size of each event. Setting a specific value overrides this behavior and limits the number of visible events per cell to the specified maximum. Events exceeding this limit may be hidden or grouped into an overflow indicator, depending on the Scheduler’s configuration.
   * Default value: null
   */
  maxEventsPerCell?: number | null;
  /**
   * Specifies the earliest date that can be displayed or selected in the Scheduler. This property restricts navigation and date selection to dates on or after the defined minimum view date.
   * Default value: 1900-1-1
   */
  min?: string | Date;
  /**
   * Defines or retrieves an object containing all the text strings displayed by the element, allowing for easy localization of the user interface. This property should be used together with the locale property to dynamically present content in the user's preferred language or region. Each key in the object represents a specific string that can be customized or translated as needed."
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Specifies how minutes are displayed and formatted within the Scheduler component. This setting controls the appearance of minute values in time slots, event times, and related areas, ensuring consistency in how minutes are presented to users (e.g., "5", "05", or "5 min").
   * Default value: 2-digit
   */
  minuteFormat?: MinuteFormat | string;
  /**
   * Specifies the format in which month names are displayed within the Scheduler component. This setting controls whether full month names (e.g., "January"), abbreviated names (e.g., "Jan"), or custom formats appear in the Scheduler's interface wherever month names are shown.
   * Default value: long
   */
  monthFormat?: MonthFormat | string;
  /**
   * Specifies which days of the week are considered nonworking, using an array of numbers from 0 to 6, where 0 represents the first day of the week (e.g., Sunday or Monday, depending on your locale), and 6 represents the last day. These designated nonworking days will be visually distinguished within the Timeline component by applying a different background color. The specific color used for nonworking days is controlled by a configurable CSS variable, allowing for easy theming and customization.
   * Default value: 
   */
  nonworkingDays?: any;
  /**
   * Specifies the nonworking hours within a day. The nonworking hours are defined using an array, where each element represents either a single hour (as a number) or a range of hours (as an array containing the start and end hours, separated by a comma). For example, '[0, [13, 15], 23]' marks hour 0, hours 13 through 15 (inclusive), and hour 23 as nonworking. On the timeline, cells corresponding to these nonworking hours are visually distinguished by a different color from the working hours.
   * Default value: 
   */
  nonworkingHours?: any;
  /**
   * Specifies the time interval, in seconds, at which the element will automatically check for new notifications. This value controls how frequently the element polls for updates, with shorter intervals resulting in more frequent checks.
   * Default value: 60
   */
  notificationInterval?: number;
  /**
   * Controls whether the resize handles are visible to the user, allowing them to resize the element. When enabled, resize handles will appear on the edges or corners of the element; when disabled, resize handles will be hidden and resizing will not be possible via the user interface.
   * Default value: auto
   */
  resizeHandlesVisibility?: ResizeHandlesVisibility | string;
  /**
   * ''  Specifies how frequently the element's content should update (refresh) when the element is resized. By default, the content refreshes immediately on every resize event. Adjusting this property enables throttling, which limits the rate of refreshes and can improve performance by reducing unnecessary updates during rapid or continuous resizing. You can set it to a time interval (in milliseconds) to control the minimum delay between refresh operations.
   * Default value: 0
   */
  resizeInterval?: number;
  /**
   * An array containing resource objects that can be allocated or linked to specific events. Each resource represents an entity—such as a person, room, or asset—that can be associated with one or more events for scheduling or organizational purposes.
   * Default value: 
   */
  resources?: SchedulerResource[];
  /**
   * Specifies an array of restricted dates on which events are not permitted. Any events that overlap with these restricted dates, or that start or end on these dates, will be excluded from display and unavailable for scheduling.
   * Default value: 
   */
  restrictedDates?: any;
  /**
   * Specifies an array of restricted hours during which events are not permitted to be scheduled. Any event that overlaps with, starts, or ends within these restricted hours will be excluded from display. This ensures that no events are shown during the designated unavailable time periods.
   * Default value: 
   */
  restrictedHours?: any;
  /**
   * Defines an array of time restrictions specifying when events are not permitted. Each element in the array is an object that must include two fields: date and hours.- The 'date' field indicates the specific day on which the restriction applies (e.g., 'new Date(2023, 10, 1)').- The 'hours' field specifies one or more restricted hours within that day. This is an array where each item represents a restricted period, defined either as:  - a single hour (e.g., '12', which restricts only the hour 12:00–13:00), or  - an array of two numbers specifying a start and end hour in 24-hour format (e.g., '[0, 6]' restricts from 00:00 up to, but not including, 06:00; '[20, 23]' restricts from 20:00 up to, but not including, 23:00).Events that have any portion overlapping these restricted hours—either beginning, ending, or entirely contained within them—will be excluded and not displayed.'Example:'  '''js{  date: new Date(2023, 10, 1),  hours: [[0, 6], 12, [20, 23]]}'''This restricts events from being scheduled on November 1, 2023, between midnight and 6 AM, exactly at 12 PM–1 PM, and from 8 PM to 11 PM.Use this array to block out specific times when events should not be allowed, similar to the 'restrictedHours' property, but with restrictions tied to specific calendar dates.
   * Default value: 
   */
  restricted?: any;
  /**
   * Sets or retrieves a value that determines whether the element’s alignment is configured for right-to-left (RTL) text direction, which is commonly used in locales with RTL languages such as Arabic or Hebrew. This property ensures proper text and layout orientation to support languages that are read from right to left.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the placement of the date navigation buttons within the element’s header, determining where buttons such as “Previous”, “Next”, or “Today” appear in relation to other header content.
   * Default value: near
   */
  scrollButtonsPosition?: SchedulerScrollButtonsPosition | string;
  /**
   * Controls the activation of the current time shader. When enabled, all cells representing times that have already passed will be visually shaded to distinguish them from upcoming times. Disabling this option will remove the shading, displaying all time cells with the default appearance.
   * Default value: false
   */
  shadeUntilCurrentTime?: boolean;
  /**
   * Controls the visibility of the resource legend in the Scheduler component. When enabled, the resource legend appears in the footer section and displays a list of resources along with their respective items. If the filterable option is set to true, users can click on any resource item within the legend to filter the Scheduler view by that specific resource, making it easier to focus on relevant events or data.
   * Default value: false
   */
  showLegend?: boolean;
  /**
   * Specifies the property name within each resource data item (defined by resource.dataSource) that will be used to sort the resources. This determines the field by which the resource data is ordered when displayed or processed.
   * Default value: "null"
   */
  sortBy?: string;
  /**
   * Enables you to specify a custom sorting function that determines the order in which resource data is sorted. The provided sortFunction will be invoked whenever the sortOrder property is set to custom. This allows for full control over the sorting logic, accommodating complex or specialized sorting requirements beyond the default sort options.
   * Default value: null
   */
  sortFunction?: any;
  /**
   * Specifies how the resource data items should be sorted. Acceptable values are asc for ascending order and desc for descending order. If set to custom, you must also provide a custom sorting function using the sortFunction property. The chosen sorting order determines how the data items are organized and displayed.
   * Default value: asc
   */
  sortOrder?: SchedulerSortOrder | string;
  /**
   * Specifies the interval, in milliseconds, between repeated activation events when a repeat button within the element's header is held down. This applies to buttons such as the date navigation controls and the view scrolling buttons, allowing users to quickly navigate by holding the button instead of clicking multiple times.
   * Default value: 80
   */
  spinButtonsDelay?: number;
  /**
   * Specifies the initial delay (in milliseconds) before the repeat buttons located in the header of the element begin to trigger repeated actions when held down. These repeat buttons include the date navigation buttons (e.g., previous/next date) and the view scroll buttons. Setting this value controls how long a user must hold down the button before the action starts repeating automatically.
   * Default value: 0
   */
  spinButtonsInitialDelay?: number;
  /**
   * Specifies the list of status options that users can select from when managing events through the window editor interface. These statuses help categorize or track the current state of each event.
   * Default value: [{"label":"None"},{"label":"Free","value":"free"},{"label":"Tentative","value":"tentative"},{"label":"Busy","value":"busy"},{"label":"Out of Office","value":"outOfOffice"}]
   */
  statuses?: SchedulerStatuse[];
  /**
   * Gets or sets the visual theme of the element, allowing you to customize its appearance (such as color scheme, style, or look) according to the specified theme value.
   * Default value: ""
   */
  theme?: string;
  /**
   * A formatting function specifically for the Timeline Header. This function enables customization of the text displayed as date labels within the header cells, allowing you to modify the appearance or format of dates (e.g., changing date formats, adding prefixes/suffixes, or translating labels) according to your requirements.
   * Default value: null
   */
  timelineHeaderFormatFunction?: any;
  /**
   * Specifies the time interval (such as days, weeks, or months) used to label and organize each cell within the timeline, controlling how dates are displayed and grouped.
   * Default value: hour
   */
  timelineDayScale?: SchedulerTimelineDayScale | string;
  /**
   * Controls the visibility of tick marks displayed next to the time labels in the vertical header of the element. These tick marks appear in the time header section, which is shown only in 'day' and 'week' views. Enabling this option will show tick marks for each time cell; disabling it will hide them.
   * Default value: false
   */
  timeRulerTicks?: boolean;
  /**
   * Specifies the time zone to be applied to the element. If this property is not set, the element defaults to using the user's local time zone.
   * Default value: Local
   */
  timeZone?: SchedulerTimeZone | string;
  /**
   * Enables the display of multiple time zones simultaneously, in addition to the default time zone specified by the timeZone property. This property accepts an array of string values, where each value corresponds to a valid time zone identifier. The complete list of supported time zone identifiers can be found in the timeZone property documentation. By default, only the user's local time zone is shown if no additional time zones are provided.
   * Default value: 
   */
  timeZones?: any;
  /**
   * Specifies the delay, in milliseconds, before the tooltip or menu is displayed after a triggering event (such as hover or click). This allows you to control how quickly the tooltip or menu appears, enhancing user experience and preventing accidental activations.
   * Default value: 0
   */
  tooltipDelay?: number;
  /**
   * Specifies the distance (in pixels or other units) by which the tooltip or menu is shifted from its default position relative to its target element. Adjusting this value changes how far the tooltip or menu appears from the target, allowing for precise placement and improved visual alignment.
   * Default value: 
   */
  tooltipOffset?: number[];
  /**
   * Specifies whether the vertical scrollbar is visible, allowing users to scroll content vertically when necessary. Set to true to display the vertical scrollbar, or false to hide it.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility | string;
  /**
   * Specifies the currently active view. This property accepts one of the view values defined in the views property. When using custom views, ensure each custom view includes a unique value property; this value will be assigned to the current view and used to control which view is displayed.
   * Default value: "day"
   */
  view?: string;
  /**
   * Specifies the current view type of the Scheduler component (e.g., 'day', 'week', 'month'). When defining custom views, ensure that each view includes a valid type property matching one of the supported view types. Note: This property is managed internally by the Scheduler and should not be set manually in your configuration.
   * Default value: day
   */
  viewType?: SchedulerViewType | string;
  /**
   * Specifies the range of dates displayed in the timeline view. This property accepts an array containing either predefined view strings or custom view objects.'Usage:'- If you set an element to a string, use one of the following built-in view identifiers:   ''day'', ''week'', ''month'', ''agenda'', ''timelineDay'', ''timelineWeek'', ''timelineMonth''.- To define a custom view, provide an object with the properties detailed below.'Custom View Object Properties:'- 'label' _(string, required)_: The display name shown for the view in the UI.- 'value' _(string, required)_: A unique identifier for the view.- 'type' _(string, required)_: The underlying view type. Must match one of the default view types listed above.- 'hideWeekend' _(boolean, optional)_: If set to 'true', weekends will be hidden for this specific view.- 'hideNonworkingWeekdays' _(boolean, optional)_: If set to 'true', non-working weekdays (e.g., Monday–Friday) will be hidden for this view.- 'shortcutKey' _(string, optional)_: Assigns a custom keyboard shortcut for switching to this view.- 'hideHours' _(boolean, optional; timelineWeek only)_: If set to 'true', the timelineWeek view will display only day cells, hiding hour cells.By configuring this property, you have full control over which timeline views are available to users and how each view behaves. Use strings for standard views and objects when you need to define custom labels, behaviors, or shortcuts.
   * Default value: day,week,month
   */
  views?: SchedulerViews | string;
  /**
   * Specifies the type of view selector that appears in the element's header, which controls how content is displayed (e.g., as a list, grid, or table view). This setting determines the layout options available to the user within the header section of the component.
   * Default value: menu
   */
  viewSelectorType?: SchedulerViewSelectorType | string;
  /**
   * Configures the rule used to determine the start date in Week and TimelineWeek views. By default, these views start from the current date, factoring in the value specified by the 'firstDayOfWeek' property. If the 'startDateRule' property is set to 'dateCurrent', the Week and TimelineWeek views will instead start from the date provided in the 'dateCurrent' property, overriding the default behavior.
   * Default value: firstDayOfWeek
   */
  viewStartDay?: SchedulerViewStartDay | string;
  /**
   * Specifies how the names of the weekdays are displayed within the element (e.g., full names, short names, or initials).
   * Default value: short
   */
  weekdayFormat?: WeekDayFormat | string;
  /**
   * Specifies the date format used to display years within the timeline header. This setting controls how year values are rendered (e.g., "YYYY", "YY", or "yyyy") when the header represents years, ensuring consistent and readable date presentation.
   * Default value: numeric
   */
  yearFormat?: YearFormat | string;
  /**
   * Determines whether the element can receive keyboard focus. When set, the element becomes focusable and can be targeted using keyboard navigation (e.g., with the Tab key). When retrieved, it returns the current focusable state of the element.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Specifies the maximum number of redo and undo actions that the Scheduler will retain in its history. Once this limit is reached, the oldest actions are automatically discarded to make room for new ones, ensuring that only the most recent actions up to the defined maximum are available for undo or redo operations.
   * Default value: 100
   */
  undoRedoSteps?: number;
  /**
   * This function allows you to fully customize the popup window that appears when editing events. It gives you complete control over the appearance, content, and behavior of the popup based on the event context. The function is called with the following arguments:      target – The popup window element that is about to be displayed. You can modify or replace this element to change how the popup looks and functions.        type – A string indicating the purpose of the popup window. The default value is an empty string (''), which signifies the standard event editing window. If the value is 'confirm', the popup serves as a confirmation dialog, typically shown when interacting with repeating events (e.g., asking whether to edit a single occurrence or the series).        eventObj – The event data object associated with the event being edited or confirmed. This object contains all relevant details about the event, allowing you to display or edit its properties within the popup.  Use this function to precisely tailor the event editing or confirmation experience in your application’s UI.
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
   * This event is triggered when a batch update operation begins, initiated by calling the <b>beginUpdate</b> method. It indicates that any changes made to the underlying data or UI components between the <b>beginUpdate</b> and <b>endUpdate</b> methods will be grouped and processed as a single batch, rather than triggering individual updates for each change. This event allows developers to perform any necessary setup or respond appropriately at the start of a batch update sequence.
	* @param event. The custom event.    */
  onBeginUpdate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered after the <b>endUpdate</b> method is executed, signaling that a batch update operation has been completed. It indicates that all changes grouped within the update session have finished processing, and any relevant updates or UI refreshes can now occur.
	* @param event. The custom event.    */
  onEndUpdate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user selects or deselects a cell, providing a notification each time the cell selection state changes. It can be used to detect when a cell gains or loses selection focus within the interface.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue)
   *  value - The new selected Date.
   *  oldValue - The previously selected Date.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever an event in the calendar is modified in any of the following ways: created (inserted), updated (edited), deleted (removed), dragged to a new position, or resized to change its duration. Additionally, the event is fired when an exception for a recurring event is added, updated, or removed. This ensures your application can respond to all major modifications or exceptions affecting calendar events.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, type)
   *  item - An object that represents the actual item with it's attributes.
   *  type - The type of change that is being done to the item.
   */
  onItemChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * "This event is fired immediately before an event record is updated, inserted, or removed in the system. Developers can intercept this event in their handler function to perform custom logic. To prevent the default update, insert, or removal operation from proceeding, call event.preventDefault() within the event handler. This mechanism enables conditional validation, confirmation dialogs, or other asynchronous checks before changes are finalized."
	* @param event. The custom event. Custom data event was created with: ev.detail(item, type)
   *  item - An object that represents the actual item with it's attributes.
   *  type - The type of change that is going to be made to the item (e.g. 'inserting', 'removing', 'updating', 'exceptionInserting', 'exceptionUpdating', 'exceptionRemoving').
   */
  onItemChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user clicks on an event, an individual event item, or an item within the context menu. It captures user interaction with any of these elements, allowing you to handle click responses accordingly.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, type, itemObj)
   *  item - The HTMLElement for the event.
   *  type - The type of item that is clicked. The possible values are: <ul><li>event - when an event item is clicked.</li><li>context - when a context menu item is clicked.</li></ul>.
   *  itemObj - The event object.
   */
  onItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a new Event record is successfully created and inserted into the system. It allows you to respond to the addition of new Events, enabling actions such as updating user interfaces, syncing data, or sending notifications whenever an Event object is added.
	* @param event. The custom event. Custom data event was created with: ev.detail(item)
   *  item - An object that represents the actual item with it's attributes.
   */
  onItemInsert?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever an existing Event object is successfully deleted from the system. It allows you to execute custom logic or update the user interface in response to the removal of an Event.
	* @param event. The custom event. Custom data event was created with: ev.detail(item)
   *  item - An object that represents the actual item with it's attributes.
   */
  onItemRemove?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever an existing Event object is modified. It occurs after any change to the Event’s properties, such as updates to its title, time, location, or other attributes. Use this event to respond to or track changes made to Events in your application.
	* @param event. The custom event. Custom data event was created with: ev.detail(type, item)
   *  type - The type of item that has been modified.
   *  item - An object that represents the actual item with it's attributes.
   */
  onItemUpdate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user changes the view through any form of interaction, such as clicking, tapping, swiping, or using navigation controls. It signifies that the visible content or display state has been modified as a direct result of the user's actions.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The value of the previously selected view.
   *  value - The value of the new selected view.
   */
  onViewChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately before the view changes in response to a user interaction (such as clicking a navigation button or selecting a different tab). At this stage, event listeners have the opportunity to intercept the view change. If event.preventDefault() is called within the event handler, the view change will be canceled, preventing the UI from updating to the new view. This allows for custom validation, confirmation dialogs, or other logic to be executed before a view transition occurs.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The value of the previously selected view.
   *  value - The value of the new selected view.
   */
  onViewChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a designated shortcut key associated with an event action is pressed by the user. By default, the event responds only to the 'Delete' key, but additional shortcut keys can be configured if needed.
	* @param event. The custom event. Custom data event was created with: ev.detail(key, target, eventObj)
   *  key - The shortcut key that was pressed.
   *  target - The event target (HTMLElement).
   *  eventObj - The scheduler Event object that affected by the keypress.
   */
  onEventShortcutKey?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the `dateCurrent` property is updated. Typically, this occurs when a user navigates to a different date within the interface (for example, by selecting a new day, week, or month). The event allows you to respond dynamically to changes in the currently selected or displayed date.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous current date that was in view.
   *  value - The current date in view.
   */
  onDateChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired when a user initiates the dragging of an event. In the associated event handler function, you can call event.preventDefault() to cancel the drag operation before it starts, preventing the event from being moved. This allows you to implement custom validation or conditional logic to restrict when dragging is permitted.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, itemDateRange, originalEvent)
   *  target - The HTMLElement that corresponds to the event that is going to be dragged.
   *  item - The scheduler Event object that is going to be dragged.
   *  itemDateRange - The start/end dates for the Scheduler Event.
   *  originalEvent - The original event object.
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when a user completes dragging an event item and releases it to its new position. Use this event to perform actions after the drag operation has ended, such as updating the event’s data or saving its new placement.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, itemDateRange, originalEvent)
   *  target - The HTMLElement that corresponds to the event that is dragged.
   *  item - The scheduler Event object that is dragged.
   *  itemDateRange - The new start/end dates for the dragged Scheduler Event.
   *  originalEvent - The original event object.
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when a user completes a drag-and-drop action by releasing (dropping) an item onto a specific cell. It occurs after the dragged item is moved over a cell and the mouse button is released, allowing you to handle actions such as updating cell content, moving items, or processing the dropped data.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, date, allDay)
   *  target - The HTMLElement that corresponds to the event that is dragged.
   *  date - The cell's date under the pointer.
   *  allDay - Boolean value, which is true when the cell under the pointer is all day cell.
   */
  onDropoverCell?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired when a user begins to resize a task element. By handling this event, you have the option to prevent the resize operation from starting by calling event.preventDefault() within your event handler. This enables you to implement custom validation or logic before allowing the resize action to proceed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, itemDateRange, originalEvent)
   *  target - The HTMLElement that corresponds to the event that is going to be resized.
   *  item - The scheduler Event object that is going to be resized.
   *  itemDateRange - The start/end dates for Scheduler Event that is going to be resized.
   *  originalEvent - The original event object.
   */
  onResizeStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user completes resizing an event, signaling that the event's size has been adjusted and the resize action is finished. It typically occurs after the user releases the mouse or touch input, and can be used to perform actions such as updating the event's duration or saving changes.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, itemDateRange, originalEvent)
   *  target - The HTMLElement that corresponds to the event that is resized.
   *  item - The scheduler Event object that is resized.
   *  itemDateRange - The new start/end dates for the resized Scheduler Event.
   *  originalEvent - The original event object.
   */
  onResizeEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user initiates the process of opening the event dialog window, before the dialog is actually displayed. Within the event handler function, you can call event.preventDefault() to cancel the opening of the dialog, thereby preventing it from appearing to the user. This allows you to intercept and block the operation based on custom logic, such as validation checks or user permissions.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, type, eventObj)
   *  target - The dialog window that is opening.
   *  item - The event object that is going to be edited.
   *  type - The type of window that is going to open. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
   *  eventObj - The event object that is the target of the menu.
   */
  onEditDialogOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the event dialog window becomes visible to the user, such as when the user initiates the creation or editing of an event. It indicates that the dialog has been rendered and is ready for user interaction.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, editors, item, eventObj)
   *  target - The dialog window that is opened.
   *  editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
   *  item - The event object that is being edited.
   *  eventObj - The event object that is the target of the menu.
   */
  onEditDialogOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user closes the event dialog window, either by clicking the 'close' button, pressing the escape key, or performing any action that results in the dialog being dismissed. It allows developers to execute custom logic immediately after the dialog has been closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, editors, item, eventObj)
   *  target - The dialog window that is closed.
   *  editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
   *  item - The event object that is being edited.
   *  eventObj - The event object that is the target of the menu.
   */
  onEditDialogClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered just before the event dialog window is closed, giving you an opportunity to run custom logic before the closure occurs. Within the event handler, you can call event.preventDefault() to cancel the closing operation and keep the dialog open, for example, to prompt the user to save changes or confirm their action.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, type, eventObj)
   *  target - The dialog window that is closing.
   *  item - The event object that is edited.
   *  type - The type of window that is going to be closed. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
   *  eventObj - The event object that is the target of the menu.
   */
  onEditDialogClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user initiates opening the context menu—usually by right-clicking—on a timeline cell or event element. Within the event handler, you can prevent the default context menu from appearing by calling event.preventDefault(). This enables custom context menu implementations or the blocking of the menu based on specific conditions.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, cellObj, eventObj)
   *  target - The context menu instance.
   *  owner - The HTMLElement that the menu belongs to.
   *  cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
   *  eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
   */
  onContextMenuOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the context menu (typically a right-click menu) is activated and becomes visible to the user. It allows developers to execute custom logic or modify menu content when the context menu is about to be displayed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, cellObj, eventObj)
   *  target - The context menu instance.
   *  owner - The HTMLElement that the menu belongs to.
   *  cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
   *  eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
   */
  onContextMenuOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the context menu is closed, either by user action (such as clicking outside the menu, selecting a menu option, or pressing the Escape key) or programmatically. It signals that the context menu is no longer visible to the user and any related cleanup or UI updates can be performed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, cellObj, eventObj)
   *  target - The context menu instance.
   *  owner - The HTMLElement that the menu belongs to.
   *  cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
   *  eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
   */
  onContextMenuClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired just before the context menu is about to close. Developers can intercept this event in an event handler and prevent the menu from closing by calling event.preventDefault(). This allows you to implement custom logic or conditions that control whether the context menu should be closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, cellObj, eventObj)
   *  target - The context menu instance.
   *  owner - The HTMLElement that the menu belongs to.
   *  cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
   *  eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
   */
  onContextMenuClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered just before the event menu is displayed to the user. It gives you an opportunity to intercept the opening process. By calling event.preventDefault() within your event handler, you can prevent the menu from appearing. This allows you to implement custom logic or conditions under which the menu should not open.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, eventObj)
   *  target - The menu instance.
   *  owner - The HTMLElement of the event that the menu belongs to.
   *  eventObj - The event object that is the target of the menu.
   */
  onEventMenuOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the event menu becomes visible to the user, such as when it is opened or expanded through a user interaction or programmatic action. It indicates that the event menu is now accessible and ready for user input or selection.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, eventObj)
   *  target - The menu instance.
   *  owner - The HTMLElement of the event that the menu belongs to.
   *  eventObj - The event object that is the target of the menu.
   */
  onEventMenuOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the event menu is fully closed, either by user interaction or programmatically. It indicates that all closing animations or transitions have completed and the menu is no longer visible or interactive. Use this event to perform actions that should only occur after the menu has been dismissed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, eventObj)
   *  target - The menu instance.
   *  owner - The HTMLElement of the event that the menu belongs to.
   *  eventObj - The event object that is the target of the menu.
   */
  onEventMenuClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered just before the event menu is closed. It provides an opportunity to intercept and potentially prevent the menu from closing by calling event.preventDefault() within the event handler function. If preventDefault() is called, the close operation will be canceled. This allows developers to implement custom logic—such as validating user input or confirming actions—before the menu actually closes.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner, eventObj)
   *  target - The menu instance.
   *  owner - The HTMLElement of the event that the menu belongs to.
   *  eventObj - The event object that is the target of the menu.
   */
  onEventMenuClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user opens the date selection menu, typically by clicking on or focusing the date input field. It can be used to perform actions such as loading available dates, displaying custom instructions, or updating the calendar before the user makes a selection.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The menu instance.
   */
  onDateMenuOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the date selection menu is closed by the user, either by selecting a date or by dismissing the menu, indicating that the date picker component is no longer visible.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The menu instance.
   */
  onDateMenuClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user opens the view selection menu, indicating the menu has become visible and is ready for interaction. Use this event to execute actions that should occur when the view selection interface is displayed, such as loading menu options or tracking user engagement.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The menu instance.
   */
  onViewMenuOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the view selection menu is closed by the user, either by selecting an option or dismissing the menu. It signifies that the view selection interface is no longer visible, allowing you to perform any necessary actions in response to the menu's closure.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The menu instance.
   */
  onViewMenuClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user interacts with and opens a notification. It occurs immediately after the notification is clicked or tapped, allowing you to perform actions such as navigating to a specific page, logging the interaction, or updating application state.
	* @param event. The custom event. Custom data event was created with: ev.detail(instance)
   *  instance - The toast item instance that is opened.
   */
  onNotificationOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a notification is dismissed, either by user action (such as clicking the close button) or programmatically via code. It provides an opportunity to respond when a notification is no longer visible to the user.
	* @param event. The custom event. Custom data event was created with: ev.detail(instance)
   *  instance - The toast item instance that is closed.
   */
  onNotificationClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds a new event to the Scheduler component. This method accepts a single event object, structured according to the Scheduler’s dataSource format. The event object supports a comprehensive set of properties, allowing for detailed configuration of event details, appearance, recurrence, and behavior:<br/><br/><pre><br/>{<br/>  label?: string,                       // The event title/label (optional)<br/>  dateStart: date,                      // Start date and time (required)<br/>  dateEnd: date,                        // End date and time (required)<br/>  description?: string,                 // Additional event details (optional)<br/>  id?: string | number,                 // Unique event identifier (optional)<br/>  class?: string,                       // CSS class for custom styling (optional)<br/>  backgroundColor?: string,             // Background color (any CSS color value)<br/>  color?: string,                       // Text color (any CSS color value)<br/>  notifications?: [                     // Array of notification objects for reminders (optional)<br/>    {<br/>      interval: number,                 // Reminder interval in minutes/hours/days<br/>      type?: string,                    // Type of notification (email, popup, etc.)<br/>      time: number[]                    // Specific times (in minutes, relative to event start)<br/>    }<br/>  ],<br/>  allDay?: boolean,                     // Marks the event as an all-day event (optional)<br/>  disableDrag?: boolean,                // Prevents dragging/moving this event (optional)<br/>  disableResize?: boolean,              // Prevents resizing this event (optional)<br/>  repeat?: {                            // Recurrence rules (optional)<br/>    repeatFreq: string,                 // Frequency type: 'daily', 'weekly', 'monthly', etc.<br/>    repeatInterval: number,             // Interval for the repeat frequency (e.g., every 2 days)<br/>    repeatOn?: number | number[] | date,// Specific days or dates for recurrence pattern<br/>    repeatEnd?: number | date,          // Number of recurrences or end date<br/>    exceptions?: [                      // Dates or instances to exclude or modify (optional)<br/>      {<br/>        date: date,                     // Exception date (required)<br/>        dateStart?: date,               // Optional exception start time<br/>        dateEnd?: date,                 // Optional exception end time<br/>        hidden?: boolean,               // Whether this instance is hidden<br/>        backgroundColor?: string,       // Custom color for the exception<br/>        status?: string,                // Custom status<br/>        label?: string,                 // Custom label<br/>        description?: string,           // Custom description<br/>        notifications?: [               // Custom notifications for this exception<br/>          {<br/>            interval: number,<br/>            type?: string,<br/>            time: number[]<br/>          }<br/>        ],<br/>        disableDrag?: boolean,          // Disable dragging for this occurrence<br/>        disableResize?: boolean         // Disable resizing for this occurrence<br/>      }<br/>    ]<br/>  },<br/>  status?: string                       // Custom status for the event (optional)<br/>}<br/></pre><br/><br/>**Summary:**  <br/>This flexible structure allows you to configure simple or complex events with custom colors, notifications, recurrences (including exceptions), interaction restrictions, and more. All properties are optional unless otherwise marked as required. The event object you provide will be added to the Scheduler and rendered according to the specified options.
   * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
   */
  addEvent(eventObj: any): void;
  /**
   * Enhances the scheduler by allowing you to define and register a custom view.  <br/>For example: `scheduler.addView('week', 'My View', 'myView', false, false, 10);`  <br/>Here, the parameters specify the base view type ('week'), display name ('My View'), unique view ID ('myView'), two boolean options (such as visibility or default state), and a numeric parameter (such as duration or step).  <br/>You can then activate the new view with `scheduler.setView('myView');`.  <br/>This enables developers to quickly add personalized calendar views that suit specific application needs.
   * @param {string} type. The view type.
   * @param {string} label. The view's label displayed in the header.
   * @param {string} value. The view's value used to identify the view.
   * @param {boolean} hideWeekend. Determines whether to hide the weekend.
   * @param {boolean} hideNonworkingWeekdays. Determines whether to hide the non working days.
   * @param {number} additionalDays. Determines whether to add additional days to the view.
   */
  addView(type: string, label: string, value: string, hideWeekend: boolean, hideNonworkingWeekdays: boolean, additionalDays: number): void;
  /**
   * Initiates an update operation, allowing you to group multiple method calls or set multiple properties simultaneously. This ensures that all changes are applied together, which can improve performance and prevent intermediate states from being visible during the update process. Use this when you need to batch updates for efficiency or consistency.
   */
  beginUpdate(): void;
  /**
   * Creates a new event with specified details (such as title, date, time, and description) and adds it to the Scheduler’s event list, making it available for viewing, editing, and management within the scheduling interface.
   * @param {string} label. Event label.
   * @param {string} value. Event value.
   * @param {string} dateStart. Event date start.
   * @param {string} dateEnd. Event date end.
   * @param {boolean} allDay. Event all day. Set it to true to create all day event.
   */
  createEvent(label: string, value: string, dateStart: string, dateEnd: string, allDay: boolean): void;
  /**
   * Finalizes the update operation, allowing the component to resume its normal rendering process. This method triggers a re-render of the element, ensuring that all recent changes are reflected in the UI.
   */
  endUpdate(): void;
  /**
   * Returns an array containing the start and end dates that define the current visible date range in the view. The first element is the start date, and the second element is the end date.
   * @returns {Date[]}
   */
  getViewDates(): Date[];
  /**
   * Refreshes the Scheduler by recalculating and updating the scrollbars to ensure proper alignment and visibility based on the current content and layout changes.
   * @param {boolean} fullRefresh?. If set the Scheduler will be re-rendered completely.
   */
  refresh(fullRefresh?: boolean): void;
  /**
   * Exports all scheduled events from the Scheduler component, allowing you to download or transfer event data in a supported format (e.g., JSON, CSV, or iCal) for external use, backup, or integration with other applications.
   * @param {string} dataFormat. Determines the format of the exported file. The following values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>iCal</b></li></ul>
   * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer to the Smart Export Documentation.
   * @param {any} dataCallback?. A callback that allows to change the exported data.
   */
  exportData(dataFormat: string, callback?: any, dataCallback?: any): void;
  /**
   * Returns a detailed JSON object containing all the events currently managed by the Scheduler, including properties such as event IDs, titles, start and end times, locations, descriptions, and any custom metadata associated with each event. This allows for programmatic access to the full list of scheduled events for use in external applications or integrations.
   * @returns {any}
   */
  getDataSource(): any;
  /**
   * Returns a JSON-encoded object containing the detailed data for all resources managed by the Scheduler, including their unique identifiers, properties, and current state. This allows client applications to programmatically access and manipulate the full list of Scheduler resources in a structured format.
   * @returns {any}
   */
  getResources(): any;
  /**
   * Retrieves a date value based on the provided coordinate data, typically by mapping spatial or grid coordinates to a corresponding date in a dataset or timeline.
   * @param {number} x. X coordinate.
   * @param {number} y. Y coordinate.
   * @returns {string}
   */
  getDateFromCoordinates(x: number, y: number): string;
  /**
   * Determines if the cell at the specified coordinates represents an "all-day" cell, typically used for events that span the entire day in a calendar view.
   * @param {number} x. X coordinate.
   * @param {number} y. Y coordinate.
   * @returns {boolean}
   */
  getIsAllDayCellFromCoordinates(x: number, y: number): boolean;
  /**
   * Returns an object representing the current state of the Scheduler. This includes the following properties:  <br/>- <b>dateCurrent</b>: The Scheduler’s currently selected or displayed date.  <br/>- <b>dataSource</b>: The data source currently used to populate the Scheduler events or appointments.  <br/>- <b>timeZone</b>: The time zone setting currently applied to the Scheduler.  <br/>Use this method to retrieve a snapshot of the Scheduler’s core settings at any given moment.
   * @returns {any}
   */
  getState(): any;
  /**
   * Removes a previously stored state of the element from LocalStorage using its assigned id as the key. <strong>An id attribute must be set on the element for this function to work correctly.</strong>
   */
  clearState(): void;
  /**
   * Retrieves a previously saved state of the element. If a specific state is provided as an argument, it loads that state. If no argument is passed, the method checks LocalStorage for any existing saved states and loads the most recent one if available.
   * @param {any[]} state?. An Array containing a valid structure of Scheduler events. If no state is provided, the element will check localStorage for a saved state.
   */
  loadState(state?: any[]): void;
  /**
   * Stores the current event data associated with the element in LocalStorage. <strong>Note: The element must have a unique id attribute set for this functionality to work correctly.</strong>
   * @param {any[]} state?. An Array containing a valid structure of Scheduler events.
   */
  saveState(state?: any[]): void;
  /**
   * Specifies and activates a custom view for the Scheduler component. For example, the code scheduler.addView('week', 'My View', 'myView', false, false, 10); creates a new view named "My View" of type "week" with the identifier "myView". The parameters control the view's properties, such as its type, display name, unique id, and other options. The following method, scheduler.setView('myView');, then switches the Scheduler to display the newly defined custom view.
   * @param {string} view?. The view's value. For example: 'day'. 
   */
  setView(view?: string): void;
  /**
   * Determines if a specific event is present within the Scheduler's collection of scheduled events. Returns true if the event exists; otherwise, returns false.
   * @param {any} eventObj. A Scheduler event object.
   * @returns {boolean}
   */
  containsEvent(eventObj: any): boolean;
  /**
   * Inserts an event object following the dataSource format. The event object supports a comprehensive set of properties for defining event details, appearance, recurrence, and behavior. The structure is as follows:<br/><br/><pre><br/>{<br/>  label?: string,                   // (Optional) Title or name of the event<br/>  dateStart: date,                  // Start date and time of the event (Date object or ISO string)<br/>  dateEnd: date,                    // End date and time of the event (Date object or ISO string)<br/>  description?: string,             // (Optional) Detailed description of the event<br/>  id?: string | number,             // (Optional) Unique identifier for the event<br/>  class?: string,                   // (Optional) CSS class for custom styling<br/>  backgroundColor?: string,         // (Optional) Event background color (CSS color value)<br/>  color?: string,                   // (Optional) Text color for the event (CSS color value)<br/>  notifications?: [                 // (Optional) Array of notification settings for reminders<br/>    {<br/>      interval: number,             // Time interval before the event to trigger the notification (in minutes)<br/>      type?: string,                // (Optional) Type of notification (e.g., 'email', 'alert')<br/>      time: number[]                // Array of specific times (in minutes) for notifications<br/>    }<br/>  ],<br/>  allDay?: boolean,                 // (Optional) If true, the event lasts all day<br/>  disableDrag?: boolean,            // (Optional) If true, dragging/rescheduling is disabled for this event<br/>  disableResize?: boolean,          // (Optional) If true, resizing is disabled for this event<br/>  repeat?: {                        // (Optional) Recurrence configuration for repeating events<br/>    repeatFreq: string,             // Frequency of repetition ('daily', 'weekly', 'monthly', etc.)<br/>    repeatInterval: number,         // Number of intervals between repeats (e.g., every 2 days)<br/>    repeatOn?: number | number[] | date,   // (Optional) Specific days/dates the event repeats on<br/>    repeatEnd?: number | date,      // (Optional) End condition: number of occurrences or end date<br/>    exceptions?: [                  // (Optional) List of exceptions to recurrence rules<br/>      {<br/>        date: date,                 // Date of exception<br/>        dateStart?: date,           // (Optional) Start time for the exception<br/>        dateEnd?: date,             // (Optional) End time for the exception<br/>        hidden?: boolean,           // (Optional) If true, this occurrence is not displayed<br/>        backgroundColor?: string,   // (Optional) Custom background color for this occurrence<br/>        status?: string,            // (Optional) Status for this occurrence (e.g., 'cancelled')<br/>        label?: string,             // (Optional) Custom label for this occurrence<br/>        description?: string,       // (Optional) Custom description for this occurrence<br/>        notifications?: [{ interval: number, type?: string, time: number[] }], // (Optional) Notifications for this occurrence<br/>        disableDrag?: boolean,      // (Optional) Disable drag for this single occurrence<br/>        disableResize?: boolean     // (Optional) Disable resize for this single occurrence<br/>      }<br/>    ]<br/>  },<br/>  status?: string                   // (Optional) Current status of the event (e.g., 'pending', 'confirmed')<br/>}<br/></pre><br/><br/>**Notes:**<br/>- Properties marked as optional (`?`) can be omitted.<br/>- The structure is fully compatible with dataSource arrays commonly used in calendar or scheduling components.<br/>- The object supports advanced event recurrence and exception handling for maximum flexibility in scheduling applications.
   * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
   * @param {number} index?. A number that represents the index to insert the event at. If not provided the event is inserted at the end of the list.
   */
  insertEvent(eventObj: any, index?: number): void;
  /**
   * Updates an event object that follows the structure below. The event object format matches the dataSource format used by the application. Each property is described for clarity:<br/><br/><pre><br/>{<br/>  label?: string,                  // (optional) The title or name of the event.<br/>  dateStart: date,                 // The start date and time of the event (Date object or valid date string).<br/>  dateEnd: date,                   // The end date and time of the event (Date object or valid date string).<br/>  description?: string,            // (optional) Detailed information or notes about the event.<br/>  id?: string | number,            // (optional) A unique identifier for the event (string or number).<br/>  class?: string,                  // (optional) CSS class(es) to style the event in the UI.<br/>  backgroundColor?: string,        // (optional) Background color for the event, specified as a CSS color value.<br/>  color?: string,                  // (optional) Text color for the event, specified as a CSS color value.<br/><br/>  notifications?: [                // (optional) Array of notification settings for the event.<br/>    {<br/>      interval: number,            // Time interval before an event for sending a notification (in minutes/hours).<br/>      type?: string,               // (optional) Notification type (e.g., "email", "popup").<br/>      time: number[]               // Array of times (in minutes/hours) to trigger the notification.<br/>    }<br/>  ],<br/><br/>  allDay?: boolean,                // (optional) Indicates if the event spans the entire day.<br/><br/>  disableDrag?: boolean,           // (optional) Prevents the event from being moved via drag-and-drop in the UI.<br/>  disableResize?: boolean,         // (optional) Prevents the event from being resized in the UI.<br/><br/>  repeat?: {                       // (optional) Recurrence settings for repeating events.<br/>    repeatFreq: string,            // Frequency of repetition (e.g., "daily", "weekly", "monthly").<br/>    repeatInterval: number,        // The interval between repetitions (e.g., every 2 days).<br/>    repeatOn?: number | number[] | date,  // (optional) Specific days or dates when the event repeats (e.g., day of week).<br/>    repeatEnd?: number | date,     // (optional) End of the recurrence - number of occurrences or a specific date.<br/>    exceptions?: [                 // (optional) List of exceptions/dates when the event does not occur or details of modified occurrences.<br/>      {<br/>        date: date,                // The exception date (date when event does not occur or is modified).<br/>        dateStart?: date,          // (optional) Modified start date/time for the exception occurrence.<br/>        dateEnd?: date,            // (optional) Modified end date/time for the exception occurrence.<br/>        hidden?: boolean,          // (optional) If true, hides this occurrence.<br/>        backgroundColor?: string,  // (optional) Background color override for this occurrence.<br/>        status?: string,           // (optional) Custom status for this occurrence.<br/>        label?: string,            // (optional) Custom label/title for this occurrence.<br/>        description?: string,      // (optional) Custom description for this occurrence.<br/>        notifications?: [          // (optional) Notification settings specifically for this occurrence.<br/>          {<br/>            interval: number,<br/>            type?: string,<br/>            time: number[]<br/>          }<br/>        ],<br/>        disableDrag?: boolean,     // (optional) Prevents this occurrence from being dragged in the UI.<br/>        disableResize?: boolean    // (optional) Prevents this occurrence from being resized in the UI.<br/>      }<br/>    ]<br/>  },<br/><br/>  status?: string                  // (optional) The current status of the event (e.g., "confirmed", "tentative", "cancelled").<br/>}<br/></pre><br/><br/>When updating the event object, all or some of these properties can be included based on which attributes need to be modified. This flexible structure allows for basic one-time events, as well as complex recurring events with customized properties and exceptions.
   * @param {any} index. A number that represents the index of an event or a Scheduler event object.
   * @param {any} eventObj. An object describing a Scheduler event. The properties of this object will be applied to the desired event.
   */
  updateEvent(index: any, eventObj: any): void;
  /**
   * Deletes a specified event from the system, permanently removing its associated data and making it no longer accessible or visible to users.
   * @param {any} index. A number that represents the index of an event or the actual event object to be removed.
   */
  removeEvent(index: any): void;
  /**
   * Returns an array containing all exception instances associated with the specified recurring event. Each exception represents a single occurrence within the event series that differs from the original recurrence pattern, such as modified dates, details, or cancellations.
   * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
   * @returns {any}
   */
  getEventExceptions(eventObj: any): any;
  /**
   * Adds an exception to a recurring event, allowing you to modify or override specific occurrences in a repeating event series. Event exceptions are useful for handling changes such as rescheduling a single meeting in a weekly series, skipping a date, or altering event details for one instance without affecting the entire series.<br/><br/>You can retrieve the individual occurrences of a recurring event using the following methods:<br/><br/><ul><br/>  <li><strong>occurrences</strong>: Returns an array of all occurrences for a recurring event.</li><br/>  <li><strong>occurrencesBetween(startDate, endDate)</strong>: Returns all occurrences that fall within the specified date range.</li><br/>  <li><strong>occurrenceAfter(date)</strong>: Returns the first occurrence after the given date.</li><br/>  <li><strong>occurrenceBefore(date)</strong>: Returns the last occurrence before the given date.</li><br/></ul><br/><br/>To add an exception, call <code>addEventException</code> with the event object and a configuration object specifying the desired changes for a particular occurrence (such as a new date or label):<br/><br/><p><strong>Example usage:</strong></p><br/><br/><pre><br/>scheduler.addEventException(eventObj, {<br/>  date: occurrenceDate,              // Date of the occurrence to override<br/>  dateStart: newDateStart,           // New start date/time for this exception<br/>  dateEnd: newDateEnd,               // New end date/time for this exception<br/>  label: 'Exception'                 // (Optional) Label or description for this exception<br/>});<br/></pre><br/><br/>This will create a customized exception for the specified recurrence, ensuring only the selected occurrence is modified while all other instances remain unaffected.
   * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
   * @param {any} exceptionObj. An event object that describes an exception. Exception event objects must have a <b>date</b> attribute of type Date which indicates the date of occurence.
   */
  addEventException(eventObj: any, exceptionObj: any): void;
  /**
   * Updates a single exception occurrence within a recurring event series.<br/><br/>To retrieve the specific exception occurrences of a repeating event, you can use these methods:<br/><br/><ul><br/>  <li><b>occurrences</b>: Returns all instances of the recurring event, including exceptions.</li><br/>  <li><b>occurrencesBetween</b>: Retrieves event occurrences that fall within a specified date range.</li><br/>  <li><b>occurrenceAfter</b>: Finds the next occurrence after a given date.</li><br/>  <li><b>occurrenceBefore</b>: Finds the previous occurrence before a given date.</li><br/></ul><br/><br/><p>Use the <code>updateEventException</code> method to modify the details of a particular occurrence (exception) in a recurring event series. Supply:</p><br/><ul><br/>  <li><b>eventObj</b> - The original recurring event object.</li><br/>  <li><b>dateOfOccurrence</b> - The date/time identifying the specific occurrence to update.</li><br/>  <li><b>changes</b> - An object specifying the updates for this exception (such as new start/end times, label, etc.).</li><br/></ul><br/><br/><p><b>Example usage:</b></p><br/><br/><pre><br/>scheduler.updateEventException(<br/>  eventObj, <br/>  dateOfOccurrence, <br/>  { dateStart: newDateStart, dateEnd: newDateEnd, label: 'Updated Exception' }<br/>);<br/></pre><br/><br/><p>This call will update only the specified exception occurrence, leaving the rest of the recurring series unchanged.</p><br/><br/>
   * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
   * @param {any} exceptionRef. The index, id, an occurence date of the exception or an object reference of an existing Scheduler repeating event exception.
   * @param {any} exceptionObj. An event object that describes an exception. All attributes of an exception can be updated except the occurance date (the <b>date</b> attribute).
   */
  updateEventException(eventObj: any, exceptionRef: any, exceptionObj: any): void;
  /**
   * Removes a specified exception instance from a recurring event series, thereby restoring the affected occurrence to match the original recurring pattern.
   * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
   * @param {any} index. The index, id, occurance date or an object reference of an event exception that belongs to the target repeating event.
   */
  removeEventException(eventObj: any, index: any): void;
  /**
   * Opens a popup window that allows users to view and edit the details of a selected event. This enables modification of event information such as title, date, time, location, and other relevant attributes.
   * @param {any} index. A number that represents the index of a event or the actual event object to be edited.
   */
  openWindow(index: any): void;
  /**
   * Closes the currently open popup window, removing it from view and returning focus to the main application interface.
   */
  closeWindow(): void;
  /**
   * Prepares the Scheduler component for printing by formatting its layout and content for optimal print output, then triggers the browser’s Print Preview dialog for the user to review and print the schedule.
   */
  print(): void;
  /**
   * Scrolls the Scheduler component to display the specified date. This method ensures that the view is brought to the appropriate date slot, making it visible to the user. If the date is not currently in view, the Scheduler will automatically scroll horizontally or vertically as needed to reveal the target date.
   * @param {Date} date. The date to scroll to.
   * @param {boolean} strictScroll?. Determines whether to scroll strictly to the date or not. This mean sthat the Scheduler wll scroll to the begining of the cell that corresponds to the target date.
   * @param {boolean} autoScroll?. Calculates the scroll positions and element bounds, then adds an offset to scroll within the middle of the view.
   */
  scrollToDate(date: Date, strictScroll?: boolean, autoScroll?: boolean): void;
  /**
   * Transitions the Scheduler interface to display and focus on a specific date selected by the user.
   * @param {Date} date. The date to navigate to.
   */
  navigateToDate(date: Date): void;
  /**
   * Smoothly scrolls the Scheduler component to bring the specified event into view, ensuring it is visible to the user in the current viewport.
   * @param {any} index. The index of a Scheduler event or the actual event object to scroll to.
   */
  scrollToEvent(index: any): void;
  /**
   * Displays a custom notification to the user, allowing you to specify the message content, style, and behavior. This function enables dynamic alerts or updates within the application’s user interface.
   * @param {string} message. The notification message.
   * @param {any} toastSettings. Smart.Toast settings to be applied to the Toast element when opening the notification.
   */
  openNotification(message: string, toastSettings: any): void;
  /**
   * Dismisses and removes all currently active notifications from view, ensuring that no notification messages remain visible to the user.
   */
  closeNotifications(): void;
  /**
   * Returns a list of all instances where the specified event occurs within the data set. Each occurrence is represented as an individual object or record, providing detailed information about that specific event instance. This enables comprehensive tracking and analysis of every time the event takes place.
   * @param {any} eventObj. A Scheduler evnet object.
   * @param {number} count. The number of occurances to return. By default 100 date occurances of the event are returned.
   */
  occurrences(eventObj: any, count: number): void;
  /**
   * Returns a list of all occurrences of a specified event that take place within the given start and end date range, inclusive. Each occurrence includes detailed event information and falls between the provided dates.
   * @param {any} eventObj. A Scheduler event object.
   * @param {Date} dateFrom. The start date.
   * @param {Date} dateTo. The end date.
   */
  occurrencesBetween(eventObj: any, dateFrom: Date, dateTo: Date): void;
  /**
   * Returns the first occurrence of an event that takes place after the specified date. This function searches through the list of events and retrieves the earliest event whose date is strictly later than the provided reference date. If no such event exists, it returns null or an appropriate default value.
   * @param {any} eventObj. A Scheduler event object.
   * @param {number} date. The date after which the first occurance of the event will be returned.
   */
  occurrenceAfter(eventObj: any, date: number): void;
  /**
   * Returns the most recent occurrence of the specified event that occurred before the given date.
   * @param {any} eventObj. A Scheduler event object.
   * @param {number} date. The date before which the first occurance of the event will be returned.
   */
  occurrenceBefore(eventObj: any, date: number): void;
  /**
   * Returns the start and end dates (dateStart/dateEnd) for a specific timeline cell, representing the time interval covered by that cell on the timeline.
   * @param {HTMLElement} cell. A Scheduler timeline cell element.
   * @returns {any}
   */
  getCellDateRange(cell: HTMLElement): any;
  /**
   * Displays the tooltip (event menu) associated with a specific event, providing additional information and context about the selected event when triggered.
   * @param {any} eventObj. A Scheduler event object or it's index.
   */
  openEventTooltip(eventObj: any): void;
  /**
   * Closes and hides the event tooltip (also known as the event menu), removing it from view and preventing further interactions until it is reopened.
   */
  closeEventTooltip(): void;
  /**
   * Determines if the specified date is restricted. Returns true if the date falls within the set of restricted dates; otherwise, returns false.
   * @param {Date} date. A Date object.
   * @returns {boolean}
   */
  isDateRestricted(date: Date): boolean;
  /**
   * Determines whether the specified hour is restricted. Returns true if the hour falls within a restricted period; otherwise, returns false.
   * @param {number | Date} hour. A number that represents an hour ( 0 to 23 ) or a Date object.
   * @returns {boolean}
   */
  isHourRestricted(hour: number | Date): boolean;
  /**
   * Determines if the event is restricted by returning a boolean value: true if the event has access restrictions, or false if it is open to all users.
   * @param {any} eventObj. A Scheduler event  object or a direct event HTMLElement instance.
   * @returns {boolean}
   */
  isEventRestricted(eventObj: any): boolean;
  /**
   * Removes all existing entries from the undo and redo history, clearing any previous actions and preventing the user from undoing or redoing changes made prior to this operation.
   * @returns {boolean}
   */
  deleteUndoRedoHistory(): boolean;
  /**
   * Specifies whether the action can be redone, indicating if there is a subsequent step available in the redo history that allows the user to reverse a previous undo operation.
   * @returns {boolean}
   */
  canRedo(): boolean;
  /**
   * Specifies whether the most recent action can be undone by the user. If set to true, the user has the option to revert or reverse the previous action; if false, the action cannot be undone.
   * @returns {boolean}
   */
  canUndo(): boolean;
  /**
   * Revert the changes made to the upcoming event modification, restoring the event to its previous state.
   * @param {number} step?. A step to redo to.
   * @returns {boolean}
   */
  redo(step?: number): boolean;
  /**
   * Revert the most recent changes made to the event, restoring it to its previous state.
   * @param {number} step?. A step to undo to.
   * @returns {boolean}
   */
  undo(step?: number): boolean;
  /**
   * Sets the locale of a component.
   * @param {string} locale. The locale abbreviation. For example: 'de'.
   * @param {any} messages?. Object containing the locale messages.
   */
  setLocale(locale: string, messages?: any): void;
}

/**Configures the data export settings for the Scheduler, including file format, export range, and additional export-related options. */
export interface SchedulerDataExport {
  /**
   * Determines whether the column headers will be included when exporting data. If enabled, the exported file will contain a row with the names of each column at the top.
   * Default value: true
   */
  header?: boolean;
  /**
   * Specifies the names of the event properties that will be included as separate columns in the exported data, allowing each property's value to appear in its own column within the resulting file.
   * Default value: 
   */
  columns?: string[];
  /**
   * Specifies a custom style object to apply to the dataExport, allowing you to define the appearance—such as fonts, colors, and formatting—of the exported data.
   * Default value: null
   */
  style?: any;
  /**
   * Specifies the name that will be assigned to the exported file when it is downloaded or saved.
   * Default value: "jqxScheduler"
   */
  fileName?: string;
  /**
   * Specifies the orientation (portrait or landscape) of the page layout when exporting the document to PDF format. This setting determines how the content is arranged on each PDF page.
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
  repeatFreq?: SchedulerRepeatFreq | string;
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
  type?: SchedulerNotificationType | string;
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
  sortOrder?: SchedulerResourceSortOrder | string;
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

/**Determines the rendering style for events displayed within the Scheduler component.<br/><br/><br/>  <br/>    <b>classic</b> &ndash; Events are visually arranged side-by-side within each cell, with their sizes adjusted to ensure they fit entirely within the cell boundaries. If multiple events overlap in the same time slot, they are compressed horizontally to avoid overflow and remain fully visible within the cell.<br/>  
<br/>  <br/>    <b>modern</b> &ndash; Events adhere to their specified CSS size properties, such as height and width, rather than automatically resizing to fit the cell. If there are more events than can visibly fit within a cell, an "event collector" (typically a counter or indicator) is displayed that, when clicked, reveals the hidden events in a popup or modal. On mobile devices, due to limited screen space, only event collectors are shown within each cell, requiring the user to tap to view the full list of events.<br/>  
<br/> */
export declare type SchedulerEventRenderMode = 'classic' | 'modern';
/**Determines the repeating frequency. The event can repeat hourly, daily, weekly, monthly or yearly. */
export declare type SchedulerRepeatFreq = 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
/**The type of the interval for the notification. */
export declare type SchedulerNotificationType = 'days' | 'weeks';
/**Specifies the display format for the day component of dates shown in the timeline. This setting controls how days are rendered, such as numeric (e.g., "12"), abbreviated (e.g., "Mon"), or full weekday names (e.g., "Monday"), to match the desired presentation style in the timeline. */
export declare type SchedulerDayFormat = '2-digit' | 'numeric' | 'long' | 'short' | 'narrow';
/**Specifies the method used to filter or process data, such as applying different algorithms or rules to control how information is displayed, sorted, or selected. The chosen filter mode affects how results are generated and presented. */
export declare type FilterMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Specifies the direction or axis along which items are grouped, such as horizontal or vertical, affecting how elements are arranged and displayed within the interface. */
export declare type SchedulerGroupOrientation = 'horizontal' | 'vertical';
/**Specifies how hours are displayed within the element, including aspects such as 12-hour or 24-hour format, inclusion of leading zeros, and any relevant separators or annotations (e.g., AM/PM). */
export declare type SchedulerHourFormat = '2-digit' | 'numeric';
/**Specifies the placement of the Date selector within the Header section of the component, allowing you to control where the Date selector appears relative to other header elements. */
export declare type SchedulerHeaderDatePosition = 'far' | 'near';
/**Defines and customizes the appearance and layout of the header navigation controls, including their colors, fonts, spacing, and interactive states. This setting allows you to adjust how navigation elements are presented in the header section of the application or website. */
export declare type SchedulerHeaderNavigationStyle = 'flat' | 'raised';
/**Specifies the exact location of the view selector control within the header section of the element, allowing you to control where the selector appears in relation to other header components. */
export declare type SchedulerHeaderViewPosition = 'far' | 'near';
/**Specifies where the legend is displayed within the Scheduler component. By default, the legend appears in the footer section, but it can be configured to display in the header instead. This setting allows you to customize the placement of the legend to better fit your application's layout and user experience requirements. */
export declare type SchedulerLegendLocation = 'footer' | 'header';
/**Specifies the placement of the legend within the chart area. By default, the legend appears on the 'near' side (typically aligned to the left or top, depending on chart orientation). Setting this property to 'far' positions the legend on the opposite side (right or bottom), allowing customization of the legend's location to better suit your layout needs. */
export declare type SchedulerLegendPosition = 'near' | 'far';
/**Specifies how the legend items are arranged within the chart, such as organizing them in a horizontal row, vertical column, or a customized layout. This property controls the visual structure and ordering of items displayed in the legend. */
export declare type SchedulerLegendLayout = null | 'auto' | 'menu';
/**Specifies whether the horizontal scrollbar is visible. If set to true, a horizontal scrollbar will appear when the content overflows the container’s width; if false, the scrollbar will be hidden regardless of overflow. */
export declare type HorizontalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Specifies how minutes are displayed and formatted within the Scheduler component. This setting controls the appearance of minute values in time slots, event times, and related areas, ensuring consistency in how minutes are presented to users (e.g., "5", "05", or "5 min"). */
export declare type MinuteFormat = '2-digit' | 'numeric';
/**Specifies the format in which month names are displayed within the Scheduler component. This setting controls whether full month names (e.g., "January"), abbreviated names (e.g., "Jan"), or custom formats appear in the Scheduler's interface wherever month names are shown. */
export declare type MonthFormat = '2-digit' | 'numeric' | 'long' | 'short' | 'narrow';
/**Controls whether the resize handles are visible to the user, allowing them to resize the element. When enabled, resize handles will appear on the edges or corners of the element; when disabled, resize handles will be hidden and resizing will not be possible via the user interface. */
export declare type ResizeHandlesVisibility = 'auto' | 'hidden' | 'visible';
/**Determines the sorting order. When set to <b>custom</b>, a custom sorting function has to be defined for the <b>sortFunction</b> property. The <b>asc</b> stands for 'ascending' while <b>desc</b> means 'descending' sorting order. */
export declare type SchedulerResourceSortOrder = 'asc' | 'desc' | 'custom';
/**Specifies the placement of the date navigation buttons within the element’s header, determining where buttons such as “Previous”, “Next”, or “Today” appear in relation to other header content. */
export declare type SchedulerScrollButtonsPosition = 'both' | 'far' | 'near';
/**Specifies how the resource data items should be sorted. Acceptable values are <b>asc</b> for ascending order and <b>desc</b> for descending order. If set to <b>custom</b>, you must also provide a custom sorting function using the <b>sortFunction</b> property. The chosen sorting order determines how the data items are organized and displayed. */
export declare type SchedulerSortOrder = 'asc' | 'desc' | 'custom';
/**Specifies the time interval (such as days, weeks, or months) used to label and organize each cell within the timeline, controlling how dates are displayed and grouped. */
export declare type SchedulerTimelineDayScale = 'hour' | 'halfHour' | 'quarterHour' | 'tenMinutes' | 'fiveMinutes';
/**Specifies the time zone to be applied to the element. If this property is not set, the element defaults to using the user's local time zone. */
export declare type SchedulerTimeZone = 'Local' | 'Dateline Standard Time' | 'UTC-11' | 'Hawaiteratoran Standard Time' | 'Alaskan Standard Time' | 'Pacific Standard Time (Mexico)' | 'Pacific Standard Time' | 'US Mountain Standard Time' | 'Mountain Standard Time (Mexico)' | 'Mountain Standard Time' | 'Central Standard Time' | 'Central America Standard Time' | 'Canada Central Standard Time' | 'Central Standard Time (Mexico)' | 'SA Pacific Standard Time' | 'Eastern Standard Time' | 'US Eastern Standard Time' | 'Venezuela Standard Time' | 'Atlantic Standard Time' | 'Paraguay Standard Time' | 'Central Brazilian Standard Time' | 'Pacific SA Standard Time' | 'SA Western Standard Time' | 'Newfoundland Standard Time' | 'SA Eastern Standard Time' | 'Argentina Standard Time' | 'E. South America Standard Time' | 'Bahia Standard Time' | 'Montevideo Standard Time' | 'Greenland Standard Time' | 'UTC-02' | 'Mid-Atlantic Standard Time' | 'Azores Standard Time' | 'Cape Verde Standard Time' | 'Morocco Standard Time' | 'UTC' | 'GMT Standard Time' | 'Greenwich Standard Time' | 'Central European Standard Time' | 'Namibia Standard Time' | 'W. Central Africa Standard Time' | 'W. Europe Standard Time' | 'Central Europe Standard Time' | 'Romance Standard Time' | 'FLE Standard Time' | 'South Africa Standard Time' | 'Turkey Standard Time' | 'GTB Standard Time' | 'Libya Standard Time' | 'E. Europe Standard Time' | 'Jordan Standard Time' | 'Middle East Standard Time' | 'Egypt Standard Time' | 'Syria Standard Time' | 'Israel Standard Time' | 'Arab Standard Time' | 'E. Africa Standard Time' | 'Arabic Standard Time' | 'Kaliningrad Standard Time' | 'Iran Standard Time' | 'Mauritius Standard Time' | 'Georgian Standard Time' | 'Caucasus Standard Time' | 'Arabian Standard Time' | 'Azerbaijan Standard Time' | 'Russian Standard Time' | 'Afghanistan Standard Time' | 'Pakistan Standard Time' | 'West Asia Standard Time' | 'India Standard Time' | 'Sri Lanka Standard Time' | 'Nepal Standard Time' | 'Central Asia Standard Time' | 'Bangladesh Standard Time' | 'Ekaterinburg Standard Time' | 'Myanmar Standard Time' | 'SE Asia Standard Time' | 'N. Central Asia Standard Time' | 'Ulaanbaatar Standard Time' | 'China Standard Time' | 'Singapore Standard Time' | 'North Asia Standard Time' | 'Taipei Standard Time' | 'W. Australia Standard Time' | 'Korea Standard Time' | 'North Asia East Standard Time' | 'Tokyo Standard Time' | 'AUS Central Standard Time' | 'Cen. Australia Standard Time' | 'West Pacific Standard Time' | 'Tasmania Standard Time' | 'E. Australia Standard Time' | 'AUS Eastern Standard Time' | 'Yakutsk Standard Time' | 'Vladivostok Standard Time' | 'Central Pacific Standard Time' | 'Magadan Standard Time' | 'Kamchatka Standard Time' | 'Fiji Standard Time' | 'New Zealand Standard Time' | 'UTC+12' | 'Tonga Standard Time' | 'Samoa Standard Time';
/**Specifies whether the vertical scrollbar is visible, allowing users to scroll content vertically when necessary. Set to true to display the vertical scrollbar, or false to hide it. */
export declare type VerticalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Specifies the current view type of the Scheduler component (e.g., 'day', 'week', 'month'). When defining custom views, ensure that each view includes a valid <b>type</b> property matching one of the supported view types. Note: This property is managed internally by the Scheduler and should not be set manually in your configuration. */
export declare type SchedulerViewType = 'day' | 'week' | 'month' | 'agenda' | 'timelineDay' | 'timelineWeek' | 'timelineMonth';

export declare type SchedulerViews = SchedulerViewType[] | object[] | string[];
/**Specifies the type of view selector that appears in the element's header, which controls how content is displayed (e.g., as a list, grid, or table view). This setting determines the layout options available to the user within the header section of the component. */
export declare type SchedulerViewSelectorType = 'auto' | 'tabs' | 'menu';
/**Configures the rule used to determine the start date in Week and TimelineWeek views. By default, these views start from the current date, factoring in the value specified by the 'firstDayOfWeek' property. If the 'startDateRule' property is set to 'dateCurrent', the Week and TimelineWeek views will instead start from the date provided in the 'dateCurrent' property, overriding the default behavior. */
export declare type SchedulerViewStartDay = 'firstDayOfWeek' | 'dateCurrent';
/**Specifies how the names of the weekdays are displayed within the element (e.g., full names, short names, or initials). */
export declare type WeekDayFormat = 'short' | 'long' | 'narrow';
/**Specifies the date format used to display years within the timeline header. This setting controls how year values are rendered (e.g., "YYYY", "YY", or "yyyy") when the header represents years, ensuring consistent and readable date presentation. */
export declare type YearFormat = '2-digit' | 'numeric';

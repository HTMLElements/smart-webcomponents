import  {BaseElement, Animation} from "./smart.element"

export interface GanttChartProperties {
  /**
   * Specifies whether nonworkingDays and nonworkingHours should be considered when calculating the dateEnd of tasks. When enabled, dateEnd is determined based only on actual working time, excluding periods defined as nonworking. If disabled (the default behavior), dateEnd is calculated using continuous calendar time, without regard for nonworking periods.
   * Default value: false
   */
  adjustToNonworkingTime?: boolean;
  /**
   * Automatically recalculates and updates the scheduling of tasks based on their defined connections and dependencies. When tasks are linked (for example, via finish-to-start or start-to-start relationships), this process adjusts their start and end dates to maintain the intended order and constraints. If a task has no connections to other tasks, autoScheduling will not alter its dates until a new connection is established. The type of connection between tasks dictates how their possible start and end dates are constrained relative to each other.
   * Default value: false
   */
  autoSchedule?: boolean;
  /**
   * This setting only impacts tasks when autoSchedule is enabled. When set to true, tasks are automatically and strictly scheduled based on their defined dependencies (connections), and users will not be able to manually drag tasks to reschedule them.Additionally, users can specify a lag value for individual task connections. The lag attribute represents the delay or overlap (specified in milliseconds) between the start or end times of two connected tasks. By configuring the lag property within each task connection in the dataSource, you can control the timing interval between dependent tasks.
   * Default value: false
   */
  autoScheduleStrictMode?: boolean;
  /**
   * Specifies the speed at which the content scrolls when dragging an item and the autoScroll property is enabled. Increasing this value results in faster scrolling while dragging near the container's edge.
   * Default value: 5
   */
  autoScrollStep?: number;
  /**
   * Controls whether the column header menu is enabled or disabled. When enabled, hovering over a column header displays a dropdown button that opens a menu with quick actions such as sorting, filtering, and other column-specific operations. The available actions in this menu are context-sensitive and depend on which Gantt features are enabled; for example, the filtering option will be shown only if filtering is enabled for the corresponding column.
   * Default value: false
   */
  columnMenu?: boolean;
  /**
   * Specifies whether the Table columns can be resized by the user. When enabled, users can adjust the width of each column directly from the table’s header cells in both the Task and Resource timelines. This allows for greater flexibility in customizing the Table’s appearance to better fit the displayed data.
   * Default value: false
   */
  columnResize?: boolean;
  /**
   * Controls whether visual resize feedback is displayed while adjusting column width. This property is effective only when the columnResize feature is enabled. If set to true, users will see a preview of the new column size as they drag to resize; if set to false, no visual feedback will be shown during the resizing action.
   * Default value: false
   */
  columnResizeFeedback?: boolean;
  /**
   * Enables or disables the visualization of the project’s Critical Path. When set to true, the Gantt chart highlights tasks that directly affect the project's total duration. The Critical Path represents the sequence of dependent tasks that cannot be delayed without delaying the overall project completion.
   * Default value: false
   */
  criticalPath?: boolean;
  /**
   * Represents the current time indicator on the Gantt chart. By default, this value is set to today’s date, highlighting the present day on the timeline.
   * Default value: 
   */
  currentTime?: string | Date;
  /**
   * Controls the visibility of the current time indicator within the scheduling view. When enabled, a highlighted marker or line is displayed across the relevant time slots or cells to indicate the current system time, helping users easily identify the present moment within the schedule or calendar interface. Disabling this option hides the indicator from view.
   * Default value: false
   */
  currentTimeIndicator?: boolean;
  /**
   * Specifies how often, in seconds, the currentTimeIndicator is refreshed or updated. A lower value results in more frequent updates, while a higher value reduces the update rate, potentially improving performance.
   * Default value: 1
   */
  currentTimeIndicatorInterval?: number;
  /**
   * Configures the data export settings for the GanttChart, allowing customization of how chart data is exported (e.g., format, included fields, file name, and export behavior).
   * Default value: [object Object]
   */
  dataExport?: GanttChartDataExport;
  /**
   * Determines the set of tasks to be displayed within the Timeline. The value must be an array of objects, where each object represents a single task and includes both required and optional properties that define its behavior and appearance. Required Task Properties:      label – A string value representing the name or description of the task.        dateStart – The task’s start date as a string in a valid date format (e.g., 'YYYY-MM-DD').        dateEnd – The task’s end date as a string in a valid date format.        type – Specifies the type of the task. Accepts one of: task (standard activity), project (parent grouping of subtasks), or milestone (key event). Each type may have type-specific behaviors and allowed attributes.  Optional Task Properties:      connections – An array of objects defining dependencies between tasks. Each connection object requires:                  target – An integer specifying the zero-based index of the target task in the main tasks array.                    type – An integer (0–3) indicating the type of dependency:                  0 – Start-to-Start          1 – End-to-Start          2 – End-to-End          3 – Start-to-End                            lag – A number denoting delay (positive) or overlap (negative) between auto-scheduled tasks, in applicable time units. Used in conjunction with autoSchedule.                  duration – Describes how long the task lasts (e.g., "3d", "4h", "15m"). Useful when dateEnd is unknown or not specified. Duration always represents total calendar time.        minDuration / maxDuration – Set minimum or maximum allowed duration for the task.        minDateStart / maxDateStart – Define earliest/latest allowed start dates, as strings in valid date formats.        minDateEnd / maxDateEnd – Define earliest/latest allowed end dates, as strings in valid date formats.        progress – A number from 0 to 100 indicating the percentage of work completed.        overdue – A boolean that is true if the task’s dateEnd has passed its deadline.        disableDrag – Boolean. If true, users cannot drag (move) the task on the timeline.        disableResize – Boolean. If true, users cannot resize the duration of the task on the timeline.        dragProject – Boolean. If true, allows the entire project (including all subtasks) to be dragged when the project parent task is dragged. Applicable only to project tasks.        segments – An array of objects allowing a task to be split into multiple segments with different properties (such as distinct start dates, labels, or durations).        synchronized – Boolean. If true, a project’s start and end dates are calculated automatically based on its child tasks, and cannot be moved independently. Applicable only to project tasks.        expanded – Boolean. Determines if a project’s subtasks are visible (expanded). If false, only the project summary bar is displayed. By default, projects are collapsed. Applicable only to project tasks.  The GanttChart component can also accept a DataAdapter instance as its data source for flexible data integration. For more details, see the DataAdapter documentation: https://www.htmlelements.com/docs/data-adapter/.
   * Default value: 
   */
  dataSource?: any;
  /**
   * Specifies the display format for dates in the timeline header when the timeline is showing individual days. This setting controls how each day's date is presented (e.g., "MM/DD/YYYY", "Monday, Jan 1", etc.), ensuring that day labels in the header are clear and consistent with your application's requirements.
   * Default value: short
   */
  dayFormat?: GanttDayFormat | string;
  /**
   * Specifies a custom end date for the Timeline. This is useful when the user wants to define a specific end point for the Timeline, overriding the automatic calculation based on task completion dates. If no end date is provided, the Timeline will automatically use the latest end date from the existing tasks.
   * Default value: 
   */
  dateEnd?: string | Date;
  /**
   * Specifies a custom starting date for the Timeline. This option is useful when you want the Timeline to begin on a specific date, rather than relying on the earliest start date of the tasks. If a starting date is not provided, the Timeline will automatically use the start date from the first scheduled task.
   * Default value: 
   */
  dateStart?: string | Date;
  /**
   * Specifies the date markers to be shown within the timeline of the GanttChart component. Date markers highlight and optionally label particular dates and times directly on the Gantt chart, providing visual cues or annotations for significant milestones, deadlines, or events within the project's schedule.
   * Default value: null
   */
  dateMarkers?: GanttChartDateMarker[];
  /**
   * Specifies whether the element is interactive and can be used by the user. When enabled, the element responds to user input; when disabled, the element appears inactive and does not accept user interactions.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Prevents the timeline from automatically scrolling when a task bar is being dragged or resized. This means the viewport will remain stationary during these actions, requiring the user to manually scroll if they wish to view other parts of the timeline.
   * Default value: false
   */
  disableAutoScroll?: boolean;
  /**
   * Prevents users from clicking and dragging tasks to reschedule or move them within the Timeline view. Tasks remain fixed in their current positions and cannot be repositioned through drag-and-drop actions.
   * Default value: false
   */
  disableTaskDrag?: boolean;
  /**
   * Prevents users from modifying or updating task progress values within the Timeline view. Task progress indicators will be displayed as read-only and cannot be adjusted through the Timeline interface.
   * Default value: false
   */
  disableTaskProgressChange?: boolean;
  /**
   * Prevents users from adjusting the start or end dates of tasks directly within the Timeline by disabling the resize handles on tasks.
   * Default value: false
   */
  disableTaskResize?: boolean;
  /**
   * Prevents users from selecting tasks, milestones, or any other elements within the GanttChart, effectively disabling all selection interactions and highlighting within the chart area.
   * Default value: false
   */
  disableSelection?: boolean;
  /**
   * Prevents users from dragging and repositioning individual task segments within the interface. When this option is enabled, task segments remain fixed in place and cannot be moved through drag-and-drop actions.
   * Default value: false
   */
  disableSegmentDrag?: boolean;
  /**
   * Prevents users from changing the size of the task segment. When this option is enabled, the task segment cannot be resized or adjusted, ensuring its dimensions remain fixed.
   * Default value: false
   */
  disableSegmentResize?: boolean;
  /**
   * Prevents the window editor from opening or being used within the GanttChart component, thereby disabling any ability for users to add, edit, or configure tasks through the graphical window interface. This setting ensures that all task modifications must be handled through alternative methods, such as programmatic updates or external forms.
   * Default value: false
   */
  disableWindowEditor?: boolean;
  /**
   * Specifies the unit of measurement (such as seconds, minutes, hours, or days) used for the task's duration property. This defines how the duration value should be interpreted and ensures consistent handling of time-related data across the application.
   * Default value: milisecond
   */
  durationUnit?: Duration | string;
  /**
   * Specifies whether a dedicated filter row should be displayed within the table for filtering purposes, replacing the default inline filter input. When enabled, each column in the table will provide its own filter input within a separate filter row. This property is only applicable if the filtering option is enabled; otherwise, it will have no effect.
   * Default value: false
   */
  filterRow?: boolean;
  /**
   * Specifies which day of the week the calendar view should start on. The value is a number from 0 to 6, where 0 represents Sunday, 1 represents Monday, and 6 represents Saturday. The default value is 0 (Sunday). Adjusting this setting allows you to control the first day displayed in the weekly or monthly calendar view.
   * Default value: -1
   */
  firstDayOfWeek?: number;
  /**
   * Organizes tasks within the Task timeline by grouping them based on their assigned resources. Each resource receives its own group containing all tasks allocated to it. Tasks that have not been assigned to any resource are automatically placed in a separate group labeled "Unassigned" for easy identification.
   * Default value: false
   */
  groupByResources?: boolean;
  /**
   * Enables you to define custom header content for the Task Panel. The attribute accepts either an HTMLTemplate element, the id of an existing HTMLTemplate, or a function that returns the desired content. This provides flexibility to use static templates or generate dynamic header content programmatically.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * Specifies whether the dateMarkers are displayed on the interface. When set to true, the date markers will be visible; when set to false, they will be hidden.
   * Default value: false
   */
  hideDateMarkers?: boolean;
  /**
   * By default, the Timeline component displays a three-level header structure: the top section shows primary timeline details, the middle section displays secondary details, and the bottom section contains the main timeline header. This property allows you to hide the header container, which refers specifically to the bottom section of the header.
   * Default value: false
   */
  hideTimelineHeader?: boolean;
  /**
   * By default, the Timeline component displays a three-level header structure: the main timeline details (topmost header), secondary timeline details (middle header), and the primary timeline header (bottom header). This property allows you to hide the topmost container, which holds the main timeline details, effectively removing the first (outermost) header section from the Timeline display.
   * Default value: false
   */
  hideTimelineHeaderDetails?: boolean;
  /**
   * By default, the Timeline component displays a three-level header structure: the main timeline header, a secondary header with additional details, and a primary details section. This property specifically controls the visibility of the second (middle) header, which contains supplementary timeline details. When enabled, the secondary details container will be hidden, resulting in a simplified two-level header layout.
   * Default value: true
   */
  hideTimelineSecondHeaderDetails?: boolean;
  /**
   * Controls the visibility of the Resource panel in the GanttChart component. By default, the Resource panel is displayed automatically when resources are added to the GanttChart. Enabling this property will permanently hide the Resource panel, regardless of whether resources are present or not. This allows developers to prevent the Resource panel from appearing under any circumstances.
   * Default value: false
   */
  hideResourcePanel?: boolean;
  /**
   * Specifies whether the horizontal scrollbar is visible, allowing users to scroll content horizontally when it exceeds the container’s width.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility | string;
  /**
   * Specifies the display format for dates shown as hours within the timeline header, controlling how hour values (e.g., "14:00", "2 PM", "14h") are presented to users. This setting ensures that the hour labels in the timeline header are formatted consistently according to your application's requirements.
   * Default value: numeric
   */
  hourFormat?: HourFormat | string;
  /**
   * When this option is enabled, reaching the end of the horizontal timeline through scrolling will dynamically generate additional timeline cells, effectively extending the visible time range. The exact number of new cells added each time the scrollbar reaches the end is specified by the infiniteTimelineStep setting. This allows for an "infinite scrolling" experience, where more timeline segments are loaded as the user scrolls horizontally.
   * Default value: false
   */
  infiniteTimeline?: boolean;
  /**
   * Specifies how many new cells should be dynamically loaded and added to the Timeline when the user scrolls horizontally to the end, provided that infiniteTimeline is enabled. This controls the batch size of additional timeline cells appended each time the end of the scrollable area is reached.
   * Default value: 5
   */
  infiniteTimelineStep?: number;
  /**
   * When enabled, this setting displays the Timeline component on the left side of the interface and the Task Tree on the right side. By default, the layout is reversed: the Task Tree appears on the left and the Timeline on the right.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * Controls whether users can navigate within the Table using the keyboard. When enabled, keyboard navigation applies to both the Task and Resource Tables, allowing users to move between table items using the keyboard.For the Task Table, the following keyboard shortcuts are available when a task is focused:  Enter – Opens the Window editor, allowing you to edit the currently focused task.  Delete – Opens a confirmation dialog to confirm the deletion of the currently focused task.Enabling this option improves accessibility and streamlines user interactions for both Task and Resource management within the Table.
   * Default value: false
   */
  keyboardNavigation?: boolean;
  /**
   * Sets or retrieves the unlockKey, a unique value required to unlock and access the full features of the product. Use this property to assign an unlock key for activation or to obtain the currently set unlock key.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies the language used for the GanttChart interface, including labels, tooltips, and other user-facing text elements.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Determines the latest allowable date that can be displayed or selected on the Timeline, effectively setting the upper limit for date values within the component.
   * Default value: 2100-1-1
   */
  max?: string | Date;
  /**
   * Specifies the earliest allowable date that can be selected or displayed on the Timeline, effectively setting the lower date limit.
   * Default value: 1900-1-1
   */
  min?: string | Date;
  /**
   * Defines or retrieves an object containing customizable strings used within the widget's interface for localization purposes. This object allows developers to provide translated or adapted text for various UI elements, ensuring the widget can support multiple languages and regions. It is typically used in combination with the locale property to display content in the desired language.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Specifies the date format used for displaying months in the timeline header. This setting defines how month values appear, such as "Jan 2024" or "01/2024", ensuring consistent and customizable presentation of months within the timeline.
   * Default value: short
   */
  monthFormat?: MonthFormat | string;
  /**
   * Specifies the time interval granularity displayed in the Month view, such as whether events are shown by week, day, or custom periods. This setting adjusts how dates and events are grouped and visualized within the Month view of the calendar.
   * Default value: week
   */
  monthScale?: MonthScale | string;
  /**
   * Specifies which days of the week, represented by integers from 0 to 6 (where 0 indicates the first day of the week and 6 indicates the last), are considered nonworking days. These selected nonworking days are visually highlighted with colored cells within the timeline display. By default, nonworking days do not influence the task end dates (dateEnd). However, if the adjustToNonworkingTime property is enabled, task scheduling will automatically adjust to account for nonworking days when calculating end dates.
   * Default value: 
   */
  nonworkingDays?: number[];
  /**
   * Specifies which hours of the day are considered nonworking. The nonworking hours are defined using an array that can contain individual hour numbers (e.g., [1, 2, 3] represents 1 AM, 2 AM, and 3 AM as nonworking hours) and/or nested arrays to indicate continuous ranges (e.g., [[0, 6]] represents all hours from 12:00 AM to 6:00 AM inclusive as nonworking hours).In the timeline view, cells corresponding to nonworking hours are visually distinguished (typically with a different color), helping users easily identify unavailable time slots. By default, these nonworking hours do not influence the calculation of a task’s end date (dateEnd). However, if the adjustToNonworkingTime property is enabled, the scheduler will automatically adjust tasks to skip or extend around nonworking hours.
   * Default value: 
   */
  nonworkingHours?: number[] | number[][];
  /**
   * This function enables complete customization of the task element within your interface. It accepts five arguments, providing granular control over both the task and its visual representation:1. 'task' – The full task object containing all associated data.2. 'segment' – The current segment object for the task. If the task consists of a single segment, this argument will be the same as the task object.3. 'taskElement' – The root HTML element representing the task in the DOM.4. 'segmentElement' – The HTML element representing the current segment of the task.5. 'labelElement' – The HTML element that displays the segment’s label.You can use these arguments to modify the appearance, content, and behavior of the task and its segments, allowing for advanced UI customizations tailored to different application needs.
   * Default value: null
   */
  onTaskRender?: any;
  /**
   * A function that allows you to fully customize the appearance and behavior of each task element. This function receives two parameters:    task: The JavaScript object representing the task's data and properties.  taskElement: The HTML element corresponding to the task, which you can manipulate or modify as needed.Use this function to add custom styles, event listeners, or additional content to each task element based on its data.
   * Default value: null
   */
  taskFormatFunction?: any;
  /**
   * A function that enables full customization of the tooltip's appearance and behavior. This function accepts three arguments:- tooltipObject: The tooltip instance, containing all relevant data and methods for manipulating the tooltip.- event: The event object that triggered the tooltip display, useful for accessing event-specific information (e.g., cursor position).- content: The DOM element representing the tooltip’s label, which can be modified to display custom HTML, styles, or dynamic content.
   * Default value: null
   */
  tooltipFormatFunction?: any;
  /**
   * A function that allows complete customization of the popup window used for task interactions by modifying its properties before it is displayed. The function receives three arguments:      target — The popup window instance that is about to be opened. You can use this parameter to modify visual aspects (such as size, title, buttons, and content) or add custom behavior.        type — Specifies the purpose of the popup window. Possible values are:          'task': For editing or viewing a task.      'confirm': For displaying a confirmation prompt.      'connection': For actions related to connections between tasks (e.g., deleting a link).            item — The data object associated with the popup window. This will be the current task (for 'task' and 'confirm' types) or the specific connection object (for the 'connection' type).  Use this function to dynamically personalize the popup window’s content, appearance, or logic based on the context of the action being performed.
   * Default value: null
   */
  popupWindowCustomizationFunction?: any;
  /**
   * Specifies which tab sections are displayed within the popup window. This property accepts the following three values:      general – Displays the General tab, which shows the main properties of the task as defined by the taskColumns property.        dependency – Displays the Dependency tab, where users can view, add, or remove connections (dependencies) related to the current task.        segments – Displays the Segments tab, where users can view, create, or delete segments that make up the task.  Use these values to control which tabs are visible to users in the popup window interface. Multiple values can be specified to show more than one tab.
   * Default value: ['general', 'dependency', 'segments']
   */
  popupWindowTabs?: string[];
  /**
   * This property accepts a formatting function for the progress label displayed on the Timeline task. The function should return a string representing the desired label text. By default, the progress label is hidden; it can be made visible by setting the showProgressLabel property to true.
   * Default value: null
   */
  progressLabelFormatFunction?: any;
  /**
   * Specifies the date format used to display quarter representations (e.g., "Q1 2024") in the timeline header. This setting controls how quarter periods are labeled, ensuring consistency and clarity in the timeline’s visual presentation.
   * Default value: short
   */
  quarterFormat?: QuarterFormat | string;
  /**
   * Returns an array containing a flat list of all resource objects found within the element, including those nested at any level. This getter traverses the element's hierarchy and aggregates all resources into a single, non-nested array for simplified access.
   * Default value: null
   */
  resources?: GanttChartResource[];
  /**
   * Determines which columns are displayed in the Resource Tree.  Each entry in this property should be an Object containing the following keys:- label: Specifies the column header text as it will appear in the Task Tree.- value: Defines the property or content to be displayed in the cells of that column.By default, a single column displays all resource labels. You can configure additional columns by adding objects with custom label and value pairs.Additional configurable properties for each column object include:  formatFunction: A callback function that allows customization of the cell content for the column. This function receives two arguments: the label text (as a string) and the index of the resource. It should return a string, which will be used as the displayed cell content.  min: Sets the minimum width (in pixels or another supported unit) for the column.  max: Sets the maximum width for the column.  size: Specifies the fixed width for the column.Use this configuration to tailor which resource attributes appear as columns in the Resource Tree and how they are displayed.
   * Default value: { "label": "resourceColumnLabel", "value": "label" }
   */
  resourceColumns?: GanttChartResourceColumn[];
  /**
   * Specifies whether the Resource Table supports filtering functionality, allowing users to narrow down and display specific data based on filter criteria. If set to true, filters can be applied to the Resource Table; if false, filtering options will be disabled.
   * Default value: false
   */
  resourceFiltering?: boolean;
  /**
   * A format function that enables you to customize the display of group row labels when the groupByResources option is enabled. This function allows for dynamic re-formatting of group headers, so you can control how resource names or other grouping information appear in the UI.
   * Default value: null
   */
  resourceGroupFormatFunction?: any;
  /**
   * Enables you to define a custom header for the Resource Panel by specifying the content through one of the following options: an HTMLTemplate element, the ID of an existing template, or a function that returns the desired HTML. This allows for flexible and dynamic header customization to fit your application's needs.
   * Default value: null
   */
  resourcePanelHeaderTemplate?: any;
  /**
   * Specifies the minimum allowable size (in pixels) for the Resource Panel, ensuring that users cannot resize the panel below this value. This setting helps maintain usability and proper display of the panel's content.
   * Default value: 100
   */
  resourcePanelMin?: number | string;
  /**
   * Specifies the dimensions (width and/or height) of the Resource Panel, controlling how much space it occupies within the user interface. Adjusting this value directly affects the visible area available for displaying resource-related content.
   * Default value: 
   */
  resourcePanelSize?: number | string;
  /**
   * Controls how frequently the Resource Panel updates when a task is dragged, resized, or its progress is changed on the Timeline. By setting this property, you can customize the interval (in milliseconds) between automatic refreshes of the resource Tree and Timeline during these interactions. By default, the Resource Panel refreshes instantly after each change, but adjusting this value can help optimize performance for complex project schedules or large datasets.
   * Default value: 0
   */
  resourcePanelRefreshRate?: number;
  /**
   * A callback function that allows you to fully control and customize the content displayed in the cells of the resource timeline. The callback receives three parameters:  taskIndexes – An array containing the indexes of the tasks assigned to the current resource in this cell.  resourceIndex – The index representing the current resource row.  cellDate – A Date object or date string representing the current cell’s date.This property is specifically used when the resourceTimelineView is set to custom. The expected return value depends on the value of resourceTimelineMode:  diagram – Return a string that will be rendered as the cell’s content.  histogram – Return an object with the following properties:          capacity: The current value to be visualized for the cell.      maxCapacity: The maximum value for the histogram, used to determine the cell visualization’s scale.        custom – (Optional) You may return any custom content for the timeline cell, giving you full flexibility to represent resources however you wish.Use this callback to tailor the timeline’s resource cell display—such as showing aggregated values, custom HTML, or visualizations—according to your application’s requirements.
   * Default value: null
   */
  resourceTimelineFormatFunction?: any;
  /**
   * Specifies the method used to display the resource's capacity within the resource timeline. By default, the capacity is shown in hours, but this may vary depending on the value of the element’s view property. This setting controls how capacity data is visually represented for each resource, ensuring that users see capacity information in a format appropriate to the current timeline view (such as hours, days, or custom intervals).
   * Default value: diagram
   */
  resourceTimelineMode?: GanttChartResourceTimelineMode | string;
  /**
   * Specifies the layout and presentation of resources within the resource Timeline, controlling how individual resources are visually arranged, organized, and grouped for optimal clarity and user experience.
   * Default value: hours
   */
  resourceTimelineView?: GanttChartResourceTimelineView | string;
  /**
   * Determines whether paging functionality is enabled. When set to true, data is divided into discrete pages for easier navigation and viewing; when false, all data is displayed in a single, continuous view. You can use this property to enable or disable paging, or retrieve its current state.
   * Default value: false
   */
  paging?: boolean;
  /**
   * Gets or sets a value that determines whether the element’s alignment supports right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element’s content and layout are adjusted to display text and UI elements in a right-to-left orientation, ensuring proper localization for RTL locales.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * "Allows you to specify which tasks are selected by providing their unique task IDs, or retrieve the IDs of the currently selected tasks. If a task does not already have an ID, the system automatically generates an internal ID for it based on its position in the task hierarchy (using its index or tree path)."
   * Default value: 
   */
  selectedTaskIds?: number[] | string[];
  /**
   * Sets which resources to select by their id or gets the currently selected resource ids. If no id is provided for the resource, an internal id is generated for each resource according to it's index(tree path)."---'Improved Version:'Specifies which resources should be selected by providing their unique IDs, or retrieves the list of currently selected resource IDs. If a resource does not have a user-defined ID, the system automatically generates an internal ID for each resource based on its position within the resource hierarchy (tree path or index). This ensures that every resource can be uniquely identified, even if explicit IDs are not assigned.
   * Default value: 
   */
  selectedResourceIds?: number[] | string[];
  /**
   * Defines or retrieves the selection mode for the component. This property is relevant only when the selection feature is enabled. It determines how users can select items (e.g., single, multiple), and has no effect if selection is disabled.
   * Default value: many
   */
  selectionMode?: GanttChartSelectionMode | string;
  /**
   * Controls whether the current time shader is active. When enabled, all cells corresponding to past time periods will be visually shaded to distinguish them from present and future time slots. Disabling this option will display all cells without any time-based shading.
   * Default value: false
   */
  shadeUntilCurrentTime?: boolean;
  /**
   * Displays the selection column in the Task or Resource Table. When enabled, a checkbox column appears, allowing users to select individual tasks or resources directly from the table. This feature facilitates bulk actions or easy identification of selected items.
   * Default value: false
   */
  showSelectionColumn?: boolean;
  /**
   * Controls the visibility of task baselines in the interface. Baselines represent the original planned schedule of tasks and are specified using the 'planned' attribute on each task object within the dataSource property. When this option is enabled, the baselines will be displayed alongside the actual task data for comparison.
   * Default value: false
   */
  showBaseline?: boolean;
  /**
   * Displays a progress label within the progress bars for each Timeline task, providing a clear visual indication of the current completion percentage directly on the corresponding task's bar.
   * Default value: false
   */
  showProgressLabel?: boolean;
  /**
   * If enabled, the dateStart and dateEnd values of tasks will be automatically adjusted (coerced) to align with the nearest timeline cell boundary, based on the current timeline view. This setting also affects task positioning during drag-and-drop operations, ensuring that tasks always snap to the closest valid timeline interval when they are moved or resized.
   * Default value: false
   */
  snapToNearest?: boolean;
  /**
   * Enables you to specify a custom sorting function that will be invoked whenever a column in the table is sorted, allowing you to override the default sorting logic with customized behavior. The custom function receives the following parameters:  dataSource – The complete array of data objects currently used by the table.  sortColumns – An array containing the keys or data fields of the columns that need to be sorted, in the order of user preference or configuration.  directions – An array specifying the sort direction ('asc' or 'desc') for each column listed in sortColumns. The direction at each index corresponds to the column at the same index.  defaultCompareFunctions – An array of default comparison functions for each column, aligned by index with sortColumns. Use these as fallbacks when only some columns require custom sorting logic.By implementing your own sorting function, you can customize the way the table data is ordered—such as sorting complex data structures, handling locale-specific strings, or applying multi-level sorts—while optionally leveraging the provided default comparison functions for columns that do not require special handling.
   * Default value: null
   */
  sortFunction?: { (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: { (firstRecord: any, secondRecord: any): number }[]): void };
  /**
   * Specifies whether the GanttChart allows sorting by a single column, multiple columns, or disallows column sorting entirely. This setting controls the user's ability to organize tasks in the chart by clicking on one or more column headers.
   * Default value: none
   */
  sortMode?: GanttChartSortMode | string;
  /**
   * A getter method that returns a flattened array containing all task objects nested within the element, regardless of their depth or hierarchical structure. This allows easy access to every task in the element as a single-level array.
   * Default value: 
   */
  tasks?: GanttChartTask[];
  /**
   * 'Description'Defines which columns are displayed in the Task Tree. The value of this property should be an array of objects, each describing a column. Each column object must include the following required keys:- label: Specifies the text that will appear as the column header in the Task Tree.- value: Specifies the key of the task attribute from the dataSource to display as the cell content in that column.By default, one column will be shown with all task labels. Additional columns can be configured using this property.'Optional properties for each column object:'  formatFunction: A function for customizing the display content of each cell in the column. Receives the final label value (string) and returns the desired rendering (string or element).  min: Sets the minimum width of the column (in pixels or CSS units).  max: Sets the maximum width of the column (in pixels or CSS units).  size: Sets the default (actual) width of the column (in pixels or CSS units).  customEditor: A callback for providing a custom editor for the column when editing via a dialog/window. It accepts two arguments:          label: The column label.      value: The current cell value in the column.        The function should return the editor component or element.  setCustomEditorValue: A callback used to programmatically set the value of the custom editor.  getCustomEditorValue: A callback used to programmatically retrieve the value from the custom editor.This configuration enables fine-grained customization of how task attributes are displayed and edited within each column of the Task Tree.
   * Default value: { "label": "Task Name", "value": "label" }
   */
  taskColumns?: GanttChartTaskColumn[];
  /**
   * Specifies whether users can apply filters to the Task Table, allowing them to view only tasks that meet certain criteria. If enabled, filtering options will be available; if disabled, the Task Table will display all tasks without filtering capabilities.
   * Default value: false
   */
  taskFiltering?: boolean;
  /**
   * Specifies the minimum size of the Task Panel when the Resource Panel is visible. This property ensures that the Task Panel does not shrink below the defined size, maintaining usability and layout integrity when both panels are displayed.
   * Default value: 200
   */
  taskPanelMin?: string | number;
  /**
   * Specifies the dimensions of the Task Panel when the Resource Panel is displayed. This setting controls how much space the Task Panel occupies, ensuring it remains visible and accessible alongside the Resource Panel.
   * Default value: 
   */
  taskPanelSize?: string | number;
  /**
   * Specifies the minimum width, in pixels, that the timeline component can be resized or displayed at. This ensures that the timeline will not shrink below the defined width, maintaining usability and proper layout.
   * Default value: 200
   */
  timelineMin?: string | number;
  /**
   * Specifies the minimum width (in pixels) that the task table can be resized to, ensuring the table does not become narrower than this value. This helps maintain readability and layout consistency.
   * Default value: 100
   */
  treeMin?: string | number;
  /**
   * Specifies the width of the task table, controlling how much horizontal space it occupies within its container. Adjust this value to set the overall size of the table and ensure proper display and alignment within your layout.
   * Default value: 100
   */
  treeSize?: string | number;
  /**
   * A custom formatting function for the Timeline header, allowing you to control how each date cell in the header is displayed. The function receives the following arguments:  date (Date): The JavaScript Date object representing the date associated with the current header cell.  type (string): A string indicating the granularity of the header cell, such as 'month', 'week', 'day', etc., specifying what period the cell represents.  isHeaderDetails (boolean): A boolean value specifying whether the cell is part of the detailed header section (typically used for secondary or sub-header rows) or part of the main header row.  value (string): The default formatted label for the cell, as generated by the timeline component, which you may use or modify in your custom output.Use this function to return a custom string (or JSX/HTML element, depending on context) for each header cell, enabling advanced formatting of date headers in the timeline view.
   * Default value: null
   */
  timelineHeaderFormatFunction?: any;
  /**
   * Controls the visibility of tooltips throughout the application. When enabled, informative tooltips will appear for timeline tasks, resources, connections, indicators, and segments, providing users with additional context and details about each element. Disabling this option will hide all tooltips in these areas.
   * Default value: [object Object]
   */
  tooltip?: GanttChartTooltip;
  /**
   * Specifies whether the vertical scrollbar is displayed, allowing the user to scroll content vertically when necessary.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility | string;
  /**
   * Specifies the date range displayed on the timeline. Accepted values include:day: The timeline displays all hours within a single day, allowing for detailed, intraday scheduling and review.week: The timeline presents each day within a single week, providing a broader weekly overview.month: The timeline shows individual days across an entire month, making it easy to view and manage monthly schedules.year: The timeline displays each month of the year, providing a high-level annual perspective.resource: The timeline groups and displays current tasks by the resources assigned to them. Tasks without an assigned resource are grouped under a special "Unassigned" category for easy identification.The timeline features a header section that labels each cell according to its corresponding date or resource. This header is divided into two tiers (for example, months and days, or days and hours) to provide both summary and detailed information, enhancing clarity and context for users navigating the timeline.
   * Default value: year
   */
  view?: GanttChartView | string;
  /**
   * Specifies the display format for dates in the timeline header when they represent years. This setting controls how years are presented (e.g., "2024", "’24", or "Year 2024") to ensure consistency and clarity in the timeline header’s date representation.
   * Default value: numeric
   */
  yearFormat?: YearFormat | string;
  /**
   * Specifies the display format for dates in the timeline header when the timeline view is set to show weeks. This setting controls how each week's date range or label appears, allowing customization of the week header’s date representation.
   * Default value: long
   */
  weekFormat?: WeekFormat | string;
  /**
   * Specifies or retrieves the visual theme applied to the element, controlling its overall appearance and styling (such as colors, backgrounds, and typography) according to predefined theme options.
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines whether the element can receive keyboard focus. When set to true, the element becomes focusable and can be navigated to using the Tab key or programmatically via JavaScript. When accessed, returns a boolean indicating the current focusability state of the element.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Gantt charts are specialized bar charts that help clearly represent how tasks and resources are allocated over time in planning, project management, and scheduling applications.
*/
export interface GanttChart extends BaseElement, GanttChartProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a batch update operation begins, specifically after the <b>beginUpdate</b> method has been executed. It signals that subsequent changes to the data will be grouped as part of a batch, allowing for improved performance and deferred processing until the update process is completed.
	* @param event. The custom event.    */
  onBeginUpdate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered after the <b>endUpdate</b> method has been executed, indicating that a batch update operation has completed. It signals that any batched changes have been applied, and the system can now perform follow-up actions or refresh the affected components.
	* @param event. The custom event.    */
  onEndUpdate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired when the user initiates the process of connecting one task to another—such as starting to draw a link or dependency between two tasks. Within the event handler, you can call event.preventDefault() to cancel the connection operation before it completes. This provides an opportunity to validate conditions, enforce business rules, or restrict certain connections as needed.
	* @param event. The custom event. Custom data event was created with: ev.detail(startIndex)
   *  startIndex - The index of the task that a connection is started from.
   */
  onConnectionStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user successfully establishes a link or dependency between two distinct tasks, typically by connecting their endpoints within the user interface. It signifies that a relationship (such as a workflow, sequence, or prerequisite) has been created between the selected tasks.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, startTaskId, startIndex, endIndex, endTaskId, type)
   *  id - The id of the connection that was created.
   *  startTaskId - The id of the task that a connection is started from.
   *  startIndex - The index of the task that a connection is started from.
   *  endIndex - The index of the task that a connection ended to.
   *  endTaskId - The id of the task that a connection ended to.
   *  type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
   */
  onConnectionEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user selects or deselects a Task item. It fires both when a Task becomes selected and when a previously selected Task is unselected, allowing you to respond to changes in Task selection state.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue)
   *  value - The index of the new selected task.
   *  oldValue - The index of the previously selected task.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever a column within the Tree component is resized by the user. You can enable or disable column resizing functionality using the <b>columnResize</b> property. When column resizing is enabled, this event allows you to respond to changes in column width, such as updating layout or saving user preferences.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField, headerCellElement, widthInPercentages, width)
   *  dataField - The name of the column. Corresponds to the <b>value</b> attribute of a <b>taskColumns/resourceColumns</b> object.
   *  headerCellElement - The HTMLElement column cell element that was resized.
   *  widthInPercentages - The new width of the column in percentages.
   *  width - The new width of the column in pixels.
   */
  onColumnResize?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired immediately before the task editing window or tooltip is about to close. At this stage, you have the opportunity to intercept and prevent the closing operation by calling event.preventDefault() within your event handler. This allows you to perform validation, display confirmation dialogs, or execute other logic before the window or tooltip is dismissed.
	* @param event. The custom event. Custom data event was created with: ev.detail(owner, item, target, type)
   *  owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip.
   *  item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
   *  target - The instance of the window/tooltip that is going to close.
   *  type - The type of window/tooltip that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
   */
  onClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the task editing window is closed or hidden by the user. It indicates that the user has exited the task editing interface, either by saving changes, cancelling, or clicking outside the window. This event can be used to perform cleanup actions, update the UI, or save edits as necessary.
	* @param event. The custom event. Custom data event was created with: ev.detail(owner, item, target, type)
   *  owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip
   *  item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
   *  target - The instance of the window/tooltip that is closed.
   *  type - The type of window/tooltip that is closed. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
   */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever a user collapses an item, such as hiding or minimizing a section, panel, or list element within the interface. It enables developers to execute custom logic or UI updates in response to the item's transition from an expanded (visible) state to a collapsed (hidden or minimized) state.
	* @param event. The custom event. Custom data event was created with: ev.detail(isGroup, item, index, label, value)
   *  isGroup - A boolean flag indicating whether the collapsed item is a resource group. This is the case when <b>groupByResoruces</b> is enabled.
   *  item - The object details of the collapsed item.
   *  index - The index of the collapsed item.
   *  label - The label of the collapsed item.
   *  value - The value of the collapsed item.
   */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user begins dragging a task element. In the event handler function, you can call event.preventDefault() to cancel or prevent the drag operation from proceeding. This allows you to implement custom logic to determine whether dragging should be allowed for a specific task, based on application requirements.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, item, dateStart, dateEnd, segment)
   *  id - The id of the task that is going to be dragged.
   *  item - The object of the task that is going to be dragged.
   *  dateStart - The start date of the task that is going to be dragged.
   *  dateEnd - The end date of the task that is going to be dragged.
   *  segment - The segment object that is going to be dragged. This attribute is undefined if a segment is not going to be dragged.
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when the user completes dragging a task and releases it, indicating the end of the drag-and-drop operation for that specific task. It can be used to perform actions such as updating the task's position, saving changes, or triggering related callbacks after the drag action concludes.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, item, dateStart, dateEnd, segment)
   *  id - The id of the task that is was dragged.
   *  item - The object of the task that is was dragged.
   *  dateStart - The start date of the task that is was dragged.
   *  dateEnd - The end date of the task that is was dragged.
   *  segment - The segment object that was dragged. This attribute is undefined if a segment has not been dragged.
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when a user expands an item, such as clicking to reveal additional content or details. It can be used to execute custom logic in response to the item's expansion, such as loading more data, updating the user interface, or tracking user interactions.
	* @param event. The custom event. Custom data event was created with: ev.detail(isGroup, item, index, label, value)
   *  isGroup - A boolean flag indicating whether the collapsed item is a resource group. This is the case when <b>groupByResoruces</b> is enabled.
   *  item - The index of the expanded item.
   *  index - The index of the expanded item.
   *  label - The label of the expanded item.
   *  value - The value of the expanded item.
   */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a filter is applied to the GanttChart, such as when the user sets specific criteria to display only certain tasks or time periods. It allows developers to execute custom logic in response to filtering actions, such as updating related UI components or fetching additional data based on the current filter state.
	* @param event. The custom event. Custom data event was created with: ev.detail(type, action, filters)
   *  type - The type of items that have been filtered ( task or resource ).
   *  action - The name of the filtering action (whether filtering is added or removed).
   *  filters - The filters that have been applied. Filters represent JQX.Utilities.FilterGroup objects.
   */
  onFilter?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user clicks on a task, resource, or connection within either the Timeline area or the Tree columns of the interface. It enables developers to handle user interactions with these elements, allowing for custom behaviors or actions in response to the selection.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, item, type, originalEvent)
   *  id - The id of the task.
   *  item - The item that was clicked. It can be a task, resource or connection.
   *  type - The type of item. Possible values are: 'task', 'project', 'resource', 'connection'.
   *  originalEvent - The original DOM event.
   */
  onItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user double clicks on a task, resource, or connection within either the Timeline area or the Tree columns of the interface. It enables developers to handle user interactions with these elements, allowing for custom behaviors or actions in response to the selection.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, item, type, originalEvent)
   *  id - The id of the task.
   *  item - The item that was clicked. It can be a task, resource or connection.
   *  type - The type of item. Possible values are: 'task', 'project', 'resource', 'connection'.
   *  originalEvent - The original DOM event.
   */
  onItemDoubleClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a new Task, Resource, or Connection is added to the system—such as when a user creates a new task, assigns a new resource, or establishes a new connection between entities. The event allows you to handle actions or updates related to these insertions in real time.
	* @param event. The custom event. Custom data event was created with: ev.detail(type, item)
   *  type - The type of item that has been modified. The type could be: 'connection', 'task', 'project', 'resource'.
   *  item - An object that represents the actual item with it's attributes.
   */
  onItemInsert?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a Task, Resource, or Connection is deleted or removed from the system. It allows you to perform actions or update the user interface in response to the removal of these entities. The event provides relevant information about the item that was removed, enabling you to handle cleanup, logging, or other custom behaviors as needed.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, type, item)
   *  id - The id of the task.
   *  type - The type of item that has been modified. The type could be: 'connection', 'task', 'project', 'resource'.
   *  item - An object that represents the actual item with it's attributes.
   */
  onItemRemove?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a Task, Resource, or Connection undergoes an update. This includes changes to properties, status, or associations within any of these entities. Use this event to respond to modifications such as edits, status transitions, or reassignments involving Tasks, Resources, or Connections in the system.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, type, item)
   *  id - The id of the task.
   *  type - The type of item that has been modified. The type could be: 'connection', 'task', 'project', 'resource'.
   *  item - An object that represents the actual item with it's attributes.
   */
  onItemUpdate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired immediately before the task editing window or tooltip is about to open. At this stage, you have the opportunity to intercept and potentially cancel the opening operation by calling event.preventDefault() within your event handler. This allows you to implement custom logic to control whether the editing window or tooltip should be displayed.
	* @param event. The custom event. Custom data event was created with: ev.detail(owner, item, target, type)
   *  owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip
   *  item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
   *  target - The instance of the window/tooltip that is going to open.
   *  type - The type of window/tooltip that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
   */
  onOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the task editing window becomes visible, such as when a user opens the edit task modal or interface. It is also triggered whenever a tooltip related to task actions is shown. This allows developers to respond to both the display of the task edit view and the appearance of relevant tooltips.
	* @param event. The custom event. Custom data event was created with: ev.detail(owner, item, target, type)
   *  owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip
   *  item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
   *  target - The instance of the window/tooltip that is opened.
   *  type - The type of window/tooltip that is opened. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
   */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired whenever the progress of a task bar begins to change due to user interaction, such as dragging the progress handle or clicking on the bar. Within the event handler, you can call event.preventDefault() to cancel or prevent the progress update from occurring. This provides an opportunity to validate the operation or implement custom logic before the task bar value is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, index, progress)
   *  id - The id of the task.
   *  index - The index of the task which progress is going to be changed.
   *  progress - The progress of the task before it is changed.
   */
  onProgressChangeStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever there is an update to a task's progress value. It occurs each time the task progresses, such as when a user completes a step or when the system automatically tracks advancement. The event provides updated information about the current state of the task’s progress, enabling UI elements or other components to respond accordingly (e.g., updating a progress bar or displaying status messages).
	* @param event. The custom event. Custom data event was created with: ev.detail(id, index, progress)
   *  id - The id of the task.
   *  index - The index of the task which progress is has been changed.
   *  progress - The progress of the task after it was changed.
   */
  onProgressChangeEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user begins resizing a task, such as changing its duration or endpoints. Within the event handler function, you can prevent the resizing operation from proceeding by calling event.preventDefault(). This allows developers to implement custom logic or validation before allowing the resize action to continue.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, item, dateStart, dateEnd, segment)
   *  id - The id of the task that is going to be resized.
   *  item - The object of the task that is going to be resized.
   *  dateStart - The start date of the task that is going to be resized.
   *  dateEnd - The end date of the task that is going to be resized.
   *  segment - The segment object that is going to be resized. This attribute is undefined if a segment is not going to be resized.
   */
  onResizeStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user completes resizing a task, indicating that the resize action has ended and the new task size has been set.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, item, dateStart, dateEnd, segment)
   *  id - The id of the task that was resized.
   *  item - The object of the task that was resized.
   *  dateStart - The start date of the task that was resized.
   *  dateEnd - The end date of the task that was resized.
   *  segment - The segment object that was resized. This attribute is undefined if a segment has not been resized.
   */
  onResizeEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user sorts the GanttChart by clicking on a column header. It fires each time the sorting order or the sorted column changes, allowing you to respond to updates in the displayed task order.
	* @param event. The custom event. Custom data event was created with: ev.detail(type, columns, sortDataFields, sortOrders, sortDataTypes)
   *  type - The type of columns that have been sorted ( task or resource column ).
   *  columns - An array of objects that contains the currently sorted column objects.
   *  sortDataFields - The dataFields of the columns that have been sorted. The dataField corresponds to the <b>value</b> property of a <b>taskColumns/resourceColumns</b> object.
   *  sortOrders - The orders of the columns that have been sorted.
   *  sortDataTypes - The data types of the columns that have been sorted.
   */
  onSort?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user scrolls to the very bottom of the Timeline component, indicating that all currently loaded timeline items have been reached. It can be used to implement features such as infinite scrolling or loading additional content when the end of the timeline is visible.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Timeline component reaches its uppermost scroll position, indicating that the user has scrolled all the way to the top of the Timeline. Use this event to load earlier items, display notifications, or perform other actions when the beginning of the Timeline is reached.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user scrolls the Timeline component all the way to the start of its horizontal axis, reaching the earliest (leftmost) visible position. Use this event to detect when the Timeline has reached its starting boundary during horizontal scrolling.
	* @param event. The custom event.    */
  onScrollLeftReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user scrolls to the far right end of the Timeline component horizontally, indicating that no additional content is available in that direction.
	* @param event. The custom event.    */
  onScrollRightReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Enables the application of a user-defined filter to a specified column, allowing you to customize how data is displayed or managed within either a task column or a resource column. This feature supports more precise data sorting, searching, or visibility based on your chosen criteria.
   * @param {any} columns. An object or an array of objects with the following syntax: <ul><li><b>type</b> - indicates the type of column to filter. Possible values are 'task' or 'resource'.</li><li><b>value</b> - the value of the column that must match the value attribute of a taskColumns/resourceColumns object(e.g. 'label', 'dateStart', etc).</li></ul>.
   * @param {any} filterGroup. A Smart.Utilities.FilterGroup object. Here's an example for creating a FilterGroup object: <pre>const filterGroup = new window.Smart.Utilities.FilterGroup(), filterObject = filterGroup.createFilter('string', 'Task B', 'STARTS_WITH_CASE_SENSITIVE'); filterGroup.addFilter('or', filterObject); gantt.addFilter({ type: 'task', value: 'label' }, filterGroup);</pre>
   */
  addFilter(columns: any, filterGroup: any): void;
  /**
   * Removes all active filters from the current view, resetting any filter selections and displaying the complete, unfiltered dataset or content.
   */
  clearFilters(): void;
  /**
   * Removes any active sorting from the columns, restoring the original or default order of the data. This action resets the column sorting state, so no columns are sorted after this operation.
   */
  clearSort(): void;
  /**
   * Deselects all currently selected items within the GanttChart component, including both Tasks and Resources. Additionally, this action removes any visual highlights or indicators related to task-resource assignments, ensuring that no items remain selected or highlighted in the chart.
   */
  clearSelection(): void;
  /**
   * Removes a previously stored state of the element from LocalStorage, based on the element's unique id attribute. <strong>Note: The element must have an id specified for this operation to work.</strong>
   */
  clearState(): void;
  /**
   * Deletes all existing tasks from the list, resulting in an empty task collection. This action is irreversible and will permanently remove every task from storage.
   */
  clearTasks(): void;
  /**
   * Deletes all resources from the system, ensuring that no data or assets remain. This operation is irreversible and will remove every resource currently managed by the application.
   */
  clearResources(): void;
  /**
   * Establishes a logical link between two tasks, indicating that the completion or status of one task directly influences or triggers the other. This connection can be used to define dependencies, control workflow order, and ensure tasks are executed in the correct sequence.
   * @param {number | string} startTaskIndex. The id of the start task or the connection string like '2-3-0'. <b>If the complete connections string is provided as the first argument, the rest of the method arguments are not necessary</b>
   * @param {number | string} taskEndIndex?. The id of the end task.
   * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3. The connection type can be: <ul><li><b>0</b> - Start-to-Start connection.</li><li><b>1</b> - End-to-Start connection.</li><li><b>2</b> - End-to-End connection.</li><li><b>3</b> - Start-to-End connection.</li></ul>
   * @param {number} lag?. The connection lag in miliseconds. Used by the Auto scheduling algorithm in order allow some slack time slack time before or after the next task begins/ends. Lag is measured in miliseconds. It can be a negative (lead) or a positive (lag) number.
   */
  createConnection(startTaskIndex: number | string, taskEndIndex?: number | string, connectionType?: number, lag?: number): void;
  /**
   * Collapses a currently expanded project section, minimizing its content to provide a streamlined view and reduce on-screen clutter. This action hides the project's detailed information while keeping the project accessible for future expansion.
   * @param {string | number} id. The id of a project item that should be collapsed.
   */
  collapse(id: string | number): void;
  /**
   * Initiates an update operation, allowing you to group and apply multiple method calls or set several properties in a single batch. This approach is ideal for making coordinated changes efficiently, minimizing redundant processing or event triggers that could occur if each update were applied individually.
   */
  beginUpdate(): void;
  /**
   * Concludes the update operation, allowing the GanttChart to resume its rendering process. Invoking this method will trigger a refresh, ensuring that all recent changes are visually reflected on the chart.
   */
  endUpdate(): void;
  /**
   * Refreshes the GanttChart display after resizing by recalculating and updating the scrollbars to ensure proper alignment and navigation.
   * @param {boolean} fullRefresh?. If set the GanttChart will be re-rendered completely.
   */
  refresh(fullRefresh?: boolean): void;
  /**
   * Ensures that the specified task element is brought into view within the scrollable container by automatically scrolling the page or container if necessary, so the task is fully visible to the user.
   * @param {string | number} taskId. The id of the target Task.
   */
  ensureVisible(taskId: string | number): void;
  /**
   * Expands a collapsed project to reveal its associated tasks, allowing users to view and interact with all items within the project.
   * @param {string | number} id. The id of a project task that should be expanded.
   */
  expand(id: string | number): void;
  /**
   * Exports the hierarchical tree data structure associated with the GanttChart, including all tasks, sub-tasks, and their relationships, in a serialized format suitable for data exchange or storage.
   * @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>tsv</b></li><li><b>csv</b></li><li><b>xml</b></li></ul>
   * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
   */
  exportData(dataFormat: string, callback?: any): void;
  /**
   * Retrieves a complete list of all current connections. The returned value is an array of objects, where each object represents a single connection and includes comprehensive metadata about that connection. Each connection object contains the following properties:<br/><br/>- **id**: A unique identifier for the connection.<br/>- **type**: The type or category of the connection (e.g., dependency, sequential, etc.).<br/>- **startTaskId**: The unique identifier of the task where the connection originates.<br/>- **endTaskId**: The unique identifier of the task where the connection terminates.<br/>- **startIndex**: The index position within the start task from which the connection begins (useful for tasks with multiple connection points).<br/>- **endIndex**: The index position within the end task where the connection attaches.<br/>- **lag**: The lag time, typically in milliseconds or a project-specific unit, representing any delay between the linked tasks.<br/><br/>This structure provides all necessary details for understanding the relationship and timing between connected tasks.
   * @returns {any}
   */
  getConnections(): any;
  /**
   * Returns the details of the specified connection, providing information such as: the starting task (`startTask`), ending task (`endTask`), unique identifiers of the starting and ending tasks (`startTaskId`, `endTaskId`), and the connection type (`type`). For a comprehensive explanation of the available connection types, please refer to the 'connectionEnd' event documentation within this document or the dedicated topic on our website.
   * @param {string} connectionId. A connection id. Each connection has a unique id that is assigned when a connection is created.
   * @returns {any}
   */
  getConnectionDetails(connectionId: string): any;
  /**
   * Provides a comprehensive JSON object containing all tasks within the specified element, including detailed information about each task's attributes, their interconnections (such as dependencies or links), and the full configuration settings associated with each task. This structured representation allows for thorough inspection, processing, or manipulation of the tasks and their relationships.
   * @returns {any[]}
   */
  getState(): any[];
  /**
   * Returns the tree path of a specified task or resource. The tree path represents the unique location of the task or resource within a hierarchical structure. If the user does not explicitly provide an ID for the task or resource, this tree path will be used as its default unique identifier.
   * @param {any} item. A GattChartTask/GanttChartResource item object.
   * @returns {string}
   */
  getItemPath(item: any): string;
  /**
   * Returns the task object that matches the specified id or path. The id/path parameter can be either a unique identifier or a hierarchical location string for the task. The returned object contains detailed information and properties related to the task, such as its status, title, description, due date, and any associated metadata.
   * @param {string | number} itemId. The id/path of a task.
   * @returns {any}
   */
  getTask(itemId: string | number): any;
  /**
   * Returns an array containing all task objects currently present in the GanttChart. Each task object includes details such as the task ID, name, start date, end date, dependencies, and any additional task-specific properties.
   * @returns {any[]}
   */
  getTasks(): any[];
  /**
   * Returns the zero-based index position of the specified task within a task list. If the task is not found, the method returns -1.
   * @param {any} task. A GattChartTask object.
   * @returns {number}
   */
  getTaskIndex(task: any): number;
  /**
   * Returns the definitions of all connections associated with a specific task, including details about each connection's type, configuration, and related parameters.
   * @param {any} taskId. A GanttChartTask object or it's id.
   * @returns {any}
   */
  getTaskConnections(taskId: any): any;
  /**
   * Returns the associated Project object for a given task. If the task is not linked to any Project, the function returns undefined.
   * @param {any} task. A GantChartTask object.
   * @returns {any}
   */
  getTaskProject(task: any): any;
  /**
   * Returns the resource object that matches the specified ID or path parameter. This object contains all relevant properties and data associated with the requested resource. If no resource is found with the provided ID or path, the method returns null or an error, depending on implementation.
   * @param {string | number} itemId. The id/path of a resource.
   * @returns {any}
   */
  getResource(itemId: string | number): any;
  /**
   * Returns an array containing all resource objects associated with the GanttChart. Each resource object includes detailed information about a specific resource, such as its unique identifier, name, and any additional properties defined for resources within the GanttChart. This allows developers to access and manipulate the full set of resources currently present in the chart.
   * @returns {any[]}
   */
  getResources(): any[];
  /**
   * Returns the zero-based index position of the specified resource within a collection or array. If the resource is not found, the function typically returns -1.
   * @param {any} resource. A GanttChartResource object.
   * @returns {number}
   */
  getResourceIndex(resource: any): number;
  /**
   * Returns a list of tasks that have been assigned to the specified resource, including all relevant details for each task. This allows you to retrieve and review all tasks currently associated with the given resource.
   * @param {any} resource. A GanttChartResource object or it's id.
   * @returns {any}
   */
  getResourceTasks(resource: any): any;
  /**
   * Returns the IDs of the currently selected tasks or resources as an array. If selection functionality is disabled or if no items are currently selected, the function returns null.
   * @returns {any}
   */
  getSelectedIds(): any;
  /**
   * Returns an array containing all tasks that are currently selected by the user. Each task object in the array includes relevant task details such as its identifier, name, status, and any other associated properties. If no tasks are selected, an empty array is returned.
   * @returns {any}
   */
  getSelectedTasks(): any;
  /**
   * Returns an array containing information about all resources currently selected by the user. Each resource object may include details such as its unique identifier, name, type, and relevant metadata. This allows developers to programmatically access and process the user's current selections within the application.
   * @returns {any}
   */
  getSelectedResources(): any;
  /**
   * Returns the working hours for a given day as an array of numerical values, where each value represents an hour within the standard working period (e.g., [9, 10, 11, 12, 13, 14, 15, 16, 17] for a 9 AM to 5 PM schedule).
   * @returns {any}
   */
  getWorkingHours(): any;
  /**
   * Conceals the tooltip element when it is currently displayed, ensuring that the tooltip is no longer visible to the user.
   * @returns {any}
   */
  hideTooltip(): any;
  /**
   * Determines whether the specified target date falls on a working day by evaluating it against the nonworkingDays property. Returns true if the target date is a working day (not listed in nonworkingDays), and false if it is a non-working day.
   * @param {Date} date. A javascript Date object or a string/number which represents a valid JS Date.
   */
  isWorkingDay(date: Date): void;
  /**
   * Enhancement:<br/><br/>Restores the element’s previously saved state by loading the provided state object, or, if no argument is supplied, checks the browser’s LocalStorage for any saved states associated with the element and loads them if available.
   * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
   */
  loadState(state?: any[]): void;
  /**
   * Removes all existing links or dependencies between tasks, effectively disconnecting every task from one another. After this operation, no task will be linked, dependent on, or related to any other task in the project.
   */
  removeAllConnections(): void;
  /**
   * Removes a connection between two tasks.  <br/>The function can be called in one of two ways:<br/><br/>1. With three arguments: the start task's index, the end task's index, and the connection type (for example, "finish-to-start" or "start-to-end").<br/>2. With a single connection string argument that describes the connection (e.g., "1->2:FS").<br/><br/>This allows you to specify which task relationship to remove either by providing explicit task indices and type, or via a string representation of the connection.
   * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
   * @param {number} taskEndIndex?. The index of the end task.
   * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
   * @returns {any}
   */
  removeConnection(startTaskIndex: number | string, taskEndIndex?: number, connectionType?: number): any;
  /**
   * Deletes all connections associated with a specified task. If a second, valid task is provided as an argument, only the connections between the two specified tasks are removed.
   * @param {any} taskStart. The start task object or it's id.
   * @param {any} taskEnd?. The end task object or it's id.
   */
  removeTaskConnection(taskStart: any, taskEnd?: any): void;
  /**
   * Displays a tooltip for a designated element, providing additional contextual information or guidance when the user hovers over, focuses on, or interacts with that element.
   * @param {HTMLElement} target. The HTMLElement that will be the target of the tooltip.
   * @param {string} content?. Allows to set a custom content for the Tooltip.
   */
  showTooltip(target: HTMLElement, content?: string): void;
  /**
   * Scrolls the view to a specific date within a calendar or timeline component, bringing the selected date into focus for the user.
   * @param {Date} date. The date to scroll to.
   */
  scrollToDate(date: Date): void;
  /**
   * Stores the current configuration of the element in the browser's LocalStorage, allowing the settings to persist across page reloads or browser sessions. <strong>Note: The element must have a unique <code>id</code> attribute assigned for this functionality to work properly.</strong>
   * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
   */
  saveState(state?: any[]): void;
  /**
   * Inserts a new task into the timeline. You can specify the task’s placement by providing a project ID: if a valid project ID is supplied, the new task will be created as a subtask under that project; if no project ID is given, the task will be added as a root-level item in the timeline. This allows for flexible organization, supporting both standalone tasks and tasks nested within projects.
   * @param {any} taskObject. An object describing a Gantt Chart task.
   * @param {any} project?. A number or string that represents the id of a project (e.g. '0') or a project object definition present in the GanttChart. This parameter determines the parent project of the task that will be inserted. If <b>null</b> is passed as an arguemnt the new task will be inserted at root level without a parent project.
   * @param {number} index?. The index where the new item should be inserted(e.g. 2). This index will determine the position of the newly inserted task.
   * @returns {string | number | undefined}
   */
  insertTask(taskObject: any, project?: any, index?: number): string | number | undefined;
  /**
   * Updates the details of an existing task, project, or milestone, such as its title, description, status, deadline, or assigned users. This operation allows you to modify key attributes to reflect changes in progress, requirements, or scheduling.
   * @param {any} taskId. A number or string that represents the id of a task/project(e.g. '0') or the object definition of the task/project.
   * @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
   */
  updateTask(taskId: any, taskObject: any): void;
  /**
   * Removes the specified task from the timeline, effectively deleting it from the list of scheduled events. This operation updates the timeline to ensure the removed task no longer appears or affects the scheduling of other tasks.
   * @param {any} taskId. A number or string that represents the id of a task or the actual item object.
   */
  removeTask(taskId: any): void;
  /**
   * Adds a new resource to the collection by creating and storing the provided data. Returns details of the created resource upon successful insertion.
   * @param {string | number} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following SmartTree syntax), or a number that represents the index of a resource.
   * @param {any} resourceObject?. An object describing a Gantt Chart resource.
   */
  insertResource(resourceId: string | number, resourceObject?: any): void;
  /**
   * Updates the specified resource with new data or modifications. This operation applies changes to the current state of the resource identified by its unique identifier, ensuring that only the provided fields are altered while preserving any unspecified properties.
   * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following SmartTree syntax), or a number that represents the index of a resource.
   * @param {any} taskObject. An object describing a Gantt Chart resource. The properties of this object will be applied to the target resource.
   */
  updateResource(resourceId: any, taskObject: any): void;
  /**
   * Deletes a specified resource from the system, permanently removing it and its associated data. This action cannot be undone.
   * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following SmartTree syntax), or a number that represents the index of a resource.
   */
  removeResource(resourceId: any): void;
  /**
   * Opens a popup window that allows the user to either edit or delete a connection when a specific connection string is provided. This popup provides relevant options and fields based on the selected task (edit or delete), streamlining the process of managing connection configurations.
   * @param {any} taskId. A string or number that represents the id of a task or the task object that is going to be edited or a connection string(e.g. '2-0-0').
   */
  openWindow(taskId: any): void;
  /**
   * Closes any active popup window that was opened within the specified element. This method searches for and terminates all open popup windows that are currently displayed inside the targeted element, ensuring that no popups remain visible or interactive.
   */
  closeWindow(): void;
  /**
   * Configures the GanttChart for optimal print layout and formatting, then automatically launches the browser's Print Preview dialog, allowing users to review and print the current chart view.
   */
  print(): void;
  /**
   * Enables users to define the standard working days and hours for the entire schedule in a single action. This ensures consistency by applying the specified days and time ranges across the relevant calendar or system settings.
   * @param  settings. An object definition that contains the days and hours that should be working. The days and hours can be defined as an array of numbers where each number is a day/hour, strings where each string represents a range of days/hours (e.g. '1-5' or '2:00-8:00') or nested array of numbers (e.g. [[1,5]] or [[2, 8]]) which means from 1 to 5 or 2 to 8.
   */
  setWorkTime(settings: { days: (number | string | number[])[], hours: (number | string | number[])[] }): void;
  /**
   * Enables users to retrieve and select a specific task by providing its unique task ID. This functionality ensures precise identification and access to individual tasks within the system.
   * @param {string | number} id. The id of the task to select.
   */
  selectTask(id: string | number): void;
  /**
   * Enables the selection of a specific resource by specifying its unique identifier (ID). This functionality ensures that only the resource matching the provided ID is retrieved or manipulated.
   * @param {string | number} id. The id of the resource to select.
   */
  selectResource(id: string | number): void;
  /**
   * Enables the deselection of a specific task by specifying its unique task ID. This operation removes the selected state from the corresponding task if it is currently selected.
   * @param {string | number} id. The id of the task to unselect.
   */
  unselectTask(id: string | number): void;
  /**
   * Enables the deselection of a specific resource by providing its unique identifier (ID). This function removes the selected state from the resource corresponding to the given ID, if it is currently selected.
   * @param {string | number} id. The id of the resource to unselect.
   */
  unselectResource(id: string | number): void;
  /**
   * Removes any previously defined working hours for the user or resource. This method serves as the counterpart to <b>setWorkingTime</b>, effectively clearing or resetting the working time settings that were established earlier.
   * @param  settings. An object definition that contains the days and hours that should not be working. The days and hours can be defined as an array of numbers where each number is a day/hour, strings where each string represents a range of days/hours (e.g. '1-5' or '2:00-8:00') or nested array of numbers (e.g. [[1,5]] or [[2, 8]]) which means from 1 to 5 or 2 to 8.
   */
  unsetWorkTime(settings: { days: (number | string | number[])[], hours: (number | string | number[])[] }): void;
  /**
   * Automatically sorts the tasks and resources in the GanttChart when the <b>sortable</b> option is enabled, allowing users to organize items by specified criteria such as start date, name, or priority.
   * @param {any} columns. An Array of objects which determine which columns to be sorted, the sort order and the type of item to sort: task or resource. If no arguments are provided sorting will be removed. <br /> An object should have the following properties: <ul><li><b>value</b> - a string that represents the value of a <b>taskColumn</b> to sort.</li><li><b>sortOrder</b> - a string that represents the sorting order for the column: 'asc' (asscending sorting) or 'desc' (descending) are possible values. </li><li><b>type</b> - a string that represents the type of item to sort. This property determines which panel will be sorted. Two possible values: 'task', 'resource'.</li></ul>
   */
  sort(columns: any): void;
  /**
   * Sets the locale of a component.
   * @param {string} locale. The locale abbreviation. For example: 'de'.
   * @param {any} messages?. Object containing the locale messages.
   */
  setLocale(locale: string, messages?: any): void;
}

/**Configures the data export settings for the GanttChart, allowing customization of how chart data is exported (e.g., format, included fields, file name, and export behavior). */
export interface GanttChartDataExport {
  /**
   * Specifies whether items that have been filtered out should be included in the export. By default, only unfiltered data is exported; filtered (excluded) items are not included in the export unless this option is enabled.
   * Default value: false
   */
  exportFiltered?: boolean;
  /**
   * Specifies the name of the file that will be generated and saved when the export operation is completed.
   * Default value: "jqxGanttChart"
   */
  fileName?: string;
  /**
   * Specifies the category or format of items to be exported. This property defines what kind of data or objects will be included in the export process, helping to ensure the correct handling and organization of exported content.
   * Default value: task
   */
  itemType?: GanttChartDataExportItemType | string;
}

export interface GanttChartDateMarker {
  /**
   * Determines the marker label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Determines the date for the marker. The date can include time as well.
   * Default value: null
   */
  date?: string | Date | number;
  /**
   * Allows to add a custom class name to the marker.
   * Default value: "null"
   */
  className?: string;
}

export interface GanttChartResource {
  /**
   * Resource class. Used to style the resource Timeline.
   * Default value: ""
   */
  class?: string;
  /**
   * The capacity of a resource. By default it is used to determine the working capacity ( in hours ) of the resource.
   * Default value: 8
   */
  capacity?: number;
  /**
   * Resource visibility.
   * Default value: false
   */
  hidden?: boolean | undefined;
  /**
   * Resource id. The unique id of the resource.
   * Default value: ""
   */
  id?: string;
  /**
   * Resource label.
   * Default value: 0
   */
  label?: string | null;
  /**
   * Resource min capacity
   * Default value: 0
   */
  minCapacity?: number;
  /**
   * Resource max capacity. By default this property is used for the resource timeline histogram where maxCapacity is the maximum working capacity in hours of the resource.
   * Default value: 0
   */
  maxCapacity?: number;
  /**
   * Resource progress. Progress is the total progress of the resource based on the tasks it is assigned to. This property is automatically calculated.
   * Default value: 0
   */
  progress?: number;
  /**
   * Resource type.
   * Default value: 
   */
  type?: any;
  /**
   * Resource value.
   * Default value: 
   */
  value?: any;
  /**
   * Resource workload. Workload is the total working time in hours of a resource based on the tasks it is assigned to. This property is automatically calculated.
   * Default value: 0
   */
  workload?: string | number;
}

export interface GanttChartResourceColumn {
  /**
   * Column's label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Column's value. The value shold reference an actual resoruce attribute.
   * Default value: 
   */
  value?: string | null;
  /**
   * Column's min size.
   * Default value: 0
   */
  min?: string | number | null;
  /**
   * Column's size.
   * Default value: 0
   */
  size?: string | number | null;
  /**
   * Column's format function. You can use it to customize the column label's rendering.
   * Default value: null
   */
  formatFunction?: any;
}

export interface GanttChartTask {
  /**
   * Tasks connection.
   * Default value: undefined
   */
  connections?: any;
  /**
   * Project, Task or Milestone CSS class.
   * Default value: ""
   */
  class?: string;
  /**
   * Project, Task or Milestone start date.
   * Default value: 
   */
  dateStart?: string | Date;
  /**
   * Project, Task or Milestone end date.
   * Default value: 
   */
  dateEnd?: string | Date;
  /**
   * Determines the deadline for the Project, Task or Milestone.
   * Default value: 
   */
  deadline?: string | Date;
  /**
   * Project, Task or Milestone with disabled resources.
   * Default value: false
   */
  disableResources?: boolean;
  /**
   * Project, Task or Milestone dragging is disabled.
   * Default value: false
   */
  disableDrag?: boolean;
  /**
   * Project, Task or Milestone resizing is disabled.
   * Default value: false
   */
  disableResize?: boolean;
  /**
   * Project, Task or Milestone drag enabled in the view.
   * Default value: true
   */
  dragProject?: boolean;
  /**
   * The duration of the tasks in miliseconds. The duration unit can be changed via the durationUnit property.
   * Default value: 0
   */
  duration?: number | undefined;
  /**
   * Project, Task or Milestone expanded state in the view.
   * Default value: false
   */
  expanded?: boolean;
  /**
   * Task visibility.
   * Default value: false
   */
  hidden?: boolean | undefined;
  /**
   * Project, Task or Milestone id.
   * Default value: 
   */
  id?: string | null;
  /**
   * Determines the indicators for the task. Task indicators represent special dates that are displayed inside the task's row.
   * Default value: null
   */
  indicators?: GanttChartTaskIndicator[];
  /**
   * Project, Task or Milestone label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Project, Task or Milestone format function.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Project, Task or Milestone format function. The function gets passed the following arguments: task, segment, taskElement, segmentElement, labelElement. task - the task object.segment - the task current segment object. If the task has only one segment, the task object is passed again.taskElement - the task's html element.segmentElement - the task's segment html element.labelElement - the task's segment label html element.
   * Default value: null
   */
  onRender?: any;
  /**
   * Project, Task or Milestone max start date.
   * Default value: 
   */
  maxDateStart?: string | Date;
  /**
   * Project, Task or Milestone min start date.
   * Default value: 
   */
  minDateStart?: string | Date;
  /**
   * Project, Task or Milestone max end date.
   * Default value: 
   */
  maxDateEnd?: string | Date;
  /**
   * Project, Task or Milestone min end date.
   * Default value: 
   */
  minDateEnd?: string | Date;
  /**
   * The minimum duration of the Project, Task or Milestone in miliseconds. The units can be changed via the durationUnit property.
   * Default value: 0
   */
  minDuration?: number | undefined;
  /**
   * The maximum duration of the Project, Task or Milestone in miliseconds. The unit can be changed via the durationUnit property.
   * Default value: 0
   */
  maxDuration?: number | undefined;
  /**
   * Determines whether the task is overdue it's deadline date or not. The property acts only as a getter. By default it's false, unless there's a deadline defined for the task and the dateEnd has surpassed the deadline date.
   * Default value: false
   */
  overdue?: boolean;
  /**
   * Determines the planned dateStart/dateEnd for as the baseline for the task.
   * Default value: undefined
   */
  planned?: GanttChartTaskPlanned;
  /**
   * Project, Task or Milestone progress.
   * Default value: 0
   */
  progress?: number;
  /**
   * Project, Task or Milestone resources.
   * Default value: 
   */
  resources?: any;
  /**
   * Determines the segments of a task. GanttChart items of type 'task' can be segmented into smaller pieces. This property stores the segment definitions. At least two segments need to be defined in order to segment a task. The first segment should start on the same date as the task. The Last segment should end on the same date as the task.
   * Default value: null
   */
  segments?: GanttChartTaskSegment[];
  /**
   * Project, Task or Milestone synchronized in the view.
   * Default value: false
   */
  synchronized?: boolean;
  /**
   * Project's tasks. Only projects can have tasks.
   * Default value: 
   */
  tasks?: any;
  /**
   * Project, Task or Milestone type. Possible values are 'project', 'milestone' and 'task'
   * Default value: task
   */
  type?: GanttChartTaskType | string;
  /**
   * Project, Task or Milestone value.
   * Default value: 
   */
  value?: any;
}

export interface GanttChartTaskIndicator {
  /**
   * Indicator label.
   * Default value: ""
   */
  label?: string;
  /**
   * Indicator date(can include time).
   * Default value: 
   */
  date?: string | Date;
  /**
   * A custom class name that can be applied to the indicator's element in order to apply some styling via CSS.
   * Default value: "null"
   */
  className?: string;
  /**
   * Represents the code for an icon that will be displayed infront of the indicator label inside the timeline.
   * Default value: "null"
   */
  icon?: string;
  /**
   * Determines the tooltip content for the indicator. By default indicators do not show tooltips when hovered.
   * Default value: "null"
   */
  tooltip?: string;
}

/**Determines the planned dateStart/dateEnd for as the baseline for the task. */
export interface GanttChartTaskPlanned {
  /**
   * Determines the planned dateStart of the task.
   * Default value: 
   */
  dateStart?: string | Date;
  /**
   * Determines the planned dateEnd of the task.
   * Default value: 
   */
  dateEnd?: string | Date;
  /**
   * Determines the planned duration of the task.
   * Default value: 0
   */
  duration?: number | undefined;
}

export interface GanttChartTaskSegment {
  /**
   * Segment label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Segment start date.
   * Default value: 
   */
  dateStart?: string | Date;
  /**
   * Segment end date.
   * Default value: 
   */
  dateEnd?: string | Date;
  /**
   * Determines whether segment dragging is disabled.
   * Default value: false
   */
  disableDrag?: boolean;
  /**
   * Determines whether segment resizing is disabled.
   * Default value: false
   */
  disableResize?: boolean;
  /**
   * The duration of a segment in miliseconds(unit). The duration unit can be changed via the durationUnit property.
   * Default value: 0
   */
  duration?: number | undefined;
  /**
   * Segment label format function.
   * Default value: null
   */
  formatFunction?: any;
}

export interface GanttChartTaskColumn {
  /**
   * Determines whether the task propery determined by column can be edited from the Window editor or not. By default editing is enabled.
   * Default value: false
   */
  disableEdit?: boolean;
  /**
   * Applies only to column's that display dates (e.g. dateStart/dateEnd, etc). This property allows to define a JS Intl.DateTimeFormat object in order to format the dates of the column. Here is an example value of the property: dateFormat: { year: '2-digit', month: 'long', day: 'numeric' }. Another option is to use a date format string. Built-in Date formats:// short date pattern'd' - 'M/d/yyyy',// long date pattern'D' - 'dddd, MMMM dd, yyyy',// short time pattern't' - 'h:mm tt',// long time pattern'T' - 'h:mm:ss tt',// long date, short time pattern'f' - 'dddd, MMMM dd, yyyy h:mm tt',// long date, long time pattern'F' - 'dddd, MMMM dd, yyyy h:mm:ss tt',// month/day pattern'M' - 'MMMM dd',// month/year pattern'Y' - 'yyyy MMMM',// S is a sortable format that does not vary by culture'S' - 'yyyy'-'MM'-'dd'T'HH':'mm':'ss'Date format strings:'d'-the day of the month;'dd'-the day of the month'ddd'-the abbreviated name of the day of the week'dddd'- the full name of the day of the week'h'-the hour, using a 12-hour clock from 1 to 12'hh'-the hour, using a 12-hour clock from 01 to 12'H'-the hour, using a 24-hour clock from 0 to 23'HH'- the hour, using a 24-hour clock from 00 to 23'm'-the minute, from 0 through 59'mm'-the minutes,from 00 though59'M'- the month, from 1 through 12'MM'- the month, from 01 through 12'MMM'-the abbreviated name of the month'MMMM'-the full name of the month's'-the second, from 0 through 59'ss'-the second, from 00 through 59't'- the first character of the AM/PM designator'tt'-the AM/PM designator'y'- the year, from 0 to 99'yy'- the year, from 00 to 99'yyy'-the year, with a minimum of three digits'yyyy'-the year as a four-digit number;'yyyyy'-the year as a four-digit number.
   * Default value: null
   */
  dateFormat?: any;
  /**
   * Applies only to column's that display numbers. This property allows to define a JS Intl.NumberFormat object in order to format the numbers of the column. Another option is to use a number format string. Number format strings: 'd' - decimal numbers.'f' - floating-point numbers.'n' - integer numbers.'c' - currency numbers.'p' - percentage numbers.For adding decimal places to the numbers, add a number after the formatting striFor example: 'c3' displays a number in this format $25.256
   * Default value: null
   */
  numberFormat?: any;
  /**
   * Column's label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Column's value.
   * Default value: 
   */
  value?: string | null;
  /**
   * Column's size.
   * Default value: 0
   */
  size?: string | number | null;
  /**
   * Column's min width.
   * Default value: 0
   */
  minWidth?: string | number | null;
  /**
   * Column's format function. You can use it to customize the column label's rendering.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * A function that allows to set a custom editor for the column's value in the Editor Window. The function must return an HTMLElement. The function has two arguments: name - the name of the task property that is going to be edited.value - the value of the task property that is going to be edited. It's also important to define a getCustomEditorValue to return the value from the custom editor.
   * Default value: null
   */
  customEditor?: any;
  /**
   * A function that is used in conjunction with customEditor allows to return the value of the custom editor. Since the editor is unknown by the element, this function allows to return the expected result from the editor. It has one argument - an HTMLElement that contains the custom editor that was previously defined by the customEditor function.
   * Default value: null
   */
  getCustomEditorValue?: any;
  /**
   * A function that is used in conjunction with customEditor allows to set the value of the custom editor. Since the editor is unknown by the element, this function allows to set the expected value to the editor. It has three arguments - editor - an HTMLElement that contains the custom editor that was previously defined by the customEditor function.columnValue - the value property of the column.value - the value of the task property that the column displays(the editor value).
   * Default value: null
   */
  setCustomEditorValue?: any;
}

/**Controls the visibility of tooltips throughout the application. When enabled, informative tooltips will appear for timeline tasks, resources, connections, indicators, and segments, providing users with additional context and details about each element. Disabling this option will hide all tooltips in these areas. */
export interface GanttChartTooltip {
  /**
   * Specifies whether an arrow should be displayed on the tooltip, indicating its point of attachment to the target element. If set to true, the tooltip will render an arrow; if false, the tooltip will appear without an arrow.
   * Default value: false
   */
  arrow?: boolean;
  /**
   * Specifies the amount of time, in milliseconds, to wait before displaying the tooltip after a triggering event (such as mouse hover or focus).
   * Default value: 50
   */
  delay?: number;
  /**
   * Determines whether tooltips are displayed. When enabled, informative tooltips will appear to provide additional context or guidance to users; when disabled, tooltips will not be shown.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Specifies the offset values, in pixels, to adjust the tooltip's position when it is displayed. The array follows the format [horizontalOffset, verticalOffset], where 'horizontalOffset' shifts the tooltip left or right, and 'verticalOffset' shifts it up or down relative to its default position.
   * Default value: 
   */
  offset?: number[];
}

declare global {
    interface Document {
        createElement(tagName: "smart-gantt-chart"): GanttChart;
        querySelector(selectors: "smart-gantt-chart"): GanttChart | null;
        querySelectorAll(selectors: "smart-gantt-chart"): NodeListOf<GanttChart>;
        getElementsByTagName(qualifiedName: "smart-gantt-chart"): HTMLCollectionOf<GanttChart>;
        getElementsByName(elementName: "smart-gantt-chart"): NodeListOf<GanttChart>;
    }
}

/**Specifies the category or format of items to be exported. This property defines what kind of data or objects will be included in the export process, helping to ensure the correct handling and organization of exported content. */
export declare type GanttChartDataExportItemType = 'task' | 'resource';
/**Specifies the display format for dates in the timeline header when the timeline is showing individual days. This setting controls how each day's date is presented (e.g., "MM/DD/YYYY", "Monday, Jan 1", etc.), ensuring that day labels in the header are clear and consistent with your application's requirements. */
export declare type GanttDayFormat = '2-digit' | 'numeric' | 'long' | 'short' | 'narrow';
/**Specifies the unit of measurement (such as seconds, minutes, hours, or days) used for the task's duration property. This defines how the duration value should be interpreted and ensures consistent handling of time-related data across the application. */
export declare type Duration = 'day' | 'hour' | 'minute' | 'second' | 'milisecond';
/**Specifies whether the horizontal scrollbar is visible, allowing users to scroll content horizontally when it exceeds the container’s width. */
export declare type HorizontalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Specifies the display format for dates shown as hours within the timeline header, controlling how hour values (e.g., "14:00", "2 PM", "14h") are presented to users. This setting ensures that the hour labels in the timeline header are formatted consistently according to your application's requirements. */
export declare type HourFormat = 'default' | '2-digit' | 'numeric';
/**Specifies the date format used for displaying months in the timeline header. This setting defines how month values appear, such as "Jan 2024" or "01/2024", ensuring consistent and customizable presentation of months within the timeline. */
export declare type MonthFormat = '2-digit' | 'numeric' | 'long' | 'short' | 'narrow';
/**Specifies the time interval granularity displayed in the Month view, such as whether events are shown by week, day, or custom periods. This setting adjusts how dates and events are grouped and visualized within the Month view of the calendar. */
export declare type MonthScale = 'day' | 'week';
/**Specifies the date format used to display quarter representations (e.g., "Q1 2024") in the timeline header. This setting controls how quarter periods are labeled, ensuring consistency and clarity in the timeline’s visual presentation. */
export declare type QuarterFormat = 'numeric' | 'long' | 'short';
/**Specifies the method used to display the resource's capacity within the resource timeline. By default, the capacity is shown in hours, but this may vary depending on the value of the element’s <b>view</b> property. This setting controls how capacity data is visually represented for each resource, ensuring that users see capacity information in a format appropriate to the current timeline view (such as hours, days, or custom intervals). */
export declare type GanttChartResourceTimelineMode = 'diagram' | 'histogram' | 'custom';
/**Specifies the layout and presentation of resources within the resource Timeline, controlling how individual resources are visually arranged, organized, and grouped for optimal clarity and user experience. */
export declare type GanttChartResourceTimelineView = 'hours' | 'tasks' | 'custom';
/**Defines or retrieves the selection mode for the component. This property is relevant only when the selection feature is enabled. It determines how users can select items (e.g., single, multiple), and has no effect if selection is disabled. */
export declare type GanttChartSelectionMode = 'one' | 'many' | 'extended';
/**Specifies whether the GanttChart allows sorting by a single column, multiple columns, or disallows column sorting entirely. This setting controls the user's ability to organize tasks in the chart by clicking on one or more column headers. */
export declare type GanttChartSortMode = 'none' | 'one' | 'many';
/**Project, Task or Milestone type. Possible values are 'project', 'milestone' and 'task' */
export declare type GanttChartTaskType = 'project' | 'milestone' | 'task';
/**Specifies whether the vertical scrollbar is displayed, allowing the user to scroll content vertically when necessary. */
export declare type VerticalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Specifies the date range displayed on the timeline. Accepted values include:<br/><br/><br/>day: The timeline displays all hours within a single day, allowing for detailed, intraday scheduling and review.
<br/>week: The timeline presents each day within a single week, providing a broader weekly overview.
<br/>month: The timeline shows individual days across an entire month, making it easy to view and manage monthly schedules.
<br/>year: The timeline displays each month of the year, providing a high-level annual perspective.
<br/>resource: The timeline groups and displays current tasks by the resources assigned to them. Tasks without an assigned resource are grouped under a special "Unassigned" category for easy identification.
<br/><br/><br/>The timeline features a header section that labels each cell according to its corresponding date or resource. This header is divided into two tiers (for example, months and days, or days and hours) to provide both summary and detailed information, enhancing clarity and context for users navigating the timeline. */
export declare type GanttChartView = 'day' | 'week' | 'month' | 'quarter' | 'year';
/**Specifies the display format for dates in the timeline header when they represent years. This setting controls how years are presented (e.g., "2024", "’24", or "Year 2024") to ensure consistency and clarity in the timeline header’s date representation. */
export declare type YearFormat = '2-digit' | 'numeric';
/**Specifies the display format for dates in the timeline header when the timeline view is set to show weeks. This setting controls how each week's date range or label appears, allowing customization of the week header’s date representation. */
export declare type WeekFormat = 'long' | 'numeric';

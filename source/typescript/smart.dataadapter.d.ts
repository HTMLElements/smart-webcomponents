export interface DataAdapter {
  /**
   * Determines whether data binding is performed automatically upon the creation of a data adapter instance. When enabled, the binding process will commence immediately after the adapter is initialized, eliminating the need for manual binding. This property can both retrieve the current automatic binding status and enable or disable it as needed.
   * Default value: true
   */
  autoBind?: boolean;
  /**
   * Sets or retrieves a value indicating whether the binding operation executes asynchronously. When set to true, the binding occurs asynchronously, allowing other operations to run without waiting for the binding to complete. When false, the binding is performed synchronously, blocking further execution until the process finishes.
   * Default value: false
   */
  async?: boolean;
  /**
   * Retrieves the data source object that has been successfully bound to the component after the data binding process is completed. This allows you to access the actual data being used by the component following the completion of data binding.
   * Default value: 
   */
  boundSource?: any[];
  /**
   * Retrieves the hierarchical data source object that has been successfully bound after the data binding operation is completed. This provides access to the structured data as it is used by the control.
   * Default value: 
   */
  boundHierarchy?: any[];
  /**
   * Specifies the name of the data field (such as 'children' or 'items') in the data source that contains nested child items. When this property is set, the dataAdapter will use the specified field to identify and traverse child elements within each item. If this field is present in an item, the dataAdapter recognizes the structure as hierarchical and automatically constructs a nested data source, enabling support for tree or multi-level data representations. You can use this property both to retrieve the current field name or to set a custom field name for your data structure.
   * Default value: ""
   */
  childrenDataField?: string;
  /**
   * Specifies one or more data fields to use for grouping records. When set, it groups the dataset by the provided field(s); when retrieved, it returns the current grouping field(s) in use. Accepts a string for a single field or an array of strings for multiple fields.
   * Default value: []
   */
  groupBy?: string[];
  /**
   * Specifies or retrieves the definitions of data fields for the loaded dataset, including both the field name and its data type. For example: ['id: number', 'firstName: string', 'lastName: string'] describes a dataset where "id" is a number, and "firstName" and "lastName" are strings. This property ensures that the structure and types of the incoming data are clearly defined.
   * Default value: string[]
   */
  dataFields?: string[];
  /**
   * Defines or retrieves the data source that the adapter uses to populate and manage its items. This property allows you to assign a new data collection to the adapter or obtain the current data set being used for rendering content.
   * Default value: []
   */
  dataSource?: any;
  /**
   * Specifies or retrieves the type of data source being used. This property can be set to define the data source type or accessed to determine the current type assigned.
   * Default value: array
   */
  dataSourceType?: DataAdapterDataSourceType | string;
  /**
   * Gets or sets the unique identifier (id) associated with the dataAdapter. This property is used to retrieve the current id or assign a new one to distinguish the dataAdapter instance.
   * Default value: ""
   */
  id?: string;
  /**
   * Specifies the data field that uniquely identifies each item in the dataset and is used to construct the hierarchical structure. This property should be used together with the parentDataField property, which defines the field that references the parent item's key. Typically, the key data field is an 'id' property that provides a unique identifier for each item, while the parent data field, such as 'parentId', indicates the identifier of the item's parent, allowing the hierarchy to be established. This property can both set and retrieve the current key data field.
   * Default value: ""
   */
  keyDataField?: string;
  /**
   * Retrieves the total number of items currently available in the data source.
   * Default value: 0
   */
  length?: number;
  /**
   * Sets or retrieves the type of HTTP request (such as GET, POST, PUT, or DELETE) being used."If you know the specific property or method this applies to, you can make it even more precise.
   * Default value: GET
   */
  method?: DataAdapterMethod | string;
  /**
   * Specifies or retrieves the name of the data field that represents the parent relationship when constructing a hierarchical structure. This property works in conjunction with the keyDataField property: keyDataField identifies each item's unique key (typically the 'id' field), while parentDataField identifies the parent reference (typically the 'parentId' field) within the data source. Together, these properties enable the correct linking of child items to their parent items within the hierarchy.
   * Default value: ""
   */
  parentDataField?: string;
  /**
   * Provides a getter or setter for the onExpand callback used with virtual data sources. This function is triggered when nodes are expanded and on-demand data loading is required in Tree or TreeGrid components that have the virtualDataSource property configured. It is used to fetch additional data dynamically as users expand tree nodes, ensuring efficient data loading and rendering for large data sets.
   * Default value: null
   */
  virtualDataSourceOnExpand?: DataAdapterVirtualDataSourceOnExpand[];
  /**
   * Specifies or retrieves the total number of items. Assign a value to indicate the known length; otherwise, if the length is unknown or cannot be determined, omit this parameter.
   * Default value: 0
   */
  virtualDataSourceLength?: number;
  /**
   * Gets or sets a boolean parameter that controls whether newly loaded data should be cached. If set to true, the data will be stored in the cache upon loading; if false, the data will not be cached.
   * Default value: true
   */
  virtualDataSourceCache?: boolean;
  /**
   * Defines or retrieves the function responsible for providing data to the virtual data source. When set, this function is called to dynamically fetch or generate the data items used by the component, enabling efficient handling of large or remote datasets through virtualization.
   * Default value: null
   */
  virtualDataSource?: DataAdapterVirtualDataSource[];
  /**
   * Creates and adds a new item to the collection. This action typically involves validating the input data, assigning a unique identifier to the item, and updating the collection to include the new entry.
   * @param {any} item. A new data source item.
   * @param {string | number} parentId?. id of a parent data item, when we want to add a child in a hierarchy
   */
  add(item: any, parentId?: string | number): void;
  /**
   * Removes all data from the adapter, resetting it to an empty state. This operation clears any items currently managed or displayed by the adapter, ensuring that subsequent queries reflect the absence of data.
   */
  clear(): void;
  /**
   * Removes any applied sorting from the data set, returning it to its original, unsorted order.
   */
  clearSort(): void;
  /**
   * Removes all active filters and restores the original, unfiltered data set.
   */
  clearFilter(): void;
  /**
   * Removes any applied grouping from the data set, restoring it to an ungrouped or default state. This action ensures that records are displayed without any organizational grouping criteria.
   */
  clearGroup(): void;
  /**
   * Binds the adapter component to its designated data source, ensuring that the displayed information remains synchronized with the underlying data. When the data source is remote (such as an external API or server), initiating a fresh AJAX request is required to retrieve the latest data and update the UI accordingly.
   */
  dataBind(): void;
  /**
   * Notifies the application whenever data is modified, including events such as adding new items, removing existing items, or updating the details of current items. This ensures that any changes to the data are detected and can trigger appropriate UI updates or other actions.
   * @param {any} callback. The callback function which is called when a change happened. { action: 'add' | 'bindingComplete' | 'removeLast' | 'remove' | 'move' | 'update' | 'insert', data: [], index?: number }
   */
  notify(callback: any): void;
  /**
   * The `find` method searches through the provided array and returns the value of the first element that satisfies the specified testing function. If no element meets the criteria defined in the function, `find` returns `undefined`. This method does not modify the original array and stops searching once a matching element is found.
   * @param {any} callback. Function to execute on each value in the array, taking 2 arguments - element and index. The element is the current item in the array. The index is the index of the current element.
   * @returns {any}
   */
  find(callback: any): any;
  /**
   * Filters the data source by applying specified criteria to return only the records that match the given conditions. This allows users to narrow down large datasets based on customizable parameters such as field values, ranges, or patterns.
   * @param {string[]} dataFields. The data fields.
   * @param {any} filterGroups. The filter group objects.
   */
  filter(dataFields: string[], filterGroups: any): void;
  /**
   * Filters and refines the data source by applying specified criteria, returning only the records that meet the defined conditions.
   * @param {string} dataField. The data field.
   * @param {string[]} filterExpessions. Filter expression like '= 5'. Allowed operators '=', '<','>','<>', '<=', '>=', 'starts with','contains','ends with', '', 'null'
   */
  filterBy(dataField: string, filterExpessions: string[]): void;
  /**
   * Retrieves the zero-based index position of a specified item within a collection or array. If the item is not found, the function typically returns -1.
   * @param {number} index. The index of the item.
   * @returns {any}
   */
  indexOf(index: number): any;
  /**
   * Adds a new item to the collection or array. If applicable, the function allows you to specify the item's content and the position at which it should be inserted. Existing elements may be shifted to accommodate the new item.
   * @param {number} index. The index where to insert the item.
   * @param {any} item. An object containing the values for the properties of the item that will be updated.
   */
  insert(index: number, item: any): void;
  /**
   * Moves a specified item from its current position to a new target location within the data structure or list. This action updates the item's index or parent container to reflect the move operation.
   * @param {number} from. The item's old index.
   * @param {number} to. The item's new index.
   */
  move(from: number, to: number): void;
  /**
   * Removes the last item from the data source array, reducing its length by one. Returns the removed item. If the data source is empty, no item is removed and undefined is returned.
   */
  removeLast(): void;
  /**
   * Removes the item located at the specified index within the collection or array, effectively shifting all subsequent items one position toward the start and reducing the total number of items by one.
   * @param {number} position. The index of the item to be removed.
   */
  removeAt(position: number): void;
  /**
   * Sorts the data source in a specified order, arranging its items based on defined sorting criteria such as one or more fields and the chosen sort direction (ascending or descending). This process organizes the data to facilitate easier access, analysis, or display according to the application's requirements.
   * @param {string[]} dataFields. The data fields.
   * @param {string[]} sortOrders. The sort orders array with 'asc' or 'desc' or null values.
   */
  sort(dataFields: string[], sortOrders: string[]): void;
  /**
   * Organizes the data source elements in a specified order, such as ascending or descending, based on one or more designated fields or criteria.
   * @param {string} dataField. The data field.
   * @param {string} dataType. The type of the data field - string, number, date, boolean.
   * @param {string} sortOrder. The sort order - 'asc' or 'desc' or null.
   */
  sortBy(dataField: string, dataType: string, sortOrder: string): void;
  /**
   * Aggregates and summarizes data retrieved from the specified data source by performing operations such as grouping, counting, summing, or averaging, to produce consolidated results for further analysis or display.
   * @param {any[]} summaryItems. The summary items. Each summary item represents a data field with summary function: 'avg' - Average aggregate, 'count' - Count aggregate, 'min' - Min aggregate, 'max' - Max aggregate, 'sum' - Sum aggregate, 'product' - Product aggregate, 'stdev' - Standard deviation on a sample., 'stdevp' - Standard deviation on an entire population., 'varp' - Variance on an entire population., 'var' - Variance on a sample.
   */
  summarize(summaryItems: any[]): void;
  /**
   * Returns an array containing all items present in the collection, including their complete data and properties. The array maintains the original order of items and includes every item, regardless of filters or previous queries.
   * @returns {any[]}
   */
  toArray(): any[];
  /**
   * Enhances an existing item within the specified element by updating its properties with new values provided in the request. This operation modifies only the targeted item, leaving other items within the element unchanged. Ensure that the correct item identifier is supplied to perform the update successfully.
   * @param {number} index. The index of the item to be updated.
   * @param {any} item. An object containing the values for the properties of the item that will be updated.
   */
  update(index: number, item: any): void;
}

export interface DataAdapterVirtualDataSourceOnExpand {
  /**
   * Result callback function which is executed when the data loading is completed.
   * Default value: null
   */
  resultCallbackFunction?: DataAdapterVirtualDataSourceOnExpandResultCallbackFunction;
  /**
   * Details of the object, which made the request
   * Default value: null
   */
  details?: DataAdapterVirtualDataSourceOnExpandDetails;
}

/**Result callback function which is executed when the data loading is completed. */
export interface DataAdapterVirtualDataSourceOnExpandResultCallbackFunction {
(
  /**
   * result callback function settings
   * Default value: null
   */
  settings?: any

): void;
}

/**Details of the object, which made the request */
export interface DataAdapterVirtualDataSourceOnExpandDetails {
  /**
   * Data start index.
   * Default value: 0
   */
  first?: number;
  /**
   * Data end index.
   * Default value: 0
   */
  last?: number;
  /**
   * Sorting information.
   * Default value: null
   */
  sorting?: DataAdapterVirtualDataSourceOnExpandDetailsSorting;
  /**
   * Filtering information.
   * Default value: null
   */
  filtering?: any;
  /**
   * Grouping information
   * Default value: []
   */
  grouping?: string[];
  /**
   * Request action type
   * Default value: undefined
   */
  action?: DataAdapterVirtualDataSourceOnExpandDetailsAction | string;
}

/**Sorting information. */
export interface DataAdapterVirtualDataSourceOnExpandDetailsSorting {
  /**
   * Sort order.
   * Default value: asc
   */
  sortOrder?: DataAdapterVirtualDataSourceOnExpandDetailsSortingSortOrder | string;
  /**
   * Sort index.
   * Default value: -1
   */
  sortIndex?: number;
}

export interface DataAdapterVirtualDataSource {
  /**
   * Result callback function which is executed when the data loading is completed.
   * Default value: null
   */
  resultCallbackFunction?: DataAdapterVirtualDataSourceResultCallbackFunction;
  /**
   * Details of the object, which made the request
   * Default value: null
   */
  details?: DataAdapterVirtualDataSourceDetails;
}

/**Result callback function which is executed when the data loading is completed. */
export interface DataAdapterVirtualDataSourceResultCallbackFunction {
(
  /**
   * result callback function settings
   * Default value: null
   */
  settings?: any

): void;
}

/**Details of the object, which made the request */
export interface DataAdapterVirtualDataSourceDetails {
  /**
   * Data start index.
   * Default value: 0
   */
  first?: number;
  /**
   * Data end index.
   * Default value: 0
   */
  last?: number;
  /**
   * Sorting information.
   * Default value: null
   */
  sorting?: any;
  /**
   * Filtering information.
   * Default value: null
   */
  filtering?: any;
  /**
   * Grouping information
   * Default value: []
   */
  grouping?: string[];
  /**
   * Request action type
   * Default value: undefined
   */
  action?: DataAdapterVirtualDataSourceDetailsAction | string;
  /**
   * Expanded Row when data is loaded on demand in Tree Hierarchy scenarios.
   * Default value: undefined
   */
  row?: any;
}
/**Specifies or retrieves the type of data source being used. This property can be set to define the data source type or accessed to determine the current type assigned. */
export declare type DataAdapterDataSourceType = 'array' | 'json' | 'xml' | 'csv' | 'tsv';
/**Sets or retrieves the type of HTTP request (such as GET, POST, PUT, or DELETE) being used."<br/><br/>If you know the specific property or method this applies to, you can make it even more precise. */
export declare type DataAdapterMethod = 'GET' | 'POST';
/**Sort order. */
export declare type DataAdapterVirtualDataSourceOnExpandDetailsSortingSortOrder = 'asc' | 'desc';
/**Request action type */
export declare type DataAdapterVirtualDataSourceOnExpandDetailsAction = 'sort' | 'filter' | 'dataBind' | 'scroll' | 'group' | 'expand' | 'pageIndexChange' | 'pageSizeChange';
/**Request action type */
export declare type DataAdapterVirtualDataSourceDetailsAction = 'sort' | 'filter' | 'dataBind' | 'scroll' | 'group' | 'expand' | 'pageIndexChange' | 'pageSizeChange';

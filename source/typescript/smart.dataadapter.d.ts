export interface DataAdapter {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets whether the binding is automatic after creating a data adapter instance.
   * Default value: true
   */
  autoBind?: boolean;
  /**
   * Sets or gets whether the binding is asynchronous.
   * Default value: false
   */
  async?: boolean;
  /**
   * Gets the bound data source after the binding is completed.
   * Default value: 
   */
  boundSource?: any[];
  /**
   * Gets the bound hierarchical data source after the binding is completed.
   * Default value: 
   */
  boundHierarchy?: any[];
  /**
   * Sets or gets a children data field like 'children', 'items' in the data source. When this property is set, the dataAdapter will look for this data field when looping through the items. If it is found a hierarchical data source would be created.
   * Default value: ""
   */
  childrenDataField?: string;
  /**
   * Sets or gets the data fields to group by.
   * Default value: []
   */
  groupBy?: string[];
  /**
   * Sets or gets the data fields which decribe the loaded data and data type. Ex: ['id: number', 'firstName: string', 'lastName: string']
   * Default value: string[]
   */
  dataFields?: string[];
  /**
   * Sets or gets the data source of the adapter.
   * Default value: []
   */
  dataSource?: any;
  /**
   * Sets or gets whether the data source type.
   * Default value: array
   */
  dataSourceType?: DataAdapterDataSourceType;
  /**
   * Sets or gets the dataAdapter's id
   * Default value: ""
   */
  id?: string;
  /**
   * Sets or gets the key data field to be used for building the hierarchy. It is used in combination with the parentDataField property. Usually the 'id' field is used as key data field and 'parentId' as parent data field'
   * Default value: ""
   */
  keyDataField?: string;
  /**
   * Gets the data source length.
   * Default value: 0
   */
  length?: number;
  /**
   * Sets or gets whether the request type.
   * Default value: GET
   */
  method?: DataAdapterMethod;
  /**
   * Sets or gets the parent data field to be used for building the hierarchy. It is used in combination with the keyDataField property. Usually the 'id' field is used as key data field and 'parentId' as parent data field'
   * Default value: ""
   */
  parentDataField?: string;
  /**
   * Sets or gets the virtual data source on expand function. This function is called when we load data on demand in Tree or TreeGrid and virtualDataSource in these components is set, too
   * Default value: null
   */
  virtualDataSourceOnExpand?: DataAdapterVirtualDataSourceOnExpand[];
  /**
   * Sets or gets the total length of items. If it is unknown, do not set this parameter.
   * Default value: 0
   */
  virtualDataSourceLength?: number;
  /**
   * Sets or gets a boolean param which determines whether to cache or not the new loaded data.
   * Default value: true
   */
  virtualDataSourceCache?: boolean;
  /**
   * Sets or gets the virtual data source function
   * Default value: null
   */
  virtualDataSource?: DataAdapterVirtualDataSource[];
  /**
   * Adds a new item.
   * @param {any} item. A new data source item.
   * @param {string | number} parentId?. id of a parent data item, when we want to add a child in a hierarchy
   */
  add(item: any, parentId?: string | number): void;
  /**
   * Clears the adapter.
   */
  clear(): void;
  /**
   * Clears the sorting.
   */
  clearSort(): void;
  /**
   * Clears the filters.
   */
  clearFilter(): void;
  /**
   * Clears the grouping.
   */
  clearGroup(): void;
  /**
   * Data binds the adapter to the data source. If the data source is remote, perform a new AJAX call.
   */
  dataBind(): void;
  /**
   * Notifies for data changes like adding, removing, updating items.
   * @param {any} callback. The callback function which is called when a change happened. { action: 'add' | 'bindingComplete' | 'removeLast' | 'remove' | 'move' | 'update' | 'insert', data: [], index?: number }
   */
  notify(callback: any): void;
  /**
   * The find method returns the value of the first element in the provided array that satisfies the provided testing function.
   * @param {any} callback. Function to execute on each value in the array, taking 2 arguments - element and index. The element is the current item in the array. The index is the index of the current element.
   * @returns {any}
   */
  find(callback: any): any;
  /**
   * Filters the data source.
   * @param {string[]} dataFields. The data fields.
   * @param {any} filterGroups. The filter group objects.
   */
  filter(dataFields: string[], filterGroups: any): void;
  /**
   * Filters the data source.
   * @param {string} dataField. The data field.
   * @param {string[]} filterExpessions. Filter expression like '= 5'. Allowed operators '=', '<','>','<>', '<=', '>=', 'starts with','contains','ends with', '', 'null'
   */
  filterBy(dataField: string, filterExpessions: string[]): void;
  /**
   * Gets the index of an item.
   * @param {number} index. The index of the item.
   * @returns {any}
   */
  indexOf(index: number): any;
  /**
   * Inserts an item.
   * @param {number} index. The index where to insert the item.
   * @param {any} item. An object containing the values for the properties of the item that will be updated.
   */
  insert(index: number, item: any): void;
  /**
   * Moves an item.
   * @param {number} from. The item's old index.
   * @param {number} to. The item's new index.
   */
  move(from: number, to: number): void;
  /**
   * Removes the last item from the data source.
   */
  removeLast(): void;
  /**
   * Removes an item at a specified index.
   * @param {number} position. The index of the item to be removed.
   */
  removeAt(position: number): void;
  /**
   * Sorts the data source.
   * @param {string[]} dataFields. The data fields.
   * @param {string[]} sortOrders. The sort orders array with 'asc' or 'desc' or null values.
   */
  sort(dataFields: string[], sortOrders: string[]): void;
  /**
   * Sorts the data source.
   * @param {string} dataField. The data field.
   * @param {string} dataType. The type of the data field - string, number, date, boolean.
   * @param {string} sortOrder. The sort order - 'asc' or 'desc' or null.
   */
  sortBy(dataField: string, dataType: string, sortOrder: string): void;
  /**
   * Aggregates data from the data source.
   * @param {any[]} summaryItems. The summary items. Each summary item represents a data field with summary function: 'avg' - Average aggregate, 'count' - Count aggregate, 'min' - Min aggregate, 'max' - Max aggregate, 'sum' - Sum aggregate, 'product' - Product aggregate, 'stdev' - Standard deviation on a sample., 'stdevp' - Standard deviation on an entire population., 'varp' - Variance on an entire population., 'var' - Variance on a sample.
   */
  summarize(summaryItems: any[]): void;
  /**
   * Returns an array of all items.
   * @returns {any[]}
   */
  toArray(): any[];
  /**
   * Updates an item from the element.
   * @param {number} index. The index of the item to be updated.
   * @param {any} item. An object containing the values for the properties of the item that will be updated.
   */
  update(index: number, item: any): void;
}

export interface DataAdapterVirtualDataSourceOnExpand {

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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
  action?: DataAdapterVirtualDataSourceOnExpandDetailsAction;
}

/**Sorting information. */
export interface DataAdapterVirtualDataSourceOnExpandDetailsSorting {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sort order.
   * Default value: asc
   */
  sortOrder?: DataAdapterVirtualDataSourceOnExpandDetailsSortingSortOrder;
  /**
   * Sort index.
   * Default value: -1
   */
  sortIndex?: number;
}

export interface DataAdapterVirtualDataSource {

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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
  sorting?: DataAdapterVirtualDataSourceDetailsSorting;
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
  action?: DataAdapterVirtualDataSourceDetailsAction;
}

/**Sorting information. */
export interface DataAdapterVirtualDataSourceDetailsSorting {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sort order.
   * Default value: asc
   */
  sortOrder?: DataAdapterVirtualDataSourceDetailsSortingSortOrder;
  /**
   * Sort index.
   * Default value: -1
   */
  sortIndex?: number;
}
/**Sets or gets whether the data source type. */
export declare type DataAdapterDataSourceType = 'array' | 'json' | 'xml' | 'csv' | 'tsv';
/**Sets or gets whether the request type. */
export declare type DataAdapterMethod = 'GET' | 'POST';
/**Sort order. */
export declare type DataAdapterVirtualDataSourceOnExpandDetailsSortingSortOrder = 'asc' | 'desc';
/**Request action type */
export declare type DataAdapterVirtualDataSourceOnExpandDetailsAction = 'sort' | 'filter' | 'dataBind' | 'scroll' | 'group' | 'expand' | 'pageIndexChange' | 'pageSizeChange';
/**Sort order. */
export declare type DataAdapterVirtualDataSourceDetailsSortingSortOrder = 'asc' | 'desc';
/**Request action type */
export declare type DataAdapterVirtualDataSourceDetailsAction = 'sort' | 'filter' | 'dataBind' | 'scroll' | 'group' | 'expand' | 'pageIndexChange' | 'pageSizeChange';

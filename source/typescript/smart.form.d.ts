import  {BaseElement, Animation} from "./smart.element"

export interface FormProperties {
  /**
   * Defines or retrieves the number of columns used to arrange form fields, determining how fields are organized and displayed within the form layout.
   * Default value: 1
   */
  columns?: number;
  /**
   * Gets or sets the collection of form controls associated with the form. This allows you to retrieve the current controls or update them with a new set of controls.
   * Default value: null
   */
  controls?: Control[];
  /**
   * Callback function invoked when the status changes. The status parameter passed to the function reflects the new state of the process, and can be one of the following string values: 'disabled', 'invalid', 'pending', or 'valid'. Use this callback to handle logic based on each specific status transition.
   * Default value: null
   */
  onStatusChanges?: {(value: string): void};
  /**
   * Callback function invoked when the form's value changes. Receives the updated form data as a JSON object argument, allowing you to handle or process the new values within your application.
   * Default value: null
   */
  onValueChanges?: {(value: any): void};
  /**
   * Defines or retrieves the position of the labels relative to their associated elements. Specify this property to control where labels are displayed (e.g., above, below, left, or right of the element).
   * Default value: left
   */
  labelPosition?: FormLabelPosition | string;
  /**
   * Sets all form fields to read-only mode, preventing users from modifying their input while still allowing them to view the existing data.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Controls the visibility of the colon character that appears after label text. When enabled, a colon is displayed after each label; when disabled, the colon is omitted.
   * Default value: false
   */
  showColonAfterLabel?: boolean;
  /**
   * Toggles the visibility of the validation summary, allowing users to display or hide a list of validation errors based on form input.
   * Default value: true
   */
  showSummary?: boolean;
  /**
   * Retrieves the current status of the Form. Each entry within the status object contains the following boolean properties: dirty (indicates if the form field has been modified), untouched (indicates if the field has not been focused by the user), and disabled (indicates if the field is currently disabled).
   * Default value: null
   */
  status?: any;
  /**
   * Retrieves or assigns the current value of the form. Use this property to access the form's data for processing or to update the form with new values programmatically.
   * Default value: null
   */
  value?: any;
  /**
   * Automatically triggers form validation immediately upon form initialization, ensuring that all form fields are checked for correctness as soon as the form is rendered or instantiated.
   * Default value: false
   */
  validateOnLoad?: boolean;
}
/**
 Reactive Form Component with Advanced Validation
*/
export interface Form extends BaseElement, FormProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Inserts a new control element, such as an input field, button, or checkbox, into the Form, allowing users to interact with and submit data.
   * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
   */
  addControl(controlOptions: any): void;
  /**
   * Retrieves a specific control element from the form using its name attribute, as defined by the dataField parameter. This method enables direct access to the control's properties and methods for further manipulation or data retrieval.
   * @param {string} dataField. dataField of a FormControl or FormGroup
   * @returns {Control}
   */
  getControl(dataField: string): Control;
  /**
   * Adds a new control element to the Form, allowing users to dynamically extend the form’s functionality. This method enables the inclusion of input fields, buttons, dropdowns, or other interactive components within the Form, ensuring seamless integration and consistent behavior with existing controls.
   * @param {number} index. Control insert index
   * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
   */
  insertControl(index: number, controlOptions: any): void;
  /**
   * Removes a specified control element from the Form, ensuring it is no longer rendered or managed as part of the Form's structure and behavior.
   * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
   */
  removeControl(controlOptions: any): void;
  /**
   * Triggers the submission of the form, sending the user-entered data to the specified server endpoint for processing. This action may also initiate form validation and execute any associated event handlers before transmitting the data.
   * @param {any} submitOptions?. Sets the submit options object. The object may have the following properties: <em>async</em>, <em>action</em>, <em>target</em>, <em>method</em>. <em>async</em> determines whether the form will be submitted asynchronously. <em>action</em> determines the submit url, <em>method</em> sets whether the submit is through 'GET' or 'POST'. <em>target</em> determines the submit target.
   */
  submit(submitOptions?: any): void;
  /**
   * Resets all fields in the form to their initial, default values, effectively clearing any user input or changes made.
   */
  reset(): void;
  /**
   * Performs comprehensive validation of the form fields, ensuring that all required inputs are provided, data types and formats are correct, and any specified constraints or validation rules are met before allowing form submission.
   */
  validate(): void;
}

export interface Control {
  /**
   * HTML Content displayed after the Form Control
   * Default value: ""
   */
  append?: string;
  /**
   * JSON object with initialization properties of the UI component. Example: { dataSource: ['item 1', 'item 2', 'item 3'] } will set the dataSource property of the Form control.
   * Default value: null
   */
  controlOptions?: any;
  /**
   * The type of the control.
   * Default value: input
   */
  controlType?: ControlControlType | string;
  /**
   * Sets the Form Group columns.
   * Default value: 1
   */
  columns?: number;
  /**
   * Sets the Form control column span.
   * Default value: 1
   */
  columnSpan?: number;
  /**
   * 
   * Default value: null
   */
  controls?: Control[];
  /**
   * Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Sets the Form control disabled mode.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Gets whether the Form control is 'dirty' i.e its value is changed by the user.
   * Default value: false
   */
  dirty?: boolean;
  /**
   * Gets or Sets the Form control's info icon's tooltip.
   * Default value: ""
   */
  info?: string;
  /**
   * Gets whether the Form control is invalid.
   * Default value: false
   */
  invalid?: boolean;
  /**
   * Gets or Sets the Form control's label.
   * Default value: ""
   */
  label?: string;
  /**
   * Gets or Sets the Form control's label position.
   * Default value: left
   */
  labelPosition?: ControlLabelPosition | string;
  /**
   * Gets or Sets the offset between the label and the control.
   * Default value: 10
   */
  labelOffset?: number;
  /**
   * FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set.
   * Default value: "left"
   */
  labelAlign?: string;
  /**
   * FormGroup only(when controlType is set to 'group'). Gets or Sets the next button label.
   * Default value: "Next"
   */
  nextButtonLabel?: string;
  /**
   * FormGroup only(when controlType is set to 'group'). Gets or Sets the back button label.
   * Default value: "Back"
   */
  backButtonLabel?: string;
  /**
   * HTML Content displayed before the Form Control
   * Default value: ""
   */
  prepend?: string;
  /**
   * Gets or Sets the Form control readonly mode.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Gets whether the Form control is not touched by the user. This flag is changed usually on blur, after the user interacted with the Form control
   * Default value: false
   */
  untouched?: boolean;
  /**
   * Gets or Sets the placeholder.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set.
   * Default value: false
   */
  showButtons?: boolean;
  /**
   * Sets or Gets the Form control or Form group value.
   * Default value: null
   */
  value?: any;
  /**
   * Gets whether the Form control is valid.
   * Default value: false
   */
  valid?: boolean;
  /**
   * Sets or gets the column's validation rules. The expected value is an Array of Objects. Each object should have a 'type' property that can be set to 'required', 'min', 'max', 'minLength', 'maxLength', 'email', 'null', 'requiredTrue', 'minData', 'maxDate', 'pattern'. The 'value' property should be set, too. For validation rule types 'required', 'requiredTrue' and 'null' you can skip the 'value' property. Optional property is 'message', which determines the error message.
   * Default value: null
   */
  validationRules?: [] | null;
  /**
   * FormGroup only(when controlType is set to 'group'). Gets or Sets the form'group view mode.
   * Default value: 
   */
  viewMode?: ControlViewMode | string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-form"): Form;
        querySelector(selectors: "smart-form"): Form | null;
        querySelectorAll(selectors: "smart-form"): NodeListOf<Form>;
        getElementsByTagName(qualifiedName: "smart-form"): HTMLCollectionOf<Form>;
        getElementsByName(elementName: "smart-form"): NodeListOf<Form>;
    }
}

/**The type of the control. */
export declare type ControlControlType = 'button' | 'boolean' | 'comboBox' | 'checkInput' | 'datetime' | 'dropDownList' | 'group' | 'input' | 'label' | 'multiInput' | 'multiComboInput' | 'mask' | 'number' | 'password' | 'radioButton' | 'submit' | 'textarea' | 'template';
/**Gets or Sets the Form control's label position. */
export declare type ControlLabelPosition = 'left' | 'top';
/**FormGroup only(when controlType is set to 'group'). Gets or Sets the form'group view mode. */
export declare type ControlViewMode = null | 'accordion' | 'tabs' | 'breadcrumb';
/**Defines or retrieves the position of the labels relative to their associated elements. Specify this property to control where labels are displayed (e.g., above, below, left, or right of the element). */
export declare type FormLabelPosition = 'left' | 'top';
export interface FormControlProperties {
  /**
   * Retrieves or assigns the action associated with the FormControl component. This property specifically applies when the 'controlType' is set to either 'button' or 'submit', determining the function or operation that will be executed when the control is activated (e.g., when the button is clicked or the form is submitted).
   * Default value: 
   */
  action?: FormControlAction | string;
  /**
   * Specifies or retrieves the alignment setting of the FormControl element, determining how the control is positioned within its parent container (e.g., left, right, center, or justified).
   * Default value: left
   */
  align?: FormControlAlign | string;
  /**
   *   "Specifies the HTML content that will appear immediately after the form control element. This allows you to display supplementary information, messages, or custom markup directly following the input field."
   * Default value: 
   */
  appendHTML?: any;
  /**
   * A JSON object containing configuration options for initializing the UI component. For example, providing { dataSource: ['item 1', 'item 2', 'item 3'] } assigns the specified array to the dataSource property of the Form control, defining the data items that will be displayed or used within the component. Use this object to specify properties such as data sources, default values, appearance settings, or behavior options for the UI element during its creation.
   * Default value: 
   */
  controlOptions?: any;
  /**
   * Specifies the type of user interface control (such as button, textbox, dropdown, etc.) represented by this component. This property determines the control's behavior and visual appearance.
   * Default value: input
   */
  controlType?: FormControlControlType | string;
  /**
   * Specifies the number of columns used to arrange the fields within the Form Group, determining how the form elements are organized and displayed in a grid layout.
   * Default value: 1
   */
  columns?: number;
  /**
   * Specifies the number of columns that the form control should span within a grid layout, allowing you to control the width of the form element across multiple columns.
   * Default value: 1
   */
  columnSpan?: number;
  /**
   * Specifies the data field associated with the form control. The value of dataField is assigned as the name attribute of the control's internal input element. Additionally, within the parent FormGroup, this form control can be accessed by referencing the same dataField value. This ensures seamless integration between the form control and the FormGroup’s data model.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Enables or disables the form control, determining whether users can interact with it. When set to disabled, the control will be grayed out and unresponsive to user input.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Returns a boolean indicating whether the Form control is 'dirty'—that is, whether the user has modified the control's value from its original (initial) value. This property helps determine if the input has been changed since the form was loaded or last reset.
   * Default value: false
   */
  dirty?: boolean;
  /**
   * Retrieves or defines the tooltip text that appears when a user hovers over the info icon associated with the Form control. This tooltip provides additional information or guidance about the form field for improved user experience.
   * Default value: ""
   */
  info?: string;
  /**
   * Determines if the Form control currently has validation errors, indicating that its input data does not meet the specified validation rules. Returns 'true' if the control is invalid; otherwise, returns 'false'.
   * Default value: false
   */
  invalid?: boolean;
  /**
   * Retrieves or assigns the label text displayed for the Form control, allowing you to specify or update the descriptive text shown to users.
   * Default value: ""
   */
  label?: string;
  /**
   * Retrieves or specifies the position of the label associated with the form control. This property determines where the label will be displayed relative to the form element (e.g., above, below, to the left, or to the right).
   * Default value: left
   */
  labelPosition?: FormControlLabelPosition | string;
  /**
   * Gets or sets the distance (in pixels) between the label and its associated control, allowing you to adjust the spacing for layout and visual alignment purposes.
   * Default value: 10
   */
  labelOffset?: number;
  /**
   * ''  *This property is applicable only when the controlType is set to 'group'. It determines whether the navigation buttons are shown within the FormGroup. The property takes effect only when the viewMode property is also configured. Use this setting to control the visibility of navigation controls for multi-step or grouped form layouts.*
   * Default value: left
   */
  labelAlign?: FormControlAlign | string;
  /**
   * Applies only when the controlType property is set to 'group'. Specifies the label text displayed on the "Next" button within a FormGroup, allowing you to get or set a custom label for navigation purposes.
   * Default value: "Next"
   */
  nextButtonLabel?: string;
  /**
   * ''  Available only when the controlType property is set to 'group' (i.e., for FormGroup controls). This property allows you to get or set the label displayed on the back button within the form group.
   * Default value: "Back"
   */
  backButtonLabel?: string;
  /**
   * Allows you to retrieve or specify the placeholder text displayed in the FormControl when the input field is empty. This placeholder provides a hint to users about the expected input.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * HTML content that appears visually above or before the form control element, typically used for introductory text, instructions, or contextual information. This content is rendered prior to the input field or interactive control in the layout.
   * Default value: 
   */
  prependHTML?: any;
  /**
   * Enables you to retrieve or assign the readonly state of the form control. When set to true, the form control becomes non-editable, preventing users from modifying its value while still allowing its content to be viewed.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines whether this field must be filled in by the user. When set to true, the field is required and validation will fail if it is left empty. When set to false, the field is optional. This property can be both retrieved (get) and updated (set).
   * Default value: false
   */
  required?: boolean;
  /**
   * Returns whether the Form control is in a "pristine" state, meaning it has not been interacted with or "touched" by the user. This property remains true until the user focuses on and then blurs (moves away from) the Form control, at which point it is set to false. It is commonly used to determine if the user has interacted with a form field since the component was initialized.
   * Default value: false
   */
  untouched?: boolean;
  /**
   * Gets or sets whether a colon character (:) is automatically displayed after the label text. When enabled, a colon will appear immediately following the label, typically to visually separate the label from the corresponding input field.
   * Default value: false
   */
  showColonAfterLabel?: boolean;
  /**
   * Applies only when controlType is set to 'group'. This property determines whether navigation buttons are shown within the FormGroup. It is effective only if the viewMode property is enabled. Use this property to control the visibility of navigation controls for grouped form elements in the specified view mode.
   * Default value: false
   */
  showButtons?: boolean;
  /**
   * Provides the ability to retrieve (get) or update (set) the current value of a FormControl or FormGroup. This allows you to read the form’s data or programmatically change its values as needed.
   * Default value: null
   */
  value?: any;
  /**
   * Determines whether the Form control currently satisfies all validation rules and is considered valid. Returns true if the control’s value passes all validation checks; otherwise, returns false.
   * Default value: false
   */
  valid?: boolean;
  /**
   * Sets or retrieves the column's validation rules. The value should be an array of objects, where each object defines a specific validation rule for the column. Each validation rule object must include:- A 'type' property, which specifies the type of validation. Valid values for 'type' include: ''required'', ''min'', ''max'', ''minLength'', ''maxLength'', ''email'', ''null'', ''requiredTrue'', ''minDate'', ''maxDate'', and ''pattern''.- A 'value' property, which provides the value used for the validation. For example, for 'minLength', 'value' might be '3', or for 'pattern', it could be a regular expression. Note: For validation types ''required'', ''requiredTrue'', and ''null'', the 'value' property can be omitted.Optionally, you can include a 'message' property to specify a custom error message that is shown when the validation fails.'Example:''''json[  { "type": "required", "message": "This field is mandatory." },  { "type": "minLength", "value": 3, "message": "Minimum 3 characters required." },  { "type": "pattern", "value": "^[A-Za-z]+$", "message": "Only letters are allowed." }]'''This structure allows you to define multiple validation rules for a column, each with its own type, constraints, and error message.
   * Default value: null
   */
  validationRules?: [] | null;
  /**
   * 'Applies only when controlType is set to 'group'. This property gets or sets the view mode of the form group, determining how the group of form controls is displayed and interacted with in the UI.'
   * Default value: 
   */
  viewMode?: FormControlViewMode | string;
}
/**
 Form Control
*/
export interface FormControl extends BaseElement, FormControlProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-form-control"): FormControl;
        querySelector(selectors: "smart-form-control"): FormControl | null;
        querySelectorAll(selectors: "smart-form-control"): NodeListOf<FormControl>;
        getElementsByTagName(qualifiedName: "smart-form-control"): HTMLCollectionOf<FormControl>;
        getElementsByName(elementName: "smart-form-control"): NodeListOf<FormControl>;
    }
}

/**Retrieves or assigns the action associated with the FormControl component. This property specifically applies when the 'controlType' is set to either 'button' or 'submit', determining the function or operation that will be executed when the control is activated (e.g., when the button is clicked or the form is submitted). */
export declare type FormControlAction = 'reset' | 'submit';
/**''  <br/>*This property is applicable only when the controlType is set to 'group'. It determines whether the navigation buttons are shown within the FormGroup. The property takes effect only when the viewMode property is also configured. Use this setting to control the visibility of navigation controls for multi-step or grouped form layouts.* */
export declare type FormControlAlign = 'left' | 'center' | 'right';
/**Specifies the type of user interface control (such as button, textbox, dropdown, etc.) represented by this component. This property determines the control's behavior and visual appearance. */
export declare type FormControlControlType = 'button' | 'boolean' | 'comboBox' | 'checkInput' | 'datetime' | 'dropDownList' | 'group' | 'input' | 'label' | 'multiInput' | 'multiComboInput' | 'mask' | 'number' | 'password' | 'radioButton' | 'submit' | 'textarea' | 'template';
/**Retrieves or specifies the position of the label associated with the form control. This property determines where the label will be displayed relative to the form element (e.g., above, below, to the left, or to the right). */
export declare type FormControlLabelPosition = 'left' | 'top';
/**<br/><br/>'Applies only when controlType is set to 'group'. This property gets or sets the view mode of the form group, determining how the group of form controls is displayed and interacted with in the UI.' */
export declare type FormControlViewMode = null | 'accordion' | 'tabs' | 'breadcrumb';
export interface FormGroupProperties {
  /**
   * Gets or sets the number of columns used to layout the form fields, allowing for multi-column form arrangements.
   * Default value: 1
   */
  columns?: number;
  /**
   * Defines the data field associated with the form control. The inner input element’s name attribute will be set to the specified dataField value, ensuring correct binding and form data serialization. Additionally, this value determines how the control is referenced within the FormGroup, making the form control’s value accessible via the dataField key in the form’s data model.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Retrieves or updates the text displayed as the label for the form control, allowing you to specify or modify the descriptive text shown to users alongside the input element.
   * Default value: ""
   */
  label?: string;
  /**
   * 
   * Default value: null
   */
  controls?: Control[];
  /**
   * A callback function that is invoked whenever the status changes. The function receives a single argument—a string representing the new status—which will be one of the following values: ''valid'', ''invalid'', ''disabled'', or ''pending''. Use this callback to implement custom behavior in response to status updates.
   * Default value: null
   */
  onStatusChanges?: {(value: string): void};
  /**
   * Callback function invoked whenever the form value changes. Receives the updated form data as a JSON object, allowing you to respond to or process the latest values.
   * Default value: null
   */
  onValueChanges?: {(value: any): void};
  /**
   * Specifies or retrieves the position of the labels relative to their associated element. This property can be used to define where labels are displayed, such as above, below, to the left, or to the right of the element.
   * Default value: left
   */
  labelPosition?: FormGroupLabelPosition | string;
  /**
   * Sets the form to read-only mode, preventing users from editing or modifying any of the input fields while still allowing them to view the current values.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Toggles the visibility of the colon character that appears immediately after label text, allowing you to choose whether or not a colon is displayed following each label.
   * Default value: false
   */
  showColonAfterLabel?: boolean;
  /**
   * Controls the visibility of the validation summary, allowing you to display or hide a summary of form validation errors to users.
   * Default value: true
   */
  showSummary?: boolean;
  /**
   * Retrieves the current value of the form or updates it with a new value. This property can be used to access the form's data or set it programmatically.
   * Default value: null
   */
  value?: any;
}
/**
 Form Group
*/
export interface FormGroup extends BaseElement, FormGroupProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Inserts a new input control (such as a text box, dropdown, or checkbox) into the Form, allowing users to provide or select additional information as part of their submission.
   * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
   */
  addControl(controlOptions: any): void;
  /**
   * Retrieves a specific control from the collection using its name, as specified by the dataField parameter. This function searches for a control whose name matches the provided dataField value and returns the corresponding control object, allowing you to access or manipulate its properties and methods.
   * @param {string} dataField. dataField of a FormControl or FormGroup
   * @returns {Control}
   */
  getControl(dataField: string): Control;
  /**
   * Adds a user interface control (such as a text box, dropdown, or button) to the specified Form, enabling users to input or interact with form data. This operation dynamically updates the Form’s layout and may include assigning default properties, event handlers, and positioning options for the new control.
   * @param {number} index. Control insert index
   * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
   */
  insertControl(index: number, controlOptions: any): void;
  /**
   * Removes a specified control element from the Form, effectively deleting it from the Form’s structure and user interface. This operation detaches the control, ensuring it is no longer available for user interaction or data capture. Use this action to dynamically update the Form’s contents based on user actions or application logic.
   * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
   */
  removeControl(controlOptions: any): void;
}

export interface Control {
  /**
   * HTML Content displayed after the Form Control
   * Default value: 
   */
  appendHTML?: any;
  /**
   * JSON object with initialization properties of the UI component. Example: { dataSource: ['item 1', 'item 2', 'item 3'] } will set the dataSource property of the Form control.
   * Default value: 
   */
  controlOptions?: any;
  /**
   * The type of the control.
   * Default value: input
   */
  controlType?: ControlControlType | string;
  /**
   * Sets the Form Group columns.
   * Default value: 1
   */
  columns?: number;
  /**
   * Sets the Form control column span.
   * Default value: 1
   */
  columnSpan?: number;
  /**
   * Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Sets the Form control disabled mode.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Gets whether the Form control is 'dirty' i.e its value is changed by the user.
   * Default value: false
   */
  dirty?: boolean;
  /**
   * Gets or Sets the Form control's info icon's tooltip.
   * Default value: ""
   */
  info?: string;
  /**
   * Gets whether the Form control is invalid.
   * Default value: false
   */
  invalid?: boolean;
  /**
   * Gets or Sets the Form control's label.
   * Default value: ""
   */
  label?: string;
  /**
   * Gets or Sets the Form control's label position.
   * Default value: left
   */
  labelPosition?: ControlLabelPosition | string;
  /**
   * Gets or Sets the offset between the label and the control.
   * Default value: 10
   */
  labelOffset?: number;
  /**
   * FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set.
   * Default value: "left"
   */
  labelAlign?: string;
  /**
   * FormGroup only(when controlType is set to 'group'). Gets or Sets the next button label.
   * Default value: "Next"
   */
  nextButtonLabel?: string;
  /**
   * FormGroup only(when controlType is set to 'group'). Gets or Sets the back button label.
   * Default value: "Back"
   */
  backButtonLabel?: string;
  /**
   * HTML Content displayed before the Form Control
   * Default value: 
   */
  prependHTML?: any;
  /**
   * Gets or Sets the Form control readonly mode.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Gets whether the Form control is not touched by the user. This flag is changed usually on blur, after the user interacted with the Form control
   * Default value: false
   */
  untouched?: boolean;
  /**
   * Gets or Sets whether colon is displayed after the label.
   * Default value: false
   */
  showColonAfterLabel?: boolean;
  /**
   * FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set.
   * Default value: false
   */
  showButtons?: boolean;
  /**
   * Sets or Gets the Form control or Form group value.
   * Default value: null
   */
  value?: any;
  /**
   * Gets whether the Form control is valid.
   * Default value: false
   */
  valid?: boolean;
  /**
   * Sets or gets the column's validation rules. The expected value is an Array of Objects. Each object should have a 'type' property that can be set to 'required', 'min', 'max', 'minLength', 'maxLength', 'email', 'null', 'requiredTrue', 'minData', 'maxDate', 'pattern'. The 'value' property should be set, too. For validation rule types 'required', 'requiredTrue' and 'null' you can skip the 'value' property. Optional property is 'message', which determines the error message.
   * Default value: null
   */
  validationRules?: [] | null;
  /**
   * FormGroup only(when controlType is set to 'group'). Gets or Sets the form'group view mode.
   * Default value: 
   */
  viewMode?: ControlViewMode | string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-form-group"): FormGroup;
        querySelector(selectors: "smart-form-group"): FormGroup | null;
        querySelectorAll(selectors: "smart-form-group"): NodeListOf<FormGroup>;
        getElementsByTagName(qualifiedName: "smart-form-group"): HTMLCollectionOf<FormGroup>;
        getElementsByName(elementName: "smart-form-group"): NodeListOf<FormGroup>;
    }
}

/**Specifies or retrieves the position of the labels relative to their associated element. This property can be used to define where labels are displayed, such as above, below, to the left, or to the right of the element. */
export declare type FormGroupLabelPosition = 'left' | 'top';

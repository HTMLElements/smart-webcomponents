import  {BaseElement, Animation} from "./smart.element"

export interface FormProperties {
  /**
   * Sets or gets the form columns.
   * Default value: 1
   */
  columns?: number;
  /**
   * Sets or gets the form controls.
   * Default value: null
   */
  controls?: Control[];
  /**
   * Callback function for handling status changes
   * Default value: null
   */
  onStatusChanges?: any;
  /**
   * Callback function for handling value changes
   * Default value: null
   */
  onValueChanges?: any;
  /**
   * Sets or Gets the labels position.
   * Default value: left
   */
  labelPosition?: FormLabelPosition;
  /**
   * Makes the form readonly.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Shows / hides the colon after the labels.
   * Default value: false
   */
  showColonAfterLabel?: boolean;
  /**
   * Shows / hides validation summary.
   * Default value: true
   */
  showSummary?: boolean;
  /**
   * Gets the Form's state. Each member in the state has { dirty, untouched, disabled } properties.
   * Default value: null
   */
  state?: any;
  /**
   * Gets or Sets the Form value.
   * Default value: null
   */
  value?: any;
}
/**
 Reactive Form Component with Advanced Validation
*/
export interface Form extends BaseElement, FormProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Adds a control to the Form.
   * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
   */
  addControl(controlOptions: any): void;
  /**
   * Gets a control by its name(dataField).
   * @param {string} dataField. dataField of a FormControl or FormGroup
   * @returns {Control}
   */
  getControl(dataField: string): Control;
  /**
   * Inserts a control to the Form.
   * @param {number} index. Control insert index
   * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
   */
  insertControl(index: number, controlOptions: any): void;
  /**
   * Remove a control from the Form.
   * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
   */
  removeControl(controlOptions: any): void;
  /**
   * Submits the form.
   * @param {any} submitOptions?. Sets the submit options object. The object may have the following properties: <em>async</em>, <em>action</em>, <em>target</em>, <em>method</em>. <em>async</em> determines whether the form will be submitted asynchronously. <em>action</em> determines the submit url, <em>method</em> sets whether the submit is through 'GET' or 'POST'. <em>target</em> determines the submit target.
   */
  submit(submitOptions?: any): void;
  /**
   * Clears the form.
   */
  reset(): void;
  /**
   * Validates the form.
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
  controlType?: ControlControlType;
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
  labelPosition?: ControlLabelPosition;
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
  viewMode?: ControlViewMode;
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
/**Sets or Gets the labels position. */
export declare type FormLabelPosition = 'left' | 'top';
export interface FormControlProperties {
  /**
   * Gets or Sets the FormControl Action. This property is used when the 'controlType' is 'button' or 'submit'
   * Default value: 
   */
  action?: FormControlAction;
  /**
   * Sets or Gets the alignment of the FormControl
   * Default value: left
   */
  align?: FormControlAlign;
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
  controlType?: FormControlControlType;
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
  labelPosition?: FormControlLabelPosition;
  /**
   * Gets or Sets the offset between the label and the control.
   * Default value: 10
   */
  labelOffset?: number;
  /**
   * FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set.
   * Default value: left
   */
  labelAlign?: FormControlAlign;
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
   * Gets or Sets the FormControl placeholder.
   * Default value: ""
   */
  placeholder?: string;
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
   * Gets or Sets whether this field is required.
   * Default value: false
   */
  required?: boolean;
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
  viewMode?: FormControlViewMode;
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

/**Gets or Sets the FormControl Action. This property is used when the 'controlType' is 'button' or 'submit' */
export declare type FormControlAction = 'reset' | 'submit';
/**FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set. */
export declare type FormControlAlign = 'left' | 'center' | 'right';
/**The type of the control. */
export declare type FormControlControlType = 'button' | 'boolean' | 'comboBox' | 'checkInput' | 'datetime' | 'dropDownList' | 'group' | 'input' | 'label' | 'multiInput' | 'multiComboInput' | 'mask' | 'number' | 'password' | 'radioButton' | 'submit' | 'textarea' | 'template';
/**Gets or Sets the Form control's label position. */
export declare type FormControlLabelPosition = 'left' | 'top';
/**FormGroup only(when controlType is set to 'group'). Gets or Sets the form'group view mode. */
export declare type FormControlViewMode = null | 'accordion' | 'tabs' | 'breadcrumb';
export interface FormGroupProperties {
  /**
   * Sets or gets the form columns.
   * Default value: 1
   */
  columns?: number;
  /**
   * 
   * Default value: null
   */
  controls?: Control[];
  /**
   * Callback function for handling status changes
   * Default value: null
   */
  onStatusChanges?: any;
  /**
   * Callback function for handling value changes
   * Default value: null
   */
  onValueChanges?: any;
  /**
   * Sets or Gets the labels position.
   * Default value: left
   */
  labelPosition?: FormGroupLabelPosition;
  /**
   * Makes the form readonly.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Shows / hides the colon after the labels.
   * Default value: false
   */
  showColonAfterLabel?: boolean;
  /**
   * Shows / hides validation summary.
   * Default value: true
   */
  showSummary?: boolean;
  /**
   * Gets or Sets the Form value.
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
   * Adds a control to the Form.
   * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
   */
  addControl(controlOptions: any): void;
  /**
   * Gets a control by its name(dataField).
   * @param {string} dataField. dataField of a FormControl or FormGroup
   * @returns {Control}
   */
  getControl(dataField: string): Control;
  /**
   * Inserts a control to the Form.
   * @param {number} index. Control insert index
   * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
   */
  insertControl(index: number, controlOptions: any): void;
  /**
   * Remove a control from the Form.
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
  controlType?: ControlControlType;
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
  labelPosition?: ControlLabelPosition;
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
  viewMode?: ControlViewMode;
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

/**Sets or Gets the labels position. */
export declare type FormGroupLabelPosition = 'left' | 'top';

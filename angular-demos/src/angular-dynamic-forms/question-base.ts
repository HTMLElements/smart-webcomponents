export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  password: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];

  constructor(options: {
      value!: T,
      key!: string,
      label!: string,
      password!: string,
      required!: boolean,
      order!: number,
      controlType!: string,
      type!: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.password = options.password || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
  }
}

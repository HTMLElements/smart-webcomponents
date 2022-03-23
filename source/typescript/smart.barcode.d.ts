import  {BaseElement, Animation} from "./smart.element"

export interface BarCodeProperties {
  /**
   * Sets the background color of the barcode element.
   * Default value: "white"
   */
  backgroundColor?: string;
  /**
   * Sets whether the barcode label is visible.
   * Default value: true
   */
  disaplyLabel?: boolean;
  /**
   * Sets the color of the barcode label.
   * Default value: "black"
   */
  labelCOlor?: string;
  /**
   * Sets the font family of the barcode label.
   * Default value: "monospace"
   */
  labelFont?: string;
  /**
   * Sets the font size of the barcode label.
   * Default value: 14
   */
  labelFontSize?: number;
  /**
   * Sets the bottom margin of the barcode label.
   * Default value: 5
   */
  labelMarginBottom?: number;
  /**
   * Sets the top margin of the barcode label.
   * Default value: 5
   */
  labelMarginTop?: number;
  /**
   * Sets the position of the barcode label.
   * Default value: bottom
   */
  labelPosition?: BarCodeLabelPosition;
  /**
   * Sets the color of the barcode lines.
   * Default value: "black"
   */
  lineColor?: string;
  /**
   * Sets the height of the barcode line.
   * Default value: 50
   */
  lineHeight?: number;
  /**
   * Sets the width of the barcode line.
   * Default value: 4
   */
  lineWidth?: number;
  /**
   * Sets the rendering mode of the barcode.
   * Default value: svg
   */
  renderAs?: BarCodeRenderAs;
  /**
   * Sets the barcode type
   * Default value: codabar
   */
  type?: BarCodeType;
  /**
   * Sets or gets the value of the barcode.
   * Default value: ""
   */
  value?: string;
}
/**
 Barcodes encodes text value in a specific pattern.
*/
export interface BarCode extends BaseElement, BarCodeProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the value of the barcode is invalid. 
	* @param event. The custom event. Custom data event was created with: ev.detail(value, invalidCharacters)
   *  value - the invalid value of the barcode.
   *  invalidCharacters - An array indicating the invalid characters.
   */
  onInvalid?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Exports the barcode.
   * @param {string} format. The format of the exported file - svg, png, jpg
   * @param {string} fileName?. The name of the exported file
   */
  export(format: string, fileName?: string): void;
  /**
   * Gets the base64 string of the barcode
   * @param {string} format. The dataURL format of the string - svg, png, jpg
   * @returns {string}
   */
  getDataURL(format: string): string;
  /**
   * Gets the base64 string of the barcode
   * @param {string} format. The dataURL format of the string - svg, png, jpg
   * @returns {any}
   */
  getDataURLAsync(format: string): any;
  /**
   * Gets the validity of the barcode
   * @returns {boolean}
   */
  isValid(): boolean;
}

declare global {
    interface Document {
        createElement(tagName: "smart-barcode"): BarCode;
        querySelector(selectors: "smart-barcode"): BarCode | null;
        querySelectorAll(selectors: "smart-barcode"): NodeListOf<BarCode>;
        getElementsByTagName(qualifiedName: "smart-barcode"): HTMLCollectionOf<BarCode>;
        getElementsByName(elementName: "smart-barcode"): NodeListOf<BarCode>;
    }
}

/**Sets the position of the barcode label. */
export declare type BarCodeLabelPosition = 'top' | 'bottom';
/**Sets the rendering mode of the barcode. */
export declare type BarCodeRenderAs = 'svg' | 'canvas';
/**Sets the barcode type */
export declare type BarCodeType = 'pharmacode' | 'codabar' | 'code128a' | 'code128b' | 'code128c' | 'msi' | 'msi10' | 'msi11' | 'msi1010' | 'msi1110' | 'ean13' | 'ean8' | 'code39' | 'code93';

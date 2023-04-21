import  {BaseElement, Animation} from "./smart.element"

export interface QRcodeProperties {
  /**
   * Sets the background color of the QR Code element.
   * Default value: "white"
   */
  backgroundColor?: string;
  /**
   * Sets whether the QR Code label is visible.
   * Default value: false
   */
  displayLabel?: boolean;
  /**
   * Sets an embedded image.
   * Default value: ""
   */
  embedImage?: string;
  /**
   * Sets the error correction level.
   * Default value: "H"
   */
  errorLevel?: string;
  /**
   * Sets color to the transparent parts of the embedded image. Background remains transparent if set to empty string.
   * Default value: ""
   */
  imageBackgroundColor?: string;
  /**
   * Sets the height of the embedded image.
   * Default value: 15
   */
  imageHeight?: number;
  /**
   * Sets the width of the embedded image.
   * Default value: 15
   */
  imageWidth?: number;
  /**
   * Sets the color of the QR Code label.
   * Default value: "black"
   */
  labelColor?: string;
  /**
   * Sets the font family of the QR Code label.
   * Default value: "monospace"
   */
  labelFont?: string;
  /**
   * Sets the font size of the QR Code label.
   * Default value: 14
   */
  labelFontSize?: number;
  /**
   * Sets the bottom margin of the QR Code label.
   * Default value: 5
   */
  labelMarginBottom?: number;
  /**
   * Sets the top margin of the QR Code label.
   * Default value: 5
   */
  labelMarginTop?: number;
  /**
   * Sets the position of the QR Code label.
   * Default value: bottom
   */
  labelPosition?: QRcodeLabelPosition | string;
  /**
   * Sets the color of the QR Code lines.
   * Default value: "black"
   */
  lineColor?: string;
  /**
   * Sets the width of the QR Code square.
   * Default value: 7
   */
  squareWidth?: number;
  /**
   * Sets the rendering mode of the QR Code.
   * Default value: svg
   */
  renderAs?: QRcodeRenderAs | string;
  /**
   * Sets or gets the value of the QR Code.
   * Default value: ""
   */
  value?: string;
  /**
   * Sets or gets the width of the QR Code. If the width is set to 0, the width of the QR Code is calculated automatically.
   * Default value: 0
   */
  width?: number;
  /**
   * Sets or gets the height of the QR Code. If the height is set to 0, the height of the QR Code is calculated automatically.
   * Default value: 0
   */
  height?: number;
}
/**
 QR Codes encode text values in a two-dimensional pattern.
*/
export interface QRcode extends BaseElement, QRcodeProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the value of the QR Code is invalid. 
	* @param event. The custom event. Custom data event was created with: ev.detail(invalidCharacters, lengthValidity, patternValidity, value)
   *  invalidCharacters - An array indicating the invalid characters.
   *  lengthValidity - A boolean indicating the length validity.
   *  patternValidity - A boolean indicating the pattern validity.
   *  value - the invalid value of the QR Code.
   */
  onInvalid?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Exports the QR Code.
   * @param {string} format. The format of the exported file - svg, png, jpg
   * @param {string} fileName?. The name of the exported file
   */
  export(format: string, fileName?: string): void;
  /**
   * Gets the base64 string of the QR Code
   * @param {string} format. The dataURL format of the string - svg, png, jpg
   * @returns {string}
   */
  getDataURL(format: string): string;
  /**
   * Gets the base64 string of the QR Code
   * @param {string} format. The dataURL format of the string - svg, png, jpg
   * @returns {any}
   */
  getDataURLAsync(format: string): any;
  /**
   * Gets the validity of the QR Code
   * @returns {boolean}
   */
  isValid(): boolean;
}

declare global {
    interface Document {
        createElement(tagName: "smart-qrcode"): QRcode;
        querySelector(selectors: "smart-qrcode"): QRcode | null;
        querySelectorAll(selectors: "smart-qrcode"): NodeListOf<QRcode>;
        getElementsByTagName(qualifiedName: "smart-qrcode"): HTMLCollectionOf<QRcode>;
        getElementsByName(elementName: "smart-qrcode"): NodeListOf<QRcode>;
    }
}

/**Sets the position of the QR Code label. */
export declare type QRcodeLabelPosition = 'top' | 'bottom';
/**Sets the rendering mode of the QR Code. */
export declare type QRcodeRenderAs = 'svg' | 'canvas';

import  {BaseElement, Animation} from "./smart.element"

export interface QRcodeProperties {
  /**
   * Specifies the background color applied to the QR Code element, determining the area behind the QR pattern. Accepts any valid CSS color value (e.g., hexadecimal, RGB, or color names). This setting allows you to customize the appearance of the QR Code to match your application's design.
   * Default value: "white"
   */
  backgroundColor?: string;
  /**
   * Determines whether the label associated with the QR Code is displayed to users. When enabled, the label will appear alongside the QR Code; when disabled, the label will be hidden.
   * Default value: false
   */
  displayLabel?: boolean;
  /**
   * Embeds an image directly within the file, allowing the image to be displayed without referencing an external URL. This ensures the image is self-contained and always available as part of the JSON data.
   * Default value: ""
   */
  embedImage?: string;
  /**
   * Specifies the degree of error correction to be applied, determining how much of the data can be recovered if the file or code is partially damaged or obscured. Higher error correction levels provide more robust data recovery but may increase the file size.
   * Default value: "H"
   */
  errorLevel?: string;
  /**
   * Specifies the color that will fill the transparent areas of the embedded image. If this property is set to an empty string, the transparent regions will remain fully transparent, allowing the background beneath the image to show through.
   * Default value: ""
   */
  imageBackgroundColor?: string;
  /**
   * Specifies the vertical dimension, in pixels or percentage, to display the embedded image. This determines how tall the image will appear within its container, regardless of its original size.
   * Default value: 15
   */
  imageHeight?: number;
  /**
   * Specifies the width, in pixels or other valid CSS units, for displaying the embedded image. This determines how wide the image will appear within its container on the webpage.
   * Default value: 15
   */
  imageWidth?: number;
  /**
   * Specifies the color used for the text label displayed below or alongside the QR Code. Accepts color values in standard formats such as hex codes (e.g., "#000000"), RGB, or named CSS colors.
   * Default value: "black"
   */
  labelColor?: string;
  /**
   * Specifies the font family to be used for displaying the QR code label text. This determines the typeface style (e.g., Arial, Verdana, 'Times New Roman') applied to the label beneath or beside the QR code.
   * Default value: "monospace"
   */
  labelFont?: string;
  /**
   * Specifies the font size used for the text label displayed below or alongside the QR code. Adjusting this value changes how large or small the label text appears relative to the QR code. Supports standard CSS size units (e.g., px, em, rem).
   * Default value: 14
   */
  labelFontSize?: number;
  /**
   * Specifies the amount of space (in pixels, ems, or other CSS units) added to the bottom of the QR Code label, effectively controlling the distance between the label and the elements below it.
   * Default value: 5
   */
  labelMarginBottom?: number;
  /**
   * Specifies the amount of space (in pixels or other CSS units) added to the top of the QR Code label, effectively controlling the distance between the label and any elements positioned above it.
   * Default value: 5
   */
  labelMarginTop?: number;
  /**
   * Specifies the placement of the label relative to the QR Code, such as positioning it above, below, to the left, or to the right of the QR Code. This property determines where the label will appear in relation to the generated QR Code image.
   * Default value: bottom
   */
  labelPosition?: QRcodeLabelPosition | string;
  /**
   * Specifies the color used for the QR Code’s foreground lines (modules or squares), determining how the QR Code pattern appears. Accepts color formats such as HEX, RGB, or named colors. The background color is not affected by this setting.
   * Default value: "black"
   */
  lineColor?: string;
  /**
   * Specifies the width of the generated QR Code, in pixels. This value determines the size of the QR Code square displayed on the page.
   * Default value: 7
   */
  squareWidth?: number;
  /**
   * Specifies the rendering method used to display the QR Code, such as SVG, Canvas, or Image. This determines how the QR Code is visually generated and presented in the application.
   * Default value: svg
   */
  renderAs?: QRcodeRenderAs | string;
  /**
   * Gets or sets the content encoded in the QR Code, such as a URL, text, or other data. Use this property to specify or retrieve the information that will be embedded within the generated QR Code.
   * Default value: ""
   */
  value?: string;
  /**
   * Specifies or retrieves the width of the QR Code in pixels. If set to 0, the width will be determined automatically based on the QR Code’s content and configuration, ensuring optimal sizing. Setting a specific positive value allows you to control the exact width of the generated QR Code.
   * Default value: 0
   */
  width?: number;
  /**
   * Specifies or retrieves the height of the QR code, in pixels. When a value of 0 is assigned, the component automatically calculates and sets the optimal height based on the content and other configuration options. Otherwise, the QR code is rendered with the specified height.
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
   * This event is triggered when the QR Code fails validation—specifically, when its decoded value does not meet the expected format, content requirements, or integrity checks. Developers can listen for this event to handle errors, display user feedback, or prompt for a new QR Code input.
	* @param event. The custom event. Custom data event was created with: ev.detail(invalidCharacters, lengthValidity, patternValidity, value)
   *  invalidCharacters - An array indicating the invalid characters.
   *  lengthValidity - A boolean indicating the length validity.
   *  patternValidity - A boolean indicating the pattern validity.
   *  value - the invalid value of the QR Code.
   */
  onInvalid?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Exports the generated QR Code image in a selected format, such as PNG or SVG, allowing users to download or save the QR Code for use in other applications.
   * @param {string} format. The format of the exported file - svg, png, jpg
   * @param {string} fileName?. The name of the exported file
   */
  export(format: string, fileName?: string): void;
  /**
   * Retrieves the QR Code as a base64-encoded string representation of the image, suitable for embedding directly in HTML or storing for later use.
   * @param {string} format. The dataURL format of the string - svg, png, jpg
   * @returns {string}
   */
  getDataURL(format: string): string;
  /**
   * Retrieves the QR code as a Base64-encoded string, allowing you to easily embed or transfer the QR code image in web pages, APIs, or data storage without handling image files directly.
   * @param {string} format. The dataURL format of the string - svg, png, jpg
   * @returns {any}
   */
  getDataURLAsync(format: string): any;
  /**
   * Retrieves and returns the current validity status of the QR Code, indicating whether the QR Code is active, expired, or invalid.
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

/**Specifies the placement of the label relative to the QR Code, such as positioning it above, below, to the left, or to the right of the QR Code. This property determines where the label will appear in relation to the generated QR Code image. */
export declare type QRcodeLabelPosition = 'top' | 'bottom';
/**Specifies the rendering method used to display the QR Code, such as SVG, Canvas, or Image. This determines how the QR Code is visually generated and presented in the application. */
export declare type QRcodeRenderAs = 'svg' | 'canvas';

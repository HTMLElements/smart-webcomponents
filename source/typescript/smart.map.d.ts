import  {BaseElement, Animation} from "./smart.element"

export interface MapProperties {
  /**
   * Before you start using the maps component, you need a project with a billing account and the Maps JavaScript API enabled.To learn more, see https://developers.google.com/maps/gmp-get-started.The API key is a unique identifier that authenticates requests associated with your project for usage and billing purposes. You must have at least one API key associated with your project.
   * Default value: "null"
   */
  apiKey?: string;
  /**
   * The query parameter defines the location the user wants to display on the map.The user can input different values for continents, country, city or address.
   * Default value: "null"
   */
  query?: string;
  /**
   * The mode property handles which mode for the map to be used.
   * Default value: "null"
   */
  mode?: string;
  /**
   * The 'map-type' property gives the user a set of options to choose from  in order to display certain type of map such as: place,view, streetview.
   * Default value: "null"
   */
  mapType?: string;
  /**
   * This property is defined when used with 'stretview' map type and it defines the horizontal orientation of the streetview panorama.
   * Default value: 210
   */
  heading?: number;
  /**
   * The  'pitch' property set the value of the vertical orientation('up' and 'down') which by defaault from Google Maps is horizontal.
   * Default value: 10
   */
  pitch?: number;
  /**
   * The zoom level of the camera determines the scale of the map. At larger zoom levels more detail can be seen on the screen, while at smaller zoom levels more of the world can be seen on the component.For example the following values show the approximate level of detail you can expect to see at eah zoom level( 1: World, 5: Landmas,10: City,15: Streets,20: Buildings )
   * Default value: 12
   */
  zoom?: number;
}
/**
 Our map component makes it easy for displaying map with defined location by user requireing a small piece of code.
*/
export interface Map extends BaseElement, MapProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-map"): Map;
        querySelector(selectors: "smart-map"): Map | null;
        querySelectorAll(selectors: "smart-map"): NodeListOf<Map>;
        getElementsByTagName(qualifiedName: "smart-map"): HTMLCollectionOf<Map>;
        getElementsByName(elementName: "smart-map"): NodeListOf<Map>;
    }
}


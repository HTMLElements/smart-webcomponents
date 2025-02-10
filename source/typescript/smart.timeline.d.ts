import  {BaseElement, Animation} from "./smart.element"

export interface TimelineProperties {
  /**
   * Sets or gets whether the Timeline is with auto width in horizontal mode. 
   * Default value: false
   */
  autoWidth?: boolean;
  /**
   * Sets or gets whether the items can be collapsed. 
   * Default value: true
   */
  collapsible?: boolean;
  /**
   * Sets or gets whether the Timeline is disabled. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets whether the Timeline is horizontal. 
   * Default value: false
   */
  horizontal?: boolean;
  /**
   * Sets or gets position. The possible values are 'near', 'far' and 'both'.
   * Default value: "both"
   */
  position?: string;
  /**
   * Sets or gets the items.  Each item should be an object. The object has the following properties: date: date, description: string, subtitle: string, css: string, dotCSS: string, title: string and icon: string. Example: [{ date: 'May 15, 2024', description: 'Flight: Reserving airline tickets', subtitle: 'May 15, 2024', title: 'Flight Reservation', icon: 'material-icons flight', dotCSS: '' }]
   * Default value: []
   */
  dataSource?: any[];
}
/**
 Displays a timeline with events.
*/
export interface Timeline extends BaseElement, TimelineProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Re-renders the timeline.
   * @returns {any}
   */
  render(): any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-timeline"): Timeline;
        querySelector(selectors: "smart-timeline"): Timeline | null;
        querySelectorAll(selectors: "smart-timeline"): NodeListOf<Timeline>;
        getElementsByTagName(qualifiedName: "smart-timeline"): HTMLCollectionOf<Timeline>;
        getElementsByName(elementName: "smart-timeline"): NodeListOf<Timeline>;
    }
}


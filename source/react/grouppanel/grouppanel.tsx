import React from "react";
import { GroupPanelProperties } from "./../../index";
import { Animation, GroupPanelCloseButtonPosition} from './../../index';
export { GroupPanelProperties } from "./../../index";
export { Animation, GroupPanelCloseButtonPosition} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface GroupPanelProps extends GroupPanelProperties {
    className?: string;
    style?: React.CSSProperties;

	onApply?: ((event?: Event) => void) | undefined;
	onCancel?: ((event?: Event) => void) | undefined;
	onCollapseAll?: ((event?: Event) => void) | undefined;
	onExpandAll?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Defines a group of grouped items in a panel.
*/
export class GroupPanel extends React.Component<React.HTMLAttributes<Element> & GroupPanelProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'GroupPanel' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
	*	Property type: Animation
	*/
	get animation(): Animation  {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** Sets or gets the the position of the close button of group panel items.
	*	Property type: GroupPanelCloseButtonPosition
	*/
	get closeButtonPosition(): GroupPanelCloseButtonPosition  {
		return this.nativeElement ? this.nativeElement.closeButtonPosition : undefined;
	}
	set closeButtonPosition(value: GroupPanelCloseButtonPosition) {
		if (this.nativeElement) {
			this.nativeElement.closeButtonPosition = value;
		}
	}

	/** Determines the data source that will be loaded to the group panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be grouped.dataType - the data type of the column to be grouped.groupIndex - the group order of columns. If this value is -1, the grouping will not be applied by this column initially.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied when grouping. Possible values: 'ascending' and 'descending'.
	*	Property type: {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[]
	*/
	get dataSource(): {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[]  {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[]) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Enables or disables the group panel.
	*	Property type: boolean
	*/
	get disabled(): boolean  {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disabled = value;
		}
	}

	/** Sets or gets the language. Used in conjunction with the property messages.
	*	Property type: string
	*/
	get locale(): string  {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		if (this.nativeElement) {
			this.nativeElement.locale = value;
		}
	}

	/** Callback used to customize the format of the messages that are returned from the Localization Module.
	*	Property type: any
	*/
	get localizeFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.localizeFormatFunction = value;
		}
	}

	/** Sets or gets the maximum number of columns to group by. If set to null, there is no limit.
	*	Property type: number
	*/
	get maxLevel(): number  {
		return this.nativeElement ? this.nativeElement.maxLevel : undefined;
	}
	set maxLevel(value: number) {
		if (this.nativeElement) {
			this.nativeElement.maxLevel = value;
		}
	}

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
	*	Property type: any
	*/
	get messages(): any  {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		if (this.nativeElement) {
			this.nativeElement.messages = value;
		}
	}

	/** If the element is readonly, users cannot interact with it.
	*	Property type: boolean
	*/
	get readonly(): boolean  {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.readonly = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
	*	Property type: boolean
	*/
	get rightToLeft(): boolean  {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.rightToLeft = value;
		}
	}

	/** If is set to true, the element cannot be focused.
	*	Property type: boolean
	*/
	get unfocusable(): boolean  {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.unfocusable = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","closeButtonPosition","dataSource","disabled","locale","localizeFormatFunction","maxLevel","messages","readonly","rightToLeft","unfocusable"];
	}
	/**  This event is triggered when the "Apply" button is clicked.
	*  @param event. The custom event. 	*/
	onApply?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the "Cancel" button is clicked.
	*  @param event. The custom event. 	*/
	onCancel?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the "Collapse all" button is clicked.
	*  @param event. The custom event. 	*/
	onCollapseAll?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the "Expand all" button is clicked.
	*  @param event. The custom event. 	*/
	onExpandAll?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onApply","onCancel","onCollapseAll","onExpandAll","onCreate","onReady"];
	}


	constructor(props: any) {
		super(props);
		this.componentRef = React.createRef();
	}

	componentDidRender(initialize: boolean) {
		const that = this;
		const props: any = {};
		const events: any = {};
		let styles: any = null;

		for(let prop in that.props) {
			if (prop === 'children') {
				continue;
			}

			if (prop === 'style') {
				styles = that.props[prop];
				continue;
			}

			if (prop.startsWith('on') && that.properties.indexOf(prop) === -1) {
				events[prop] = that.props[prop];
				continue;
			}

			props[prop] = that.props[prop];
		}

		if (initialize) {
			that.nativeElement = this.componentRef.current;
		}

		for(let prop in props) {
			if (prop === 'class') {
				const classNames = props[prop].trim().split(' ');

				for(let className in classNames) {
					if (!that.nativeElement.classList.contains(classNames[className]) && classNames[className] !== "") {
						that.nativeElement.classList.add(classNames[className]);
					}
				}

				continue;
			}

			if (props[prop] !== that.nativeElement[prop]) {
				const normalizeProp = (str: string) => {
					return str.replace(/-([a-z])/g, function (g) {
						return g[1].toUpperCase();
					});
				}

				if (prop === 'hover' || prop === 'active' || prop === 'focus' || prop === 'selected') {
					that.nativeElement.setAttribute(prop, '');
				}

				const normalizedProp = normalizeProp(prop);

				that.nativeElement[normalizedProp] = props[prop];
			}
		}

		
		for(let eventName in events) {
			that[eventName] = events[eventName];
			that.nativeElement[eventName.toLowerCase()] = events[eventName];
        }

		if (initialize) {
			if (that.onCreate) {
				that.onCreate();
			}

			that.nativeElement.whenRendered(() => {
				if (that.onReady) {
					that.onReady();
				}
			});
		}

		// setup styles.

		if (styles) {
			for(let styleName in styles) {
				that.nativeElement.style[styleName] = styles[styleName];
			}
		}
	}

	componentDidMount() {
		this.componentDidRender(true);
    }

	componentDidUpdate() {
		this.componentDidRender(false);
    }

	componentWillUnmount() {
		const that = this;

		if (!that.nativeElement) {
			return;
		}
		
		that.nativeElement.whenRenderedCallbacks = [];
		
		for(let i = 0; i < that.eventListeners.length; i++){
			const eventName = that.eventListeners[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-group-panel", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default GroupPanel;

import { Map } from './../index';
import { ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Map } from './../index';


@Directive({
	selector: 'smart-map, [smart-map]'
})

export class MapComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Map>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Map;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Map;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Map>document.createElement('smart-map');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Before you start using the maps component, you need a project with a billing account and the Maps JavaScript API enabled.To learn more, see https://developers.google.com/maps/gmp-get-started.The API key is a unique identifier that authenticates requests associated with your project for usage and billing purposes. You must have at least one API key associated with your project. */
	@Input()
	get apiKey(): string {
		return this.nativeElement ? this.nativeElement.apiKey : undefined;
	}
	set apiKey(value: string) {
		this.nativeElement ? this.nativeElement.apiKey = value : undefined;
	}

	/** @description The query parameter defines the location the user wants to display on the map.The user can input different values for continents, country, city or address. */
	@Input()
	get query(): string {
		return this.nativeElement ? this.nativeElement.query : undefined;
	}
	set query(value: string) {
		this.nativeElement ? this.nativeElement.query = value : undefined;
	}

	/** @description The mode property handles which mode for the map to be used. */
	@Input()
	get mode(): string {
		return this.nativeElement ? this.nativeElement.mode : undefined;
	}
	set mode(value: string) {
		this.nativeElement ? this.nativeElement.mode = value : undefined;
	}

	/** @description The 'map-type' property gives the user a set of options to choose from  in order to display certain type of map such as: place,view, streetview. */
	@Input()
	get mapType(): string {
		return this.nativeElement ? this.nativeElement.mapType : undefined;
	}
	set mapType(value: string) {
		this.nativeElement ? this.nativeElement.mapType = value : undefined;
	}

	/** @description This property is defined when used with 'stretview' map type and it defines the horizontal orientation of the streetview panorama. */
	@Input()
	get heading(): number {
		return this.nativeElement ? this.nativeElement.heading : undefined;
	}
	set heading(value: number) {
		this.nativeElement ? this.nativeElement.heading = value : undefined;
	}

	/** @description The  'pitch' property set the value of the vertical orientation('up' and 'down') which by defaault from Google Maps is horizontal. */
	@Input()
	get pitch(): number {
		return this.nativeElement ? this.nativeElement.pitch : undefined;
	}
	set pitch(value: number) {
		this.nativeElement ? this.nativeElement.pitch = value : undefined;
	}

	/** @description The zoom level of the camera determines the scale of the map. At larger zoom levels more detail can be seen on the screen, while at smaller zoom levels more of the world can be seen on the component.For example the following values show the approximate level of detail you can expect to see at eah zoom level( 1: World, 5: Landmas,10: City,15: Streets,20: Buildings ) */
	@Input()
	get zoom(): number {
		return this.nativeElement ? this.nativeElement.zoom : undefined;
	}
	set zoom(value: number) {
		this.nativeElement ? this.nativeElement.zoom = value : undefined;
	}


	get isRendered(): boolean {
		return this.nativeElement ? this.nativeElement.isRendered : false;
	}

	ngOnInit() {
	}

    ngAfterViewInit() {
      const that = this;

      that.onCreate.emit(that.nativeElement);

		Smart.Render();

		this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
	}

	ngOnDestroy() {	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.nativeElement && this.nativeElement.isRendered) {
			for (const propName in changes) {
				if (changes.hasOwnProperty(propName)) {
					this.nativeElement[propName] = changes[propName].currentValue;
				}
			}
		}
	}

}

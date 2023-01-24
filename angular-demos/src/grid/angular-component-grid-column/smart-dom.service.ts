import {
	Injectable,
	Injector,
	EmbeddedViewRef,
	ComponentFactoryResolver,
	ApplicationRef
} from '@angular/core';
@Injectable()
export class smartDomService {
	componentRef: any;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private appRef: ApplicationRef,
		private injector: Injector
	) { }

	loadComponent(component: any, ownerElement: any) {
		// 1. Create a component reference from the component 
		const componentRef = this.componentFactoryResolver
			.resolveComponentFactory(component)
			.create(this.injector, ownerElement);
		// 2. Attach component to the appRef so that it's inside the ng component tree
		this.appRef.attachView(componentRef.hostView);

		// 3. Get DOM element from component
		const domElement = (componentRef.hostView as EmbeddedViewRef<any>)
			.rootNodes[0] as HTMLElement;

		if (ownerElement) {
			ownerElement.appendChild(domElement);
		}

		this.componentRef = componentRef;

		return { componentRef: componentRef, domElement: domElement }
	}

	destroy() {
		this.appRef.detachView(this.componentRef.hostView);
		this.componentRef.destroy();
	}
}
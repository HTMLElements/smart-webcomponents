import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { BreadcrumbComponent } from 'smart-webcomponents-angular/breadcrumb';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CardComponent } from 'smart-webcomponents-angular/card';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('breadcrumb', { read: BreadcrumbComponent, static: false }) breadcrumb: BreadcrumbComponent;
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('card', { read: CardComponent, static: false }) card: CardComponent;

    breadcrumbDataSource: Array<object> = [
        {
            label: 'Shipping address',
            value: '0'
        },
        {
            label: 'Payment details',
            value: '1'
        },
        {
            label: 'Review your order',
            value: '2'
        }
    ];

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        const that = this;
        const card = that.card,
            breadcrumb = that.breadcrumb,
            prev = that.button,
            next = that.button2,
            placeOrder = that.button3;
        let page: number = 1;

        function updateLayout(page: number) {
            updateBreadcrumb(page);
            updateButtons(page);
            card.nativeElement.setAttribute('page', '' + page);
        }

        function updateBreadcrumb(page: number) {
            breadcrumb.nativeElement.setAttribute('step', '' + page);
        }

        function updateButtons(page: number) {
            const prevButton = prev.nativeElement,
                nextButton = next.nativeElement,
                placeOrderButton = placeOrder.nativeElement;

            switch (page) {
                case 1:
                    prevButton.classList.add('smart-hidden');
                    nextButton.classList.remove('smart-hidden');
                    placeOrderButton.classList.add('smart-hidden');
                    break;
                case 2:
                    prevButton.classList.remove('smart-hidden');
                    nextButton.classList.remove('smart-hidden');
                    placeOrderButton.classList.add('smart-hidden');
                    break;
                case 3:
                    prevButton.classList.remove('smart-hidden');
                    nextButton.classList.add('smart-hidden');
                    placeOrderButton.classList.remove('smart-hidden');
                    break;
                case 4:
                    prevButton.classList.add('smart-hidden');
                    nextButton.classList.add('smart-hidden');
                    placeOrderButton.classList.add('smart-hidden');
                    break;
            }
        }

        updateLayout(page);

        prev.addEventListener('click', function (): void {
            page = page <= 0 ? 0 : page - 1;
            updateLayout(page);
        });

        next.addEventListener('click', function (): void {
            page = page >= 3 ? 3 : page + 1;
            updateLayout(page);
        });

        placeOrder.addEventListener('click', function (): void {
            page = 4;
            updateLayout(page);
        });
    }
}
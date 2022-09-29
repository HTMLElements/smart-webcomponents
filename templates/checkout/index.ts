/// <reference path="../../source/typescript/smart.elements.d.ts" />

import { Breadcrumb } from "../../source/typescript/smart.elements";


window.onload = function () {
    const card = <HTMLElement>document.getElementById('card'),
        breadcrumb = <Breadcrumb>document.getElementById('breadcrumb'),
        prev = <HTMLElement>document.getElementById('prev'),
        next = <HTMLElement>document.getElementById('next'),
        placeOrder = <HTMLElement>document.getElementById('placeOrder');
    let page = 1;

    breadcrumb.dataSource = [
        {
            label: 'Shipping address',
            value:'0'
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

    updateLayout(page);


    prev.addEventListener('click', function () {
        page = page <= 0 ? 0 : page-1;
        updateLayout(page);
    });
    next.addEventListener('click', function () {
        page = page >= 3 ? 3 : page+1;
        updateLayout(page);
    });
    placeOrder.addEventListener('click', function () {
        page = 4;
        updateLayout(page);
    });


    function updateLayout(page: number){
        updateBreadcrumb(page);
        updateButtons(page);
        card.setAttribute('page', '' + page);
    }

    function updateBreadcrumb(page: number) {
        breadcrumb.step = page;
        breadcrumb.setAttribute('step', '' + page);
    }

    function updateButtons(page: number) {
        switch (page) {
            case 1:
                prev.classList.add('smart-hidden');
                next.classList.remove('smart-hidden');
                placeOrder.classList.add('smart-hidden');
                break;
            case 2:
                prev.classList.remove('smart-hidden');
                next.classList.remove('smart-hidden');
                placeOrder.classList.add('smart-hidden');
                break;
            case 3:
                prev.classList.remove('smart-hidden');
                next.classList.add('smart-hidden');
                placeOrder.classList.remove('smart-hidden');
                break;
            case 4:
                prev.classList.add('smart-hidden');
                next.classList.add('smart-hidden');
                placeOrder.classList.add('smart-hidden');
                break;
        }
    }
}
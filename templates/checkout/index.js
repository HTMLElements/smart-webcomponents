window.onload = function () {
    const card = document.getElementById('card'),
        breadcrumb = document.getElementById('breadcrumb'),
        prev = document.getElementById('prev'),
        next = document.getElementById('next'),
        placeOrder = document.getElementById('placeOrder');
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


    function updateLayout(page){
        updateBreadcrumb(page);
        updateButtons(page);
        card.setAttribute('page', page);
    }

    function updateBreadcrumb(page) {
        breadcrumb.step = page;
        breadcrumb.setAttribute('step', page);
    }

    function updateButtons(page) {
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
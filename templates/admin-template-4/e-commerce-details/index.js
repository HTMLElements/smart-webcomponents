window.initECommerceDetails = function () {
    const basePath = 'assets/images/',
        carousel = document.getElementById('carousel');
    carousel.dataSource = [
        {
            label1: 'Apple Watch Series 6',
            image1: `${basePath}products/1.png`,
            brand1: `Apple`,
            price1: '$359',
            label2: 'Apple Macbook Pro',
            image2: `${basePath}products/macbook-pro.png`,
            brand2: `Apple`,
            price2: '$1279',
            label3: 'Apple iPhone X',
            image3: `${basePath}products/iphone.png`,
            brand3: `Apple`,
            price3: '$679'
        },
        {
            label1: 'Apple Watch Series 6',
            image1: `${basePath}products/1.png`,
            brand1: `Apple`,
            price1: '$359',
            label2: 'Apple Macbook Pro',
            image2: `${basePath}products/macbook-pro.png`,
            brand2: `Apple`,
            price2: '$1279',
            label3: 'Apple iPhone X',
            image3: `${basePath}products/iphone-x.png`,
            brand3: `Apple`,
            price3: '$679'
        }, {
            label1: 'Apple Watch Series 6',
            image1: `${basePath}products/1.png`,
            brand1: `Apple`,
            price1: '$359',
            label2: 'Apple Macbook Pro',
            image2: `${basePath}products/macbook-pro.png`,
            brand2: `Apple`,
            price2: '$1279',
            label3: 'Apple iPhone X',
            image3: `${basePath}products/iphone.png`,
            brand3: `Apple`,
            price3: '$679'
        }
    ];
}
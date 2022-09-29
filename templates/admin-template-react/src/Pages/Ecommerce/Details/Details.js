import './Details.scss';

import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { RadioButton, Carousel } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function Details() {

    useEffect(() => { document.title = `E-commerce Details - ${defaultTitle}` }, []);

    const carouselDataSource = [
        {
            label1: 'Apple Watch Series 6',
            image1: `assets/images/products/1.png`,
            brand1: `Apple`,
            price1: '$359',
            label2: 'Apple Macbook Pro',
            image2: `assets/images/products/macbook-pro.png`,
            brand2: `Apple`,
            price2: '$1279',
            label3: 'Apple iPhone X',
            image3: `assets/images/products/iphone.png`,
            brand3: `Apple`,
            price3: '$679'
        },
        {
            label1: 'Apple Watch Series 6',
            image1: `assets/images/products/1.png`,
            brand1: `Apple`,
            price1: '$359',
            label2: 'Apple Macbook Pro',
            image2: `assets/images/products/macbook-pro.png`,
            brand2: `Apple`,
            price2: '$1279',
            label3: 'Apple iPhone X',
            image3: `assets/images/products/iphone-x.png`,
            brand3: `Apple`,
            price3: '$679'
        }, {
            label1: 'Apple Watch Series 6',
            image1: `assets/images/products/1.png`,
            brand1: `Apple`,
            price1: '$359',
            label2: 'Apple Macbook Pro',
            image2: `assets/images/products/macbook-pro.png`,
            brand2: `Apple`,
            price2: '$1279',
            label3: 'Apple iPhone X',
            image3: `assets/images/products/iphone.png`,
            brand3: `Apple`,
            price3: '$679'
        }
    ];

    return (
        <div className="container details">
            <div className="row">
                <div className="col-12 mb-3"><h4>Product Details</h4></div>
            </div>

            <div className="card product-details">
                <div className="card-body">
                    <div className="row my-2">
                        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center mb-2 mb-md-0">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src="assets/images/products/1.png" className="product-image img-fluid" alt="product" />
                            </div>
                        </div>

                        <div className="col-12 col-md-7">
                            <h4>Apple Watch Series 5</h4>
                            <span className="item-company">By <a href="#" className="text-primary">Apple</a></span>
                            <div className="d-flex flex-wrap mt-1">
                                <h4 className="text-primary mr-1">$499.99</h4>
                            </div>

                            <p>Available - <span className="text-success">In stock</span></p>

                            <p>
                                GPS, Always-On Retina display, 30% larger screen, Swimproof, ECG app, Electrical and optical heart sensors,
                                Built-in compass, Elevation, Emergency SOS, Fall Detection, S5 SiP with up to 2x faster 64-bit dual-core
                                processor, watchOS 6 with Activity trends, cycle tracking, hearing health innovations, and the App Store on
                                your wrist
                            </p>

                            <ul className="product-features list-unstyled">
                                <li>
                                    <i className="fas fa-shopping-basket"></i>
                                    <span>Free Shipping</span></li>
                                <li>
                                    <i className="fas fa-money-bill-alt"></i>
                                    <span>Cash on delivery</span>
                                </li>
                            </ul>
                            <hr />

                            <div>
                                <h6>Colors</h6>

                                <div>
                                    <RadioButton className="purple" checked></RadioButton>&nbsp;<RadioButton className="green"></RadioButton>&nbsp;<RadioButton className="red"></RadioButton>&nbsp;<RadioButton className="orange"></RadioButton>
                                </div>
                            </div>

                            <hr />
                            <div className="d-flex flex-column flex-sm-row pt-1">
                                <a href="#" className="btn btn-primary mr-0 mr-sm-2 mb-1 mb-sm-0">
                                    <i className="fas fa-shopping-basket mr-2"></i>
                                    <span>Add to cart</span>
                                </a>
                                <a href="#" className="btn btn-outline-secondary mb-1 mb-sm-0">
                                    <i className="fas fa-heart mr-2"></i>
                                    <span>Wishlist</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row text-center py-8">
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <div className="w-75 mx-auto">
                        <i className="fas fa-medal text-primary font-size-40px"></i>
                        <h4 className="mt-2 mb-1">100% Original</h4>
                        <p className="card-text">Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah.</p>
                    </div>
                </div>

                <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <div className="w-75 mx-auto">
                        <i className="fas fa-clock text-primary font-size-40px"></i>
                        <h4 className="mt-2 mb-1">10 Day Replacement</h4>
                        <p className="card-text">Marshmallow biscuit donut dragée fruitcake. Jujubes wafer cupcake.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <div className="w-75 mx-auto">
                        <i className="fas fa-shield-alt text-primary font-size-40px"></i>
                        <h4 className="mt-2 mb-1">1 Year Warranty</h4>
                        <p className="card-text">Cotton candy gingerbread cake I love sugar plum I love sweet croissant.</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h4 className="text-center mt-6 mb-7">Related products</h4>
                    <Carousel
                        id="carousel"
                        dataSource={carouselDataSource}
                        className="related-products-carousel slide slider-style-adaptive-height multi-items"
                        adaptive-height slideShow loop itemTemplate="itemTemplateMultiItems"
                    ></Carousel>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(Details)
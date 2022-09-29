import './Carousel.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';
import { Carousel } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function CarouselPage() {

    useEffect(() => { document.title = `Carousel - ${defaultTitle}` }, []);

    return (
        <div className="container carousel-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Carousel</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Slides only</h4>
                        </div>
                        <div className="card-body">
                            <Carousel autoPlay dataSource={[{ "image": "assets/images/travel/4.jpg" }, { "image": "assets/images/travel/5.jpg" }, { "image": "assets/images/travel/6.jpg" }]}
                                hideArrows
                                hideIndicators
                                interval={2000}
                                loop
                                slideShow
                            ></Carousel>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">With controls</h4>
                        </div>
                        <div className="card-body">
                            <Carousel
                                autoPlay
                                dataSource={[{ "image": "assets/images/travel/4.jpg" }, { "image": "assets/images/travel/5.jpg" }, { "image": "assets/images/travel/6.jpg" }]}
                                hideIndicators
                                interval={5000}
                                loop
                                slideShow></Carousel>
                        </div>
                    </div>
                </div>
            </div >
            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">With indicators</h4>
                        </div>
                        <div className="card-body">
                            <Carousel
                                autoPlay
                                dataSource={[{ "image": "assets/images/travel/4.jpg" }, { "image": "assets/images/travel/5.jpg" }, { "image": "assets/images/travel/6.jpg" }]}
                                interval={5000}
                                loop slideShow
                            ></Carousel>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">With captions</h4>
                        </div>
                        <div className="card-body">
                            <Carousel
                                id="carouselWithCaptions"
                                autoPlay
                                dataSource={[{ "image": "assets/images/travel/4.jpg", "label": "Photo 1" }, { "image": "assets/images/travel/5.jpg", "label": "Photo 2" }, { "image": "assets/images/travel/6.jpg", "label": "Photo 3" }]}
                                interval={5000}
                                loop
                                slideShow
                            ></Carousel>
                        </div>
                    </div>
                </div >
            </div >
            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Slide animation</h4>
                        </div>
                        <div className="card-body">
                            <Carousel
                                className="slide"
                                autoPlay
                                dataSource={[{ "image": "assets/images/travel/4.jpg" }, { "image": "assets/images/travel/5.jpg" }, { "image": "assets/images/travel/6.jpg" }]}
                                hideIndicators
                                interval={5000}
                                loop
                                slideShow
                            ></Carousel>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default withAnimation(CarouselPage)
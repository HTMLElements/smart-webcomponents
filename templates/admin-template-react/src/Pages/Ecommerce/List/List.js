import './List.scss';

import { useEffect } from 'react'

import withAnimation from '../../../hoc/withAnimation';

import { defaultTitle } from '../../../contexts/themeContext';

import { Button } from '../../../smartImports';

function List() {

    useEffect(() => { document.title = `E-commerce List - ${defaultTitle}` }, []);

    return (
        <div className="container e-commerce-list">
            <div className="row">
                <div className="col-12 mb-3"><h4>Products</h4></div>
            </div>

            <div className="card-x">
                <div className="card-body-x">
                    <div className="row my-2">
                        <div className="col-sm-6 col-md-4 col-xl-3 mb-5">
                            <div className="item rounded-xl overflow-hidden shadow border">
                                <div className="px-3 pt-6">
                                    <div className="image">
                                        <img alt="" className="image" src="assets/images/products/product-1.png" />
                                    </div>

                                    <div className="mt-6">
                                        <div className="row d-flex align-items-center mb-4">
                                            <div className="col-8 pr-0">
                                                <h6 className="text-primary mb-0 text-break-line-1">Apple Watch Series 5</h6>
                                            </div>
                                            <div className="col-4">
                                                <h5 className="text-right m-0">$19.99</h5>
                                            </div>
                                        </div>

                                        <p className="text-break-line-2">
                                            On Retina display that never sleeps, so it’s easy to see the time and other important information, without
                                            raising or tapping the display. New location features, from a built-in compass to current elevation, help users
                                            better navigate their day, while international emergency calling1 allows customers to call emergency services
                                            directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available
                                            in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.
                                        </p>
                                    </div>
                                </div>

                                <Button className="primary rounded-0 w-100"> <i className="fas fa-shopping-cart mr-2"></i> Move to cart</Button>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-xl-3 mb-5">
                            <div className="item rounded-xl overflow-hidden shadow border">
                                <div className="px-3 pt-6">
                                    <div className="image">
                                        <img alt="" className="image" src="assets/images/products/product-2.png" />
                                    </div>

                                    <div className="mt-6">
                                        <div className="row d-flex align-items-center mb-4">
                                            <div className="col-8 pr-0">
                                                <h6 className="text-primary mb-0 text-break-line-1">Apple iPhone 12 (64GB, Black)</h6>
                                            </div>
                                            <div className="col-4">
                                                <h5 className="text-right m-0">$379</h5>
                                            </div>
                                        </div>

                                        <p className="text-break-line-2">
                                            The Apple iPhone 12 is a great smartphone, which was loaded with a lot of quality features. It comes with a
                                            waterproof and dustproof body which is the key attraction of the device. The excellent set of cameras offer
                                            excellent images as well as capable of recording crisp videos. However, expandable storage and a fingerprint
                                            scanner would have made it a perfect option to go for around this price range.
                                        </p>
                                    </div>
                                </div>

                                <Button className="primary rounded-0 w-100"> <i className="fas fa-shopping-cart mr-2"></i> Move to cart</Button>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-xl-3 mb-5">
                            <div className="item rounded-xl overflow-hidden shadow border">
                                <div className="px-3 pt-6">
                                    <div className="image">
                                        <img alt="" className="image" src="assets/images/products/product-3.png" />
                                    </div>

                                    <div className="mt-6">
                                        <div className="row d-flex align-items-center mb-4">
                                            <div className="col-8 pr-0">
                                                <h6 className="text-primary mb-0 text-break-line-1">Apple iMac 27-inch</h6>
                                            </div>
                                            <div className="col-4">
                                                <h5 className="text-right m-0">$2999</h5>
                                            </div>
                                        </div>

                                        <p className="text-break-line-2">
                                            The all-in-one for all. If you can dream it, you can do it on iMac. It’s beautifully & incredibly intuitive and packed with tools that let you take any idea to the next level. And the new 27-inch model elevates the experience in way, with faster processors and graphics, expanded memory and storage, enhanced audio and video capabilities, and an even more stunning Retina 5K display. It’s the desktop that does it all — better and faster than ever.
                                        </p>
                                    </div>
                                </div>

                                <Button className="primary rounded-0 w-100"> <i className="fas fa-shopping-cart mr-2"></i> Move to cart</Button>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-xl-3 mb-5">
                            <div className="item rounded-xl overflow-hidden shadow border">
                                <div className="px-3 pt-6">
                                    <div className="image">
                                        <img alt="" className="image" src="assets/images/products/product-4.png" />
                                    </div>

                                    <div className="mt-6">
                                        <div className="row d-flex align-items-center mb-4">
                                            <div className="col-8 pr-0">
                                                <h6 className="text-primary mb-0 text-break-line-1">OneOdio A71 Wired</h6>
                                            </div>
                                            <div className="col-4">
                                                <h5 className="text-right m-0">$599</h5>
                                            </div>
                                        </div>

                                        <p className="text-break-line-2">
                                            Omnidirectional detachable boom mic upgrades the headphones into a professional headset for gaming, business, podcasting and taking calls on the go. Better pick up your voice. Control most electric devices through voice activation, or schedule a ride with Uber and order a pizza. OneOdio A71 Wired Headphones voice-controlled device turns any home into a smart device on a smartphone or tablet.
                                        </p>
                                    </div>
                                </div>

                                <Button className="primary rounded-0 w-100"> <i className="fas fa-shopping-cart mr-2"></i> Move to cart</Button>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-xl-3 mb-5">
                            <div className="item rounded-xl overflow-hidden shadow border">
                                <div className="px-3 pt-6">
                                    <div className="image">
                                        <img alt="" className="image" src="assets/images/products/product-5.png" />
                                    </div>

                                    <div className="mt-6">
                                        <div className="row d-flex align-items-center mb-4">
                                            <div className="col-8 pr-0">
                                                <h6 className="text-primary mb-0 text-break-line-1">Apple - MacBook Air® (Latest Model) - 13.3" Display - Silver</h6>
                                            </div>
                                            <div className="col-4">
                                                <h5 className="text-right m-0">$649</h5>
                                            </div>
                                        </div>

                                        <p className="text-break-line-2">
                                            MacBook Air is a thin, lightweight laptop from Apple. MacBook Air features up to 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.1 Its thin, light, and durable enough to take everywhere you go-and powerful enough to do everything once you get there, better.
                                        </p>
                                    </div>
                                </div>

                                <Button className="primary rounded-0 w-100"> <i className="fas fa-shopping-cart mr-2"></i> Move to cart</Button>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-xl-3 mb-5">
                            <div className="item rounded-xl overflow-hidden shadow border">
                                <div className="px-3 pt-6">
                                    <div className="image">
                                        <img alt="" className="image" src="assets/images/products/product-6.png" />
                                    </div>

                                    <div className="mt-6">
                                        <div className="row d-flex align-items-center mb-4">
                                            <div className="col-8 pr-0">
                                                <h6 className="text-primary mb-0 text-break-line-1">Switch Pro Controller</h6>
                                            </div>
                                            <div className="col-4">
                                                <h5 className="text-right m-0">$99.99</h5>
                                            </div>
                                        </div>

                                        <p className="text-break-line-2">
                                            The Nintendo Switch Pro Controller is one of the priciest "baseline" controllers in the current console generation, but it's also sturdy, feels good to play with, has an excellent direction pad, and features impressive motion sensors and vibration systems. On top of all of that, it uses Bluetooth, so you don't need an adapter to use it with your PC.
                                        </p>
                                    </div>
                                </div>

                                <Button className="primary rounded-0 w-100"> <i className="fas fa-shopping-cart mr-2"></i> Move to cart</Button>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-xl-3 mb-5">
                            <div className="item rounded-xl overflow-hidden shadow border">
                                <div className="px-3 pt-6">
                                    <div className="image">
                                        <img alt="" className="image" src="assets/images/products/product-7.png" />
                                    </div>

                                    <div className="mt-6">
                                        <div className="row d-flex align-items-center mb-4">
                                            <div className="col-8 pr-0">
                                                <h6 className="text-primary mb-0 text-break-line-1">Google - Google Home - White/Slate fabric</h6>
                                            </div>
                                            <div className="col-4">
                                                <h5 className="text-right m-0">$39.99</h5>
                                            </div>
                                        </div>

                                        <p className="text-break-line-2">
                                            Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant. Use voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is compatible with Android and iOS operating systems, and can control compatible smart devices such as Chromecast or Nest.
                                        </p>
                                    </div>
                                </div>

                                <Button className="primary rounded-0 w-100"> <i className="fas fa-shopping-cart mr-2"></i> Move to cart</Button>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-xl-3 mb-5">
                            <div className="item rounded-xl overflow-hidden shadow border">
                                <div className="px-3 pt-6">
                                    <div className="image">
                                        <img alt="" className="image" src="assets/images/products/product-8.png" />
                                    </div>

                                    <div className="mt-6">
                                        <div className="row d-flex align-items-center mb-4">
                                            <div className="col-8 pr-0">
                                                <h6 className="text-primary mb-0 text-break-line-1">Sony 4K Ultra HD LED TV</h6>
                                            </div>
                                            <div className="col-4">
                                                <h5 className="text-right m-0">$3199</h5>
                                            </div>
                                        </div>

                                        <p className="text-break-line-2">
                                            Sony 4K Ultra HD LED TV has 4K HDR Support. The TV provides clear visuals and provides distinct sound quality and an immersive experience. This TV has Yes HDMI ports & Yes USB ports. Connectivity options included are HDMI. You can connect various gadgets such as your laptop using the HDMI port. The TV comes with a 1 Year warranty.
                                        </p>
                                    </div>
                                </div>

                                <Button className="primary rounded-0 w-100"> <i className="fas fa-shopping-cart mr-2"></i> Move to cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(List)
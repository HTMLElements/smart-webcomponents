import './Toasts.scss';
import { useEffect, useRef } from 'react';

import withAnimation from '../../../hoc/withAnimation';
import { Toast, Button } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function Toasts() {

    const toastsRef = useRef([]);

    useEffect(() => {

        document.title = `Toasts - ${defaultTitle}`;
        
        toastsRef.current.forEach(toast => {
            
            toast.closeAll();
            toast.open();

        })

    }, []);

    return (
        <div className="container toasts-page">
            <div className="row">
                <div className="col-12 mb-3">
                    <h4>Toasts</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Toast with icon</h4>
                        </div>
                        <div className="card-body">
                            <div id="toastWithIconContainer" className="toast-container">
                                <Toast
                                    ref={el => toastsRef.current[0] = el}
                                    position="top-left"
                                    autoOpen
                                    showCloseButton
                                    appendTo="toastWithIconContainer"
                                    type="info"
                                    className="bootstrap"
                                ><b>An info toast!</b></Toast>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Toast with no icon</h4>
                        </div>
                        <div className="card-body">
                            <div id="toastWithNoIconContainer" className="toast-container">
                                <Toast
                                    ref={el => toastsRef.current[1] = el}
                                    position="top-left"
                                    autoOpen
                                    showCloseButton
                                    appendTo="toastWithNoIconContainer"
                                    type="info"
                                    className="bootstrap"
                                ><b>An info toast!</b>
                                </Toast>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Toasts with large content</h4>
                        </div>
                        <div className="card-body">
                            <div id="toastWithLargeContentContainer" className="toast-container">
                                <Toast
                                    ref={el => toastsRef.current[2] = el}
                                    position="top-left"
                                    autoOpen
                                    showCloseButton
                                    appendTo="toastWithLargeContentContainer"
                                    type="mail"
                                    className="bootstrap"
                                >
                                    <h3>Hello!</h3>
                                    <p>Sed finibus libero mi. Cras convallis nibh ultrices leo tincidunt efficitur. Aliquam
                                        vehicula
                                        iaculis nisl, at fringilla nisi bibendum id. Praesent efficitur leo ante, eget.</p>
                                    <hr />
                                    <p>Nulla at molestie nulla. Quisque aliquam diam eget lectus consectetur placerat. Maecenas
                                        sagittis massa semper.</p>
                                </Toast>
                                <Toast
                                    ref={el => toastsRef.current[3] = el}
                                    position="top-left"
                                    autoOpen
                                    showCloseButton
                                    appendTo="toastWithLargeContentContainer"
                                    type="success"
                                    className="bootstrap"
                                >
                                    <h3>Hello!</h3>
                                    <p>Sed finibus libero mi. Cras convallis nibh ultrices leo tincidunt efficitur. Aliquam
                                        vehicula
                                        iaculis nisl, at fringilla nisi bibendum id. Praesent efficitur leo ante, eget.</p>
                                    <hr />
                                    <p>Nulla at molestie nulla. Quisque aliquam diam eget lectus consectetur placerat. Maecenas
                                        sagittis massa semper.</p>
                                </Toast>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Toasts with buttons</h4>
                        </div>
                        <div className="card-body">
                            <div id="toastWithButtonsContainer" className="toast-container">
                                <Toast
                                    ref={el => toastsRef.current[4] = el}
                                    position="top-left"
                                    autoOpen
                                    showCloseButton
                                    appendTo="toastWithButtonsContainer"
                                    type="mail"
                                    className="bootstrap"
                                >
                                    <h3>Hello!</h3>
                                    <p>Sed finibus libero mi. Cras convallis nibh ultrices leo tincidunt efficitur. Aliquam
                                        vehicula
                                        iaculis nisl, at fringilla nisi bibendum id. Praesent efficitur leo ante, eget.</p>
                                    <hr />
                                    <p>
                                        <Button className="small-button">OK</Button>
                                        <Button className="small-button">Dismiss</Button>
                                    </p>
                                </Toast>
                                <Toast
                                    ref={el => toastsRef.current[5] = el}
                                    position="top-left"
                                    autoOpen
                                    showCloseButton
                                    appendTo="toastWithButtonsContainer"
                                    type="success"
                                    className="bootstrap"
                                >
                                    <h3>Hello!</h3>
                                    <p>Sed finibus libero mi. Cras convallis nibh ultrices leo tincidunt efficitur. Aliquam
                                        vehicula
                                        iaculis nisl, at fringilla nisi bibendum id. Praesent efficitur leo ante, eget.</p>
                                    <hr />
                                    <p>
                                        <Button className="small-button primary">OK</Button>
                                        <Button className="small-button secondary">Dismiss</Button>
                                    </p>
                                </Toast>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(Toasts)
import { useEffect, useRef } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { defaultTitle } from '../../../contexts/themeContext';

function EmbedVideo() {

    const iframe21Ref = useRef(null);
    const iframe16Ref = useRef(null);
    const iframe4Ref = useRef(null);
    const iframe1Ref = useRef(null);

    useEffect(() => {

        document.title = `Embed Video - ${defaultTitle}`;
        setWidth();
        window.addEventListener('resize', setWidth);

        return () => {
            window.removeEventListener('resize', setWidth);
        }
        
    }, []);

    function setWidth() {

        iframe21Ref.current.style.height = iframe21Ref.current.offsetWidth * 0.42857 + 'px';
        iframe16Ref.current.style.height = iframe16Ref.current.offsetWidth * 0.5625 + 'px';
        iframe4Ref.current.style.height = iframe4Ref.current.offsetWidth * 0.75 + 'px';
        iframe1Ref.current.style.height = iframe1Ref.current.offsetWidth + 'px';
        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-3"><h4>Embed Video</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6  mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Responsive embeded video 21:9</h4>
                        </div>
                        <div className="card-body">
                            <iframe
                                ref={iframe21Ref}
                                title="21:9"
                                className="w-100"
                                id="iframe21"
                                src="https://www.youtube.com/embed/N1-Jmq7BLFE"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6  mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Responsive embeded video 16:9</h4>
                        </div>
                        <div className="card-body">
                            <iframe
                                ref={iframe16Ref}
                                title="16:9"
                                className="w-100"
                                id="iframe16"
                                src="https://www.youtube.com/embed/hVvEISFw9w0"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6  mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Responsive embeded video 4:3</h4>
                        </div>
                        <div className="card-body">
                            <iframe
                                ref={iframe4Ref}
                                title="4:3"
                                className="w-100"
                                id="iframe4"
                                src="https://www.youtube.com/embed/mHUOCxVT5ro"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6  mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Responsive embeded video 1:1</h4>
                        </div>
                        <div className="card-body">
                            <iframe
                                ref={iframe1Ref}
                                title="1:1"
                                className="w-100"
                                id="iframe1"
                                src="https://www.youtube.com/embed/9QgT6ZIoXN8"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(EmbedVideo)
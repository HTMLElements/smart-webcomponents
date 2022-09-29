import './GoogleMaps.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { defaultTitle } from '../../../contexts/themeContext';

function GoogleMaps() {

    useEffect(() => { document.title = `Google Maps - ${defaultTitle}` }, []);

    return (
        <div className="container google-maps-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Google Maps</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Default map</h4>
                        </div>
                        <div className="card-body">
                            <iframe
                                title="Default map"
                                className="w-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170410.75606658432!2d16.97583486545303!3d48.13592437338002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89360aca6197%3A0x631f9b82fd884368!2sBratislava%2C%20Slovakia!5e0!3m2!1sen!2sbg!4v1602852055483!5m2!1sen!2sbg"
                                frameBorder={0}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Satelite map</h4>
                        </div>
                        <div className="card-body">
                            <iframe
                                title="Satelite map"
                                className="w-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207909.99796144466!2d16.97583486545303!3d48.13592437338002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89360aca6197%3A0x631f9b82fd884368!2sBratislava%2C%20Slovakia!5e1!3m2!1sen!2sbg!4v1602852173277!5m2!1sen!2sbg"
                                frameBorder={0}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Directions</h4>
                        </div>
                        <div className="card-body">
                            <iframe
                                title="Directions"
                                className="w-100"
                                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1336436.8673156851!2d14.648363975740331!3d49.13928902009328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x470b939c0970798b%3A0x400af0f66164090!2sPrague%2C%20Czechia!3m2!1d50.075538099999996!2d14.4378005!4m5!1s0x476c89360aca6197%3A0x631f9b82fd884368!2sBratislava%2C%20Slovakia!3m2!1d48.1485965!2d17.1077478!5e0!3m2!1sen!2sbg!4v1602852226356!5m2!1sen!2sbg"
                                frameBorder={0}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Map of continent</h4>
                        </div>
                        <div className="card-body">
                            <iframe
                                title="Map of continent"
                                className="w-100"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d38385186.201475084!2d19.5894081521726!3d40.23053297251707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbg!4v1602852513401!5m2!1sen!2sbg"
                                frameBorder={0}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Streetview</h4>
                        </div>
                        <div className="card-body">
                            <iframe
                                title="Streetview"
                                className="w-100"
                                src="https://www.google.com/maps/embed?pb=!4v1602851923328!6m8!1m7!1sCAoSLEFGMVFpcE95NDVFbGtQbkdJTTFhLVBRN1ZINVRmREFHRk4yQXBnRmNQLWJv!2m2!1d42.655223353398!2d23.331784175262!3f324.43147571109296!4f1.968206892568503!5f0.7820865974627469"
                                frameBorder={0}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">3D view</h4>
                        </div>
                        <div className="card-body">
                            <iframe
                                title="3D view"
                                className="w-100"
                                src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d126.86379209452852!2d24.751236349315896!3d42.1456227802223!2m2!1f358.5297925140095!2f45!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x14acd1a346c61793%3A0xfac01f1ae582348c!2sAncient%20Theater%20of%20Philippopolis!5e1!3m2!1sen!2sbg!4v1602852838235!5m2!1sen!2sbg"
                                frameBorder={0}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(GoogleMaps)
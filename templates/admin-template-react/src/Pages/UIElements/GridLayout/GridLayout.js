import './GridLayout.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { defaultTitle } from '../../../contexts/themeContext';

function GridLayout() {

    useEffect(() => { document.title = `Grid Layout - ${defaultTitle}` }, []);

    return (
        <div className="container grid-layout-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Grid Layout System</h4></div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <p>Bootstrap provides a powerful, mobile-first 12-column Grid layout system.</p>
                            <div className="grid-cols">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">.col-md-12</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card">.col-md-6</div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">.col-md-6</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card">.col-md-3</div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">.col-md-3</div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">.col-md-3</div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">.col-md-3</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="card">.col-md-2</div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="card">.col-md-2</div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="card">.col-md-2</div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="card">.col-md-2</div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="card">.col-md-2</div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="card">.col-md-2</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-1">
                                        <div className="card">.col-md-1</div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="card">.col-md-1</div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="card">.col-md-1</div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="card">.col-md-1</div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="card">.col-md-1</div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="card">.col-md-1</div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="card">.col-md-1</div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="card">.col-md-1</div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="card">.col-md-1</div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="card">.col-md-1</div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="card">.col-md-1</div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="card">.col-md-1</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="card">.col-md-8</div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">.col-md-4</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card">.col-md-3</div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">.col-md-6</div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">.col-md-3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(GridLayout)
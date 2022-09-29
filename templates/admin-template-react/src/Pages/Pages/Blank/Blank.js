import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { defaultTitle } from '../../../contexts/themeContext';

function Blank() {

    useEffect(() => { document.title = `Blank Page - ${defaultTitle}` }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-3"><h4>Blank Page</h4></div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body text-center">
                            <br />
                            <br />
                            <br />
                            <p>Empty card</p>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(Blank)
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function FiveOO() {

    useEffect(() => { document.title = `Error 500 - ${defaultTitle}` }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    <h1 className="font-weight-bold">500</h1>
                    <h5 className="font-weight-bold">Internal server error</h5>
                    <p className="mb-5">The server encountered an unexpected condition which prevented it <br />from fulfilling the request.</p>
                    <Button className="primary outlined">Return to Home</Button>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(FiveOO)
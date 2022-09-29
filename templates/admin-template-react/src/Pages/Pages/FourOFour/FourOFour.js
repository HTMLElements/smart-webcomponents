import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function FourOFour() {

    useEffect(() => { document.title = `Error 404 - ${defaultTitle}` }, []);

    return (
        <div className="container">
    <div className="row">
        <div className="col-md-8 mx-auto text-center">
            <h1 className="font-weight-bold">404</h1>
            <h5 className="font-weight-bold">Page not found</h5>
            <p className="mb-5">The requested URL was not found on this server. <br /> The page might have been removed.</p>
            <Button className="primary outlined">Return to Home</Button>
        </div>
    </div>
</div>
    )
}

export default withAnimation(FourOFour)
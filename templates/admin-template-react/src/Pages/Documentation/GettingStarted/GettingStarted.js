import './GettingStarted.scss'

import withAnimation from '../../../hoc/withAnimation';

import { useEffect } from 'react';

import { defaultTitle } from '../../../contexts/themeContext';

function GettingStarted() {

    useEffect(() => { document.title = `Getting Started - ${defaultTitle}` }, []);

    return (
        <div className="container getting-started-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Getting Started</h4></div>
            </div>

            <div className="card mb-5">
                <div className="card-body">
                    <h4>Installation</h4>
                    <p>Smart UI for Web Components is distributed as smart-webcomponents NPM package. You can also get the
                        full download from our website with all demos from the Download page.</p>
                    <p>To install the npm package, enter in a terminal:</p>
                    <pre><code>npm install smart-webcomponents</code></pre>
                </div>
            </div>

            <div className="card mb-5">
                <div className="card-body">
                    <h4>Load scripts</h4>
                    <p>The following code adds the custom element to the page:</p>
                    <pre>
                        <code>
                            {
                                `<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="../../source/styles/smart.default.css" type="text/css" />
    <script type="text/javascript" src="../../source/smart.element.js"></script>
    <script type="text/javascript" src="../../source/smart.button.js"></script>
    <script type="text/javascript" src="../../source/smart.accordion.js"></script>
</head>

<body>
    <smart-accordion>
        <smart-accordion-item label="Item 1" content="Content 1" expanded></smart-accordion-item>
        <smart-accordion-item label="Item 2" content="Content 2"></smart-accordion-item>
        <smart-accordion-item label="Item 3" content="Content 3"></smart-accordion-item>
    </smart-accordion>
</body>

</html>`
                            }
                        </code>
                    </pre>
                </div>
            </div>

            <div className="card mb-5">
                <div className="card-body">
                    <h4>Browser Support</h4>
                    <p>Smart is mobile-first UI Framework written in Javascript Ecmascript 6(ES6), HTML5 and CSS3. Smart
                        targets only modern Web browsers and devices.</p>
                    <div id="browserIconContainer">
                        <div id="chrome" className="browser-icon mr-4"></div>&nbsp;<div id="firefox" className="browser-icon mr-4"></div>&nbsp;<div id="safari" className="browser-icon mr-4"></div>&nbsp;<div id="edge" className="browser-icon mr-4"></div>&nbsp;<div id="opera" className="browser-icon mr-4"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default withAnimation(GettingStarted)
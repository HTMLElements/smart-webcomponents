import './Typography.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { defaultTitle } from '../../../contexts/themeContext';

function GridLayout() {

    useEffect(() => { document.title = `Typography - ${defaultTitle}` }, []);

    return (
        <div className="container typography-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Typography</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Headings</h4>
                        </div>
                        <div className="card-body">
                            <h6>HTML headings are titles or subtitles that may be displayed on a webpage.</h6>
                            <h1>This is a heading h1</h1>
                            <p>Ultricies mi eget mauris pharetra et ultrices neque ornare. Ut etiam sit amet nisl purus in mollis nunc sed.</p>
                            <h2>This is a heading h2</h2>
                            <p>Malesuada pellentesque elit eget gravida cum sociis natoque penatibus.</p>
                            <h3>This is a heading h3</h3>
                            <p>Enim praesent elementum facilisis leo vel fringilla. Dictum sit amet justo donec. Morbi enim nunc faucibus a pellentesque.</p>
                            <h4>This is a heading h4</h4>
                            <p>Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim.</p>
                            <h5>This is a heading h5</h5>
                            <p>Eget sit amet tellus cras. Sed risus ultricies tristique nulla aliquet enim tortor.</p>
                            <h6>This is a heading h6</h6>
                            <p>Odio morbi quis commodo odio aenean. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.</p>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Colored text</h4>
                        </div>

                        <div className="card-body">
                            <p className="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="text-success">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="text-danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="text-warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="text-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Inline text styling with tags</h4>
                        </div>
                        <div className="card-body">
                            <p>
                                <mark>Text highlighted with the mark tag.</mark>
                            </p>
                            <p>
                                <ins>Text underlined with the ins tag.</ins>
                            </p>
                            <p>
                                <del>Text struck through with the del tag.</del>
                            </p>
                            <p><em>Text italicized with the em tag.</em></p>
                            <p><strong>Bold text with the strong tag.</strong></p>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Blockquote</h4>
                        </div>
                        <div className="card-body">
                            <h5>The blockquote tag specifies a section that is quoted from another source.</h5>
                            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl.
                            </blockquote>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Ordered list</h4>
                        </div>
                        <div className="card-body">
                            <ol>
                                <li>magna etiam</li>
                                <li>tempor orci</li>
                                <li>eu lobortis</li>
                                <li>labore et</li>
                                <li>dolore magna</li>
                                <li>tempor id eu</li>
                            </ol>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Unordered list</h4>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>magna etiam</li>
                                <li>tempor orci</li>
                                <li>eu lobortis</li>
                                <li>labore et</li>
                                <li>dolore magna</li>
                                <li>tempor id eu</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(GridLayout)
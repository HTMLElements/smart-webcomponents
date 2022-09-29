import './Buttons.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';
import { DropDownButton, Button, ButtonGroup } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function Buttons() {

    useEffect(() => { document.title = `Buttons - ${defaultTitle}` }, []);

    return (
        <div className="container buttons-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Buttons</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Basic Buttons</h4>
                        </div>
                        <div className="card-body">
                            <div className="button-container">
                                <Button>Button</Button>
                                <Button className="primary">Primary</Button>
                                <Button className="secondary">Secondary</Button>
                            </div>
                            <div className="button-container">
                                <Button className="success">Success</Button>
                                <Button className="error">Error</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Rounded Buttons</h4>
                        </div>
                        <div className="card-body">
                            <div className="button-container">
                                <Button className="rounded">Button</Button>
                                <Button className="rounded primary">Primary</Button>
                                <Button className="rounded secondary">Secondary</Button>
                            </div>
                            <div className="button-container">
                                <Button className="rounded success">Success</Button>
                                <Button className="rounded error">Error</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Outlined Buttons</h4>
                        </div>
                        <div className="card-body">
                            <div className="button-container">
                                <Button className="outlined">Button</Button>
                                <Button className="primary outlined">Primary</Button>
                                <Button className="secondary outlined">Secondary</Button>
                            </div>
                            <div className="button-container">
                                <Button className="success outlined">Success</Button>
                                <Button className="error outlined">Error</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Square Buttons</h4>
                        </div>
                        <div className="card-body">
                            <div className="button-container">
                                <Button className="squared">Button</Button>
                                <Button className="squared primary">Primary</Button>
                                <Button className="squared secondary">Secondary</Button>
                            </div>
                            <div className="button-container">
                                <Button className="squared success">Success</Button>
                                <Button className="squared error">Error</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Icon Buttons</h4>
                        </div>
                        <div className="card-body">
                            <div className="button-container icon-text">
                                <Button className="icon"><span className="material-icons">alarm</span>Button</Button>
                                <Button className="primary icon"><span className="material-icons">explore</span>Primary</Button>
                                <Button className="secondary icon"><span className="material-icons">build_circle</span>Secondary</Button>
                            </div>
                            <div className="button-container icon-text">
                                <Button className="success icon"><span className="material-icons">eco</span>Success</Button>
                                <Button className="error icon"><span className="material-icons">highlight_off</span>Error</Button>
                            </div>
                            <div className="button-container">
                                <Button className="icon"><span className="material-icons">alarm</span></Button>
                                <Button className="primary icon"><span className="material-icons">explore</span></Button>
                                <Button className="secondary icon"><span className="material-icons">build_circle</span>
                                </Button>
                            </div>
                            <div className="button-container">
                                <Button className="success icon"><span className="material-icons">eco</span></Button>
                                <Button className="error icon"><span className="material-icons">highlight_off</span></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Social Network Buttons</h4>
                        </div>
                        <div className="card-body">
                            <div className="button-container icon-text">
                                <Button className="primary icon"><img src="https://img.icons8.com/material/24/000000/facebook-new.png" alt=""/>Facebook</Button>
                                <Button className="primary icon twitter"><img src="https://img.icons8.com/material/24/000000/twitter--v1.png" alt=""/>Twitter</Button>
                                <Button className="primary icon reddit"><img src="https://img.icons8.com/material/24/000000/reddit--v1.png" alt=""/>Reddit</Button>
                            </div>
                            <div className="button-container icon-text">
                                <Button className="primary icon youtube"><img src="https://img.icons8.com/material/24/000000/youtube--v1.png" alt=""/>YouTube</Button>
                                <Button className="primary icon instagram"><img src="https://img.icons8.com/material/24/000000/instagram-new.png" alt=""/>Instagram</Button>
                            </div>
                            <div className="button-container">
                                <Button className="primary icon"><img src="https://img.icons8.com/material/24/000000/facebook-new.png" alt=""/></Button>
                                <Button className="primary icon twitter"><img src="https://img.icons8.com/material/24/000000/twitter--v1.png" alt=""/></Button>
                                <Button className="primary icon reddit"><img src="https://img.icons8.com/material/24/000000/reddit--v1.png" alt=""/></Button>
                            </div>
                            <div className="button-container">
                                <Button className="primary icon youtube"><img src="https://img.icons8.com/material/24/000000/youtube--v1.png" alt=""/></Button>
                                <Button className="primary icon instagram"><img src="https://img.icons8.com/material/24/000000/instagram-new.png" alt=""/></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Button Sizes</h4>
                        </div>
                        <div className="card-body">
                            <div className="button-container">
                                <Button className="primary very-small">Very small</Button>
                                <Button className="primary small">Small</Button>
                                <Button className="primary large">Large</Button>
                            </div>
                            <div className="button-container icon-text">
                                <Button className="primary icon very-small"><span className="material-icons">zoom_in</span>Very small
                                </Button>
                                <Button className="primary icon small"><span className="material-icons">zoom_in</span>Small</Button>
                                <Button className="primary icon large"><span className="material-icons">zoom_in</span>Large</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Flat Buttons</h4>
                        </div>
                        <div className="card-body">
                            <div className="button-container">
                                <Button className="flat">Button</Button>
                                <Button className="primary flat">Primary</Button>
                                <Button className="secondary flat">Secondary</Button>
                            </div>
                            <div className="button-container">
                                <Button className="success flat">Success</Button>
                                <Button className="error flat">Error</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Dropdown Button</h4>
                        </div>
                        <div className="card-body">
                            <div className="button-container">
                                <DropDownButton placeholder="Dropdown Button" drop-down-append-to="body">
                                    Nullam ut vulputate orci. Nunc sit amet augue libero. Nullam tincidunt vel nunc eget pulvinar.
                                    Etiam a sem in ligula suscipit auctor. Aliquam placerat efficitur urna mollis tincidunt.
                                    Pellentesque dignissim imperdiet lectus a facilisis. Maecenas ipsum mi, congue dapibus ante et,
                                    maximus pretium justo.
                                </DropDownButton>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Button Group</h4>
                        </div>
                        <div className="card-body">
                            <div className="button-container">
                                <ButtonGroup dataSource={["Left", "Middle", "Right"]}></ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(Buttons)
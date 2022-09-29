import './Tabs.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { defaultTitle } from '../../../contexts/themeContext';

import { Tabs, TabItem } from '../../../smartImports';

function TabsPage() {

    useEffect(() => { document.title = `Tabs - ${defaultTitle}` }, []);

    const homeTemplate = `<span class="material-icons">home</span>`;
    const profileTemplate = `<span class="material-icons">settings</span>`;
    const messagesTemplate = `<span class="material-icons">message</span>`;

    return (
        <div className="container tabs-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Tabs</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Default tabs</h4>
                        </div>
                        <div className="card-body">
                            <Tabs className="w-100">
                                <TabItem label="Home">
                                    <h6>Default tabs</h6>
                                    <p>Nulla id vestibulum tortor. Vestibulum quis ante lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac quam quis sem sodales vestibulum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </TabItem>

                                <TabItem label="Profile">
                                    <h6>Profile tab</h6>
                                    <p>Proin venenatis dignissim tortor vel mattis.</p>
                                    <p>Suspendisse pulvinar massa eu massa vestibulum imperdiet.</p>
                                    <p>Aenean fringilla sodales diam eget auctor. Nullam suscipit a leo nec blandit. Aenean suscipit dolor arcu.</p>
                                </TabItem>

                                <TabItem label="Messages">
                                    <h6>Messages tabs</h6>
                                    <p>Etiam orci nunc, ornare sed rhoncus quis, facilisis venenatis neque. Vivamus in nisi elit. Nullam rhoncus nisi purus, sed egestas arcu hendrerit vel.</p>
                                </TabItem>
                            </Tabs>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Colored tabs</h4>
                        </div>

                        <div className="card-body">
                            <Tabs className="colored top w-100">
                                <TabItem label="Home">
                                    <h6>Colored tabs</h6>
                                    <p>Nulla id vestibulum tortor. Vestibulum quis ante lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac quam quis sem sodales vestibulum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </TabItem>

                                <TabItem label="Profile">
                                    <h6>Profile tab</h6>
                                    <p>Proin venenatis dignissim tortor vel mattis.</p>
                                    <p>Suspendisse pulvinar massa eu massa vestibulum imperdiet.</p>
                                    <p>Aenean fringilla sodales diam eget auctor. Nullam suscipit a leo nec blandit. Aenean suscipit dolor arcu.</p>
                                </TabItem>

                                <TabItem label="Messages">
                                    <h6>Messages tabs</h6>
                                    <p>Etiam orci nunc, ornare sed rhoncus quis, facilisis venenatis neque. Vivamus in nisi elit. Nullam rhoncus nisi purus, sed egestas arcu hendrerit vel.</p>
                                </TabItem>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Icon tabs</h4>
                        </div>

                        <div className="card-body">
                            <Tabs className="w-100">
                                <TabItem label={homeTemplate}>
                                    <h6>Icon tabs</h6>
                                    <p>Nulla id vestibulum tortor. Vestibulum quis ante lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac quam quis sem sodales vestibulum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </TabItem>

                                <TabItem label={profileTemplate}>
                                    <h6>Profile tab</h6>
                                    <p>Proin venenatis dignissim tortor vel mattis.</p>
                                    <p>Suspendisse pulvinar massa eu massa vestibulum imperdiet.</p>
                                    <p>Aenean fringilla sodales diam eget auctor. Nullam suscipit a leo nec blandit. Aenean suscipit dolor arcu.</p>
                                </TabItem>

                                <TabItem label={messagesTemplate}>
                                    <h6>Messages tabs</h6>
                                    <p>Etiam orci nunc, ornare sed rhoncus quis, facilisis venenatis neque. Vivamus in nisi elit. Nullam rhoncus nisi purus, sed egestas arcu hendrerit vel.</p>
                                </TabItem>
                            </Tabs>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Colored icon tabs</h4>
                        </div>

                        <div className="card-body">
                            <Tabs className="colored top success w-100">
                                <TabItem label={homeTemplate}>
                                    <h6>Colored icon tabs</h6>
                                    <p>Nulla id vestibulum tortor. Vestibulum quis ante lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac quam quis sem sodales vestibulum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </TabItem>

                                <TabItem label={profileTemplate}>
                                    <h6>Profile tab</h6>
                                    <p>Proin venenatis dignissim tortor vel mattis.</p>
                                    <p>Suspendisse pulvinar massa eu massa vestibulum imperdiet.</p>
                                    <p>Aenean fringilla sodales diam eget auctor. Nullam suscipit a leo nec blandit. Aenean suscipit dolor arcu.</p>
                                </TabItem>

                                <TabItem label={messagesTemplate}>
                                    <h6>Messages tabs</h6>
                                    <p>Etiam orci nunc, ornare sed rhoncus quis, facilisis venenatis neque. Vivamus in nisi elit. Nullam rhoncus nisi purus, sed egestas arcu hendrerit vel.</p>
                                </TabItem>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Vertical icon tabs</h4>
                        </div>
                        <div className="card-body">
                            <Tabs className="w-100" tab-position="left">
                                <TabItem label={homeTemplate}>
                                    <h6>Vertical icon tabs</h6>
                                    <p>Nulla id vestibulum tortor. Vestibulum quis ante lorem. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Phasellus ac quam quis sem sodales vestibulum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </TabItem>
                                <TabItem label={profileTemplate}>
                                    <h6>Profile tab</h6>
                                    <p>Proin venenatis dignissim tortor vel mattis.</p>
                                    <p>Suspendisse pulvinar massa eu massa vestibulum imperdiet.</p>
                                    <p>Aenean fringilla sodales diam eget auctor. Nullam suscipit a leo nec blandit. Aenean suscipit
                                        dolor arcu.</p>
                                </TabItem>
                                <TabItem label={messagesTemplate}>
                                    <h6>Messages tabs</h6>
                                    <p>Etiam orci nunc, ornare sed rhoncus quis, facilisis venenatis neque. Vivamus in nisi elit.
                                        Nullam rhoncus nisi purus, sed egestas arcu hendrerit vel.</p>
                                </TabItem>
                            </Tabs>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Colored vertical icon tabs</h4>
                        </div>
                        <div className="card-body">
                            <Tabs className="colored left error w-100" tab-position="left">
                                <TabItem label={homeTemplate}>
                                    <h6>Colored vertical icon tabs</h6>
                                    <p>Nulla id vestibulum tortor. Vestibulum quis ante lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac quam quis sem sodales vestibulum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </TabItem>
                                <TabItem label={profileTemplate}>
                                    <h6>Profile tab</h6>
                                    <p>Proin venenatis dignissim tortor vel mattis.</p>
                                    <p>Suspendisse pulvinar massa eu massa vestibulum imperdiet.</p>
                                    <p>Aenean fringilla sodales diam eget auctor. Nullam suscipit a leo nec blandit. Aenean suscipit dolor arcu.</p>
                                </TabItem>
                                <TabItem label={messagesTemplate}>
                                    <h6>Messages tabs</h6>
                                    <p>Etiam orci nunc, ornare sed rhoncus quis, facilisis venenatis neque. Vivamus in nisi elit. Nullam rhoncus nisi purus, sed egestas arcu hendrerit vel.</p>
                                </TabItem>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(TabsPage)
import './Cards.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';
import { Card, Button, Tabs, TabItem } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function Cards() {

    useEffect(() => { document.title = `Cards - ${defaultTitle}` }, []);

    return (
        <div id="cardsView" className="container cards-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Cards</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-4 mb-5">
                    <Card className="h-100">
                        <div className="card h-100 shadow-3 hover-shadow-6">
                            <div className="card-body">
                                <div className="img-as-background h-200 mb-3">
                                    <img alt="" src="assets/images/travel/16.jpg" />
                                </div>
                                <h4>Card with image and links</h4>
                                <p>Nulla tempus neque id eros blandit, id congue sem ultricies. Nulla molestie viverra aliquet.
                                    Praesent feugiat mollis lacus, quis sagittis leo.</p>
                                <a href="#">Sample link 1</a>&nbsp;<a href="#">Sample link 2</a>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="col-lg-4 mb-5">
                    <Card className="h-100">
                        <div className="card h-100 shadow-3 hover-shadow-6">
                            <div className="card-body">
                                <div className="img-as-background h-200 mb-3">
                                    <img alt="" src="assets/images/travel/4.jpg" />
                                </div>
                                <h4>Card with image and button</h4>
                                <p>Pellentesque eget magna augue. Nam accumsan dignissim vulputate. In hac habitasse platea
                                    dictumst.</p>
                                <Button className="primary">Sample button</Button>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="col-lg-4 mb-5">
                    <Card className="h-100">
                        <div className="card h-100 shadow-3 hover-shadow-6">
                            <div className="card-body">
                                <div className="img-as-background h-200 mb-3">
                                    <img alt="" src="assets/images/travel/25.jpg" />
                                </div>
                                <h4>Card with image and list</h4>
                                <p>Aliquam erat volutpat. Aenean tincidunt scelerisque mauris, in pharetra mi venenatis ut.</p>
                                <ul className="list">
                                    <li>Praesent scelerisque</li>
                                    <li>Vestibulum quis</li>
                                    <li>Mauris odio</li>
                                    <li>Integer</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 mb-5">
                    <Card className="h-100">
                        <div className="card h-100 shadow-3 hover-shadow-6">
                            <div className="card-body">
                                <h4>Card with links</h4>
                                <p>Nulla tempus neque id eros blandit, id congue sem ultricies. Nulla molestie viverra aliquet. Praesent feugiat mollis lacus, quis sagittis leo.</p>
                                <a href="#">Sample link 1</a>&nbsp;<a href="#">Sample link 2</a>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="col-lg-4 mb-5">
                    <Card className="h-100">
                        <div className="card h-100 shadow-3 hover-shadow-6">
                            <div className="card-body">
                                <div className="h-100 d-flex flex-column">
                                    <div className="content-holder">
                                        <h4>Card with button <span className="font-size-16px"> position bottom</span></h4>
                                        <p>Pellentesque eget magna augue. Nam accumsan dignissim vulputate. In hac habitasse platea dictumst.</p>
                                    </div>

                                    <div className="w-100 mt-auto">
                                        <Button className="primary w-100">Sample button</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="col-lg-4 mb-5">
                    <Card className="h-100">
                        <div className="card h-100 shadow-3 hover-shadow-6">
                            <div className="card-body">
                                <h4>Card with list</h4>
                                <p>Aliquam erat volutpat. Aenean tincidunt scelerisque mauris, in pharetra mi venenatis ut.</p>
                                <ul className="list">
                                    <li>Praesent scelerisque</li>
                                    <li>Vestibulum quis</li>
                                    <li>Mauris odio</li>
                                    <li>Integer</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <Card className="h-100">
                        <div className="card h-100 shadow-3 hover-shadow-6">
                            <div className="card-body">
                                <Tabs className="m-0 w-100">
                                    <TabItem label="Tab 1">
                                        <h4>Card with tabs</h4>
                                        <p>Nulla tempus neque id eros blandit, id congue sem ultricies. Nulla molestie viverra aliquet. Praesent feugiat mollis lacus, quis sagittis leo.</p>
                                        <Button className="primary">Sample button</Button>
                                    </TabItem>

                                    <TabItem label="Tab 2">
                                        <h4>Card with tabs</h4>
                                        <p>Nunc lacus mi, fringilla et dignissim eu, pharetra sit amet sapien. Praesent lectus tellus, iaculis ut commodo id, auctor quis velit.</p>
                                        <Button className="primary">Sample button 2</Button>
                                    </TabItem>

                                    <TabItem label="Tab 3">
                                        <h4>Card with tabs</h4>
                                        <p>Aenean et viverra nibh. Sed aliquam facilisis libero, quis lacinia metus gravida ac. Curabitur vitae turpis accumsan diam malesuada placerat quis in felis.</p>
                                        <Button className="primary">Sample button 3</Button>
                                    </TabItem>
                                </Tabs>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="col-lg-6 mb-5">
                    <Card className="h-100">
                        <div className="card h-100 shadow-3 hover-shadow-6">
                            <div className="card-body">
                                <Tabs className="m-0 w-100" id="pills">
                                    <TabItem label="Pill 1">
                                        <h4>Card with pills</h4>
                                        <p>Nulla tempus neque id eros blandit, id congue sem ultricies. Nulla molestie viverra aliquet. Praesent feugiat mollis lacus, quis sagittis leo.</p>
                                        <Button className="primary">Sample button</Button>
                                    </TabItem>

                                    <TabItem label="Pill 2">
                                        <h4>Card with pills</h4>
                                        <p>Nunc lacus mi, fringilla et dignissim eu, pharetra sit amet sapien. Praesent lectus tellus, iaculis ut commodo id, auctor quis velit.</p>
                                        <Button className="primary">Sample button 2</Button>
                                    </TabItem>

                                    <TabItem label="Pill 3">
                                        <h4>Card with pills</h4>
                                        <p>Aenean et viverra nibh. Sed aliquam facilisis libero, quis lacinia metus gravida ac. Curabitur vitae turpis accumsan diam malesuada placerat quis in felis.</p>
                                        <Button className="primary">Sample button 3</Button>
                                    </TabItem>
                                </Tabs>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default withAnimation(Cards)
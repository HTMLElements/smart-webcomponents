import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function SocialPage({ openTodayMenu }) {

    useEffect(() => { document.title = `Social - ${defaultTitle}` }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mb-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-md-flex border-bottom py-3">
                                <div className="avatar-holder">
                                    <div className="img-as-background square rounded-circle w-65px border">
                                        <img alt="" src="assets/images/phonebook/maya.png" />
                                    </div>
                                </div>

                                <div className="ml-md-4">
                                    <div className="row justify-content-between pt-3 pb-2  pt-md-5 pb-md-3">
                                        <div className="col">
                                            <h6 className="font-weight-bold">Eva Hayes</h6>
                                        </div>
                                        <div className="col text-right">
                                            <small className="text-muted">7m ago</small>
                                        </div>
                                    </div>

                                    <div className="content mb-5">
                                        Aliquam eleifend orci eget tortor ultrices suscipit. In felis odio, viverra et est et,
                                        mollis vestibulum lorem. Donec laoreet tellus sit amet ligula blandit, sed dignissim lacus
                                        imperdiet. Aliquam consequat auctor ex eget facilisis.
                                        <br />
                                        <br />
                                        <img alt="" src="assets/images/travel/12.jpg" />
                                    </div>

                                    <div className="meta d-flex justify-content-between align-items-center mb-3">
                                        <small className="text-muted">Today, 11:23 am</small>
                                        <Button className="small-button outlined error"><span className="material-icons">favorite</span> Like</Button>
                                    </div>

                                    <div className="comments">
                                        <h6 className=" font-weight-bold">Comments:</h6>
                                        <div className="comment d-flex mb-3">
                                            <div className="avatar-holder">
                                                <div className="img-as-background square rounded-circle w-30px border">
                                                    <img alt="" src="assets/images/phonebook/michael.png" />
                                                </div>
                                            </div>

                                            <div className="content ml-4 "><strong>Frederick Murphy:</strong> Vivamus quis ultrices nisi. Vestibulum
                                                sodales tristique odio, sodales
                                                mollis eros faucibus non.
                                            </div>
                                        </div>

                                        <div className="comment d-flex mb-3">
                                            <div className="avatar-holder">
                                                <div className="img-as-background square rounded-circle w-30px border">
                                                    <img alt="" src="assets/images/phonebook/maya.png" />
                                                </div>
                                            </div>

                                            <div className="content ml-4 "><strong>Eva Hayes:</strong> Thanks for your opinion.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-md-flex border-bottom py-3">
                                <div className="avatar-holder">
                                    <div className="img-as-background square rounded-circle w-65px border">
                                        <img alt="" src="assets/images/phonebook/maria.png" />
                                    </div>
                                </div>

                                <div className="ml-md-4">
                                    <div className="row justify-content-between pt-3 pb-2  pt-md-5 pb-md-3">
                                        <div className="col">
                                            <h6 className="font-weight-bold">Joyce Scott</h6>
                                        </div>
                                        <div className="col text-right">
                                            <small className="text-muted">2h ago</small>
                                        </div>
                                    </div>

                                    <div className="content mb-5">
                                        Phasellus mollis laoreet augue vel aliquet. Donec semper orci ut feugiat maximus. Aliquam euismod scelerisque nisi quis molestie. Suspendisse posuere mauris egestas lobortis suscipit.
                                    </div>

                                    <div className="meta d-flex justify-content-between align-items-center mb-3">
                                        <small className="text-muted">Today, 9:11 am</small>
                                        <Button className="small-button outlined error"><span className="material-icons">favorite</span> Like</Button>
                                    </div>

                                    <div className="comments">
                                        <h6 className=" font-weight-bold">Comments:</h6>
                                        <div className="comment d-flex mb-3">
                                            <div className="avatar-holder">
                                                <div className="img-as-background square rounded-circle w-30px border">
                                                    <img alt="" src="assets/images/phonebook/maya.png" />
                                                </div>
                                            </div>

                                            <div className="content ml-4 "><strong>Eva Hayes:</strong> Cras tincidunt ex id tincidunt interdum.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-md-flex border-bottom-0 py-3">
                                <div className="avatar-holder">
                                    <div className="img-as-background square rounded-circle w-65px border">
                                        <img alt="" src="assets/images/phonebook/monica.png" />
                                    </div>
                                </div>

                                <div className="ml-md-4">
                                    <div className="row justify-content-between pt-3 pb-2  pt-md-5 pb-md-3">
                                        <div className="col">
                                            <h6 className="font-weight-bold">Victoria Ramos</h6>
                                        </div>
                                        <div className="col text-right">
                                            <small className="text-muted">1d ago</small>
                                        </div>
                                    </div>

                                    <div className="content mb-5">
                                        In quis posuere lorem. Duis ac mauris vel neque bibendum luctus vel at metus. Cras bibendum magna quis varius elementum.
                                        <br />
                                        <br />
                                        <div className="text-center">
                                            <img alt="" src="assets/images/travel/11.jpg" className="mb-3" />&nbsp;<img alt="" src="assets/images/travel/10.jpg" className="mb-3" />
                                        </div>
                                    </div>

                                    <div className="meta d-flex justify-content-between align-items-center mb-3">
                                        <small className="text-muted">Yesterday, 06:14 pm</small>
                                        <Button className="small-button outlined error"><span className="material-icons">favorite</span> Like</Button>
                                    </div>

                                    <div className="comments">
                                        <h6 className=" font-weight-bold">Comments:</h6>

                                        <span className=" text-muted">There is no comments for this article.</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card mb-5">
                        <div className="card-body text-center">
                            <div className="img-as-background square rounded-circle w-100px mx-auto mb-4">
                                <img alt="" src="assets/images/phonebook/mark.png" />
                            </div>

                            <h5>John Doe</h5>
                            <h6 className="mb-4">Manager, UX Department</h6>

                            <div>
                                <Button className="small-button outlined primary">Follow</Button>&nbsp;<Button className="small-button outlined primary"><span className="material-icons">message</span> Chat</Button>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Friends</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body">
                            <div className="friends">
                                <div className="d-md-flex border-bottom py-3">
                                    <div className="img-as-background square rounded-circle w-50px">
                                        <img alt="" src="assets/images/phonebook/maya.png" />
                                    </div>

                                    <div className="ml-md-4">
                                        <h6>Eva Hayes</h6>
                                        <Button className="small-button outlined primary">Remove</Button>
                                    </div>
                                </div>

                                <div className="d-md-flex border-bottom py-3">
                                    <div className="img-as-background square rounded-circle w-50px">
                                        <img alt="" src="assets/images/phonebook/maria.png" />
                                    </div>

                                    <div className="ml-md-4">
                                        <h6>Joyce Scott</h6>
                                        <Button className="small-button outlined primary">Remove</Button>
                                    </div>
                                </div>

                                <div className="d-md-flex border-bottom py-3">
                                    <div className="img-as-background square rounded-circle w-50px">
                                        <img alt="" src="assets/images/phonebook/michael.png" />
                                    </div>

                                    <div className="ml-md-4">
                                        <h6>Frederick Murphy</h6>
                                        <Button className="small-button outlined primary">Remove</Button>
                                    </div>
                                </div>

                                <div className="d-md-flex border-bottom-0 py-3">
                                    <div className="img-as-background square rounded-circle w-50px">
                                        <img alt="" src="assets/images/phonebook/monica.png" />
                                    </div>

                                    <div className="ml-md-4">
                                        <h6>Victoria Ramos</h6>
                                        <Button className="small-button outlined primary">Remove</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Activities</h4>
                            <div className="settings-button">…</div>
                        </div>

                        <div className="card-body">
                            <div className="feeds">
                                <div className="row row-mx-5 hover-text-primary border-bottom py-3">
                                    <div className="col-auto col-px-5">
                                        <div className="img-as-background rounded-circle w-50px square border">
                                            <img alt="" src="assets/images/phonebook/michael.png" />
                                        </div>
                                    </div>

                                    <div className="col col-px-5">
                                        <div><strong>Frederick Murphy</strong> reacted to your blog post</div>
                                        <small className="text-muted">Today 8:19 PM</small>
                                    </div>

                                    <div className="col-auto col-px-5">
                                        <small className="w-auto text-muted">7 min ago</small>
                                    </div>
                                </div>

                                <div className="row row-mx-5 hover-text-primary border-bottom py-3">
                                    <div className="col-auto col-px-5">
                                        <div className="img-as-background rounded-circle w-50px square border">
                                            <img alt="" src="assets/images/phonebook/maria.png" />
                                        </div>
                                    </div>

                                    <div className="col col-px-5">
                                        <div><strong>Elisha Scott</strong> is now engaged</div>
                                        <small className="text-muted">Today 10:45 PM</small>
                                    </div>

                                    <div className="col-auto col-px-5">
                                        <small className="w-auto text-muted">10 hours ago</small>
                                    </div>
                                </div>

                                <div className="row row-mx-5 hover-text-primary border-bottom py-3">
                                    <div className="col-auto col-px-5">
                                        <div className="img-as-background rounded-circle w-50px square border">
                                            <img alt="" src="assets/images/phonebook/michael.png" />
                                        </div>
                                    </div>

                                    <div className="col col-px-5">
                                        <div><strong>John Doe</strong> is now engaged</div>
                                        <small className="text-muted">Today 12:03 PM</small>
                                    </div>

                                    <div className="col-auto col-px-5">
                                        <small className="w-auto text-muted">8 hours ago</small>
                                    </div>
                                </div>
                            </div>

                            <Button id="loadMore" className="primary">Load more</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(SocialPage)
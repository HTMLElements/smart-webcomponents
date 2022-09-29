import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function Overview1({ openTodayMenu }) {

    useEffect(() => { document.title = `Profile 1 - ${defaultTitle}` }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mb-5">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="label">Profile Details</h4>
                        </div>

                        <div className="card-body text-center">
                            <div className="img-as-background square rounded-circle w-100px mx-auto mb-4">
                                <img alt="" src="assets/images/phonebook/mark.png" />
                            </div>

                            <h5>John Doe</h5>
                            <h6 className="mb-4">Manager, UX Department</h6>

                            <div>
                                <Button className="small-button primary outlined">Follow</Button>&nbsp;<Button className="small-button primary outlined"><span className="material-icons">message</span> Chat</Button>
                            </div>

                            <div className="profile-info border-top mt-5 py-3 text-left">
                                <h5>Skills</h5>

                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mb-1 mr-1"><span className="smart-badge smart-badge-primary smart-badge-pill">JavaScript</span></li>&nbsp;<li className="list-inline-item mb-1 mr-1"><span className="smart-badge smart-badge-primary smart-badge-pill">TypeScript</span></li>&nbsp;<li className="list-inline-item mb-1 mr-1"><span className="smart-badge smart-badge-primary smart-badge-pill">HTML</span></li>&nbsp;<li className="list-inline-item mb-1 mr-1"><span className="smart-badge smart-badge-primary smart-badge-pill">CSS</span></li>&nbsp;<li className="list-inline-item mb-1 mr-1"><span className="smart-badge smart-badge-primary smart-badge-pill">C#</span></li>&nbsp;<li className="list-inline-item mb-1 mr-1"><span className="smart-badge smart-badge-primary smart-badge-pill">UX</span></li>&nbsp;<li className="list-inline-item mb-1 mr-1"><span className="smart-badge smart-badge-primary smart-badge-pill">UI</span></li>&nbsp;<li className="list-inline-item mb-1 mr-1"><span className="smart-badge smart-badge-primary smart-badge-pill">Managing large teams</span></li>
                                </ul>
                            </div>

                            <div className="profile-info border-top mt-5 py-3 text-left">
                                <h5>About</h5>

                                <div className="d-flex align-items-center mb-2"><span className="material-icons font-size-22px mr-2">home</span> Lives in &nbsp; <a href="#">Cardiff</a></div>
                                <div className="d-flex align-items-center mb-2"><span className="material-icons font-size-22px mr-2">work_outline</span> Works at &nbsp; <a href="https://www.htmlelements.com/" target="_blank" rel="noreferrer">jQWidgets</a></div>
                                <div className="d-flex align-items-center"><span className="material-icons font-size-22px mr-2">place</span> From&nbsp; <a href="#">Paris</a></div>
                            </div>

                            <div className="profile-info border-top mt-5 py-3 text-left">
                                <h5>Connect</h5>

                                <div className="d-flex align-items-center"><i className="mdi mdi-earth font-size-22px mr-2"></i><a href="#">www.john-doe.co.uk</a></div>
                                <div className="d-flex align-items-center"><i className="mdi mdi-at font-size-22px mr-2"></i><a href="#">john.doe@inlook.com</a></div>
                                <div className="d-flex align-items-center"><i className="mdi mdi-facebook font-size-22px mr-2"></i> <a href="#">Facebook</a></div>
                                <div className="d-flex align-items-center"><i className="mdi mdi-twitter font-size-22px mr-2"></i> <a href="#">Twitter</a></div>
                                <div className="d-flex align-items-center"><i className="mdi mdi-linkedin font-size-22px mr-2"></i> <a href="#">LinkedIn</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8 mb-5">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="label">Activities</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>

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
                                        imperdiet. Aliquam consequat auctor ex eget facilisis.  😌
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
            </div>
        </div>
    )
}

export default withAnimation(Overview1)
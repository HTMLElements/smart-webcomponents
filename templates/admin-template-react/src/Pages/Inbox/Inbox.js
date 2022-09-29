import { useEffect, useRef } from 'react';

import withAnimation from '../../hoc/withAnimation';

import { Toast } from '../../smartImports';

import { defaultTitle } from '../../contexts/themeContext';

function Inbox() {

    const toast = useRef(null);

    useEffect(() => { document.title = `Inbox - ${defaultTitle}` }, []);

    const toastOpenerClick = (e) => {
        if (e.currentTarget.checked) {
            toast.current.open();
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-3"><h4>Inbox</h4></div>
            </div>

            <div className="row mailbox">
                <div className="col left-side mb-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="px-3 mb-5">
                                <a href="" onClick={(e) => e.preventDefault()} className="btn btn-primary btn-block font-weight-bold text-uppercase text-center">Compose</a>
                            </div>
                            <div className="nav flex-column nav mb-4">
                                <a href="" onClick={(e) => e.preventDefault()} className="nav-link rounded active"><span><i className="material-icons">inbox</i> Inbox</span> <span className="badge px-2 py-1 bg-primary-opacity-3 text-primary">3</span></a>
                                <a href="" onClick={(e) => e.preventDefault()} className="nav-link rounded"><span><i className="material-icons">star_half</i> Marked</span></a>
                                <a href="" onClick={(e) => e.preventDefault()} className="nav-link rounded"><span><i className="material-icons">drafts</i> Draft</span> <span className="badge px-2 py-1 bg-warning-opacity-3 text-warning">5</span></a>
                                <a href="" onClick={(e) => e.preventDefault()} className="nav-link rounded"><span><i className="material-icons">mark_email_read</i> Sent</span></a>
                                <a href="" onClick={(e) => e.preventDefault()} className="nav-link rounded"><span><i className="material-icons">delete</i> Trash</span></a>
                            </div>

                            <div className="nav flex-column nav-labels">
                                <a href="" onClick={(e) => e.preventDefault()} className="nav-link rounded"><span><i className="material-icons text-danger">fiber_manual_record</i> Projects</span> <span className="badge px-2 py-1 bg-danger-opacity-3 text-danger">9</span></a>
                                <a href="" onClick={(e) => e.preventDefault()} className="nav-link rounded"><span><i className="material-icons text-primary">fiber_manual_record</i> Tasks</span></a>
                                <a href="" onClick={(e) => e.preventDefault()} className="nav-link rounded"><span><i className="material-icons text-info">fiber_manual_record</i> Notifications</span></a>
                                <a href="" onClick={(e) => e.preventDefault()} className="nav-link rounded"><span><i className="material-icons text-primary font-size-24px">add</i> Add Label</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col right-side mb-5">
                    <div className="card">
                        <div className="card-body px-0">
                            <div className="list-header mb-4 row justify-content-between d-flex px-4">
                                <div className="col-12 col-sm-6 col-lg-auto d-flex align-items-center order-2 order-xl-1">
                                    <div className="d-flex align-items-center mr-1 my-2">
                                        <div className="custom-control custom-checkbox flex-shrink-0">
                                            <input type="checkbox" className="custom-control-input" id="customCheckAll" onClick={toastOpenerClick} />
                                            <label className="custom-control-label" htmlFor="customCheckAll"></label>
                                        </div>

                                        <div className="dropdown" data-bs-toggle="tooltip" data-placement="top" data-bs-placement="top" data-bs-title="Quick actions">
                                            <button type="button" className="btn btn-clean btn-icon btn-sm" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="material-icons m-0">keyboard_arrow_down</i>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a href="" onClick={(e) => e.preventDefault()} className="dropdown-item">All</a>
                                                <a href="" onClick={(e) => e.preventDefault()} className="dropdown-item">Read</a>
                                                <a href="" onClick={(e) => e.preventDefault()} className="dropdown-item">Unread</a>
                                                <a href="" onClick={(e) => e.preventDefault()} className="dropdown-item">Starred</a>
                                                <a href="" onClick={(e) => e.preventDefault()} className="dropdown-item">Unstarred</a>
                                            </div>
                                        </div>

                                        <span className="btn btn-clean btn-icon btn-sm mr-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Reload list"><i className="material-icons">refresh</i></span>
                                    </div>

                                    <div className="d-flex align-items-center mr-1 my-2">
                                        <a href="" onClick={(e) => e.preventDefault()} className="btn btn-light text-muted hover-text-primary btn-sm mr-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Archive">
                                            <i className="material-icons">archive</i>
                                        </a>

                                        <a href="" onClick={(e) => e.preventDefault()} className="btn btn-light text-muted hover-text-primary btn-sm mr-2 d-none" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Spam">
                                            <i className="material-icons"></i>
                                        </a>

                                        <a href="" onClick={(e) => e.preventDefault()} className="btn btn-light text-muted hover-text-primary btn-sm mr-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete">
                                            <i className="material-icons">delete</i>
                                        </a>

                                        <a href="" onClick={(e) => e.preventDefault()} className="btn btn-light text-muted hover-text-primary btn-sm mr-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Mark as read">
                                            <i className="material-icons">note</i>
                                        </a>

                                        <a href="" onClick={(e) => e.preventDefault()} className="btn btn-light text-muted hover-text-primary btn-sm mr-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Move">
                                            <i className="material-icons">folder_special</i>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-xl-auto d-flex align-items-center justify-content-center order-1 order-xl-2">
                                    <div className="search-field input-group mw-150">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <div className="input-group-append">
                                            <button type="button" className="btn input-group-text pr-3">
                                                <i className="material-icons">search</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-auto d-flex align-items-center justify-content-sm-end text-right my-2 order-3 order-xl-3">
                                    <div className="d-flex align-items-center mr-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Records per page">
                                        <div className="dropdown" data-bs-toggle="tooltip" data-placement="top" data-bs-placement="top" data-bs-title="Quick actions">
                                            <button type="button" className="btn btn-clean text-muted font-weight-bold mr-2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                1 - 50 of 235
                                            </button>
                                            <div className="dropdown-menu p-0 m-0 dropdown-menu-sm">
                                                <a href="" onClick={(e) => e.preventDefault()} className="dropdown-item">20 per page</a>
                                                <a href="" onClick={(e) => e.preventDefault()} className="dropdown-item">50 per page</a>
                                                <a href="" onClick={(e) => e.preventDefault()} className="dropdown-item">100 per page</a>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="" onClick={(e) => e.preventDefault()} className="btn btn-light text-muted hover-text-primary btn-sm mr-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Previose page">
                                        <i className="material-icons">keyboard_arrow_left</i>
                                    </a>
                                    <a href="" onClick={(e) => e.preventDefault()} className="btn btn-light text-muted hover-text-primary btn-sm mr-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Next page">
                                        <i className="material-icons">keyboard_arrow_right</i>
                                    </a>

                                    <button className="btn btn-light text-muted hover-text-primary btn-sm mr-2">
                                        <i className="material-icons">tune</i>
                                    </button>

                                    <button className="btn btn-light text-muted hover-text-primary btn-sm mr-2">
                                        <i className="material-icons">more_horiz</i>
                                    </button>
                                </div>
                            </div>

                            <div className="list">
                                <div className="d-block d-lg-flex align-items-start list-item py-3 px-4">
                                    <div className="d-sm-flex align-items-center">
                                        <div className="d-flex align-items-center mr-3">
                                            <div className="custom-control custom-checkbox flex-shrink-0">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" onClick={toastOpenerClick} />
                                                <label className="custom-control-label" htmlFor="customCheck1"></label>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">star</i></a>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">label</i></a>
                                        </div>

                                        <div className="d-flex align-items-center flex-nowrap mr-3 mw-200">
                                            <div className="img-as-background w-35px square rounded mr-3"><img alt='' src="assets/images/phonebook/mark.png" /></div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="font-weight-500">Sean Paul</a>
                                        </div>
                                    </div>

                                    <div className="content-holder mt-2 mr-2">
                                        <div>
                                            <span className="font-weight-bold mr-2">Digital PPV Customer Confirmation - </span>
                                            <span className="text-muted">Thank you for ordering UFC 240 Holloway vs Edgar Alternate camera angles...</span>
                                        </div>
                                        <div className="mt-2">
                                            <span className="badge bg-primary-opacity-3 text-primary font-weight-bold mr-1">inbox</span>&nbsp;<span className="badge bg-danger-opacity-3 text-danger font-weight-bold">task</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 mr-3 font-weight-bold mw-150 text-right">8:30 PM</div>
                                </div>

                                <div className="d-block d-lg-flex align-items-start list-item py-3 px-4">
                                    <div className="d-sm-flex align-items-center">
                                        <div className="d-flex align-items-center mr-3">
                                            <div className="custom-control custom-checkbox flex-shrink-0">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2" onClick={toastOpenerClick} />
                                                <label className="custom-control-label" htmlFor="customCheck2"></label>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">star</i></a>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">label</i></a>
                                        </div>

                                        <div className="d-flex align-items-center flex-nowrap mr-3 mw-200">
                                            <div className="img-as-background w-35px square rounded mr-3"><img alt='' src="assets/images/phonebook/mark.png" /></div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="font-weight-500">Oliver Jake</a>
                                        </div>
                                    </div>

                                    <div className="content-holder mt-2 mr-2">
                                        <div>
                                            <span className="font-weight-bold mr-2">Your iBuy.com grocery shopping confirmation - </span>
                                            <span className="text-muted">Please make sure that you have one of the following cards with you when we deliver your order...</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 mr-3 font-weight-bold text-right mw-150">day ago</div>
                                </div>

                                <div className="d-block d-lg-flex align-items-start list-item py-3 px-4">
                                    <div className="d-sm-flex align-items-center">
                                        <div className="d-flex align-items-center mr-3">
                                            <div className="custom-control custom-checkbox flex-shrink-0">
                                                <input type="checkbox" className="custom-control-input" id="customCheck3" onClick={toastOpenerClick} />
                                                <label className="custom-control-label" htmlFor="customCheck3"></label>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">star</i></a>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">label</i></a>
                                        </div>

                                        <div className="d-flex align-items-center flex-nowrap mr-3 mw-200">
                                            <div className="d-inline-flex align-items-center justify-content-center w-35px h-35px rounded bg-info-opacity-3 mr-3">
                                                <span className="font-weight-bold text-info">EB</span>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="font-weight-500">Enrico Bugatti</a>
                                        </div>
                                    </div>

                                    <div className="content-holder mt-2 mr-2">
                                        <div>
                                            <span className="font-weight-bold mr-2">Your Order #224820998666029 has been Confirmed - </span>
                                            <span className="text-muted">Your Order #224820998666029 has been placed on Saturday, 29 June</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 mr-3 font-weight-normal w-100px text-right text-muted mw-150">11:20PM</div>
                                </div>

                                <div className="d-block d-lg-flex align-items-start list-item py-3 px-4">
                                    <div className="d-sm-flex align-items-center">
                                        <div className="d-flex align-items-center mr-3">
                                            <div className="custom-control custom-checkbox flex-shrink-0">
                                                <input type="checkbox" className="custom-control-input" id="customCheck4" onClick={toastOpenerClick} />
                                                <label className="custom-control-label" htmlFor="customCheck4"></label>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">star</i></a>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">label</i></a>
                                        </div>

                                        <div className="d-flex align-items-center flex-nowrap mr-3 mw-200">
                                            <div className="img-as-background w-35px square rounded mr-3"><img alt='' src="assets/images/phonebook/mark.png" /></div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="font-weight-500">Jane Goodall</a>
                                        </div>
                                    </div>

                                    <div className="content-holder mt-2 mr-2">
                                        <div>
                                            <span className="font-weight-bold mr-2">Payment Notification DLOP2329KD - </span>
                                            <span className="text-muted">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you your account. This...</span>
                                        </div>
                                        <div className="mt-2">
                                            <span className="badge bg-danger-opacity-3 text-danger font-weight-bold">new</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 mr-3 font-weight-normal w-100px text-right text-muted mw-150">2 days ago</div>
                                </div>

                                <div className="d-block d-lg-flex align-items-start list-item py-3 px-4">
                                    <div className="d-sm-flex align-items-center">
                                        <div className="d-flex align-items-center mr-3">
                                            <div className="custom-control custom-checkbox flex-shrink-0">
                                                <input type="checkbox" className="custom-control-input" id="customCheck5" onClick={toastOpenerClick} />
                                                <label className="custom-control-label" htmlFor="customCheck5"></label>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">star</i></a>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">label</i></a>
                                        </div>

                                        <div className="d-flex align-items-center flex-nowrap mr-3 mw-200">
                                            <div className="d-inline-flex align-items-center justify-content-center w-35px h-35px rounded bg-primary-opacity-3 mr-3">
                                                <span className="font-weight-bold text-primary">MP</span>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="font-weight-500">Max O'Brien Planck</a>
                                        </div>
                                    </div>

                                    <div className="content-holder mt-2 mr-2">
                                        <div>
                                            <span className="font-weight-bold mr-2">Congratulations on your iRun Coach subscription - </span>
                                            <span className="text-muted">Congratulations on your iRun Coach subscription. You made no space for excuses and you</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 mr-3 font-weight-normal w-100px text-right text-muted mw-150">July 25</div>
                                </div>

                                <div className="d-block d-lg-flex align-items-start list-item py-3 px-4">
                                    <div className="d-sm-flex align-items-center">
                                        <div className="d-flex align-items-center mr-3">
                                            <div className="custom-control custom-checkbox flex-shrink-0">
                                                <input type="checkbox" className="custom-control-input" id="customCheck6" onClick={toastOpenerClick} />
                                                <label className="custom-control-label" htmlFor="customCheck6"></label>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">star</i></a>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">label</i></a>
                                        </div>

                                        <div className="d-flex align-items-center flex-nowrap mr-3 mw-200">
                                            <div className="img-as-background w-35px square rounded mr-3"><img alt='' src="assets/images/phonebook/mark.png" /></div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="font-weight-500">Rita Levi-Montalcini</a>
                                        </div>
                                    </div>

                                    <div className="content-holder mt-2 mr-2">
                                        <div>
                                            <span className="font-weight-bold mr-2">Pay bills &amp; win up to 600$ Cashback! - </span>
                                            <span className="text-muted">Congratulations on your iRun Coach subscription. You made no space for excuses and you decided on a healthier and happier life...</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 mr-3 font-weight-normal w-100px text-right text-muted mw-150">July 24</div>
                                </div>

                                <div className="d-block d-lg-flex align-items-start list-item py-3 px-4">
                                    <div className="d-sm-flex align-items-center">
                                        <div className="d-flex align-items-center mr-3">
                                            <div className="custom-control custom-checkbox flex-shrink-0">
                                                <input type="checkbox" className="custom-control-input" id="customCheck7" onClick={toastOpenerClick} />
                                                <label className="custom-control-label" htmlFor="customCheck7"></label>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">star</i></a>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">label</i></a>
                                        </div>

                                        <div className="d-flex align-items-center flex-nowrap mr-3 mw-200">
                                            <div className="img-as-background w-35px square rounded mr-3"><img alt='' src="assets/images/phonebook/mark.png" /></div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="font-weight-500">Stephen Hawking</a>
                                        </div>
                                    </div>

                                    <div className="content-holder mt-2 mr-2">
                                        <div>
                                            <span className="font-weight-bold mr-2">Activate your LIPO Account today - </span>
                                            <span className="text-muted">Thank you for creating a LIPO Account. Please click the link below to activate your account.</span>
                                        </div>
                                        <div className="mt-2">
                                            <span className="badge bg-warning-opacity-3 text-warning font-weight-bold mr-2">task</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 mr-3 font-weight-normal w-100px text-right text-muted mw-150">July 13</div>
                                </div>

                                <div className="d-block d-lg-flex align-items-start list-item py-3 px-4">
                                    <div className="d-sm-flex align-items-center">
                                        <div className="d-flex align-items-center mr-3">
                                            <div className="custom-control custom-checkbox flex-shrink-0">
                                                <input type="checkbox" className="custom-control-input" id="customCheck8" onClick={toastOpenerClick} />
                                                <label className="custom-control-label" htmlFor="customCheck8"></label>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">star</i></a>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">label</i></a>
                                        </div>

                                        <div className="d-flex align-items-center flex-nowrap mr-3 mw-200">
                                            <div className="d-inline-flex align-items-center justify-content-center w-35px h-35px rounded bg-light mr-3">
                                                <span className="font-weight-bold">WE</span>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="font-weight-500">Wolfgang Ernst Pauli</a>
                                        </div>
                                    </div>

                                    <div className="content-holder mt-2 mr-2">
                                        <div>
                                            <span className="font-weight-bold mr-2">About your request for PalmLake - </span>
                                            <span className="text-muted">What you requested can't be arranged ahead of time but PalmLake said they'll do their best to accommodate you upon arrival....</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 mr-3 font-weight-bold text-muted w-100px text-right">25 May</div>
                                </div>

                                <div className="d-block d-lg-flex align-items-start list-item py-3 px-4">
                                    <div className="d-sm-flex align-items-center">
                                        <div className="d-flex align-items-center mr-3">
                                            <div className="custom-control custom-checkbox flex-shrink-0">
                                                <input type="checkbox" className="custom-control-input" id="customCheck9" onClick={toastOpenerClick} />
                                                <label className="custom-control-label" htmlFor="customCheck9"></label>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">star</i></a>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">label</i></a>
                                        </div>

                                        <div className="d-flex align-items-center flex-nowrap mr-3 mw-200">
                                            <div className="img-as-background w-35px square rounded mr-3"><img alt='' src="assets/images/phonebook/mark.png" /></div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="font-weight-500">Patty Jo Watson</a>
                                        </div>
                                    </div>

                                    <div className="content-holder mt-2 mr-2">
                                        <div>
                                            <span className="font-weight-bold mr-2">Welcome, Patty - </span>
                                            <span className="text-muted">Discover interesting ideas and unique perspectives. Read, explore and follow your interests. Get personalized recommendations delivered to you....</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 mr-3 font-weight-normal w-100px text-right text-muted mw-150">July 24</div>
                                </div>

                                <div className="d-block d-lg-flex align-items-start list-item py-3 px-4">
                                    <div className="d-sm-flex align-items-center">
                                        <div className="d-flex align-items-center mr-3">
                                            <div className="custom-control custom-checkbox flex-shrink-0">
                                                <input type="checkbox" className="custom-control-input" id="customCheck10" onClick={toastOpenerClick} />
                                                <label className="custom-control-label" htmlFor="customCheck10"></label>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">star</i></a>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">label</i></a>
                                        </div>

                                        <div className="d-flex align-items-center flex-nowrap mr-3 mw-200">
                                            <div className="img-as-background w-35px square rounded mr-3"><img alt='' src="assets/images/phonebook/mark.png" /></div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="font-weight-500">Blaise Pascal</a>
                                        </div>
                                    </div>

                                    <div className="content-holder mt-2 mr-2">
                                        <div>
                                            <span className="font-weight-bold mr-2">Free Video Marketing Guide - </span>
                                            <span className="text-muted">Video has rolled into every marketing platform or channel, leaving...</span>
                                        </div>
                                        <div className="mt-2">
                                            <span className="badge bg-success-opacity-3 text-success font-weight-bold label-inline">project</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 mr-3 font-weight-normal w-100px text-right text-muted mw-150">July 13</div>
                                </div>

                                <div className="d-block d-lg-flex align-items-start list-item py-3 px-4">
                                    <div className="d-sm-flex align-items-center">
                                        <div className="d-flex align-items-center mr-3">
                                            <div className="custom-control custom-checkbox flex-shrink-0">
                                                <input type="checkbox" className="custom-control-input" id="customCheck11" onClick={toastOpenerClick} />
                                                <label className="custom-control-label" htmlFor="customCheck11"></label>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">star</i></a>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">label</i></a>
                                        </div>

                                        <div className="d-flex align-items-center flex-nowrap mr-3 mw-200">
                                            <div className="d-inline-flex align-items-center justify-content-center w-35px h-35px rounded bg-warning-opacity-3 mr-3">
                                                <span className="font-weight-bold text-warning">RO</span>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="font-weight-500">Roberts O'Neill Wilson</a>
                                        </div>
                                    </div>

                                    <div className="content-holder mt-2 mr-2">
                                        <div>
                                            <span className="font-weight-bold mr-2">Your iBuy.com grocery shopping confirmation - </span>
                                            <span className="text-muted">Please make sure that you have one of the following cards with you when we deliver your order...</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 mr-3 font-weight-bold text-right mw-150">day ago</div>
                                </div>

                                <div className="d-block d-lg-flex align-items-start list-item py-3 px-4">
                                    <div className="d-sm-flex align-items-center">
                                        <div className="d-flex align-items-center mr-3">
                                            <div className="custom-control custom-checkbox flex-shrink-0">
                                                <input type="checkbox" className="custom-control-input" id="customCheck12" onClick={toastOpenerClick} />
                                                <label className="custom-control-label" htmlFor="customCheck12"></label>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">star</i></a>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">label</i></a>
                                        </div>

                                        <div className="d-flex align-items-center flex-nowrap mr-3 mw-200">
                                            <div className="d-inline-flex align-items-center justify-content-center w-35px h-35px rounded bg-primary-opacity-3 mr-3">
                                                <span className="font-weight-bold text-primary">EF</span>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="font-weight-500">Enrico Fermi</a>
                                        </div>
                                    </div>

                                    <div className="content-holder mt-2 mr-2">
                                        <div>
                                            <span className="font-weight-bold mr-2">Your Order #224820998666029 has been Confirmed - </span>
                                            <span className="text-muted">Your Order #224820998666029 has been placed on Saturday, 29 June</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 mr-3 font-weight-normal w-100px text-right text-muted mw-150">11:20PM</div>
                                </div>

                                <div className="d-block d-lg-flex align-items-start list-item py-3 px-4">
                                    <div className="d-sm-flex align-items-center">
                                        <div className="d-flex align-items-center mr-3">
                                            <div className="custom-control custom-checkbox flex-shrink-0">
                                                <input type="checkbox" className="custom-control-input" id="customCheck13" onClick={toastOpenerClick} />
                                                <label className="custom-control-label" htmlFor="customCheck13"></label>
                                            </div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">star</i></a>
                                            <a href="" onClick={(e) => e.preventDefault()} className="btn btn-sm text-muted px-1 hover-text-warning"><i className="material-icons">label</i></a>
                                        </div>

                                        <div className="d-flex align-items-center flex-nowrap mr-3 mw-200">
                                            <div className="img-as-background w-35px square rounded mr-3"><img alt='' src="assets/images/phonebook/mark.png" /></div>
                                            <a href="" onClick={(e) => e.preventDefault()} className="font-weight-500">Jane Goodall</a>
                                        </div>
                                    </div>

                                    <div className="content-holder mt-2 mr-2">
                                        <div>
                                            <span className="font-weight-bold mr-2">Payment Notification DLOP2329KD - </span>
                                            <span className="text-muted">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you your account. This...</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 mr-3 font-weight-normal w-100px text-right text-muted mw-150">2 days ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Toast
                ref={toast}
                position="top-right"
                autoOpen
                showCloseButton
                type="info"
                className="bootstrap with-header mark-as-readed"
            >
                <div className="header">
                    <h6 className="text-success">
                        <i className="fas fa-check-circle font-size-18px mr-1"></i> Congratulations!
                    </h6>
                </div>
                <div className="content">
                    Mark as readed
                </div>
            </Toast>
        </div>
    )
}

export default withAnimation(Inbox)
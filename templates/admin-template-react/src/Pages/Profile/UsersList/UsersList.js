import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, ProgressBar } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function UsersList() {

    useEffect(() => { document.title = `Users - ${defaultTitle}` }, []);

    return (
        <div className="container">
            <div className="card mb-5">
                <div className="card-body">
                    <div className="row mb-6">
                        <div className="col-md-auto mr-2 mt-lg-0 mt-3">
                            <div className="img-as-background w-125 square rounded-circle mx-auto mx-sm-0">
                                <img alt="" src="assets/images/people/andrew.jpg" />
                            </div>
                        </div>

                        <div className="col-md">
                            <div className="d-flex justify-content-between flex-wrap mt-1">
                                <div className="d-flex align-items-center mr-3">
                                    <h5 className="mr-2"><a href="#" className="text-black hover-text-primary font-weight-500">Nick Dotson</a></h5>
                                </div>
                                <div className="my-lg-0 my-3">
                                    <Button className="secondary very-small">Contact</Button>&nbsp;
                                    <Button className="primary very-small">Hire me</Button>
                                </div>
                            </div>

                            <div className="row justify-content-between mt-1">
                                <div className="col-lg-6 col-xl-8">
                                    <div className="d-flex flex-wrap mb-4">
                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">email</i> j.doe@mailinator.com
                                        </a>

                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">account_box</i> PR Manager
                                        </a>

                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">place</i> Melbourne
                                        </a>
                                    </div>

                                    <p>I distinguish three main text objectives could be merely to inform people. <br /> A second could be persuade people.You want people to bay objective</p>
                                </div>
                                <div className="col-lg-6 col-xl-4 d-flex align-items-end">
                                    <div className="d-flex align-items-center w-100">
                                        <span className="font-weight-bold">Progress</span>

                                        <div className="mx-3 w-100">
                                            <ProgressBar value={36} className=""></ProgressBar>
                                        </div>
                                        <span className="font-weight-bold text-dark">36%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="d-flex align-items-center flex-wrap mt-5">
                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">attach_money</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Sales</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>249,500</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">point_of_sale</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Expenses</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>164,700</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">insights</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Net</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>335,120</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">sticky_note_2</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">99 Projects</small>
                                <a href="#" className="text-primary font-weight-500">View</a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">comment</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">648 Comments</small>
                                <a href="#" className="text-primary font-weight-500">View</a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mb-2 float-left">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">group</i>
                            </span>

                            <div className="members d-flex">
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Mark Stone">
                                    <img alt="Pic" src="assets/images/phonebook/andrew.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Charlie Stone" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/johnny.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Luca Doncic" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/mark.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Nick Mana" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/steven.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Teresa Fox" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/janet.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 h-30px rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center" style={{ marginLeft: '-10px', zIndex: 9 }}>
                                    <small>9+</small>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >

            <div className="card mb-5">
                <div className="card-body">
                    <div className="row mb-6">
                        <div className="col-md-auto mr-2 mt-lg-0 mt-3">
                            <div className="d-inline-flex align-items-center justify-content-center bg-danger-opacity-3 w-125 h-125 rounded-circle mx-auto mx-sm-0">
                                <h3 className="text-danger m-0">MP</h3>
                            </div>
                        </div>

                        <div className="col-md">
                            <div className="d-flex justify-content-between flex-wrap mt-1">
                                <div className="d-flex align-items-center mr-3">
                                    <h5 className="mr-2"><a href="#" className="text-black hover-text-primary font-weight-500">Matt Pears</a></h5>
                                </div>
                                <div className="my-lg-0 my-3">
                                    <Button className="secondary very-small">Contact</Button>&nbsp;
                                    <Button className="primary very-small">Hire me</Button>
                                </div>
                            </div>

                            <div className="row justify-content-between mt-1">
                                <div className="col-lg-6 col-xl-8">
                                    <div className="d-flex flex-wrap mb-4">
                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">email</i> matt@mailinator.com
                                        </a>

                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">account_box</i> Designer
                                        </a>

                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">place</i> Europe
                                        </a>
                                    </div>

                                    <p>I distinguish three main text objectives could be merely to inform people. <br /> A second could be persuade people.You want people to bay objective</p>
                                </div>
                                <div className="col-lg-6 col-xl-4 d-flex align-items-end">
                                    <div className="d-flex align-items-center w-100">
                                        <span className="font-weight-bold">Progress</span>

                                        <div className="mx-3 w-100">
                                            <ProgressBar value={55} className="error"></ProgressBar>
                                        </div>
                                        <span className="font-weight-bold text-dark">55%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="d-flex align-items-center flex-wrap mt-5">
                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">attach_money</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Sales</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>879,100</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">point_of_sale</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Expenses</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>53,100</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">insights</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Net</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>782,300</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">sticky_note_2</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">73 Projects</small>
                                <a href="#" className="text-primary font-weight-500">View</a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">comment</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">941 Comments</small>
                                <a href="#" className="text-primary font-weight-500">View</a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mb-2 float-left">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">group</i>
                            </span>

                            <div className="members d-flex">
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Mark Stone">
                                    <img alt="Pic" src="assets/images/phonebook/andrew.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Charlie Stone" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/johnny.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Luca Doncic" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/mark.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Nick Mana" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/steven.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Teresa Fox" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/janet.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 h-30px rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center" style={{ marginLeft: '-10px', zIndex: 9 }}>
                                    <small>9+</small>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
            </div >

            <div className="card mb-5">
                <div className="card-body">
                    <div className="row mb-6">
                        <div className="col-md-auto mr-2 mt-lg-0 mt-3">
                            <div className="img-as-background w-125 square rounded-circle mx-auto mx-sm-0">
                                <img alt="" src="assets/images/people/laura.jpg" />
                            </div>
                        </div>

                        <div className="col-md">
                            <div className="d-flex justify-content-between flex-wrap mt-1">
                                <div className="d-flex align-items-center mr-3">
                                    <h5 className="mr-2"><a href="#" className="text-black hover-text-primary font-weight-500">Charlie Stone</a></h5>
                                </div>
                                <div className="my-lg-0 my-3">
                                    <Button className="secondary very-small">Contact</Button>&nbsp;
                                    <Button className="primary very-small">Hire me</Button>
                                </div>
                            </div>

                            <div className="row justify-content-between mt-1">
                                <div className="col-lg-6 col-xl-8">
                                    <div className="d-flex flex-wrap mb-4">
                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">email</i> charlie@mailinator.com
                                        </a>

                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">account_box</i> Web Developer
                                        </a>

                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">place</i> Austria
                                        </a>
                                    </div>

                                    <p>I distinguish three main text objectives could be merely to inform people. <br /> A second could be persuade people.You want people to bay objective</p>
                                </div>
                                <div className="col-lg-6 col-xl-4 d-flex align-items-end">
                                    <div className="d-flex align-items-center w-100">
                                        <span className="font-weight-bold">Progress</span>

                                        <div className="mx-3 w-100">
                                            <ProgressBar value={47} className="warning"></ProgressBar>
                                        </div>
                                        <span className="font-weight-bold text-dark">47%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="d-flex align-items-center flex-wrap mt-5">
                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">attach_money</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Sales</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>49,500</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">point_of_sale</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Expenses</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>131,500</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">insights</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Net</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>382,300</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">sticky_note_2</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">46 Projects</small>
                                <a href="#" className="text-primary font-weight-500">View</a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">comment</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">448 Comments</small>
                                <a href="#" className="text-primary font-weight-500">View</a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mb-2 float-left">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">group</i>
                            </span>

                            <div className="members d-flex">
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Mark Stone">
                                    <img alt="Pic" src="assets/images/phonebook/andrew.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Charlie Stone" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/johnny.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Luca Doncic" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/mark.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Nick Mana" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/steven.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Teresa Fox" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/janet.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 h-30px rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center" style={{ marginLeft: '-10px', zIndex: 9 }}>
                                    <small>9+</small>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
            </div >

            <div className="card mb-5">
                <div className="card-body">
                    <div className="row mb-6">
                        <div className="col-md-auto mr-2 mt-lg-0 mt-3">
                            <div className="d-inline-flex align-items-center justify-content-center bg-success-opacity-3 w-125 h-125 rounded-circle mx-auto mx-sm-0">
                                <h3 className="text-success m-0">SF</h3>
                            </div>
                        </div>

                        <div className="col-md">
                            <div className="d-flex justify-content-between flex-wrap mt-1">
                                <div className="d-flex align-items-center mr-3">
                                    <h5 className="mr-2"><a href="#" className="text-black hover-text-primary font-weight-500">Sergei Ford</a></h5>
                                </div>
                                <div className="my-lg-0 my-3">
                                    <Button className="secondary very-small">Contact</Button>&nbsp;
                                    <Button className="primary very-small">Hire me</Button>
                                </div>
                            </div>

                            <div className="row justify-content-between mt-1">
                                <div className="col-lg-6 col-xl-8">
                                    <div className="d-flex flex-wrap mb-4">
                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">email</i> sford@mailinator.com
                                        </a>

                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">account_box</i> Angular Developer
                                        </a>

                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">place</i> Canada
                                        </a>
                                    </div>

                                    <p>I distinguish three main text objectives could be merely to inform people. <br /> A second could be persuade people.You want people to bay objective</p>
                                </div>
                                <div className="col-lg-6 col-xl-4 d-flex align-items-end">
                                    <div className="d-flex align-items-center w-100">
                                        <span className="font-weight-bold">Progress</span>

                                        <div className="mx-3 w-100">
                                            <ProgressBar value={74} className="success"></ProgressBar>
                                        </div>
                                        <span className="font-weight-bold text-dark">78%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="d-flex align-items-center flex-wrap mt-5">
                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">attach_money</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Sales</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>138,500</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">point_of_sale</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Expenses</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>129,200</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">insights</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Net</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>565,120</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">sticky_note_2</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">89 Projects</small>
                                <a href="#" className="text-primary font-weight-500">View</a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">comment</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">252 Comments</small>
                                <a href="#" className="text-primary font-weight-500">View</a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mb-2 float-left">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">group</i>
                            </span>

                            <div className="members d-flex">
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Mark Stone">
                                    <img alt="Pic" src="assets/images/phonebook/andrew.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Charlie Stone" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/johnny.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Luca Doncic" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/mark.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Nick Mana" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/steven.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Teresa Fox" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/janet.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 h-30px rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center" style={{ marginLeft: '-10px', zIndex: 9 }}>
                                    <small>9+</small>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
            </div >

            <div className="card mb-5">
                <div className="card-body">
                    <div className="row mb-6">
                        <div className="col-md-auto mr-2 mt-lg-0 mt-3">
                            <div className="img-as-background w-125 square rounded-circle mx-auto mx-sm-0">
                                <img alt="" src="assets/images/people/maria.jpg" />
                            </div>
                        </div>

                        <div className="col-md">
                            <div className="d-flex justify-content-between flex-wrap mt-1">
                                <div className="d-flex align-items-center mr-3">
                                    <h5 className="mr-2"><a href="#" className="text-black hover-text-primary font-weight-500">Lisa Muller</a></h5>
                                </div>
                                <div className="my-lg-0 my-3">
                                    <Button className="secondary very-small">Contact</Button>&nbsp;
                                    <Button className="primary very-small">Hire me</Button>
                                </div>
                            </div>

                            <div className="row justify-content-between mt-1">
                                <div className="col-lg-6 col-xl-8">
                                    <div className="d-flex flex-wrap mb-4">
                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">email</i> lisa@mailinator.com
                                        </a>

                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">account_box</i> SEO Expert
                                        </a>

                                        <a href="#" className="text-dark hover-text-primary d-inline-flex align-items-center mr-lg-4 mr-3 mb-lg-0 mb-2">
                                            <i className="material-icons font-size-18px mr-2">place</i> Swiss
                                        </a>
                                    </div>

                                    <p>I distinguish three main text objectives could be merely to inform people. <br /> A second could be persuade people.You want people to bay objective</p>
                                </div>
                                <div className="col-lg-6 col-xl-4 d-flex align-items-end">
                                    <div className="d-flex align-items-center w-100">
                                        <span className="font-weight-bold">Progress</span>

                                        <div className="mx-3 w-100">
                                            <ProgressBar value={95} className="info"></ProgressBar>
                                        </div>
                                        <span className="font-weight-bold text-dark">95%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="d-flex align-items-center flex-wrap mt-5">
                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">attach_money</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Sales</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>678,120</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">point_of_sale</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Expenses</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>149,450</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">insights</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">Net</small>
                                <h5 className="mb-0"><span className="font-weight-500">$</span>552,500</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">sticky_note_2</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">15 Projects</small>
                                <a href="#" className="text-primary font-weight-500">View</a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">comment</i>
                            </span>
                            <div className="d-flex flex-column">
                                <small className="font-weight-500">166 Comments</small>
                                <a href="#" className="text-primary font-weight-500">View</a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-lg-fill mb-2 float-left">
                            <span className="mr-4 d-inline-flex align-items-center">
                                <i className="material-icons text-muted font-size-32px">group</i>
                            </span>

                            <div className="members d-flex">
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Mark Stone">
                                    <img alt="Pic" src="assets/images/phonebook/andrew.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Charlie Stone" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/johnny.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Luca Doncic" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/mark.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Nick Mana" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/steven.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Teresa Fox" style={{ marginLeft: '-10px' }}>
                                    <img alt="Pic" src="assets/images/phonebook/janet.png" />
                                </div>
                                <div className="w-30px border border-color-white border-width-2 h-30px rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center" style={{ marginLeft: '-10px', zIndex: 9 }}>
                                    <small>9+</small>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}

export default withAnimation(UsersList)
import './ProjectsList2.scss';

import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, ProgressBar } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function ProjectsList2({ openTodayMenu }) {

  useEffect(() => { document.title = `Projects List 2 - ${defaultTitle}` }, []);

  return (
    <div className="container projects-list2">
      <div className="row">
        <div className="col-12 mb-3"><h4>Projects List 2</h4></div>
      </div>

      <div className="row">
        <div className="col-md-10 col-lg-6 mb-5 mx-auto">
          <div className="card h-100">
            <div className="card-header border-0 px-6 pt-6">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 mr-4 w-65px square rounded-circle img-as-background">
                  <img src="assets/images/brands/circle-google.png" alt="" />
                </div>

                <div className="d-flex flex-column mr-auto">
                  <h5 className="mb-1"><a href="#" className="text-dark font-weight-bold text-decoration-none">Google - Next generation search engine</a></h5>
                  <small className="text-muted font-weight-bold">Find what you search</small>
                </div>
              </div>

              <div
                className="settings-button"
                onClick={(e) => openTodayMenu(e)}
                onPointerUp={(e) => e.stopPropagation()}
              >…</div>
            </div>

            <div className="card-body px-6">
              <div className="row">
                <div className="col-auto d-flex flex-column mb-5">
                  <span className="d-block font-weight-bold mb-4">Start Date</span>
                  <small className="font-weight-bold bg-primary-opacity-2 btn btn-sm text-primary">14 Jan, 08</small>
                </div>
                <div className="col-auto d-flex flex-column mb-5">
                  <span className="d-block font-weight-bold mb-4">Due Date</span>
                  <small className="font-weight-bold bg-danger-opacity-2 btn btn-sm text-danger">21 Nov, 12</small>
                </div>

                <div className="col mb-5">
                  <span className="d-block font-weight-bold mb-4">Progress</span>
                  <div className="d-flex align-items-center pt-1">
                    <div className="mt-2 mb-2 w-100">
                      <ProgressBar value={100} className="success"></ProgressBar>
                    </div>
                    <span className="ml-3 font-weight-bold">100%</span>
                  </div>
                </div>
              </div>

              <p className="mb-5">I distinguish three main text objectives.First, your objective could be merely to inform people.A second be to persuade people.</p>

              <div className="row">
                <div className="col-auto d-flex flex-column mb-7">
                  <span className="font-weight-bold mb-3">Budget</span>
                  <span className="font-weight-bold pt-1"><span className="font-weight-bold text-dark-50">$</span>1 855 249,500</span>
                </div>

                <div className="col-auto d-flex flex-column mb-7">
                  <span className="font-weight-bold mb-3">Expenses</span>
                  <span className="font-weight-bold pt-1"><span className="font-weight-bold text-dark-50">$</span>3 855 249,500</span>
                </div>

                <div className="col flex-column mb-7">
                  <span className="font-weight-bold d-block mb-2">Members</span>
                  <div className="members d-flex">
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Mark Stone">
                      <img alt="Pic" src="assets/images/phonebook/andrew.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Charlie Stone" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/johnny.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Luca Doncic" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/mark.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Nick Mana" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/steven.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Teresa Fox" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/janet.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 h-30px rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center" style={{ marginLeft: '-10px', zIndex: 9 }}>
                      <small>99+</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex align-items-sm-center flex-wrap flex-column flex-sm-row">
              <div className="d-flex">
                <div className="d-flex mr-7">
                  <a href="#" className="text-primary ml-2 small">5969 Tasks</a>
                </div>
                <div className="d-flex mr-7">
                  <a href="#" className="text-primary ml-2 small">6248 Comments</a>
                </div>
              </div>
              <div className="mt-5 mt-sm-0 mr-auto mr-sm-0 ml-sm-auto">
                <Button className="small-button primary">Details</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-10 col-lg-6 mb-5 mx-auto">
          <div className="card h-100">
            <div className="card-header border-0 px-6 pt-6">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 mr-4 w-65px square rounded-circle img-as-background">
                  <img src="assets/images/brands/circle-jqwidgets.png" alt="" />
                </div>

                <div className="d-flex flex-column mr-auto">
                  <h5 className="mb-1"><a href="https://www.jqwidgets.com/" className="text-dark font-weight-bold text-decoration-none" target="_blank" rel="noreferrer">jQWidgets - Next generation UI</a></h5>
                  <small className="text-muted font-weight-bold">Better web, less time</small>
                </div>
              </div>

              <div
                className="settings-button"
                onClick={(e) => openTodayMenu(e)}
                onPointerUp={(e) => e.stopPropagation()}
              >…</div>
            </div>

            <div className="card-body px-6">
              <div className="row">
                <div className="col-auto d-flex flex-column mb-5">
                  <span className="d-block font-weight-bold mb-4">Start Date</span>
                  <small className="font-weight-bold bg-primary-opacity-2 btn btn-sm text-primary">14 Jan, 16</small>
                </div>
                <div className="col-auto d-flex flex-column mb-5">
                  <span className="d-block font-weight-bold mb-4">Due Date</span>
                  <small className="font-weight-bold bg-danger-opacity-2 btn btn-sm text-danger">21 Nov, 18</small>
                </div>

                <div className="col mb-5">
                  <span className="d-block font-weight-bold mb-4">Progress</span>
                  <div className="d-flex align-items-center pt-1">
                    <div className="mt-2 mb-2 w-100">
                      <ProgressBar value={89} className="primary"></ProgressBar>
                    </div>
                    <span className="ml-3 font-weight-bold">89%</span>
                  </div>
                </div>
              </div>

              <p className="mb-5">The leading HTML5 UI Widgets Framework. Build responsive Web Apps with Angular, React, Vue, Web Components and jQuery. </p>

              <div className="row">
                <div className="col-auto d-flex flex-column mb-7">
                  <span className="font-weight-bold mb-3">Budget</span>
                  <span className="font-weight-bold pt-1"><span className="font-weight-bold text-dark-50">$</span>249,500</span>
                </div>

                <div className="col-auto d-flex flex-column mb-7">
                  <span className="font-weight-bold mb-3">Expenses</span>
                  <span className="font-weight-bold pt-1"><span className="font-weight-bold text-dark-50">$</span>439,500</span>
                </div>

                <div className="col flex-column mb-7">
                  <span className="font-weight-bold d-block mb-2">Members</span>
                  <div className="members d-flex">
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Mark Stone">
                      <img alt="Pic" src="assets/images/phonebook/andrew.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Charlie Stone" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/johnny.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Luca Doncic" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/mark.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Nick Mana" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/steven.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Teresa Fox" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/janet.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 h-30px rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center" style={{ marginLeft: '-10px', zIndex: 9 }}>
                      <small>5+</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex align-items-sm-center flex-wrap flex-column flex-sm-row">
              <div className="d-flex">
                <div className="d-flex mr-7">
                  <a href="#" className="text-primary ml-2 small">372 Tasks</a>
                </div>
                <div className="d-flex mr-7">
                  <a href="#" className="text-primary ml-2 small">598 Comments</a>
                </div>
              </div>
              <div className="mt-5 mt-sm-0 mr-auto mr-sm-0 ml-sm-auto">
                <Button className="small-button primary">Details</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-10 col-lg-6 mb-5 mx-auto">
          <div className="card h-100">
            <div className="card-header border-0 px-6 pt-6">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 mr-4 w-65px square rounded-circle img-as-background">
                  <img src="assets/images/brands/circle-angular.svg" alt="" />
                </div>

                <div className="d-flex flex-column mr-auto">
                  <h5 className="mb-1"><a href="#" className="text-dark font-weight-bold text-decoration-none" target="_blank" rel="noreferrer">Angular - Web framework</a></h5>
                  <small className="text-muted font-weight-bold">TypeScript-based open-source web application framework</small>
                </div>
              </div>

              <div
                className="settings-button"
                onClick={(e) => openTodayMenu(e)}
                onPointerUp={(e) => e.stopPropagation()}
              >…</div>
            </div>

            <div className="card-body px-6">
              <div className="row">
                <div className="col-auto d-flex flex-column mb-5">
                  <span className="d-block font-weight-bold mb-4">Start Date</span>
                  <small className="font-weight-bold bg-primary-opacity-2 btn btn-sm text-primary">14 Jan, 12</small>
                </div>
                <div className="col-auto d-flex flex-column mb-5">
                  <span className="d-block font-weight-bold mb-4">Due Date</span>
                  <small className="font-weight-bold bg-danger-opacity-2 btn btn-sm text-danger">21 Nov, 16</small>
                </div>

                <div className="col mb-5">
                  <span className="d-block font-weight-bold mb-4">Progress</span>
                  <div className="d-flex align-items-center pt-1">
                    <div className="mt-2 mb-2 w-100">
                      <ProgressBar value={27} className="error"></ProgressBar>
                    </div>
                    <span className="ml-3 font-weight-bold">27%</span>
                  </div>
                </div>
              </div>

              <p className="mb-5">Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS</p>

              <div className="row">
                <div className="col-auto d-flex flex-column mb-7">
                  <span className="font-weight-bold mb-3">Budget</span>
                  <span className="font-weight-bold pt-1"><span className="font-weight-bold text-dark-50">$</span>139,500</span>
                </div>

                <div className="col-auto d-flex flex-column mb-7">
                  <span className="font-weight-bold mb-3">Expenses</span>
                  <span className="font-weight-bold pt-1"><span className="font-weight-bold text-dark-50">$</span>939,500</span>
                </div>

                <div className="col flex-column mb-7">
                  <span className="font-weight-bold d-block mb-2">Members</span>
                  <div className="members d-flex">
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Mark Stone">
                      <img alt="Pic" src="assets/images/phonebook/andrew.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Charlie Stone" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/johnny.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Luca Doncic" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/mark.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Nick Mana" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/steven.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Teresa Fox" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/janet.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 h-30px rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center" style={{ marginLeft: '-10px', zIndex: 9 }}>
                      <small>5+</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex align-items-sm-center flex-wrap flex-column flex-sm-row">
              <div className="d-flex">
                <div className="d-flex mr-7">
                  <a href="#" className="text-primary ml-2 small">72 Tasks</a>
                </div>
                <div className="d-flex mr-7">
                  <a href="#" className="text-primary ml-2 small">648 Comments</a>
                </div>
              </div>
              <div className="mt-5 mt-sm-0 mr-auto mr-sm-0 ml-sm-auto">
                <Button className="small-button primary">Details</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-10 col-lg-6 mb-5 mx-auto">
          <div className="card h-100">
            <div className="card-header border-0 px-6 pt-6">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 mr-4 w-65px square rounded-circle img-as-background">
                  <img src="assets/images/brands/circle-htmlelements.png" alt="" />
                </div>

                <div className="d-flex flex-column mr-auto">
                  <h5 className="mb-1"><a href="#" className="text-dark font-weight-bold text-decoration-none" target="_blank" rel="noreferrer">HTMElements - Web Components for Enterprise</a></h5>
                  <small className="text-muted font-weight-bold">Smart is a modern Vanilla JS and ES6 library</small>
                </div>
              </div>

              <div
                className="settings-button"
                onClick={(e) => openTodayMenu(e)}
                onPointerUp={(e) => e.stopPropagation()}
              >…</div>
            </div>

            <div className="card-body px-6">
              <div className="row">
                <div className="col-auto d-flex flex-column mb-5">
                  <span className="d-block font-weight-bold mb-4">Start Date</span>
                  <small className="font-weight-bold bg-primary-opacity-2 btn btn-sm text-primary">13 Mar, 11</small>
                </div>
                <div className="col-auto d-flex flex-column mb-5">
                  <span className="d-block font-weight-bold mb-4">Due Date</span>
                  <small className="font-weight-bold bg-danger-opacity-2 btn btn-sm text-danger">2 Jan, 21</small>
                </div>

                <div className="col mb-5">
                  <span className="d-block font-weight-bold mb-4">Progress</span>
                  <div className="d-flex align-items-center pt-1">
                    <div className="mt-2 mb-2 w-100">
                      <ProgressBar value={99} className="warning"></ProgressBar>
                    </div>
                    <span className="ml-3 font-weight-bold">99%</span>
                  </div>
                </div>
              </div>

              <p className="mb-5">Web Components for Enterprise Apps. Next-generation Vanilla JS and ES6 Front-End Web UI. Material Web Components. Angular, React, Vue, Typescript.</p>

              <div className="row">
                <div className="col-auto d-flex flex-column mb-7">
                  <span className="font-weight-bold mb-3">Budget</span>
                  <span className="font-weight-bold pt-1"><span className="font-weight-bold text-dark-50">$</span>1 249,500</span>
                </div>

                <div className="col-auto d-flex flex-column mb-7">
                  <span className="font-weight-bold mb-3">Expenses</span>
                  <span className="font-weight-bold pt-1"><span className="font-weight-bold text-dark-50">$</span>939,500</span>
                </div>

                <div className="col flex-column mb-7">
                  <span className="font-weight-bold d-block mb-2">Members</span>
                  <div className="members d-flex">
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Mark Stone">
                      <img alt="Pic" src="assets/images/phonebook/andrew.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Charlie Stone" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/johnny.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Luca Doncic" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/mark.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Nick Mana" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/steven.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 square img-as-background rounded-circle" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-title="Teresa Fox" style={{ marginLeft: '-10px' }}>
                      <img alt="Pic" src="assets/images/phonebook/janet.png" />
                    </div>
                    <div className="w-30px border border-color-white border-width-2 h-30px rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center" style={{ marginLeft: '-10px', zIndex: 9 }}>
                      <small>9+</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex align-items-sm-center flex-wrap flex-column flex-sm-row">
              <div className="d-flex">
                <div className="d-flex mr-7">
                  <a href="#" className="text-primary ml-2 small">1469 Tasks</a>
                </div>
                <div className="d-flex mr-7">
                  <a href="#" className="text-primary ml-2 small">2648 Comments</a>
                </div>
              </div>
              <div className="mt-5 mt-sm-0 mr-auto mr-sm-0 ml-sm-auto">
                <Button className="small-button primary">Details</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default withAnimation(ProjectsList2)
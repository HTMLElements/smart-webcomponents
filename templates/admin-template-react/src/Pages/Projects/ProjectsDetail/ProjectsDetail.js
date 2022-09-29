import './ProjectsDetail.scss'
import { useEffect, useRef } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { ProgressBar, Chart } from '../../../smartImports';

import { useThemeContext, defaultTitle } from '../../../contexts/themeContext';

function ProjectsDetail({ openTodayMenu }) {

  const salesComparisonData = [
    { month: 'Jan', current: 77, last: 98 },
    { month: 'Feb', current: 70, last: 89 },
    { month: 'Mar', current: 67, last: 79 },
    { month: 'Apr', current: 82, last: 81 },
    { month: 'May', current: 93, last: 99 },
    { month: 'Jun', current: 112, last: 122 },
    { month: 'Jul', current: 130, last: 129 },
    { month: 'Aug', current: 118, last: 125 },
    { month: 'Sep', current: 92, last: 99 },
    { month: 'Oct', current: 75, last: 83 },
    { month: 'Nov', current: 78, last: 90 },
    { month: 'Dec', current: 90, last: 112 }
  ];

  const { themeObj, customColors } = useThemeContext();

  const earningsChartRef = useRef(null);

  useEffect(() => { document.title = `Projects Detail - ${defaultTitle}` }, []);

  useEffect(() => {

    if (customColors) {

      earningsChartRef?.current?.addColorScheme('custom', customColors);
      earningsChartRef?.current?.refresh();

    }

  }, [customColors]);

  const earningsChartData = {
    animation: 'none',
    theme: themeObj.theme,
    caption: 'Caption',
    description: 'Description',
    showLegend: true,
    showBorderLine: true,
    padding: { left: 5, top: 15, right: 25, bottom: 5 },
    dataSource: salesComparisonData,
    xAxis: {
      dataField: 'month',
      displayText: 'Month',
      gridLines: {
        visible: false
      }
    },
    colorScheme: 'scheme32',
    seriesGroups: [
      {
        type: 'column',
        valueAxis: {
          labels: {
            horizontalAlignment: 'right',
            formatSettings: { decimalPlaces: 0 }
          },
          gridLines: {
            visible: false
          }
        },
        series: [
          { dataField: 'last', displayText: 'Last year' },
          { dataField: 'current', displayText: 'This year' }
        ]
      }
    ]
  }

  return (
    <div className="container projects-detail">
      <div className="row">
        <div className="col-12 mb-3"><h4>Project Detail</h4></div>
      </div>

      <div className="row row-mx-10">
        <div className="col-md-3 col-px-10 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <div className="row justify-content-between align-items-center mb-5">
                <div className="col">
                  <h6 className="font-weight-bold mb-0">Income</h6>
                </div>
                <div className="col text-right">
                </div>
              </div>

              <div className="row justify-content-between align-items-center mb-5">
                <div className="col">
                  <h5 className="mb-0">$53.305</h5>
                </div>
                <div className="col text-right">
                  <span className="">91%</span>
                </div>
              </div>

              <div className="row justify-content-between align-items-center">
                <div className="col-12">
                  <ProgressBar value={91} className="success"></ProgressBar>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-px-10 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <div className="row justify-content-between align-items-center mb-5">
                <div className="col">
                  <h6 className="font-weight-bold mb-0">Orders</h6>
                </div>
                <div className="col text-right">
                </div>
              </div>

              <div className="row justify-content-between align-items-center mb-5">
                <div className="col">
                  <h5 className="mb-0">9.809</h5>
                </div>
                <div className="col text-right">
                  <span className="">23%</span>
                </div>
              </div>

              <div className="row justify-content-between align-items-center">
                <div className="col-12">
                  <ProgressBar value={23} className="warning"></ProgressBar>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-px-10 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <div className="row justify-content-between align-items-center mb-5">
                <div className="col">
                  <h6 className="font-weight-bold mb-0">Activity</h6>
                </div>
                <div className="col text-right">
                </div>
              </div>

              <div className="row justify-content-between align-items-center mb-5">
                <div className="col">
                  <h5 className="mb-0">17.380</h5>
                </div>
                <div className="col text-right">
                  <span className="">50%</span>
                </div>
              </div>

              <div className="row justify-content-between align-items-center">
                <div className="col-12">
                  <ProgressBar value={50} className="primary"></ProgressBar>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-px-10 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <div className="row justify-content-between align-items-center mb-5">
                <div className="col">
                  <h6 className="font-weight-bold mb-0">Revenue</h6>
                </div>
                <div className="col text-right">
                </div>
              </div>

              <div className="row justify-content-between align-items-center mb-5">
                <div className="col">
                  <h5 className="mb-0">$28.940</h5>
                </div>
                <div className="col text-right">
                  <span className="">41%</span>
                </div>
              </div>

              <div className="row justify-content-between align-items-center">
                <div className="col-12">
                  <ProgressBar value={41} className="info"></ProgressBar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div id="card1" className="card mb-5">
            <div className="card-header">
              <h4 className="label">Red beryl</h4>
              <div
                className="settings-button"
                onClick={(e) => openTodayMenu(e)}
                onPointerUp={(e) => e.stopPropagation()}
              >…</div>
            </div>
            <div className="card-body">
              <span className="smart-badge smart-badge-warning smart-badge-pill">In progress</span>
              <h6 className="font-weight-bold mt-4">Description</h6>

              <p>Vivamus convallis scelerisque finibus. Mauris at nulla lacinia sapien fringilla aliquam
                quis vel nisl. Nullam rutrum neque nibh, vel tempor massa tincidunt vitae. Vivamus
                aliquet malesuada nisl rhoncus porttitor. Donec sollicitudin, dolor placerat mollis
                dictum, tortor lectus convallis est, dictum bibendum sapien elit at orci. Sed quis
                gravida nulla.
              </p>

              <h6 className="font-weight-bold mt-3">Asignees</h6>
              <div className="d-flex flex-wrap">
                <div className="img-as-background rounded-circle w-35px square border mr-3 mb-3">
                  <img alt="" src="assets/images/phonebook/johnny.png" />
                </div>
                <div className="img-as-background rounded-circle w-35px square border mr-3 mb-3">
                  <img alt="" src="assets/images/phonebook/monica.png" />
                </div>
                <div className="img-as-background rounded-circle w-35px square border mr-3 mb-3">
                  <img alt="" src="assets/images/phonebook/margaret.png" />
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-5">
            <div className="card-header">
              <h4 className="label">Comments <span className="smart-badge smart-badge-primary smart-badge-pill ml-2">2</span></h4>
              <div
                className="settings-button"
                onClick={(e) => openTodayMenu(e)}
                onPointerUp={(e) => e.stopPropagation()}
              >…</div>
            </div>

            <div className="card-body">
              <div className="d-md-flex border-bottom py-3">
                <div className="avatar-holder">
                  <div className="img-as-background square rounded-circle w-60px border">
                    <img alt="" src="assets/images/phonebook/monica.png" />
                  </div>
                </div>

                <div className="ml-md-4">
                  <div className="row justify-content-between pt-3 pb-2  pt-md-5 pb-md-3">
                    <div className="col">
                      <h6 className="font-weight-bold">Sarah Little</h6>
                    </div>
                    <div className="col text-right">
                      <small className="text-muted">Now</small>
                    </div>
                  </div>

                  <div className="content mb-5">
                    Vivamus in ante at sapien faucibus convallis in volutpat ante. Pellentesque tempus ultrices ex, quis sagittis odio varius eget. In luctus risus tellus, at egestas libero pretium eu. Duis porttitor pulvinar laoreet.
                  </div>

                  <div className="meta d-flex justify-content-between align-items-center mb-3">
                    <small className="text-muted">Today, 11:30 pm</small>
                  </div>

                  <div className="comments">
                    <h6 className="font-weight-bold">Replies:</h6>
                    <div className="comment d-flex mb-3">
                      <div className="avatar-holder">
                        <div className="img-as-background square rounded-circle w-30px border">
                          <img alt="" src="assets/images/phonebook/johnny.png" />
                        </div>
                      </div>

                      <div className="content ml-4 "><strong>Zack Turner:</strong> In luctus!</div>
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

              <div className="d-md-flex border-bottom-0 py-3">
                <div className="avatar-holder">
                  <div className="img-as-background square rounded-circle w-65px border">
                    <img alt="" src="assets/images/phonebook/margaret.png" />
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
                    Nulla rutrum justo vel ex gravida tincidunt sit amet quis diam. Morbi eu hendrerit ipsum, at semper lacus. Morbi condimentum sollicitudin ipsum, in euismod elit facilisis varius?
                    <br />
                    <br />
                    <pre><code>console.log("Hello, world!")</code></pre>
                  </div>

                  <div className="meta d-flex justify-content-between align-items-center mb-3">
                    <small className="text-muted">Today, 11:23 am</small>
                  </div>

                  <div className="comments">
                    <h6 className="font-weight-bold">Comments:</h6>
                    <div className="comment d-flex mb-3">
                      <div className="avatar-holder">
                        <div className="img-as-background square rounded-circle w-30px border">
                          <img alt="" src="assets/images/phonebook/monica.png" />
                        </div>
                      </div>

                      <div className="content ml-4 "><strong>Sarah Little:</strong>
                        <pre><code>alert('Hello, world!');</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card mb-5">
            <div className="card-header">
              <h4 className="label">Information</h4>
              <div
                className="settings-button"
                onClick={(e) => openTodayMenu(e)}
                onPointerUp={(e) => e.stopPropagation()}
              >…</div>
            </div>

            <div className="card-body">
              <div className="border-bottom pb-2">
                <div className="row align-items-center">
                  <div className="col-5">
                    <h6 className="font-weight-bold mb-0">Assignees</h6>
                  </div>
                  <div className="col-7">
                    <div className="d-flex flex-wrap">
                      <div className="img-as-background rounded-circle w-35px square border mr-3 mb-3">
                        <img alt="" src="assets/images/phonebook/johnny.png" />
                      </div>
                      <div className="img-as-background rounded-circle w-35px square border mr-3 mb-3">
                        <img alt="" src="assets/images/phonebook/monica.png" />
                      </div>
                      <div className="img-as-background rounded-circle w-35px square border mr-3 mb-3">
                        <img alt="" src="assets/images/phonebook/margaret.png" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-5">
                    <h6 className="font-weight-bold mb-0">Supervisor</h6>
                  </div>
                  <div className="col-7">
                    <div className="d-flex flex-wrap">
                      <div className="img-as-background rounded-circle w-35px square border mr-3 mb-3">
                        <img alt="" src="assets/images/phonebook/laura.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-bottom pb-2">
                <div className="row align-items-center pt-3">
                  <div className="col-5">
                    <h6 className="font-weight-bold mb-0">Created</h6>
                  </div>
                  <div className="col-7">
                    <span className="">7 November 2019</span>
                  </div>
                </div>

                <div className="row justify-content-between pt-3">
                  <div className="col-5">
                    <h6 className="font-weight-bold mb-0">Started</h6>
                  </div>
                  <div className="col-7">
                    <span className="">8 January 2020</span>
                  </div>
                </div>

                <div className="row justify-content-between pt-3">
                  <div className="col-5">
                    <h6 className="font-weight-bold mb-0">Ended</h6>
                  </div>
                  <div className="col-7">
                    <span className="">21 February 2022</span>
                  </div>
                </div>
              </div>

              <div className="border-bottom pb-2">
                <div className="row align-items-center pt-3">
                  <div className="col-5">
                    <h6 className="font-weight-bold mb-0">Budget</h6>
                  </div>
                  <div className="col-7">
                    <span className="">$302,059</span>
                  </div>
                </div>
              </div>

              <div className="pb-2">
                <div className="row align-items-center pt-3">
                  <div className="col-5">
                    <h6 className="font-weight-bold mb-0">Status</h6>
                  </div>
                  <div className="col-7">
                    <span className="smart-badge smart-badge-warning smart-badge-pill">In progress</span>
                  </div>
                </div>

                <div className="row align-items-center pt-3">
                  <div className="col-5">
                    <h6 className="font-weight-bold mb-0">Logged</h6>
                  </div>
                  <div className="col-7">
                    <span className="">192 h</span>
                  </div>
                </div>

                <div className="row justify-content-between pt-3">
                  <div className="col-5">
                    <h6 className="font-weight-bold mb-0">Estimated</h6>
                  </div>
                  <div className="col-7">
                    <span className="">1110 h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-5">
            <div className="card-header">
              <h4 className="label">Earnings</h4>
              <div
                className="settings-button"
                onClick={(e) => openTodayMenu(e)}
                onPointerUp={(e) => e.stopPropagation()}
              >…</div>
            </div>
            <div className="card-body">
              <Chart
                ref={earningsChartRef}
                {...earningsChartData}
                id="earningsChart"
                className='h-100 w-100'
              >
              </Chart>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAnimation(ProjectsDetail)
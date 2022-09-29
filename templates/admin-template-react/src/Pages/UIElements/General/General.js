import './General.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';
import {
    Accordion, AccordionItem, Button, Pager, Tooltip, ListBox, ListItem, ListItemsGroup
    , ProgressBar, CircularProgressBar, Breadcrumb
} from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function General() {

    useEffect(() => { document.title = `General - ${defaultTitle}` }, []);

    return (
        <div className="container general-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>General-Use Components</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Accordion</h4>
                        </div>

                        <div className="card-body">
                            <Accordion className="w-100">
                                <AccordionItem label="First Item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam at nunc sed aliquet. Quisque nec tristique lacus, sit amet venenatis risus. Pellentesque nisl odio, scelerisque nec ipsum ut, ullamcorper fringilla odio. Interdum et malesuada fames ac ante ipsum primis in faucibus.</AccordionItem>
                                <AccordionItem label="Second Item">Proin eu fringilla ante. Fusce tempus est at dui posuere blandit. Pellentesque id eros dui.</AccordionItem>
                                <AccordionItem label="Third Item">Duis ut nunc non eros rutrum laoreet commodo nec nulla. Duis volutpat dapibus mi in interdum. Praesent ornare ex metus.</AccordionItem>
                                <AccordionItem label="Fourth Item">Vestibulum in leo porta, tempus orci eleifend, pharetra libero.</AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Breadcrumbs</h4>
                        </div>
                        <div className="card-body">
                            <Breadcrumb
                                className="w-100 mb-5"
                                dataSource={[{ "label": "<a href='#home'>Home</a>", "value": "home" }, { "label": "<a href='#catalog'>Catalog</a>", "value": "catalog" }, { "label": "<a href='#apple_computers'>Apple Computers</a>", "value": "apple_computers" }, { "label": "Macbook Pro 13", "value": "macbook_pro_13" }]}></Breadcrumb>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Progressbars</h4>
                        </div>
                        <div className="card-body">
                            <ProgressBar className="w-100 mb-5" value={30}></ProgressBar>
                            <ProgressBar className="w-100 mb-5 barber-shop-effect" value={50}></ProgressBar>
                            <ProgressBar className="w-100 mb-5 barber-shop-effect" indeterminate></ProgressBar>
                            <div className="d-flex justify-content-between">
                                <CircularProgressBar className="w-150 h-150" value={50}></CircularProgressBar>
                                <CircularProgressBar className="w-150 h-150 barber-shop-effect" indeterminate></CircularProgressBar>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Badges</h4>
                        </div>
                        <div className="card-body">
                            <div className="mb-5">
                                <span className="smart-badge smart-badge-light">Light</span>&nbsp;<span className="smart-badge smart-badge-dark">Dark</span>&nbsp;<span className="smart-badge smart-badge-info">Info</span>&nbsp;<span className="smart-badge smart-badge-success">Success</span>&nbsp;<span className="smart-badge smart-badge-warning">Warning</span>&nbsp;<span className="smart-badge smart-badge-danger">Danger</span>
                            </div>

                            <div>
                                <span className="smart-badge smart-badge-light smart-badge-pill">Light</span>&nbsp;<span className="smart-badge smart-badge-dark smart-badge-pill">Dark</span>&nbsp;<span className="smart-badge smart-badge-info smart-badge-pill">Info</span>&nbsp;<span className="smart-badge smart-badge-success smart-badge-pill">Success</span>&nbsp;<span className="smart-badge smart-badge-warning smart-badge-pill">Warning</span>&nbsp;<span className="smart-badge smart-badge-danger smart-badge-pill">Danger</span>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">List Boxes</h4>
                        </div>
                        <div className="card-body">
                            <div className="row d-flex">
                                <div className="col-6 mb-5">
                                    <h6>With selection</h6>
                                    <ListBox className="h-auto">
                                        <ListItem>Item 1</ListItem>
                                        <ListItem selected>Item 2</ListItem>
                                        <ListItem>Item 3</ListItem>
                                    </ListBox>
                                </div>
                                <div className="col-6 mb-5">
                                    <h6>No selection</h6>
                                    <ListBox className="h-auto" selection-mode="none">
                                        <ListItem>Item 1</ListItem>
                                        <ListItem>Item 2</ListItem>
                                        <ListItem>Item 3</ListItem>
                                    </ListBox>
                                </div>
                                <div className="col-6 mb-5">
                                    <h6>Disabled item</h6>
                                    <ListBox className="h-auto">
                                        <ListItem disabled>Item 1</ListItem>
                                        <ListItem selected>Item 2</ListItem>
                                        <ListItem>Item 3</ListItem>
                                    </ListBox>
                                </div>
                                <div className="col-6 mb-5">
                                    <h6>With grouping</h6>
                                    <ListBox className="h-auto">
                                        <ListItemsGroup label="Group 1">
                                            <ListItem>Item 1</ListItem>
                                        </ListItemsGroup>
                                        <ListItemsGroup label="Group 2">
                                            <ListItem selected>Item 2</ListItem>
                                            <ListItem>Item 3</ListItem>
                                        </ListItemsGroup>
                                    </ListBox>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Pagers</h4>
                        </div>
                        <div className="card-body" id="pagersContainer">
                            <Pager
                                className="mb-5"
                                showPrevNextNavigationButtons
                                autoEllipsis="both"
                                showPageIndexSelectors
                                pagesCount={20}
                                pageIndexSelectors={10}
                            >
                            </Pager>
                            <Pager
                                className="mb-5"
                                showNavigationButtonLabels
                                showPrevNextNavigationButtons
                                showFirstLastNavigationButtons
                                showPageIndexSelectors
                                pagesCount={5}
                                pageIndexSelectors={5}
                                style={{ fontFamily: "inherit !important" }}
                            ></Pager>
                            <Pager
                                className="w-100"
                                showPageSizeSelector
                                showNavigationInput
                                showPrevNextNavigationButtons
                                pagesCount={10}
                                showSummary
                            ></Pager>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header">
                            <h4 className="label">Tooltips</h4>
                        </div>
                        <div className="card-body">
                            <Button id="buttonWithTooltip1" className="small-button success">Tooltip on left</Button>&nbsp;<Button id="buttonWithTooltip2" className="small-button">Tooltip on top</Button>&nbsp;<Button id="buttonWithTooltip3" className="small-button secondary">Tooltip on bottom</Button>&nbsp;<Button id="buttonWithTooltip4" className="small-button primary">Tooltip on right</Button>
                            <Tooltip selector="buttonWithTooltip1" arrow position="left">Tooltip on left</Tooltip>
                            <Tooltip selector="buttonWithTooltip2" arrow position="top">Tooltip on top</Tooltip>
                            <Tooltip selector="buttonWithTooltip3" arrow position="bottom">Tooltip on bottom</Tooltip>
                            <Tooltip selector="buttonWithTooltip4" arrow position="right">Tooltip on right</Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(General)
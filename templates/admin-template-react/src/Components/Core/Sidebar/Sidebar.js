import { useState, forwardRef, useEffect, useRef, useCallback } from 'react'

import { ReactComponent as SidebarToggleSVG } from '../../../assets/images/sidebar-toggle.svg'

import { useSidbarContext } from '../../../contexts/sidebarContext';

import { Tree, TreeItem, TreeItemsGroup, Tooltip } from '../../../smartImports';

import { useNavigate, Link, useLocation } from 'react-router-dom'

const Sidebar = forwardRef(({ primaryContainerRef, toggleCollapsedSidebarRef }, ref) => {

    let navigate = useNavigate();
    const location = useLocation();

    const { sidebarState, setSidebarState } = useSidbarContext();

    const [containsHoverOnToggleClass, setContainsHoverOnToggleClass] = useState(false);

    const treeRef = useRef(null);

    const generateBreadcrumb = () => {

        const breadcrumbGroups = document.body.querySelectorAll("#tree .smart-tree-items-group[expanded]");
        let breadcrumbGroupsHTML = '';

        if (breadcrumbGroups) {

            breadcrumbGroups.forEach(breadcrumbGroupName => {

                let group = breadcrumbGroupName
                    .querySelector(".smart-tree-item-label-container .smart-tree-item-label-element")
                    .cloneNode(true);

                if (group.querySelector('.material-icons')) {
                    group.querySelector('.material-icons').remove();
                }

                breadcrumbGroupsHTML +=
                    '<li class="breadcrumb-item"><a href="javascript:;" class="text-muted">'
                    + group.textContent.trim()
                    + '</a></li>';

            });

        }

        let breadcrumbItem = document.body
            .querySelector("#tree .smart-tree-item[selected] > .smart-tree-item-label-container .smart-tree-item-label-element a");

        let breadcrumbItemName = breadcrumbItem?.textContent;
        let breadcrumbItemHref = document.body
            .querySelector("#tree .smart-tree-item[selected] > .smart-tree-item-label-container .smart-tree-item-label-element a")
            ?.getAttribute('href');

        if (breadcrumbItemName && breadcrumbItemHref) {

            document.body.querySelector("#breadcrumb-title").innerHTML = breadcrumbItemName;
            breadcrumbGroupsHTML +=
                '<li class="breadcrumb-item"><a href="'
                + breadcrumbItemHref
                + '" class="text-muted">'
                + breadcrumbItemName
                + '</a></li>';

        }

        if (breadcrumbGroupsHTML) {
            document.body.querySelector("#breadcrumb-list").innerHTML = breadcrumbGroupsHTML;
        }
    }

    const selectTreeItem = useCallback(() => {

        const smartItem = document.querySelector(`#tree smart-tree-item a[href="${location.pathname}"]`)
            .closest('smart-tree-item');

        treeRef.current.select(smartItem);

        treeRef.current.ensureVisible(smartItem);


    }, [location])

    useEffect(() => {

        selectTreeItem();

    }, [location, selectTreeItem])

    useEffect(() => {

        setTimeout(() => generateBreadcrumb(), 900);

    }, []);

    const handleToggleButtonClick = () => {

        setSidebarState({
            collapsed: !sidebarState.collapsed,
            autoCollapsed: false
        })

        if (window.innerWidth >= 992) {

            primaryContainerRef?.current.classList.toggle('collapsed', sidebarState.collapsed);
            toggleCollapsedSidebarRef.current.checked = sidebarState.collapsed;

        }
    }

    const handleTreeChange = () => generateBreadcrumb();

    const handleMouseEnter = () => {

        if (primaryContainerRef?.current.classList.contains('collapsed')) {
            setContainsHoverOnToggleClass(false);
        } else {
            setContainsHoverOnToggleClass(true);
        }

    }

    const handleSelection = (e) => {

        const path = e.srcElement?.querySelector('a')?.getAttribute('href');
        if (path) navigate(path);

    }

    return (
        <>
            <aside
                ref={ref}
                id="sideBar"
                className={`sidebar ${containsHoverOnToggleClass ? "hover-on-toggle" : ""}`}
                onMouseEnter={handleMouseEnter}>
                <div className="logo-holder">
                    <div className="spacer w-auto"></div>
                    <div className="logo">
                        <Link to="/">
                            <img alt='' src="assets/images/logo-htmlelements.svg" />
                        </Link>
                    </div>

                    <div id="toggleButton" className="toggle-button" onClick={handleToggleButtonClick}>
                        <SidebarToggleSVG className='svg' />
                    </div>
                </div>

                <div className="tree-holder">
                    <Tree
                        ref={treeRef}
                        id="tree"
                        expandMode='single'
                        selectionMode="one"
                        selectionTarget="leaf"
                        toggleElementPosition="far"
                        toggleMode="click"
                        onChange={handleTreeChange}
                    >
                        <TreeItem onClick={handleSelection}>
                            <span className="material-icons">layers</span>
                            <a href="/">
                                <span className="label-name">Dashboard</span>
                            </a>
                        </TreeItem>

                        <TreeItem id="pagesLabel" label="pagesTemplate" className="group-label smart-element smart-tree-item smart-unselectable"></TreeItem>
                        <TreeItemsGroup>
                            <span className="material-icons">dashboard</span>
                            <span className="label-name">Applications</span>

                            <TreeItemsGroup>Dashboards
                                <TreeItem onClick={handleSelection}><a href="/dashboard-1">Dashboard 1</a></TreeItem>
                                <TreeItem onClick={handleSelection}><a href="/dashboard-2">Dashboard 2</a></TreeItem>
                                <TreeItem onClick={handleSelection}>
                                    <a href="/dashboard-3">Dashboard 3</a>
                                    <span className="smart-badge smart-badge-danger">New</span>
                                </TreeItem>
                            </TreeItemsGroup>

                            <TreeItemsGroup>E-commerce
                                <TreeItem onClick={handleSelection}><a href="/e-commerce">Dashboard</a></TreeItem>
                                <TreeItem onClick={handleSelection}><a href="/clients">Clients</a></TreeItem>
                                <TreeItem onClick={handleSelection}>
                                    <a href="/e-commerce-details">Details</a>
                                    <span className="smart-badge smart-badge-danger">New</span>
                                </TreeItem>
                                <TreeItem onClick={handleSelection}>
                                    <a href="/e-commerce-list">List</a>
                                    <span className="smart-badge smart-badge-danger">New</span>
                                </TreeItem>
                                <TreeItem onClick={handleSelection}>
                                    <a href="/e-commerce-checkout">Checkout</a>
                                    <span className="smart-badge smart-badge-danger">New</span>
                                </TreeItem>
                            </TreeItemsGroup>

                            <TreeItemsGroup>Analytics
                                <TreeItem onClick={handleSelection}><a href="/analytics">Dashboard</a></TreeItem>
                            </TreeItemsGroup>

                            <TreeItemsGroup>Projects
                                <TreeItem onClick={handleSelection}><a href="/projects-list-1">List 1</a></TreeItem>
                                <TreeItem onClick={handleSelection}>
                                    <a href="/projects-list-2">List 2</a>
                                    <span className="smart-badge smart-badge-danger">New</span>
                                </TreeItem>
                                <TreeItem onClick={handleSelection}><a href="/detail">Detail</a></TreeItem>
                            </TreeItemsGroup>

                            <TreeItemsGroup>Crypto
                                <TreeItem onClick={handleSelection}><a href="/crypto">Dashboard</a></TreeItem>
                            </TreeItemsGroup>

                            <TreeItemsGroup>Profile
                                <TreeItem onClick={handleSelection}><a href="/profile-1">Overview 1</a></TreeItem>
                                <TreeItem onClick={handleSelection}>
                                    <a href="/profile-2">Overview 2</a>
                                    <span className="smart-badge smart-badge-danger">New</span>
                                </TreeItem>
                                <TreeItem onClick={handleSelection}>
                                    <a href="/users-list">Users</a>
                                    <span className="smart-badge smart-badge-danger">New</span>
                                </TreeItem>
                                <TreeItem onClick={handleSelection}>
                                    <a href="/social">Social Page</a></TreeItem>
                                <TreeItem onClick={handleSelection}>
                                    <a href="/settings">Account Settings</a></TreeItem>
                            </TreeItemsGroup>

                            <TreeItemsGroup>Kanban
                                <TreeItem onClick={handleSelection}><a href="/tasks">Tasks 1</a></TreeItem>
                                <TreeItem onClick={handleSelection}>
                                    <a href="/tasks-2">Tasks 2</a>
                                    <span className="smart-badge smart-badge-danger">New</span>
                                </TreeItem>
                            </TreeItemsGroup>

                            <TreeItem onClick={handleSelection}><a href="/chat">Chat</a></TreeItem>
                            <TreeItem onClick={handleSelection}>
                                <a href="/inbox">Inbox</a>
                                <span className="smart-badge smart-badge-danger">New</span>
                            </TreeItem>
                        </TreeItemsGroup>

                        <TreeItemsGroup>
                            <span className="material-icons">contact_page</span>
                            <span className="label-name">Pages</span>

                            <TreeItem onClick={handleSelection}><a href="/sign-in">Sign In</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/sign-up">Sign Up</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/reset-password">Reset Password</a></TreeItem>

                            <TreeItem onClick={handleSelection}><a href="/invoice">Invoice</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/pricing">Pricing</a></TreeItem>

                            <TreeItem onClick={handleSelection}><a href="/404">404 Page</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/500">500 Page</a></TreeItem>

                            <TreeItem onClick={handleSelection}>
                                <a href="/knowledge-base">Knowledge Base</a>
                                <span className="smart-badge smart-badge-danger">New</span>
                            </TreeItem>

                            <TreeItem onClick={handleSelection}><a href="/blank">Blank Page</a></TreeItem>
                        </TreeItemsGroup>

                        <TreeItemsGroup>
                            <span className="material-icons">library_books</span>
                            <span className="label-name">Documentation</span>

                            <TreeItem onClick={handleSelection}><a href="/introduction">Introduction</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/getting-started">Getting Started</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/plugins">Plugins</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/changelog">Changelog</a></TreeItem>
                        </TreeItemsGroup>

                        <TreeItem id="toolsLabel" label="toolsTemplate" className="group-label smart-element smart-tree-item smart-unselectable"></TreeItem>

                        <TreeItemsGroup>
                            <span className="material-icons">grid_on</span>
                            <span className="label-name">UI Elements</span>

                            <TreeItem onClick={handleSelection}><a href="/toasts">Toasts</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/buttons">Buttons</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/cards">Cards</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/carousel">Carousel</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/embed-video">Embed Video</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/general">General</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/grid-layout">Grid Layout</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/modals">Modals</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/tabs">Tabs</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/typography">Typography</a></TreeItem>
                        </TreeItemsGroup>

                        <TreeItemsGroup>
                            <span className="material-icons">favorite</span>
                            <span className="label-name">Icons</span>

                            <TreeItem onClick={handleSelection}><a href="/feather">Feather</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/font-awesome">Font Awesome</a></TreeItem>
                        </TreeItemsGroup>

                        <TreeItemsGroup>
                            <span className="material-icons">fact_check</span>
                            <span className="label-name">Forms</span>
                            <TreeItem onClick={handleSelection}><a href="/layouts">Layouts</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/basic-inputs">Basic Inputs</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/input-groups">Input Groups</a></TreeItem>
                        </TreeItemsGroup>

                        <TreeItem onClick={handleSelection}>
                            <span className="material-icons">table_chart</span>
                            <a href="/tables">
                                <span className="label-name">Tables</span>
                            </a>
                        </TreeItem>

                        <TreeItem id="pluginLabel" label="pluginTemplate" className="group-label smart-element smart-tree-item smart-unselectable"></TreeItem>

                        <TreeItemsGroup>
                            <span className="material-icons">fact_check</span>
                            <span className="label-name">Form Plugins</span>

                            <TreeItem onClick={handleSelection}><a href="/advanced-inputs">Advanced Inputs</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/editor">Editor</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/validation">Validation</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/wizard">Wizard</a></TreeItem>
                        </TreeItemsGroup>

                        <TreeItemsGroup>
                            <span className="material-icons">table_chart</span>
                            <span className="label-name">Data Tables</span>

                            <TreeItem onClick={handleSelection}><a href="/responsive-table">Responsive Table</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/table-with-buttons">Table with Buttons</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/column-search">Column Search</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/multi-selection">Multi Selection</a></TreeItem>
                            <TreeItem onClick={handleSelection}><a href="/ajax-data">Ajax Sourced Data</a></TreeItem>
                        </TreeItemsGroup>

                        <TreeItem onClick={handleSelection}>
                            <span className="material-icons">pie_chart</span>
                            <a href="/charts">
                                <span className="label-name">Charts</span>
                            </a>
                        </TreeItem>

                        <TreeItem onClick={handleSelection}>
                            <span className="material-icons">alarm</span>
                            <a href="/notifications">
                                <span className="label-name">Notifications</span>
                            </a>
                        </TreeItem>

                        <TreeItemsGroup>
                            <span className="material-icons">place</span>
                            <span className="label-name">Maps</span>

                            <TreeItem onClick={handleSelection}><a href="/google-maps">Google Maps</a></TreeItem>
                        </TreeItemsGroup>

                        <TreeItem onClick={handleSelection}>
                            <span className="material-icons">calendar_today</span>
                            <a href="/scheduler">
                                <span className="label-name">Scheduler</span>
                            </a>
                        </TreeItem>

                        <TreeItemsGroup>
                            <span className="material-icons">share</span>
                            <span className="label-name">Multi Level</span>

                            <TreeItemsGroup>Two Levels
                                <TreeItem>Item 1</TreeItem>
                                <TreeItem>Item 2</TreeItem>
                            </TreeItemsGroup>
                            <TreeItemsGroup>Three Levels
                                <TreeItemsGroup>Item 1
                                    <TreeItem>Item 1</TreeItem>
                                    <TreeItem>Item 2</TreeItem>
                                </TreeItemsGroup>
                                <TreeItem>Item 2</TreeItem>
                            </TreeItemsGroup>
                        </TreeItemsGroup>
                    </Tree>
                </div>
            </aside>
            <Tooltip id="usageTooltipNormal" selector="toggleButton" position="right" className="animation">
                <span className="show">Open Sidebar</span>
                <span className="hide">Close Sidebar</span>
            </Tooltip>
        </>
    )
})

export default Sidebar
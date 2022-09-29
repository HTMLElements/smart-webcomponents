import { useRef } from 'react'
import './Header.scss'
import { Menu, MenuItem, Input } from '../../../smartImports';
import { Link } from 'react-router-dom';

function Header() {

    const messagesMenuRef = useRef();
    const notificationsMenuRef = useRef();
    const languageMenuRef = useRef();
    const searchMenuRef = useRef();
    const profileMenuRef = useRef();
    
    const toggleMenu = (menu, e) => {

        menu = menu.current;

        const rect = e.currentTarget.getBoundingClientRect();

        Array.from(document.getElementsByTagName('smart-menu'))
            .filter(smartMenu => smartMenu !== menu.nativeElement)
            .forEach(menu => menu.close());

        if (!menu.opened) {

            menu.open(rect.right - menu.nativeElement.offsetWidth, rect.bottom + window.scrollY);

        } else {

            menu.close();

        }

    }

    return (
        <>
            <div className="header">
                <div className="navigation-mobile js-mobile-menu">
                    <div className="logo">
                        <a href="./"><img alt="" src="assets/images/logo-htmlelements.svg" /></a>
                    </div>

                    <ul className="nav">
                        <li
                            className="nav-item px-1 px-sm-3 js-menu-account"
                            onClick={() => document.body.classList.toggle('mobile-menu-account-activated')}
                        >
                            <span className="material-icons">person</span>
                        </li>

                        <li
                            className="nav-item px-1 px-sm-3 js-menu-additional"
                            onClick={() => document.body.classList.toggle('mobile-menu-additional-activated')}
                        >
                            <span className="material-icons">more_horiz</span>
                        </li>

                        <li
                            className="nav-item px-1 px-sm-3 js-main-menu"
                            onClick={() => document.body.classList.toggle('mobile-menu-activated')}
                        >
                            <span className="material-icons">menu</span>
                        </li>
                    </ul>
                </div >

                <ul className="nav navigation-left">
                    <li className="nav-item">
                        <Link to='/' className="nav-link">Dashboard</Link>
                    </li>
                    <li className="nav-item active">
                        <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">App</a>
                    </li>
                </ul>

                <ul className="nav navigation-right">
                    <li
                        onClick={toggleMenu.bind(null, messagesMenuRef)}
                        onPointerUp={(e) => e.stopPropagation()}
                        className="nav-item px-3 messages"
                        id="messages"
                    >
                        <span className="position-relative">
                            <span className="material-icons">message</span>
                            <span className="cnt">3</span>
                        </span>
                    </li>
                    <li
                        onClick={toggleMenu.bind(null, notificationsMenuRef)}
                        onPointerUp={(e) => e.stopPropagation()}
                        className="nav-item px-3 notifications"
                        id="notifications"
                    >
                        <span className="material-icons">notifications_off</span>
                    </li>
                    <li
                        onClick={toggleMenu.bind(null, languageMenuRef)}
                        onPointerUp={(e) => e.stopPropagation()}
                        className="nav-item px-3"
                        id="language"
                    >
                        <img alt="" src="https://img.icons8.com/office/30/000000/usa.png" />
                    </li>
                    <li
                        onClick={toggleMenu.bind(null, searchMenuRef)}
                        onPointerUp={(e) => e.stopPropagation()}
                        className="nav-item px-3 search"
                        id="search"
                    >
                        <span className="material-icons">search</span>
                    </li>

                    <li
                        onClick={toggleMenu.bind(null, profileMenuRef)}
                        onPointerUp={(e) => e.stopPropagation()}
                        className="nav-item px-3 profile"
                        id="profile"
                    >
                        <div className="holder">
                            <div
                                className="avatar rounded-circle profile-image"
                            ></div>
                        </div>
                    </li>
                </ul>
            </div>

            <Menu
                ref={messagesMenuRef}
                id="messagesMenu"
                className="smart-custom-dropdown-menu"
                mode="dropDown"
                onPointerUp={(e) =>
                    e.target.closest('[template-applied]') ?
                        e.currentTarget.close()
                        : {}
                }
            >
                <MenuItem label="newMessages" className="menu-header"></MenuItem>

                <MenuItem>
                    <div className="row row-mx-10 align-items-center">
                        <div className="col-auto col-px-10">
                            <div className="square img-as-background w-25px d-inline-block mr-2 rounded-circle">
                                <img alt="" src="assets/images/phonebook/michael.png" />
                            </div>
                        </div>
                        <div className="col col-px-10">
                            <div className="name font-weight-bold">Frederick Murphy</div>
                            <div className="content text-break-line-2">Lorem ipsum dolor sit amet.</div>
                            <small className="time text-muted">7 min ago</small>
                        </div>
                    </div>
                </MenuItem>

                <MenuItem>
                    <div className="row row-mx-10 align-items-center">
                        <div className="col-auto col-px-10">
                            <div className="square img-as-background w-25px d-inline-block mr-2 rounded-circle">
                                <img alt="" src="assets/images/phonebook/maya.png" />
                            </div>
                        </div>
                        <div className="col col-px-10">
                            <div className="name font-weight-bold">Eva Hayes</div>
                            <div className="content text-break-line-2">Nulla porta, risus in suscipit tincidunt.</div>
                            <small className="time text-muted">15 min ago</small>
                        </div>
                    </div>
                </MenuItem>

                <MenuItem>
                    <div className="row row-mx-10 align-items-center">
                        <div className="col-auto col-px-10">
                            <div className="square img-as-background w-25px d-inline-block mr-2 rounded-circle">
                                <img alt="" src="assets/images/phonebook/maria.png" />
                            </div>
                        </div>
                        <div className="col col-px-10">
                            <div className="name font-weight-bold">Joyce Scott</div>
                            <div className="content text-break-line-2">Maecenas eleifend, nunc eu convallis mollis, ante lacus
                                euismod elit, iaculis tempor ex
                                sapien quis est.
                            </div>
                            <small className="time text-muted">Yesterday</small>
                        </div>
                    </div>
                </MenuItem>

                <MenuItem label="showAllMessages" className="menu-footer"></MenuItem>
            </Menu>

            <Menu
                ref={notificationsMenuRef}
                id="notificationsMenu"
                className="smart-custom-dropdown-menu"
                mode="dropDown"
                onPointerUp={(e) =>
                    e.target.closest('[template-applied]') ?
                        e.currentTarget.close()
                        : {}
                }
            >
                <MenuItem label="newNotifications" className="menu-header"></MenuItem>
                <MenuItem>
                    <div className="row row-mx-10 align-items-center">
                        <div className="col-auto col-px-10">
                            <span className="material-icons text-warning ml-3">stay_current_portrait</span>
                        </div>

                        <div className="col col-px-10">
                            <div className="name font-weight-bold">New device detected</div>
                            <div className="content text-break-line-2">Login from a new device has been detected.</div>
                            <small className="time text-muted">2 hours ago</small>
                        </div>
                    </div>
                </MenuItem>

                <MenuItem>
                    <div className="row row-mx-10 align-items-center">
                        <div className="col-auto col-px-10">
                            <span className="material-icons text-primary ml-3">person_add</span>
                        </div>

                        <div className="col col-px-10">
                            <div className="name font-weight-bold">Friend request</div>
                            <div className="content text-break-line-2">Joyce Scott has been added as a friend.</div>
                            <small className="time text-muted">3 hours ago</small>
                        </div>
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className="row row-mx-10 align-items-center">
                        <div className="col-auto col-px-10">
                            <span className="material-icons text-danger ml-3">healing</span>
                        </div>

                        <div className="col col-px-10">
                            <div className="name font-weight-bold">Downtime</div>
                            <div className="content text-break-line-2">Our servers will undertake maintenance tomorrow.</div>
                            <small className="time text-muted">Yesterday</small>
                        </div>
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className="row row-mx-10 align-items-center">
                        <div className="col-auto col-px-10">
                            <span className="material-icons text-primary ml-3">person_add</span>
                        </div>

                        <div className="col col-px-10">
                            <div className="name font-weight-bold">Friend request</div>
                            <div className="content text-break-line-2">Nathan Hoffman has been added as a friend.</div>
                            <small className="time text-muted">3 days ago</small>
                        </div>
                    </div>
                </MenuItem>
                <MenuItem label="showAllNotifications" className="menu-footer"></MenuItem>
            </Menu>

            <Menu
                ref={languageMenuRef}
                id="languageMenu"
                className="smart-custom-dropdown-menu"
                mode="dropDown"
                onPointerUp={(e) =>
                    e.target.closest('[template-applied]') ?
                        e.currentTarget.close()
                        : {}
                }
            >
                <MenuItem>
                    <div className="pl-2 pr-3"><img alt="" src="https://img.icons8.com/office/30/000000/usa.png" className="mr-3" />
                        English</div>
                </MenuItem>
                <MenuItem>
                    <div className="pl-2 pr-3"><img alt="" src="https://img.icons8.com/office/30/000000/china.png" className="mr-3" />
                        Chinese</div>
                </MenuItem>
                <MenuItem>
                    <div className="pl-2 pr-3"><img alt="" src="https://img.icons8.com/office/30/000000/spain.png" className="mr-3" />
                        Spanish</div>
                </MenuItem>
                <MenuItem>
                    <div className="pl-2 pr-3"><img alt="" src="https://img.icons8.com/office/30/000000/india.png" className="mr-3" />
                        Hindi</div>
                </MenuItem>
                <MenuItem>
                    <div className="pl-2 pr-3"><img alt="" src="https://img.icons8.com/office/30/000000/russian-federation.png"
                        className="mr-3" /> Russian</div>
                </MenuItem>
            </Menu>

            <Menu
                ref={searchMenuRef}
                id="searchMenu"
                className="smart-custom-dropdown-menu"
                mode="dropDown"
                // onClosing={(e) =>
                //     e.detail.target.tagName === 'SMART-MENU-ITEM'
                //         ? e.preventDefault()
                //         : {}
                // }
                onPointerUp={(e) =>
                    e.target.closest('[template-applied]') ?
                        e.currentTarget.close()
                        : {}
                }
            >
                <MenuItem>
                    <span className="material-icons">search</span>
                    <Input placeholder="Search something..." autofocus="true"></Input>
                </MenuItem>
            </Menu>

            <Menu
                ref={profileMenuRef}
                id="profileMenu"
                className="smart-custom-dropdown-menu"
                mode="dropDown"
                onPointerUp={(e) =>
                    e.target.closest('[template-applied]') ?
                        e.currentTarget.close()
                        : {}
                }
            >
                <MenuItem><span className="material-icons mr-3">supervised_user_circle</span> Profile</MenuItem>
                <MenuItem separator><span className="material-icons mr-3">pie_chart</span>Analytics</MenuItem>
                <MenuItem>Settings & Privacy</MenuItem>
                <MenuItem>Help</MenuItem>
                <MenuItem>Sign out</MenuItem>
            </Menu>
        </>

    )
}

export default Header
import './Content.scss';
import { useEffect, useRef, useState } from 'react';

import * as bootstrap from 'bootstrap';
import * as feather from 'feather-icons';

import { SidebarProvider } from '../../contexts/sidebarContext';

import Routes from '../Routes/Routes';

import GitHubButton from 'react-github-btn'

import { Menu, MenuItem } from '../../smartImports';

import { useLocation } from 'react-router-dom';

import Sidebar from '../Core/Sidebar/Sidebar';
import Header from '../Core/Header/Header';
import Subheader from '../Core/Subheader/Subheader';
import Footer from '../Core/Footer/Footer';
import SettingsPanel from '../SettingsPanel/SettingsPanel';

function Content() {

    const location = useLocation();

    const primaryContainerRef = useRef(null);
    const secondaryContainerRef = useRef(null);
    const sidebarRef = useRef(null);
    const todayMenuRef = useRef(null);
    const toggleCollapsedSidebarRef = useRef(null);
    const toggleBoxedLayoutRef = useRef(null);
    const settingsPanelRef = useRef(null);
    const settingsButtonRef = useRef(null);
    const InitialAlertRef = useRef(null);

    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {

            document.body.classList.add('page-loaded');
            setIsPageLoading(false);
            
        }, 900);

        document.addEventListener('click', (e) => {

            const content = document.getElementById('content');

            if (content.contains(e.target)) {

                document.body.classList.remove('mobile-menu-activated');
                document.body.classList.remove('mobile-menu-additional-activated');
                document.body.classList.remove('mobile-menu-account-activated');

            }
        })

        document.body.addEventListener('click', (e) => {
            if (document.body.classList.contains('settings-panel-shown') &&
                !settingsPanelRef?.current.contains(e.target) &&
                !settingsButtonRef?.current.contains(e.target)) {
                document.body.classList.remove('settings-panel-shown');
            }
        })

        const boxed = JSON.parse(sessionStorage.getItem('boxed'));

        if (boxed) {

            toggleBoxedLayoutRef.current.checked = true;
            document.body.classList.add('boxed');
            sessionStorage.setItem('boxed', true);

        }

    }, []);

    useEffect(() => {

        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        Array.from(tooltipTriggerList)
            .forEach(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

        feather.replace();

    }, [location]);

    const openTodayMenu = (e) => {

        const rect = e.currentTarget.getBoundingClientRect();

        const todayMenu = todayMenuRef.current.nativeElement;

        Array.from(document.getElementsByTagName('smart-menu'))
            .filter(menu => menu !== todayMenu)
            .forEach(menu => menu.close());

        if (!todayMenu.opened) {
            todayMenu.open(rect.right - todayMenu.offsetWidth, rect.bottom + window.scrollY);
        } else {
            todayMenu.close();
        }

    }

    return (
        <>
            <div className="preloader">
                <div className="w-100">
                    <img src="assets/images/logo-htmlelements.svg" alt="" />
                </div>
            </div>
            <SidebarProvider
                primaryContainerRef={primaryContainerRef}
                secondaryContainerRef={secondaryContainerRef}
                sidebarRef={sidebarRef}
                toggleCollapsedSidebarRef={toggleCollapsedSidebarRef}
            >
                <div id="contentContainer" style={{ visibility: isPageLoading ? 'hidden' : 'visible' }}>
                    <div ref={primaryContainerRef} id="primaryContainer" className="main">
                        <Sidebar
                            ref={sidebarRef}
                            primaryContainerRef={primaryContainerRef}
                            toggleCollapsedSidebarRef={toggleCollapsedSidebarRef}
                        />
                        <div ref={secondaryContainerRef} id="secondaryContainer" className='content'>
                            <Header />
                            <Subheader />
                            <div id="content" className='p-5'>
                                <Routes openTodayMenu={openTodayMenu} />
                                <Menu ref={todayMenuRef} id="todayMenu" mode="dropDown">
                                    <MenuItem label="settingsTemplate"></MenuItem>
                                    <MenuItem>First action</MenuItem>
                                    <MenuItem>Second action</MenuItem>
                                    <MenuItem separator>Third action</MenuItem>
                                    <MenuItem>Additional action</MenuItem>
                                </Menu>
                            </div>
                            <Footer />
                        </div>
                    </div>
                    <SettingsPanel
                        ref={settingsPanelRef}
                        settingsButtonRef={settingsButtonRef}
                        primaryContainerRef={primaryContainerRef}
                        toggleCollapsedSidebarRef={toggleCollapsedSidebarRef}
                        toggleBoxedLayoutRef={toggleBoxedLayoutRef}
                    />
                </div>
            </SidebarProvider>
            <div ref={InitialAlertRef} className="alert-style-2 fade-in">
                <div className="alert-content">
                    <p>Please help us to improve our software. Give us a star in GitHub. &nbsp;</p>
                    <GitHubButton
                        className="github-button"
                        href="https://github.com/HTMLElements/smart-webcomponents"
                        data-show-count="true"
                        aria-label="Star HTMLElements/smart-webcomponents on GitHub"
                    >Star</GitHubButton>
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            InitialAlertRef.current.style.display = 'none';
                        }}
                        href=""
                        className="close"
                    >
                        <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512.001 512.001"
                            style={{ enableBackground: 'new 0 0 512.001 512.001' }}
                        >
                            <g><g><path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
                    L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
                    c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
                    l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
                    L284.286,256.002z"/></g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Content
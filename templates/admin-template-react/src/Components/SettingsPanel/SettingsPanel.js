import { forwardRef } from 'react';


import { themes, colorSchemes, useThemeContext } from '../../contexts/themeContext';
import { useSidbarContext } from '../../contexts/sidebarContext';

import { Button, CheckBox } from '../../smartImports';

const SettingsPanel = forwardRef(({ toggleCollapsedSidebarRef, primaryContainerRef, settingsButtonRef, toggleBoxedLayoutRef }, ref) => {

    const { themeObj, setColorScheme, setTheme } = useThemeContext();
    const { setSidebarState } = useSidbarContext();

    const handleToggleCollapsedCheckboxClick = () => {

        setSidebarState(prevState => {

            if (window.innerWidth >= 992) {
                primaryContainerRef.current.classList.toggle('collapsed', !prevState.collapsed);
                toggleCollapsedSidebarRef.current.checked = !prevState.collapsed;
            }

            return {
                collapsed: !prevState.collapsed,
                autoCollapsed: false
            }

        });

    }

    const handleBoxedLayoutCheckboxChange = () => {

        const boxed = !JSON.parse(sessionStorage.getItem('boxed'));

        document.body.classList.toggle('boxed');
        sessionStorage.setItem('boxed', boxed);
    }

    return (
        <>
            <div
                id="settingsButton"
                ref={settingsButtonRef}
                onClick={() => document.body.classList.toggle('settings-panel-shown')}
            >
                <span className="material-icons">settings</span>
            </div>

            <div id="settingsPanel" ref={ref}>
                <div id="settingsLabel">
                    <span>Settings</span>
                    <span
                        id="settingsCloseButton"
                        onClick={() => document.body.classList.toggle('settings-panel-shown')}
                    ></span>
                </div>
                <div id="settingsContent" className="pt-4">
                    <div className="label">LAYOUTS</div>
                    <CheckBox
                        ref={toggleCollapsedSidebarRef}
                        id="toggleCollapsedSidebar"
                        onClick={handleToggleCollapsedCheckboxClick}
                    >Collapsed Sidebar</CheckBox>
                    <CheckBox
                        ref={toggleBoxedLayoutRef}
                        id="toggleBoxedLayout"
                        onChange={handleBoxedLayoutCheckboxChange}
                    >Boxed Layout</CheckBox>

                    <div className="label">COLOR SCHEMES</div>

                    <div className="colors">
                        <button
                            type="button"
                            className="js-change-color-scheme w-20px square"
                            style={{ backgroundColor: '#007bff' }}
                            data-scheme=""
                            onClick={setColorScheme.bind(null, colorSchemes.default)}
                        ></button>
                        <button
                            type="button"
                            className="js-change-color-scheme w-20px square"
                            style={{ backgroundColor: '#005C99' }}
                            data-scheme="blue"
                            onClick={setColorScheme.bind(null, colorSchemes.blue)}
                        ></button>
                        <button
                            type="button"
                            className="js-change-color-scheme w-20px square"
                            style={{ backgroundColor: '#DD2C00' }}
                            data-scheme="red"
                            onClick={setColorScheme.bind(null, colorSchemes.red)}
                        ></button>
                        <button
                            type="button"
                            className="js-change-color-scheme w-20px square"
                            style={{ backgroundColor: '#43A047' }}
                            data-scheme="green"
                            onClick={setColorScheme.bind(null, colorSchemes.green)}
                        ></button>
                        <button
                            type="button"
                            className="js-change-color-scheme w-20px square"
                            style={{ backgroundColor: '#6200EE' }}
                            data-scheme="purple"
                            onClick={setColorScheme.bind(null, colorSchemes.purple)}
                        ></button>
                        <button
                            type="button"
                            className="js-change-color-scheme w-20px square"
                            style={{ backgroundColor: '#FF3399' }}
                            data-scheme="pink"
                            onClick={setColorScheme.bind(null, colorSchemes.pink)}
                        ></button>
                        <button
                            type="button"
                            className="js-change-color-scheme w-20px square"
                            style={{ backgroundColor: '#00CED1' }}
                            data-scheme="turquoise"
                            onClick={setColorScheme.bind(null, colorSchemes.turquoise)}
                        ></button>
                        <button
                            type="button"
                            className="js-change-color-scheme w-20px square"
                            style={{ backgroundColor: '#F0651A' }}
                            data-scheme="orange"
                            onClick={setColorScheme.bind(null, colorSchemes.orange)}
                        ></button>
                    </div>

                    <div className="label">THEME</div>
                    <img
                        onClick={() => themeObj.theme === themes.dark ? setTheme(themes.light) : {}}
                        alt=''
                        id="lightThemePreview"
                        className="theme-preview"
                        src="assets/images/theme-light2.png"
                    />
                    <div className="theme-label">Light Content</div>
                    <img
                        onClick={() => themeObj.theme === themes.light ? setTheme(themes.dark) : {}}
                        alt=''
                        id="darkThemePreview"
                        className="theme-preview"
                        src="assets/images/theme-dark2.png"
                    />
                    <div className="theme-label">Dark Content</div>

                    <Button
                        id="buy"
                        className="primary"
                        onClick={() => window.open('https://www.htmlelements.com/license/', '_blank')}
                    >
                        <span className="material-icons">shopping_cart</span>Buy Smart
                    </Button>
                </div>
            </div>
        </>
    )
})

export default SettingsPanel
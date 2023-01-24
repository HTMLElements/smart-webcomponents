import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { SplitterComponent } from 'smart-webcomponents-angular/splitter';
import { TreeComponent } from 'smart-webcomponents-angular/tree';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;
    @ViewChild('tree', { read: TreeComponent, static: false }) tree!: TreeComponent;
    @ViewChild('logo', { read: ElementRef, static: false }) logo: ElementRef;
    @ViewChild('pageContainer', { read: ElementRef, static: false }) pageContainer: ElementRef;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        const that = this,
            dashboard = that.splitter,
            logo = that.logo.nativeElement,
            menuBtn = that.button;
        let currPage = that.pageContainer.nativeElement.getAttribute('demo-page'),
            throttled: Boolean;

        function collapseLeftMenu() {
            menuBtn.nativeElement.classList.add('collapsed');
            dashboard.collapse(0);
        }

        function expandLeftMenu() {
            menuBtn.nativeElement.classList.remove('collapsed');
            dashboard.expand(0);
        }

        // Add event listener to the menu
        that.tree.addEventListener('change', (event: CustomEvent) => load(event.detail.item.value));

        //Add event listener for the Menu button
        menuBtn.addEventListener('click', () => menuBtn.nativeElement.classList.contains('collapsed') ? expandLeftMenu() : collapseLeftMenu());

        //Add event lisneter for the Theme button
        that.button5.addEventListener('click', function () {
            const button = that.button5;

            button.theme = !button.theme || button.theme === 'light' ? 'dark' : 'light';
            applyTheme();
        });

        //Window Resize event handling
        window.onresize = function () {
            if (!throttled) {
                const docElement = document.documentElement;

                docElement.offsetWidth && docElement.offsetWidth <= 860 ? collapseLeftMenu() : expandLeftMenu();
                throttled = true;

                // set a timeout to un-throttle
                setTimeout(function () {
                    throttled = false;
                }, 250);
            }
        };

        function getPageFunctionFromPageName(currPage: string): string {
            let newPageName: string | Array<string> = (currPage.charAt(0).toUpperCase() + currPage.slice(1));

            newPageName = newPageName.split('-');

            if (newPageName[1]) {
                newPageName = newPageName[0] + (newPageName[1].charAt(0).toUpperCase() + newPageName[1].slice(1));
            }
            else {
                newPageName = newPageName[0];
            }

            return newPageName;
        }

        function applyTheme() {
            function capitalizeFirstLetter(s: any) {
                return typeof s !== 'string' ? '' : s.charAt(0).toUpperCase() + s.slice(1);
            }

            currPage = that.pageContainer.nativeElement.getAttribute('demo-page');

            let currPageName = getPageFunctionFromPageName(currPage);

            const themeButton = that.button5;

            if (!themeButton.theme) {
                themeButton.theme = 'light';
            }

            const themeName = themeButton.theme;

            that.splitter.theme = themeName;

            //Calls the applyTheme function of the appropriate demo
            window['applyTheme' + currPageName]();
        }

        function loadContent(fileName: string, elmnt: HTMLElement): void {
            let xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        //Add the module for the neccessary JS files
                        loadView(fileName, elmnt, this);
                    }
                    if (this.status === 404) {
                        elmnt.innerHTML = 'Page not found.';
                    }
                    /* Remove the attribute, and call this function once more: */
                }
            };
            xhttp.open('GET', fileName + '/index.htm', true);
            xhttp.send();
        }

        function load(fileName: string): void {
            if (!fileName) {
                return;
            }

            const elmnt = that.pageContainer.nativeElement;

            elmnt.setAttribute('demo-page', fileName);

            function loadModule(elName!: string, isLastModule!: boolean) {
                if (!arguments.length) {
                    loadContent(fileName, elmnt);
                    return;
                }

                if (elName && window.Smart[elName]) {
                    if (isLastModule) {
                        loadContent(fileName, elmnt);
                    }
                    return;
                }

                elName = elName.toLowerCase();

                //angular\node_modules\smart-webcomponents-angular\source
                // import(`./../../../../source/modules/smart${elName}.js`)
                import(`./../../../node_modules/smart-webcomponents-angular/source/modules/smart.${elName}.js`)
                    .then(() => {
                        if (isLastModule) {
                            loadContent(fileName, elmnt);
                        }
                    })
                    .catch(err => {
                        //Fallback
                        let scriptModule = document.createElement('script');
                        scriptModule.type = 'module';
                        scriptModule.text = 'import \'./../../../node_modules/smart-webcomponents-angular/source/modules/' + 'smart.' + elName + '.js\'';
                        elmnt.appendChild(scriptModule);
                    });
            }

            if (!fileName) {
                return;
            }

            //Added modules
            switch (fileName) {
                case 'button':
                    loadModule('Pager', true);
                    break;
                case 'calendar':
                    loadModule('Calendar', true);
                    break;
                case 'chart':
                case 'timeline':
                    loadModule('Card', true);
                    break;
                case 'dashboard':
                    loadModule('DropDownButton');
                    loadModule('Card');
                    loadModule('Tabs');
                    loadModule('Grid');
                    loadModule('ProgressBar', true);
                    break;
                case 'extended-forms':
                    loadModule('DateTimePicker');
                    loadModule('ProgressBar');
                    loadModule('Chip');
                    loadModule('DropDownList');
                    loadModule('DropDownButton');
                    loadModule('Slider', true);
                    break;
                case 'extended-table':
                    loadModule('Grid');
                    loadModule('CheckBox');
                    loadModule('ProgressBar', true);
                    break;
                case 'grid-system':
                    loadModule('Grid', true);
                    break;
                case 'lock':
                    loadModule('TextBox', true);
                    break;
                case 'login':
                    loadModule('Card');
                    loadModule('TextBox', true);
                    break;
                case 'maps':
                case 'maps-large':
                case 'multiple-maps':
                    loadModule();
                    break;
                case 'panels':
                    loadModule('Accordion');
                    loadModule('Card');
                    loadModule('Tabs', true);
                    break;
                case 'pricing':
                    loadModule('progressbar', true);
                    break;
                case 'register':
                    loadModule('TextBox', true);
                    break;
                case 'regular-forms':
                    loadModule('TextBox', true);
                    break;
                case 'tables':
                    loadModule('Card');
                    loadModule('Grid', true);
                    break;
                case 'user-profile':
                    loadModule('TextBox', true);
                    break;
                case 'widgets':
                    loadModule('Grid');
                    loadModule('Card');
                    loadModule('CheckBox', true);
                    break;
            }
        }

        load(currPage);

        function loadView(fileName: string, elmnt: HTMLElement, response: any) {
            function loadScript(source: string): void {
                let scriptModule = document.createElement('script');
                scriptModule.type = 'text/javascript';
                scriptModule.src = source;
                elmnt.appendChild(scriptModule);
            }

            function loadMaps(initCallback: string): void {

                if (!window.hasOwnProperty('google')) {
                    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDLNo8WFhrz_4zuLdl423WX9h5Kh0SedHQ&callback=' + initCallback);
                }
                else {
                    const callback = window[initCallback];
                    callback();
                }
            }

            //Add the new demo content
            elmnt.innerHTML = response.responseText;
            //Add the demo styles
            let style = document.createElement('link');
            style.type = 'text/css';
            style.rel = 'stylesheet';
            style.href = fileName + '/styles.css';
            //Add the demo script
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = fileName + '/index.js';
            script.onload = function () {
                switch (fileName) {
                    case 'dashboard':
                        loadMaps('initDashboardMaps');
                        break;
                    case 'maps':
                        loadMaps('initMaps');
                        break;
                    case 'multiple-maps':
                        loadMaps('initMultipleMaps');
                        break;
                }
            };
            elmnt.appendChild(style);
            elmnt.appendChild(script);
        }


    }
}
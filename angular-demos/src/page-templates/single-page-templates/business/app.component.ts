import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';
import { CarouselComponent } from 'smart-webcomponents-angular/carousel';
import { MenuComponent, MenuItemComponent } from 'smart-webcomponents-angular/menu';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('carousel', { read: CarouselComponent, static: false }) carousel!: CarouselComponent;
    @ViewChild('carousel2', { read: CarouselComponent, static: false }) carousel2: CarouselComponent;
    @ViewChild('menu', { read: MenuComponent, static: false }) menu2: MenuComponent;
    @ViewChild('menuItem', { read: MenuItemComponent, static: false }) menuItem: MenuItemComponent;
    @ViewChild('menuItem2', { read: MenuItemComponent, static: false }) menuItem2: MenuItemComponent;
    @ViewChild('menuItem3', { read: MenuItemComponent, static: false }) menuItem3: MenuItemComponent;
    @ViewChild('menuItem4', { read: MenuItemComponent, static: false }) menuItem4: MenuItemComponent;
    @ViewChild('menuItem5', { read: MenuItemComponent, static: false }) menuItem5: MenuItemComponent;
    @ViewChild('aboutContainer', { read: ElementRef, static: false }) aboutContainer: ElementRef;
    @ViewChild('pricingContainer', { read: ElementRef, static: false }) pricingContainer: ElementRef;
    @ViewChild('contactsContainer', { read: ElementRef, static: false }) contactsContainer: ElementRef;
    @ViewChild('portfolioContainer', { read: ElementRef, static: false }) portfolioContainer: ElementRef;
    @ViewChild('blogContainer', { read: ElementRef, static: false }) blogContainer: ElementRef;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this;

        function scrollFunction() {
            const aboutContainer = that.aboutContainer.nativeElement,
                contactsContainerMenuItem = that.menuItem.nativeElement,
                aboutContainerItem = that.menuItem5.nativeElement,
                pricingContainerMenuItem = that.menuItem3.nativeElement,
                servicesMenuItem = that.menuItem4.nativeElement,
                blogMenuItem = that.menuItem2.nativeElement,
                servicesContainer = that.portfolioContainer.nativeElement,
                blogContainer = that.blogContainer.nativeElement,
                menuItems = [contactsContainerMenuItem, blogMenuItem, pricingContainerMenuItem, servicesMenuItem, aboutContainerItem];
            let last_known_scroll_position = 0;
            let ticking = false;

            window.addEventListener('scroll', function (e) {
                last_known_scroll_position = window.scrollY;

                if (!ticking) {
                    window.requestAnimationFrame(function () {
                        const windowScrollPosition = Math.round(last_known_scroll_position),
                            blogContainerOffsetTop = Math.round(blogContainer.offsetTop) - 100,
                            servicesContainerOffsetTop = Math.round(servicesContainer.offsetTop) - 100,
                            pricingContainerOffsetTop = Math.round(that.pricingContainer.nativeElement.offsetTop) - 100,
                            contactsContainerOffsetTop = Math.round(that.contactsContainer.nativeElement.offsetTop) - 100;

                        if (windowScrollPosition) {
                            for (let i = 0; i < menuItems.length; i++) {
                                menuItems[i].classList.remove('active-item');
                            }

                            if ((parseInt(aboutContainer.offsetTop) - 100) <= windowScrollPosition && windowScrollPosition < servicesContainerOffsetTop) {
                                aboutContainerItem.classList.add('active-item');
                            }
                            else if (servicesContainerOffsetTop <= windowScrollPosition && windowScrollPosition < pricingContainerOffsetTop) {
                                servicesMenuItem.classList.add('active-item');
                            }
                            else if (pricingContainerOffsetTop <= windowScrollPosition && windowScrollPosition < blogContainerOffsetTop) {
                                pricingContainerMenuItem.classList.add('active-item');
                            }
                            else if (blogContainerOffsetTop <= windowScrollPosition && windowScrollPosition < contactsContainerOffsetTop) {
                                blogMenuItem.classList.add('active-item');
                            }
                            else if (windowScrollPosition >= contactsContainerOffsetTop) {
                                contactsContainerMenuItem.classList.add('active-item');
                            }
                        }
                        ticking = false;
                    });

                    ticking = true;
                }
            });

        }

        function setDataSource() {
            let dataSource = [];

            let item = {
                image: './../../../../src/images/man-4252192_960_720.jpg',
                description: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
                name: 'Fajar Siddiq',
                position: 'CEOCEO, MakerFlix'
            };
            dataSource.push(item);

            item = {
                image: './../../../../src/images/girl-2366438_960_720.jpg',
                description: item.description,
                name: 'Isabela Moreira',
                position: 'CEO, GrayGrids'
            };
            dataSource.push(item);

            item = {
                image: './../../../../src/images/entrepreneur-593358_960_720.jpg',
                description: item.description,
                name: 'Elon Musk',
                position: 'CEO, SpaceX'
            };
            dataSource.push(item);

            item = {
                image: './../../../../src/images/woman-3096664_960_720.jpg',
                description: item.description,
                name: 'Fiona',
                position: 'Lead Designer, UIdeck'
            };
            dataSource.push(item);

            item = {
                image: './../../../../src/images/girl-2771001_960_720.jpg',
                description: item.description,
                name: 'Natalie Portman',
                position: 'Lead Designer, UIdeck'
            };
            dataSource.push(item);

            return dataSource;
        }

        function setBrandsDataSource() {
            let dataSource = [];

            let item = {
                image: './../../../../src/images/instagram-1581266_960_720.jpg',
            };
            dataSource.push(item);

            item = {
                image: './../../../../src/images/youtube-1837872_960_720.png',
            };
            dataSource.push(item);

            item = {
                image: './../../../../src/images/logo-2078018_960_720.png',
            };
            dataSource.push(item);

            item = {
                image: './../../../../src/images/logo-google-1991840_960_720.png',
            };
            dataSource.push(item);

            item = {
                image: './../../../../src/images/tux-158547_960_720.png',
            };
            dataSource.push(item);

            item = {
                image: './../../../../src/images/animal-2028258_960_720.png',
            };
            dataSource.push(item);

            item = {
                image: './../../../../src/images/lotus-with-hands-1889661_960_720.png',
            };
            dataSource.push(item);

            return dataSource;
        }

        const carousel = that.carousel,
            carouselBrands = that.carousel2;

        scrollFunction();

        carousel.dataSource = setDataSource();
        carouselBrands.dataSource = setBrandsDataSource();

        that.menu.addEventListener('itemClick', function (event: CustomEvent) {
            const url = '#' + event.detail.item.id.replace('-menuitem', '');

            document.querySelector(url).scrollIntoView();
        });
    }
}
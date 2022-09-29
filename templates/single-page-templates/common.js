function navigateTo(url) {
    window.location.href = url;
}

function scrollFunction() {
    const menuItems = document.querySelectorAll('#menu smart-menu-item'),
        aboutContainer = document.getElementById('about-container'),
        contactsContainerMenuItem = document.getElementById('contacts-container-menuitem'),
        aboutContainerItem = document.getElementById('about-container-menuitem'),
        pricingContainerMenuItem = document.getElementById('pricing-container-menuitem'),
        servicesMenuItem = document.getElementById('services-container-menuitem') || document.getElementById('portfolio-container-menuitem'),
        blogMenuItem = document.getElementById('blog-container-menuitem') || document.getElementById('testimonials-container-menuitem'),
        servicesContainer = document.getElementById('services-container') || document.getElementById('portfolio-container'),
        blogContainer = document.getElementById('blog-container') || document.getElementById('testimonials-container'),
        blogContainerOffsetTop = parseInt(blogContainer.offsetTop) - 100,
        servicesContainerOffsetTop = parseInt(servicesContainer.offsetTop) - 100,
        pricingContainerOffsetTop = parseInt(document.getElementById('pricing-container').offsetTop) - 100,
        contactsContainerOffsetTop = parseInt(document.getElementById('contacts-container').offsetTop) - 100;
    let last_known_scroll_position = 0;
    let ticking = false;

    window.addEventListener('scroll', function (e) {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function () {
                scrollCallback(last_known_scroll_position);
                ticking = false;
            });

            ticking = true;
        }
    });

    function scrollCallback(windowScrollPosition) {
        windowScrollPosition = parseInt(windowScrollPosition);

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
    }
}
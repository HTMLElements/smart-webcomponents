/*window.onload = function (event) {
    /!* Preloader *!/
    setTimeout(function () {
        document.body.classList.add('page-loaded');
    }, 900);
};*/

/**
 * Replace all SVG images with inline SVG
 */
function SVGtoCode() {
    $('img.svg[src*=".svg"]').each(function () {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get({
            url: imgURL,
            cache: true
        }).then(function (data) {
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);
        });
    });
}


$(document).ready(function () {
    /* Preloader */
    setTimeout(function () {
        document.body.classList.add('page-loaded');
    }, 900);


    SVGtoCode();
});


$(document).on('click', '.js-mobile-menu .js-main-menu', function () {
    $('body').toggleClass('mobile-menu-activated');
    $('body').toggleClass('lock-screen');
});

$(document).on('click', 'body.mobile-menu-activated .main > .content #content', function () {
    $('body').removeClass('mobile-menu-activated');
    $('body').removeClass('lock-screen');
});

$(document).on('click', '.js-mobile-menu .js-menu-additional', function () {
    $('body').toggleClass('mobile-menu-additional-activated');
});

$(document).on('click', 'body.mobile-menu-additional-activated .main > .content #content', function () {
    $('body').removeClass('mobile-menu-additional-activated');
});

$(document).on('click', '.js-mobile-menu .js-menu-account', function () {
    $('body').toggleClass('mobile-menu-account-activated');
});

$(document).on('click', 'body.mobile-menu-account-activated .main > .content #content', function () {
    $('body').removeClass('mobile-menu-account-activated');
});

$(document).on('mouseover', 'body .main > .sidebar', function () {
    if ($(window).width() > 991) {
        $('body').addClass('lock-screen');
    }
});

$(document).on('mouseout', 'body .main > .sidebar', function () {
    if ($(window).width() > 991) {
        $('body').removeClass('lock-screen');
    }
});

document.addEventListener('DOMContentLoaded', function (event) {
    /*  setTimeout(function () {
          generateBreadcrumb();
      }, 900);*/
});

window.addEventListener('resize', function (event) {

});

function generateBreadcrumb() {
    const breadcrumbGroups = document.body.querySelectorAll("#tree .smart-tree-items-group[expanded]");
    let breadcrumbGroupsHTML = '';
    if (breadcrumbGroups) {
        breadcrumbGroups.forEach(breadcrumbGroupName => {
            let group = breadcrumbGroupName.querySelector(".smart-tree-item-label-container .smart-tree-item-label-element").cloneNode(true);
            if (group.querySelector('.material-icons')) {
                group.querySelector('.material-icons').remove();
            }
            breadcrumbGroupsHTML += '<li class="breadcrumb-item"><a href="javascript:;" class="text-muted">' + group.textContent.trim() + '</a></li>'
        });
    }

    let breadcrumbItem = document.body.querySelector("#tree .smart-tree-item[selected] > .smart-tree-item-label-container .smart-tree-item-label-element a");
    let breadcrumbItemName = breadcrumbItem.textContent;
    let breadcrumbItemHref = document.body.querySelector("#tree .smart-tree-item[selected] > .smart-tree-item-label-container .smart-tree-item-label-element a").getAttribute('href');
    if (breadcrumbItemName && breadcrumbItemHref) {
        document.body.querySelector("#breadcrumb-title").innerHTML = breadcrumbItemName;
        breadcrumbGroupsHTML += '<li class="breadcrumb-item"><a href="' + breadcrumbItemHref + '" class="text-muted">' + breadcrumbItemName + '</a></li>'
    }

    if (breadcrumbGroupsHTML) {
        document.body.querySelector("#breadcrumb-list").innerHTML = breadcrumbGroupsHTML;
    }
}

function onPageInit() {
    generateBreadcrumb();
}
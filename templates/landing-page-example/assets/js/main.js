(function () {
    "use strict"

    var $window = $(window),
        $document = $(document);


    /* ###################### Top Top ###################### */
    $document.ready(function () {
        var ttopButton = $("#to-top");
        ttopButton.hide().on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
        });
        $window.scroll(function () {
            if ($window.scrollTop() === 0) {
                ttopButton.hide();
            } else {
                ttopButton.show();
            }
        });
    });
    /* ###################### To Top ###################### */

    $document.ready(function () {
        $('.navbar-toggler').on('click', function () {
            $('.navigation-holder .collapse').toggleClass('show');
        });
    });

})();

AOS.init();

function percent(num_amount, num_total) {
    if (num_amount == 0 || num_total == 0) {
        return 0;
    }
    var count1 = num_amount / num_total;
    var count2 = count1 * 100;

    count = count2;

    return count;
}

function setPaddingToSections() {
    if ($(window).width() > 991) {
        var headerWidth = $('.navigation-holder').width();
        var headerContainerWidth = $('.navigation-holder .navbar .container').width();
        var headerContainerFluidWidth = $('.container-fluid').width();

        var oneFluidColumn = headerContainerFluidWidth / 12;
        if ($(window).width() > 1199) {
            // oneFluidColumn = headerContainerFluidWidth / 12;
        }

        var oneColumn = 0;
        if ($(window).width() > 1199) {
            oneColumn = headerContainerWidth / 12;
        }

        //Remove the column padding
        oneColumn = 0;
    }

    if ($(window).width() > 991) {
        $('.layout-2').each(function () {
            var leftSide = $(this).find('.left-side');
            leftSide.css({'padding-left': ((headerWidth - headerContainerWidth) / 2) + 10 + oneColumn + 'px'});
            leftSide.find('.info-holder').css({'margin-right': '-' + oneFluidColumn + 'px'});
        })

        $('.layout-3').each(function () {
            var rightSide = $(this).find('.right-side');
            rightSide.css({'padding-right': ((headerWidth - headerContainerWidth) / 2) + 10 + oneColumn + 'px'});
            rightSide.find('.info-holder').css({'margin-left': '-' + oneFluidColumn + 'px'});
        })
    } else {
        $('.layout-2').each(function () {
            var leftSide = $(this).find('.left-side');
            leftSide.css({'padding-left': ''});
            leftSide.find('.info-holder').css({'margin-right': ''});
        })
        $('.layout-3').each(function () {
            var rightSide = $(this).find('.right-side');
            rightSide.css({'padding-right': ''});
            rightSide.find('.info-holder').css({'margin-left': ''});
        });
    }
}

window.onload = function (event) {
    /* Preloader */
    setTimeout(function () {
        document.body.classList.add('page-loaded');
    }, 900);
};

document.addEventListener('DOMContentLoaded', function (event) {
    setPaddingToSections();
});

window.addEventListener('resize', function (event) {
    setPaddingToSections();
});
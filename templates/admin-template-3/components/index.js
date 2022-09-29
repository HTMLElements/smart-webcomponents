window.initComponents = function () {
    addTodayMenuOpenHandlers();

    $('.alert-style-1 .js-opened .close').on('click', function () {
        $(this).parent().hide('fast');
        $('.alert-style-1 .js-closed').show('fast');
    });

    $('.alert-style-1 .js-closed').on('click', function () {
        $(this).hide('fast');
        $('.alert-style-1 .js-opened').show('fast');
    });

    $('.alert-style-1 .js-open-subscribe-form').on('click', function () {
        $(this).hide('fast');
        $('.alert-style-1 .js-subscribe-form').show('fast');
    });

    $('.alert-style-2 .close').on('click', function () {
        $(this).parent().parent().hide('fast');
    });


    $('.alert-style-3 .js-open').on('click', function () {
        $('.alert-style-3 .alert-content').toggleClass('opened');
    });
}
window.__karma__.start = (function (originalStartFn) {
    return function () {
        var args = arguments
        jQuery(function () {
            originalStartFn.apply(null, args);
        });
    };
}(window.__karma__.start));
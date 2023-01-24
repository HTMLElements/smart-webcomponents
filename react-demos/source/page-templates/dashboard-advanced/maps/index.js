(function () {
    'use strict'
    applyThemeMaps();
})();

function applyThemeMaps() {
    'use strict'

    const contentContainer = document.getElementById('include-html-page');
    if (contentContainer.firstElementChild.classList.contains('smart-visibility-hidden')) {
        contentContainer.firstElementChild.classList.remove('smart-visibility-hidden')
    }
}

// Initialize and add the map
function initMaps() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036 };

    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('gmap'), {zoom: 4, center: uluru });

    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map });
}

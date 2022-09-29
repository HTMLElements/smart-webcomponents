window.initKnowledgeBase = function () {
    //Vanilla version
    const searchField = document.querySelector('#search input'),
        item = document.querySelectorAll(".cards-holder .card-item"),
        noResults = document.querySelector(".cards-holder .no-result");

    searchField.onkeyup = function () {
        const searchFieldValue = this.value.toLowerCase();

        if (searchFieldValue != "") {
            Array.prototype.slice.call(item).filter(function (e) {
                if (e.textContent.toLowerCase().indexOf(searchFieldValue) > -1) {
                    e.style.display = '';
                } else {
                    e.style.display = 'none';
                }
            })
        } else {
            noResults.classList.remove('no-items');
            item.forEach(function (item) {
                item.style.display = "";
            });
        }

        let hasItems = false;
        item.forEach(function (item) {
            if ((window.getComputedStyle(item).display !== "none")) {
                hasItems = true;
            }
        });

        if (hasItems) {
            noResults.classList.remove("no-items")
        } else {
            noResults.classList.add("no-items")
        }
    };

    //jQuery Version
    /*
    const searchField = $("#search input"),
        item = $(".cards-holder .card-item"),
        noResults = $(".cards-holder .no-result");

    searchField.on("keyup", (function () {
        const searchFieldValue = $(this).val().toLowerCase();

        if (searchFieldValue != "") {
            item.filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(searchFieldValue) > -1)
            })
        }

        if ($(".cards-holder .card-item:visible").length == 0) {
            noResults.addClass("no-items")
        } else {
            noResults.removeClass("no-items")
        }
        if (searchFieldValue == "") {
            noResults.removeClass('no-items');
            item.show();
        }
    }));
    */
}
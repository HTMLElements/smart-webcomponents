window.initPricing = function () {
    const buttonGroup = document.getElementById('buttonGroup'),
        monthlyPrices = [0, 39, 179],
        annualPrices = [0, 399, 1499];

    buttonGroup.addEventListener('change', function (event) {
        const prices = event.detail.indexes[0] === 0 ? monthlyPrices : annualPrices;

        Array.from(document.querySelectorAll('.js-price')).forEach((tag, index) => {
            tag.innerHTML = '$' + prices[index];
        });
    });
}
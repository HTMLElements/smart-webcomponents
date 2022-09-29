window.onload = function () {
    const email = document.getElementById('email'),
        password = document.getElementById('password'),
        signIn = document.getElementById('signIn'),
        tooltip = document.getElementById('tooltip'),
        submitForm = document.getElementById('submitForm');

    submitForm.addEventListener('submit', function (event) {
        const hasEmail = !!email.value.length,
            hasPassword = !!password.value.length;

        if (hasEmail && hasPassword) {
            tooltip.selector = null;
            tooltip.disabled = true;
            tooltip.close();
            return;
        }

        event.preventDefault();
        tooltip.disabled = false;

        if (!hasPassword) {
            tooltip.selector = password;
        }

        if (!hasEmail) {
            tooltip.selector = email;
        }

        tooltip.open();
    });

    tooltip.addEventListener('close', function () {
        tooltip.disabled = true;
        tooltip.selector = null;
    });
}
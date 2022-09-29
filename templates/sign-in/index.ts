/// <reference path="../../source/typescript/smart.elements.d.ts" />

import { PasswordTextBox, TextBox, Button, Tooltip } from "../../source/typescript/smart.elements";


﻿window.onload = function () {
    const email = <TextBox>document.getElementById('email'),
        password = <PasswordTextBox>document.getElementById('password'),
        signIn = <Button>document.getElementById('signIn'),
        tooltip = <Tooltip>document.getElementById('tooltip'),
        submitForm = <HTMLFormElement>document.getElementById('submitForm');

    submitForm.addEventListener('submit', function (event) {
        const hasEmail = !!email.value!.length,
            hasPassword = !!password.value!.length;

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
/// <reference path="../../source/typescript/smart.elements.d.ts" />

import {Splitter, Button} from "../../source/typescript/smart.elements"

﻿window.onload = function () {
    const dashboard = <Splitter>document.getElementById('dashboard'),
        expandBtn = <Button>document.getElementById('expandBtn'),
        collapseBtn = <Button>document.getElementById('collapseBtn');
        
    dashboard.hideBar(0);
    expandBtn.addEventListener('click', () => {
        dashboard.update(0, { size: 240 });
        dashboard.setAttribute('expanded', '');
    });
    collapseBtn.addEventListener('click', () => {
        dashboard.update(0, { size: 70 });
        dashboard.removeAttribute('expanded');
    });
}

/* Smart HTML Elements v6.0.0 (2020-Jan) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

function sortByMultipleColumns(a,c,b,d){if(!a||!Array.isArray(a)||0===a.length||!c||Array.isArray(c)&&0===c.length)return;"string"==typeof c&&(c=[c]);const e=[],f=[];b===void 0&&(b=[]);for(let g=0;g<c.length;g++)e[g]=void 0===b[g]||"asc"===b[g]||"ascending"===b[g]?1:-1,f[g]=getCompareFunction(a[0][c[g]]);return d?void d(a,c,b,f):void a.sort(function(d,a){for(let b=0;b<c.length;b++){const g=f[b](d[c[b]],a[c[b]]);if(0===g){if(c[b+1])continue;else if(d._index!==void 0)return(d._index-a._index)*e[b];return 0}return g*e[b]}})}
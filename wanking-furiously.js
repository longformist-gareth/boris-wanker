// ==UserScript==
// @name         Boris is a wanker
// @namespace    http://localhost
// @version      0.1
// @description  Boris Johnson is a wanker. Make that clear any time you see him mentioned.
// @author       John Bull
// @match        https://*/*
// @include     https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log(document.body.innerHTML);


document.body.innerHTML = document.body.innerHTML.replace(/Boris Johnson,/g, 'Boris Johnson, wanking furiously, ');
document.body.innerHTML = document.body.innerHTML.replace(/Boris Johnson\./g, 'Boris Johnson, wanking furiously. ');
document.body.innerHTML = document.body.innerHTML.replace(/Boris Johnson /g, 'Boris Johnson, wanking furiously, ');
})();

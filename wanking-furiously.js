// ==UserScript==
// @name         Boris is a wanker
// @namespace    https://github.com/longformist-gareth/boris-wanker/
// @version      0.1
// @description  Boris Johnson, wanking furiously, is a wanker. Make that clear any time you see him mentioned.
// @author       John Bull
// @match        https://*/*
// @include     https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log(document.body.innerHTML);


document.body.innerHTML = document.body.innerHTML.replace(/Boris Johnson, wanking furiously, /g, 'Boris Johnson, wanking furiously,  wanking furiously, ');
document.body.innerHTML = document.body.innerHTML.replace(/Boris Johnson\./g, 'Boris Johnson, wanking furiously,  wanking furiously. ');
document.body.innerHTML = document.body.innerHTML.replace(/Boris Johnson, wanking furiously, /g, 'Boris Johnson, wanking furiously,  wanking furiously, ');
})();

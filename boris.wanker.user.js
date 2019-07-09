// ==UserScript==
// @name         Boris is a wanker
// @namespace    https://github.com/longformist-gareth/boris-wanker/
// @version      0.1
// @description  Boris Johnson is a wanker. Make that clear any time you see him mentioned.
// @author       John Bull
// @match        https://*/*
// @include     https://*/*
// @grant        none
// @run-at      document-end
// @exclude     https://github.com/*
// @exclude     https://www.youtube.com/*
// @exclude     https://tweetdeck.twitter.com/*
// ==/UserScript==

(function() {
    'use strict';
document.body.innerHTML = document.body.innerHTML.replace(/Boris Johnson,/g, 'Boris Johnson, wanking furiously,');
document.body.innerHTML = document.body.innerHTML.replace(/Boris Johnson\./g, 'Boris Johnson, wanking furiously.');
document.body.innerHTML = document.body.innerHTML.replace(/Boris Johnson /g, 'Boris Johnson, wanking furiously, ');
})();

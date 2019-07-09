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
// @exclude     https://www.facebook.com//*
// ==/UserScript==

(function() {
  'use strict';
  var wanks = [
    "wanking furiously",
    "cock in hand",
    "pulling himself off",
    "tugging at his plonker",
    "spaffing up the wall"
  ]
  document.body.innerHTML = document.body.innerHTML.replace(
    /([Boris|Mr|Mr.] Johnson)([,\. ])/g, 
    function(match, name, ending){
      ending = ending == " "? ",": ending;
      return name + ", " + wanks[Math.floor(Math.random() * wanks.length)] + ending + " ";
    }
  );
})();

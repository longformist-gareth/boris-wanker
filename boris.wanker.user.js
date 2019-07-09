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
// @exclude     https://www.facebook.com/*
// @exclude     https://open.spotify.com/*
// ==/UserScript==

(function() {
	var textnodes = document.evaluate("//body//text()[not(ancestor::script) and not(ancestor::style)]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),
		node, text;
	for(var i = 0; i < textnodes.snapshotLength; i++) {
		node = textnodes.snapshotItem(i);
		text = node.data;
		text = text.replace(/Boris Johnson,/g, 'Boris Johnson, wanking furiously,');
		text = text.replace(/Boris Johnson\./g, 'Boris Johnson, wanking furiously.');
		text = text.replace(/Boris Johnson /g, 'Boris Johnson, wanking furiously, ');
		node.data = text;
	}
}).call(this);

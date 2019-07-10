// ==UserScript==
// @name         Brave Sir Boris
// @namespace    https://github.com/longformist-gareth/boris-wanker/
// @version      0.1
// @description  Boris Johnson ran away. He bravely ran away...
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
		text = text.replace(/Boris Johnson/g, 'Brave Sir Boris,');
		node.data = text;
	}
}).call(this);

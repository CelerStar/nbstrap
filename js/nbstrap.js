/*!
 * NBstrap v1.0.0
 * Copyright 2017-2018 NBuilder, Inc.
 * Licensed under MIT
 */
var nbuilderWindowHeight = 0;
var nbuilderTitlebarHeight = 0;
var nbuilderContentHeight = 0;

$(window).ready(function() {
	nbuilderWindowHeight = $(window).height();
	nbuilderTitlebarHeight = $(".nb-titlebar").height();
	nbuilderContentHeight = nbuilderWindowHeight - nbuilderTitlebarHeight;

	nbuilder_resize();
});

$(window).resize(function() {
	nbuilderWindowHeight = $(window).height();
	nbuilderTitlebarHeight = $(".nb-titlebar").height();
	nbuilderContentHeight = nbuilderWindowHeight - nbuilderTitlebarHeight;

	nbuilder_resize();
});

function nbuilder_resize() {
	$(".nb-window").height(nbuilderWindowHeight);
	$(".nb-content").height(nbuilderContentHeight);

}

document.onselectstart = function() {
	return false;
}
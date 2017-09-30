/*!
 * NBstrap v2.0.2
 * Copyright 2017-2018 NBuilder, Inc.
 * Licensed under MIT
 */
var nbuilderWindowHeight = 0; //窗体高度

var nbuilderWindowObject; //窗体对象
var nbuilderWindowMaxState = false; //大小对象
var nbuilderWindowBoderShadowState = false;
/*
 * 名称：页面 ready 事件
 * 输入：
 * 输出：
 * 描述：
 */

$(window).ready(function() {

	nbuilderWindowHeight = $(window).outerHeight(true);

	if($(".nb-window").hasClass("nb-boder-shadow")) {
		nbuilderWindowBoderShadowState = true;
	}

	nbuilder_resize();

	var gui;

	try {
		gui = require('nw.gui');
		console.log("NBuilder");
	} catch(e) {
		console.log("WEB");
	}

	if(gui) {
		nbuilderWindowObject = nw.Window.get();　　
//关闭窗体事件
$(".nb-win-close").click(function() {
	nbuilderWindowObject.close();
});

//最大化窗体事件
$(".nb-win-max").click(function() {
	if(nbuilderWindowMaxState == false) {
		nbuilderWindowObject.maximize();

	} else {
		nbuilderWindowObject.restore()

	}
});

//最小化窗体事件
$(".nb-win-min").click(function() {
	nbuilderWindowObject.minimize();

});
	} else {
		nbuilderWindowObject = null;　　
	}

	if(nbuilderWindowObject != null) {
		nbuilderWindowObject.on('maximize', function() {

			if(nbuilderWindowBoderShadowState == true) {
				$(".nb-window").removeClass("nb-boder-shadow");
				nbuilder_resize();
			}

			nbuilderWindowMaxState = true;

		});

		nbuilderWindowObject.on('restore', function() {

			if(nbuilderWindowBoderShadowState == true) {
				$(".nb-window").addClass("nb-boder-shadow");
				nbuilder_resize();
			}

			nbuilderWindowMaxState = false;
		});
	}

});

/*
 * 名称：页面 resize 事件
 * 输入：
 * 输出：
 * 描述：
 */
$(window).resize(function() {
	nbuilderWindowHeight = $(window).outerHeight(true);
	nbuilder_resize();
});

/*
 * 名称：刷新 标题栏 内容高度
 * 输入：
 * 输出：
 * 描述：
 */
function nbuilder_resize() {
	bodyOuterHeight = $(document.body).outerHeight(true) - $(document.body).height();
	$(".nb-window").height(nbuilderWindowHeight - bodyOuterHeight); //设置最大框架高度
}

/*
 * 名称： 
 * 输入：
 * 输出：
 * 描述：
 */
document.onselectstart = function() {
	return false;
}



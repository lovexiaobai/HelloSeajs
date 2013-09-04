define(function(require, exports, module) {
	var util = require("./util");
	var HelloSeajs = document.getElementById("hello-seajs");
	HelloSeajs.style.color = util.randomColor();
	window.setInterval(function() {
		HelloSeajs.style.color = util.randomColor();
	}, 2000);
});
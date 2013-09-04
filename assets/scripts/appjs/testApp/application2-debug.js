define("appjs/testApp/application2-debug", [ "./util-debug", "jquery-debug", "./jquery-tabs-debug" ], function(require, exports, module) {
    var util = require("./util-debug");
    var HelloSeajs = document.getElementById("hello-seajs");
    HelloSeajs.style.color = util.randomColor();
    window.setInterval(function() {
        HelloSeajs.style.color = util.randomColor();
    }, 2e3);
    var $ = require("jquery-debug");
    require("./jquery-tabs-debug")($);
    jQuery(function($) {
        $("#tab").tabs("#tabContent");
    });
});

define("appjs/testApp/util-debug", [], function(require, exports, module) {
    var util = {};
    var colorRange = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ];
    util.randomColor = function() {
        return "#" + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)];
    };
    module.exports = util;
});

define("appjs/testApp/jquery-tabs-debug", [], function(require, exports, module) {
    return function(jQuery) {
        (function($) {
            $.fn.tabs = function(content, options) {
                var opt = $.extend({}, $.fn.tabs.defaults, options);
                return this.each(function() {
                    $(this).find("[" + opt.dataTab + "]").on("click", function() {
                        var $that = $(this);
                        var tabName = $that.attr(opt.dataTab);
                        $that.addClass("current").siblings().removeClass("current");
                        $(content).find("[" + opt.dataTab + "]").removeClass("current").hide();
                        $(content).find("[" + opt.dataTab + "=" + tabName + "]").addClass("current").show();
                    });
                    var $that = $(this).find("[" + opt.dataTab + "]").eq(opt.dataTabIndex);
                    var tabName = $that.attr(opt.dataTab);
                    $that.addClass("current").siblings().removeClass("current");
                    $(content).find("[" + opt.dataTab + "]").removeClass("current").hide();
                    $(content).find("[" + opt.dataTab + "=" + tabName + "]").addClass("current").show();
                });
            };
            $.fn.tabs.defaults = {
                dataTab: "data-tab",
                dataTabIndex: 0
            };
        })(jQuery);
    };
});

define(function(require, exports, module) {
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
					$(content).find("[" + opt.dataTab + "]").removeClass("current").hide();;
					$(content).find("[" + opt.dataTab + "=" + tabName + "]").addClass("current").show();
				});
			};
			$.fn.tabs.defaults = {
				dataTab: 'data-tab',
				dataTabIndex: 0
			};
		})(jQuery);
	};
});
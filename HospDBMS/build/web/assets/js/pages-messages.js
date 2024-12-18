var Messages = function() {"use strict";
	var messageHeightHandler = function() {
		var $win = $(window);
		var page = $win;
		if(page.innerHeight() < $win.innerHeight()) {
			page = $(document);
		}
		var pageHeight = page.innerHeight() - $('header').outerHeight();
		$(".wrap-messages").css({
			height: pageHeight
		});

	};
	var resizeHandler = function(func, threshold, execAsap) {
		$(window).resize(function() {
			messageHeightHandler();
		});
	};
	return {
		init: function() {
			messageHeightHandler();
			resizeHandler();
		}
	};
}();

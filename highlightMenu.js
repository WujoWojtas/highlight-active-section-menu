"use strict";

var highlightMenu = function () {
	var my = {};
	
	my.activeClass = 'active';
	my.elementSelector = 'section';
	my.scrollTime = 1500;
	my.tollerance = 100;
	my.menuClickAdditionalFunction = ()=>{};
	
	function isElementInViewport (el) {
		var rect = el.getBoundingClientRect();
		return rect.top + rect.height < rect.height + my.tollerance;
	}
	
	function handler (e) {
		$(my.elementSelector).each(function(i,e){
			if(isElementInViewport(e)){
				$('li').removeClass(my.activeClass);
				var liId = i+1;
				$('li:nth-child(' + liId + ')').addClass(my.activeClass);
			}
		});
	}	
	
	my.menuEvent = function (elementsSelector) {
		$(elementsSelector).click(function(_){
			var liId = $('li').index($(this)[0]);
			var element = $(my.elementSelector)[liId];
			$('html, body').animate({
				scrollTop: $(element).offset().top
			}, my.scrollTime);
			my.menuClickAdditionalFunction();
		});
	};
	
	$(window).on('DOMContentLoaded load resize scroll', handler); 
	
	return my;
}();
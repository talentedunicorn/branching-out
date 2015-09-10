$(document).ready(function() {

var $window = $(window);


/**
 * Function to make main navigation fixed on scroll
 */
function fixedNavigation() {
	var $mainNav = $(".nav");
	
	$window.scroll(function() {
		if ($(this).scrollTop() > $mainNav.height()) {
			$mainNav.addClass('nav-fixed');
		} else {
			$mainNav.removeClass('nav-fixed');
		}
	});
}
	
/**
 * Init script
 */
function init() {
	fixedNavigation();
}

init();

});




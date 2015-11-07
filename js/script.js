$(document).ready(function() {

var $window = $(window);


/**
 * Function to make main navigation fixed on scroll
 */
function fixedNavigation() {
	var $mainNav = $(".nav");
	var $zineCoverOffset = $('.zine .zine__cover-image').offset().top;
	
	$window.scroll(function() {
		if ($(this).scrollTop() + -$zineCoverOffset > $mainNav.height()) {
			$mainNav.addClass('nav-fixed');
		} else {
			$mainNav.removeClass('nav-fixed');
		}
	});
}

/** 
 * Function to toggle menu
 */
function toggleMenu() {
	var $menu = $('.nav').find('.menu');
	var $menuToggle = $('.nav').find('.menu-toggle'); 
	var $menuItem = $('.nav').find('.menu__item');

	$menuToggle.click(function() {
		$menu.toggleClass('open');
	});
	
	$menuItem.click(function() {
		$menuToggle.click();
	});

	$('.sections').click(function() {
		if ($menu.hasClass('open')) {
			$menu.removeClass('open');
		}
	});

}
	
/**
 * Init script
 */
function init() {
	fixedNavigation();
	toggleMenu();
}

init();

});




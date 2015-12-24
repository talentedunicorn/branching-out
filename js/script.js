$(document).ready(function() {

var $window = $(window);


/**
 * Function to make main navigation fixed on scroll
 */
function fixedNavigation() {
	var $mainNav = $(".nav");
	var $zineCoverOffset = $('.zine .zine__cover-image').offset().top;
	
	$window.scroll(function() {
		if ($(this).scrollTop()) {
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
 * Function to toggle artist card
 */
function toggleCards() {
	var $artistWrapper = $('.artist-wrapper');
	var $artistToggle = $artistWrapper.find('.artist-name');
	var $close = $artistWrapper.find('.close');

	$artistToggle.click(function() {
		$(this).parents('.artist-wrapper').addClass('opened')
			.siblings('.artist-wrapper').removeClass('opened');
	});

	$close.click(function(e) {
		$(this).parents('.artist-wrapper').removeClass('opened');
	});


}
	
/**
 * Init script
 */
function init() {
	fixedNavigation();
	toggleMenu();
	toggleCards();
}

init();

});




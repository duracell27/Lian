$(function() {

	$('button.hamburger').click(function(){
		$(this).toggleClass("is-active");
	});

	$('.form-inline button').click(function(){
		$('input.form-control').toggleClass("none");
	});

	$('.carousel-home').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: true,
		navText: ['<div class="arrow"><i class="fas fa-angle-left"></i></div>','<div class="arrow"><i class="fas fa-angle-right"></i></div>'],
		autoHeight: true,
		dots: true,
	});


	$('.toggles button').click(function(){
		var get_id = this.id;
		if ($('.toggles button').hasClass('active')) {
			$('.toggles button').removeClass('active');
		}
		
		var get_current = $('.posts .' + get_id);
		$('.post').not(get_current).hide(500);
		get_current.show(500);
		$(this).addClass('active');
	});

	$('#all').click(function(){
		$('.post').show(500);
	});

});

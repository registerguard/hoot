$(window).ready(function() {
	var $owl = $(".owl-wrap");
	$owl.owlCarousel({
		items:1,
		margin:10,
		nav:true,
		loop:true,
		navText : ["<i class='fa fa-chevron-circle-left owl-nav-button'></i>", "<i class='fa fa-chevron-circle-right owl-nav-button'></i>"],
		autoHeight:true,
		//lazyLoad: true
	});
});

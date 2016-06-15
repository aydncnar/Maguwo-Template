$(document).ready(function() {

	new WOW().init();

	/*responsive menu begin*/
	var mainNav=$('nav.main');	
	var mnToggle=$('.menu-toggle');
	var windowSize;

	mnToggle.click(function(){
		mainNav.slideToggle();
	});


	$(window).resize(function() {
		windowSize=$(window).width();
		if (windowSize>=992) {
			mainNav.show();
		}else
		{
			mainNav.hide();
		}
	});	
	/*responsive menu end*/

	$('.slct-domain').click(function(){
	  $('.slct-domain > .items').slideToggle();
	  $('.slct-domain ul li').click(function(){
	    var selectItem=$(this).text();
	    $('.select-item ').html(selectItem);
	  })
	});


});
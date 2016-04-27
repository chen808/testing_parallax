// everytime window scrolls, do the following
$(window).scroll(function(){

	// wScroll wil contain how many pixels have been scrolled from top
	var wScroll = $(this).scrollTop();
	//console.log(wScroll);
	
	// selecting the logo (this will make it 'float' down)
	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	// selecting the foreground image (this will make it 'float' up)
	$('.foreground').css({
		'transform' : 'translate(0px, -'+ wScroll/40 +'%)'
	});









}) // end of (window) function
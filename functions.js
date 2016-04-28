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



	// =====================================

	// if the wScroll number is greater then the .language div container
	if(wScroll > $('.languages').offset().top - 500){ // <--- top - 500 so that icon can start fading in early

		$('.languages img').each(function(i){

			setTimeout(function(){
				$('.languages img').eq(i).addClass('is-showing');
			},150 * (i+1)); // <--- this makes it so each icon fades in one at a time
			
		});
	}



	// Project Section
	if(wScroll > $('.container3 h1').offset().top - 500){
		$('.container3 h1').addClass('animated fadeInDown');
	}









}) // end of (window) function
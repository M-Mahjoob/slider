$(document).ready(function(){
	//alert('Doc is loaded');
	//set options
	var speed = 500;
	var autoswitch = true;
	var autoswitch_speed = 4000;
	
	//add initial active class 
	$('.slide').first().addClass('active');
	//$('.slide').Second().addClass('active');
	//Hide all  slides
	$('.slide').hide();
	//show first slide
	$('.active').show();
	//next Handler
	$('#next').on('click', nextSlide);
	//Prev  Handler
	$('#prev').on('click', prevSlide);
	
	
	//Auto slider  Handler
	if(autoswitch == true){
		
		 setInterval(nextSlide,autoswitch_speed );
	}
	
//switch to the next slide
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		 if($('.oldActive').is(':last-Child')){
			 $('.slide').first().addClass('active');
		 } else {
			 $('.oldActive').next().addClass('active');
		 }
		 $('.oldActive').removeClass('oldActive');
		 $('.slide').fadeOut(speed);
		 $('.active').fadeIn(speed);
	}
	//switch to prev slide
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		 if($('.oldActive').is(':first-Child')){
			 $('.slide').last().addClass('active');
		 } else {
			 $('.oldActive').prev().addClass('active');
		 }
		 $('.oldActive').removeClass('oldActive');
		 $('.slide').fadeOut(speed);
		 $('.active').fadeIn(speed);
	}
	
});
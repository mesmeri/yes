$(function() {

/* Reviews */

	var reviews = $('#reviews__list'),
		reviewsRange = $('#reviewsRange');
	
	reviews.slick({ 
		infinite: false,
	  	speed: 500,
	  	arrows: false,
	  	responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        dots: true
		      }
		    }
		]
	});  
      
	reviewsRange.on("input change", function(e){
	e.preventDefault();
	   var slideNum = $(this).val(); 
	   reviews.slick('slickGoTo', slideNum - 1 );
	 });

	reviews.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  reviews.on('swipe', function(event, slick, direction){
		 reviewsRange.val((nextSlide + 1));
		});
	});

/* ------------------ Modal ------------------------ */


  $('.open-popup-link').magnificPopup();

/* ------------------ Form Submit ------------------ */

$('.sign-up__form').submit(function () {
	var th = $(this);
	$.ajax({
		type: 'POST',
		url: '/send.php',
		data: th.serialize()
	}).done(function () {
		$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
		setTimeout(function() {
			$(th).find('.success').removeClass('active').fadeOut();
			th.trigger('reset'), 3000
		})
	})
})
})
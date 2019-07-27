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

  // $('.mfp-close').on('click', function () {
  // 	alert(1);
  // 	$('.note').css('display', 'none');
  // 	$('.fields').show();
  // })



/* ------------------ Form Submit ------------------ */

})
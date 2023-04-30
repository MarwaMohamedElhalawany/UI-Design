$(document).ready(function(){
    $("#gallarySlider .owl-carousel").owlCarousel({
      items:3,
      margin:20,
      loop:true,
      autoplay:true,
    });
  });

  $(document).ready(function(){
    $("#testominial .owl-carousel").owlCarousel({
      items:1,
      nav:true,
      loop:true,
      autoplay:true,
    });
  });

//   $("#btnUp").click(function () {
//     $("html, body").animate({ scrollTop: 0 }, 1000)
// })

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
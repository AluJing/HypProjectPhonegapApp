/**	
	* Template Name: Intensely
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	1. HOVER DROPDOWN MENU
	2. BOOTSTRAP ACCORDION
	3. MAIN SLIDER (SLICK SLIDER)
	4. TESTIMONIAL SLIDER (SLICK SLIDER)
	5. SCROLL TOP BUTTON
	6. PRELOADER 
	7. WOW ANIMATION	
	
**/

jQuery(function($){

	
	/* ----------------------------------------------------------- */
	/*  1. HOVER DROPDOWN MENU
	/* ----------------------------------------------------------- */ 
	
	// for hover dropdown menu
  	$('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

  	/* ----------------------------------------------------------- */
	/*  2. BOOTSTRAP ACCORDION
	/* ----------------------------------------------------------- */ 
	
	$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
	$(this).prev().find(".fa").removeClass("fa-plus-square").addClass("fa-minus-square");
	});
	
	//The reverse of the above on hidden event:
	
	$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
	$(this).prev().find(".fa").removeClass("fa-minus-square").addClass("fa-plus-square");
	});	


	/* ----------------------------------------------------------- */
	/*  3. MAIN SLIDER (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.main-slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		accessibility: false,
		fade: true,
		cssEase: 'linear'
	});


	/* ----------------------------------------------------------- */
	/*  4. TESTIMONIAL SLIDER (SLICK SLIDER)
	/* ----------------------------------------------------------- */   

	jQuery('.testimonial-slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,		
		cssEase: 'linear'
	});


	/* ----------------------------------------------------------- */
	/*  5. SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */

	//Check to see if the window is top if not then display button

	$(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
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

	/* ----------------------------------------------------------- */
	/*  6. PRELOADER 
	/* ----------------------------------------------------------- */ 
	
	jQuery(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })

   
	/* ----------------------------------------------------------- */
	/*  7. WOW ANIMATION
	/* ----------------------------------------------------------- */ 

	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        live:         true,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init(); 
	
});
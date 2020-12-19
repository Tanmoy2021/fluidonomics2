(function($) {
    "use strict";

	//========================
    // Slider carousel
    //========================
    $('.slider-caro').nivoSlider({
        effect: 'random',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 800,
        pauseTime: 5000,
        startSlide: 0,
        directionNav: true,
        controlNavThumbs: false,
        pauseOnHover: false,
        manualAdvance: false
    });
    $(".nivo-prevNav").text("<");
    $(".nivo-nextNav").text(">");
	//======================
    // WoW Js
    //======================
    new WOW().init();
    /*-- sticky Header --*/
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
  });
  $('.search-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('search-active');
});
  
// back-to-top
$(window).on('scroll',function() {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
// scroll body to 0px on click
$('#back-to-top').on('click',function() {

    $('body,html').animate({
        scrollTop : 0
    }, 800);
    return false;
});


})(jQuery);
function openNav() {
	document.getElementById("navbarNavDropdown").style.width = "100%";
  }
  
  function closeNav() {
	document.getElementById("navbarNavDropdown").style.width = "0";
	window.location.reload();
  }


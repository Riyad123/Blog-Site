$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#loading').hide(); // will first fade out the loading animation 

});




$(document).ready(function(){
//function for slider
var slideHideNo=0;
var slideShowNo=1;
var refreshId = setInterval(slideThis,5000);
function slideThis(){
    slideHideNo++;
    slideShowNo++;
    $("#slide"+slideHideNo).hide("slide",{direction:"left"},1000);
    $("#slide"+slideShowNo).show("slide",{direction:"right"},1000);
    if(slideShowNo==4){
        slideShowNo=0;
    };
    if(slideHideNo==4){
        slideHideNo=0;
    };
  };
})
    
// Scroll function

$(document).ready(function(){
	

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.animateScroll').fadeIn();
		} else {
			$('.animateScroll').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.animateScroll').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});




//function for parallex scroll

$(document).ready(function(){
    
    $(window).scroll(function(){
    parra()
})

function parra(){
    var wscroll=$(window).scrollTop();
    

    if(wscroll>=300){
         $(".ContactCon").css("top",(wscroll-300)*(1)+"px")
    }
}
    
})




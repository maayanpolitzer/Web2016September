

$(document).ready(function(){
	
	// displaying/hiding sticky navigation.
	$("#about").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		}
	});
	
   // clicking on menu items scrolls to the right sections.
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
	  
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
		mobileNavClick();
        return false;
      }
    }
  });

  // animate the views...
  $("#fade-in-1").waypoint(function(direction){
	  if(direction == "down"){	  
		  $("#fade-in-1").removeClass(" animated fadeOutDown").addClass("animated fadeInUp");
	  }else{
		  $("#fade-in-1").removeClass("animated fadeInUp").addClass("animated fadeOutDown");
	  } 
  },{
	  offset: "70%"
  });
  
  
  // showing/hiding mobile nav icon and menu.
  $(".mobile-nav-icon").click(mobileNavClick);
	
});

function mobileNavClick(){
	$(".main-nav").slideToggle();
	var icon = $(".mobile-nav-icon i");
	if(icon.hasClass("ion-navicon-round")){
		icon.removeClass("ion-navicon-round");
		icon.addClass("ion-close-round");
	}else{
		icon.removeClass("ion-close-round");
		icon.addClass("ion-navicon-round");  
	}
}

/*$(document).ready(wow());

function wow(){
	alert("wow");
}
*/
/*
$(function(){
	alert("wiw");
});
*/




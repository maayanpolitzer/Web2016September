

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
		//mobileNavClick();
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
	
	
	// maps:
	var map = new GMaps({
		div: '.map',
		lat: 32.0870809,
		lng: 34.7884872,
		zoom: 15
	});
	
	map.addMarker({
		lat: 32.0870809,
		lng: 34.7884872,
		title: "our restaurant",
		infoWindow: {
			content: "<br/>Food place<br/>"
		}
	});
	
	navigator.geolocation.getCurrentPosition(function(position) {
		map.addMarker({
			lat: position.coords.latitude,
			lng: position.coords.longitude,
			title: "You",
			infoWindow: {
				content: "<br/>Your place<br/>"
			}
		});
	});
	/*
	function getLocation() {
		if (navigator.geolocation) {
			alert(navigator.geolocation.getCurrentPosition(showPosition));
		} else {
			alert("Geolocation is not supported by this browser.");
		}
}
	function showPosition(position) {
		alert("Latitude: " + position.coords.latitude +
		"Longitude: " + position.coords.longitude);
	}
	
	getLocation();
	*/
	
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




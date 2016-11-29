$(function(){
	
	var screenHeight = $(window).height();
	$('.fullheight').css('height', screenHeight);
	/*
	$('#featured .item img').each(function(){
		var imgSrc = $(this).attr('src');
		$(this).parent().css('background-image', 'url(' + imgSrc + ')');
		$(this).remove();
	});
	*/
	// adjust the screen height on window resize:
	$(window).resize(function(){
		screenHeight = $(window).height();
		$('.fullheight').css('height', screenHeight);
	});
	/*
	// indicators:
	for(var i = 0; i < 5; i++){
		var insertText = '<li data-target="featured" data-slide-to="' + i + '" ';
		if(i == 0){
			insertText += "class='active'";
		}
		insertText += "/>";
		$("#featured ol").append(insertText);
	}
	*/
	// start the img carousel:
	/*
	$('.carousel').carousel({
		pause:false
	});
	*/
	
});
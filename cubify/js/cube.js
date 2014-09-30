$(function() {

	$("#container2").oembed("http://www.flickr.com/photos/c_laurence/8118806854/");
	$("#container3").oembed("http://www.flickr.com/photos/alphageek/8114892660/");
	$("#container4").oembed("http://www.flickr.com/photos/lanagreystones/8116903504/");
	$("#container5").oembed("http://www.flickr.com/photos/noqontrol/8124524989/");
	$("#container6").oembed("http://www.flickr.com/photos/spw6156-steve_waterhouse/8119515587/");

	$(".oembed").oembed(null, {
		embedMethod : "append",
		maxWidth : 1024,
		maxHeight : 768,
		vimeo : {
			autoplay : false,
			width : 400,
			height : 400
		}
	});

	var yValue = 0;
	var xValue = 0;
	$('#right').on('click', function() {
		console.log('right');
		

		yValue = yValue - 90;
		$('.cube').css("transform", "rotateY(" + yValue + "deg)");
		$('.cube').css("-webkit-transform", "rotateY(" + yValue + "deg)");
		$('.cube').css("-moz-transform", "rotateY(" + yValue + "deg)");

	});
	
	
	$('#left').on('click', function() {
		console.log("adfa");
		yValue = yValue + 90;
		$('.cube').css('transform', 'rotateY(' + yValue + 'deg)')
		$('.cube').css('-webkit-transform', 'rotateY(' + yValue + 'deg)')
		$('.cube').css('-moz-transform', 'rotateY(' + yValue + 'deg)')

	});

	$('#up').on('click', function() {
		xValue = xValue + 90;
		$('.cube').css('transform', 'rotateX(' + xValue + 'deg)')
		$('.cube').css('-webkit-transform', 'rotateX(' + xValue + 'deg)')
		$('.cube').css('-moz-transform', 'rotateX(' + xValue + 'deg)')

	});
	$('#down').on('click', function() {
		xValue = xValue - 90;
		$('.cube').css('transform', 'rotateX(' + xValue + 'deg)')
		$('.cube').css('-webkit-transform', 'rotateX(' + xValue + 'deg)')
		$('.cube').css('-moz-transform', 'rotateX(' + xValue + 'deg)')

	});

	var widgetIframe = document.getElementById('sc-widget'), 
	widget = SC.Widget(widgetIframe), 
	newWidgetUrl = 'http://w.soundcloud.com/player/?url=api.soundcloud.com/users/emildigital/likes/', 
	cube = $('.audioplayer').get(0);
	//globala variabler

	
});

